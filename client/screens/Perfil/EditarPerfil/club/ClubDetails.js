import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontFamily } from '../../../../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../../../../context/Context'
import { getClub, updateClubData } from '../../../../redux/actions/club'
import { Entypo } from '@expo/vector-icons'
import { Camera, CameraView } from 'expo-camera'
import CustomHeaderBack from '../../../../components/CustomHeaderBack'

const ClubDetails = () => {
  const dispatch = useDispatch()
  const [clubName, setClubName] = useState()
  const [city, setCity] = useState()
  const [country, setCountry] = useState()
  const [stadiumName, setStadiumName] = useState()
  const [foundationDate, setFoundationDate] = useState()
  const [capacity, setCapacity] = useState()
  const [description, setDescription] = useState()
  const navigation = useNavigation()

  const {
    pickImage,
    profileImage,
    coverImage,
    setCoverImage,
    setProfileImage,
    provisoryCoverImage,
    provisoryProfileImage,
    pickImageFromCamera,
    pickImageLoading,
    setPickImageLoading
  } = useContext(Context)
  const { user, mainColor } = useSelector((state) => state.users)

  const { club } = useSelector((state) => state.clubs)

  const inputs = [
    {
      title: 'Nombre del club',
      type: 'text',
      placeHolder: club.name || 'Nombre del club...',
      state: clubName,
      setState: setClubName
    },
    {
      title: 'Población',
      type: 'text',
      placeHolder: club.city || 'Población...',
      state: city,
      setState: setCity
    },
    {
      title: 'País',
      type: 'text',
      placeHolder: club.country || 'País...',
      state: country,
      setState: setCountry
    },
    {
      title: 'Nombre del estadio, campo o pabellón',
      type: 'text',
      placeHolder: club.field || 'Nombre del estadio...',
      state: stadiumName,
      setState: setStadiumName
    },
    {
      title: 'Año de fundación',
      type: 'number',
      placeHolder: club.year.toString() || 'Año de fundación...',
      state: foundationDate,
      setState: setFoundationDate
    },
    {
      title: 'Aforo',
      type: 'number',
      placeHolder: club.capacity.toString() || 'Aforo...',
      state: capacity,
      setState: setCapacity
    },
    {
      title: 'Describe tu club',
      type: 'text',
      placeHolder:
        club.description ||
        'Habla de aquello que sea más relevante de tu club. Campeonatos ganados, categorías, anécdotas, etc.',
      state: description,
      setState: setDescription,
      textArea: true
    }
  ]

  const handleUpdateClubData = () => {
    const data = {
      name: clubName,
      city,
      country,
      capacity,
      description,
      field: stadiumName,
      img_perfil: profileImage,
      img_front: coverImage,
      year: foundationDate
    }

    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value
      }
      return acc
    }, {})
    console.log('updating club data with', filteredData)
    dispatch(updateClubData({ id: club.id, body: filteredData })).then((res) =>
      dispatch(getClub(club.id))
    )
    setProfileImage()
    setCoverImage()
    navigation.navigate('PerfilDatosPropioClub')
  }

  const [showCamera, setShowCamera] = useState(false)
  const cameraReff = useRef(null)
  const [selectedPicture, setSelectedPicture] = useState()
  const [selectedImage, setSelectedImage] = useState(null)
  // const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)
  const [facing, setFacing] = useState('back')

  const handlePickImage = async (type) => {
    await pickImage(type)
  }

  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  // const changePictureMode = async () => {
  //   setCameraType(
  //     cameraType === Camera?.Constants?.Type?.back
  //       ? Camera?.Constants?.Type?.front
  //       : Camera?.Constants?.Type?.back
  //   )
  // }

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

  // const takePicture = async () => {
  //   if (cameraRef) {
  //     const photo = await cameraRef.takePictureAsync()
  //     setSelectedImage(photo)
  //     pickImageFromCamera(selectedPicture, photo.uri)
  //     setShowCamera(false)
  //     // You can handle the taken photo here, such as displaying it or saving it.
  //   }
  // }
  const takePicture = async () => {
    if (cameraReff) {
      const photo = await cameraReff.current.takePictureAsync()
      setSelectedImage(photo)
      pickImageFromCamera(selectedPicture, photo.uri)
      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }

  return (
    <SafeAreaView style={styles.clubDetailsContainer}>
      {showCamera && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCamera}
          onRequestClose={() => setShowCamera(false)}
        >
          <CameraView
            ref={cameraReff}
            facing={facing}
            style={{ flex: 1 }}
            mode="picture"
            FocusMode="on"
            onCameraReady={(e) => console.log(e, 'esto es e')}
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
                  source={require('../../../../assets/group-565.png')}
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
          </CameraView>
        </Modal>
      )}
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={styles.generalWrapper}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <CustomHeaderBack header={'Detalles del club'}></CustomHeaderBack>
        <View style={styles.wrapperGap}>
          {/* =========================================================== */}
          {/* ====================== TOP CONTAINER ====================== */}
          {/* =========================================================== */}
          {/* =========================================================== */}
          {/* ======================= PROFILE PIC ======================= */}
          {/* =========================================================== */}
          <View style={styles.updateImageWrapper}>
            <View style={styles.profileImageContainer}>
              {provisoryProfileImage && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{
                    uri: provisoryProfileImage
                  }}
                />
              )}
              {user?.user?.club?.img_perfil && !provisoryProfileImage && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{
                    uri: user?.user?.club?.img_perfil
                  }}
                />
              )}
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
                  source={require('../../../../assets/camera.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: mainColor,
                borderRadius: 50,
                minWidth: 158,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={() => pickImage('profile')}
            >
              <Text style={styles.mediumText}>Subir foto de perfil</Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>Max 1mb, jpeg</Text>
          </View>
          {/* =========================================================== */}
          {/* ======================== COVER PIC ======================== */}
          {/* =========================================================== */}
          <View style={styles.updateImageWrapper}>
            <View style={styles.coverImageContainer}>
              {user?.user?.club?.img_front && !provisoryCoverImage && (
                <Image
                  style={{ width: '100%', height: '100%', borderRadius: 8 }}
                  contentFit="cover"
                  source={{
                    uri: user?.user?.club?.img_front
                  }}
                />
              )}
              {provisoryCoverImage && (
                <Image
                  style={{ width: '100%', height: '100%', borderRadius: 8 }}
                  contentFit="cover"
                  source={{
                    uri: provisoryCoverImage
                  }}
                />
              )}
              <TouchableOpacity
                onPress={() => {
                  setSelectedPicture('cover')
                  setShowCamera(true)
                }}
                style={{
                  right: 0,
                  top: -17,
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
                  source={require('../../../../assets/camera.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: mainColor,
                borderRadius: 50,
                minWidth: 158,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={() => pickImage('cover')}
            >
              <Text style={styles.mediumText}>Subir foto de portada</Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>Max 1mb, jpeg</Text>
          </View>
          {/* =========================================================== */}
          {/* ========================== INPUTS ========================= */}
          {/* =========================================================== */}
          <View style={{ gap: 20 }}>
            {inputs.map((input, index) => (
              <View key={index} style={{ gap: 5 }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
                  {input.title}
                </Text>
                <TextInput
                  multiline={input.textArea && true}
                  numberOfLines={input.textArea && 4}
                  value={input.state}
                  onChangeText={input.setState}
                  placeholder={input.placeHolder}
                  keyboardType={input.type === 'text' ? 'default' : 'numeric'}
                  placeholderTextColor="#999999"
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: '#fff',
                    textAlignVertical: input.textArea && 'top',
                    borderRadius: input.textArea ? 10 : 50,
                    paddingTop: input.textArea && 10,
                    paddingLeft: 15,
                    height: input.textArea ? 190 : 40,
                    fontSize: 15,
                    color: '#fff'
                  }}
                />
              </View>
            ))}
          </View>
          {/* =========================================================== */}
          {/* ========================== INPUTS ========================= */}
          {/* =========================================================== */}
          <TouchableOpacity
            style={{
              height: 40,
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: '#fff',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            disabled={
              !clubName &&
              !city &&
              !country &&
              !capacity &&
              !description &&
              !stadiumName &&
              !profileImage &&
              !coverImage &&
              !foundationDate
            }
            onPress={() => {
              console.log('pickImageLoading', pickImageLoading)
              if (pickImageLoading === false) {
                handleUpdateClubData()
              }
            }}
          >
            <Text style={{ fontSize: 18, color: '#000', fontWeight: 700 }}>
              Aceptar
            </Text>
          </TouchableOpacity>
          {/* =========================================================== */}
          {/* =========================================================== */}
          {/* =========================================================== */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  clubDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#000'
  },
  updateImageWrapper: {
    width: '100%',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8
  },
  orangeButton: {
    backgroundColor: '#E1451E',
    borderRadius: 50,
    minWidth: 158,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapperGap: {
    gap: 10,
    paddingHorizontal: 14
  },
  image: {
    width: 117,
    height: 117,
    borderRadius: 100
  },
  profileImageContainer: {
    width: 117,
    height: 117,
    borderRadius: 100,
    marginBottom: 8,
    backgroundColor: '#fff'
  },
  coverImageContainer: {
    width: '100%',
    height: 138,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  generalWrapper: {
    width: '100%'
  },
  icon: {
    width: 9,
    height: 15,
    marginTop: 2.5
  },
  mediumText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 14,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  smallText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
    fontFamily: FontFamily.t4TEXTMICRO
  }
})

export default ClubDetails
