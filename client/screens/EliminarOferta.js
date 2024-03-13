import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable, TextInput } from 'react-native'
import { Color, FontSize, FontFamily, Border, Padding } from '../GlobalStyles'
import Input from '../components/Input'
import { Image } from 'expo-image'
import CheckBox from 'react-native-check-box'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'

const EliminarOferta = () => {
  const navigation = useNavigation()
  const [color, setColor] = useState(false)
  const [color2, setColor2] = useState(false)
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  return (
    <View style={styles.eliminarOferta3}>
      <View
        style={{
          width: '100%'
        }}
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text style={styles.estsSeguroDe}>{`¿Estás seguro de que quieres 
eliminar esta oferta?`}</Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30
            }}
          >
            <Text
              onPress={() => setColor(!color)}
              style={{
                height: 45,
                lineHeight: 40, // Igual al height
                // alignItems: 'center',
                // justifyContent: 'center',
                color: Color.gREY2SPORTSMATCH,
                paddingHorizontal: 15,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontSize: FontSize.t2TextSTANDARD_size,
                borderWidth: 1,
                borderColor: Color.gREY2SPORTSMATCH,
                borderStyle: 'solid',
                borderRadius: Border.br_81xl,
                textAlign: 'center',
                backgroundColor: color ? Color.colorGainsboro : 'transparent'
              }}
            >
              "Sí, he encontrado a mi jugador/a o profesional."
            </Text>
          </View>

          {color && (
            <View style={styles.opcionesPerfilesFrame}>
              <View style={styles.textoperfiles}>
                <Text style={[styles.indcanosConQuin, styles.carlesMirTypo]}>
                  Indícanos con quién has llegado a un acuerdo.
                </Text>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 15
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/mask-group13.png')}
                      />
                      <Text style={[styles.carlesMir, styles.carlesMirTypo]}>
                        Jordi Espelt
                      </Text>
                    </View>
                    <Pressable
                      style={[styles.circle, check1 && styles.checkedCircle]}
                      onPress={() => setCheck1(!check1)}
                    >
                      {check1 && (
                        <Ionicons name="checkmark" size={10} color="white" />
                      )}
                    </Pressable>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 15
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/mask-group12.png')}
                      />
                      <Text style={[styles.carlesMir, styles.carlesMirTypo]}>
                        Carles Mir
                      </Text>
                    </View>
                    <Pressable
                      style={[styles.circle, check2 && styles.checkedCircle]}
                      onPress={() => setCheck2(!check2)}
                    >
                      {check2 && (
                        <Ionicons name="checkmark" size={10} color="white" />
                      )}
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          )}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30
            }}
          >
            <Text
              onPress={() => setColor2(!color2)}
              style={{
                height: 45,
                lineHeight: 40, // Igual al height
                // alignItems: 'center',
                // justifyContent: 'center',
                color: Color.gREY2SPORTSMATCH,
                paddingHorizontal: 15,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontSize: FontSize.t2TextSTANDARD_size,
                borderWidth: 1,
                borderColor: Color.gREY2SPORTSMATCH,
                borderStyle: 'solid',
                borderRadius: Border.br_81xl,
                textAlign: 'center',
                backgroundColor: color2 ? Color.colorGainsboro : 'transparent'
              }}
            >
              "Sí, he encontrado a mi jugador/a o profesional."
            </Text>
          </View>

          <View style={styles.botonEliminarOferta}>
            <View style={[styles.botonGrupo]}>
              <View style={[styles.botonEliminarOferta1]}>
                <View
                  style={[styles.botonEliminarOferta2, styles.rectanguloLayout]}
                >
                  <Text style={[styles.textoBoton, styles.cerrarTypo]}>
                    Eliminar la oferta
                  </Text>
                </View>
              </View>
              <Text
                style={[styles.cerrar, styles.cerrarTypo]}
                onPress={() => navigation.goBack()}
              >
                Cerrar
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenidoPosition: {
    left: 0,
    position: 'absolute'
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkedCircle: {
    backgroundColor: 'green'
  },
  carlesMir: {
    // width: 79,
    marginLeft: 15,
    color: Color.wHITESPORTSMATCH,
    fontWeight: '700'
  },

  imagenIconLayout: {
    maxWidth: '100%',
    overflow: 'hidden'
  },
  imagenIcon: {
    height: '160%',
    width: '34.68%',
    top: '-0.67%',
    right: '65.54%',
    bottom: '-59.33%',
    left: '-0.22%',
    maxHeight: '100%',
    position: 'absolute'
  },
  indcanosConQuin: {
    color: Color.gREY2SPORTSMATCH,
    alignSelf: 'stretch'
  },
  carlesMirTypo: {
    textAlign: 'left',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  opcionesPerfilesFrame: {
    marginTop: 22
  },
  botonLayout: {
    width: 360,
    height: 40
  },
  sYaHeTypo: {
    color: Color.gREY2SPORTSMATCH,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    left: 3,
    top: 11,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    position: 'absolute'
  },
  rectanguloLayout: {
    borderRadius: Border.br_81xl,
    width: 360
  },

  cerrarTypo: {
    fontWeight: '700',
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  fondoPopup: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    height: 843,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  estsSeguroDe: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 26,
    fontWeight: '500',
    // height: 22,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH
    // width: 390
  },
  sYaHe: {
    width: 354
  },
  rectangulo: {
    borderStyle: 'solid',
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    height: 40,
    left: 0,
    position: 'absolute',
    top: 0,
    borderRadius: Border.br_81xl
  },
  boton1: {
    height: 40
  },
  sHeCubierto: {
    width: 355
  },
  boton2: {
    marginTop: 20,
    height: 40
  },
  botones: {
    marginTop: 94
  },
  contenidoFrame: {
    alignItems: 'center'
  },
  textoBoton: {
    color: Color.bLACK1SPORTSMATCH,
    flex: 1
  },
  botonEliminarOferta2: {
    backgroundColor: Color.wHITESPORTSMATCH,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    flexDirection: 'row',
    alignItems: 'center'
  },
  botonEliminarOferta1: {
    right: '0%',
    left: '0%',
    flexDirection: 'row',
    width: '100%'
  },
  botonGrupo: {
    // width: '654.55%',
    // right: '-277.27%',
    // left: '-277.27%'
  },
  botonEliminarOferta: {
    marginTop: 30
    // flex: 1
  },
  cerrar: {
    marginTop: 12,
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.button_size
  },
  botonesInferiores: {
    height: 72,
    marginTop: 250,
    alignItems: 'center'
  },
  contenido: {
    top: 239,
    alignItems: 'center',
    left: 0,
    position: 'absolute'
  },
  eliminarOferta3: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 1
  }
})

export default EliminarOferta
