import React, { useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontSize, FontFamily, Color, Border } from '../../GlobalStyles'
import { useSelector } from 'react-redux'
import Notifications from '../../components/Notifications'
import MessagesChat from '../../components/MessagesChat'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'

const TusNotificaciones1 = () => {
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const { allNotifications } = useSelector((state) => state.notifications)
  const { sportman } = useSelector((state) => state.sportman)
  const { user, allUsers } = useSelector((state) => state.users)

  const [selectedComponent, setSelectedComponent] = useState('messages')

  const userId = user?.user?.id
  return (
    <SafeAreaView style={styles.tusNotificaciones}>
      {isFocused && (
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      )}
      <View style={styles.tuBuznParent}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 15,
            justifyContent: 'flex-start'
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{ width: 9, height: 15, marginTop: 2.5 }}
              contentFit="cover"
              source={require('../../assets/coolicon3.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#fff',
              fontWeight: '500',
              fontSize: 22,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            Tu Buzón
          </Text>
        </View>
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

        {selectedComponent === 'notifications' && (
          <View>
            {allNotifications?.filter(
              (notification) => notification.recipientId === userId
            ).length > 0 ? (
              allNotifications
                ?.filter((notification) => notification.recipientId === userId)
                .map((notification) => (
                  <Notifications
                    key={notification.id}
                    title={notification.title}
                    text={notification.message}
                    date={notification.date}
                    read={notification.read}
                    match={notification.title === 'Nuevo Match'}
                  />
                ))
            ) : (
              <View
                style={{ marginTop: 30, width: '100%', alignItems: 'center' }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: '600',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    color: Color.wHITESPORTSMATCH
                  }}
                >
                  No tienes notificaciones!
                </Text>
              </View>
            )}
          </View>
        )}

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
        {selectedComponent === 'messages' && (
          <ScrollView
            style={{
              marginTop: 30
            }}
          >
            {allUsers
              ?.filter((user) => user?.id !== userId)
              .map((user) => (
                <MessagesChat
                  key={user.id}
                  name={user.nickname}
                  profilePic={
                    user?.type === 'club'
                      ? user?.club?.img_perfil
                      : user?.sportman.info.img_perfil
                  }
                  selectedUserId={user.id}
                />
              ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
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
    marginTop: 50,
    height: '90%'
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
    paddingHorizontal: 15,
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
