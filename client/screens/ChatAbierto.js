import * as React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Padding, Border } from '../GlobalStyles'

const ChatAbierto = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.chatAbierto}>
      <View style={styles.frameCabezeraDialogos}>
        <View style={styles.cabezera}>
          <View
            style={[styles.cabezeraFrameWrapper, styles.cabezeraFramePosition]}
          >
            <View style={[styles.cabezeraFrame, styles.cabezeraFlexBox]}>
              <View style={[styles.cabezeraIzquierda, styles.cabezeraFlexBox]}>
                <Image
                  style={styles.flechaIcon}
                  contentFit="cover"
                  source={require('../assets/flecha3.png')}
                />
                <View style={styles.escudoClub}>
                  <Image
                    style={[styles.escudoClubChild, styles.iconGroupLayout]}
                    contentFit="cover"
                    source={require('../assets/ellipse-764.png')}
                  />
                  <Image
                    style={[
                      styles.logoUem21RemovebgPreview1Icon,
                      styles.iconGroupLayout
                    ]}
                    contentFit="cover"
                    source={require('../assets/logo-uem21removebgpreview-15.png')}
                  />
                </View>
                <Text
                  style={[styles.uniEsportvaMatar, styles.perfectoEstoyATypo]}
                >
                  Unió Esportíva Mataró
                </Text>
              </View>
              <Image
                style={styles.menuLateralPosterior}
                contentFit="cover"
                source={require('../assets/menu-lateral-posterior.png')}
              />
            </View>
          </View>
        </View>
        <View style={styles.dialogos}>
          <View style={styles.dialogos123}>
            <View>
              <View style={[styles.dialogo1, styles.dialogoSpaceBlock1]}>
                <Text
                  style={styles.perfectoEstoyATypo}
                >{`Buenos días, me presento: Soy el jugador de 
baloncesto Jordi Espelt. Hemos hecho Match 
recientemente y me gustaría que vierais mi 
perfil y saber si soy de interés por vuestro club.`}</Text>
                <Text style={styles.textTypo}>10:33</Text>
                <Image
                  style={styles.ticsIconLayout}
                  contentFit="cover"
                  source={require('../assets/tics.png')}
                />
              </View>
              <View style={[styles.dialogo2, styles.dialogoSpaceBlock1]}>
                <Text
                  style={styles.perfectoEstoyATypo}
                >{`Encantado Jordi, efectívamente, 
nos interesa tu perfil.`}</Text>
                <Text style={[styles.text1, styles.textTypo]}>10:33</Text>
                <Image
                  style={styles.ticsIconLayout}
                  contentFit="cover"
                  source={require('../assets/group-454.png')}
                />
              </View>
            </View>
            <View style={[styles.dialogo3, styles.dialogoSpaceBlock]}>
              <Text
                style={styles.perfectoEstoyATypo}
              >{`Perfecto, estoy a la espera de 
vuestra decisión`}</Text>
              <Text style={styles.textTypo}>10:33</Text>
              <Image
                style={styles.ticsIconLayout}
                contentFit="cover"
                source={require('../assets/tics1.png')}
              />
            </View>
          </View>
          <View style={[styles.dialogo4, styles.dialogoSpaceBlock]}>
            <Text
              style={styles.perfectoEstoyATypo}
            >{`Hola Jordi, hemos estudiado tu perfil y visto 
tus highlights y nos encajas. Si te parece 
cerramos oferta contígo!  `}</Text>
            <Text style={[styles.text1, styles.textTypo]}>10:33</Text>
            <Image
              style={[styles.ticsIcon3, styles.ticsIconLayout]}
              contentFit="cover"
              source={require('../assets/group-454.png')}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require('../assets/cap.png')}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require('../assets/wifi.png')}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require('../assets/cellular-connection4.png')}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.menuClubParent, styles.menuPosition1]}>
        <View style={[styles.menuClub, styles.menuPosition1]}>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupLayout]}
            contentFit="cover"
            source={require('../assets/mask-group1.png')}
          />
          <Image
            style={[styles.maskGroupIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require('../assets/mask-group1.png')}
          />
          <View style={[styles.menuClubChild, styles.clubChildPosition]} />
          <View style={[styles.menuClubItem, styles.menuPosition]} />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate('ExplorarPersonaClubsFiltr')}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require('../assets/group-535.png')}
            />
          </Pressable>
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupItem, styles.iconGroupLayout]}
              contentFit="cover"
              source={require('../assets/group-5402.png')}
            />
            <Image
              style={styles.groupInner}
              contentFit="cover"
              source={require('../assets/group-5394.png')}
            />
          </View>
          <Image
            style={[styles.menuClubInner, styles.menuClubInnerLayout]}
            contentFit="cover"
            source={require('../assets/group-593.png')}
          />
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            contentFit="cover"
            source={require('../assets/line-51.png')}
          />
          <Image
            style={[styles.menuClubChild1, styles.lineIconLayout]}
            contentFit="cover"
            source={require('../assets/line-7.png')}
          />
          <Image
            style={[styles.menuClubChild2, styles.menuPosition]}
            contentFit="cover"
            source={require('../assets/line-61.png')}
          />
        </View>
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require('../assets/ellipse-83.png')}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.menuClubInnerLayout]}
          contentFit="cover"
          source={require('../assets/mask-group1.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cabezeraFramePosition: {
    left: 0,
    top: 0,
    width: 358,
    position: 'absolute'
  },
  cabezeraFlexBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconGroupLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  perfectoEstoyATypo: {
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH
  },
  dialogoSpaceBlock1: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_mini,
    justifyContent: 'center',
    borderRadius: Border.br_3xs,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  textTypo: {
    marginLeft: 8,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  dialogoSpaceBlock: {
    marginTop: 20,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_mini,
    justifyContent: 'center',
    borderRadius: Border.br_3xs,
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  ticsIconLayout: {
    height: 8,
    width: 11,
    marginLeft: 8
  },
  groupChildPosition: {
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
  menuPosition1: {
    height: 78,
    left: '50%',
    marginLeft: -195,
    width: 390,
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
  clubChildPosition: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  menuPosition: {
    right: '20.51%',
    width: '19.74%',
    left: '59.74%',
    position: 'absolute'
  },
  menuClubInnerLayout: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  lineIconLayout: {
    width: 0,
    top: '0.64%',
    height: '99.36%',
    maxHeight: '100%',
    bottom: '0%',
    position: 'absolute'
  },
  flechaIcon: {
    width: 9,
    height: 15
  },
  escudoClubChild: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    right: '0%',
    width: '100%'
  },
  logoUem21RemovebgPreview1Icon: {
    height: '72.67%',
    width: '77.33%',
    top: '13.67%',
    right: '11%',
    bottom: '13.67%',
    left: '11.67%',
    position: 'absolute'
  },
  escudoClub: {
    marginLeft: 9,
    height: 30,
    flex: 1
  },
  uniEsportvaMatar: {
    fontWeight: '700',
    marginLeft: 9
  },
  cabezeraIzquierda: {
    width: 200
  },
  menuLateralPosterior: {
    marginLeft: 153,
    height: 23,
    maxWidth: '100%',
    overflow: 'hidden',
    flex: 1
  },
  cabezeraFrame: {
    left: 0,
    top: 0,
    width: 358,
    position: 'absolute'
  },
  cabezeraFrameWrapper: {
    height: 30
  },
  cabezera: {
    height: 30,
    width: 358
  },
  dialogo1: {
    width: 359,
    backgroundColor: Color.colorDimgray_100
  },
  text1: {
    display: 'flex',
    width: 24,
    alignItems: 'flex-end'
  },
  dialogo2: {
    marginTop: 16,
    backgroundColor: Color.bLACK2SPORTMATCH
  },
  dialogo3: {
    backgroundColor: Color.colorDimgray_100
  },
  dialogos123: {
    alignItems: 'flex-end'
  },
  ticsIcon3: {
    display: 'none'
  },
  dialogo4: {
    backgroundColor: Color.bLACK2SPORTMATCH
  },
  dialogos: {
    marginTop: 27
  },
  frameCabezeraDialogos: {
    top: 56,
    alignItems: 'center',
    left: 15,
    position: 'absolute'
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390
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
    top: 0,
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
    color: Color.wHITESPORTSMATCH,
    width: 61
  },
  starus: {
    top: 10,
    height: 24,
    width: 61,
    left: 15
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
    right: '0%',
    left: '0%',
    width: '100%'
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '59.74%',
    bottom: '0%',
    top: '0%',
    right: '20.51%',
    width: '19.74%',
    height: '100%'
  },
  icon: {
    height: '100%',
    maxHeight: '100%',
    width: '100%'
  },
  wrapper: {
    left: '25.9%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    width: '7.69%',
    height: '37.95%',
    position: 'absolute'
  },
  groupItem: {
    width: '11.94%',
    right: '88.06%',
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  groupInner: {
    top: 3,
    left: 234,
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
  menuClubInner: {
    right: '44.87%',
    left: '46.15%'
  },
  lineIcon: {
    left: '59.74%'
  },
  menuClubChild1: {
    left: '79.62%'
  },
  menuClubChild2: {
    height: '3.85%',
    top: '1.92%',
    bottom: '94.23%',
    left: '59.74%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  menuClub: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0
  },
  ellipseIcon: {
    height: '6.41%',
    width: '1.28%',
    top: '60.26%',
    right: '28.97%',
    left: '69.74%'
  },
  maskGroupIcon2: {
    right: '6.15%',
    left: '84.87%'
  },
  menuClubParent: {
    top: 766
  },
  chatAbierto: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default ChatAbierto
