import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding
} from '../../GlobalStyles'

const EliminarCuenta = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.cerrarSesin}>
      <View style={styles.cabezera}>
        <View style={styles.cabezera1}>
          <View>
            <View style={styles.cooliconParent}>
              <Pressable
                style={styles.coolicon}
                onPress={() => {
                  console.log('EC')
                  navigation.goBack()
                }}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require('../../assets/coolicon3.png')}
                />
              </Pressable>
              <Pressable
                style={styles.cerrarSesin1}
                onPress={() => {
                  console.log('EC')
                  navigation.goBack()
                }}
              >
                <Text style={[styles.cerrarSesin2, styles.cerrarSesin2Typo]}>
                  Mi suscripcion
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'stretch',
            height: '100%'
          }}
        >
          <View style={styles.texto}>
            <Text style={styles.estsSeguroQueContainer}>
              <Text style={styles.estsSeguroQue}>
                Estas seguro que quieres eliminar definitivamente tu cuenta de
                SpotsMatch?
              </Text>
            </Text>
            <View style={styles.boton}>
              <View style={[styles.loremIpsum, styles.loremIpsumFlexBox]}>
                <Text style={[styles.aceptar, styles.cerrarTypo]}>
                  Eliminar cuenta
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cerrarSesin2Typo: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH
  },
  cerrarTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupLayout: {
    height: 12,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  cerrarSesin2: {
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cerrarSesin1: {
    marginLeft: 9
  },
  cooliconParent: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  cabezera1: {
    justifyContent: 'center',
    marginTop: 30
  },
  estsSeguroQue: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  estsSeguroQueContainer: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  aceptar: {
    fontSize: FontSize.button_size,
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center'
  },
  loremIpsum: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  boton: {
    flexDirection: 'row',
    marginTop: 60
  },
  texto: {
    // height: 398,

    alignItems: 'center'
  },
  cabezera: {
    // marginLeft: -180,
    // top: 60
    // left: '50%',
    // width: 360,
    // position: 'absolute'
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    top: 0,
    height: 12
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: 'absolute'
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  battery: {
    width: 25,
    right: 0,
    top: 0,
    height: 12
  },
  wifiIcon: {
    width: 16,
    height: 11
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11
  },
  group: {
    top: 7,
    width: 68,
    right: 0
  },
  time: {
    marginTop: -9.55,
    top: '50%',
    left: 4,
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    left: 0,
    top: 0
  },
  groupParent: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: 'absolute'
  },
  cerrarSesin: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: '100%',
    paddingHorizontal: 15,
    flex: 1
  }
})

export default EliminarCuenta
