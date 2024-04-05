import React, { useState, useEffect, useContext } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity
} from 'react-native'
import { Color, FontFamily, FontSize } from '../../../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import * as MediaLibrary from 'expo-media-library'
import { Context } from '../../../context/Context'

const SeleccionarImagen = () => {
  const { pickImage, libraryImage } = useContext(Context)

  const navigation = useNavigation()

  const [imagenes, setImagenes] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    obtenerImagenesDeGaleria()
  }, [])

  const obtenerImagenesDeGaleria = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permiso denegado para acceder a la galería de imágenes.')
      return
    }

    const assets = await MediaLibrary.getAssetsAsync()
    const imagesArray = assets?.assets ?? []
    setImagenes(imagesArray)
  }

  const handleSeleccionarImagen = (imagen) => {
    setSelectedImage(imagen)
  }

  const renderizarImagenes = () => {
    return (
      <View style={styles.galleryContainer}>
        {imagenes.map((imagen, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleSeleccionarImagen(imagen)}
          >
            <Image source={{ uri: imagen.uri }} style={styles.gallery} />
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <ScrollView style={styles.crearHighlight}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            style={styles.crearHighlightChild}
            contentFit="cover"
            source={require('../../../assets/group-565.png')}
          />
        </Pressable>
        <TouchableOpacity
          onPress={() => {
            pickImage('a', selectedImage.uri)
            navigation.navigate('CrearHighlight', { image: libraryImage })
          }}
        >
          <Text style={styles.siguiente}>Siguiente</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.codeBlockPersonaEnCanch}
        contentFit="cover"
        source={{ uri: selectedImage?.uri }}
      />
      {renderizarImagenes()}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  crearHighlight: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  crearHighlightChild: {
    height: 15,
    width: 15
  },
  siguiente: {
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  codeBlockPersonaEnCanch: {
    marginVertical: 30,
    height: 300,
    width: '95%',
    left: '2.3%'
  },
  galleryContainer: {
    gap: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginVertical: 3,
    width: '100%',
    justifyContent: 'center'
  },
  gallery: {
    height: 109,
    width: 109,
    margin: 3
  }
})

export default SeleccionarImagen
