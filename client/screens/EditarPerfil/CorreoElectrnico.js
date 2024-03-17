import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'
import Input from '../../components/Input'

const CorreoElectrnico = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.correoElectrnico}>
      <View style={styles.cabezeraParent}>
        <View style={styles.loremIpsumFlexBox}>
          <Pressable
            style={styles.coolicon}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../../assets/coolicon3.png')}
            />
          </Pressable>
          <Pressable
            style={styles.correoElecrnico}
            onPress={() => navigation.goBack()}
          >
            <Text
              style={[styles.correoElecrnico1, styles.correoElecrnico1Typo]}
            >
              Correo elecrónico
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <Input title="E-mail" placeholderText="loremipsum@loremipsum.com" />
        <Input title="Nuevo e-mail" />
        <Input title="Repetir nuevo e-mail" />
      </View>

      <View style={styles.boton}>
        <View style={[styles.loremIpsum, styles.loremIpsumFlexBox]}>
          <Text style={styles.aceptar}>Aceptar</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  correoLayout: {
    maxHeight: '100%',
    position: 'absolute'
  },
  loremIpsumFlexBox: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  correoElecrnico1Typo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  emailTypo: {
    height: 23,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  starusPosition: {
    top: 10,
    left: 15
  },
  borderPosition: {
    borderStyle: 'solid',
    top: 0,
    position: 'absolute'
  },
  rectanglePosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  correoElectrnicoChild: {
    height: '112.16%',
    width: '980.1%',
    top: '-9.15%',
    right: '-413.18%',
    bottom: '-3%',
    left: '-466.92%',
    maxWidth: '100%',
    opacity: 0.2,
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  correoElecrnico1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  correoElecrnico: {
    marginLeft: 9
  },

  email1: {
    width: 360
  },
  loremipsumloremipsumcom: {
    color: Color.gREY2SPORTSMATCH,
    width: 313,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  groupChild: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    height: 40,
    borderRadius: Border.br_81xl,
    width: 360,
    left: 0
  },
  loremipsumloremipsumcomParent: {
    alignSelf: 'stretch',
    flex: 1
  },
  emailGroup: {
    height: 63,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  emailInner: {
    height: 63,
    width: 360,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  email: {
    height: 63,
    width: 360
  },
  nuevoEmail: {
    alignSelf: 'stretch'
  },
  rectangleWrapper: {
    width: 360,
    flex: 1
  },
  nuevoEmasiol: {
    marginTop: 10,
    height: 63,
    width: 360
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  loremIpsum: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    alignSelf: 'stretch',
    flex: 1
  },
  boton: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 60
  },
  frameParent: {
    marginTop: 64
  },
  cabezeraParent: {
    marginTop: 30,
    marginLeft: 15
    // left: 15
  },
  correoElectrnicoItem: {
    marginLeft: -74,
    top: 831,
    left: '50%',
    width: 148
  },
  rectangleView: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
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
    height: 12,
    top: 0
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
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: 'absolute'
  },
  time: {
    marginTop: -9.55,
    top: '50%',
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    top: 10,
    left: 15
  },
  correoElectrnico: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default CorreoElectrnico
