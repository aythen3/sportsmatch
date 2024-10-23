import React, { useState, useEffect, useContext, useRef } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
  FlatList,
  ActivityIndicator
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
// import { DeviceMotion } from 'expo-sensors'
import * as ImagePicker from 'expo-image-picker'
import { ImageEditor } from '@tahsinz21366/expo-crop-image'
import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator'
const SeleccionarImagen = () => {
  const { pickImage } = useContext(Context)
  const { mainColor } = useSelector((state) => state.users)

  const navigation = useNavigation()
  const [showCamera, setShowCamera] = useState(false)
  const [showSelection, setShowSelection] = useState(false)

  const [multiSelect, setMultiSelect] = useState([])

  const [album, setAlbum] = useState([])
  const [albumData, setAlbumData] = useState([])
  const [editorVisible, setEditorVisible] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState({ title: 'Cámara' })
  const [rotationAngle, setRotationAngle] = useState(0)
  const [showAlbum, setShowAlbum] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [cursor, setCursor] = useState(null) // Almacenar el cursor
  const [imagenes, setImagenes] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageEditor, setSelectedImageEditor] = useState(null)

  const [selectedPicture, setSelectedPicture] = useState()
  const [paginaActual, setPaginaActual] = useState(1)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  useEffect(() => {
    obtenerAlbums()
  }, [])

  const obtenerAlbums = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permiso denegado para acceder a la galería de imágenes.')
      return
    }
  }

  const obtenerImagenesDeGaleria = async (pagina = 1, cantidad = 20) => {
    setIsLoadingMore(true) // Mostrar el loade
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status !== 'granted') {
      console.error('Permiso denegado para acceder a la galería de imágenes.')
      return
    }

    const albms = await MediaLibrary.getAlbumsAsync({
      includeSmartAlbums: true
    })
    const arr = albms.map((e) => e.title)
    setAlbum(arr)
    setAlbumData(albms)

    let filtro = null

    // Filtrar por álbum según la selección
    if (selectedAlbum.title === 'Cámara') {
      filtro = albms.find((e) => e.title === 'Camera')
    } else {
      // Si se selecciona "Galería", no usamos filtro (traer todas las imágenes)
      filtro = null
    }

    // Reiniciar el estado de imágenes y cursor al cambiar de álbum
    if (pagina === 1) {
      setImagenes([]) // Vaciamos las imágenes anteriores
      await setCursor(null) // Reiniciamos el cursor
    }

    let assets
    // Obtener todas las imágenes y videos, ordenados por fecha de creación
    assets = await MediaLibrary.getAssetsAsync({
      album: filtro ? filtro.id : null, // Usar el id del álbum o null
      mediaType: ['photo', 'video'], // Traer fotos y videos
      first: 40, // Cargar la primera "cantidad" de imágenes
      after: pagina === 1 ? null : cursor, // Desplazar para cargar la siguiente página
      sortBy: [MediaLibrary.SortBy.creationTime] // Ordenar por fecha de creación
    })

    // Extraer las imágenes del resultado
    const imagesArray = assets?.assets ?? []

    // Actualizar las imágenes en el estado
    setIsLoadingMore(false) // Mostrar el loade
    setImagenes((prevImagenes) =>
      pagina === 1 ? imagesArray : [...prevImagenes, ...imagesArray]
    )

    // Actualizar el cursor y la página actual para continuar la paginación
    setCursor(assets.endCursor)
    setPaginaActual(pagina)
    console.log(imagenes, 'imagenes')
    if (pagina === 1) {
      setSelectedImage(imagesArray[0])
    }
  }
  useEffect(() => {
    if (selectedAlbum) {
      obtenerImagenesDeGaleria()
    }
  }, [selectedAlbum])

  const handleSeleccionarImagen = async (imagen) => {
    setSelectedImageEditor(imagen)
    if (imagen.mediaType !== 'video') {
      launchEditor(imagen.uri)
    } else {
      console.log(imagen, 'Video seleccionado')
      setSelectedImage(imagen)
    }
  }

  const _rotate90andFlip = async () => {
    const manipResult = await manipulateAsync(
      selectedImage.localUri || selectedImage.uri,
      [{ rotate: rotationAngle }],
      { compress: 1 }
    )
    setSelectedImage(manipResult)
    setRotationAngle((rotationAngle + 90) % 360) // Actualiza el ángulo de rotación
  }

  const launchEditor = (uri) => {
    setEditorVisible(true)
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
    setFacing((prev) => (prev === 'back' ? 'front' : 'back'))
  }

  useEffect(() => {
    console.log('esta es la img,', selectedImage)
  }, [selectedImage])

  const [orientation, setOrientation] = useState('portrait')

  const takePicture = async () => {
    try {
      if (cameraReff?.current) {
        const photo = await cameraReff.current.takePictureAsync({
          orientation: orientation === 'landscape' ? 'landscape' : 'portrait'
        })
        pickImage('a', photo.uri)
        setSelectedImageEditor(photo)

        console.log(photo, 'photo')
        // pickImageFromCamera(selectedPicture, photo.uri);

        setShowCamera(false)
        launchEditor(photo)
      }
    } catch (error) {
      console.log('error', error)
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

  const renderItem = ({ item: imagen, index }) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        if (showSelection) {
          handleSelect(imagen)
        } else {
          handleSeleccionarImagen(imagen)
        }
      }}
      style={{
        flex: 1 / 3, // Cada imagen ocupará un tercio del ancho disponible
        aspectRatio: 1, // Para mantener una relación de aspecto cuadrada,
        margin: 2
      }}
      onLongPress={() => handleSelect(imagen)}
    >
      {multiSelect.find((img) => imagen.id === img.id) && (
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
      <Image
        source={{ uri: imagen.uri }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 4
        }}
        contentFit="cover"
      />
    </TouchableOpacity>
  )

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
                style={{
                  padding: 10
                }}
                onPress={() => {
                  navigation.goBack()
                }}
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
                disabled={multiSelect.length === 0 && selectedImage === null}
                onPress={() => {
                  if (
                    selectedImage.mediaType === 'video' &&
                    selectedImage.duration > 60.0
                  ) {
                    console.log('entra')
                    return setVideoError(true)
                  } else {
                    console.log(selectedImage, '------------')
                    navigation.navigate('CrearHighlight', {
                      image:
                        multiSelect.length == 0 ? selectedImage : multiSelect
                    })
                  }
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
                style={{
                  height: selectedImage ? 'auto' : 400,
                  width: '100%',
                  marginTop: 10
                }}
              >
                {selectedImage && (
                  <>
                    {selectedImage.mediaType === 'video' ? (
                      <Video
                        style={styles.codeBlockPersonaEnCanch}
                        contentFit="cover"
                        isLooping
                        shouldPlay
                        isMuted={false}
                        useNativeControls={true}
                        resizeMode="cover"
                        source={{ uri: selectedImage?.uri }}
                      />
                    ) : (
                      <Image
                        style={styles.codeBlockPersonaEnCanch}
                        contentFit="cover"
                        source={{ uri: selectedImage?.uri }}
                      />
                    )}
                    {selectedImage.mediaType !== 'video' && (
                      <TouchableOpacity
                        onPress={() => _rotate90andFlip()}
                        style={{
                          width: 30,
                          height: 30,
                          backgroundColor: '#252525',

                          position: 'absolute',
                          bottom: 30,
                          left: 15,
                          borderRadius: 50,
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Image
                          style={{
                            width: 15,
                            height: 15
                          }}
                          source={require('../../../assets/rotate.png')}
                        ></Image>
                      </TouchableOpacity>
                    )}
                  </>
                )}
              </View>
            ) : (
              <View
                style={{
                  height: 400,
                  width: '100%',
                  marginTop: 10,
                  marginBottom: 14
                }}
              >
                <PagerView style={{ flex: 1 }} initialPage={0}>
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
                  onSelectItem={(e) => {
                    setSelectedAlbum({ title: e })
                  }}
                  options={['Cámara', 'Galería']}
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

            {imagenes.length === 0 ? (
              <ActivityIndicator size="large" color={mainColor} />
            ) : (
              // Renderizar imágenes
              <FlatList
                data={imagenes}
                keyExtractor={(item) => item.id.toString()} // Asegúrate de usar un ID único
                renderItem={renderItem}
                contentContainerStyle={{}}
                numColumns={3} // Tres columnas para las imágenes
                initialNumToRender={20} // Renderiza 20 imágenes inicialmente para mejorar el rendimiento
                maxToRenderPerBatch={10} // Controla cuántas imágenes cargar por lotes
                windowSize={10} // Ajusta la cantidad de elementos que mantiene en la vista
                onEndReachedThreshold={0} // Ajusta cuándo se activa la carga
                onEndReached={() => {
                  if (cursor && !isLoadingMore) {
                    obtenerImagenesDeGaleria(paginaActual + 1)
                  }
                }}
                // ListFooterComponent={
                //   isLoadingMore && !cursor ? (
                //     <View style={{ paddingVertical: '2%' }}>
                //       <ActivityIndicator color={mainColor} size={'small'} />
                //     </View>
                //   ) : null
                // } //
              />
            )}
          </View>
        )}
        <ImageEditor
          fixedAspectRatio={1 / 1}
          editorOptions={{
            controlBar: {
              cancelButton: {
                iconName: 'cancel',
                color: 'white',
                text: 'Cancelar'
              },
              cropButton: { iconName: 'crop', color: 'white', text: 'Cortar' },
              backButton: {
                iconName: 'arrow-back',
                color: 'white',
                text: 'Atrás'
              },
              saveButton: {
                iconName: 'save-alt',
                color: 'white',
                text: 'Guardar'
              }
            }
          }}
          isVisible={editorVisible}
          onEditingCancel={() => setEditorVisible(false)}
          onCloseEditor={() => setEditorVisible(false)}
          imageUri={selectedImageEditor?.uri}
          fixedCropAspectRatio={1 / 1}
          minimumCropDimensions={{
            width: 100,
            height: 100
          }}
          mode="full"
          onEditingComplete={(result) => {
            setEditorVisible(false)
            setSelectedImage(result)
            if (showSelection) {
              const newObj = { ...result, mediaType: 'photo' }
              console.log([result, ...multiSelect], 'ressssss')
              setMultiSelect([newObj, ...multiSelect])
            }
          }}
        />

        <Modal
          animationType="slide"
          style={{ flex: 1 }}
          onRequestClose={() => setVideoError(false)}
          transparent
          visible={videoError}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end'
            }}
          >
            <View
              style={{
                backgroundColor: 'transparent',
                flex: 1
              }}
              onTouchStart={() => setVideoError(false)}
            />

            <View
              style={{
                bottom: 0,
                width: '100%',
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                borderWidth: 1,
                borderBottomWidth: 0,
                borderColor: 'gray',
                padding: 14,
                position: 'absolute',
                backgroundColor: Color.bLACK2SPORTMATCH
              }}
            >
              <View
                style={{
                  height: 6,
                  width: 50,
                  borderRadius: 20,
                  backgroundColor: Color.wHITESPORTSMATCH,
                  alignSelf: 'center',
                  marginBottom: 12
                }}
              />
              <Text style={{ color: 'gray', textAlign: 'center' }}>
                El video debe durar como máximo 60 segundos
              </Text>
            </View>
          </View>
        </Modal>
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
    marginBottom: 15,
    height: 400,
    borderRadius: 8
  }
})

export default SeleccionarImagen
