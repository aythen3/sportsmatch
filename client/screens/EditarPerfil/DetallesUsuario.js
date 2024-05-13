import React, { useState } from 'react'
import { StyleSheet, ScrollView, View, Pressable, Text } from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border
} from '../../GlobalStyles'
import DetallesSeleccion from '../../components/DetallesSeleccion'
import { useSelector } from 'react-redux'

const EditarSkills = () => {
  const navigation = useNavigation()
  const [editable, setEditable] = useState(true)

  return (
    <ScrollView keyboardShouldPersistTaps={'always'} style={styles.paso6}>
      <View style={styles.cooliconParent}>
        <Pressable
          style={styles.coolicon}
          onPress={() => {
            console.log('DU')
            navigation.goBack()
          }}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../../assets/coolicon3.png')}
          />
        </Pressable>
        <Pressable
          style={styles.editarPerfil1}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.editarPerfil2}>{}</Text>
        </Pressable>
      </View>

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

        <DetallesSeleccion editable={editable} setEditable={setEditable} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  cooliconParent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    left: 15
  },
  coolicon: {
    width: 9,
    height: 15
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  editarPerfil1: {
    marginLeft: 9
  },
  editarPerfil2: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
  },
  paso6: {
    width: '100%',
    backgroundColor: Color.bLACK3SPORTSMATCH
  },
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
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

export default EditarSkills
