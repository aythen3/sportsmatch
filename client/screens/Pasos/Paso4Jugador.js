import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  Padding
} from '../../GlobalStyles'
import DetallesSeleccion from '../../components/DetallesSeleccion'
import Lines from '../../components/Lines'

const Paso4Jugador = ({ sportmanValues, setSportmanValues }) => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.paso6}>
      <View>
        <View>
          <View style={styles.headersubirImagenesPerfil}>
            <Image
              style={styles.circuloIcon}
              contentFit="cover"
              source={require('../../assets/circulo.png')}
            />
            <View style={styles.botonSubirImagen}>
              <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
                Subir foto de perfil
              </Text>
            </View>

            <Text style={[styles.pesoMaximo, styles.atrsTypo]}>
              Max 1mb, jpeg
            </Text>
          </View>
          <View style={styles.rectangulobotonpesoMaximo}>
            <View style={styles.rectangulo} />
            <View style={styles.botonSubirImagen}>
              <Text style={[styles.subirFotoDe, styles.paso4Typo]}>
                Subir foto de portada
              </Text>
            </View>
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
  paso6: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    paddingHorizontal: 15
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

export default Paso4Jugador
