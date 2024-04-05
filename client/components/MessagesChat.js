import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setChat } from '../redux/slices/notificacions.slices'
import { useNavigation } from '@react-navigation/core'
import { getChatHistory } from '../redux/actions/chats'
import axiosInstance from '../utils/apiBackend'
import { Context } from '../context/Context'

const MessagesChat = ({
  name,
  message,
  read,
  send,
  confirmation,
  selectedUserId
}) => {
  const { getTimeFromDate } = useContext(Context)
  const navigation = useNavigation()
  const [convMessages, setConvMessages] = useState()
  const [lastMessage, setLastMessage] = useState()
  const { user } = useSelector((state) => state.users)

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

  // const cuteMessage =
  //   message.length >= 35 ? message.slice(0, 35).concat('...') : message

  return (
    <>
      <Pressable
        style={styles.pressable}
        onPress={() => {
          navigation.navigate('ChatAbierto1', {
            receiverId: selectedUserId,
            receiverName: name
          })
        }}
      >
        {user.user.type === 'club' ? (
          <View style={styles.topContainer}>
            <Image
              style={[styles.groupIconLayout]}
              contentFit="cover"
              source={require('../assets/mask-group1.png')}
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
        ) : (
          <View style={styles.topContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={[styles.groupIconLayout]}
                contentFit="cover"
                source={require('../assets/logo-uem21removebgpreview-1.png')}
              />
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              <Text style={[styles.hasHechoUn, styles.ayerTypo]}>{name}</Text>
              <Text style={[styles.hasHechoUn, styles.ayerTypo]}>
                {lastMessage
                  ? getTimeFromDate(lastMessage?.message?.createdAt)
                  : ''}
              </Text>
            </View>
          </View>
        )}

        <View style={styles.textView}>
          <Text style={[styles.ayer, styles.ayerTypo]}>
            {lastMessage
              ? getTimeFromDate(lastMessage?.message?.createdAt)
              : ''}
          </Text>

          {/* {confirmation && (
            <View style={styles.matchContainer}>
              <Text style={[styles.match, styles.timeTypo]}>Match</Text>
              <View style={styles.match}>
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={require('../assets/group9.png')}
                />
              </View>
            </View>
          )} */}
        </View>
      </Pressable>
      <View style={styles.line} />
    </>
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
    height: 28,
    width: 28
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
