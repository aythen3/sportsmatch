import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Color } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'
import { getAllLikes, getAllPosts } from '../../redux/actions/post'
import { getUserChild } from '../../redux/actions/users'

const SiguiendoJugadores = () => {
  const dispatch = useDispatch()
  const { allPosts, post } = useSelector((state) => state.post)
  const { user, userChild } = useSelector((state) => state.users)
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

  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  console.log('sortedPosts', sortedPosts)
  return (
    <View style={styles.siguiendoJugadores}>
      <ScrollView>
        <HeaderIcons />

        {sortedPosts.map((publication, i) => (
          <Carousel
            key={i}
            name={userChild.nickname}
            description={publication?.description}
            imgPerfil={userChild?.sportman?.info?.img_perfil}
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
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default SiguiendoJugadores
