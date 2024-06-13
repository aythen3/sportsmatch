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
  Dimensions
} from 'react-native'
import contact from '../assets/contact.png'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Padding, Border } from '../GlobalStyles'
import Chat from '../components/Chat'
import { useDispatch, useSelector } from 'react-redux'
import ThreePointsSVG from '../components/svg/ThreePointsSVG'
import { useRoute } from '@react-navigation/native'
import { emptyAllMessages, getChatHistory } from '../redux/actions/chats'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context } from '../context/Context'
import axiosInstance from '../utils/apiBackend'
import { setAllConversationMessagesToRead } from '../redux/slices/chats.slices'
import { useIsFocused } from '@react-navigation/native'
import { getAllUsers, updateUserData } from '../redux/actions/users'
import { updateUser } from '../redux/slices/users.slices'
import { sendNotification } from '../redux/actions/notifications'
import axios from 'axios'

const ChatAbierto1 = () => {
  const _ = require('lodash')
  const [selectedUserDetails, setSelectedUserDetails] = useState()
  const [showOptionsModal, setShowOptionsModal] = useState(false)
  const [showDeletePopUp, setShowDeletePopUp] = useState(false)
  const isFocused = useIsFocused()
  const {
    joinRoom,
    getUsersMessages,
    roomId,
    leaveRoom,
    sendMessage,
    getTimeFromDate
  } = useContext(Context)
  const [message, setMessage] = useState()
  const { allMessages } = useSelector((state) => state.chats)
  const { user, allUsers } = useSelector((state) => state.users)
  const route = useRoute()
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const scrollViewRef = useRef()

  const handleSendMessage = () => {
    sendMessage(message, user.user.id, route.params.receiverId)
    setMessage()
  }

  useEffect(() => {
    setSelectedUserDetails(
      allUsers.filter((user) => user.id === route.params.receiverId)[0]
    )
  
  }, [])
  useEffect(() => {
    joinRoom(user.user.id, route.params.receiverId)
    dispatch(
      getChatHistory({
        sender: user.user.id,
        receiver: route.params.receiverId
      })
    )
    return () => {
      dispatch(emptyAllMessages())
      leaveRoom(user.user.id, route.params.receiverId)
    }
  }, [])

  useEffect(() => {
    if (allMessages && allMessages.length > 0) {
      const messagesToSetReaded = allMessages?.filter(
        (message) =>
          message.senderId !== user.user.id && message.isReaded === false
      )
      // console.log('messagesToSetReaded: ', messagesToSetReaded)
      messagesToSetReaded.forEach((message) => {
        axiosInstance.put(`chat/readed/${message.id}`)
        dispatch(setAllConversationMessagesToRead())
      })
    }
  }, [allMessages])

  const userFollowing = user?.user?.following || []

  const handleFollow = () => {
    setShowOptionsModal(false)
    let actualUser = _.cloneDeep(user)
    const actualFollowers =
      allUsers.filter((user) => user.id === selectedUserDetails.id)[0]
        .followers || []
    const newFollowers = actualFollowers.includes(user?.user?.id)
      ? actualFollowers.filter((follower) => follower !== user?.user?.id)
      : [...actualFollowers, user?.user?.id]

    const newFollowingArray = userFollowing?.includes(selectedUserDetails.id)
      ? userFollowing.filter((followed) => followed !== selectedUserDetails.id)
      : [...userFollowing, selectedUserDetails.id]
    actualUser.user.following = newFollowingArray

    dispatch(
      updateUserData({
        id: selectedUserDetails.id,
        body: { followers: newFollowers }
      })
    )
      .then((data) => {
        dispatch(
          updateUserData({
            id: user.user.id,
            body: { following: newFollowingArray }
          })
        )
      })
      .then((response) => {
        if (newFollowers.includes(user?.user?.id)) {
          dispatch(
            sendNotification({
              title: 'Follow',
              message: `${user.user.nickname} ha comenzado a seguirte`,
              recipientId: selectedUserDetails.id,
              date: new Date(),
              read: false,
              prop1: {
                userId: user?.user?.id,
                userData: {
                  ...user
                }
              }
            })
          )
        }
        dispatch(getAllUsers())
        dispatch(updateUser(actualUser))
      })
    return
  }

  const handleRemoveChat = () => {
    setShowDeletePopUp(false)
    const body = {
      senderId: user?.user?.id.toString(),
      receiverId: route.params.receiverId.toString(),
      room: roomId
    }
   
    axiosInstance.post('chat/marcarMensajesComoEliminados', body)
  }


  if (selectedUserDetails)
    return (
      <View
        style={{
          flex: 1,
          overflow: 'hidden',
          paddingTop: 10,
          paddingHorizontal: 5,
          width: '100%',
          backgroundColor: Color.bLACK1SPORTSMATCH,
          borderWidth: 3,
          borderColor: 'red',
          justifyContent: 'space-between'
        }}
      >
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
                  {selectedUserDetails.type !== 'club' && (
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
                        {userFollowing?.includes(selectedUserDetails.id)
                          ? 'Dejar de seguir'
                          : 'Seguir'}
                      </Text>
                    </Pressable>
                  )}
                  <TouchableOpacity
                    onPress={() => {
                      setShowOptionsModal(false)
                      if (selectedUserDetails?.type === 'club') {
                        navigation.navigate('ClubProfile', {
                          author: selectedUserDetails
                        })
                      } else {
                        navigation.navigate('PerfilFeedVisualitzaciJug', {
                          author: selectedUserDetails
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
                      height: 35,
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 14 }}>
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
            
                getUsersMessages()
                navigation.goBack()
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
                if (selectedUserDetails?.type === 'club') {
                  navigation.navigate('ClubProfile', {
                    author: selectedUserDetails
                  })
                } else {
                  navigation.navigate('PerfilFeedVisualitzaciJug', {
                    author: selectedUserDetails
                  })
                }
              }}
              style={{ flexDirection: 'row', alignItems: 'center' }}
            >
              <Image
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 50,
                  marginRight: 10
                }}
                contentFit="cover"
                source={{ uri: route.params.profilePic }}
              />
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

        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={{
            justifyContent: 'flex-start'
          }}
          style={{
            position: 'absolute',
            bottom: 65,
            width: '100%',
            overflow: 'hidden',
            borderWidth: 2,
            height: Dimensions.get('screen').height - 235,
            borderColor: 'green'
          }}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({ animated: true })
          }
        >
          <View
            style={{
              flexDirection: 'column-reverse',
              paddingRight: 10,
              paddingLeft: 10,
              borderWidth: 3,
              borderColor: 'magenta',
              bottom: 0
            }}
          >
            {allMessages?.map((chat) => (
              <Chat
                hour={getTimeFromDate(chat.createdAt)}
                key={chat.id}
                text={chat.message}
                isMy={chat.senderId === user.user.id}
                read={chat.isReaded}
              />
            ))}
          </View>
        </ScrollView>
        <View
          style={{
            height: 50,
            margin: 10,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#fff'
          }}
        >
          <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Escribe tu mensaje..."
            placeholderTextColor="#fff"
            style={{
              flex: 1,
              paddingLeft: 15,
              maxWidth: '85%',
              fontSize: 16,
              color: '#fff'
            }}
          />
          <TouchableOpacity
            disabled={message ? false : true}
            onPress={handleSendMessage}
            style={{
              width: 25,
              position: 'absolute',
              right: 5,
              top: 12,
              right: 10
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
  chatAbierto: {}
})

export default ChatAbierto1
