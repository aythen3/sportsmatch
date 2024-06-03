import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView
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
  const [sportS, setSportS] = useState("")

  const [clubValues, setClubValues] = useState({
    name: '',
    city: '',
    country: '',
    field: '',
    year: '',
    capacity: '',
    description: ''
  })

  const handleRegister = async () => {
    if (profileImage && coverImage) {
      clubValues.img_perfil = profileImage
      clubValues.img_front = coverImage
      const data = {
        userId: user.user.id,
        clubData: clubValues,
        sportId: sport.id
      }
      // console.log('data from handleRegister: ', data)
      await dispatch(createClub(data))
        .then((response) => {
          console.log(
            'userData after club creation:',
            response.meta.arg.clubData
          )
          dispatch(getClub(response.payload.id))
          dispatch(
            updateUserClubData({
              id: response.meta.arg.userId,
              data: response.meta.arg.clubData
            })
          ).catch((error) => {
            console.error('Error updating user club data:', error)
          })
        })
        .then(() => {
          navigation.navigate('SiguiendoJugadores')
        })
        .catch((error) => {
          console.error('Error creating club:', error)
        })
    }
  }

  const ViewComponent = (index) => {
    switch (index) {
      case 1:
        return <Paso2Jugador selectedSport={sportS} setSelectedSport={setSportS} />
      case 2:
        return (
          <ScrollView contentContainerStyle={{paddingBottom:120 }}>
            <EscogerDeporte2
              clubValues={clubValues}
              setClubValues={setClubValues}
            />

          </ScrollView>
        )
      case 3:
        return (
          <EscogerDeporte1
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

  return (
    <View style={{ ...styles.escogerDeporte }}>
      <ScrollView contentContainerStyle={{ height: "100%" }} keyboardShouldPersistTaps={'always'}>
        <Image
          style={{
            ...styles.escogerDeporteChild
          }}
          contentFit="cover"
          source={require('../../assets/group-2412.png')}
        />
        <View style={{ ...styles.atrsParent }}>
          <Image
            style={styles.coolicon}
            contentFit="cover"
            source={require('../../assets/coolicon.png')}
          />
          <Pressable
            onPress={() =>
              stepsIndex === 1
                ? navigation.goBack()
                : setstepsIndex((prev) => prev - 1)
            }
          >
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </Pressable>
        </View>
        <View style={{ marginTop: -30 }}>
          <Text style={styles.paso2}>Paso {stepsIndex}</Text>
          <Text style={styles.detallesDelClub}>
            {stepsIndex === 1 ? 'Escoge tu deporte' : 'Detalles del club'}
          </Text>
        </View>
        <Lines club={true} index={stepsIndex} />

        {ViewComponent(stepsIndex)}
        <View style={{height:"auto",width:"100%",backgroundColor:"black",position:"absolute",bottom:0}}>
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
      </ScrollView>
    </View>
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
    marginBottom: 50
  },
  escogerDeporteChild: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    flex: 1,
    height: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
    paddingHorizontal: 15
  },
  nextText: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH
  },
  touchable: {

    marginVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
   
    width: "100%",
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs
  }
})

export default StepsClub
