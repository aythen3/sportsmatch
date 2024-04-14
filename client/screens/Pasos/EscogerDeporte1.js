import React, { useContext, useState } from 'react'
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
import { Context } from '../../context/Context'

const EscogerDeporte1 = () => {
  const {
    pickImage,
    coverImage,
    setCoverImage,
    profileImage,
    setProfileImage,
    provisoryProfileImage,
    setProvisoryProfileImage,
    provisoryCoverImage,
    setProvisoryCoverImage
  } = useContext(Context)
  const dispatch = useDispatch()

  return (
    <View style={styles.escogerDeporte}>
      {provisoryProfileImage ? (
        <Image
          style={styles.perfilImage}
          contentFit="cover"
          source={{ uri: provisoryProfileImage }}
        />
      ) : (
        <Image
          style={styles.perfilImage}
          contentFit="cover"
          source={require('../../assets/avatarr.png')}
        />
      )}
      <TouchableOpacity
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => pickImage('profile')}
      >
        <Text style={[styles.subirFotoDe, styles.subirTypo]}>
          Subir foto de perfil
        </Text>
      </TouchableOpacity>
      <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>Max 1mb, jpeg</Text>

      {provisoryCoverImage ? (
        <Image
          style={styles.portadaBg}
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
          <Image
            style={{ width: 130, height: 130 }}
            contentFit="cover"
            source={require('../../assets/imagePlaceholder.png')}
          />
        </View>
      )}
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
