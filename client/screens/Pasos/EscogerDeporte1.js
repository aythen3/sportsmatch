import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {
  FontSize,
  Color,
  FontFamily,
  Border,
  Padding
} from '../../GlobalStyles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { updateImgClub } from '../../redux/actions/club'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const EscogerDeporte1 = () => {
  const dispatch = useDispatch()
  const { club } = useSelector((state) => state.clubs)
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage1(result.assets[0])

      const fileName = `${result.assets[0].uri.split('.').pop()}`

      const file = new FormData()

      // Adjuntar la imagen al FormData
      file.append('file', {
        uri: result.assets[0].uri,
        type: result.assets[0].type,
        name: fileName
      })

      // Llama a la acción para subir la imagen al servidor
      dispatch(updateImgClub(file))
    }
  }

  // const files = new FormData()
  // files.append('files', image1)
  // files.append('files', image2)

  // const id = club.id

  // const submit = () => {
  //   const body = {
  //     files,
  //     id
  //   }
  //   dispatch(updateImgClub(body))
  // }

  return (
    <View style={styles.escogerDeporte}>
      <Image
        style={styles.perfilImage}
        contentFit="cover"
        source={{ uri: image1?.uri }}
      />
      <TouchableOpacity
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => pickImage(setImage1)}
      >
        <Text style={[styles.subirFotoDe, styles.subirTypo]}>
          Subir foto de perfil
        </Text>
      </TouchableOpacity>
      <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>Max 1mb, jpeg</Text>

      <View style={styles.portadaBg} />
      <TouchableOpacity
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => pickImage()}
      >
        <Text style={[styles.subirFotoDe, styles.subirTypo]}>
          Subir foto de portada
        </Text>
      </TouchableOpacity>
      <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>Max 1mb, jpeg</Text>

      {/* <View style={[styles.escogerDeporteChild2, styles.rectangleViewLayout]} /> */}
      {/* <Text style={[styles.subirFotoDe1, styles.subirTypo]}>
        Subir foto de perfil
      </Text>
      <Text style={[styles.max1mbJpeg, styles.max1mbTypo]}>Max 1mb, jpeg</Text>
      <Text style={[styles.max1mbJpeg1, styles.max1mbTypo]}>Max 1mb, jpeg</Text>
      <View style={styles.escogerDeporteChild3} />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require('../assets/line-9.png')}
      /> */}
      <TouchableOpacity /* onPress={submit} */>
        <Text
          style={styles.sendText}
          // onPress={uploadImages}
        >
          Enviar Imagen
        </Text>
      </TouchableOpacity>
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
