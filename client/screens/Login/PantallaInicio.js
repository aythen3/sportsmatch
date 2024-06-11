import React, { useEffect } from 'react'
import { Image } from 'expo-image'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, FontSize, FontFamily, Border } from '../../GlobalStyles'
import { useDispatch } from 'react-redux'
import { getAllPositions } from '../../redux/actions/positions'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'

const PantallaInicio = () => {
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const navigateToOtraPantalla = () => {
    navigation.navigate('LoginSwitch')
  }

  useEffect(() => {
    dispatch(getAllPositions())
    const timeoutId = setTimeout(() => {
      navigateToOtraPantalla()
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <SafeAreaView style={styles.pantallaInicio}>
      {isFocused && (
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      )}
      <Image
        style={styles.liniasAbajoIcon}
        contentFit="cover"
        source={require('../../assets/inicio.png')}
      />
    </SafeAreaView>
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
    width: "100%",
    height: "100%",
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
