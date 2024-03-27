import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
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
import { createClub } from '../../redux/actions/club'

const StepsClub = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  // const { sport } = useSelector((state) => state.sports)

  const [stepsIndex, setstepsIndex] = useState(1)
  const [clubValues, setClubValues] = useState({
    name: '',
    city: '',
    country: '',
    field: '',
    year: '',
    capacity: '',
    description: ''
    // sport
  })

  const hadleIndex = (value) => {
    if (value === 'add') {
      if (stepsIndex <= 2) {
        if (clubValues.name) {
          const data = {
            userId: user.user.id,
            clubData: clubValues
          }
          dispatch(createClub(data))
        }
        setstepsIndex((prev) => prev + 1)
      } else {
        navigation.navigate('SiguiendoJugadores')
      }
    } else {
      if (stepsIndex >= 2) {
        setstepsIndex((prev) => prev - 1)
      } else {
        navigation.goBack()
      }
    }
  }

  const ViewComponent = (index) => {
    switch (index) {
      case 1:
        return <Paso2Jugador />
      case 2:
        return (
          <EscogerDeporte2
            clubValues={clubValues}
            setClubValues={setClubValues}
          />
        )
      case 3:
        return <EscogerDeporte1 />
      default:
        return null
    }
  }

  return (
    <View style={styles.escogerDeporte}>
      <ScrollView>
        <Image
          style={styles.escogerDeporteChild}
          contentFit="cover"
          source={require('../../assets/group-2412.png')}
        />
        <View style={styles.atrsParent}>
          <Image
            style={styles.coolicon}
            contentFit="cover"
            source={require('../../assets/coolicon.png')}
          />
          <Pressable onPress={() => hadleIndex('minus')}>
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.paso2}>Paso {stepsIndex}</Text>
          <Text style={styles.detallesDelClub}>
            {stepsIndex === 1 ? 'Escoge tu deporte' : 'Detalles del club'}
          </Text>
        </View>
        <Lines index={stepsIndex} />

        {ViewComponent(stepsIndex)}

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => hadleIndex('add')}
        >
          <Text style={styles.nextText}>Siguiente</Text>
        </TouchableOpacity>
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
    top: 60,
    justifyContent: 'flex-end',
    right: 30,
    marginBottom: 100
  },
  escogerDeporteChild: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    flex: 1,
    overflow: 'hidden',
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
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs
  }
})

export default StepsClub
