import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Color } from '../../GlobalStyles'
import HeaderIcons from '../../components/HeaderIcons'
import Carousel from '../../components/Carousel'

const SiguiendoJugadores = () => {
  const dispatch = useDispatch()

  const { publications } = useSelector((state) => state.muro)
  console.log(publications)

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
            club={publication.club}
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
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default SiguiendoJugadores
