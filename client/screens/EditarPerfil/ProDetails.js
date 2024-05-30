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
import React, { useContext, useEffect, useState } from 'react'
import { FontFamily } from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../../context/Context'
import { updateClubData } from '../../redux/actions/club'
import CustomPicker from '../../components/CustomPicker/CustomPicker'
import { years } from '../../utils/years'
import { cities } from '../../utils/cities'
import { updateSportman } from '../../redux/actions/sportman'
import { Entypo } from '@expo/vector-icons'
import { Camera } from 'expo-camera'

const PlayerDetails = () => {
  const dispatch = useDispatch()
  const { sportman } = useSelector((state) => state.sportman)
  const [profesionalType, setProfesionalTpye] = useState()
  const [showCityModal, setShowCityModal] = useState(false)
  const [yearsOfExperience, setYearsOfExperience] = useState()
  const [city, setCity] = useState()
  const [actualClubName, setActualClubName] = useState()
  const [userDescription, setUserDescription] = useState()
  const navigation = useNavigation()

  const {
    pickImage,
    profileImage,
    coverImage,
    setCoverImage,
    setProfileImage,
    provisoryCoverImage,
    provisoryProfileImage,
    pickImageFromCamera
  } = useContext(Context)
  const { user } = useSelector((state) => state.users)

  const { club } = useSelector((state) => state.clubs)

  const inputs = [
    {
      title: 'Club actual',
      type: 'text',
      placeHolder: 'Escribe solo si estas en algun club...',
      state: actualClubName,
      setState: setActualClubName,
      zIndex: 7000
    },
    {
      title: '¿Cómo te defines como profesional?',
      type: 'text',
      placeHolder:
        'Describe tu juego, tu condicion fisica, tu personalidad en el campo...',
      state: userDescription,
      setState: setUserDescription,
      textArea: true,
      zIndex: 6000
    }
  ]

  const handleUpdateUserData = () => {
    console.log('on handleUpdateUserData')
    const data = {
      city,
      description: userDescription,
      actualClub: actualClubName,
      img_perfil: profileImage,
      img_front: coverImage,
      rol: profesionalType,
      yearsOfExperience: yearsOfExperience
    }
    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value
      }
      return acc
    }, {})
    dispatch(updateSportman({ id: sportman.id, newData: filteredData }))
    setProfileImage()
    setCoverImage()
    navigation.navigate('MiPerfil')
  }

  const [showCamera, setShowCamera] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState()
  const [showTypeModal, setShowTypeModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)

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

  return (
    <SafeAreaView style={styles.clubDetailsContainer}>
      {showCamera && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCamera}
          onRequestClose={() => setShowCamera(false)}
        >
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
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={{
          width: '90%'
        }}
      >
        <View style={{ gap: 10, flex: 1 }}>
          {/* =========================================================== */}
          {/* ====================== TOP CONTAINER ====================== */}
          {/* =========================================================== */}
          <View style={styles.topWrapper}>
            <TouchableOpacity
              onPress={() => {
                console.log('PROD')
                navigation.goBack()
              }}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../../assets/coolicon3.png')}
              />
            </TouchableOpacity>
            <Text style={styles.clubDetailsTitle}>
              Detalles del profesional
            </Text>
          </View>
          {/* =========================================================== */}
          {/* ======================= PROFILE PIC ======================= */}
          {/* =========================================================== */}
          <View
            style={{
              width: '100%',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderRadius: 5
            }}
          >
            <View style={styles.profileImageContainer}>
              {sportman?.info?.img_perfil && (
                <Image
                  style={{ width: '100%', height: '100%', borderRadius: 100 }}
                  contentFit="cover"
                  source={{
                    uri: provisoryProfileImage || sportman?.info?.img_perfil
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
                  source={require('../../assets/camera.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.orangeButton}
              onPress={() => pickImage('profile')}
            >
              <Text style={styles.mediumText}>Subir foto de perfil</Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>Max 1mb, jpeg</Text>
          </View>
          {/* =========================================================== */}
          {/* ======================== COVER PIC ======================== */}
          {/* =========================================================== */}
          <View
            style={{
              width: '100%',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'flex-start',
              borderRadius: 5
            }}
          >
            <View style={styles.coverImageContainer}>
              {sportman?.info?.img_front && (
                <Image
                  style={{ width: '100%', height: '100%', borderRadius: 8 }}
                  contentFit="cover"
                  source={{
                    uri: provisoryCoverImage || sportman?.info?.img_front
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
                  position: 'absolute',
                  top: -17,
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
              style={styles.orangeButton}
              onPress={() => pickImage('cover')}
            >
              <Text style={styles.mediumText}>Subir foto de portada</Text>
            </TouchableOpacity>
            <Text style={styles.smallText}>Max 1mb, jpeg</Text>
          </View>
          {/* =========================================================== */}
          {/* ========================== INPUTS ========================= */}
          {/* =========================================================== */}
          <View style={{ gap: 20, flex: 1 }}>
            <View style={{ gap: 5 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
                {'Selecciona tu posición'}
              </Text>
              <CustomPicker
                zIndex={10000}
                array={[
                  'Jugador',
                  'Entrenador',
                  'Masajista',
                  'Ayudante de campo'
                ]}
                placeholder={'Selecciona tu posición'}
                state={profesionalType}
                setState={setProfesionalTpye}
                showModal={showTypeModal}
                setShowModal={setShowTypeModal}
              />
            </View>

            <View style={{ gap: 5, zIndex: 9000 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
                {'Años en activo'}
              </Text>
              <TextInput
                value={yearsOfExperience}
                onChangeText={setYearsOfExperience}
                placeholder={'Años en activo...'}
                keyboardType={'numeric'}
                placeholderTextColor="#999999"
                style={{
                  flex: 1,
                  borderWidth: 0.5,
                  borderColor: '#fff',
                  borderRadius: 50,
                  paddingLeft: 15,
                  height: 40,
                  fontSize: 15,
                  color: '#fff'
                }}
              />
            </View>

            <View style={{ gap: 5 }}>
              <Text style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
                {'Lugar de residencia'}
              </Text>
              <CustomPicker
                zIndex={8000}
                cities={true}
                array={cities.map((city) => city.city).sort()}
                placeholder={'Lugar de residencia'}
                state={city}
                setState={setCity}
                showModal={showCityModal}
                setShowModal={setShowCityModal}
              />
            </View>

            {inputs.map((input, index) => (
              <View key={index} style={{ gap: 5, zIndex: input.zIndex }}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
                  {input.title}
                </Text>
                <TextInput
                  multiline={input.textArea && true}
                  numberOfLines={input.textArea && 3}
                  value={input.state}
                  onChangeText={input.setState}
                  placeholder={input.placeHolder}
                  keyboardType={input.type === 'text' ? 'default' : 'numeric'}
                  placeholderTextColor="#999999"
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    borderColor: '#fff',
                    textAlignVertical: input.textArea && 'top',
                    borderRadius: input.textArea ? 10 : 50,
                    paddingTop: input.textArea && 10,
                    paddingLeft: 15,
                    height: input.textArea ? 170 : 40,
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
              zIndex: 5000,
              marginBottom: 10,
              backgroundColor: '#fff',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            disabled={
              !city &&
              !profileImage &&
              !coverImage &&
              !userDescription &&
              !profesionalType &&
              !actualClubName &&
              !yearsOfExperience
            }
            onPress={handleUpdateUserData}
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
    padding: '15px',
    flex: 1,
    backgroundColor: '#000'
  },
  orangeButton: {
    backgroundColor: '#E1451E',
    borderRadius: 50,
    minWidth: 158,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImageContainer: {
    width: 117,
    height: 117,
    borderRadius: 100,
    marginBottom: 8
  },
  coverImageContainer: {
    width: '100%',
    height: 138,
    marginBottom: 8,
    borderRadius: 8
  },
  topWrapper: {
    marginBottom: 42,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'flex-start'
  },
  icon: {
    width: 9,
    height: 15,
    marginTop: 2.5
  },
  clubDetailsTitle: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 22,
    fontFamily: FontFamily.t4TEXTMICRO
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

export default PlayerDetails
