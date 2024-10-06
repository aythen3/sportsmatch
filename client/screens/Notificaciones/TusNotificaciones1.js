import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TextInput,
  ScrollView,
  StatusBar
} from 'react-native'
import { Image } from 'expo-image'
import { FontSize, FontFamily, Color, Border } from '../../GlobalStyles'
import { useSelector } from 'react-redux'
import Notifications from '../../components/Notifications'
import MessagesChat from '../../components/MessagesChat'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import { getAllUsers } from '../../redux/actions/users'
import { useDispatch } from 'react-redux'
import { Context } from '../../context/Context'
import CustomHeaderBack from '../../components/CustomHeaderBack'
import {
  getNotificationsByUserId,
  markAllUserNotificationsAsRead
} from '../../redux/actions/notifications'
import { ActivityIndicator } from 'react-native-paper'
import { getAllMatchs, getUserMatchs } from '../../redux/actions/matchs'

const TusNotificaciones1 = () => {
  const [loading, setLoading] = useState(true)
  const [value, setValue] = useState('')
  const isFocused = useIsFocused()
  const [applicants, setApplicants] = useState([])
  const dispatch = useDispatch()
  const { offers } = useSelector((state) => state.offers)
  const { allNotifications, userNotifications } = useSelector(
    (state) => state.notifications
  )

  const { allMessages } = useSelector((state) => state.chats)
  const { user, allUsers, mainColor } = useSelector((state) => state.users)
  const { getUsersMessages, usersWithMessages, setActiveIcon } =
    useContext(Context)

  const userId = user?.user?.id

  const sortUsers = (userA, userB) => {
    const isInMessagesA = usersWithMessages?.some(
      (user) => user?.id === userA?.id
    )
    const isInMessagesB = usersWithMessages?.some(
      (user) => user?.id === userB?.id
    )

    if (isInMessagesA && !isInMessagesB) {
      return -1
    } else if (!isInMessagesA && isInMessagesB) {
      return 1
    } else {
      return 0
    }
  }

  const filteredUsers = allUsers
    ?.filter((user) =>
      user?.nickname?.toLowerCase()?.includes(value?.toLowerCase())
    )
    .sort(sortUsers)

  useEffect(() => {
    getUsersMessages()
  }, [allMessages])

  useEffect(() => {
    getUsersMessages()
    if (user.user.type === 'club') {
      dispatch(getNotificationsByUserId(user?.user?.club?.id))
    } else {
      dispatch(getNotificationsByUserId(user?.user?.id))
    }
  }, [])
  // console.log('userNotifications', userNotifications)
  // ================ NOTIFICATIONS/OFFERS =====================

  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(getAllUsers())
    }
  }, [])

  useEffect(() => {
    if (user && user?.user?.type === 'club' && offers) {
      const clubOffers = offers?.filter(
        (offer) => offer.clubId === user.user.club?.id
      )
      const postulants = clubOffers.map((offer) => offer.inscriptions)
      const allApplications = [...new Set([].concat(...postulants))]
      allApplications.length > 0 && setApplicants(allApplications)
    }
  }, [offers])

  useEffect(() => {}, [allNotifications])

  useEffect(() => {
    setTimeout(() => setLoading(false), 900)
  }, [])

  useEffect(() => {
    setActiveIcon('message')
  }, [isFocused])

  const [selectedComponent, setSelectedComponent] = useState('messages')

  if (!allUsers)
    return <View style={{ flex: 1, backgroundColor: '#000' }}></View>
  return (
    <SafeAreaView style={styles.tusNotificaciones}>
      <StatusBar animated translucent={true} backgroundColor={'transparent'} />

      <CustomHeaderBack header={'Tu Buzón'}></CustomHeaderBack>
      <View style={styles.tuBuznParent}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Pressable
            style={{ width: '50%', height: 40 }}
            onPress={() => setSelectedComponent('messages')}
          >
            <Text
              style={[
                selectedComponent === 'messages'
                  ? {
                      ...styles.notficaciones,
                      color: mainColor,
                      borderColor: mainColor
                    }
                  : styles.mensajes1,
                styles.mensajes1Typo
              ]}
            >
              Mensajes
            </Text>
          </Pressable>
          <Pressable
            style={{ width: '50%', height: 40 }}
            onPress={() => {
              console.log('marking...')
              dispatch(markAllUserNotificationsAsRead(user.user.id)).then(
                (res) => {
                  if (user.user.type === 'club') {
                    dispatch(getNotificationsByUserId(user.user.id))
                  } else {
                    dispatch(getNotificationsByUserId(user.user.id))
                  }
                }
              )
              setSelectedComponent('notifications')
            }}
          >
            <Text
              style={[
                selectedComponent === 'notifications'
                  ? {
                      ...styles.notficaciones,
                      color: mainColor,
                      borderColor: mainColor
                    }
                  : styles.mensajes1,
                styles.mensajes1Typo
              ]}
            >
              Notificaciones
            </Text>
            {userNotifications.length > 0 &&
              userNotifications
                ?.filter((notification) => {
                  if (user?.user?.type === 'club') {
                    notification.recipientId === user.user.club.id
                    return true
                  } else if (notification.recipientId === userId) {
                    return true
                  } else {
                    return false
                  }
                })
                .filter((notif) => !notif.read).length > 0 && (
                <View
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: mainColor,
                    borderRadius: 100,
                    position: 'absolute',
                    top: 2,
                    right: 15
                  }}
                ></View>
              )}
          </Pressable>
        </View>

        {selectedComponent === 'notifications' && (
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            {userNotifications.length > 0 ? (
              [...userNotifications]
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((notification) => (
                  <Notifications key={notification.id} data={notification} />
                ))
            ) : (
              <View
                style={{ marginTop: 30, width: '100%', alignItems: 'center' }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '400',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    color: Color.wHITESPORTSMATCH
                  }}
                >
                  ¡No tienes notificaciones!
                </Text>
              </View>
            )}
          </ScrollView>
        )}

        {selectedComponent === 'messages' && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              width: '97%'
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
              value={value}
              onChangeText={(text) => setValue(text)}
            />
          </View>
        )}
        {selectedComponent === 'messages' && (
          <View>
            {loading ? (
              <ActivityIndicator
                style={{
                  backgroundColor: 'transparent',
                  alignSelf: 'center',
                  marginTop: '20%'
                }}
                animating={true}
                size="xlarge"
                color={mainColor}
              />
            ) : (
              <ScrollView
                keyboardShouldPersistTaps={'always'}
                contentContainerStyle={{ paddingBottom: 160 }}
                style={{
                  marginTop: 30,
                  paddingHorizontal: 14
                }}
              >
                {value === '' && usersWithMessages.length === 0 ? (
                  <View style={{ width: '100%', alignItems: 'center' }}>
                    <Text
                      style={{ fontSize: 14, fontWeight: 400, color: '#fff' }}
                    >
                      Inicia una conversación!
                    </Text>
                  </View>
                ) : (
                  value === '' &&
                  usersWithMessages?.map((userr, index) => {
                    if (
                      !userr.isDelete &&
                      !user?.user?.banned?.includes(userr?.id)
                    ) {
                      return (
                        <MessagesChat
                          value={value}
                          setValue={setValue}
                          key={index + 999}
                          name={userr.nickname}
                          sportmanId={userr.sportman?.id}
                          profilePic={
                            userr?.type === 'club'
                              ? userr?.club?.img_perfil
                              : userr?.sportman?.info?.img_perfil
                          }
                          selectedUserId={userr.id}
                          // applicant={applicants?.includes(user.sportman?.id)}
                        />
                      )
                    }
                  })
                )}
                {value !== '' && filteredUsers.length > 0
                  ? filteredUsers.map((userr, index) => {
                      console.log(user, 'user ')
                      if (
                        !userr.isDelete &&
                        !user?.user?.banned?.includes(userr?.id)
                      )
                        return (
                          <MessagesChat
                            value={value}
                            setValue={setValue}
                            key={index + 99999}
                            name={userr.nickname}
                            sportmanId={userr.sportman?.id}
                            profilePic={
                              userr?.type === 'club'
                                ? userr?.club?.img_perfil
                                : userr?.sportman?.info?.img_perfil
                            }
                            selectedUserId={userr.id}
                            // applicant={applicants?.includes(user.sportman?.id)}
                          />
                        )
                    })
                  : value !== '' && (
                      <View
                        style={{
                          marginTop: 30,
                          width: '100%',
                          alignItems: 'center'
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: '400',
                            fontFamily: FontFamily.t4TEXTMICRO,
                            color: Color.wHITESPORTSMATCH
                          }}
                        >
                          No encontramos resultados para su búsqueda.
                        </Text>
                      </View>
                    )}
              </ScrollView>
            )}
          </View>
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mensajes1Typo: {
    fontWeight: '700',
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center'
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
    height: '100%'
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
    width: '100%'
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
