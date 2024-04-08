import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native'
import { Color } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'
import { getAllLikes, getAllPosts } from '../../redux/actions/post'
import { getUserChild, getUserData } from '../../redux/actions/users'
import { Context } from '../../context/Context'
import { getSportman } from '../../redux/actions/sportman'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SiguiendoJugadores = () => {
  const dispatch = useDispatch()

  const { joinRoom, sendMessage } = useContext(Context)
  const { allPosts, post } = useSelector((state) => state.post)
  const { user } = useSelector((state) => state.users)
  const { comments } = useSelector((state) => state.comments)

  // const getUserId = async () => {
  //   const userId = await AsyncStorage.getItem('userId')
  //   return userId
  // }

  // useEffect(() => {
  //   console.log('user data from home: ', user)
  // }, [])

  // useEffect(() => {
  //   const userId = getUserId()
  //   dispatch(getUserData(userId))
  // }, [])

  useEffect(() => {
    const data = {
      id: user?.user?.id,
      type: user?.user?.type
    }
    dispatch(getUserChild(data))
    dispatch(getSportman(user?.user?.sportman?.id))
  }, [])

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllLikes())
  }, [post, comments])

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
    <View style={styles.siguiendoJugadores}>
      <ScrollView>
        <HeaderIcons />
        {sortedPosts.map((publication, i) => (
          <Carousel
            key={i}
            name={publication?.author.nickname}
            description={publication?.description}
            imgPerfil={
              publication.author.sportman
                ? publication?.author?.sportman?.info?.img_perfil
                : publication?.author?.club?.img_perfil
            }
            image={publication?.image}
            club={publication?.club === user?.user?.type}
            likes={publication?.likes}
            commentCount={publication.commentCount}
            index={i}
            id={publication?.id}
            userId={user?.user?.id}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  siguiendoJugadores: {
    flex: 1,
    position: 'relative',
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
