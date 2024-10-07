import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Dimensions
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontFamily } from '../../../../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../../../../context/Context'
import { updateClubData } from '../../../../redux/actions/club'
import CustomPicker from '../../../../components/CustomPicker/CustomPicker'
import { years } from '../../../../utils/years'
import { cities } from '../../../../utils/cities'
import { updateSportman } from '../../../../redux/actions/sportman'
import { Entypo } from '@expo/vector-icons'
import { Camera, CameraView } from 'expo-camera'
import ScrollableModal from '../../../../components/modals/ScrollableModal'
import AñoNacimientoModal from '../../../../components/modals/AñoNacimientoModal'
import CustomHeaderBack from '../../../../components/CustomHeaderBack'
import { DeviceMotion } from 'expo-sensors'
import { getUserData } from '../../../../redux/actions/users'
import { ImageEditor } from '@tahsinz21366/expo-crop-image'

const PlayerDetails = () => {
  const dispatch = useDispatch()
  const { sportman } = useSelector((state) => state.sportman)
  const [showGenderModal, setShowGenderModal] = useState(false)
  const [showBirthdateModal, setShowBirthdateModal] = useState(false)
  const [showCityModal, setShowCityModal] = useState(false)
  const [gender, setGender] = useState(sportman?.info?.gender || '')
  const [birthdate, setBirthdate] = useState()
  const [height, setHeight] = useState(sportman?.info?.height || '')
  const [city, setCity] = useState(sportman?.info?.city || '')
  const [name, setName] = useState(sportman?.info?.nickname || '')

  const [actualClubName, setActualClubName] = useState(
    sportman?.info?.actualClub || ''
  )
  const [userDescription, setUserDescription] = useState(
    sportman?.info?.description || ''
  )
  const navigation = useNavigation()
  const [editorVisible, setEditorVisible] = useState(false)

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

  const {
    pickImage,
    profileImage,
    coverImage,
    setCoverImage,
    setProfileImage,
    provisoryCoverImage,
    provisoryProfileImage,
    pickImageFromCamera,
    setProvisoryProfileImage,
    setProvisoryCoverImage
  } = useContext(Context)
  const { user } = useSelector((state) => state.users)

  const { club } = useSelector((state) => state.clubs)
  const [facing, setFacing] = useState('back')
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
      title: '¿Cómo te defines como jugador?',
      type: 'text',
      placeHolder:
        'Describe tu juego, tu condicion fisica, tu personalidad en el campo...',
      state: userDescription ? userDescription : sportman.info.description,
      setState: setUserDescription,
      textArea: true,
      zIndex: 6000
    }
  ]

  const handleUpdateUserData = () => {
    if (
      !city &&
      !profileImage &&
      !coverImage &&
      !userDescription &&
      !birthdate &&
      !actualClubName &&
      !gender &&
      !name
    ) {
      return navigation.navigate('EditarPerfil')
    }
    const data = {
      city,
      gender,
      description: userDescription,
      actualClub: actualClubName,
      img_perfil: profileImage,
      img_front: coverImage,
      height: height,
      birthdate,
      nickname: name
    }
    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value
      }
      return acc
    }, {})
    dispatch(updateSportman({ id: sportman.id, newData: filteredData })).then(
      () => dispatch(getUserData(user.user.id))
    )
    setProfileImage()
    setCoverImage()
    navigation.navigate('MiPerfil')
  }

  const [showCamera, setShowCamera] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState()
  const [selectedImage, setSelectedImage] = useState(null)
  const [sportColor, setSportColor] = useState('#E1451E')

  const [hasPermission, setHasPermission] = useState(null)
  const cameraReff = useRef(null)

  useEffect(() => {
    if (sportman?.info?.sport == 'Fútbol Sala') {
      setSportColor('#0062FF')
    }
    if (sportman?.info?.sport == 'Hockey') {
      setSportColor('#E1AA1E')
    }
    if (sportman?.info?.sport == 'Voley') {
      setSportColor('#A8154A')
    }
    if (sportman?.info?.sport == 'Handball') {
      setSportColor('#6A1C4F')
    }
    if (sportman?.info?.sport == 'Fútbol') {
      setSportColor('#1FD430')
    }
    if (sportman?.info?.sport == 'Baloncesto') {
      setSportColor('#E1451E')
    }
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
    return () => {
      setProfileImage('')
      setProvisoryCoverImage('')
    }
  }, [])

  const changePictureMode = async () => {
    setFacing((prev) => (prev == 'back' ? 'front' : 'back'))
  }
  const handleSelectAñoNacimiento = (año) => {
    setBirthdate(año)
  }

  useEffect(() => {}, [selectedImage, selectedPicture])

  const takePicture = async () => {
    if (cameraReff?.current) {
      // Check if cameraRef is not null
      const photo = await cameraReff.current.takePictureAsync({
        orientation: orientation === 'landscape' ? 'landscape' : 'portrait'
      }) // Use cameraRef.current
      console.log(photo, 'photo')
      setSelectedImage(photo)
      // pickImageFromCamera(selectedPicture, photo.uri)
      setEditorVisible(true)
      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }
  if (!showCamera) {
    return (
      <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
        <View style={styles.clubDetailsContainer}>
          <ScrollView
            keyboardShouldPersistTaps={'always'}
            style={{
              width: '100%'
            }}
          >
            <CustomHeaderBack
              header={'Detalles del usuario'}
            ></CustomHeaderBack>
            <View style={{ gap: 10, flex: 1, paddingHorizontal: 10 }}>
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
                  {sportman?.info?.img_perfil || provisoryProfileImage ? (
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 100
                      }}
                      contentFit="cover"
                      source={{
                        uri: provisoryProfileImage || sportman?.info?.img_perfil
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 100,
                        backgroundColor: '#D9D9D9'
                      }}
                    ></View>
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
                  style={[styles.orangeButton, { backgroundColor: sportColor }]}
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
                  {sportman?.info?.img_front || provisoryCoverImage ? (
                    <Image
                      style={{ width: '100%', height: '100%', borderRadius: 8 }}
                      contentFit="cover"
                      source={{
                        uri: provisoryCoverImage || sportman?.info?.img_front
                      }}
                    />
                  ) : (
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 8,
                        backgroundColor: '#D9D9D9'
                      }}
                    ></View>
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
                      source={require('../../../../assets/camera.png')}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[styles.orangeButton, { backgroundColor: sportColor }]}
                  onPress={() => pickImage('cover')}
                >
                  <Text style={styles.mediumText}>Subir foto de portada</Text>
                </TouchableOpacity>
                <Text style={styles.smallText}>Max 1mb, jpeg</Text>
              </View>
              {/* =========================================================== */}
              {/* ========================== INPUTS ========================= */}
              {/* =========================================================== */}
              <View style={{ gap: 30, flex: 1 }}>
                <View style={{ gap: 5 }}>
                  <Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}
                  >
                    {'Nombre'}
                  </Text>

                  <TextInput
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
                    value={name}
                    onChangeText={(e) => setName(e)}
                    placeholderTextColor={'white'}
                    placeholder={'Nombre'}
                  ></TextInput>
                </View>

                <View style={{ gap: 5 }}>
                  <Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}
                  >
                    {'Selecciona tu sexo'}
                  </Text>
                  <CustomPicker
                    zIndex={10000}
                    array={['Male', 'Female']}
                    placeholder={
                      sportman.info.gender
                        ? sportman.info.gender.toString()
                        : 'Selecciona tu sexo'
                    }
                    state={gender}
                    setState={setGender}
                    showModal={showGenderModal}
                    setShowModal={setShowGenderModal}
                  />
                  <ScrollableModal
                    visible={showGenderModal}
                    closeModal={() => setShowGenderModal(false)}
                    onSelectItem={setGender}
                    options={['Hombre', 'Mujer']}
                  />
                </View>

                <View style={{ gap: 5, zIndex: 9000 }}>
                  <Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}
                  >
                    {'Año de nacimiento'}
                  </Text>
                  <CustomPicker
                    zIndex={10000}
                    array={['Male', 'Female']}
                    placeholder={
                      sportman.info.birthdate
                        ? sportman.info.birthdate.toString()
                        : 'Año de nacimiento...'
                    }
                    state={birthdate}
                    setState={setBirthdate}
                    showModal={showBirthdateModal}
                    setShowModal={setShowBirthdateModal}
                  />
                  {/* <TextInput
                  value={birthdate}
                  onChangeText={setBirthdate}
                  placeholder={sportman.info.birthdate && sportman.info.birthdate.toString() || 'Año de nacimiento...'}
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
                /> */}
                  <AñoNacimientoModal
                    visible={showBirthdateModal}
                    closeModal={() => setShowBirthdateModal(false)}
                    onSelectAñoNacimiento={handleSelectAñoNacimiento}
                  />
                </View>

                <View style={{ gap: 5 }}>
                  <Text
                    style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}
                  >
                    {'Lugar de residencia'}
                  </Text>

                  <TextInput
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
                    value={city}
                    onChangeText={(e) => setCity(e)}
                    placeholderTextColor={'white'}
                    placeholder={
                      (sportman.info.city && sportman.info.city.toString()) ||
                      'Lugar de residencia'
                    }
                  ></TextInput>
                </View>

                {inputs.map((input, index) => (
                  <View key={index} style={{ gap: 5, zIndex: input.zIndex }}>
                    <Text
                      style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}
                    >
                      {input.title}
                    </Text>
                    <TextInput
                      multiline={input.textArea && true}
                      numberOfLines={input.textArea && 3}
                      value={input.state}
                      onChangeText={input.setState}
                      placeholder={input.placeHolder}
                      keyboardType={
                        input.type === 'text' ? 'default' : 'numeric'
                      }
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
      </SafeAreaView>
    )
  } else {
    return (
      <Modal
        visible
        style={{ zIndex: 9999, height: Dimensions.get('screen').height }}
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
