import React, { useState } from 'react'
import { Image } from 'expo-image'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { FontFamily, Color, FontSize, Padding, Border } from '../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import Lines from '../components/Lines'
import Paso3Profesional from './Paso3Profesional'
import Paso3Jugador from './Paso3Jugador'
import Paso4Jugador from './Paso4Jugador'
import Paso4Profesional from './Paso4Profesional'

const Paso1 = () => {
  const navigation = useNavigation()

  const [selectedRole, setSelectedRole] = useState(null)
  const [sportman, setSportman] = useState(false)
  const [stepsSportman, setStepsSportman] = useState(0)
  const [profesional, setProfesional] = useState(false)
  const [stepsProfesional, setStepsProfesional] = useState(0)

  const handleRoleSelection = (role) => {
    setSelectedRole(role)
  }

  const handleNext = () => {
    if (selectedRole === 'Profesional del deporte') {
      // navigation.navigate('Paso3Profesional')
      setProfesional(true)
      setSportman(false)
    } else {
      // navigation.navigate('Paso3Jugador', { role: selectedRole })
      setProfesional(false)
      setSportman(true)
    }
  }

  const handleNavigation = () => {
    if (sportman) {
      setStepsSportman((prev) => prev + 1)

      if (stepsSportman === 1) {
        setStepsSportman(0)
        navigation.navigate('SiguiendoJugadores')
      }
    } else {
      setStepsProfesional((prev) => prev + 1)

      if (stepsProfesional === 1) {
        setStepsProfesional(0)
        navigation.navigate('SiguiendoJugadores')
      }
    }
  }

  return (
    <View style={styles.paso6}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require('../assets/imagen-de-fondo3.png')}
      />
      <View style={styles.contenido}>
        <View>
          <Pressable
            style={styles.botonAtras}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.coolicon}
              contentFit="cover"
              source={require('../assets/coolicon1.png')}
            />
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </Pressable>
          <View style={styles.stepseccion}>
            <View>
              <Text style={[styles.paso1, styles.atrsTypo]}>Paso 2</Text>
              <Text style={[styles.escogeTuRol, styles.jugadorTypo1]}>
                Escoge tu rol
              </Text>
            </View>
            <Lines
              index={
                !sportman && !profesional
                  ? 2
                  : (sportman && stepsSportman === 0) ||
                      (profesional && stepsProfesional === 0)
                    ? 3
                    : stepsProfesional === 1 || stepsSportman
                      ? 4
                      : ''
              }
            />
          </View>
        </View>
      </View>

      <View
        style={{
          height: '73%'
        }}
      >
        <ScrollView>
          {!sportman && !profesional && (
            <View
              style={{
                gap: 20,
                alignSelf: 'center',
                justifyContent: 'center',
                marginTop: 80
              }}
            >
              <View style={styles.botonLayout1}>
                <TouchableOpacity
                  style={[
                    styles.rectangulo,
                    selectedRole === 'Jugador' && styles.selectedBackground
                  ]}
                  onPress={() => handleRoleSelection('Jugador')}
                >
                  <Image
                    style={styles.simboloIconLayout}
                    contentFit="cover"
                    source={require('../assets/simbolo6.png')}
                  />
                  <Text
                    style={[
                      styles.jugador,
                      styles.jugadorTypo,
                      selectedRole === 'Jugador' && styles.selectedText
                    ]}
                  >
                    Jugador
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.botonLayout1}>
                <TouchableOpacity
                  style={[
                    styles.rectangulo,
                    selectedRole === 'Profesional del deporte' &&
                      styles.selectedBackground
                  ]}
                  onPress={() => handleRoleSelection('Profesional del deporte')}
                >
                  <Text
                    style={[
                      styles.jugador,
                      styles.jugadorTypo,
                      selectedRole === 'Profesional del deporte' &&
                        styles.selectedText
                    ]}
                  >
                    Profesional del deporte
                  </Text>
                  <Image
                    style={styles.simboloIconLayout}
                    contentFit="cover"
                    source={require('../assets/simbolo7.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {sportman && stepsSportman === 0 && <Paso3Jugador />}
          {profesional && stepsProfesional === 0 && <Paso3Profesional />}
          {stepsSportman === 1 && <Paso4Jugador />}
          {stepsProfesional === 1 && <Paso4Profesional />}
          <View style={styles.botonesRoles}>
            <Pressable
              style={styles.siguiente}
              onPress={() =>
                !sportman && !profesional ? handleNext() : handleNavigation()
              }
            >
              <Text style={styles.siguiente1}>Siguiente</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  jugadorTypo1: {
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  liniaLayout1: {
    height: 3,
    width: '20%',
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid'
  },
  liniaLayout2: {
    height: 3,
    width: '20%',
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.bALONCESTO,
    borderStyle: 'solid'
  },
  jugadorTypo: {
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
    // top: '35%'
  },
  simboloIconLayout: {
    height: 25,
    width: 25,
    position: 'absolute',
    left: 20
    // left: '5%'
  },
  botonLayout1: {
    height: 70,
    width: 360
  },
  imagenDeFondo: {
    position: 'absolute',
    height: '100%',
    width: '110%',
    zIndex: 0
  },
  coolicon: {
    width: 9,
    height: 15
  },
  atrs: {
    color: Color.gREY2SPORTSMATCH,
    marginLeft: 5,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'

    // right: '10%'
    // marginBottom: '5%'
  },
  paso1: {
    fontSize: FontSize.t1TextSMALL_size,
    // lineHeight: 17,
    color: Color.bALONCESTO,
    // width: 393,
    textAlign: 'center'
  },
  escogeTuRol: {
    fontSize: FontSize.size_9xl,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  linias: {
    padding: Padding.p_3xs,
    marginTop: 20,
    flexDirection: 'row',
    gap: 20
  },
  stepseccion: {
    // marginTop: 3
    // alignItems: 'center'
  },
  rectangulo: {
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    height: '100%',
    borderStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
    // justifyContent: 'center'
  },
  jugador: {
    // lineHeight: 20,
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500'
  },
  boton: {
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    left: '0%'
  },
  botonProfesionalDelDeporte: {
    marginTop: 20
  },
  botonesRoles: {
    width: '100%',
    marginTop: 30
  },
  siguiente1: {
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  siguiente: {
    // justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl
    // marginTop: '25%'
  },
  contenido: {
    // top: 77,
    marginTop: 20,
    height: '20%',
    // justifyContent: 'space-between',
    // gap: 50,
    alignItems: 'center'
  },
  paso6: {
    flex: 1,
    paddingHorizontal: 15,
    // height: 844,
    // overflow: 'hidden',
    // width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  selectedBackground: {
    backgroundColor: Color.bALONCESTO
  }
})

export default Paso1
