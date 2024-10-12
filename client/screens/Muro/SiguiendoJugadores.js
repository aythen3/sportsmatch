import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StatusBar,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  Image,
  Dimensions
} from 'react-native'
import { Color, FontFamily } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'
import {
  deletePost,
  getAllLikes,
  getAllPosts,
  getAllPostsFeed,
  listLikes
} from '../../redux/actions/post'
import {
  getAllUsers,
  getUserChild,
  getUserData
} from '../../redux/actions/users'
import { Context } from '../../context/Context'
import { getSportman } from '../../redux/actions/sportman'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAllOffers } from '../../redux/actions/offers'
import {
  getAllNotifications,
  getNotificationsByUserId
} from '../../redux/actions/notifications'
import { getAllMatchs } from '../../redux/actions/matchs'
import { getUserChats } from '../../redux/actions/chats'

const SiguiendoJugadores = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const {
    getClubMatches,
    getUserMatches,
    usersWithMessages,
    setActiveIcon,
    selectedPost
    // getUsersMessages
  } = useContext(Context)
  const { allPosts, post, postFeed } = useSelector((state) => state.post)
  const { allMatchs } = useSelector((state) => state.matchs)
  const { offers } = useSelector((state) => state.offers)
  const { sportman } = useSelector((state) => state.sportman)
  const { user, allUsers, mainColor } = useSelector((state) => state.users)
  const { allNotifications } = useSelector((state) => state.notifications)
  const { comments } = useSelector((state) => state.comments)
  const [showDeletePostModal, setShowDeletePostModal] = useState(false)

  const getUserAuth = async () => {
    const normalUserAuth = await AsyncStorage.getItem('userAuth')
    const facebookUserAuth = await AsyncStorage.getItem('facebookAuth')
    const googleUserAuth = await AsyncStorage.getItem('googleAuth')
  }
  useEffect(() => {
    dispatch(getAllPosts(user?.user?.id))
    dispatch(getAllLikes())
    dispatch(getUserChats(user?.user?.id))
    // dispatch(getAllNotifications())
    if (user?.user?.type === 'club') {
      console.log(user?.user?.club?.id, 'club')
      dispatch(getNotificationsByUserId(user?.user?.club?.id))
    } else {
      dispatch(getNotificationsByUserId(user?.user?.id))
    }

    dispatch(getAllOffers())
    dispatch(getAllMatchs())
  }, [post, comments])

  useEffect(() => {
    if (user) {
      getUserAuth()
      dispatch(listLikes(user?.user?.id))
      const data = {
        id: user?.user?.id,
        type: user?.user?.type
      }
      dispatch(getUserChild(data))
      if (Object.keys(sportman).length === 0) {
        dispatch(getSportman(user?.user?.sportman?.id))
      }
    }
  }, [user])

  useEffect(() => {
    setActiveIcon('diary')
  }, [isFocused])

  useEffect(() => {
    if (allMatchs) {
      if (user?.user?.type === 'club') {
        getClubMatches()
      } else {
        getUserMatches()
      }
    }
  }, [allMatchs])

  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    if (user && allPosts.length > 0) {
      const sortedPosts = [...allPosts]
        .filter(
          (post) =>
            user?.user?.following?.includes(post?.author?.id) ||
            user?.user?.id === post?.author?.id
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setFilteredPosts(sortedPosts)
    }
  }, [allPosts, user])

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  return (
    <SafeAreaView style={styles.siguiendoJugadores}>
      <StatusBar animated translucent={true} backgroundColor={'transparent'} />

      {filteredPosts.length > 0 && (
        <ScrollView
          stickyHeaderIndices={[0]}
          stickyHeaderHiddenOnScroll={true}
          keyboardShouldPersistTaps={'always'}
        >
          <HeaderIcons mainColor={mainColor} />
          <View
            style={{
              width: '100%',
              alignSelf: 'center',
              gap: 15,
              paddingBottom: 20,
              paddingHorizontal: 15
            }}
          >
            {filteredPosts.length > 0 &&
              filteredPosts.slice(0, 15)?.map((publication, i) => {
                if (
                  !publication?.author?.isDelete &&
                  !user?.user?.banned?.includes(publication?.author?.id)
                ) {
                  return (
                    <Carousel
                      showDeletePostModal={showDeletePostModal}
                      setShowDeletePostModal={setShowDeletePostModal}
                      key={publication?.id}
                      name={publication?.author?.nickname}
                      description={publication?.description}
                      imgPerfil={
                        publication?.author?.sportman
                          ? publication?.author?.sportman?.info?.img_perfil
                          : publication?.author?.club?.img_perfil
                      }
                      image={[...new Set(publication?.image)]}
                      club={publication?.club === user?.user?.type}
                      likes={publication?.likes}
                      commentCount={publication?.commentCount}
                      index={i}
                      id={publication?.id}
                      userId={user?.user?.id}
                      authorId={publication?.author?.id}
                      data={publication}
                    />
                  )
                }
              })}
          </View>
        </ScrollView>
      )}
      {filteredPosts.length === 0 && (
        <View
          style={{
            height: '100%',
            alignItems: 'center'
          }}
        >
          <View style={{ alignSelf: 'flex-start' }}>
            <HeaderIcons mainColor={mainColor} />
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              gap: 30
            }}
          >
            <Image
              resizeMode="contain"
              style={{
                width: 140,
                height: 140,
                marginRight: 15
              }}
              source={require('../../assets/group-5352.png')}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                fontFamily: FontFamily.t4TEXTMICRO,
                color: Color.wHITESPORTSMATCH
              }}
            >
              Busca y sigue a tus contactos
            </Text>
          </View>
        </View>
      )}
      <Modal visible={showDeletePostModal} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setShowDeletePostModal(false)}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: 300,
                height: 200,
                backgroundColor: '#292929',
                borderRadius: 10,
                padding: 20,
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 18,
                  color: '#fff',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  width: '70%',
                  textAlign: 'center'
                }}
              >
                ¿Estás seguro que quieres eliminar esta publicación?
              </Text>
              <Pressable
                onPress={() => {
                  console.log('Cancel pressed')
                  setShowDeletePostModal(false)
                }}
                style={{
                  width: '100%',
                  gap: 5,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: '#949494',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    textAlign: 'center'
                  }}
                >
                  Cancelar
                </Text>
              </Pressable>
              <View
                style={{
                  height: 1,
                  backgroundColor: Color.colorDimgray_100,
                  width: '100%'
                }}
              />
              <Pressable
                onPress={() => {
                  console.log('Deleting post', selectedPost)
                  setShowDeletePostModal(false)
                  if (selectedPost) {
                    dispatch(deletePost(selectedPost)).then((res) =>
                      dispatch(getAllPosts())
                    )
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    color: '#fff',
                    fontFamily: FontFamily.t4TEXTMICRO,
                    textAlign: 'center'
                  }}
                >
                  Eliminar
                </Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  siguiendoJugadores: {
    flex: 1,

    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  sendMessageButton: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'red',
    top: 125,
    left: 30
  },
  sendMessageText: { color: '#fff' }
})

export default SiguiendoJugadores
