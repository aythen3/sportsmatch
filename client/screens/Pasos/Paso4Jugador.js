import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import DetallesSeleccion from '../../components/DetallesSeleccion'
import { Context } from '../../context/Context'
import { Entypo } from '@expo/vector-icons'
import { Camera } from 'expo-camera'

const Paso4Jugador = ({
  sportmanValues,
  setSportmanValues,
  setSelectedCity,
  selectedCity
}) => {
  const { pickImage, provisoryProfileImage,pickImageFromCamera, provisoryCoverImage } =
    useContext(Context)

    const [showCamera, setShowCamera] = useState(false)
    const [selectedPicture, setSelectedPicture] = useState()
    const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)

  const handlePickImage = async (type) => {
    await pickImage(type)
  }

  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const changePictureMode = async () => {
    console.log(
      'setting camera mode to: ',
      cameraType === Camera.Constants.Type.back ? 'selfie' : 'normal'
    )
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    )
  }

  useEffect(() => {
    console.log('selectedImage changed', selectedImage)
    console.log('selectedPicture changed', selectedPicture)
  }, [selectedImage, selectedPicture])

  const takePicture = async () => {
    console.log('on takePicture!')
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync()
      console.log(photo)
      setSelectedImage(photo)
      pickImageFromCamera(selectedPicture, photo.uri)
      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }

  const [scrolledHeight, setScrolledHeight] = useState(0)

  const handleScroll = (event) => {
    const { contentOffset } = event.nativeEvent
    const height = contentOffset.y // Get the scrolled height
    console.log('height: ', height)
    setScrolledHeight(height)
  }

  return (
    <ScrollView
      onScroll={handleScroll}
      keyboardShouldPersistTaps={'always'}
      style={{ height: '70%' }}
    >
       {showCamera && (
        <Modal  animationType="slide"
        transparent={true}
        visible={showCamera}
        onRequestClose={()=>setShowCamera(false)}>
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
                style={{height: 15,
                  width: 15}}
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
        </Modal>
      )}
      <View>
        <View style={{ marginBottom: 30 }}>
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
                  position:"absolute",
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
              style={styles.botonSubirImagen}
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
              <Image
                style={{
                  width: '100%',
                  height: 170,
                  backgroundColor: 'white',
                  marginTop: 30,
                  borderRadius: 8
                }}
                contentFit="cover"
                source={{ uri: provisoryCoverImage }}
              />
            ) : (
              <View
                style={{
                  width: '100%',
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
                  position:"absolute",
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
              style={styles.botonSubirImagen}
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

        <DetallesSeleccion
          scrolledHeight={scrolledHeight}
          sportmanValues={sportmanValues}
          setSportmanValues={setSportmanValues}
          setSelectedCity={setSelectedCity}
        />
      </View>
    </ScrollView>
  )
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

export default Paso4Jugador
