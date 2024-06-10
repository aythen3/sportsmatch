import React, { useState, useEffect, useContext, useRef } from 'react'
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
import { Entypo } from '@expo/vector-icons'
import { Camera, CameraView } from 'expo-camera'
import ScrollableModal from '../../../components/modals/ScrollableModal'

const SeleccionarImagen = () => {
  const { pickImage, libraryImage, pickImageFromCamera } = useContext(Context)

  const navigation = useNavigation()
  const [showCamera, setShowCamera] = useState(false)
  const [album, setAlbum] = useState([])
  const [albumData, setAlbumData] = useState([])

  const [selectedAlbum, setSelectedAlbum] = useState({ "title": "Camera"})

  const [showAlbum, setShowAlbum] = useState(false)

  const [imagenes, setImagenes] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)
  const [selectedPicture, setSelectedPicture] = useState()

  useEffect(() => {
    obtenerImagenesDeGaleria()
  }, [])

  const obtenerImagenesDeGaleria = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permiso denegado para acceder a la galería de imágenes.')
      return
    }

    const assets = await MediaLibrary.getAlbumsAsync({ includeSmartAlbums: true })
    const arr = []
    const arr2 = []
    assets.map(e => arr.push(e.title))
    assets.map(e => arr2.push(e))
    setAlbum(arr)
    setAlbumData(arr2)

    // console.log(arr, "asssetss")
    // const imagesArray = assets?.assets ?? []
    // setImagenes(imagesArray)
  }


  const obtenerImagenesDeGalerias = async () => {
    
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permiso denegado para acceder a la galería de imágenes.')
      return
    }
    const filtro = albumData.filter(e=> e.title == selectedAlbum)
    console.log("filtro",filtro)
    
    const assets = await MediaLibrary.getAssetsAsync({ album: filtro[0]})
    console.log(assets,"eeeeeeeeeeeeeee")
    const arr = []
    const imagesArray = assets?.assets ?? []
    setImagenes(imagesArray)
  }

  useEffect(() => {
    if(selectedAlbum !== ''){

      obtenerImagenesDeGalerias()
    }
  }, [selectedAlbum])

  const handleSeleccionarImagen = (imagen) => {
    pickImage('a', imagen.uri)
    console.log('imagen: ', imagen)
    setSelectedImage(imagen)
  }
  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)
  const cameraReff = useRef(null);

  const [facing, setFacing] = useState('back');

  useEffect(() => {
    ; (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const changePictureMode = async () => {
    // console.log(
    //   'setting camera mode to: ',
    //   cameraType === Camera.Constants.Type.back ? 'selfie' : 'normal'
    // )
    // setCameraType(
    //   cameraType === Camera.Constants.Type.back
    //     ? Camera.Constants.Type.front
    //     : Camera.Constants.Type.back
    // )
    setFacing((prev) => prev == "back" ? "front" : "back")

  }

  useEffect(() => {
    console.log('selectedImage changed', selectedImage)
  }, [selectedImage])

  const takePicture = async () => {
    console.log('on takePicture!')
    if (cameraReff?.current) {
      const photo = await cameraReff.current.takePictureAsync()
      pickImage('a', photo.uri)
      console.log(photo)
      setSelectedImage(photo)
      // pickImageFromCamera(selectedPicture, photo.uri);

      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }


  const renderizarImagenes = () => {
    return (
      <ScrollView
        style={{ height: '100%' }}
        keyboardShouldPersistTaps={'always'}
      >
        <View
          style={{
            gap: 8,
            paddingBottom: 8,
            overflow: 'hidden',
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
  if (!showCamera) {
    return (
      <SafeAreaView style={styles.crearHighlight}>
        {showCamera ? (
          <Camera
            style={{
              flex: 1
            }}
            type={Camera.Constants.Type.back}
            ref={(ref) => setCameraRef(ref)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row'
              }}
            >
              <TouchableOpacity
                style={{ position: 'absolute', top: 22, left: 18 }}
                onPress={() => setShowCamera(false)}
              >
                <Image
                  style={{ height: 15, width: 15 }}
                  contentFit="cover"
                  source={require('../../../assets/group-565.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  width: '100%',
                  marginBottom: 10,
                  position: 'relative'
                }}
              >
                <TouchableOpacity
                  onPress={takePicture}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 100,
                    backgroundColor: '#cecece',

                    color: 'white'
                  }}
                ></TouchableOpacity>
                <TouchableOpacity
                  onPress={changePictureMode}
                  style={{
                    position: 'absolute',
                    right: 20,
                    color: 'white',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Entypo name="cycle" color={'#fff'} size={25} />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </Camera>
        ) : (
          <View style={{ width: '90%', alignSelf: 'center', flex: 1 }}>
            <View style={styles.container}>
              <TouchableOpacity
                o
                onPress={() => {
                  console.log('SIMG')
                  navigation.goBack()
                }}
              >
                <Image
                  style={{ height: 15, width: 15 }}
                  contentFit="cover"
                  source={require('../../../assets/group-565.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('CrearHighlight', { image: libraryImage })
                }}
                disabled={!libraryImage}
              >
                <Text
                  style={{
                    color: Color.wHITESPORTSMATCH,
                    fontSize: 17,
                    fontFamily: FontFamily.t4TEXTMICRO,
                    fontWeight: '500'
                  }}
                >
                  Siguiente
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              style={styles.codeBlockPersonaEnCanch}
              contentFit="cover"
              source={{ uri: selectedImage?.uri }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15
              }}
            >
              <Pressable onPress={()=> setShowAlbum(true)}
                style={{ flexDirection: 'row', gap: 4, alignItems: 'center' }}
              >
                <Text
                  style={{
                    color: Color.wHITESPORTSMATCH,
                    fontSize: 17,
                    fontFamily: FontFamily.t4TEXTMICRO,
                    fontWeight: '500'
                  }}
                >
                  {selectedAlbum?.title || selectedAlbum || 'Galeria'}
                </Text>
                <Entypo size={20} color={'#fff'} name="chevron-small-down" />
              </Pressable>
              {showAlbum && (
                <ScrollableModal closeModal={()=> setShowAlbum(false)} onSelectItem={setSelectedAlbum} options={album} visible={showAlbum}></ScrollableModal>
              )}

              {hasPermission && (
                <TouchableOpacity
                  onPress={() => setShowCamera(true)}
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 100,
                    backgroundColor: '#252525',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Image
                    style={{ width: 14, height: 14 }}
                    contentFit="cover"
                    source={require('../../../assets/camera.png')}
                  />
                </TouchableOpacity>
              )}
            </View>

            {renderizarImagenes()}
          </View>
        )}
      </SafeAreaView>
    )
  }
  else {
    return (
      <View style={{ zIndex: 9999, height: "100%" }}>

        <CameraView ref={cameraReff} facing={facing} style={{ flex: 1 }} mode='picture' FocusMode="on" onCameraReady={(e) => console.log(e, "esto es e")}

        // cameraType="back"
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row'
            }}
          >
            <TouchableOpacity
              style={{ position: 'absolute', top: 22, left: 18 }}
              onPress={() => setShowCamera(false)}
            >
              <Image
                style={{
                  height: 15,
                  width: 15
                }}
                contentFit="cover"
                source={require('../../../assets/group-565.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 30,
                position: 'relative'
              }}
            >
              <TouchableOpacity
                onPress={takePicture}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 100,
                  backgroundColor: '#cecece',

                  color: 'white'
                }}
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={changePictureMode}
                style={{
                  position: 'absolute',
                  right: 20,
                  color: 'white',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Entypo name="cycle" color={'#fff'} size={25} />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </CameraView>

      </View>
    )
  }
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
  codeBlockPersonaEnCanch: {
    marginTop: 30,
    marginBottom: 15,
    height: 300,
    borderRadius: 8
  }
})

export default SeleccionarImagen
