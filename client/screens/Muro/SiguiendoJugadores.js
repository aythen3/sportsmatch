import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Color } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'
import { getAllLikes, getAllPosts } from '../../redux/actions/post'

const SiguiendoJugadores = () => {
  const dispatch = useDispatch()

  const { allPosts, post } = useSelector((state) => state.post)
  const { user } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getAllPosts())
    dispatch(getAllLikes())
  }, [post])

  const sortedPosts = [...allPosts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  )

  return (
    <View style={styles.siguiendoJugadores}>
      <ScrollView>
        <HeaderIcons />

        {sortedPosts.map((publication, i) => (
          <Carousel
            key={i}
            name={user.user.club.name}
            description={publication.description}
            imgPerfil={user.user.club.imgPerfil}
            image={publication.image}
            club={publication.club === user.user.type}
            likes={publication.likes}
            // comments={publication.comments}
            index={i}
            id={publication.id}
            userId={user.user.id}
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
