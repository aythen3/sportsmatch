import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  Modal
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, Border, FontSize, Color, Padding } from '../GlobalStyles'
import TusMatchsDetalle from './TusMatchsDetalle'

const TusMatchs = () => {
  const navigation = useNavigation()
  const [details, setDetails] = useState(false)

  return (
    <View style={styles.tusMatchs}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          marginLeft: 15,
          alignItems: 'center',
          gap: 10
        }}
      >
        <Pressable style={styles.coolicon} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon1, styles.iconGroupLayout]}
            contentFit="cover"
            source={require('../assets/coolicon4.png')}
          />
        </Pressable>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.tusMatchs2Typo}>Tus Matchs</Text>
        </Pressable>
      </View>

      <View style={[styles.groupContainer, styles.groupContainerSpaceBlock]}>
        <Image
          style={styles.frameChild1}
          contentFit="cover"
          source={require('../assets/group-428.png')}
        />
        <TextInput
          style={[styles.posicnDeJuego, styles.posicnDeJuegoTypo]}
          placeholderTextColor={Color.gREY2SPORTSMATCH}
          placeholder="Buscar"
        />
      </View>

      <Text style={[styles.nuevosMatchs, styles.buscarTypo]}>
        Nuevos matchs
      </Text>

      <View style={styles.targetaClub}>
        <Pressable style={styles.fondoPastilla}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require('../assets/fondo-pastilla.png')}
          />
        </Pressable>
        <Pressable
          style={styles.texto}
          onPress={() => {
            setDetails(true)
          }}
        >
          <View style={styles.escudo}>
            <Image
              style={[styles.escudoChild, styles.iconGroupLayout]}
              contentFit="cover"
              source={require('../assets/ellipse-762.png')}
            />
            <Image
              style={[
                styles.logoUem21RemovebgPreview1Icon,
                styles.groupChildLayout
              ]}
              contentFit="cover"
              source={require('../assets/logo-uem21removebgpreview-12.png')}
            />
          </View>
          <Text
            style={[styles.clubBasquetLametlla, styles.tusMatchs2Typo]}
          >{`Club Basquet L’ametlla 
de Mar`}</Text>
        </Pressable>
      </View>
      {/* 
      <Modal visible={details} transparent={true} animationType="slide">
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TusMatchsDetalle onClose={() => setDetails(false)} />
        </View>
      </Modal> */}

      <Modal visible={details} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1
            // justifyContent: 'center',
            // alignItems: 'center'
            // paddingHorizontal: 20
          }}
        >
          <TusMatchsDetalle onClose={() => setDetails(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  buscarTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupContainer: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    height: 42,
    borderWidth: 1,
    paddingHorizontal: Padding.p_2xs,
    borderStyle: 'solid',
    flexDirection: 'row',
    marginTop: 30
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs
  },
  posicnDeJuego: {
    marginLeft: 6,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'left',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  posicnDeJuegoTypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  iconGroupLayout: {
    maxHeight: '100%',
    maxWidth: '100%'
  },
  groupChildLayout: {
    borderRadius: Border.br_81xl,
    height: '100%'
  },
  tusMatchs2Typo: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500'
  },
  innerChildPosition: {
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupItemPosition: {
    height: 34,
    left: 0,
    width: 390,
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
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%'
  },
  iconPosition: {
    bottom: '33.33%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  lineIconLayout: {
    width: 0,
    maxHeight: '100%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  menuClubChild2Layout: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  nuevosMatchs: {
    fontSize: FontSize.button_size,
    marginTop: 20,
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  iconLayout: {
    height: '100%',
    width: '100%',
    borderRadius: 5
  },
  fondoPastilla: {
    height: 85,
    zIndex: 0
  },
  escudoChild: {
    height: '100%',
    width: '100%'
  },
  logoUem21RemovebgPreview1Icon: {
    width: '77.78%',
    right: '11.11%',
    left: '11.11%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute'
  },
  escudo: {
    width: 45,
    height: 45
  },
  clubBasquetLametlla: {
    // width: 183,
    // height: 61,
    marginLeft: 9
  },
  texto: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: [{ translateY: -30 }]
  },
  targetaClub: {
    marginTop: 14,
    width: '100%',
    position: 'relative'
  },
  informacion: {
    top: 162,
    left: 15,
    position: 'absolute'
  },
  icon1: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 18
  },
  groupChild: {
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    bottom: '0%',
    top: '0%',
    height: '100%',
    left: '0%',
    right: '0%',
    width: '100%'
  },
  buscadorInner: {
    left: '0%',
    right: '0%',
    width: '100%'
  },
  buscadorChild: {
    height: '42.86%',
    width: '3.58%',
    top: '31.43%',
    right: '92.79%',
    bottom: '25.71%',
    left: '3.63%',
    position: 'absolute'
  },
  buscar: {
    height: '45.14%',
    width: '70.45%',
    top: '25.14%',
    left: '9.44%',
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: 'absolute'
  },
  buscador: {
    height: 35,
    marginTop: 31,
    width: 358
  },
  cabeezeraParent: {
    top: 60,
    left: 16,
    position: 'absolute'
  },
  groupItem: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    left: 0
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: 'solid',
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
  tusMatchsChild: {
    height: '0.59%',
    top: '96.33%',
    right: '29.74%',
    bottom: '3.08%',
    left: '68.97%',
    width: '1.28%',
    position: 'absolute'
  },
  maskGroupIcon: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    position: 'absolute'
  },
  maskGroupIcon1: {
    top: '21.79%',
    right: '9.74%',
    left: '81.28%',
    width: '8.97%',
    height: '44.87%'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: '0%',
    right: '0%',
    width: '100%'
  },
  menuClubItem: {
    width: '19.74%',
    right: '59.49%',
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '20.77%'
  },
  menuClubInner: {
    height: '3.85%',
    width: '20.51%',
    top: '1.92%',
    right: '59.1%',
    bottom: '94.23%',
    left: '20.38%',
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3
  },
  groupIcon: {
    height: '37.95%',
    width: '7.69%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%',
    position: 'absolute'
  },
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild1: {
    left: '40.51%'
  },
  groupInner: {
    width: '11.94%',
    right: '88.06%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupParent: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubChild2: {
    right: '44.87%',
    left: '46.15%'
  },
  maskGroupIcon2: {
    right: '6.15%',
    left: '84.87%'
  },
  ellipseIcon: {
    height: '6.41%',
    top: '60.26%',
    right: '28.97%',
    left: '69.74%',
    width: '1.28%'
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
    left: '50%',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    position: 'absolute'
  },
  tusMatchs: {
    flex: 1,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default TusMatchs
