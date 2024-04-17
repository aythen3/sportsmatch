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
    provisoryProfileImage
  } = useContext(Context)
  const { user } = useSelector((state) => state.users)

  const { club } = useSelector((state) => state.clubs)

  const inputs = [
    {
      title: 'Nombre del club',
      type: 'text',
      placeHolder: 'Nombre del club...',
      state: clubName,
      setState: setClubName
    },
    {
      title: 'Población',
      type: 'text',
      placeHolder: 'Población...',
      state: city,
      setState: setCity
    },
    {
      title: 'País',
      type: 'text',
      placeHolder: 'País...',
      state: country,
      setState: setCountry
    },
    {
      title: 'Nombre del estadio, campo o pavellón',
      type: 'text',
      placeHolder: 'Nombre del estadio...',
      state: stadiumName,
      setState: setStadiumName
    },
    {
      title: 'Año de fundación',
      type: 'number',
      placeHolder: 'Año de fundación...',
      state: foundationDate,
      setState: setFoundationDate
    },
    {
      title: 'Aforo',
      type: 'number',
      placeHolder: 'Aforo...',
      state: capacity,
      setState: setCapacity
    },
    {
      title: 'Describe tu club',
      type: 'text',
      placeHolder:
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
    console.log('filteredData: ', filteredData)
    dispatch(updateClubData({ id: club.id, body: filteredData }))
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
          <View
            style={{
              marginBottom: 42,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
              justifyContent: 'flex-start'
            }}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={{ width: 9, height: 15, marginTop: 2.5 }}
                contentFit="cover"
                source={require('../../assets/coolicon3.png')}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: '#fff',
                fontWeight: '500',
                fontSize: 22,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              Detalles del club
            </Text>
          </View>
          {/* =========================================================== */}
          {/* ======================= PROFILE PIC ======================= */}
          {/* =========================================================== */}
          <View style={styles.updateImageWrapper}>
            <View style={styles.profileImageContainer}>
              {user?.user?.club?.img_perfil && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{
                    uri: provisoryProfileImage || user?.user?.club?.img_front
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
              {user?.user?.club?.img_front && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{
                    uri: provisoryCoverImage || user?.user?.club?.img_front
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
            onPress={handleUpdateClubData}
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
    width: 117,
    height: 117,
    borderRadius: 100
  },
  profileImageContainer: {
    width: 117,
    height: 117,
    borderRadius: 100,
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
