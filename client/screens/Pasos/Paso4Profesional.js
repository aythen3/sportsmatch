import React, { useContext } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import { Context } from '../../context/Context'

const Paso4Profesional = () => {
  const { pickImage, provisoryProfileImage, provisoryCoverImage } =
    useContext(Context)

  const handlePickImage = async (type) => {
    await pickImage(type)
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps={'always'}
      style={styles.paso6}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <View style={styles.headersubirImagenesPerfil}>
          <Image
            style={styles.circuloIcon}
            contentFit="cover"
            source={
              provisoryProfileImage
                ? { uri: provisoryProfileImage }
                : require('../../assets/circulo.png')
            }
          />
          <TouchableOpacity
            style={styles.botonSubirImagen}
            onPress={() => handlePickImage('profile')}
          >
            <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
              Subir foto de perfil
            </Text>
          </TouchableOpacity>

          <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
            Max 1mb, jpeg
          </Text>
        </View>
        <View style={styles.rectangulobotonpesoMaximo}>
          <Image
            style={styles.rectangulo}
            contentFit="cover"
            source={
              provisoryProfileImage
                ? { uri: provisoryCoverImage }
                : require('../../assets/circulo.png')
            }
          />
          <TouchableOpacity
            style={styles.botonSubirImagen}
            onPress={() => handlePickImage('cover')}
          >
            <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
              Subir foto de portada
            </Text>
          </TouchableOpacity>
          <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
            Max 1mb, jpeg
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  paso6: {
    flex: 1,
    overflow: 'hidden',
    width: '100%'
  },
  headersubirImagenesPerfil: {
    alignItems: 'center',
    marginTop: '10%'
  },
  circuloIcon: {
    width: 117,
    height: 117
  },
  botonSubirImagen: {
    paddingHorizontal: Padding.p_mid,
    paddingVertical: Padding.p_9xs,
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_81xl,
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: 15,
    alignItems: 'center'
  },
  subirFotoDe: {
    color: Color.wHITESPORTSMATCH
  },
  paso4Typo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pesoMaximo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    lineHeight: 14,
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  rectangulobotonpesoMaximo: {
    height: 199,
    marginTop: 21,
    alignItems: 'center'
  },
  rectangulo: {
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorGainsboro,
    width: '200%',
    flex: 1
  }
})

export default Paso4Profesional
