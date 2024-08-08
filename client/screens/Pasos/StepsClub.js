import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  BackHandler,
  SafeAreaView
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import Lines from '../../components/Lines'
import EscogerDeporte2 from './EscogerDeporte2'
import EscogerDeporte1 from './EscogerDeporte1'
import Paso2Jugador from './Paso2Jugador'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { createClub, getClub } from '../../redux/actions/club'
import { Context } from '../../context/Context'
import { updateUserClubData } from '../../redux/actions/users'
import { clearUser, setMainColor } from '../../redux/slices/users.slices'
import { setColor } from '../../utils/handles/HandlerSportColor'

const StepsClub = () => {
  const navigation = useNavigation()
  const {
    coverImage,
    setCoverImage,
    profileImage,
    setProfileImage,
    provisoryProfileImage,
    setProvisoryProfileImage,
    provisoryCoverImage,
    setProvisoryCoverImage
  } = useContext(Context)
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { sport } = useSelector((state) => state.sports)

  const [stepsIndex, setstepsIndex] = useState(1)
  const [sportS, setSportS] = useState('')
  const { height, width } = useWindowDimensions()
  const [sportColor, setSportColor] = useState('#00F0FF')

  const [clubValues, setClubValues] = useState({
    name: '',
    city: '',
    country: '',
    field: '',
    year: 0,
    capacity: 0,
    description: ''
  })

  useEffect(() => {
    const backAction = () => {
      // Despacha tu acción de Redux aquí
      dispatch(clearUser())
      navigation.goBack()
      return true // Indica que el evento fue manejado
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove() // Remueve el listener al desmontar el componente
  }, [dispatch])

  useEffect(() => {
    const color = setColor(sportS.name)
    setSportColor(color)
  }, [sportS])

  const handleRegister = async () => {
    clubValues.img_perfil = profileImage || ''
    clubValues.img_front = coverImage || ''
    const data = {
      userId: user.user.id,
      clubData: { ...clubValues, sport: sportS.name },
      sportId: sportS.id
    }
    // console.log('data from handleRegister: ', data)
    await dispatch(createClub(data))
      .then((response) => {
        console.log(response, 'handle')
        dispatch(setMainColor(setColor(response.payload.sports[0].name)))
        dispatch(getClub(response.payload.id))
        dispatch(
          updateUserClubData({
            id: response.meta.arg.userId,
            data: response.meta.arg.clubData
          })
        )
          .then((responde) => {
            if (responde.payload) {
              return navigation.reset({
                index: 0,
                history: false,
                routes: [{ name: 'SiguiendoJugadores' }]
              })
            }
          })
          .catch((error) => {
            console.error('Error updating user club data:', error)
          })
      })

      .catch((error) => {
        console.error('Error creating club:', error)
      })
  }

  const ViewComponent = (index) => {
    switch (index) {
      case 1:
        return (
       <View style={{paddingVertical:20}}>
           <Paso2Jugador selectedSport={sportS} setSelectedSport={setSportS} />
       </View>
        )
      case 2:
        return (
            <EscogerDeporte2
              clubValues={clubValues}
              setClubValues={setClubValues}
            />
        )
      case 3:
        return (
          <EscogerDeporte1
            color={sportColor}
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            coverImage={coverImage}
            setCoverImage={setCoverImage}
            provisoryCoverImage={provisoryCoverImage}
            setProvisoryCoverImage={setProvisoryCoverImage}
            provisoryProfileImage={provisoryProfileImage}
            setProvisoryProfileImage={setProvisoryProfileImage}
          />
        )
      default:
        return null
    }
  }

  const back = async () => {
    await dispatch(clearUser())
    navigation.goBack()
  }

  return (
    <SafeAreaView
      style={{
        ...styles.escogerDeporte,
        height: height,
        width: width,
        flex: 1,
        paddingTop: 20
      }}
    >
      {stepsIndex == 1 && (
        <Image
          style={{
            ...styles.escogerDeporteChild
          }}
          contentFit="cover"
          source={require('../../assets/tudeportefondo.png')}
        />
      )}
      {stepsIndex > 1 && (
        <Image
          style={{
            ...styles.escogerDeporteChild
          }}
          contentFit="cover"
          source={require('../../assets/sobretifondo.png')}
        />
      )}
      <View style={{ ...styles.atrsParent }}>
        <Image
          style={styles.coolicon}
          contentFit="cover"
          source={require('../../assets/coolicon.png')}
        />
        <Pressable
          onPress={() =>
            stepsIndex === 1 ? back() : setstepsIndex((prev) => prev - 1)
          }
        >
          <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
        </Pressable>
      </View>
      <View style={{ marginTop: -30 }}>
        <Text style={{ ...styles.paso2, color: sportColor }}>
          Paso {stepsIndex}
        </Text>
        <Text style={styles.detallesDelClub}>
          {stepsIndex === 1 ? 'Escoge tu deporte' : 'Detalles del club'}
        </Text>
      </View>
      <Lines
        color={sportColor}
        club={true}
        index={stepsIndex}
        selectedSport={sportS.name}
      />

      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{paddingBottom:20}}
      >
        {ViewComponent(stepsIndex)}
      </ScrollView>
        <View style={{bottom:0,width:"100%",paddingVertical:20}}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              stepsIndex === 3
                ? handleRegister()
                : setstepsIndex((prev) => prev + 1)
            }}
          >
            <Text style={styles.nextText}>Siguiente</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  detallesDelClub: {
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: '500',
    width: '100%',
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  paso2: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: '100%',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  atrs: {
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  coolicon: {
    height: 15,
    width: 10,
    marginRight: 8
  },
  atrsParent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    top: 0,
    justifyContent: 'flex-end',
    right: 20,
    marginTop: 5,
    marginBottom: 30
  },
  escogerDeporteChild: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  nextText: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '94%',
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs
  }
})

export default StepsClub
