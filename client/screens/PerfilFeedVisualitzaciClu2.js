import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Color } from '../GlobalStyles'
import HeaderPerfil from '../components/HeaderPerfil'
import { allImagesMuro } from '../utils/allimagesMuro'
import ImagesRender from '../components/ImagesRender'

const PerfilFeedVisualitzaciClu2 = () => {
  return (
    <ScrollView style={styles.perfilFeedVisualitzaciClu}>
      <HeaderPerfil />

      <View
        style={{
          height: '100%',
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 15,
          gap: 5,
          justifyContent: 'center'
        }}
      >
        {allImagesMuro.map((image) => (
          <ImagesRender key={image.id} img={image.img} />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  perfilFeedVisualitzaciClu: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1
  }
})

export default PerfilFeedVisualitzaciClu2
