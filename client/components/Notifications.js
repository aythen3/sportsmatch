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
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import NotificacinMatch from '../screens/NotificacinMatch'
import { useDispatch, useSelector } from 'react-redux'
import TusMatchsDetalle from './../screens/TusMatchsDetalle'
import { getAllUsers, updateUserData } from '../redux/actions/users'
import {
  getAllNotifications,
  sendNotification
} from '../redux/actions/notifications'
import { updateUser } from '../redux/slices/users.slices'
import axiosInstance from '../utils/apiBackend'
import { Context } from '../context/Context'
import { getAllMatchs, sendMatch } from '../redux/actions/matchs'

const Notifications = ({ data }) => {
  const _ = require('lodash')
  const [isMatch, setIsMatch] = useState(false)
  const { clubMatches, userMatches, getClubMatches } = useContext(Context)
  const [details, setDetails] = useState(false)
  const { allUsers, user, mainColor } = useSelector((state) => state.users)
  const [selectedClubDetails, setSelectedClubDetails] = useState()
  const dispatch = useDispatch()
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
    // console.log('notif data', data.prop1.userData?.user?.sportman)
  }, [])

  return (
    <TouchableOpacity
      style={{ paddingHorizontal: 10 }}
      onPress={async () => {
        if (!data.read) {
          await axiosInstance
            .patch(`notification/${data.id}`, { read: true })
            .then(async (res) => await dispatch(getAllNotifications()))
        }
        if (data.title === 'Solicitud') {
          setIsMatch(true)
          return
        }
        if (data.title === 'Match') {
          setDetails(true)
          setSelectedClubDetails(
            allUsers.filter((user) => user.id === data.prop1.clubData.userId)[0]
          )
        }
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        {data.title === 'Match' && data.title === 'Solicitud' && (
          <Image
            style={[styles.groupIconLayout]}
            contentFit="cover"
            source={require('../assets/avatar.png')}
          />
        )}
        {!data.read && (
          <Text
            style={{
              color: mainColor,
              fontSize: 35,
              top: -12
            }}
          >
            .
          </Text>
        )}
        <View style={{ flex: 1, marginLeft: 4 }}>
          <Text
            style={{
              fontWeight: '600',
              color: data.title === 'Like' ? '#999999' : Color.wHITESPORTSMATCH,
              alignSelf: 'flex-start',
              fontSize: FontSize.t1TextSMALL_size,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            {data.message}
          </Text>
          {data.title === 'Follow' && (
            <View>
              <Text
                style={{
                  color: Color.gREY2SPORTSMATCH,
                  fontSize: FontSize.t1TextSMALL_size,
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                {formatDate(data.date)}
              </Text>
              {data.title === 'Inscripción' && (
                <Image
                  style={{ height: 58 * 0.7, width: 111 * 0.7 }}
                  contentFit="contain"
                  source={require('../assets/matchButton.png')}
                />
              )}
            </View>
          )}
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
                            }
                          })
                        )
                      })
                      .then((data) => dispatch(getAllMatchs()))
                      .then((data) => getClubMatches())
                  }}
                >
                  <Image
                    style={{ height: 58 * 0.7, width: 111 * 0.7 }}
                    contentFit="contain"
                    source={require('../assets/matchButton.png')}
                  />
                </TouchableOpacity>
              )}
          </View>
        )}
        {data.title === 'Follow' &&
          !user?.user?.following?.includes(data.prop1.userId) && (
            <TouchableOpacity
              onPress={() => {
                let actualUser = _.cloneDeep(user)
                const actualFollowers =
                  allUsers.filter((user) => user.id === data.prop1.userId)[0]
                    .followers || []
                const newFollowers = actualFollowers?.includes(user?.user?.id)
                  ? actualFollowers.filter(
                      (follower) => follower !== user?.user?.id
                    )
                  : [...actualFollowers, user?.user?.id]

                const newFollowingArray = userFollowing?.includes(
                  data.prop1.userId
                )
                  ? userFollowing.filter(
                      (followed) => followed !== data.prop1.userId
                    )
                  : [...userFollowing, data.prop1.userId]
                actualUser.user.following = newFollowingArray

                dispatch(
                  updateUserData({
                    id: data.prop1.userId,
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
                          recipientId: data?.prop1?.userId,
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
              <Text
                style={{
                  fontWeight: '600',
                  color:
                    data.title === 'Like' ? '#999999' : Color.wHITESPORTSMATCH,
                  alignSelf: 'flex-start',
                  fontSize: FontSize.t1TextSMALL_size,
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                Seguir
              </Text>
            </TouchableOpacity>
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.8)'
          }}
        >
          <NotificacinMatch data={data} onClose={() => setIsMatch(false)} />
        </View>
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
    </TouchableOpacity>
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
