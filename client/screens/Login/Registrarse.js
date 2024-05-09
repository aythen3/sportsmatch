import React, { useEffect, useRef, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  FontSize,
  Color,
  Padding,
  Border,
  FontFamily
} from '../../GlobalStyles'
import CheckBox from 'react-native-check-box'
import { useDispatch, useSelector } from 'react-redux'
import { create, getAllUsers } from '../../redux/actions/users'
import { AntDesign } from '@expo/vector-icons'

const Registrarse = () => {
  const [nombreError, setNombreError] = useState('')
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()

  const { isSportman, allUsers } = useSelector((state) => state.users)
  const { isPlayer } = route.params

  const emailInputRef = useRef(null)
  const passwordInputRef = useRef(null)
  const confirmPasswordInputRef = useRef(null)

  const [isChecked, setChecked] = useState(false)
  const [valuesUser, setValuesUser] = useState({
    nickname: '',
    password: '',
    email: '',
    type: isSportman === true ? 'sportman' : 'club'
  })
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isEmailValid, setEmailValid] = useState(false)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  const isValidEmail = (email) => {
    const alreadyTaken = allUsers?.map((user) => user.email).includes(email)
    if (!alreadyTaken) {
      return /^[^\s@]+@[^\s@]+\.(?:com|net|org|edu|gov|mil|biz|info|name|museum|us|ca|uk|fr|au|de)$/i.test(
        email
      )
    } else {
      return false
    }
  }

  const seterValues = (field, value) => {
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
    if (field === 'email') {
      setEmailValid(isValidEmail(value))
    }
  }

  const handleCheckboxToggle = () => {
    setChecked(!isChecked)
  }

  const submit = () => {
    if (valuesUser.email && valuesUser.nickname && valuesUser.password) {
      if (isValidEmail(valuesUser.email)) {
        const existingUser = allUsers?.find(
          (user) => user.email === valuesUser.email
        )
        if (existingUser) {
          Alert.alert('Este correo electrónico ya está registrado')
          return
        }
        if (valuesUser.password === confirmPassword) {
          console.log('valuesUser: ', valuesUser)
          dispatch(create(valuesUser))
          navigation.navigate('IniciarSesin', { isPlayer })
        } else {
          Alert.alert('Las contraseñas no coinciden')
        }
      }
    } else {
      Alert.alert('Debes llenar todos los campos')
    }
  }

  return (
    <View style={styles.registrarse}>
      <Image
        style={styles.fondoIcon}
        contentFit="cover"
        source={require('../../assets/fondo2.png')}
      />
      <View style={styles.contenido}>
        <View style={styles.botonAtrasFrame}>
          <Image
            style={styles.simboloIcon}
            contentFit="cover"
            source={require('../../assets/coolicon3.png')}
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
                    <View
                      style={{
                        gap: 5,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: Padding.p_mini,
                        borderColor: Color.gREY2SPORTSMATCH,
                        borderWidth: 1,
                        borderRadius: Border.br_81xl,
                        flexDirection: 'row',
                        height: 40
                      }}
                    >
                      <Image
                        style={styles.simboloIcon1}
                        contentFit="cover"
                        source={require('../../assets/simbolo4.png')}
                      />
                      <TextInput
                        style={{
                          color: Color.wHITESPORTSMATCH,
                          fontFamily: FontFamily.t4TEXTMICRO,
                          fontSize: FontSize.t2TextSTANDARD_size,
                          marginLeft: 10,
                          textAlign: 'left',
                          width: '80%'
                        }}
                        placeholder="Nombre"
                        placeholderTextColor="#999"
                        value={valuesUser.nickname}
                        onChangeText={(value) => {
                          if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
                            // Si la entrada coincide con la expresión regular o está vacía, actualizar el estado y limpiar el mensaje de error
                            seterValues('nickname', value)
                            setNombreError('')
                          } else {
                            // Si la entrada no coincide con la expresión regular, establecer el mensaje de error apropiado
                            setNombreError(
                              'Nombre no puede contener números ni caracteres especiales'
                            )
                          }

                          // Verificar si se excedió el máximo de caracteres
                          if (value.length > 60) {
                            // Si se excede el máximo de caracteres, establecer el mensaje de error correspondiente
                            setNombreError('Caracteres excedidos')
                          }
                        }}
                        onSubmitEditing={() => {
                          emailInputRef.current.focus()
                        }}
                        maxLength={60}
                      />
                    </View>
                  </View>
                  <View style={styles.campo2}>
                    <View
                      style={{
                        gap: 5,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingHorizontal: Padding.p_mini,
                        borderColor: Color.gREY2SPORTSMATCH,
                        borderWidth: 1,
                        borderRadius: Border.br_81xl,
                        flexDirection: 'row',
                        height: 40
                      }}
                    >
                      <Image
                        style={styles.vectorIcon}
                        contentFit="cover"
                        source={require('../../assets/vector4.png')}
                      />
                      <TextInput
                        style={{
                          color: Color.wHITESPORTSMATCH,
                          fontFamily: FontFamily.t4TEXTMICRO,
                          fontSize: FontSize.t2TextSTANDARD_size,
                          marginLeft: 10,
                          textAlign: 'left',
                          width: '80%'
                        }}
                        placeholder="E-mail"
                        placeholderTextColor="#999"
                        autoCapitalize="none"
                        value={valuesUser.email}
                        onChangeText={(value) => seterValues('email', value)}
                        ref={emailInputRef}
                        onSubmitEditing={() => {
                          passwordInputRef.current.focus()
                        }}
                      />

                      {!isEmailValid ? (
                        <View
                          style={{ position: 'absolute', right: 14, top: 9 }}
                        >
                          <AntDesign name="close" color={'#ff0000'} size={20} />
                        </View>
                      ) : (
                        <View
                          style={{ position: 'absolute', right: 14, top: 9 }}
                        >
                          <AntDesign name="check" color={'#00ff00'} size={20} />
                        </View>
                      )}
                    </View>
                  </View>
                  <View style={[styles.campo3Frame, styles.framePosition]}>
                    <View style={styles.contraseaFrame}>
                      <Image
                        style={styles.simboloIcon2}
                        contentFit="cover"
                        source={require('../../assets/simbolo3.png')}
                      />
                      <TextInput
                        style={{
                          color: Color.wHITESPORTSMATCH,
                          fontFamily: FontFamily.t4TEXTMICRO,
                          fontSize: FontSize.t2TextSTANDARD_size,
                          marginLeft: 10,
                          textAlign: 'left',
                          width: '90%'
                        }}
                        placeholder="Contraseña"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={valuesUser.password}
                        onChangeText={(value) => seterValues('password', value)}
                        ref={passwordInputRef}
                        onSubmitEditing={() => {
                          confirmPasswordInputRef.current.focus()
                        }}
                      />
                    </View>
                  </View>
                  <View style={[styles.campo3Frame, styles.framePosition]}>
                    <View style={styles.contraseaFrame}>
                      <Image
                        style={styles.simboloIcon2}
                        contentFit="cover"
                        source={require('../../assets/simbolo3.png')}
                      />
                      <TextInput
                        style={{
                          color: Color.wHITESPORTSMATCH,
                          fontFamily: FontFamily.t4TEXTMICRO,
                          fontSize: FontSize.t2TextSTANDARD_size,
                          marginLeft: 10,
                          textAlign: 'left',
                          width: '90%'
                        }}
                        placeholder="Confirmar contraseña"
                        placeholderTextColor="#999"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={(value) => setConfirmPassword(value)}
                        ref={confirmPasswordInputRef}
                        onSubmitEditing={submit}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ height: 40, marginTop: 36, width: 360 }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginHorizontal: 5
                }}
              >
                {nombreError !== '' && (
                  <Text style={{ color: 'red', fontWeight: '400' }}>
                    {nombreError}
                  </Text>
                )}
              </View>

              <View
                style={[
                  styles.botonRegistrate,
                  { marginTop: nombreError ? 20 : 36 }
                ]}
              >
                <TouchableOpacity
                  style={[styles.loremIpsum, styles.loremPosition]}
                  onPress={submit}
                >
                  <View style={styles.loremIpsum1}>
                    <Text style={styles.aceptar}>Regístrate</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={[{ marginTop: nombreError ? 40 : 36 }]}>
            <Pressable
              style={styles.yaTenesUnaContainer}
              onPress={() => navigation.navigate('IniciarSesin')}
            >
              <Text style={[styles.yaTenesUnaCuentaIniciaS, styles.eMailTypo]}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Text>
            </Pressable>
          </View>
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
                Al continuar, aceptas automáticamente nuestras Condiciones,
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
    gap: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: Padding.p_mini,
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    height: 40
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
    marginTop: 11,
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
    width: 360,
    marginTop: 15
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
    marginTop: 27,
    alignItems: 'center'
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
    top: '20%',
    height: '100%'
  },
  fondoIcon: {
    marginBottom: 0, // o el modo de ajuste que prefieras
    // backgroundColor: 'red',
    width: '150%',
    height: '40%',
    // top: '20%',
    // bottom: '75%',
    position: 'absolute',
    left: '-25%',
    zIndex: 0,
    transform: [{ scale: 0.7 }] //
  },
  registrarse: {
    overflow: 'hidden',
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  errorEmail: {
    color: 'red',
    bottom: 8,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: '95%',
    position: 'absolute'
  },
  successEmail: {
    color: 'green',
    bottom: 8,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: '95%',
    position: 'absolute'
  }
})

export default Registrarse
