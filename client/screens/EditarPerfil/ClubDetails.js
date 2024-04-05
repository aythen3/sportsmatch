import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useContext } from 'react'
import { FontFamily } from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux'
import { Context } from '../../context/Context'

const ClubDetails = () => {
  const navigation = useNavigation()

  const { pickImage, provisoryCoverImage, provisoryProfileImage } =
    useContext(Context)

  const { club } = useSelector((state) => state.clubs)

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
            <Text style={styles.clubDetailsTitle}>Detalles del club</Text>
          </View>
          {/* =========================================================== */}
          {/* ======================= PROFILE PIC ======================= */}
          {/* =========================================================== */}
          <View style={styles.updateImageWrapper}>
            <View style={styles.profileImageContainer}>
              {club?.img_perfil && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{ uri: provisoryProfileImage || club?.img_perfil }}
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
              {club?.img_front && (
                <Image
                  style={styles.image}
                  contentFit="cover"
                  source={{ uri: provisoryCoverImage || club?.img_front }}
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
    justifyContent: 'flex-start'
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
    borderRadius: 50,
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
    height: 15
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

export default ClubDetails
