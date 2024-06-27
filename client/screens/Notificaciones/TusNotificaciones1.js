import React, { useContext, useEffect, useState } from 'react'
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
import { getAllUsers } from '../../redux/actions/users'
import { useDispatch } from 'react-redux'
import axiosInstance from '../../utils/apiBackend'
import { Context } from '../../context/Context'
import CustomHeaderBack from '../../components/CustomHeaderBack'

const TusNotificaciones1 = () => {
  const [value, setValue] = useState('')
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const [applicants, setApplicants] = useState([])
  const dispatch = useDispatch()
  const { allNotifications } = useSelector((state) => state.notifications)
  const { sportman } = useSelector((state) => state.sportman)
  const { allMatchs } = useSelector((state) => state.matchs)
  const { user, allUsers, mainColor } = useSelector((state) => state.users)

  const { offers } = useSelector((state) => state.offers)
  const { getUsersMessages, usersWithMessages, setActiveIcon } =
    useContext(Context)

  const userId = user?.user?.id

  useEffect(() => {}, [allUsers, usersWithMessages])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  React.useEffect(() => {
    setActiveIcon('message')
  }, [isFocused])

  const sortUsers = (userA, userB) => {
    const isInMessagesB =
      usersWithMessages?.filter((user) => user.id === userA.id).length > 0
    const isInMessagesA =
      usersWithMessages?.filter((user) => user.id === userB.id).length > 0

    if (isInMessagesA && !isInMessagesB) {
      return -1 // userA has messages, should come before userB
    } else if (!isInMessagesA && isInMessagesB) {
      return 1 // userB has messages, should come before userA
    } else {
      return 0 // maintain current order if both have messages or neither have messages
    }
  }

  const filteredUsers = allUsers
    ?.filter((user) =>
      user?.nickname?.toLowerCase()?.includes(value?.toLowerCase())
    )
    .sort(sortUsers)
    .reverse()

  // useEffect(() => {
  //   offers.forEach((offer) => {
  //     axiosInstance.delete(`offer/${offer.id}`)
  //   })
  //   allMatchs.forEach((match) => {
  //     axiosInstance.delete(`match/${match.id}`)
  //   })
  //   allNotifications.forEach((notification) => {
  //     axiosInstance.delete(`notification/${notification.id}`)
  //   })
  // }, [])

  // const getAllUsersMessages = async () => {
  //   const filteredUsers = allUsers.filter(user=>user.id!== userId)
  //   filteredUsers.map(async user=>{
  //     const { data } = await axiosInstance.get(
  //       `chat/room?limit=${10}&senderId=${user.user.id}&receiverId=${selectedUserId}`
  //     )
  //     console.log('convmessages data from noti: ',data)
  //   })
  // }
  // useEffect(()=>{
  //   getAllUsersMessages()
  // },[])

  useEffect(() => {
    getUsersMessages()
  }, [])

  useEffect(() => {
    if (user && user?.user?.type === 'club' && offers) {
      const clubOffers = offers?.filter(
        (offer) => offer.clubId === user.user.club.id
      )
      const postulants = clubOffers.map((offer) => offer.inscriptions)
      const allApplications = [...new Set([].concat(...postulants))]
      allApplications.length > 0 && setApplicants(allApplications)
    }
  }, [offers])

  const [selectedComponent, setSelectedComponent] = useState('messages')
  // console.log('allusers: ', allUsers)

  if (!allUsers)
    return <View style={{ flex: 1, backgroundColor: '#000' }}></View>
  return (
    <SafeAreaView style={styles.tusNotificaciones}>
      {isFocused && (
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      )}
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
            onPress={() => setSelectedComponent('notifications')}
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
              Notíficaciones
            </Text>
            {allNotifications?.filter(
              (notification) => notification.recipientId === userId
            ).length > 0 &&
              allNotifications
                ?.filter((notification) => notification.recipientId === userId)
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
          <ScrollView>
            {allNotifications?.filter(
              (notification) => notification.recipientId === userId
            ).length > 0 ? (
              allNotifications
                ?.filter((notification) => notification.recipientId === userId)
                .map((notification) => <Notifications data={notification} />)
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
                  No tienes notificaciones!
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
          <ScrollView
            keyboardShouldPersistTaps={'always'}
            style={{
              marginTop: 30,
              paddingHorizontal: 14
            }}
          >
            {value === '' && usersWithMessages.length === 0 ? (
              <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={{ fontSize: 14, fontWeight: 400, color: '#fff' }}>
                  Inicia una conversación!
                </Text>
              </View>
            ) : (
              value === '' &&
              usersWithMessages?.map((user) => (
                <MessagesChat
                  setValue={setValue}
                  key={user.id}
                  name={user.nickname}
                  sportmanId={user.sportman?.id}
                  profilePic={
                    user?.type === 'club'
                      ? user?.club?.img_perfil
                      : user?.sportman?.info?.img_perfil
                  }
                  selectedUserId={user.id}
                  // applicant={applicants?.includes(user.sportman?.id)}
                />
              ))
            )}
            {value !== '' &&
              filteredUsers.map((user) => (
                <MessagesChat
                  setValue={setValue}
                  key={user.id}
                  name={user.nickname}
                  sportmanId={user.sportman?.id}
                  profilePic={
                    user?.type === 'club'
                      ? user?.club?.img_perfil
                      : user?.sportman?.info?.img_perfil
                  }
                  selectedUserId={user.id}
                  // applicant={applicants?.includes(user.sportman?.id)}
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
