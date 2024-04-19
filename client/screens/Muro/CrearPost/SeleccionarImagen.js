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
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dimensions } from 'react-native'

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
    pickImage('a', imagen.uri)
  }

  const renderizarImagenes = () => {
    return (
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View
          style={{
            gap: 8,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start'
          }}
        >
          {imagenes.map((imagen, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleSeleccionarImagen(imagen)}
            >
              <Image
                source={{ uri: imagen.uri }}
                style={{
                  width: (Dimensions.get('window').width * 0.9 - 16) / 3,
                  height: (Dimensions.get('window').width * 0.9 + 25) / 3,
                  borderRadius: 4
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }

  return (
    <SafeAreaView style={styles.crearHighlight}>
      <View style={{ width: '90%', alignSelf: 'center' }}>
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
              navigation.navigate('CrearHighlight', { image: libraryImage })
            }}
            disabled={!libraryImage}
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
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  crearHighlight: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  container: {
    marginTop: 20,
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
    fontSize: 17,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '500'
  },
  codeBlockPersonaEnCanch: {
    marginTop: 30,
    marginBottom: 30,
    height: 300,
    borderRadius: 8
  }
})

export default SeleccionarImagen
