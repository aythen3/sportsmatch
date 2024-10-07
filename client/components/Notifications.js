import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles'
import NotificacinMatch from '../screens/NotificacinMatch'
import { useDispatch, useSelector } from 'react-redux'
import TusMatchsDetalle from './../screens/TusMatchsDetalle'
import {
  getAllUsers,
  getUserData,
  updateUserData
} from '../redux/actions/users'
import {
  getAllNotifications,
  getNotificationsByUserId,
  sendNotification
} from '../redux/actions/notifications'
import { updateUser } from '../redux/slices/users.slices'
import axiosInstance from '../utils/apiBackend'
import { Context } from '../context/Context'
import { getAllMatchs, sendMatch } from '../redux/actions/matchs'
import { getColorsWithOpacity } from '../utils/colorUtils'
import { useNavigation } from '@react-navigation/core'

const Notifications = ({ data }) => {
  const _ = require('lodash')
  const [isMatch, setIsMatch] = useState(false)
  const {
    clubMatches,
    userMatches,
    getClubMatches,
    formatDateDifference,
    getTimeFromDate
  } = useContext(Context)
  const [details, setDetails] = useState(false)
  const { allUsers, user, mainColor } = useSelector((state) => state.users)
  const [selectedClubDetails, setSelectedClubDetails] = useState()
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()
  const moreOpacity = 0.65 // 80% opacity
  const lessOpacity = 0.4 // 40% opacity
  const colors = getColorsWithOpacity(mainColor, moreOpacity, lessOpacity)
  const navigation = useNavigation()
  function formatDate(timestamp) {
    const date = new Date(timestamp)
    // Extract the day, month, and year components
    const day = date.getDate()
    const month = date.getMonth() + 1 // Months are zero-indexed, so we add 1
    const year = date.getFullYear() % 100 // Get the last two digits of the year

    // Pad day and month with leading zeros if necessary
    const formattedDay = day < 10 ? '0' + day : day
    const formattedMonth = month < 10 ? '0' + month : month

    // Return the formatted date string
    return `${formattedDay}/${formattedMonth}/${year}`
  }

  const userFollowing = user?.user?.following || []

  useEffect(() => {
    // console.log('clubMatches', clubMatches[0].prop1.sportManData.userId)
    console.log('notif data', data)
  }, [])
  //console.log('data', data)
  return (
    <Pressable
      style={{ paddingHorizontal: 10 }}
      onPress={async () => {
        setOpen(!open)
        if (!data.read) {
          await axiosInstance
            .patch(`notification/${data.id}`, { read: true })
            .then(async (res) => {
              dispatch(getNotificationsByUserId(user.user.id))
            })
        }
        if (data.title === 'Solicitud') {
          setSelectedClubDetails(
            allUsers.filter((user) => user.id === data.prop1.clubData.userId)[0]
          )
          setIsMatch(true)
          return
        }
        if (data.title === 'Match') {
          setDetails(true)
          setSelectedClubDetails(
            allUsers.filter((user) => user.id === data.prop1.clubData.userId)[0]
          )
        }
        if (data.title === 'Follow') {
          navigation.navigate('PerfilFeedVisualitzaciJug', {
            author: data.user
          })
        }
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        {data.title === 'Solicitud' && (
          <Image
            style={{
              height: 45,
              width: 45,
              alignSelf: 'flex-start',
              borderRadius: 8,
              backgroundColor:
                data?.prop1?.clubData?.img_perfil === '' && mainColor
            }}
            contentFit="cover"
            source={
              data?.prop1?.clubData?.img_perfil !== ''
                ? { uri: data.prop1.clubData.img_perfil }
                : require('../assets/whiteSport.png')
            }
          />
        )}
        {data.title === 'Follow' && (
          <Image
            style={{
              height: 45,
              width: 45,
              alignSelf: 'flex-start',
              borderRadius: 50,
              backgroundColor: !data?.user?.sportman?.info?.img_perfil
                ? mainColor
                : !data?.user?.club?.img_perfil
                  ? mainColor
                  : 'transparent'
            }}
            contentFit="cover"
            source={
              data?.user?.sportman?.info?.img_perfil
                ? { uri: data?.user?.sportman?.info?.img_perfil }
                : data?.user?.club?.img_perfil
                  ? { uri: data?.user?.club?.img_perfil }
                  : require('../assets/whiteSport.png')
            }
          />
        )}
        {data.title === 'Match' && (
          <Image
            style={{
              height: 45,
              width: 45,
              alignSelf: 'flex-start',
              borderRadius: 8,
              backgroundColor:
                data?.prop1?.clubData?.img_perfil === '' && mainColor
            }}
            contentFit="cover"
            source={
              data?.prop1?.clubData?.img_perfil !== ''
                ? { uri: data.prop1.clubData.img_perfil }
                : require('../assets/whiteSport.png')
            }
          />
        )}
        <View
          style={{
            backgroundColor: !data.read ? mainColor : 'transparent',
            fontSize: 20,
            width: 4,
            height: 4,
            borderRadius: 50,
            marginRight: -2,
            alignSelf: 'center',
            marginTop: 3.5
            // borderWidth: 2,
            // borderColor: 'red'
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 4,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between'
          }}
        >
          <Text
            numberOfLines={open ? 3 : 1}
            ellipsizeMode="tail"
            style={{
              fontWeight: '600',
              color: Color.wHITESPORTSMATCH,
              alignSelf: 'flex-start',
              marginRight: '4%',
              fontSize: FontSize.t1TextSMALL_size,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            {data?.user?.sportman?.info?.nickname || data?.user?.club?.name}{' '}
            {data.message}
          </Text>
        </View>
        {data.title !== 'Follow' && (
          <View
            style={{
              alignItems: 'flex-end'
            }}
          >
            <Text
              style={{
                color: Color.gREY2SPORTSMATCH,
                fontSize: FontSize.t1TextSMALL_size,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {formatDate(data.date)}
            </Text>
            {data.title === 'Inscripción' &&
              clubMatches.filter((match) => {
                if (match?.prop1?.sportManData?.userId === data.prop1.userId) {
                  return true
                }
                return false
              }).length === 0 && (
                <TouchableOpacity
                  onPress={() => {
                    console.log('sendind match to', data.prop1.userId)
                    dispatch(
                      sendMatch({
                        sportmanId: data.prop1.userData?.user?.sportman.id,
                        clubId: user?.user?.club?.id,
                        status: 'success',
                        prop1: {
                          clubId: user?.user?.club?.id,
                          sportmanId: data.prop1.userData?.user?.sportman.id,
                          sportManData: {
                            userId: data.prop1.userId,
                            profilePic:
                              data.prop1.userData?.user?.sportman.info
                                .img_perfil,
                            name: data.prop1.userData?.user?.sportman.info
                              .nickname
                          },
                          clubData: {
                            userId: user?.user?.id,
                            name: user?.user?.nickname,
                            profilePic: user?.user?.club?.img_perfil
                          }
                        }
                      })
                    )
                      .then((res) => {
                        console.log('response from send match', data)
                        dispatch(
                          sendNotification({
                            title: 'Match',
                            message: 'Has hecho match!',
                            recipientId: data.prop1.userId,
                            date: new Date(),
                            read: false,
                            prop1: {
                              matchId: res?.payload?.id,
                              clubData: {
                                name: user?.user?.nickname,
                                userId: user?.user?.id,
                                ...user?.user?.club
                              }
                            },
                            prop2: {
                              rol: 'user'
                            }
                          })
                        )
                      })
                      .then((data) => dispatch(getAllMatchs()))
                      .then((data) => getClubMatches())
                  }}
                  style={{
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
                  {/* <Image
                    style={{ height: 58 * 0.7, width: 111 * 0.7 }}
                    contentFit="contain"
                    source={require('../assets/matchButton.png')}
                  /> */}
                  <Text
                    style={{
                      width: '70%',
                      fontSize: 11,
                      textAlign: 'center',
                      marginLeft: '35%',
                      color: Color.wHITESPORTSMATCH,
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
          </View>
        )}
        {data.title === 'Follow' && (
          <View
            style={{
              alignItems: 'flex-end',
              gap: 3
            }}
          >
            <Text
              style={{
                color: Color.gREY2SPORTSMATCH,
                fontSize: FontSize.t1TextSMALL_size,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {formatDateDifference(data?.createdAt)}
            </Text>
            {data?.user?.sportman &&
              !user?.user?.followingUsers.find(
                (u) => u?.id === data?.user?.id
              ) && (
                <TouchableOpacity
                  onPress={() => {
                    axiosInstance
                      .post(`user/${user?.user?.id}/follow/${data?.author?.id}`)
                      .then((response) => {
                        dispatch(getUserData(user?.user?.id))

                        dispatch(getAllUsers())
                      })
                  }}
                  style={{
                    borderRadius: 50,
                    paddingVertical: 4,
                    paddingHorizontal: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 5,
                    backgroundColor: '#505050',
                    flexDirection: 'row'
                  }}
                >
                  <Image
                    style={{ width: 16, height: 16 }}
                    contentFit="cover"
                    source={require('../assets/pictograma1.png')}
                  />
                  {data?.prop1?.userData?.user?.type !== 'club' && (
                    <Text
                      style={{
                        fontWeight: '600',
                        color:
                          data.title === 'Like'
                            ? '#999999'
                            : Color.wHITESPORTSMATCH,
                        alignSelf: 'flex-start',
                        fontSize: FontSize.t1TextSMALL_size,
                        fontFamily: FontFamily.t4TEXTMICRO
                      }}
                    >
                      Seguir
                    </Text>
                  )}
                </TouchableOpacity>
              )}
          </View>
        )}
      </View>
      <View
        style={{
          borderWidth: 1.3,
          borderColor: Color.bLACK3SPORTSMATCH,
          marginVertical: 10
        }}
      />
      <Modal visible={isMatch} transparent={true} animationType="slide">
        <Pressable
          onPress={() => setIsMatch(false)}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
        >
          <NotificacinMatch data={data} onClose={() => setIsMatch(false)} />
        </Pressable>
      </Modal>
      <Modal visible={details} animationType="slide">
        <Pressable
          style={{
            flex: 1
          }}
          onPress={() => setDetails(false)}
        >
          <TusMatchsDetalle
            data={selectedClubDetails}
            onClose={() => setDetails(false)}
          />
        </Pressable>
      </Modal>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  groupIconLayout: {
    height: 45,
    width: 45,
    alignSelf: 'flex-start'
    // width: '10%'
  },
  hasHechoUn: {
    fontWeight: '700',
    color: Color.wHITESPORTSMATCH,
    alignSelf: 'flex-start'
    // width: '80%'
  },
  ayerTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ayer: {
    color: Color.gREY2SPORTSMATCH
  }
})

export default Notifications
