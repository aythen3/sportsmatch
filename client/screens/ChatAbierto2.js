import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Touchable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  ActivityIndicator
} from 'react-native'
import contact from '../assets/contact.png'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Padding, Border } from '../GlobalStyles'
import Chat from '../components/Chat'
import { useDispatch, useSelector } from 'react-redux'
import ThreePointsSVG from '../components/svg/ThreePointsSVG'
import { useRoute } from '@react-navigation/native'
import {
  emptyAllMessages,
  getChatHistory,
  getUserChat,
  getUserChats
} from '../redux/actions/chats'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../context/Context'
import axiosInstance from '../utils/apiBackend'
import {
  setAllConversationMessagesToRead,
  setAllMessages
} from '../redux/slices/chats.slices'
import { useIsFocused } from '@react-navigation/native'
import {
  getAllUsers,
  getUserData,
  updateUserData
} from '../redux/actions/users'
import { setShowNavbar, updateUser } from '../redux/slices/users.slices'
import { sendNotification } from '../redux/actions/notifications'
import axios from 'axios'
import { getAllMatchs } from '../redux/actions/matchs'
import * as NavigationBar from 'expo-navigation-bar'
import { useSocket } from '../context/ContextSocket'

const ChatAbierto2 = () => {
  const { sendMessage, joinRoom, leaveRoom, socket, openConversation } =
    useSocket()
  const [usuario, setUsuario] = useState({})

  const { user, allUsers, mainColor, isSportman } = useSelector(
    (state) => state.users
  )
  const _ = require('lodash')
  const [selectedUserDetails, setSelectedUserDetails] = useState()
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showDeletePopUp, setShowDeletePopUp] = useState(false)
  const isFocused = useIsFocused()
  const { getTimeFromDate } = useContext(Context)
  const [message, setMessage] = useState()
  const { allMessages } = useSelector((state) => state.chats)
  const [messages, setMessages] = useState(
    route?.params?.chat?.messages ? [...route?.params?.chat?.messages] : []
  )
  const [chat, setChat] = useState({})
  const [showInput, setShowInput] = useState(false)
  const [canSend, setCanSend] = useState(false)
  const route = useRoute()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const scrollViewRef = useRef()

  const handleSendMessage = () => {
    console.log(message, user?.user?.id, route?.params?.receiverId)
    sendMessage(message, user?.user?.id, route?.params?.receiverId)
    setMessage()
    // 3000 milisegundos = 3 segundos
  }

  useEffect(() => {
    // Establece el color marrón de la barra de navegación nativa
    NavigationBar.setBackgroundColorAsync('black')
    console.log(messages, 'CHAT2')
    const userrr = route?.params?.user
    const isSportman = userrr?.type === 'player' || userrr?.type === 'coach'
    if (isSportman) {
      // setSelectedUserDetails(userrr)
    }
    return () => {
      dispatch(setShowNavbar(true))
      // dispatch(getUserChats(user?.user?.id))

      NavigationBar.setBackgroundColorAsync(Color.bLACK2SPORTMATCH)
    }
  }, [])

  // Función que se llama al abrir la conversación

  useEffect(() => {
    setMessages(route?.params?.chat?.messages)
  }, [route?.params?.chat?.messages])

  useEffect(() => {
    setMessages(allMessages)
  }, [allMessages])

  useEffect(() => {
    const userrr = route?.params?.user
    const isSportman = userrr?.type === 'player' || userrr?.type === 'coach'
    const isClub = !isSportman // Asume que si no es 'player' o 'coach', es club.

    console.tron.log(route?.params?.chat?.messages, 'que son')

    // Definir la función para verificar los matches
    const hasSuccessfulMatch = (matches, userId, status = 'success') =>
      matches?.filter(
        (match) =>
          match?.user?.sportman?.id === userId && match.status === status
      ).length > 0

    const hasSuccessfulMatchClub = (matches, clubId, status = 'success') =>
      matches?.filter(
        (match) => match?.club?.id === clubId && match.status === status
      ).length > 0

    // Verificar condiciones
    if (isSportman && user.user.sportman) {
      // Si el usuario que revisamos es un deportista y el usuario logueado también
      setCanSend(true)
    } else if (isSportman && user.user.club) {
      // Si el usuario que revisamos es un deportista y el logueado es club
      const res2 = hasSuccessfulMatch(user?.user?.club?.matches, userrr?.id)
      setCanSend(res2)
    } else if (isClub && user.user.club) {
      // Si ambos usuarios son clubs
      setCanSend(true)
    } else if (isClub && user.user.sportman) {
      // Si el usuario que revisamos es club y el usuario logueado es deportista
      const e = hasSuccessfulMatchClub(user?.user?.matches, userrr?.id)
      setCanSend(e)
    }

    // Asegúrate de tener un catch-all o else para manejar cualquier otro caso
    else {
      setCanSend(false) // Si no cumple ninguna condición, por defecto no puede enviar mensajes.
    }
  }, [route?.params?.user, user.user])

  useEffect(() => {
    let roomId
    const usuario = user
    dispatch(
      getUserChat({
        userA: usuario?.user?.id,
        userB: route?.params?.receiverId
      })
    ).then(async (e) => {
      if (!e.payload) {
        try {
          const chatCreate = await axiosInstance
            .post(`/chat/create`, {
              userAId: usuario?.user?.id,
              userBId: route?.params?.receiverId
            })
            .then((r) => {
              setShowInput(true)
              // joinRoom(r?.data?.data?.id)
              roomId = r?.data?.data?.id
              joinRoom(roomId)

              setChat(r.data.data)
              dispatch(getUserData(usuario?.user?.id))
            })

          const user =
            chatCreate.data.data.userA.id === user?.user?.id
              ? chatCreate.data.data.userB
              : chatCreate.data.data.userA
          setUsuario(user)
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          setShowInput(true)
          setChat(e?.payload?.data)
          roomId = e?.payload?.data?.id
          const chat = e?.payload?.data
          console.log(e?.payload?.data?.id, 'eeeeeeeeeeee3')
          const user =
            e?.payload.data.userA.id === user?.user?.id
              ? e?.payload.data.userB
              : e?.payload.data.userA
          setUsuario(user)
          const copy = [...chat?.messages]
          const sortedMessages = copy?.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )

          joinRoom(roomId)
          dispatch(setAllMessages(sortedMessages))
          openConversation(chat?.id, route?.params?.receiverId)

          // joinRoom(e?.payload?.data?.id)
        } catch (error) {
          console.log(error)
        }
      }
    })

    return () => {
      console.log('saliendo de', roomId)
      leaveRoom(roomId)
      dispatch(emptyAllMessages())
      // dispatch(getUserChats(user?.user?.id))
    }
  }, [])

  // const setAllToRead = async () => {
  //   console.log('on setAllToRead')

  //   const messagesToSetReaded = allMessages?.filter(
  //     (message) =>
  //       message.senderId !== user?.user?.id && message?.isReaded === false
  //   )

  //   console.log('messagesToSetReaded', messagesToSetReaded)
  //   console.log('entra')

  //   if (messagesToSetReaded.length > 0) {
  //     try {
  //       const promises = messagesToSetReaded.map((message) =>
  //         axiosInstance.put(`chat/readed/${message?.id}`)
  //       )
  //       await Promise.all(promises)
  //       dispatch(setAllConversationMessagesToRead())
  //     } catch (error) {
  //       console.error('Error setting messages to read', error)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (allMessages && allMessages.length > 0) {
  //     // setAllToRead()

  //     emitToUser(route?.params?.receiverId, 'readMessages', 'data')
  //   }
  // }, [allMessages])

  const handleFollow = () => {
    setShowOptionsModal(false)
    return
  }

  // const handleRemoveChat = async () => {
  //   setShowDeletePopUp(false)
  //   const body = {
  //     senderId: user?.user?.id.toString(),
  //     receiverId: route?.params?.receiverId?.toString(),
  //     room: roomId.toString()
  //   }
  //   await axiosInstance.post('chat/deleteAllMessageChat', body).then((r) => {
  //     dispatch(
  //       getChatHistory({
  //         sender: user?.user?.id,
  //         receiver: route?.params?.receiverId
  //       })
  //     )
  //     console.log(r, 'ressssssss')
  //   })
  // }

  if (true) {
    return (
      <SafeAreaView style={styles.chatAbierto}>
        {isFocused && (
          <StatusBar barStyle={'light-content'} backgroundColor="#000" />
        )}
        {showOptionsModal && (
          <Modal visible={showOptionsModal} transparent={true}>
            <TouchableWithoutFeedback
              onPress={() => setShowOptionsModal(false)}
            >
              <View
                style={{
                  flex: 1,
                  marginTop: 45,
                  paddingRight: 15,
                  alignItems: 'flex-end'
                }}
              >
                <View
                  style={{
                    backgroundColor: '#252525',
                    borderRadius: 8,
                    width: 170
                  }}
                >
                  {route?.params?.usr?.type !== 'club' && (
                    <Pressable
                      onPress={handleFollow}
                      style={{
                        height: 35,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#505050',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Text style={{ color: '#fff', fontSize: 14 }}>
                        {user.user.followingUsers?.find(
                          (u) => u.id === route?.params?.usr?.id
                        )
                          ? 'Dejar de seguir'
                          : 'Seguir'}
                      </Text>
                    </Pressable>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      setShowOptionsModal(false)
                      if (route?.params?.usr?.type === 'club') {
                        navigation.navigate('ClubProfile', {
                          author: route.params.usr
                        })
                      } else {
                        navigation.navigate('PerfilFeedVisualitzaciJug', {
                          author: route.params.usr
                        })
                      }
                    }}
                    style={{
                      height: 35,
                      width: '100%',
                      borderBottomWidth: 1,
                      borderBottomColor: '#505050',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 14 }}>
                      Ver perfil
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowOptionsModal(false)
                      setShowDeletePopUp(true)
                    }}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: '4%'
                    }}
                  >
                    <Text
                      style={{
                        color: '#fff',
                        fontSize: 14,
                        textAlign: 'center'
                      }}
                    >
                      Eliminar conversación
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}

        {showDeletePopUp && (
          <Modal visible={showDeletePopUp} transparent={true}>
            <TouchableWithoutFeedback onPress={() => setShowDeletePopUp(false)}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 100
                }}
              >
                <View
                  style={{
                    backgroundColor: '#252525',
                    borderRadius: 8,
                    width: '55%',
                    paddingVertical: 20,
                    gap: 25,
                    justifyContent: 'space-around',
                    alignItems: 'center'
                  }}
                >
                  <View
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={{ color: '#fff', fontSize: 20, fontWeight: 400 }}
                    >
                      Está seguro?
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      width: '100%'
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => setShowDeletePopUp(false)}
                      style={{
                        borderRadius: 5,
                        height: 33,
                        width: '35%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#E1451E'
                      }}
                    >
                      <Text
                        style={{ color: '#fff', fontSize: 15, fontWeight: 400 }}
                      >
                        Cancelar
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={handleRemoveChat}
                      style={{
                        borderRadius: 5,
                        height: 33,
                        width: '35%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#E1451E'
                      }}
                    >
                      <Text
                        style={{ color: '#fff', fontSize: 15, fontWeight: 400 }}
                      >
                        Aceptar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        )}
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            paddingBottom: 5
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable
              onPress={() => {
                navigation.goBack()
                leaveRoom(chat?.id)
              }}
            >
              <Image
                style={{
                  width: 9,
                  height: 18,
                  marginRight: 12,
                  marginTop: 2.5
                }}
                contentFit="cover"
                source={require('../assets/coolicon4.png')}
              />
            </Pressable>

            <TouchableOpacity
              onPress={() => {
                if (route?.params?.usr?.type === 'club') {
                  navigation.navigate('ClubProfile', {
                    author: route?.params?.usr
                  })
                } else {
                  navigation.navigate('PerfilFeedVisualitzaciJug', {
                    author: route?.params?.usr
                  })
                }
              }}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  borderRadius: 50,
                  marginRight: 10,
                  overflow: 'hidden',
                  backgroundColor: mainColor
                }}
              >
                <Image
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  contentFit="cover"
                  source={
                    route.params.profilePic === '' || !route.params.profilePic
                      ? require('../assets/whiteSport.png')
                      : { uri: route.params.profilePic }
                  }
                />
              </View>
              <Text style={[styles.jordiEspelt, styles.jordiEspeltTypo]}>
                {route.params.receiverName}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              width: 50,
              alignItems: 'flex-end'
            }}
            onPress={() => setShowOptionsModal(true)}
          >
            <ThreePointsSVG />
          </TouchableOpacity>
        </View>

        {false ? (
          <View
            style={{
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ActivityIndicator
              style={{
                backgroundColor: 'transparent',
                alignSelf: 'center'
              }}
              animating={true}
              size="xlarge"
              color={mainColor}
            />
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }
          >
            <View
              style={{
                flexDirection: 'column-reverse',
                paddingRight: 10,
                paddingLeft: 10
              }}
            >
              {allMessages?.map((chat) => {
                if (
                  (chat.senderId === user.user.id && chat.senderDelete) ||
                  (chat.receiverId === user.user.id && chat.receiverDelete)
                ) {
                  return
                } else {
                  return (
                    <Chat
                      hour={getTimeFromDate(chat?.createdAt)}
                      key={chat?.id}
                      text={chat?.message}
                      isMy={chat?.senderId === user?.user?.id}
                      read={chat?.isReaded}
                    />
                  )
                }
              })}
            </View>
          </ScrollView>
        )}
        <View>
          {canSend ? (
            <View
              style={{
                margin: 10,
                padding: 10,
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#fff',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <TextInput
                value={message}
                multiline
                onChangeText={setMessage}
                placeholder="Escribe tu mensaje..."
                placeholderTextColor="#fff"
                style={{
                  paddingLeft: 15,
                  flex: 1,
                  maxWidth: '85%',
                  fontSize: 16,
                  color: '#fff'
                }}
              />
              <TouchableOpacity
                disabled={message ? false : true}
                onPress={handleSendMessage}
                style={{
                  marginLeft: 10,
                  width: 25
                }}
              >
                <Image
                  source={contact}
                  style={{
                    tintColor: message ? '#fff' : '#cecece',
                    width: 22,
                    height: 22
                  }}
                />
              </TouchableOpacity>
            </View>
          ) : loading ? (
            <ActivityIndicator
              style={{
                backgroundColor: 'transparent',
                alignSelf: 'center'
              }}
              animating={true}
              size="xlarge"
              color={mainColor}
            />
          ) : (
            <View
              style={{
                margin: 10,
                padding: 15,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.3)'
              }}
            >
              <Text style={{ color: '#fff' }}>
                No puedes enviar mensajes si no has hecho match.
              </Text>
            </View>
          )}
        </View>
        {/* {!canSend && (
          <View
            style={{
              margin: 10,
              padding: 15,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
          >
            <Text style={{ color: '#fff' }}>
              No puedes enviar mensajes si no has hecho match.
            </Text>
          </View>
        )} */}
      </SafeAreaView>
    )
  }
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
    paddingTop: 10,
    paddingHorizontal: 5,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default ChatAbierto2
