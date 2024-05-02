import React, { useState } from 'react'
import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Paso2Jugador from './Paso2Jugador'
import { useNavigation } from '@react-navigation/core'
import Lines from '../../components/Lines'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'

const StepsJugador = () => {
  const navigation = useNavigation()

  const [stepsIndex, setstepsIndex] = useState(1)

  const hadleIndex = (value) => {
    if (value === 'add') {
      if (stepsIndex === 1) {
        navigation.navigate('Paso1')
      } else {
        if (stepsIndex <= 2) {
          setstepsIndex((prev) => prev + 1)
        } else {
          setstepsIndex((prev) => prev - 1)
        }
      }
    }
  }

  const ViewComponent = (index) => {
    switch (index) {
      case 1:
        return <Paso2Jugador />
      default:
        return null
    }
  }

  return (
    <View
      style={{
        flex: 1,
        overflow: 'hidden',
        backgroundColor: Color.bLACK1SPORTSMATCH,
        paddingHorizontal: 15
      }}
    >
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <Image
          style={{ width: '110%', height: '100%', position: 'absolute' }}
          contentFit="cover"
          source={require('../../assets/group-2412.png')}
        />
        <View>
          <View style={{ justifyContent: 'flex-start' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                marginTop: 0,
                paddingRight: 20,
                justifyContent: 'flex-end'
              }}
            >
              <Image
                style={{ height: 15, width: 10, marginRight: 8 }}
                contentFit="cover"
                source={require('../../assets/coolicon.png')}
              />
              <Pressable onPress={() => hadleIndex('minus')}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: Color.gREY2SPORTSMATCH,
                    fontSize: FontSize.t2TextSTANDARD_size,
                    fontFamily: FontFamily.t4TEXTMICRO
                  }}
                >
                  Atrás
                </Text>
              </Pressable>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: FontSize.t1TextSMALL_size,
                  lineHeight: 17,
                  color: Color.bALONCESTO,
                  width: '100%',
                  textAlign: 'center',
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                Paso {stepsIndex}
              </Text>
              <Text
                style={{
                  fontSize: FontSize.size_9xl,
                  lineHeight: 32,
                  fontWeight: '500',
                  width: '100%',
                  color: Color.wHITESPORTSMATCH,
                  textAlign: 'center',
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                {stepsIndex === 1 && 'Escoge tu deporte'}
              </Text>
            </View>
            <Lines index={stepsIndex} />
          </View>

          {ViewComponent(stepsIndex)}

          <TouchableOpacity
            style={{
              marginVertical: 30,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: Color.wHITESPORTSMATCH,
              borderRadius: Border.br_81xl,
              paddingHorizontal: Padding.p_81xl,
              paddingVertical: Padding.p_3xs
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
        </View>
      </ScrollView>
    </View>
  )
}

export default StepsJugador
