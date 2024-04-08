import React, { useEffect } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Border } from '../../GlobalStyles'

const PantallaInicio = () => {
  const navigation = useNavigation()

  const navigateToOtraPantalla = () => {
    navigation.navigate('LoginSwitch')
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigateToOtraPantalla()
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <View style={styles.pantallaInicio}>
      <Image
        style={styles.liniasAbajoIcon}
        contentFit="cover"
        source={require('../../assets/lineas.png')}
      />
      <View style={styles.logotipotagline}>
        <View style={styles.logotipo}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../../assets/logotipo.png')}
          />
        </View>
        <Text style={[styles.tagline, styles.timeFlexBox]}>
          La primera red social que conecta clubes y deportistas
        </Text>
      </View>
      <Image
        style={styles.liniasimagenIcon}
        contentFit="cover"
        source={require('../../assets/liniasimagen.png')}
      />
      <View style={[styles.uxIphone, styles.iphonePosition]}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require('../../assets/cap.png')}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require('../../assets/wifi.png')}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require('../../assets/cellular-connection.png')}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timeFlexBox: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  iphonePosition: {
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
  borderPosition: {
    top: 0,
    height: 12
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  liniasAbajoIcon: {
    top: 450,
    left: -100,
    width: 400,
    height: 300,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  logotipo: {
    width: 298,
    height: 70
  },
  tagline: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: FontFamily.t4TEXTMICRO,
    width: 202,
    marginTop: 35
  },
  logotipotagline: {
    top: 240,
    left: 46,
    alignItems: 'center',
    position: 'absolute'
  },
  liniasimagenIcon: {
    top: -77,
    left: -240,
    width: 900,
    height: 340,
    position: 'absolute'
  },
  uxIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    position: 'absolute'
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
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7,
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
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    top: 10,
    left: 15,
    height: 24
  },
  uxIphone: {
    display: 'none'
  },
  pantallaInicio: {
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default PantallaInicio
