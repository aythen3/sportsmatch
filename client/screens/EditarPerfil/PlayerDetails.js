import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext, useEffect, useState } from 'react'
import { FontFamily } from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector, useDispatch } from 'react-redux'
import { Context } from '../../context/Context'
import { updateClubData } from '../../redux/actions/club'

const PlayerDetails = () => {
  const dispatch = useDispatch()
  const { sportman } = useSelector((state) => state.sportman)
  const [showGenderModal, setShowGenderModal] = useState(false)
  const [showCityModal, setShowCityModal] = useState(false)
  const [gender, setGender] = useState()
  const [birthdate, setBirthdate] = useState()
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
    provisoryProfileImage
  } = useContext(Context)
  const { user } = useSelector((state) => state.users)

  const { club } = useSelector((state) => state.clubs)

  const inputs = [
    {
      title: 'Sexo',
      type: 'text',
      placeHolder: 'Selecciona tu sexo...',
      state: gender,
      setState: setGender
    },
    {
      title: 'Año de nacimiento',
      type: 'number',
      placeHolder: 'Año de nacimiento...',
      state: birthdate,
      setState: setBirthdate
    },
    {
      title: 'Lugar de residencia',
      type: 'text',
      placeHolder: 'Lugar de residencia...',
      state: city,
      setState: setCity
    },
    {
      title: 'Club actual',
      type: 'text',
      placeHolder: 'Escribe solo si estas en algun club...',
      state: actualClubName,
      setState: setActualClubName
    },
    {
      title: 'Como te defines como jugador',
      type: 'text',
      placeHolder:
        'Describe tu juego, tu condicion fisica, tu personalidad en el campo...',
      state: userDescription,
      setState: setUserDescription,
      textArea: true
    }
  ]

  const handleUpdateUserData = () => {
    const data = {
      city,
      gender,
      description: userDescription,
      club: actualClubName,
      img_perfil: profileImage,
      img_front: coverImage,
      year: birthdate
    }
    const filteredData = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== undefined) {
        acc[key] = value
      }
      return acc
    }, {})
    console.log('filteredData: ', filteredData)
    dispatch(updateUserData({ id: user.id, body: filteredData }))
    setProfileImage()
    setCoverImage()
    navigation.navigate('PerfilDatosPropioClub')
  }

  return (
    <SafeAreaView style={styles.clubDetailsContainer}>
      <ScrollView style={styles.generalWrapper}>
        <View style={styles.wrapperGap}>
          {/* =========================================================== */}
          {/* ====================== TOP CONTAINER ====================== */}
          {/* =========================================================== */}
          <View style={styles.topWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require('../../assets/coolicon3.png')}
              />
            </TouchableOpacity>
            <Text style={styles.clubDetailsTitle}>Detalles del jugador</Text>
          </View>
          {/* =========================================================== */}
          {/* ======================= PROFILE PIC ======================= */}
          {/* =========================================================== */}
          <View style={styles.updateImageWrapper}>
            <View style={styles.profileImageContainer}>
              {sportman?.info?.img_perfil && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{
                    uri: provisoryProfileImage || sportman?.info?.img_perfil
                  }}
                />
              )}
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
          <View style={styles.updateImageWrapper}>
            <View style={styles.coverImageContainer}>
              {sportman?.info?.img_front && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{
                    uri: provisoryCoverImage || sportman?.info?.img_front
                  }}
                />
              )}
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
          <View style={{ gap: 20 }}>
            <View
              style={{ alignItems: 'center', paddingHorizontal: 15, gap: 20 }}
            >
              <TouchableOpacity
                onPress={() => {
                  setShowGenderModal(!showGenderModal)
                }}
                style={{ zIndex: 10000, ...styles.containerBox }}
              >
                <Text style={styles.inputText}>
                  {gender || 'Selecciona una posicion'}
                </Text>
                {showGenderModal && (
                  <View
                    style={{
                      position: 'absolute',
                      top: 40,
                      width: '100%',
                      borderRadius: 15,
                      borderWidth: 1,
                      backgroundColor: Color.bLACK1SPORTSMATCH
                    }}
                  >
                    {['Hombre', 'Mujer'].map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        style={{
                          paddingVertical: 3,
                          width: '100%',
                          alignItems: 'center'
                        }}
                        onPress={() => {
                          setGender(item)
                          setShowGenderModal(false)
                        }}
                      >
                        <Text
                          style={{
                            width: 200,
                            paddingBottom: 5,
                            textAlign: 'center',
                            borderBottomWidth: index !== 2 - 1 ? 1 : 0,
                            borderBottomColor: '#ccc',
                            ...styles.optionText
                          }}
                        >
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </TouchableOpacity>
            </View>
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
              !city &&
              !profileImage &&
              !coverImage &&
              !userDescription &&
              !birthdate &&
              !actualClubName &&
              !gender
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
  updateImageWrapper: {
    width: '100%',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden'
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
    gap: 10
  },
  image: {
    width: '100%',
    height: '100%'
  },
  profileImageContainer: {
    width: 117,
    height: 117,
    borderRadius: 1000,
    marginBottom: 8,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  coverImageContainer: {
    width: '100%',
    height: 138,
    marginBottom: 8,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  generalWrapper: {
    width: '90%'
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
