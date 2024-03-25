import React, { useEffect, useState, useRef } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize, Padding, Color, Border, FontFamily } from '../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../redux/actions/users'
import { getAll } from '../redux/actions/sports'

const IniciarSesin = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const passwordInputRef = useRef(null)

  const { user } = useSelector((state) => state.users)
  const { sports } = useSelector((state) => state.sports)

  const [valuesUser, setValuesUser] = useState({
    email: '',
    password: ''
  })

  const seterValues = (field, value) => {
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  useEffect(() => {
    if (user?.user?.club || user?.user?.sportman) {
      navigation.navigate('SiguiendoJugadores')
    } else {
      if (user?.accesToken) {
        navigation.navigate('stepsClub')
      }
    }
  }, [user])

  const handleSubmit = () => {
    if (valuesUser.email && valuesUser.password) {
      dispatch(login(valuesUser))
    }
    // navigation.navigate('stepsClub')
  }

  return (
    <ScrollView style={styles.iniciarSesin}>
      <View style={styles.contenido}>
        <Image
          style={styles.fondoIcon}
          contentFit="cover"
          source={require('../assets/fondo1.png')}
        />
        <View style={styles.botonAtrasFrame}>
          <Image
            style={styles.simboloIcon}
            contentFit="cover"
            source={require('../assets/coolicon3.png')}
          />
          <Pressable style={styles.atrs} onPress={() => navigation.goBack()}>
            <Text style={[styles.atrs1, styles.timeTypo]}>Atrás</Text>
          </Pressable>
        </View>
        <View style={styles.formulariotextoLegal}>
          <View style={styles.formulario}>
            <View style={styles.formularioFrame}>
              <View>
                <View style={styles.titularcampos}>
                  <Text style={styles.titular}>Inicia sesión</Text>
                  <View style={styles.campos}>
                    <View style={styles.campoLayout}>
                      <View style={[styles.campo1Frame, styles.framePosition]}>
                        <Image
                          style={styles.vectorIcon}
                          contentFit="cover"
                          source={require('../assets/vector4.png')}
                        />
                        <TextInput
                          style={[styles.nombre, styles.eMailSpaceBlock]}
                          placeholder="E-mail"
                          placeholderTextColor="#999"
                          value={valuesUser.email}
                          capitalize="sentences"
                          autoCapitalize="none"
                          onChangeText={(value) => seterValues('email', value)}
                          onSubmitEditing={() => {
                            // Manejar el evento onSubmitEditing
                            passwordInputRef.current.focus() // Pasar el foco al siguiente campo (contraseña)
                          }}
                        />
                      </View>
                    </View>
                    <View style={[styles.campo2, styles.campoLayout]}>
                      <View style={styles.framePosition}>
                        <Image
                          style={styles.simboloIcon1}
                          contentFit="cover"
                          source={require('../assets/simbolo3.png')}
                        />
                        <TextInput
                          style={[styles.nombre, styles.eMailSpaceBlock]}
                          placeholder="Contraseña"
                          placeholderTextColor="#999"
                          secureTextEntry={true}
                          value={valuesUser.password}
                          onChangeText={(value) =>
                            seterValues('password', value)
                          }
                          ref={passwordInputRef}
                          onSubmitEditing={handleSubmit}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <Text style={[styles.hasOlvidadoTu, styles.contraseaClr]}>
                  ¿Has olvidado tu contraseña? Clica aquí
                </Text>
              </View>

              <TouchableOpacity
                style={styles.botonIniciaSesin2}
                onPress={handleSubmit}
              >
                <Text style={styles.aceptar}>Inicia sesión</Text>
              </TouchableOpacity>
            </View>
            <Pressable
              style={styles.noTenesUnaContainer}
              onPress={() => navigation.navigate('Registrarse')}
            >
              <Text
                style={[styles.noTenesUnaCuentaRegstra, styles.contraseaClr]}
              >
                ¿No tíenes una cuenta? Regístrate
              </Text>
            </Pressable>
          </View>
          <View>
            <Text style={[styles.alContnuarAceptas, styles.contraseaClr]}>
              Al contínuar, aceptas automátícamente nuestras Condiciones,
              Polítíca de privacidad y Polítíca de cookies
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  framePosition: {
    paddingBottom: Padding.p_3xs,
    paddingRight: Padding.p_12xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: 'solid',
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  campoLayout: {
    // height: 38,
    width: 360
  },
  contraseaClr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  simboloIcon: {
    width: 9,
    height: 15
  },
  atrs1: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  atrs: {
    marginLeft: 5
  },
  botonAtrasFrame: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  titular: {
    fontSize: FontSize.h1TitleHUGE_size,
    lineHeight: 40,
    fontWeight: '500',
    width: 390,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  vectorIcon: {
    width: 21,
    height: 16
  },
  campo1Frame: {
    alignItems: 'flex-end'
  },
  simboloIcon1: {
    width: 14,
    height: 18
  },
  campo2: {
    marginTop: 15
  },
  campos: {
    marginTop: 34
  },
  titularcampos: {
    alignItems: 'center'
  },
  hasOlvidadoTu: {
    marginTop: 18,
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  botonIniciaSesin2: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    width: 360,
    alignItems: 'center',
    flexDirection: 'row',
    top: '5%'
  },
  formularioFrame: {
    alignItems: 'center',
    flex: 1
  },
  noTenesUnaCuentaRegstra: {
    alignSelf: 'stretch',
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  noTenesUnaContainer: {
    marginTop: 27
  },
  formulario: {
    flex: 1
  },
  alContnuarAceptas: {
    fontSize: FontSize.t4TEXTMICRO_size,
    marginTop: 153,
    alignSelf: 'stretch',
    textAlign: 'center'
  },
  formulariotextoLegal: {
    marginTop: 45,
    flex: 1
  },
  contenido: {
    top: '30%',
    height: '100%'
  },
  fondoIcon: {
    width: '150%',
    height: '70%',
    bottom: '95%',
    right: '0%',
    position: 'absolute',
    zIndex: 0
  },
  iniciarSesin: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  nombre: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  eMailSpaceBlock: {
    marginLeft: 10
  }
})

export default IniciarSesin
