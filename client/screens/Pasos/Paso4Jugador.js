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
import DetallesSeleccion from '../../components/DetallesSeleccion'
import { Context } from '../../context/Context'

const Paso4Jugador = ({ sportmanValues, setSportmanValues }) => {
  const { pickImage, provisoryProfileImage, provisoryCoverImage } =
    useContext(Context)

  const handlePickImage = async (type) => {
    await pickImage(type)
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'always'} style={{ height: '70%' }}>
      <View>
        <View style={{ marginBottom: 30 }}>
          <View style={styles.headersubirImagenesPerfil}>
            <Image
              style={styles.circuloIcon}
              contentFit="cover"
              source={
                provisoryProfileImage
                  ? { uri: provisoryProfileImage }
                  : require('../../assets/avatarr.png')
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
            {provisoryCoverImage ? (
              <Image
                style={{
                  width: '100%',
                  height: 170,
                  backgroundColor: 'white',
                  marginTop: 30,
                  borderRadius: 8
                }}
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

        <DetallesSeleccion
          sportmanValues={sportmanValues}
          setSportmanValues={setSportmanValues}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  headersubirImagenesPerfil: {
    alignItems: 'center'
  },
  circuloIcon: {
    width: 117,
    borderRadius: 100,
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
    alignItems: 'center'
  },
  rectangulo: {
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Color.colorGainsboro,
    width: 380,
    height: 120
  }
})

export default Paso4Jugador
