import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
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

const MessagesChat = ({
  name,
  selectedUserId,
  profilePic,
  applicant,
  sportmanId
}) => {
  const dispatch = useDispatch()
  const { offers } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const isFocused = useIsFocused()
  const { getTimeFromDate, clubMatches, getClubMatches, userMatches } =
    useContext(Context)
  const navigation = useNavigation()
  const [convMessages, setConvMessages] = useState([])
  const [lastMessage, setLastMessage] = useState()
  const { user, allUsers } = useSelector((state) => state.users)

  const getChatMessages = async () => {
    const { data } = await axiosInstance.get(
      `chat/room?&senderId=${user.user.id}&receiverId=${selectedUserId}`
    )
    setConvMessages(data)
  }

  // console.log('name:',name,'sportmanId: ', sportmanId)

  useEffect(() => {
    getChatMessages()
  }, [])

  const getLastMessage = (messages) => {
    const received = messages[0].senderId === user.user.id
    setLastMessage({ message: messages[0], received })
  }

  useEffect(() => {
    if (convMessages?.length) {
      getLastMessage(convMessages)
    }
  }, [convMessages])

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
          navigation.navigate('ChatAbierto1', {
            receiverId: selectedUserId,
            receiverName: name,
            profilePic
          })
        }}
      >
        <View style={{ flexDirection: 'row', gap: 15, width: '80%' }}>
          <Image
            style={{ height: 35, borderRadius: 50, width: 35 }}
            contentFit="cover"
            source={{ uri: profilePic }}
          />
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
                ? lastMessage?.message?.message?.length >= 20
                  ? lastMessage?.message?.message.slice(0, 20).concat('...')
                  : lastMessage?.message?.message
                : 'Inicia una conversacion!'}
            </Text>
          </View>
        </View>

        {user.user.type === 'club' &&
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
                    backgroundColor: Color.bALONCESTO
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
          )}
        {user.user.type !== 'club' &&
          userMatches?.filter(
            (match) =>
              match?.prop1?.clubData.userId === selectedUserId &&
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
              {userMatches?.filter(
                (match) =>
                  match?.prop1?.clubData.userId === selectedUserId &&
                  match.status === 'success'
              )?.length > 0 && (
                <View
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: 100,
                    backgroundColor: Color.bALONCESTO
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
          )}
        {user.user.type === 'club' &&
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
            <Pressable
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
                console.log('offerId: ', offerId)
                const newInscriptions = currentOffer.inscriptions.filter(
                  (applicant) => applicant !== sportmanId
                )

                console.log('newInscriptions: ', newInscriptions)
                const actualMatches = currentOffer.matches || []
                const newMatchs = [...actualMatches, sportmanId]
                console.log('newMatchs: ', newMatchs)

                const sportmanUser = allUsers.filter(
                  (user) => user?.sportman?.id === sportmanId
                )[0]
                console.log('sportmanUser', sportmanUser)

                console.log('club', user?.user)

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
                    // console.log('data from match: ', data.payload)
                    // console.log('body to sendNotification: ', {
                    //   title: 'Match',
                    //   message: 'Has hecho match!',
                    //   recipientId: data?.payload?.prop1?.sportManData?.userId,
                    //   date: new Date(),
                    //   read: false,
                    //   prop1: {
                    //     matchId: data?.payload?.id,
                    //     clubData: {
                    //       name: user?.user?.nickname,
                    //       userId: user.user.id,
                    //       ...user?.user?.club
                    //     }
                    //   }
                    // })
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
                height: 40,
                position: 'absolute',
                right: 0,
                zIndex: 10000,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Border.br_81xl
              }}
            >
              <Image
                style={{ height: 58 * 0.7, width: 111 * 0.7 }}
                contentFit="contain"
                source={require('../assets/matchButton.png')}
              />
            </Pressable>
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
