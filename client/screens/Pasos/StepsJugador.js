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
import { useSelector } from 'react-redux'
import Paso1 from './Paso1'

const StepsJugador = () => {
  const navigation = useNavigation()

  const { isSportman } = useSelector((state) => state.users)

  const [stepsIndex, setstepsIndex] = useState(1)

  //   const hadleIndex = (value) => {
  //     if (isSportman) {
  //       navigation.navigate('Paso1')
  //     } else {
  //       if (value === 'add') {
  //         if (stepsIndex <= 2) {
  //           setstepsIndex((prev) => prev + 1)
  //         } else {
  //           navigation.navigate('SiguiendoJugadores')
  //           // navigation.navigate('ExplorarClubs')
  //         }
  //       } else {
  //         if (stepsIndex >= 2) {
  //           setstepsIndex((prev) => prev - 1)
  //         } else {
  //           navigation.goBack()
  //         }
  //       }
  //     }
  //   }

  const hadleIndex = (value) => {
    if (value === 'add') {
      if (stepsIndex <= 2) {
        setstepsIndex((prev) => prev + 1)
      } else {
        setstepsIndex((prev) => prev - 1)
      }
    }
  }

  const ViewComponent = (index) => {
    switch (index) {
      case 1:
        return <Paso2Jugador />
      case 2:
        return <Paso1 />
      case 3:
        return <EscogerDeporte1 />
      default:
        return null
    }
  }

  return (
    <View style={styles.escogerDeporte}>
      <Image
        style={styles.escogerDeporteChild}
        contentFit="cover"
        source={require('../../assets/group-2412.png')}
      />
      <View>
        <View style={{ justifyContent: 'flex-start' }}>
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
          <View style={{ marginTop: 100 }}>
            <Text style={styles.paso2}>Paso {stepsIndex}</Text>
            <Text style={styles.detallesDelClub}>
              {stepsIndex === 1 ? 'Escoge tu deporte' : 'Detalles del club'}
            </Text>
          </View>
          <Lines index={stepsIndex} />
        </View>

        <View>{ViewComponent(stepsIndex)}</View>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => hadleIndex('add')}
        >
          <Text style={styles.nextText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
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
    right: 30
  },
  escogerDeporteChild: {
    width: '110%',
    height: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: Color.bLACK1SPORTSMATCH,
    paddingHorizontal: 15
  },
  touchable: {
    marginVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs
  },
  nextText: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH
  }
})

export default StepsJugador
