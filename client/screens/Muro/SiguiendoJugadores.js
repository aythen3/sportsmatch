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
  Image
} from 'react-native'
import { Color, FontFamily } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'
import {
  deletePost,
  getAllLikes,
  getAllPosts,
  listLikes
} from '../../redux/actions/post'
import { getUserChild, getUserData } from '../../redux/actions/users'
import { Context } from '../../context/Context'
import { getSportman } from '../../redux/actions/sportman'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAllOffers } from '../../redux/actions/offers'
import { getAllNotifications } from '../../redux/actions/notifications'
import { getAllMatchs } from '../../redux/actions/matchs'
import { setColor } from '../../utils/handles/HandlerSportColor'
import { setMainColor } from '../../redux/slices/users.slices'

const SiguiendoJugadores = () => {
  const isFocused = useIsFocused()
  const dispatch = useDispatch()
  const { getClubMatches, getUserMatches, setActiveIcon, selectedPost } =
    useContext(Context)
  const { allPosts, post } = useSelector((state) => state.post)
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
    dispatch(getAllPosts())
    dispatch(getAllLikes())
    dispatch(getAllNotifications())
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

  // const getUserId = async () => {
  //   const userId = await AsyncStorage.getItem('userId')
  //   return userId
  // }

  // useEffect(() => {
  //   if (sportman?.info?.sport.name == 'Fútbol Sala' || sportman?.info?.sport == 'Fútbol Sala') { dispatch(setMainColor('#0062FF')) }
  //   if (sportman?.info?.sport.name == 'Hockey' || sportman?.info?.sport == 'Hockey') { dispatch(setMainColor('#E1AA1E')) }
  //   if (sportman?.info?.sport.name == 'Voley' || sportman?.info?.sport.name == 'Voley') { dispatch(setMainColor('#A8154A')) }
  //   if (sportman?.info?.sport.name == 'Handball' || sportman?.info?.sport == 'Handball') { dispatch(setMainColor('#6A1C4F')) }
  //   if (sportman?.info?.sport.name == 'Fútbol' || sportman?.info?.sport == 'Fútbol') { dispatch(setMainColor('#00FF18')) }
  //   if (sportman?.info?.sport.name == 'Básquetbol' || sportman?.info?.sport == 'Básquetbol') { dispatch(setMainColor('#E1451E')) }
  // }, [sportman?.info])

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
            user.user.id === post.author.id
        )
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      console.log('Setting initial posts...')
      setFilteredPosts(sortedPosts)
    }
  }, [allPosts, user])

  // if (user?.user?.id) {
  //   return (
  //     <View>
  //       <Text>Loading</Text>
  //     </View>
  //   )
  // }
  return (
    <SafeAreaView style={styles.siguiendoJugadores}>
      {isFocused && (
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      )}
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <HeaderIcons mainColor={mainColor} />
        <View
          style={{
            width: '95%',
            alignSelf: 'center',
            gap: 15,
            paddingBottom: 20
          }}
        >
          {filteredPosts.length === 0 ? (
            <View
              style={{
                marginTop: 200,
                gap: 50,
                width: '100%',
                alignItems: 'center'
              }}
            >
              <Image
                contentFit="cover"
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
          ) : (
            filteredPosts
              .slice(0, 15)
              ?.map((publication, i) => (
                <Carousel
                  showDeletePostModal={showDeletePostModal}
                  setShowDeletePostModal={setShowDeletePostModal}
                  key={publication.id}
                  name={publication?.author?.nickname}
                  description={publication?.description}
                  imgPerfil={
                    publication?.author?.sportman
                      ? publication?.author?.sportman?.info?.img_front
                      : publication?.author?.club?.img_perfil
                  }
                  image={[...new Set(publication?.image)]}
                  club={publication?.club === user?.user?.type}
                  likes={publication?.likes}
                  commentCount={publication?.commentCount}
                  index={i}
                  id={publication?.id}
                  userId={user?.user?.id}
                  authorId={publication.author.id}
                  data={publication}
                />
              ))
          )}
        </View>
      </ScrollView>
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
