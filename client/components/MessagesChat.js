import { View, Text, StyleSheet, Pressable, StatusBar } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/core'
import { getChatHistory } from '../redux/actions/chats'
import axiosInstance from '../utils/apiBackend'
import { Context } from '../context/Context'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useIsFocused } from '@react-navigation/native'
import { getAllMatchs, sendMatch } from '../redux/actions/matchs'
import { updateOffer } from '../redux/actions/offers'
import { current } from '@reduxjs/toolkit'

const MessagesChat = ({
  name,
  selectedUserId,
  profilePic,
  applicant,
  sportmanId
}) => {
  const dispatch = useDispatch()
  const { offers } = useSelector((state) => state.offers)
  console.log('profilePic: ', profilePic)
  const isFocused = useIsFocused()
  const { getTimeFromDate } = useContext(Context)
  const navigation = useNavigation()
  const [convMessages, setConvMessages] = useState()
  const [lastMessage, setLastMessage] = useState()
  const { user } = useSelector((state) => state.users)
  console.log('applicant: ', applicant)
  const getChatMessages = async () => {
    const { data } = await axiosInstance.get(
      `chat/room?limit=${10}&senderId=${user.user.id}&receiverId=${selectedUserId}`
    )
    setConvMessages(data)
  }

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
        <View style={styles.topContainer}>
          <Image
            style={[styles.groupIconLayout]}
            contentFit="cover"
            source={{ uri: profilePic }}
          />
          <View style={{ alignSelf: 'flex-start' }}>
            <Text style={[styles.hasHechoUn, styles.ayerTypo]}>{name}</Text>
            <Text style={[styles.hasHechoUn, styles.ayerTypo]}>
              {lastMessage
                ? lastMessage?.message?.message?.length >= 35
                  ? lastMessage?.message?.message.slice(0, 35).concat('...')
                  : lastMessage?.message?.message
                : 'Inicia una conversacion!'}
            </Text>
          </View>
        </View>

        {!applicant && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <Text style={[styles.ayer, styles.ayerTypo]}>
              {lastMessage
                ? getTimeFromDate(lastMessage?.message?.createdAt)
                : ''}
            </Text>
          </View>
        )}
        {applicant && (
          <Pressable
            onPress={() => {
              const currentOffer = offers.filter(
                (offer) =>
                  offer.inscriptions && offer.inscriptions.includes(sportmanId)
              )[0]
              const offerId = offers.filter(
                (offer) =>
                  offer.inscriptions && offer.inscriptions.includes(sportmanId)
              )[0].id
              console.log('offerId: ', offerId)
              const newInscriptions = currentOffer.inscriptions.filter(
                (applicant) => applicant !== sportmanId
              )

              console.log('newInscriptions: ', newInscriptions)
              const actualMatches = currentOffer.matches || []
              const newMatchs = [...actualMatches, sportmanId]
              console.log('newMatchs: ', newMatchs)

              dispatch(
                sendMatch({
                  offerId,
                  sportmanId,
                  clubId: user.user.club.id,
                  status: 'success',
                  prop1: {
                    clubId: user.user.club.id,
                    offerId,
                    sportmanId
                  }
                })
              ).then((data)=>dispatch(getAllMatchs()))

              dispatch(
                updateOffer({
                  id: offerId,
                  body: { inscriptions: newInscriptions, matches: newMatchs }
                })
              )
            }}
            style={{
              backgroundColor: Color.colorMaroon,
              width: 100,
              height: 40,
              position: 'absolute',
              right: 10,
              zIndex: 10000,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: Border.br_81xl
            }}
          >
            <Text
              style={{
                marginLeft: 20,
                color: Color.bALONCESTO,
                fontWeight: 600,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontSize: FontSize.t2TextSTANDARD_size
              }}
            >
              Match
            </Text>
            <View style={styles.match}>
              <Image
                style={styles.image}
                contentFit="cover"
                source={require('../assets/group9.png')}
              />
            </View>
          </Pressable>
        )}
      </Pressable>
      <View style={styles.line} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 35,
    width: 35,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  groupIconLayout: {
    height: 35,
    borderRadius: 50,
    width: 35
  },
  topContainer: {
    flexDirection: 'row',
    gap: 15,
    width: '80%'
  },
  match: {
    marginLeft: 20,
    color: Color.bALONCESTO,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH
  },
  ayerTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ayer: {
    color: Color.gREY2SPORTSMATCH
  },
  point: {
    fontSize: 45,
    top: -2.5,
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.bALONCESTO
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5
  },
  line: {
    borderWidth: 0.5,
    borderColor: Color.colorDimgray_100,
    marginVertical: 10
  },
  matchContainer: {
    backgroundColor: Color.colorMaroon,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Border.br_81xl,
    marginRight: 20
  },
  match: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Color.bALONCESTO,
    position: 'absolute',
    left: -12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 30,
    height: 23
  },
  textView: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline'
  }
})

export default MessagesChat
