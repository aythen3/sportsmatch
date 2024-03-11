import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Padding, Border } from '../GlobalStyles'
import Chat from '../components/Chat'
import { useSelector } from 'react-redux'
import ThreePointsSVG from '../components/svg/ThreePointsSVG'

const ChatAbierto1 = () => {
  const { message } = useSelector((state) => state.notifications)
  const navigation = useNavigation()

  return (
    <View style={styles.chatAbierto}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 9, height: 18, marginRight: 10 }}
              contentFit="cover"
              source={require('../assets/coolicon4.png')}
            />
          </Pressable>

          <Image
            style={{ width: 40, height: 40, borderRadius: 50, marginRight: 10 }}
            contentFit="cover"
            source={require('../assets/imagen6.png')}
          />
          <Text style={[styles.jordiEspelt, styles.jordiEspeltTypo]}>
            Unió Esportíva Mataró
          </Text>
        </View>

        <View>
          <ThreePointsSVG />
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        {message?.map((chat) => (
          <Chat
            key={chat.id}
            text={chat.text}
            isMy={chat.isMy}
            read={chat.read}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 100,
    left: 0,
    width: 390,
    top: 0,
    position: 'absolute'
  },

  jordiEspeltTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH
  },
  groupLayout: {
    height: 60,
    width: 60
  },
  holaPosition1: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_mini,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_3xs,
    alignItems: 'flex-end',
    position: 'absolute'
  },
  holaPosition: {
    left: 16,
    backgroundColor: Color.bLACK2SPORTMATCH,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_mini,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    borderRadius: Border.br_3xs,
    position: 'absolute'
  },
  textTypo: {
    marginLeft: 8,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupIconLayout: {
    height: 8,
    width: 11,
    marginLeft: 8
  },
  maskGroupIconLayout: {
    width: '7.69%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
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
  menuClubPosition: {
    left: '50%',
    position: 'absolute'
  },
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  menuPosition1: {
    bottom: '0%',
    height: '100%',
    top: '0%'
  },
  menuPosition: {
    right: '20.51%',
    width: '19.74%',
    left: '59.74%',
    position: 'absolute'
  },
  ellipseParentPosition: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    top: '0.64%',
    height: '99.36%',
    bottom: '0%',
    maxHeight: '100%',
    position: 'absolute'
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  groupItem: {
    height: 30,
    width: 30
  },
  jordiEspelt: {
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size
  },
  groupInner: {
    width: 5
  },

  holaMePresentoSoyElJuga: {
    top: 283,
    left: 114
  },
  holaMePresentoSoyElJuga1: {
    top: 442,
    left: 115
  },
  holaMePresentoSoyElJuga2: {
    top: 113,
    width: 359,
    left: 15
  },
  text3: {
    display: 'flex',
    width: 24,
    alignItems: 'flex-end',
    marginLeft: 8,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.bodyBodyXS_size
  },
  groupIcon: {
    display: 'none'
  },
  holaMePresentoSoyElJuga3: {
    top: 213,
    backgroundColor: Color.bLACK2SPORTMATCH
  },
  holaMePresentoSoyElJuga4: {
    top: 353,
    backgroundColor: Color.bLACK2SPORTMATCH
  },
  holaMePresentoSoyElJuga5: {
    top: 495,
    backgroundColor: Color.bLACK2SPORTMATCH
  },
  maskGroupIcon: {
    height: '3.55%',
    top: '6.64%',
    right: '83.59%',
    bottom: '89.81%',
    left: '8.72%'
  },
  rectangleView: {
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
    left: 15
  },
  maskGroupIcon1: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%'
  },
  maskGroupIcon2: {
    top: '21.79%',
    right: '9.74%',
    bottom: '33.33%',
    left: '81.28%'
  },
  menuClubChild: {
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
    width: '100%',
    backgroundColor: Color.bLACK2SPORTMATCH
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '59.74%',
    bottom: '0%',
    height: '100%',
    top: '0%'
  },
  ellipseIcon: {
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
    width: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  logoUem21RemovebgPreview1Icon: {
    height: '72.57%',
    width: '77.43%',
    top: '13.71%',
    right: '10.86%',
    bottom: '13.71%',
    left: '11.71%',
    maxHeight: '100%',
    position: 'absolute'
  },
  ellipseParent: {
    right: '6.15%',
    left: '84.87%'
  },
  menuClubInner: {
    height: '37.95%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%'
  },
  icon: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    right: '88.06%',
    width: '11.94%',
    left: '0%',
    position: 'absolute'
  },
  groupChild1: {
    top: 3,
    left: 234,
    width: 34
  },
  groupContainer: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubChild1: {
    right: '44.87%',
    left: '46.15%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  lineIcon: {
    left: '59.74%'
  },
  menuClubChild2: {
    left: '79.62%'
  },
  menuClubChild3: {
    height: '3.85%',
    top: '1.92%',
    bottom: '94.23%',
    left: '59.74%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
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
    left: '50%'
  },
  chatAbiertoChild: {
    height: '0.59%',
    width: '1.28%',
    top: '96.33%',
    right: '28.97%',
    bottom: '3.08%',
    left: '69.74%',
    maxHeight: '100%',
    position: 'absolute'
  },
  chatAbiertoItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: '100%'
  },
  chatAbierto: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default ChatAbierto1
