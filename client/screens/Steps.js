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
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import Lines from '../components/Lines'
import EscogerDeporte2 from './EscogerDeporte2'
import EscogerDeporte1 from './EscogerDeporte1'
import Paso2Jugador from './Paso2Jugador'
import { useNavigation } from '@react-navigation/core'

const Steps = () => {
  const navigation = useNavigation()
  const [stepsIndex, setstepsIndex] = useState(1)

  const hadleIndex = (value) => {
    if (value === 'add') {
      if (stepsIndex <= 2) {
        setstepsIndex((prev) => prev + 1)
      } else {
        // navigation.navigate('SiguiendoJugadores')
        navigation.navigate('ExplorarClubs')
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
        return <EscogerDeporte2 />
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
          source={require('../assets/group-2412.png')}
        />
        <View style={styles.atrsParent}>
          <Image
            style={styles.coolicon}
            contentFit="cover"
            source={require('../assets/coolicon.png')}
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

        {ViewComponent(stepsIndex)}

        <TouchableOpacity
          style={{
            marginVertical: 30,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Color.wHITESPORTSMATCH,
            borderRadius: Border.br_81xl
          }}
          onPress={() => hadleIndex('add')}
        >
          <Text
            style={{
              fontSize: FontSize.button_size,
              fontWeight: '700',
              color: Color.bLACK1SPORTSMATCH
            }}
          >
            Siguiente
          </Text>
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
    right: 30
  },
  escogerDeporteChild: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default Steps
