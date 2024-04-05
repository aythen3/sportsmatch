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
import { getUserChild } from '../../redux/actions/users'
import { Context } from '../../context/Context'

const SiguiendoJugadores = () => {
  const dispatch = useDispatch()

  const { joinRoom, sendMessage } = useContext(Context)
  const { allPosts, post } = useSelector((state) => state.post)
  const { user } = useSelector((state) => state.users)
  const { comments } = useSelector((state) => state.comments)

  useEffect(() => {
    const data = {
      id: user?.user?.id,
      type: user?.user?.type
    }
    dispatch(getUserChild(data))
  }, [])

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllLikes())
  }, [post, comments])

  useEffect(() => {
    joinRoom(
      '15171abb-8c1c-4ef2-893d-a277d965c4c9',
      'cf56082a-fe08-4d4d-97ef-750bc87cd07f'
    )
  }, [])

  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  return (
    <View style={styles.siguiendoJugadores}>
      <ScrollView>
        <HeaderIcons />
        {/* <TouchableOpacity
          style={styles.sendMessageButton}
          onPress={() =>
            sendMessage(
              'Testing messages',
              'cf56082a-fe08-4d4d-97ef-750bc87cd07f',
              '15171abb-8c1c-4ef2-893d-a277d965c4c9'
            )
          }
        >
          <Text style={styles.sendMessageText}>SEND MESSAGE</Text>
        </TouchableOpacity> */}
        {sortedPosts.map((publication, i) => (
          <Carousel
            key={i}
            // name={userChild.nickname}
            description={publication?.description}
            // imgPerfil={userChild?.sportman?.info?.img_perfil}
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
