import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontSize, Color, Padding, Border, FontFamily } from '../GlobalStyles'
import CheckBox from 'react-native-check-box'
import { useDispatch, useSelector } from 'react-redux'
import { create } from '../redux/actions/users'

const Registrarse = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { isSportman } = useSelector((state) => state.users)

  const [isChecked, setChecked] = useState(false)
  const [valuesUser, setValuesUser] = useState({
    nickname: '',
    password: '',
    email: '',
    type: isSportman === true ? 'sportman' : 'club'
  })

  const seterValues = (field, value) => {
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCheckboxToggle = () => {
    setChecked(!isChecked)
  }

  const submit = () => {
    if (valuesUser.email && valuesUser.nickname && valuesUser.password) {
      dispatch(create(valuesUser))
      navigation.navigate('IniciarSesin')
    } else {
      Alert.alert('Debes llenar todos los campos')
    }
  }
  return (
    <View style={styles.registrarse}>
      <Image
        style={styles.fondoIcon}
        contentFit="cover"
        source={require('../assets/fondo2.png')}
      />
      <View style={styles.contenido}>
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
          <View style={styles.formularioFrame}>
            <View style={styles.camposFormulario}>
              <View style={styles.titularcampos}>
                <Text style={[styles.titular, styles.titularLayout]}>
                  Regístrate
                </Text>
                <View style={styles.campos}>
                  <View style={styles.campo1}>
                    <View style={styles.campo1Frame}>
                      <Image
                        style={styles.simboloIcon1}
                        contentFit="cover"
                        source={require('../assets/simbolo4.png')}
                      />
                      <TextInput
                        style={[styles.nombre, styles.eMailSpaceBlock]}
                        placeholder="Nombre"
                        placeholderTextColor="#999"
                        value={valuesUser.nickname}
                        onChangeText={(value) => seterValues('nickname', value)}
                      />
                    </View>
                  </View>
                  <View style={styles.campo2}>
                    <View style={[styles.campo2Frame, styles.framePosition]}>
                      <Image
                        style={styles.vectorIcon}
                        contentFit="cover"
                        source={require('../assets/vector4.png')}
                      />
                      <TextInput
                        style={[styles.nombre, styles.eMailSpaceBlock]}
                        placeholder="E-mail"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        value={valuesUser.email}
                        onChangeText={(value) => seterValues('email', value)}
                      />
                    </View>
                  </View>
                  <View style={styles.campo3}>
                    <View style={[styles.campo3Frame, styles.framePosition]}>
                      <View style={styles.contraseaFrame}>
                        <Image
                          style={styles.simboloIcon2}
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
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.botonRegistrate}>
              <View style={styles.loremPosition}>
                <View style={[styles.loremIpsum, styles.loremPosition]}>
                  <View style={styles.loremIpsum1}>
                    <Text style={styles.aceptar} onPress={submit}>
                      Regístrate
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.yaTenesUnaContainer}
            onPress={() => navigation.navigate('IniciarSesin')}
          >
            <Text style={[styles.yaTenesUnaCuentaIniciaS, styles.eMailTypo]}>
              ¿Ya tíenes una cuenta? Inicia sesión
            </Text>
          </Pressable>

          <View style={styles.textoLegal}>
            <View style={styles.textoLegalFrame}>
              <CheckBox
                isChecked={isChecked}
                onClick={handleCheckboxToggle}
                checkBoxColor="#999"
              />
              <Text style={[styles.texto1, styles.textoTypo]}>
                Estoy de acuerdo en recibir información promocional y
                publicitaria a través del correo electrónico
              </Text>
            </View>
            <View style={styles.textoLegalFrame}>
              <Text style={[styles.textoInferior, styles.textoTypo]}>
                Al contínuar, aceptas automátícamente nuestras Condiciones,
                Polítíca de privacidad y Polítíca de cookies
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  titularLayout: {
    width: 390,
    textAlign: 'center'
  },
  eMailSpaceBlock: {
    marginLeft: 10,
    textAlign: 'left'
  },
  framePosition: {
    paddingBottom: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: 'solid',
    borderRadius: Border.br_81xl,
    top: 0,
    flexDirection: 'row',
    left: 0,
    overflow: 'hidden'
  },
  eMailTypo: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  loremPosition: {
    height: '100%',
    width: '100%'
  },
  textoTypo: {
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    width: '80%'
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
    flexDirection: 'row',
    width: 393
  },
  titular: {
    fontSize: FontSize.h1TitleHUGE_size,
    lineHeight: 40,
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  simboloIcon1: {
    width: 22,
    height: 22
  },
  nombre: {
    height: 19,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  campo1Frame: {
    paddingTop: Padding.p_2xs,
    paddingBottom: Padding.p_2xs,
    paddingRight: Padding.p_12xs,
    paddingLeft: Padding.p_mini,
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  campo1: {
    width: 359,
    height: 43
  },
  vectorIcon: {
    width: 21,
    height: 16
  },
  campo2Frame: {
    paddingRight: Padding.p_12xs
  },
  campo2: {
    height: 38,
    marginTop: 15,
    width: 360
  },
  simboloIcon2: {
    width: 14,
    height: 18
  },
  contraseaFrame: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  campo3Frame: {
    height: 39,
    paddingRight: 23,
    width: 360
  },
  campo3: {
    alignSelf: 'stretch',
    marginTop: 15,
    flex: 1
  },
  campos: {
    marginTop: 34,
    flex: 1
  },
  titularcampos: {
    alignItems: 'center',
    flex: 1
  },
  camposFormulario: {
    height: 259
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  loremIpsum1: {
    justifyContent: 'center',
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 360,
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  loremIpsum: {
    flexDirection: 'row'
  },
  botonRegistrate: {
    height: 40,
    marginTop: 36,
    width: 360
  },
  formularioFrame: {
    alignItems: 'center'
  },
  yaTenesUnaCuentaIniciaS: {
    width: 390,
    textAlign: 'center'
  },
  yaTenesUnaContainer: {
    marginTop: 27
  },
  texto1: {
    lineHeight: 14,
    zIndex: 0
  },
  textoLegalFrame: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoInferior: {
    marginTop: 9
  },
  textoLegal: {
    marginTop: 42
  },
  formulariotextoLegal: {
    marginTop: 45
  },
  contenido: {
    top: '25%',
    height: '100%'
  },
  fondoIcon: {
    // width: '160%',
    // height: '70%',
    // bottom: '60%',
    // right: '0%',
    // position: 'absolute',
    // zIndex: 0
    width: '160%',
    height: '50%',
    bottom: '70%',
    right: '-5%',
    position: 'absolute',
    zIndex: 0
  },
  registrarse: {
    // height: 844,
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default Registrarse
