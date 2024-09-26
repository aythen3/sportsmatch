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
import CustomPicker from '../../../../components/CustomPicker/CustomPicker'
import { cities } from '../../../../utils/cities'
import { updateSportman } from '../../../../redux/actions/sportman'
import { Entypo } from '@expo/vector-icons'
import { Camera, CameraView } from 'expo-camera'
import CustomHeaderBack from '../../../../components/CustomHeaderBack'
import ScrollableModal from '../../../../components/modals/ScrollableModal'
import { DeviceMotion } from 'expo-sensors'
import { getUserData } from '../../../../redux/actions/users'
import { ImageEditor } from '@tahsinz21366/expo-crop-image'

const PlayerDetails = () => {
  const dispatch = useDispatch()
  const { sportman } = useSelector((state) => state.sportman)
  const [profesionalType, setProfesionalTpye] = useState()
  const [showCityModal, setShowCityModal] = useState(false)
  const [yearsOfExperience, setYearsOfExperience] = useState(
    sportman?.info?.yearsOfExperience
  )
  const [city, setCity] = useState()
  const [actualClubName, setActualClubName] = useState()
  const [userDescription, setUserDescription] = useState()
  const navigation = useNavigation()
  const [name, setName] = useState(sportman?.info?.nickname || '')
  const [editorVisible, setEditorVisible] = useState(false)

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
  const { user, mainColor } = useSelector((state) => state.users)

  console.log(sportman, 'userrrrr')

  const [showCamera, setShowCamera] = useState(false)
  const [selectedPicture, setSelectedPicture] = useState()
  const [showTypeModal, setShowTypeModal] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [cameraType, setCameraType] = useState(Camera?.Constants?.Type?.back)
  const [hasPermission, setHasPermission] = useState(null)
  const [cameraRef, setCameraRef] = useState(null)
  const [residencia, setResidencia] = useState('')
  const [facing, setFacing] = useState('back')
  const cameraReff = useRef(null)

  const inputs = [
    {
      title: 'Lugar de residencia',
      type: 'text',
      placeHolder:
        sportman?.info?.city && sportman?.info?.city !== ''
          ? sportman?.info?.city
          : 'Lugar de residencia',
      state: residencia,
      setState: setResidencia,
      zIndex: 6000,
      maxLength: 40
    },
    {
      title: 'Club actual',
      type: 'text',
      placeHolder:
        sportman?.info?.actualClub && sportman?.info?.actualClub !== ''
          ? sportman?.info?.actualClub
          : 'Escribe solo si estas en algun club...',
      state: actualClubName,
      setState: setActualClubName,
      zIndex: 7000,
      maxLength: 40
    },
    {
      title: '¿Cómo te defines como profesional?',
      type: 'text',
      placeHolder:
        sportman?.info?.description && sportman?.info?.description !== ''
          ? sportman?.info?.description
          : 'Describe tu juego, tu condicion fisica, tu personalidad en el campo...',
      state: userDescription,
      setState: setUserDescription,
      textArea: true,
      zIndex: 6000,
      maxLength: 200
    }
  ]

  const handleUpdateUserData = () => {
    const data = {
      city: residencia,
      description: userDescription,
      actualClub: actualClubName,
      img_perfil: profileImage,
      img_front: coverImage,
      rol: profesionalType,
      nickname: name,
      yearsOfExperience: yearsOfExperience
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

  useEffect(() => {
    ;(async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
    return () => {
      setProvisoryProfileImage('')
      setProvisoryCoverImage('')
    }
  }, [])

  const changePictureMode = async () => {
    setFacing((prev) => (prev == 'back' ? 'front' : 'back'))
  }

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
    if (cameraReff?.current) {
      // Check if cameraRef is not null
      const photo = await cameraReff.current.takePictureAsync({
        orientation: orientation === 'landscape' ? 'landscape' : 'portrait'
      }) // Use cameraRef.current
      setSelectedImage(photo)
      // pickImageFromCamera(selectedPicture, photo.uri)
      setEditorVisible(true)
      setShowCamera(false)
      // You can handle the taken photo here, such as displaying it or saving it.
    }
  }

  if (!showCamera) {
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
            </Camera>
          </Modal>
        )}
        <ScrollView
          keyboardShouldPersistTaps={'always'}
          style={{
            width: '100%'
          }}
        >
          <CustomHeaderBack
            header={'Detalles del profesional'}
          ></CustomHeaderBack>
          <View style={{ gap: 10, flex: 1, paddingHorizontal: 12 }}>
            {/* =========================================================== */}
            {/* ====================== TOP CONTAINER ====================== */}
            {/* =========================================================== */}
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
              <View style={{ ...styles.profileImageContainer }}>
                {/* {provisoryProfileImage && (
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 100 }}
                    contentFit="cover"
                    source={{
                      uri: provisoryProfileImage
                    }}
                  />
                )} */}
                {provisoryProfileImage || sportman?.info?.img_perfil ? (
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
                  ''
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
                style={{ ...styles.orangeButton, backgroundColor: mainColor }}
                // onPress={() => pickImage('profile')}
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
              <View style={{ ...styles.coverImageContainer }}>
                {sportman?.info?.img_front && !provisoryCoverImage && (
                  <Image
                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                    contentFit="cover"
                    source={{
                      uri: sportman?.info?.img_front
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
                style={{ ...styles.orangeButton, backgroundColor: mainColor }}
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
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
                  {'Tipo de profesional'}
                </Text>
                <CustomPicker
                  zIndex={10000}
                  array={[
                    'Entrenador/a',
                    'Preparador/a físico/a',
                    'Analista técnico/a',
                    'Psicólogo/a',
                    'Fisioterapeuta',
                    'Nutricionista'
                  ]}
                  placeholder={sportman?.info?.rol ?? 'Tipo de profesional'}
                  state={profesionalType}
                  setState={setProfesionalTpye}
                  showModal={showTypeModal}
                  setShowModal={setShowTypeModal}
                />
              </View>
              <ScrollableModal
                visible={showTypeModal}
                closeModal={() => setShowTypeModal(false)}
                onSelectItem={setProfesionalTpye}
                options={[
                  'Entrenador/a',
                  'Preparador/a físico/a',
                  'Analista técnico/a',
                  'Psicólogo/a',
                  'Fisioterapeuta',
                  'Nutricionista'
                ]}
              />

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
                  maxLength={2}
                  style={{
                    flex: 1,
                    borderWidth: 0.5,
                    borderColor: '#fff',
                    borderRadius: 50,
                    paddingLeft: 15,
                    height: 40,
                    fontSize: 15,
                    color: 'white'
                  }}
                />
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
                    keyboardType={input.type === 'text' ? 'default' : 'numeric'}
                    placeholderTextColor="#999999"
                    maxLength={input.maxLength}
                    style={{
                      flex: 1,
                      borderWidth: 0.5,
                      borderColor: '#fff',
                      textAlignVertical: input.textArea && 'top',
                      borderRadius: input.textArea ? 10 : 50,
                      paddingTop: input.textArea && 10,
                      paddingHorizontal: 15,
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
                !residencia &&
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
        style={{
          zIndex: 9999,
          height: Dimensions.get('screen').height,
          position: 'absolute'
        }}
      >
        <CameraView
          ref={cameraReff}
          facing={facing}
          style={{ height: '100%' }}
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
              style={{ position: 'absolute', top: 50, left: 18 }}
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
    marginBottom: 8,
    backgroundColor: '#D9D9D9',
    borderRadius: 100
  },
  coverImageContainer: {
    width: '100%',
    height: 138,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: '#D9D9D9'
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
