import React, { useState } from 'react'
import { Text, StyleSheet, Pressable, View, TextInput } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontSize, FontFamily, Color, Border } from '../../GlobalStyles'
import { useSelector } from 'react-redux'
import Notifications from '../../components/Notifications'
import MessagesChat from '../../components/MessagesChat'

const TusNotificaciones1 = () => {
  const navigation = useNavigation()

  const { user } = useSelector((state) => state.users)
  const { notifications, messages, userMessages } = useSelector(
    (state) => state.notifications
  )

  const [selectedComponent, setSelectedComponent] = useState('notifications')

  return (
    <View style={styles.tusNotificaciones}>
      <View style={styles.tuBuznParent}>
        <Pressable
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <View
            style={[styles.coolicon, styles.cooliconPosition]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon]}
              contentFit="cover"
              source={require('../../assets/coolicon4.png')}
            />
          </View>

          <Text style={styles.tuBuzn1}>Tu Buzón</Text>
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
                styles.mensajes1Typo
              ]}
            >
              Mensajes
            </Text>
          </Pressable>
          <Pressable onPress={() => setSelectedComponent('notifications')}>
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
              read={notification.read}
              match={notification.match}
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
              style={styles.searchImage}
              source={require('../../assets/group-535.png')}
            />

            <TextInput
              placeholder="Buscar"
              placeholderTextColor={Color.gREY2SPORTSMATCH}
              style={styles.searchText}
            />
          </View>
        )}
        <View style={{ marginTop: 30 }}>
          {selectedComponent === 'messages' && user.user.type === 'club'
            ? messages.map((message) => (
                <MessagesChat
                  key={message.id}
                  name={message.name}
                  message={message.message}
                  send={message.send}
                  read={message.read}
                  confirmation={message.confirmation}
                />
              ))
            : selectedComponent === 'messages' &&
              userMessages.map((message) => (
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
  tuBuzn1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
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
    marginTop: 50
  },
  backButton: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginLeft: 15
  },
  mensajes1: {
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH
  },
  notficaciones: {
    color: Color.bALONCESTO,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderColor: Color.bALONCESTO,
    paddingBottom: 5,
    width: 120
  },
  text: {
    left: '80.77%',
    color: Color.gREY2SPORTSMATCH
  },
  group: {
    top: 17,
    right: 15,
    width: 68
  },
  tusNotificaciones: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  searchText: {
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
  },
  searchImage: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 10,
    zIndex: 1
  }
})

export default TusNotificaciones1
