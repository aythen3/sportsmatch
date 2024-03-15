import React, { useState } from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontSize, Color, FontFamily, Border, Padding } from '../GlobalStyles'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch, useSelector } from 'react-redux'
import { updateImgClub } from '../redux/actions/club'

const EscogerDeporte1 = () => {
  const dispatch = useDispatch()
  const { club } = useSelector((state) => state.clubs)
  const [image1, setImage1] = useState(null)
  const [image2, setImage2] = useState(null)

  const pickImage = async (setImage) => {
    let result = {}
    await ImagePicker.requestMediaLibraryPermissionsAsync()
    result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
      // base64: true
    })
    // const resultImage = result.assets[0].base64
    // if (result?.assets[0].base64.startWith('data:image/jpeg;base64,')) {
    //   setSelectedImage(result?.assets[0].base64)
    // } else {
    // setImage(result?.assets[0])
    // }

    if (!result.canceled && result.assets.length >= 0) {
      const firstImage = result.assets[0]

      const imageObject = {
        fieldname: 'files',
        originalname:
          firstImage.fileName ||
          (result.assets[0].uri.split('/').pop() || '').split('?')[0],
        encoding: '7bit',
        mimetype: 'image/jpeg',
        buffer: null,
        size: firstImage.fileSize
      }

      setImage(imageObject)
    } else {
      console.log('No se seleccionó ninguna imagen.')
    }
  }

  const files = new FormData()
  files.append('files', image1)
  files.append('files', image2)

  const id = club.id

  const submit = () => {
    const body = {
      files,
      id
    }
    dispatch(updateImgClub(body))
  }

  console.log('CLUB', club)

  return (
    <View style={styles.escogerDeporte}>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require('../assets/circulo.png')}
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

      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'white',
          marginTop: 30,
          borderRadius: 8
        }}
      />
      <TouchableOpacity
        style={[styles.rectangleView, styles.rectangleViewLayout]}
        onPress={() => pickImage(setImage2)}
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
      <TouchableOpacity onPress={submit}>
        <Text
          style={{ width: '100%', height: 60, backgroundColor: 'green' }}
          // onPress={uploadImages}
        >
          Enviar Imagen
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  subirLayout: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    position: 'absolute'
  },
  escogerLayout: {
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166,
    borderStyle: 'solid',
    position: 'absolute'
  },
  lineViewLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid',
    top: 166,
    position: 'absolute'
  },
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
    // left: 156,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
    // position: 'absolute'
  },
  groupChildPosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  escogerDeporteChild: {
    width: '100%',
    height: '100%'
    // top: -78,
    // left: -1821,
    // width: 3822,
    // height: 996,
    // opacity: 0.2,
    // position: 'absolute'
  },
  atrs: {
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    left: 14,
    top: 0,
    position: 'absolute'
  },
  coolicon: {
    height: '83.33%',
    width: '16.92%',
    top: '11.11%',
    right: '83.08%',
    bottom: '5.56%',
    left: '0%',
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  atrsParent: {
    top: 77,
    left: 323,
    width: 52,
    height: 18,
    position: 'absolute'
  },
  detallesDelClub: {
    top: 113,
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: '500',
    width: 390,
    color: Color.wHITESPORTSMATCH,
    left: 0,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  paso3: {
    top: 98,
    color: Color.bALONCESTO,
    width: 393,
    left: 0,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  escogerDeporteItem: {
    borderColor: Color.colorDimgray_100,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166,
    left: 14
  },
  escogerDeporteInner: {
    left: 108
  },
  lineView: {
    left: 202
  },
  escogerDeporteChild1: {
    left: 297,
    borderColor: Color.bALONCESTO,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: '700'
  },
  loremIpsum1: {
    width: 360,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    flexDirection: 'row'
  },
  loremIpsum: {
    marginLeft: -180,
    top: 749,
    flexDirection: 'row',
    left: '50%',
    position: 'absolute'
  },
  ellipseIcon: {
    // top: 234,
    // left: 135,

    width: 117,
    height: 117
    // position: 'absolute'
  },
  rectangleView: {
    paddingHorizontal: 5,
    paddingVertical: 10
    // top: 586,
    // left: 113,
    // width: 162
  },
  escogerDeporteChild2: {
    top: 366,
    left: 119,
    width: 150
  },
  subirFotoDe: {
    // top: 591,
    // left: 127,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
    // position: 'absolute'
  },
  subirFotoDe1: {
    // top: 371,
    // left: 136,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
    // position: 'absolute'
  },
  max1mbJpeg: {
    marginTop: 8
    // top: 618
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
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: 'solid',
    top: 0,
    position: 'absolute'
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  battery: {
    width: 25,
    height: 12,
    top: 0,
    right: 0
  },
  wifiIcon: {
    width: 16,
    height: 11
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: 'absolute'
  },
  time: {
    marginTop: -9.55,
    top: '50%',
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.wHITESPORTSMATCH,
    width: 61,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  starus: {
    top: 10,
    left: 15,
    height: 24
  },
  escogerDeporte: {
    // borderRadius: Border.br_21xl,
    // flex: 1,
    // width: '100%',
    // height: 844,
    // overflow: 'hidden',
    backgroundColor: Color.bLACK1SPORTSMATCH,
    paddingHorizontal: 15,
    alignItems: 'center'
  }
})

export default EscogerDeporte1
