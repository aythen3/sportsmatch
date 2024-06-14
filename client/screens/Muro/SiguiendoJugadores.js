import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native'
import { Color } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'
import { getAllLikes, getAllPosts, listLikes } from '../../redux/actions/post'
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
  const { getClubMatches, getUserMatches, setActiveIcon } = useContext(Context)
  const { allPosts, post } = useSelector((state) => state.post)
  const { allMatchs } = useSelector((state) => state.matchs)
  const { offers } = useSelector((state) => state.offers)
  const { sportman } = useSelector((state) => state.sportman)
  const { user, allUsers, mainColor } = useSelector((state) => state.users)
  const { allNotifications } = useSelector((state) => state.notifications)
  const { comments } = useSelector((state) => state.comments)

  const getUserAuth = async () => {
    const normalUserAuth = await AsyncStorage.getItem('userAuth')
    const facebookUserAuth = await AsyncStorage.getItem('facebookAuth')
    const googleUserAuth = await AsyncStorage.getItem('googleAuth')
  }
  useEffect(() => {
    dispatch(getAllOffers())
    dispatch(getAllPosts())
    dispatch(getAllMatchs())
    dispatch(getAllLikes())
    dispatch(getAllNotifications())
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

  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

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
          {sortedPosts.slice(0, 15)?.map((publication, i) => (
            <Carousel
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
          ))}
        </View>
      </ScrollView>
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
