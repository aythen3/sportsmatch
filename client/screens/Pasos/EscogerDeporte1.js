import React, { useState } from 'react'
import { Image } from 'expo-image'
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FontSize, Color, FontFamily, Border } from '../../GlobalStyles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { updateImgClub } from '../../redux/actions/club'

const EscogerDeporte1 = ({
  coverImage,
  setCoverImage,
  profileImage,
  setProfileImage,
  provisoryProfileImage,
  setProvisoryProfileImage,
  provisoryCoverImage,
  setProvisoryCoverImage
}) => {
  const dispatch = useDispatch()

  const pickImage = async (source) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1
    })

    if (!result.canceled) {
      source === 'profile'
        ? setProvisoryProfileImage(result.assets[0].uri)
        : setProvisoryCoverImage(result.assets[0].uri)
      if (source === 'profile') {
        const profileImageData = {
          uri: result.assets[0].uri,
          type: 'image/jpg',
          name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
        }

        const profileImageForm = new FormData()
        profileImageForm.append('file', profileImageData)
        profileImageForm.append('upload_preset', 'cfbb_profile_pictures')
        profileImageForm.append('cloud_name', 'dnewfuuv0')

        await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
          method: 'post',
          body: profileImageForm
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log('dataUrl from profile:', data.url)
            setProfileImage(data.url)
          })
      } else {
        const coverImageData = {
          uri: result.assets[0].uri,
          type: 'image/jpg',
          name: result.assets[0].uri?.split('/')?.reverse()[0]?.split('.')[0]
        }

        const coverImageForm = new FormData()
        coverImageForm.append('file', coverImageData)
        coverImageForm.append('upload_preset', 'cfbb_profile_pictures')
        coverImageForm.append('cloud_name', 'dnewfuuv0')

        await fetch('https://api.cloudinary.com/v1_1/dnewfuuv0/image/upload', {
          method: 'post',
          body: coverImageForm
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log('dataUrl from cover:', data.url)
            setCoverImage(data.url)
          })
      }
    }
  }

  return (
    <View style={styles.escogerDeporte}>
      <Image
        style={styles.perfilImage}
        contentFit="cover"
        source={{ uri: provisoryProfileImage }}
      />
      <TouchableOpacity
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => pickImage('profile')}
      >
        <Text style={[styles.subirFotoDe, styles.subirTypo]}>
          Subir foto de perfil
        </Text>
      </TouchableOpacity>
      <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>Max 1mb, jpeg</Text>

      <Image
        style={styles.portadaBg}
        contentFit="cover"
        source={{ uri: provisoryCoverImage }}
      />
      <TouchableOpacity
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => pickImage('cover')}
      >
        <Text style={[styles.subirFotoDe, styles.subirTypo]}>
          Subir foto de portada
        </Text>
      </TouchableOpacity>
      <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>Max 1mb, jpeg</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subirTypo: {
    color: Color.bLACK1SPORTSMATCH,
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
    paddingVertical: 10
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
    marginTop: 8
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
    backgroundColor: Color.bLACK1SPORTSMATCH,
    paddingHorizontal: 15,
    alignItems: 'center'
  },
  perfilImage: {
    width: 150,
    height: 120,
    borderRadius: 15
  },
  sendText: {
    width: '100%',
    height: 60,
    backgroundColor: 'green'
  },
  portadaBg: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 8
  }
})

export default EscogerDeporte1
