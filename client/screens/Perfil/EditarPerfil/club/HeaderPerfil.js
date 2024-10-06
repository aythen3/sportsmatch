import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  ActivityIndicator
} from 'react-native'
import { Border, Color, FontFamily, FontSize } from '../../../../GlobalStyles'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import * as ImagePicker from 'expo-image-picker'
import FeedSVG from '../../../../components/svg/FeedSVG'
import StatsSVG from '../../../../components/svg/StatsSVG'
import axiosInstance from '../../../../utils/apiBackend'
import { Context } from '../../../../context/Context'
import { getAllMatchs, sendMatch } from '../../../../redux/actions/matchs'
import { updateUser } from '../../../../redux/slices/users.slices'
import {
  getAllUsers,
  getUserData,
  updateUserData
} from '../../../../redux/actions/users'
import { sendNotification } from '../../../../redux/actions/notifications'
import { getColorsWithOpacity } from '../../../../utils/colorUtils.js'
import Thumbnail from '../../../../components/Thumbnail.js'
import { debounce } from 'lodash'
import ModalOptionOffers from '../../../../components/ModalOptionOffers'
import ModalExt from '../../../../components/modals/ModalExt'
import { getAllPosts, getAllPostsFeed } from '../../../../redux/actions/post'

const HeaderPerfil = ({
  name,
  description,
  button1,
  button2,
  setSelectComponents,
  selectComponents,
  myPerfil,
  position,
  sport,
  front,
  avatar,
  data,
  external,
  getUser
}) => {
  const moreOpacity = 0.8 // 80% opacity
  const lessOpacity = 0.4 // 40% opacity
  const _ = require('lodash')
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { isSportman, user, allUsers, mainColor } = useSelector(
    (state) => state.users
  )
  const [clubOffers, setClubOffers] = useState([])
  const { allMatchs } = useSelector((state) => state.matchs)
  const { club } = useSelector((state) => state.clubs)
  const { clubMatches, userMatches, getClubMatches } = useContext(Context)
  const [matchSended, setMatchSended] = useState(() =>
    user?.user?.club?.matches?.find(
      (m) => m?.user?.id === data?.author?.id && m.status === 'pending'
    )
      ? true
      : false
  )
  const [liked, setLiked] = useState(() =>
    user.user.followingUsers.find((u) => u.id === data?.author?.id)
      ? true
      : false
  )
  const [isTruncated, setIsTruncated] = useState(true)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const [optionsModal, setOptionsModal] = useState(false)
  const { sportman } = useSelector((state) => state.sportman)
  const [bannedModal, setBannedModal] = useState(false)

  console.log('club==============', data?.author?.id)
  const [bannedLoading, setBannedLoading] = useState(false)

  const getOffersById = async (id) => {
    const { data } = await axiosInstance.get('offer')
    const filteredOffers = data.filter((offer) => offer.club.id === id)
    setClubOffers(filteredOffers)
  }

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated)
  }

  useEffect(() => {
    if (external) {
      if (data?.author?.type === 'club') {
        getOffersById(data?.author?.club.id)
      }
    }
    if (!external) {
      if (!isSportman) {
        getOffersById(user?.user?.club?.id)
      }
    }
  }, [])

  // useEffect(() => {}, [allMatchs])
  const handlePostClick = (event) => {
    const { pageX, pageY } = event.nativeEvent

    const height = 60

    setModalPosition({ x: pageX - 160, y: pageY - height })

    setOptionsModal(true)
  }

  const BanUser = async (userId) => {
    setBannedLoading(true)
    axiosInstance
      .put(`user/${user.user.id}/ban`, {
        userId
      })
      .then(() => {
        dispatch(getUserData(user.user.id)).then(() => {
          dispatch(getAllPostsFeed(user.user.id))
          dispatch(getAllPosts())

          setBannedModal(false)
          setBannedLoading(false)

          navigation.navigate('SiguiendoJugadores')
        })
      })
  }
  // useEffect(() => {}, [clubMatches])

  useEffect(() => {
    const is = userFollowing?.includes(data?.author?.id)
    if (is) {
      setLiked(true)
    }
  }, [user])

  const handleFollow = debounce(() => {
    if (sportman?.type == 'invitado') return

    setLiked(!liked)
    // let actualUser = _.cloneDeep(user)
    // const actualFollowers =
    //   allUsers?.filter((user) => user.id === data.author.id)[0]?.followers || []
    // const newFollowers = actualFollowers.includes(user?.user?.id)
    //   ? actualFollowers.filter((follower) => follower !== user?.user?.id)
    //   : [...actualFollowers, user?.user?.id]

    // const newFollowingArray = userFollowing?.includes(data?.author?.id)
    //   ? userFollowing.filter((followed) => followed !== data?.author?.id)
    //   : [...userFollowing, data?.author?.id]
    // actualUser.user.following = newFollowingArray

    // dispatch(
    //   updateUserData({ id: data.author.id, body: { followers: newFollowers } })
    // )
    //   .then((data) => {
    //     console.log(data, 'es cuando ojeo')
    //     dispatch(
    //       updateUserData({
    //         id: user.user.id,
    //         body: { following: newFollowingArray }
    //       })
    //     )
    //   })
    if (!liked) {
      axiosInstance
        .post(`user/${user?.user?.id}/follow/${data?.author?.id}`)
        .then((response) => {
          getUser()
          dispatch(
            sendNotification({
              title: 'Follow',
              message: `${user?.user?.nickname} ha comenzado a seguirte`,
              recipientId: data?.author?.sportman?.user?.id ?? data?.author?.id,
              date: new Date(),
              read: false,
              prop1: {
                userId: user?.user?.id,
                userData: { ...user }
              },
              prop2: {
                rol: 'user'
              }
            })
          ).then((res) => console.log('respuesta', res))

          dispatch(getUserData(user?.user?.id))

          dispatch(getAllUsers())
        })
    } else {
      axiosInstance
        .delete(`user/${user?.user?.id}/unfollow/${data?.author?.id}`)
        .then(() => {
          getUser()

          dispatch(getUserData(user?.user?.id))

          dispatch(getAllUsers())
        })
    }
  }, 300)
  const colors = getColorsWithOpacity(mainColor, moreOpacity, lessOpacity)

  const userFollowing = user?.user?.followingUsers || []

  const Bann = () => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        gap: 20
      }}
    >
      <Text style={{ color: 'white', textAlign: 'center' }}>
        ¿Estas seguro/a que quieres bloquear al usuario {name}?
      </Text>
      {bannedLoading ? (
        <ActivityIndicator color={'red'}></ActivityIndicator>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 30
          }}
        >
          <TouchableOpacity
            onPress={() => BanUser(data?.author?.id)}
            style={{
              backgroundColor: 'red',
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text style={{ color: 'white' }}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setBannedModal(false)}
            style={{
              backgroundColor: 'gray',
              width: '40%',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10,
              borderRadius: 10
            }}
          >
            <Text style={{ color: 'white' }}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )

  return (
    <View>
      <View>
        {front === '' || !front ? (
          <Image
            style={{ width: '100%', height: 150, backgroundColor: mainColor }}
            contentFit="cover"
            source={require('../../../../assets/whiteSport.png')}
          />
        ) : (
          <Thumbnail
            styles={{ width: '100%', height: 150, backgroundColor: mainColor }}
            url={front}
          />
        )}
        <TouchableOpacity
          onPress={(event) => {
            handlePostClick(event)
          }}
          style={{
            position: 'absolute',
            top: 25,
            right: 10,
            width: 24,
            height: 20,
            alignItems: 'center'
          }}
        >
          <Image
            style={{ width: 5, height: '100%', objectFit: 'fill' }}
            source={require('../../../../assets/frame-957.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          marginTop: -14,
          justifyContent: 'flex-start',
          maxWidth: '60%',
          alignItems: 'flex-start',
          height: 'auto',
          marginBottom: 10,
          paddingLeft: 15,
          paddingRight: 5
        }}
      >
        <View style={{ position: 'relative' }}>
          <View
            style={{
              position: 'absolute',
              bottom: -5,
              left: 2.5,
              height: 105,
              borderRadius: 100,
              width: 105,
              backgroundColor: mainColor
            }}
          />
          {isSportman ? (
            <View
              style={{
                height: 110,
                borderRadius: 100,
                width: 110,
                borderWidth: 3,
                borderColor: '#000',
                backgroundColor: mainColor,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}
            >
              {avatar === '' || !avatar ? (
                <Image
                  style={{
                    height: 110,
                    borderRadius: 100,
                    width: 110,
                    borderWidth: 3,
                    borderColor: '#000',
                    backgroundColor: mainColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                  }}
                  contentFit="cover"
                  source={require('../../../../assets/whiteSport.png')}
                />
              ) : (
                <Thumbnail url={avatar} />
              )}
            </View>
          ) : (
            <View>
              {avatar ? (
                <Thumbnail
                  styles={{
                    height: 110,
                    borderRadius: 100,
                    width: 110,
                    borderWidth: 3,
                    borderColor: '#000',
                    backgroundColor: mainColor
                  }}
                  url={avatar}
                />
              ) : (
                <Image
                  style={{
                    height: 110,
                    borderRadius: 100,
                    width: 110,
                    borderWidth: 3,
                    borderColor: '#000',
                    backgroundColor: mainColor
                  }}
                  contentFit="cover"
                  source={require('../../../../assets/whiteSport.png')}
                />
              )}
            </View>
          )}
        </View>

        <View
          style={{
            marginTop: 25,
            width: '100%'
          }}
        >
          <Text
            style={[styles.jordiEspeltPvotBaloncesto, styles.jugandoAlUniTypo]}
          >
            {name}
          </Text>
          {sport && (
            <Text
              style={[
                styles.jordiEspeltPvotBaloncesto,
                styles.jugandoAlUniTypo,
                { fontSize: 16, color: mainColor }
              ]}
            >
              {sport == 'Voley'
                ? 'Voleibol'
                : sport == 'Handball'
                  ? 'Balonmano'
                  : sport}
            </Text>
          )}
          {position && (
            <Text
              style={[
                styles.jordiEspeltPvotBaloncesto,
                styles.jugandoAlUniTypo,
                { fontSize: 16, color: Color.wHITESPORTSMATCH, fontWeight: 400 }
              ]}
            >
              {position}
            </Text>
          )}

          <Text
            numberOfLines={isTruncated ? 2 : undefined}
            ellipsizeMode="tail"
            style={{
              color: Color.gREY2SPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO,
              marginTop: 3,
              lineHeight: 14,
              fontSize: FontSize.t4TEXTMICRO_size,
              overflow: 'hidden'
            }}
          >
            {description}
          </Text>
          {isTruncated && description?.length > 70 ? ( // Ajusta la lógica de truncamiento
            <TouchableOpacity onPress={toggleTruncate}>
              <Text style={{ color: Color.colorDimgray_100, marginTop: 3 }}>
                Ver más
              </Text>
            </TouchableOpacity>
          ) : (
            !isTruncated && (
              <TouchableOpacity onPress={toggleTruncate}>
                <Text style={{ color: Color.colorDimgray_100, marginTop: 3 }}>
                  Ver menos
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>

      {/* ================================================================= */}
      {/* ========================== EXTERNAL ============================= */}
      {/* ================================================================= */}
      {external && data.author.type !== 'club' ? (
        <View style={styles.groupContainer}>
          {!isSportman ? (
            <Pressable
              onPress={() => {
                if (sportman?.type == 'invitado') return

                setLiked(!liked)

                if (!liked) {
                  axiosInstance
                    .post(`user/${user?.user?.id}/follow/${data?.author?.id}`)
                    .then((response) => {
                      getUser()
                      dispatch(
                        sendNotification({
                          title: 'Follow',
                          message: `${user?.user?.club?.name} ha comenzado a seguirte`,
                          recipientId:
                            data?.author?.sportman?.user?.id ??
                            data?.author?.id,
                          date: new Date(),
                          read: false,
                          prop1: {
                            userId: user?.user?.id,
                            userData: { ...user }
                          },
                          prop2: {
                            rol: 'user'
                          }
                        })
                      ).then((res) => console.log('respuesta', res))

                      dispatch(getUserData(user?.user?.id))

                      dispatch(getAllUsers())
                    })
                } else {
                  axiosInstance
                    .delete(
                      `user/${user?.user?.id}/unfollow/${data?.author?.id}`
                    )
                    .then(() => {
                      getUser()

                      dispatch(getUserData(user?.user?.id))

                      dispatch(getAllUsers())
                    })
                }
              }}
              style={styles.leftButton}
            >
              <Image
                style={{ ...styles.frameChild, marginRight: 10 }}
                contentFit="cover"
                source={require('../../../../assets/group-5361.png')}
              />
              <Text style={[styles.ojear, styles.timeTypo]}>
                {liked ? 'Dejar de Ojear' : 'Ojear'}
              </Text>
            </Pressable>
          ) : (
            <TouchableOpacity
              // onPress={() => {
              //   if (sportman?.type == 'invitado') return
              //   setLiked(!liked)
              //   let actualUser = _.cloneDeep(user)
              //   const actualFollowers =
              //     allUsers?.filter((user) => user.id === data.author.id)[0]
              //       ?.followers || []
              //   const newFollowers = actualFollowers.includes(user?.user?.id)
              //     ? actualFollowers.filter(
              //         (follower) => follower !== user?.user?.id
              //       )
              //     : [...actualFollowers, user?.user?.id]

              //   const newFollowingArray = userFollowing?.includes(
              //     data?.author?.id
              //   )
              //     ? userFollowing.filter(
              //         (followed) => followed !== data?.author?.id
              //       )
              //     : [...userFollowing, data?.author?.id]
              //   actualUser.user.following = newFollowingArray

              //   dispatch(
              //     updateUserData({
              //       id: data.author.id,
              //       body: { followers: newFollowers }
              //     })
              //   )
              //     .then((data) => {
              //       dispatch(
              //         updateUserData({
              //           id: user.user.id,
              //           body: { following: newFollowingArray }
              //         })
              //       )
              //     })
              //     .then((response) => {
              //       if (newFollowers.includes(user?.user?.id)) {
              //         console.log('respuesta2', data?.author)
              //         dispatch(
              //           sendNotification({
              //             title: 'Follow',
              //             message: `${user.user.nickname} ha comenzado a seguirte`,
              //             recipientId:
              //               data?.author?.sportman?.user?.id ??
              //               data?.author?.id,
              //             date: new Date(),
              //             read: false,
              //             prop1: {
              //               userId: user?.user?.id,
              //               userData: {
              //                 ...user
              //               }
              //             },
              //             prop2: {
              //               rol: 'user'
              //             }
              //           })
              //         ).then((res) => console.log('respuesta', res))
              //       }
              //       dispatch(updateUser(actualUser))
              //       dispatch(getAllUsers())
              //     })
              // }}
              style={{
                ...styles.leftButton
              }}
              onPress={() => handleFollow()}
            >
              <Text style={[styles.ojear, styles.timeTypo]}>
                {liked ? 'Dejar de seguir' : 'Seguir'}
              </Text>
            </TouchableOpacity>
          )}
          {isSportman && external && (
            <TouchableOpacity
              onPress={() => {
                if (sportman?.type == 'invitado') return

                navigation.navigate('ChatAbierto1', {
                  receiverId: data.author.id,
                  receiverName: data.author.nickname,
                  profilePic: avatar
                })
              }}
              style={styles.leftButton}
            >
              <Text style={[styles.ojear, styles.timeTypo]}>
                Enviar mensaje
              </Text>
            </TouchableOpacity>
          )}
          {matchSended ? (
            <Pressable
              style={{
                flexDirection: 'row',
                backgroundColor: colors.moreOpaque,
                borderRadius: Border.br_81xl,
                height: 35,
                width: '47%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginRight: '10%',
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: '700'
                }}
              >
                {'Match solicitado'}
              </Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: mainColor,
                  position: 'absolute',
                  right: 0
                }}
              >
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require('../../../../assets/group13.png')}
                />
              </View>
            </Pressable>
          ) : !isSportman &&
            !user.user.club.matches.find(
              (match) => match?.user?.id === data?.author?.id
            ) ? (
            <Pressable
              disabled={matchSended}
              onPress={() => {
                setMatchSended(true)
                console.log(data.author.id, 'datrita')
                dispatch(
                  sendMatch({
                    userId: data?.author?.id,
                    clubId: user?.user?.club?.id,
                    status: 'pending'
                  })
                ).then((res) => {
                  dispatch(getUserData(user?.user?.id))
                  console.log(
                    {
                      title: 'Solicitud',
                      message: 'Recibiste una solicitud de match!',
                      recipientId: data?.author?.id,
                      date: new Date(),
                      read: false,
                      prop1: {
                        matchId: data?.payload?.id,
                        clubData: {
                          name: user?.user?.nickname,
                          userId: user.user.id,
                          ...club
                        }
                      },
                      prop2: { rol: 'user' }
                    },
                    'rrrrrrrrrrrrrrrrr'
                  )
                  dispatch(
                    sendNotification({
                      title: 'Solicitud',
                      message: 'Recibiste una solicitud de match!',
                      recipientId: data?.author?.id,
                      date: new Date(),
                      read: false,
                      prop1: {
                        matchId: res?.payload?.id,
                        clubData: {
                          name: user?.user?.nickname,
                          userId: user.user.id,
                          ...club
                        }
                      },
                      prop2: { rol: 'user' }
                    })
                  ).then((r) => console.log(r, 'rrrrrrrrrrrrrrrrr'))
                })
              }}
              style={{
                flexDirection: 'row',
                backgroundColor: colors.lessOpaque,
                borderRadius: Border.br_81xl,
                height: 35,
                width: '47%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  width: '100%',
                  fontSize: 14,
                  textAlign: 'center',
                  marginLeft: '10%',
                  color: colors.lessOpaque,
                  fontSize: FontSize.t2TextSTANDARD_size,
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: '700'
                }}
              >
                {'Pedir match'}
              </Text>
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.moreOpaque,
                  position: 'absolute',
                  left: 0
                }}
              >
                <Image
                  style={styles.groupIcon}
                  contentFit="cover"
                  source={require('../../../../assets/whiteSport.png')}
                />
              </View>
            </Pressable>
          ) : !isSportman &&
            user.user.club.matches.find((match) => {
              console.log(match?.user?.id, data?.author?.id, 'IDDDDDDDDDDD')
              if (
                match?.user?.id === data?.author?.id &&
                match.status === 'success'
              ) {
                return true
              }
            }) ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ChatAbierto1', {
                  receiverId: data.author.id,
                  receiverName: data.author.nickname,
                  profilePic: avatar,
                  sportman: data.author.sportman.id
                })
              }
              style={styles.leftButton}
            >
              <Text style={[styles.ojear, styles.timeTypo]}>
                Enviar mensaje
              </Text>
            </TouchableOpacity>
          ) : (
            !isSportman &&
            clubMatches.filter(
              (match) =>
                match.prop1.sportmanId === data.author.sportman.id &&
                match.status === 'success'
            ).length === 0 && (
              <Pressable
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.moreOpaque,
                  borderRadius: Border.br_81xl,
                  height: 35,
                  width: '47%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    marginRight: '10%',
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    fontWeight: '700'
                  }}
                >
                  {'Match solicitado'}
                </Text>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: mainColor,
                    position: 'absolute',
                    right: 0
                  }}
                >
                  <Image
                    style={styles.groupIcon}
                    contentFit="cover"
                    source={require('../../../../assets/group13.png')}
                  />
                </View>
              </Pressable>
            )
          )}
        </View>
      ) : (
        external &&
        data.author.type === 'club' && (
          <TouchableOpacity
            onPress={() => {
              console.log({
                receiverId: data?.author?.club,
                receiverName: data.author.nickname,
                profilePic: avatar
              })

              navigation.navigate('ChatAbierto1', {
                receiverId: data?.author?.club?.user?.id,
                receiverName: data.author.nickname,
                profilePic: avatar
              })
            }}
            style={{
              flexDirection: 'row',
              marginTop: 10,
              backgroundColor: Color.colorDimgray_100,
              borderRadius: Border.br_81xl,
              height: 35,
              width: '95%',
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={[styles.ojear, styles.timeTypo]}>Mensaje</Text>
          </TouchableOpacity>
        )
      )}
      {/* ================================================================= */}
      {/* ================== CLUB DATA EXTERNAL OR NOT ==================== */}
      {/* ================================================================= */}
      {external && data.author.type === 'club' && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'center',
            marginTop: 10
          }}
        >
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: mainColor, fontSize: 27, fontWeight: 500 }}>
              {data.author.club.year}
            </Text>
            <Text
              style={{
                color: mainColor,
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Fundación
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: mainColor, fontSize: 27, fontWeight: 500 }}>
              {data.author.club.capacity}
            </Text>
            <Text
              style={{
                color: mainColor,
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Aforo
            </Text>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',
              paddingBottom: 5,
              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginTop: 10
            }}
          >
            <Text style={{ color: mainColor, fontSize: 27, fontWeight: 500 }}>
              {clubOffers?.length}
            </Text>
            <Text
              style={{
                color: mainColor,
                fontSize: 12,
                position: 'absolute',
                bottom: 15
              }}
            >
              Nº ofertas
            </Text>
          </View>
        </View>
      )}
      {/* ================================================================= */}
      {/* ===================== CLUB/USER PROFILE ========================= */}
      {/* ================================================================= */}
      {!external && (
        <View style={styles.groupContainer}>
          <Pressable
            style={styles.leftButton}
            onPress={() => {
              if (!external) {
                navigation.navigate('EditarPerfil')
              }
            }}
          >
            <Text style={[styles.ojear, styles.timeTypo]}>
              {'Editar perfil'}
            </Text>
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              borderRadius: Border.br_81xl,
              height: 35,
              width: '47%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() => {
              navigation.navigate('MiSuscripcin')
            }}
          >
            <Text
              style={{
                color: Color.bLACK1SPORTSMATCH,
                fontSize: FontSize.t2TextSTANDARD_size,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: '700',
                fontSize: FontSize.t2TextSTANDARD_size
              }}
            >
              {'Mi suscripción'}
            </Text>
          </Pressable>
        </View>
      )}
      {/* ================================================================= */}
      {/* ========================== EXTERNAL ============================= */}
      {/* ================================================================= */}
      {!external && isSportman === true && (
        <View
          style={{
            width: '95%',
            height: 50,
            alignSelf: 'center',
            justifyContent: 'space-around',
            borderRadius: 5,
            backgroundColor: Color.bLACK3SPORTSMATCH,
            marginTop: 20,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              fontSize: FontSize.t4TEXTMICRO_size,
              color: Color.wHITESPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            Seguidores
          </Text>
          <Text style={styles.numeroText}>
            {user?.user?.followers ? user?.user?.followers.length : '0'}
          </Text>
        </View>
      )}
      {external && data.author.type !== 'club' && (
        <Pressable
          onPress={() => {
            const followers =
              allUsers?.filter((user) => user.id === data.author.id)[0]
                ?.followers || []
            if (followers?.length > 0) {
              navigation.navigate('UserFollowers', {
                author: allUsers.filter((user) => user.id === data.author.id),
                followers: allUsers.filter((user) =>
                  followers.includes(user.id)
                )
              })
            }
          }}
          style={{
            width: '95%',
            height: 50,
            alignSelf: 'center',
            justifyContent: 'space-around',
            borderRadius: 5,
            backgroundColor: Color.bLACK3SPORTSMATCH,
            marginTop: 20,
            paddingHorizontal: 15
          }}
        >
          <Text
            style={{
              fontSize: FontSize.t4TEXTMICRO_size,
              color: Color.wHITESPORTSMATCH,
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            {'Seguidores'}
          </Text>
          <Text style={styles.numeroText}>
            {data.author.followers ? data.author.followers.length : '0'}
            {/* Solucionar tema de seguidores */}
          </Text>
        </Pressable>
      )}

      {!external && !isSportman && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
            alignSelf: 'center',
            marginTop: 10
          }}
        >
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',

              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginVertical: 10
            }}
          >
            <View
              style={{
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: mainColor,
                  fontSize: 27,
                  fontWeight: 500,
                  textAlign: 'center'
                }}
              >
                {club.year}
              </Text>
              <Text
                style={{
                  color: mainColor,
                  fontSize: 12,
                  textAlign: 'center'
                }}
              >
                Fundación
              </Text>
            </View>
          </View>
          <View
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',

              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginVertical: 10
            }}
          >
            <View
              style={{
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: mainColor,
                  fontSize: 27,
                  fontWeight: 500,
                  textAlign: 'center'
                }}
              >
                {club.capacity}
              </Text>
              <Text
                style={{
                  color: mainColor,
                  fontSize: 12,
                  textAlign: 'center'
                }}
              >
                Aforo
              </Text>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate('OfertasEmitidas')}
            style={{
              borderWidth: 4,
              gap: 9,
              backgroundColor: '#1D1D1D',
              borderColor: '#252525',
              alignItems: 'center',
              justifyContent: 'center',

              borderRadius: 100,
              height: (Dimensions.get('window').width * 0.9) / 3 - 15,
              width: (Dimensions.get('window').width * 0.9) / 3 - 15,
              alignSelf: 'center',
              marginVertical: 10
            }}
          >
            <View
              style={{
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: mainColor,
                  fontSize: 27,
                  fontWeight: 500,
                  textAlign: 'center'
                }}
              >
                {clubOffers?.length}
              </Text>
              <Text
                style={{
                  color: mainColor,
                  fontSize: 12,
                  textAlign: 'center'
                }}
              >
                Nº ofertas
              </Text>
            </View>
          </Pressable>
        </View>
      )}

      {!external && isSportman === true && (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 15
          }}
        >
          <View
            style={{
              width: '95%',
              marginTop: 20,
              alignSelf: 'center'
            }}
          >
            <View
              style={{ width: '100%', marginBottom: 15, flexDirection: 'row' }}
            >
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'perfil' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('perfil')}
              >
                <FeedSVG />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'estadisticas' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('estadisticas')}
              >
                <StatsSVG />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {external && data.author.type !== 'club' && (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 15
          }}
        >
          <View
            style={{
              width: '95%',
              marginTop: 20,
              alignSelf: 'center'
            }}
          >
            <View
              style={{ width: '100%', marginBottom: 15, flexDirection: 'row' }}
            >
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'perfil' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('perfil')}
              >
                <FeedSVG />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '50%',
                  alignItems: 'center',
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectComponents === 'estadisticas' ? '#fff' : '#000',
                  paddingBottom: 8
                }}
                onPress={() => setSelectComponents('estadisticas')}
              >
                <StatsSVG />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      <ModalExt
        visible={bannedModal}
        closeModal={() => setBannedModal(false)}
        title={'Bloquear usuario'}
        content={Bann}
      ></ModalExt>
      <Modal visible={optionsModal} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setOptionsModal(false)}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                position: 'absolute',
                top: modalPosition.y,
                left: modalPosition.x,
                padding: 20,
                borderRadius: 8
              }}
            >
              <ModalOptionOffers
                post={true}
                postId={null}
                data={data}
                perfil={true}
                setBannedModal={setBannedModal}
                post_ext={true}
                onClose={() => setOptionsModal(false)}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  groupIcon: {
    marginRight: 1,
    marginTop: 1,
    height: 25 * 0.8,
    width: 32 * 0.8,
    opacity: 0.9
  },
  timeTypo: {
    fontSize: 14
  },
  timeTypo2: {
    marginRight: 20,
    width: '100%',
    textAlign: 'right',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  ojear: {
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  ojear2: {
    marginLeft: 5,
    color: Color.bLACK2SPORTMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  frameChild: {
    width: 26,
    height: 17
  },
  description: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    marginTop: 3
  },
  seguidoresLayout: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  jordiEspeltPvotBaloncesto: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: '700'
  },
  jugandoAlUniTypo: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  imgFront: {
    width: '100%',
    height: 150
  },
  circleAvatar: {
    borderWidth: 4,
    borderColor: Color.bALONCESTO,
    backgroundColor: Color.bALONCESTO,
    width: 110,
    overflow: 'hidden',
    height: 110,
    borderRadius: 50
  },
  leftButton: {
    flexDirection: 'row',
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_81xl,
    height: 35,
    width: '47%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numeroText: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    color: Color.wHITESPORTSMATCH
  }
})

export default HeaderPerfil
