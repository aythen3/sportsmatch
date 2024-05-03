import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import { Color, FontFamily, FontSize } from '../GlobalStyles'
import NotificacinMatch from '../screens/NotificacinMatch'
import { useDispatch, useSelector } from 'react-redux'
import TusMatchsDetalle from './../screens/TusMatchsDetalle'
import { getAllUsers, updateUserData } from '../redux/actions/users'
import { getAllNotifications, sendNotification } from '../redux/actions/notifications'
import { updateUser } from '../redux/slices/users.slices'
import axiosInstance from '../utils/apiBackend'

const Notifications = ({ data }) => {
  const _ = require('lodash')
  const [isMatch, setIsMatch] = useState(false)
  const [details, setDetails] = useState(false)
  const { allUsers, user } = useSelector((state) => state.users)
  const [selectedClubDetails, setSelectedClubDetails] = useState()
  const dispatch = useDispatch()
  console.log(data, "data")
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

  return (
    <TouchableOpacity
      style={{ marginTop: 20 }}
      onPress={async () => {
        if (!data.read) {
          await axiosInstance.patch(`notification/${data.id}`, { read: true }).then(async (res) => await dispatch(getAllNotifications()));
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
              color: Color.bALONCESTO,
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
            <Text style={[styles.ayer, styles.ayerTypo]}>
              {formatDate(data.date)}
            </Text>
          )}
        </View>
        {data.title !== 'Follow' && (
          <Text style={[styles.ayer, styles.ayerTypo]}>
            {formatDate(data.date)}
          </Text>
        )}
        {data.title === 'Follow' &&
          !user.user.following.includes(data.prop1.userId) && (
            <TouchableOpacity
              onPress={() => {
                let actualUser = _.cloneDeep(user)
                console.log('atualUser: ', actualUser)
                const actualFollowers =
                  allUsers.filter((user) => user.id === data.prop1.userId)[0]
                    .followers || []
                console.log('actual followers: ', actualFollowers)
                const newFollowers = actualFollowers.includes(user?.user?.id)
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
                console.log('user: ', actualUser?.user?.following)

                console.log('setting other user followers to:', newFollowers)
                dispatch(
                  updateUserData({
                    id: data.prop1.userId,
                    body: { followers: newFollowers }
                  })
                )
                  .then((data) => {
                    console.log('setting user following to:', newFollowingArray)
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
      <Modal visible={details} transparent={true} animationType="slide">
        <View
          style={{
            flex: 1
          }}
        >
          <TusMatchsDetalle
            data={selectedClubDetails}
            onClose={() => setDetails(false)}
          />
        </View>
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
