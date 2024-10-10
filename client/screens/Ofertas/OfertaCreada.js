import React, { useContext } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding
} from '../../GlobalStyles'

import CustomHeaderBack from '../../components/CustomHeaderBack'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'

const OfertaCreada = ({ route }) => {
  const navigation = useNavigation()
  const promotion = route?.params?.promotion

  return (
    <SafeAreaView style={styles.cerrarSesin}>
      <CustomHeaderBack
        onBack={
          !route?.params?.post
            ? () => navigation.navigate('OfertasEmitidas')
            : () =>
                navigation.reset({
                  index: 0,
                  history: false,
                  routes: [{ name: 'ScreenPrincipal' }]
                })
        }
        header={!route?.params?.post ? 'Ofertas' : 'Promocionar'}
      ></CustomHeaderBack>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'stretch',
          flex: 1
        }}
      >
        <View style={styles.texto}>
          <Text style={styles.estsSeguroQueContainer}>
            {!route?.params?.post
              ? '¡La oferta se ha creado correctamente!'
              : '¡La publicación se ha creado correctamente!'}
          </Text>
          <Text style={styles.estsSeguroQueContainer}>
            {promotion && promotion === 1 && 'Se promocionará durante 2 días'}
            {promotion && promotion === 2 && 'Se promocionará durante 5 días'}
            {promotion && promotion === 3 && 'Se promocionará durante 15 días'}
          </Text>
        </View>
      </View>
      {!route?.params?.post && (
        <View style={styles.boton}>
          <TouchableOpacity
            style={[styles.loremIpsum, styles.loremIpsumFlexBox]}
            onPress={() => {
              navigation.navigate('ConfigurarAnuncio')
            }}
          >
            <Text style={[styles.aceptar, styles.cerrarTypo]}>
              Crear nueva oferta
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
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
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  boton: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 20,
    paddingHorizontal: 15,
    width: '100%'
  },
  texto: {
    // height: 398,

    alignItems: 'center',
    marginHorizontal: 20
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
    flex: 1
  }
})

export default OfertaCreada
