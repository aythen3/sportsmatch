import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StatusBar,
  TouchableOpacity
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import axiosInstance from '../utils/apiBackend'
import { Context } from '../context/Context'
import { useIsFocused } from '@react-navigation/native'
import { getAllMatchs, sendMatch } from '../redux/actions/matchs'
import { updateOffer } from '../redux/actions/offers'
import { sendNotification } from '../redux/actions/notifications'
import { getColorsWithOpacity } from '../utils/colorUtils'

const MessagesChat = ({
  name,
  selectedUserId,
  profilePic,
  applicant,
  sportmanId,
  setValue,
  value
}) => {
  const dispatch = useDispatch()
  const { mainColor } = useSelector((state) => state.users)
  const { offers } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const isFocused = useIsFocused()
  const {
    getTimeFromDate,
    clubMatches,
    getClubMatches,
    userMatches,
    notReaded,
    notReadedMessages,
    usersWithMessages
  } = useContext(Context)
  const navigation = useNavigation()
  const [convMessages, setConvMessages] = useState([])
  const [lastMessage, setLastMessage] = useState()
  const [loading, setLoading] = useState(true)
  const { user, allUsers } = useSelector((state) => state.users)
  const moreOpacity = 0.65 // 80% opacity
  const lessOpacity = 0.4 // 40% opacity
  const colors = getColorsWithOpacity(mainColor, moreOpacity, lessOpacity)

  const getChatMessages = async () => {
    if (user?.user?.id && selectedUserId) {
      // console.log('getting messages from', user.user.id, 'and', selectedUserId)
      const { data } = await axiosInstance.get(
        `chat/room?senderId=${user.user.id}&receiverId=${selectedUserId}`
      )
      // console.log('====SETTING CONV MESSAGES TO', data)
      setConvMessages(data)
    }
  }
  // console.log('NOT READED MESSAGES LENGTH=====', notReaded)
  // console.log('NOTREADEDMESSAGES========', notReadedMessages)
  useEffect(() => {
    getChatMessages()
  }, [usersWithMessages, value])

  useEffect(() => {
    setLoading(true)
    // console.log('CLEAN USEEFFECT GETCHAT')
    getChatMessages()
  }, [])

  const getLastMessage = (messages) => {
    const received = messages[0].senderId === user.user.id
    setLastMessage({ message: messages[0], received })
    setLoading(false)
  }

  useEffect(() => {
    if (convMessages?.length > 0) {
      getLastMessage(
        convMessages.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      )
    } else {
      setLastMessage('')
      setLoading(false)
    }
  }, [convMessages])

  useEffect(() => {
    console.log(
      name,
      'INSCRIPT?',
      offers.filter(
        (offer) => offer.inscriptions && offer.inscriptions.includes(sportmanId)
      )
    )
    console.log(
      'TIENE QUE PODER MATCHEAR? =========',
      user?.user?.type === 'club' &&
        clubMatches?.filter(
          (match) =>
            match?.prop1?.sportmanId === sportmanId &&
            match.status === 'success'
        )?.length === 0 &&
        offers.filter(
          (offer) =>
            offer.inscriptions &&
            offer.inscriptions.includes(sportmanId) &&
            offer.club.id === club.id
        ).length > 0
    )
  }, [])

  useEffect(() => {
    // lastMessage &&
    //   console.log(
    //     '==LAST MESSAGE FROM ',
    //     name,
    //     ':',
    //     lastMessage.message.message
    //   )
  }, [lastMessage])

  if (loading === true || lastMessage === null) return null
  // if (!lastMessage) return null
  return (
    <View>
      <Pressable
        style={{
          zIndex: -10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 5
        }}
        onPress={() => {
          setValue('')
          navigation.navigate('ChatAbierto1', {
            receiverId: selectedUserId,
            receiverName: name,
            profilePic
          })
        }}
      >
        <View style={{ flexDirection: 'row', gap: 15, width: '80%' }}>
          <View
            style={{
              height: 35,
              borderRadius: 50,
              width: 35,
              overflow: 'hidden',
              backgroundColor: mainColor
            }}
          >
            <Image
              style={{
                height: '100%',
                width: '100%'
              }}
              contentFit="cover"
              source={
                profilePic === '' || !profilePic
                  ? require('../assets/whiteSport.png')
                  : { uri: profilePic }
              }
            />
          </View>
          <View style={{ alignSelf: 'flex-start' }}>
            <Text
              style={{
                fontWeight: '700',
                color: Color.wHITESPORTSMATCH,
                fontSize: FontSize.t1TextSMALL_size,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {name}
            </Text>
            <Text
              style={{
                fontWeight: '700',
                color: Color.wHITESPORTSMATCH,
                fontSize: FontSize.t1TextSMALL_size,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {lastMessage
                ? lastMessage?.message?.message?.length >= 22
                  ? lastMessage?.message?.message.slice(0, 22).concat('...')
                  : lastMessage?.message?.message
                : 'Inicia una conversacion!'}
            </Text>
          </View>
        </View>

        {/* {user?.user?.type === 'club' &&
          clubMatches?.filter(
            (match) =>
              match?.prop1?.sportmanId === sportmanId &&
              match.status === 'pending'
          )?.length === 0 && (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5
              }}
            >
              {clubMatches?.filter(
                (match) =>
                  match?.prop1?.sportmanId === sportmanId &&
                  match.status === 'success'
              )?.length > 0 && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 100,
                    backgroundColor: mainColor
                  }}
                />
              )}
              <Text
                style={{
                  color: Color.gREY2SPORTSMATCH,
                  fontSize: FontSize.t1TextSMALL_size,
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                {lastMessage
                  ? getTimeFromDate(lastMessage?.message?.createdAt)
                  : ''}
              </Text>
            </View>
          )} */}
        {
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5
            }}
          >
            {notReadedMessages.some(
              (message) => message.senderId === selectedUserId
            ) && (
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 100,
                  backgroundColor: mainColor
                }}
              />
            )}
            <Text
              style={{
                color: Color.gREY2SPORTSMATCH,
                fontSize: FontSize.t1TextSMALL_size,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {lastMessage
                ? getTimeFromDate(lastMessage?.message?.createdAt)
                : ''}
            </Text>
          </View>
        }
        {user?.user?.type === 'club' &&
          clubMatches?.filter(
            (match) =>
              match?.prop1?.sportmanId === sportmanId &&
              match.status === 'success'
          )?.length === 0 &&
          offers.filter(
            (offer) =>
              offer.inscriptions &&
              offer.inscriptions.includes(sportmanId) &&
              offer.club.id === club.id
          ).length > 0 && (
            <TouchableOpacity
              onPress={() => {
                const currentOffer = offers.filter(
                  (offer) =>
                    offer.inscriptions &&
                    offer.inscriptions.includes(sportmanId)
                )[0]
                const offerId = offers.filter(
                  (offer) =>
                    offer.inscriptions &&
                    offer.inscriptions.includes(sportmanId)
                )[0]?.id
                const newInscriptions = currentOffer.inscriptions.filter(
                  (applicant) => applicant !== sportmanId
                )

                const actualMatches = currentOffer.matches || []
                const newMatchs = [...actualMatches, sportmanId]

                const sportmanUser = allUsers.filter(
                  (user) => user?.sportman?.id === sportmanId
                )[0]

                dispatch(
                  sendMatch({
                    offerId,
                    sportmanId,
                    clubId: user?.user?.club?.id,
                    status: 'success',
                    prop1: {
                      clubId: user?.user?.club?.id,
                      offerId,
                      sportmanId,
                      sportManData: {
                        userId: sportmanUser?.id,
                        profilePic: sportmanUser?.sportman?.info?.img_perfil,
                        name: sportmanUser?.nickname
                      },
                      clubData: {
                        userId: user?.user?.id,
                        name: user?.user?.nickname,
                        profilePic: user?.user?.club?.img_perfil
                      }
                    }
                  })
                )
                  .then((data) => {
                    dispatch(
                      sendNotification({
                        title: 'Match',
                        message: 'Has hecho match!',
                        recipientId: data?.payload?.prop1?.sportManData?.userId,
                        date: new Date(),
                        read: false,
                        prop1: {
                          matchId: data?.payload?.id,
                          clubData: {
                            name: user?.user?.nickname,
                            userId: user?.user?.id,
                            ...user?.user?.club
                          }
                        }
                      })
                    )
                  })
                  .then((data) => dispatch(getAllMatchs()))
                  .then((data) => getClubMatches())

                dispatch(
                  updateOffer({
                    id: offerId,
                    body: { inscriptions: newInscriptions, matches: newMatchs }
                  })
                )
              }}
              style={{
                position: 'absolute',
                right: 50,
                flexDirection: 'row',
                backgroundColor: colors.lessOpaque,
                borderRadius: Border.br_81xl,
                height: 22,
                width: 69,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 4
              }}
            >
              <Text
                style={{
                  width: '70%',
                  fontSize: 11,
                  textAlign: 'center',
                  marginLeft: '35%',
                  color: colors.moreOpaque,
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: '700'
                }}
              >
                {'Match'}
              </Text>
              <View
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: mainColor,
                  position: 'absolute',
                  left: 0
                }}
              >
                <Image
                  style={{ width: '80%', height: '80%' }}
                  contentFit="cover"
                  source={require('../assets/whiteSport.png')}
                />
              </View>
            </TouchableOpacity>
          )}
      </Pressable>
      <View
        style={{
          borderWidth: 0.5,
          borderColor: Color.colorDimgray_100,
          marginVertical: 10
        }}
      />
    </View>
  )
}

export default MessagesChat
