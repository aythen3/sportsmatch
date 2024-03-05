import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { Color } from '../GlobalStyles'
import HeaderIcons from '../components/HeaderIcons'
import { useSelector } from 'react-redux'
import Carousel from '../components/Carousel'

const SiguiendoJugadores = () => {
  const { publications } = useSelector((state) => state.muro)

  return (
    <View style={styles.siguiendoJugadores}>
      <ScrollView>
        <HeaderIcons />

        {publications.map((publication, i) => (
          <Carousel
            key={i}
            name={publication.name}
            description={publication.description}
            imgPerfil={publication.imgPerfil}
            image={publication.image}
            likes={publication.likes}
            comments={publication.comments}
            index={i}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  siguiendoJugadores: {
    flex: 1,
    paddingBottom: 100,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default SiguiendoJugadores
