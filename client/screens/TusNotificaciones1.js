import React, { useState } from 'react'
import { Text, StyleSheet, Pressable, View, TextInput } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontSize, FontFamily, Color, Border } from '../GlobalStyles'
import { useSelector } from 'react-redux'
import Notifications from '../components/Notifications'
import MessagesChat from '../components/MessagesChat'

const TusNotificaciones1 = () => {
  const navigation = useNavigation()
  const { notifications, messages } = useSelector(
    (state) => state.notifications
  )
  const [selectedComponent, setSelectedComponent] = useState('notifications')

  return (
    <View style={styles.tusNotificaciones}>
      <View style={styles.tuBuznParent}>
        <Pressable
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            marginLeft: 15
          }}
          onPress={() => navigation.goBack()}
        >
          <View
            style={[styles.coolicon, styles.cooliconPosition]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon]}
              contentFit="cover"
              source={require('../assets/coolicon4.png')}
            />
          </View>
          <View style={styles.tuBuzn}>
            <Text style={styles.tuBuzn1}>Tu Buzón</Text>
          </View>
        </Pressable>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 30
          }}
        >
          <Pressable onPress={() => setSelectedComponent('messages')}>
            <Text
              style={[
                selectedComponent === 'messages'
                  ? styles.notficaciones
                  : styles.mensajes1,
                ,
                styles.mensajes1Typo
              ]}
            >
              Mensajes
            </Text>
          </Pressable>
          <Pressable o onPress={() => setSelectedComponent('notifications')}>
            <Text
              style={[
                selectedComponent === 'notifications'
                  ? styles.notficaciones
                  : styles.mensajes1,
                styles.mensajes1Typo
              ]}
            >
              Notíficaciones
            </Text>
          </Pressable>
        </View>

        {selectedComponent === 'notifications' &&
          notifications.map((notification) => (
            <Notifications
              key={notification.id}
              text={notification.notification}
              send={notification.send}
            />
          ))}

        {selectedComponent === 'messages' && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
              position: 'relative'
            }}
          >
            <Image
              style={{
                width: 24,
                height: 24,
                position: 'absolute',
                left: 10,
                zIndex: 1
              }}
              source={require('../assets/group-535.png')}
            />

            <TextInput
              placeholder="Buscar"
              placeholderTextColor={Color.gREY2SPORTSMATCH}
              style={{
                flex: 1,
                height: 45,
                color: Color.gREY2SPORTSMATCH,
                paddingHorizontal: 40,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontSize: FontSize.t2TextSTANDARD_size,
                borderWidth: 1,
                borderColor: Color.gREY2SPORTSMATCH,
                borderStyle: 'solid',
                borderRadius: Border.br_81xl
              }}
            />
          </View>
        )}
        <View style={{ marginTop: 30 }}>
          {selectedComponent === 'messages' &&
            messages.map((message) => (
              <MessagesChat
                key={message.id}
                name={message.name}
                message={message.message}
                send={message.send}
                read={message.read}
                confirmation={message.confirmation}
              />
            ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mensajes1Typo: {
    fontWeight: '700',

    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ayerTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  textTypo: {
    top: '28.08%',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  tusLayout: {
    height: 1,
    width: 361,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    left: 14,
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupIconLayout: {
    height: 45,
    width: 45
  },
  ellipseIconLayout: {
    height: 5,
    width: 5,
    top: 111
  },
  groupInnerPosition: {
    left: 234,
    position: 'absolute'
  },
  groupChildPosition: {
    height: 34,
    left: 0,
    width: 390,
    top: 0,
    position: 'absolute'
  },
  groupLayout: {
    height: 12,
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
  itemPosition: {
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
  tuBuzn1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  tuBuzn: {
    // left: '16.51%',
    // top: '0%',
    // position: 'absolute'
  },
  icon: {
    maxHeight: '100%',
    height: '100%',
    maxWidth: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 20
  },
  tuBuznParent: {
    marginTop: 20
    // marginLeft: 15
  },
  tusNotificacionesChild: {
    height: '0.36%',
    top: '15.88%',
    bottom: '83.77%',
    width: 188,
    right: 0,
    maxHeight: '100%',
    position: 'absolute'
  },
  mensajes1: {
    // width: '44.87%',
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH
  },

  notficaciones: {
    color: Color.bALONCESTO,
    textAlign: 'center'
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  hasHechoUn1: {
    left: '20.26%',
    width: '63.85%',
    height: '7.35%',
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  ayer: {
    color: Color.gREY2SPORTSMATCH
  },
  text: {
    left: '80.77%',
    color: Color.gREY2SPORTSMATCH
  },
  tusNotificacionesItem: {
    top: 227
  },

  lineView: {
    top: 157
  },
  tusNotificacionesChild1: {
    top: 299
  },
  groupIcon: {
    top: 240
  },
  ellipseIcon: {
    left: 63,
    position: 'absolute'
  },
  tusNotificacionesChild2: {
    height: 5,
    width: 5,
    top: 111
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    left: 0
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    top: 0,
    height: 12,
    borderStyle: 'solid'
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
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7,
    position: 'absolute'
  },
  battery: {
    width: 25,
    top: 0,
    height: 12,
    right: 0
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
    width: 68
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
    left: 15,
    height: 24
  },
  maskGroupIcon: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%'
  },
  maskGroupIcon1: {
    top: '21.79%',
    right: '9.74%',
    bottom: '33.33%',
    left: '81.28%'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: '0%',
    bottom: '0%',
    left: '0%',
    position: 'absolute',
    width: '100%'
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: '59.74%',
    bottom: '0%',
    height: '100%',
    top: '0%'
  },
  groupItem: {
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
  wrapper: {
    left: '25.9%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    width: '7.69%',
    height: '37.95%',
    position: 'absolute'
  },
  container: {
    right: '88.06%',
    width: '11.94%',
    left: '0%',
    position: 'absolute'
  },
  groupInner: {
    top: 3,
    width: 34,
    height: 23
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
    left: '46.15%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
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
  tusNotificacionesChild3: {
    height: '0.59%',
    width: '1.28%',
    top: '96.33%',
    right: '28.97%',
    bottom: '3.08%',
    left: '69.74%',
    maxHeight: '100%',
    position: 'absolute'
  },
  tusNotificacionesChild4: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: '100%'
  },
  tusNotificaciones: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default TusNotificaciones1
