import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image } from 'expo-image'
import {
  Dimensions,
  Modal,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FontSize, Color, FontFamily, Border } from '../../GlobalStyles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { updateImgClub } from '../../redux/actions/club'
import { Context } from '../../context/Context'
import { Entypo } from '@expo/vector-icons'
import { Camera, CameraView } from 'expo-camera'
import { DeviceMotion } from 'expo-sensors'

const EscogerDeporte1 = ({ color }) => {
  const {
    pickImage,
    coverImage,
    setCoverImage,
    profileImage,
    setProfileImage,
    provisoryProfileImage,
    setProvisoryProfileImage,
    provisoryCoverImage,
    setProvisoryCoverImage,
    pickImageFromCamera
  } = useContext(Context)
  const dispatch = useDispatch()

  const [showCamera, setShowCamera] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState()
  const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)

  const { mainColor } = useSelector((state) => state.users)

  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)
  const [facing, setFacing] = useState('back')

  useEffect(() => {
    ;(async () => {
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
    setFacing((prev) => (prev == 'back' ? 'front' : 'back'))
  }
  const cameraReff = useRef(null)

  useEffect(() => {}, [selectedImage, selectedPicture])
  const [orientation, setOrientation] = useState('portrait')

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
    // console.log('on takePicture!')
    // if (cameraRef) {
    //   const photo = await cameraRef.takePictureAsync()
    //   console.log(photo)
    //   setSelectedImage(photo)
    //   pickImageFromCamera(selectedPicture, photo.uri)
    //   setShowCamera(false)
    //   // You can handle the taken photo here, such as displaying it or saving it.
    // }
    if (cameraReff?.current) {
      // Check if cameraRef is not null
      const photo = await cameraReff.current.takePictureAsync({
        orientation: orientation === 'landscape' ? 'landscape' : 'portrait'
      }) // Use cameraRef.current
      setSelectedImage(photo)
      pickImageFromCamera(selectedPicture, photo.uri)
      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }
  if (!showCamera) {
    return (
      <View style={styles.escogerDeporte}>
        <View>
          <Image
            style={styles.perfilImage}
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
          style={[
            styles.rectangleView,
            styles.rectangleViewLayout,
            { backgroundColor: color }
          ]}
          onPress={() => pickImage('profile')}
        >
          <Text style={[styles.subirFotoDe, styles.subirTypo]}>
            Subir foto de perfil
          </Text>
        </TouchableOpacity>
        <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>
          Max 1mb, jpeg
        </Text>

        {provisoryCoverImage ? (
          <View
            style={{
              width: '100%',
              height: 170,
              marginTop: 30,
              borderRadius: 8
            }}
          >
            <Image
              style={{ width: '100%', height: 170, borderRadius: 8 }}
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
              width: '100%',
              height: 170,
              backgroundColor: '#fff',
              marginTop: 30,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Image
              style={{ width: 130, height: 130 }}
              contentFit="cover"
              source={require('../../assets/imagePlaceholder.png')}
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
        )}
        <TouchableOpacity
          style={[
            styles.rectangleView,
            styles.rectangleViewLayout,
            { backgroundColor: color }
          ]}
          onPress={() => pickImage('cover')}
        >
          <Text style={[styles.subirFotoDe, styles.subirTypo]}>
            Subir foto de portada
          </Text>
        </TouchableOpacity>
        <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>
          Max 1mb, jpeg
        </Text>
      </View>
    )
  } else {
    return (
      <Modal visible={showCamera}>
        <View style={{ zIndex: 9999, height: '100%' }}>
          <CameraView
            ref={cameraReff}
            facing={facing}
            style={{ height: Dimensions.get('screen').height }}
            mode="picture"
            FocusMode="on"
            onCameraReady={(e) => console.log(e, 'esto es e')}

            // cameraType="back"
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                paddingBottom: 50
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
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  subirTypo: {
    color: 'white',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  rectangleViewLayout: {
    marginTop: 15,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl
  },
  max1mbTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  rectangleView: {
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  escogerDeporteChild2: {
    top: 366,
    left: 119,
    width: 150
  },
  subirFotoDe: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  },
  subirFotoDe1: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  },
  max1mbJpeg: {
    marginTop: 8,
    marginBottom: 5
  },
  max1mbJpeg1: {
    top: 398
  },
  escogerDeporteChild3: {
    top: 433,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro,
    width: 359,
    height: 138,
    left: 14,
    position: 'absolute'
  },
  lineIcon: {
    marginLeft: -74,
    top: 831,
    width: 148,
    left: '50%',
    maxHeight: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    paddingTop: 25,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  perfilImage: {
    width: 120,
    height: 120,
    borderRadius: 100
  },
  sendText: {
    width: '100%',
    height: 60,
    backgroundColor: 'green'
  },
  portadaBg: {
    width: '100%',
    height: 170,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 8
  }
})

export default EscogerDeporte1
