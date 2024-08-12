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
import PagerView from 'react-native-pager-view'
import SimboloSVG from './SimboloSVG'
import { useSelector } from 'react-redux'
import { Video } from 'expo-av'

const SeleccionarImagen = () => {
  const { pickImage, libraryImage, pickImageFromCamera } = useContext(Context)
  const { mainColor } = useSelector((state) => state.users)

  const navigation = useNavigation()
  const [showCamera, setShowCamera] = useState(false)
  const [showSelection, setShowSelection] = useState(false)

  const [multiSelect, setMultiSelect] = useState([])

  const [album, setAlbum] = useState([])
  const [albumData, setAlbumData] = useState([])

  const [selectedAlbum, setSelectedAlbum] = useState({ title: 'Camera' })

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

    const assets = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true
    })
    const arr = []
    const arr2 = []
    assets.map((e) => arr.push(e.title))
    assets.map((e) => arr2.push(e))
    setAlbum(arr)
    setAlbumData(arr2)
  }
  const obtenerImagenesDeGalerias = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permiso denegado para acceder a la galería de imágenes.')
      return
    }
    const filtro = albumData.filter((e) => e.title == selectedAlbum)

    const assets = await MediaLibrary.getAssetsAsync({
      album: filtro[0],
      mediaType: ['photo', 'video']
    })
    const arr = []
    const imagesArray = assets?.assets ?? []
    setImagenes(imagesArray)
  }

  useEffect(() => {
    if (selectedAlbum !== '') {
      obtenerImagenesDeGalerias()
    }
  }, [selectedAlbum])

  const handleSeleccionarImagen = (imagen) => {
    setSelectedImage(imagen)
  }
  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)
  const cameraReff = useRef(null)

  const [facing, setFacing] = useState('back')

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const changePictureMode = async () => {
    setFacing((prev) => (prev == 'back' ? 'front' : 'back'))
  }

  useEffect(() => {}, [selectedImage])

  const takePicture = async () => {
    if (cameraReff?.current) {
      const photo = await cameraReff.current.takePictureAsync()
      pickImage('a', photo.uri)
      setSelectedImage(photo)
      // pickImageFromCamera(selectedPicture, photo.uri);

      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }

  const handleSelect = (image) => {
    const exist = multiSelect.find((png) => png.id === image.id)
    if (!exist) {
      setMultiSelect([...multiSelect, image])
    } else {
      setMultiSelect(multiSelect.filter((png) => png.id !== image.id))
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
              onPress={() => {
                if (showSelection) {
                  handleSelect(imagen)
                } else {
                  handleSeleccionarImagen(imagen)
                }
              }}
              onLongPress={() => handleSelect(imagen)}
            >
              {multiSelect.find((img, i) => imagen.id === img.id) && (
                <View
                  style={{
                    width: 20,
                    height: 20,
                    backgroundColor: mainColor,
                    borderRadius: 100,
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 800
                  }}
                >
                  <Text style={{ color: 'white', textAlign: 'center' }}>
                    {multiSelect.indexOf(imagen) + 1}
                  </Text>
                </View>
              )}
              <>
                {imagen.mediaType === 'photo' ? (
                  <Image
                    source={{ uri: imagen.uri }}
                    style={{
                      width: (Dimensions.get('window').width * 0.9 - 20) / 3,
                      height: (Dimensions.get('window').width * 0.9 + 25) / 3,
                      borderRadius: 4
                    }}
                  />
                ) : (
                  <Video
                    source={{ uri: imagen.uri }}
                    style={{
                      width: (Dimensions.get('window').width * 0.9 - 20) / 3,
                      height: (Dimensions.get('window').width * 0.9 + 25) / 3,
                      borderRadius: 4
                    }}
                    shouldPlay
                    isMuted
                    isLooping
                    useNativeControls={false}
                    resizeMode="cover"
                  />
                )}
              </>
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
                onPress={() => {
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
                disabled={multiSelect.length === 0 && selectedImage === null}
                onPress={() => {
                  navigation.navigate('CrearHighlight', {
                    image:
                      multiSelect.length == 0 ? selectedImage : multiSelect
                  })
                }}
              >
                <Text
                  style={{
                    color:
                      multiSelect.length === 0 && selectedImage === null
                        ? Color.colorDimgray_100
                        : Color.wHITESPORTSMATCH,
                    fontSize: 17,
                    fontFamily: FontFamily.t4TEXTMICRO,
                    fontWeight: '500'
                  }}
                >
                  Siguiente
                </Text>
              </TouchableOpacity>
            </View>
            {multiSelect.length === 0 ? (
              <View
                style={{ height: selectedImage ? 'auto' : 350, width: '100%' }}
              >
                {selectedImage && (
                  <>
                    {selectedImage.mediaType === 'photo' && (
                      <Image
                        style={styles.codeBlockPersonaEnCanch}
                        contentFit="cover"
                        source={{ uri: selectedImage?.uri }}
                      />
                    )}
                    {selectedImage.mediaType === 'video' && (
                      <Video
                        style={styles.codeBlockPersonaEnCanch}
                        contentFit="cover"
                        shouldPlay
                        isMuted
                        isLooping
                        useNativeControls={false}
                        resizeMode="cover"
                        source={{ uri: selectedImage?.uri }}
                      />
                    )}
                  </>
                )}
              </View>
            ) : (
              <View style={{ height: 344, width: '100%' }}>
                <PagerView
                  style={{ flex: 1, marginBottom: 10 }}
                  initialPage={0}
                >
                  {multiSelect.map((e, i) => (
                    <View style={{ width: '100%' }} key={i}>
                      <>
                        {e.mediaType === 'photo' && (
                          <Image
                            style={styles.codeBlockPersonaEnCanch}
                            contentFit="cover"
                            source={{ uri: e?.uri }}
                          />
                        )}
                        {e.mediaType === 'video' && (
                          <Video
                            style={styles.codeBlockPersonaEnCanch}
                            contentFit="cover"
                            shouldPlay
                            isMuted
                            isLooping
                            useNativeControls={false}
                            resizeMode="cover"
                            source={{ uri: e?.uri }}
                          />
                        )}
                      </>
                    </View>
                  ))}
                </PagerView>
              </View>
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 15
              }}
            >
              <Pressable
                onPress={() => setShowAlbum(true)}
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
                <ScrollableModal
                  closeModal={() => setShowAlbum(false)}
                  onSelectItem={setSelectedAlbum}
                  options={album}
                  visible={showAlbum}
                ></ScrollableModal>
              )}

              {hasPermission && (
                <View style={{ flexDirection: 'row', gap: 8 }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (showSelection) {
                        setMultiSelect([])
                      }
                      setShowSelection(!showSelection)
                    }}
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 100,
                      backgroundColor: '#252525',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    {/* <Image
                      style={{ width: 14, height: 14 }}
                      contentFit="cover"
                      source={require('../../../assets/camera.png')}
                    /> */}
                    <SimboloSVG
                      color={
                        showSelection || multiSelect.length > 0
                          ? mainColor
                          : '#fff'
                      }
                    />
                  </TouchableOpacity>
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
                      style={{ width: 15, height: 15 }}
                      contentFit="cover"
                      source={require('../../../assets/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {renderizarImagenes()}
          </View>
        )}
      </SafeAreaView>
    )
  } else {
    return (
      <View style={{ zIndex: 9999, height: '100%' }}>
        <CameraView
          ref={cameraReff}
          facing={facing}
          style={{ flex: 1 }}
          mode="picture"
          FocusMode="on"
          onCameraReady={(e) => console.log(e, 'esto es e')}

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
              style={{ position: 'absolute', top: 49, left: 20 }}
              onPress={() => setShowCamera(false)}
            >
              <Image
                style={{
                  height: 16,
                  width: 16
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
