import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import { Context } from '../../context/Context'
import { Entypo } from '@expo/vector-icons'
import { Camera, CameraView, useCameraPermissions } from 'expo-camera'
import { DeviceMotion } from 'expo-sensors'
import { ImageEditor } from '@tahsinz21366/expo-crop-image'

const Paso4Profesional = ({ profesionalValues, setProfesionalValues }) => {
  const {
    pickImage,
    provisoryProfileImage,
    pickImageFromCamera,
    provisoryCoverImage
  } = useContext(Context)
  const cameraReff = useRef(null)
  const [facing, setFacing] = useState('back')
  const [showCamera, setShowCamera] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState()
  const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)

  const handlePickImage = async (type) => {
    await pickImage(type)
  }
  const [editorVisible, setEditorVisible] = useState(false)

  const [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const changePictureMode = async () => {
    setFacing((prev) => (prev == 'back' ? 'front' : 'back'))
  }

  useEffect(() => {}, [selectedImage, selectedPicture])
  const [orientation, setOrientation] = useState('portrait')

  const launchEditor = (uri) => {
    // Then set the image uri
    // And set the image editor to be visible
    setEditorVisible(true)
  }

  // useEffect(() => {
  //   const subscription = DeviceMotion.addListener((deviceMotionData) => {
  //     const { rotation } = deviceMotionData
  //     if (rotation.beta > 45 && rotation.beta < 135) {
  //       setOrientation('landscape')
  //     } else if (rotation.beta < -45 && rotation.beta > -135) {
  //       setOrientation('landscape')
  //     } else {
  //       setOrientation('portrait')
  //     }
  //   })
  //   return () => subscription.remove()
  // }, [])
  const takePicture = async () => {
    if (cameraReff) {
      const photo = await cameraReff.current.takePictureAsync({
        orientation: orientation === 'landscape' ? 'landscape' : 'portrait'
      })
      setSelectedImage(photo)
      setShowCamera(false)
      launchEditor(photo.uri)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }
  if (!showCamera) {
    return (
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <View>
          <View style={{ paddingBottom: 80 }}>
            <View style={styles.headersubirImagenesPerfil}>
              <View>
                <Image
                  style={styles.circuloIcon}
                  contentFit="cover"
                  source={
                    provisoryProfileImage
                      ? { uri: provisoryProfileImage }
                      : require('../../assets/avatarr.png')
                  }
                />
                <TouchableOpacity
                  onPress={() => {
                    setSelectedPicture('profile')
                    setShowCamera(true)
                  }}
                  style={{
                    right: 0,
                    position: 'absolute',
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
                    source={require('../../assets/camera.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  paddingHorizontal: Padding.p_mid,
                  paddingVertical: Padding.p_9xs,
                  backgroundColor: '#00F0FF',
                  borderRadius: Border.br_81xl,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  marginTop: 15,
                  alignItems: 'center'
                }}
                onPress={() => handlePickImage('profile')}
              >
                <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
                  Subir foto de perfil
                </Text>
              </TouchableOpacity>

              <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
                Max 1mb, jpeg
              </Text>
            </View>
            <View style={styles.rectangulobotonpesoMaximo}>
              {provisoryCoverImage ? (
                <View
                  style={{
                    width: '95%',
                    height: 170,
                    backgroundColor: '#fff',
                    marginTop: 30,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'white',
                      borderRadius: 8
                    }}
                    contentFit="cover"
                    source={{ uri: provisoryCoverImage }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPicture('cover')
                      setShowCamera(true)
                    }}
                    style={{
                      top: -17,
                      right: 0,
                      position: 'absolute',
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
                      source={require('../../assets/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
              ) : (
                <View
                  style={{
                    width: '95%',
                    height: 170,
                    backgroundColor: '#fff',
                    marginTop: 30,
                    borderRadius: 8,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPicture('cover')
                      setShowCamera(true)
                    }}
                    style={{
                      top: -17,
                      right: 0,
                      position: 'absolute',
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
                      source={require('../../assets/camera.png')}
                    />
                  </TouchableOpacity>
                  <Image
                    style={{ width: 130, height: 130 }}
                    contentFit="cover"
                    source={require('../../assets/imagePlaceholder.png')}
                  />
                </View>
              )}
              <TouchableOpacity
                style={{
                  paddingHorizontal: Padding.p_mid,
                  paddingVertical: Padding.p_9xs,
                  backgroundColor: '#00F0FF',
                  borderRadius: Border.br_81xl,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  overflow: 'hidden',
                  marginTop: 15,
                  alignItems: 'center'
                }}
                onPress={() => handlePickImage('cover')}
              >
                <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
                  Subir foto de portada
                </Text>
              </TouchableOpacity>
              <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
                Max 1mb, jpeg
              </Text>
            </View>
          </View>
        </View>
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
          imageUri={selectedImage?.uri}
          fixedCropAspectRatio={1 / 1}
          minimumCropDimensions={{
            width: 100,
            height: 100
          }}
          mode="full"
          onEditingComplete={(result) => {
            setEditorVisible(false)
            pickImageFromCamera(selectedPicture, result.uri)

            setSelectedImage(result)
          }}
        />
      </ScrollView>
    )
  } else {
    return (
      <Modal
        visible
        style={{
          zIndex: 9999,
          height: Dimensions.get('screen').height
        }}
      >
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
              style={{ position: 'absolute', top: 22, left: 18 }}
              onPress={() => setShowCamera(false)}
            >
              <Image
                style={{
                  height: 15,
                  width: 15
                }}
                contentFit="cover"
                source={require('../../assets/group-565.png')}
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
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  headersubirImagenesPerfil: {
    alignItems: 'center'
  },
  circuloIcon: {
    width: 117,
    borderRadius: 100,
    height: 117
  },
  botonSubirImagen: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 15,
    alignItems: 'center'
  },
  subirFotoDe: {
    color: Color.wHITESPORTSMATCH
  },
  paso4Typo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pesoMaximo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  rectangulobotonpesoMaximo: {
    height: 199,
    alignItems: 'center'
  },
  rectangulo: {
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Color.colorGainsboro,
    width: 380,
    height: 120
  }
})

export default Paso4Profesional
