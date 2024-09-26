import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  useWindowDimensions,
  StatusBar,
  Platform,
  Dimensions,
  ActivityIndicator,
  Linking
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
import { create, getAllUsers, login } from '../../redux/actions/users'
import { AntDesign } from '@expo/vector-icons'
import PassView from './passview'
import HomeGif from '../../utils/HomeGif'
import OjoCerradoSVG from '../../components/svg/OjoCerradoSVG'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setInitialSportman } from '../../redux/slices/sportman.slices'
import { detectSportColor } from './PantallaInicio'
import { setClub } from '../../redux/slices/club.slices'
import { setIsSpotMan } from '../../redux/slices/users.slices'
import * as EmailValidator from 'email-validator'
import { Context } from '../../context/Context'
import { debounce } from 'lodash' // Importar lodash para debouncing
import axiosInstance from '../../utils/apiBackend'
const Registrarse = () => {
  const [nombreError, setNombreError] = useState('')
  const navigation = useNavigation()
  const [loading, setLoading] = useState(false)

  const route = useRoute()

  const dispatch = useDispatch()

  const { isSportman, allUsers } = useSelector((state) => state.users)

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
  const [passview1, setPassview1] = useState(true)
  const [passview2, setPassview2] = useState(true)
  const { setActiveIcon } = useContext(Context)
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])

  // const isValidEmail = (email) => {
  //   const alreadyTaken = allUsers?.map((user) => user.email).includes(email)
  //   if (!alreadyTaken) {
  //     return EmailValidator.validate(email)
  //   } else {
  //     return false
  //   }
  // }
  const seterValues = (field, value) => {
    setNombreError('')
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
    // if (field === 'email') {
    //   setEmailValid(isValidEmail(value))
    // }
  }

  const handleCheckboxToggle = () => {
    setNombreError('')

    setChecked(!isChecked)
  }

  const submit = () => {
    setLoading(true)

    // const passwordPattern =
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?.])[A-Za-z\d@$!%*?.]{4,}$/

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{4,}$/

    if (!isEmailValid) {
      setLoading(false)

      return setNombreError('Ingresa un email válido')
    }
    if (!passwordPattern.test(valuesUser.password.trim())) {
      setLoading(false)

      return setNombreError(
        'La contraseña debe contener almenos una Mayuscula , una minuscula , un numero y un simbolo'
      )
    }
    if (
      valuesUser.email &&
      valuesUser.nickname &&
      valuesUser.password &&
      confirmPassword
    ) {
      if (isEmailValid) {
        // const existingUser = allUsers?.find(
        //   (user) => user.email === valuesUser.email
        // )
        // if (existingUser) {
        //   setLoading(false)

        //   Alert.alert('Este correo electrónico ya está registrado')
        //   return
        // }
        if (
          valuesUser.password === confirmPassword
          // passwordPattern.test(valuesUser.password.trim())
        ) {
          if (!isChecked) {
            setLoading(false)

            return setNombreError('Debes aceptar las condiciones de privacidad')
          }
          dispatch(create(valuesUser)).then((e) => {
            console.log('cuando creaste fue esto', e)

            navigation.navigate('IniciarSesin', { sendMail: true })
          })
        } else {
          setNombreError('Las contraseñas no coinciden')
          setLoading(false)
        }
      } else {
        setNombreError('Ingresa un email válido')
        setLoading(false)
      }
    } else {
      setNombreError('Debes llenar todos los campos')
      setLoading(false)
    }
  }

  const { height } = useWindowDimensions()

  const checkEmailInUse = async (email) => {
    try {
      const response = await axiosInstance.get(`user/email/${email}`, {
        headers: {
          user_token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU2YzUzMzg4LTEwOTAtNDQ4NC04OGIzLWFlYzY5NjIyYzRmMCIsImlhdCI6MTcyNzI3NDIxOCwiZXhwIjoxNzI3ODc5MDE4fQ.20tuvZCrbhQFLF2-m6CrgU5JBnDf-jJ3QWzAtdXkiQI' // Agrega el token dummy aquí
        }
      }) // Cambia esto a tu URL real
      if (response.data) {
        console.log('entraaaa', response)
        setEmailValid(!response.data) // Si el usuario existe, no es válido
      } else {
        setEmailValid(true) // Si hubo un error en la respuesta, consideramos el email válido
      }
    } catch (error) {
      console.error('Error al verificar el email:', error)
    } finally {
    }
  }

  // Debounce para verificar el email
  const debouncedCheckEmailInUse = useRef(
    debounce((email) => {
      if (EmailValidator.validate(email)) {
        checkEmailInUse(email)
      } else {
        setEmailValid(true) // Resetear el estado si el email no es válido
      }
    }, 100) // 1000 ms = 1 segundo
  ).current

  useEffect(() => {
    debouncedCheckEmailInUse(valuesUser.email)
  }, [valuesUser.email]) // Se ejecuta cada vez que cambia el email

  const handleLinkPress = () => {
    const url =
      'https://www.privacypolicies.com/live/a51249a4-6a56-472b-9142-68c4b6b5c57c' // Cambia esto a tu enlace deseado
    Linking.openURL(url).catch((err) =>
      console.error('Error al abrir el enlace', err)
    )
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: Color.bLACK1SPORTSMATCH
        }}
      >
        <HomeGif></HomeGif>
        <View
          style={{
            flex: 1,
            height: height - StatusBar.currentHeight,
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.goBack()
            }}
            style={styles.botonAtrasFrame}
          >
            <Image
              style={styles.simboloIcon}
              contentFit="cover"
              source={require('../../assets/coolicon3.png')}
            />
            <Pressable
              onPress={() => {
                navigation.goBack()
              }}
              style={{ marginLeft: 5 }}
            >
              <Text style={[styles.atrs1, styles.timeTypo]}>Atrás</Text>
            </Pressable>
          </TouchableOpacity>
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
                          alignItems: 'center',
                          paddingHorizontal: Padding.p_mini,
                          borderColor: Color.gREY2SPORTSMATCH,
                          borderWidth: 1,
                          borderRadius: Border.br_81xl,
                          flexDirection: 'row',
                          height: 40,
                          width: '100%'
                        }}
                      >
                        <Image
                          style={styles.simboloIcon1}
                          contentFit="contain"
                          source={require('../../assets/simbolo4.png')}
                        />
                        <TextInput
                          style={{
                            color: Color.wHITESPORTSMATCH,
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontSize: FontSize.t2TextSTANDARD_size,
                            textAlign: 'left',
                            paddingHorizontal: 10,

                            flex: 1
                          }}
                          editable={!loading}
                          placeholder="Nombre"
                          placeholderTextColor="#999"
                          value={valuesUser.nickname}
                          onChangeText={(value) => {
                            if (/^[a-zA-Z\s]*$/.test(value) || value === '') {
                              // Si la entrada coincide con la expresión regular o está vacía, actualizar el estado y limpiar el mensaje de error
                              console.log(`nickname: ${value}`) // Log nickname value
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
                          maxLength={40}
                        />
                      </View>
                    </View>
                    <View style={styles.campo2}>
                      <View
                        style={{
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
                          contentFit="contain"
                          source={require('../../assets/vector4.png')}
                        />
                        <TextInput
                          style={{
                            color: Color.wHITESPORTSMATCH,
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontSize: FontSize.t2TextSTANDARD_size,
                            textAlign: 'left',
                            paddingHorizontal: 10,

                            flex: 1,
                            width: '100%'
                          }}
                          editable={!loading}
                          placeholder="E-mail"
                          placeholderTextColor="#999"
                          autoCapitalize="none"
                          maxLength={40}
                          value={valuesUser.email}
                          onChangeText={(value) => {
                            console.log(`email: ${value}`) // Log email value
                            seterValues('email', value)
                          }}
                          ref={emailInputRef}
                          onSubmitEditing={() => {
                            passwordInputRef.current.focus()
                          }}
                        />

                        {!isEmailValid ? (
                          <View
                            style={{ position: 'absolute', right: 14, top: 9 }}
                          >
                            <AntDesign
                              name="close"
                              color={'#ff0000'}
                              size={20}
                            />
                          </View>
                        ) : (
                          <View
                            style={{ position: 'absolute', right: 14, top: 9 }}
                          >
                            <AntDesign
                              name="check"
                              color={'#00ff00'}
                              size={20}
                            />
                          </View>
                        )}
                      </View>
                    </View>
                    <View style={[styles.campo3Frame, styles.framePosition]}>
                      <View style={styles.contraseaFrame}>
                        <Image
                          style={styles.simboloIcon2}
                          contentFit="contain"
                          source={require('../../assets/simbolo3.png')}
                        />
                        <TextInput
                          style={{
                            color: Color.wHITESPORTSMATCH,
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontSize: FontSize.t2TextSTANDARD_size,
                            textAlign: 'left',
                            width: '100%',
                            paddingHorizontal: 10,
                            flex: 1
                          }}
                          editable={!loading}
                          maxLength={40}
                          placeholder="Contraseña"
                          placeholderTextColor="#999"
                          secureTextEntry={passview1}
                          value={valuesUser.password}
                          onChangeText={(value) => {
                            console.log(`password: ${value}`) // Log password value
                            seterValues('password', value)
                          }}
                          ref={passwordInputRef}
                          onSubmitEditing={() => {
                            confirmPasswordInputRef.current.focus()
                          }}
                        />
                        <TouchableOpacity
                          style={{ paddingRight: 12 }}
                          onPress={() => setPassview1(!passview1)}
                        >
                          {passview1 ? (
                            <PassView></PassView>
                          ) : (
                            <OjoCerradoSVG></OjoCerradoSVG>
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={[styles.campo3Frame, styles.framePosition]}>
                      <View style={styles.contraseaFrame}>
                        <Image
                          style={styles.simboloIcon2}
                          contentFit="contain"
                          source={require('../../assets/simbolo3.png')}
                        />
                        <TextInput
                          style={{
                            color: Color.wHITESPORTSMATCH,
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontSize: FontSize.t2TextSTANDARD_size,
                            textAlign: 'left',
                            width: '100%',
                            paddingHorizontal: 10,

                            flex: 1
                          }}
                          editable={!loading}
                          maxLength={40}
                          placeholder="Confirmar contraseña"
                          placeholderTextColor="#999"
                          secureTextEntry={passview2}
                          value={confirmPassword}
                          onChangeText={(value) => {
                            console.log(`confirmPassword: ${value}`) // Log confirmPassword value
                            setConfirmPassword(value)
                          }}
                          ref={confirmPasswordInputRef}
                          onSubmitEditing={submit}
                        />
                        <TouchableOpacity
                          style={{ paddingRight: 12 }}
                          onPress={() => setPassview2(!passview2)}
                        >
                          {passview2 ? (
                            <PassView></PassView>
                          ) : (
                            <OjoCerradoSVG></OjoCerradoSVG>
                          )}
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{ width: '100%', paddingHorizontal: 15 }}>
                {nombreError !== '' && (
                  <View
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      paddingVertical: 5
                    }}
                  >
                    <Text style={{ color: 'red', fontWeight: '400' }}>
                      {nombreError}
                    </Text>
                  </View>
                )}

                <View style={[styles.botonRegistrate]}>
                  <TouchableOpacity
                    disabled={loading}
                    style={[styles.loremIpsum, styles.loremPosition]}
                    onPress={submit}
                  >
                    <View style={styles.loremIpsum1}>
                      {loading ? (
                        <View style={{ width: '100%' }}>
                          <ActivityIndicator color={'#000'} size={'small'} />
                        </View>
                      ) : (
                        <Text style={styles.aceptar}>Regístrate</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            alignSelf: 'center',
            justifyContent: 'center',
            bottom: 10,
            paddingHorizontal: 15
          }}
        >
          <View
            style={{
              flexDirection: 'column',
              width: '100%',
              gap: 10
            }}
          >
            <Pressable
              style={styles.yaTenesUnaContainer}
              onPress={() => navigation.navigate('IniciarSesin')}
            >
              <Text style={[styles.yaTenesUnaCuentaIniciaS, styles.eMailTypo]}>
                ¿Ya tienes una cuenta? Inicia sesión
              </Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                width: '100%'
              }}
            >
              <View
                style={{
                  width: 20,
                  justifyContent: 'center'
                }}
              >
                <CheckBox
                  isChecked={isChecked}
                  onClick={handleCheckboxToggle}
                  checkBoxColor="#999"
                />
              </View>
              <Text
                style={{
                  fontSize: FontSize.t4TEXTMICRO_size,
                  color: Color.gREY2SPORTSMATCH,
                  textAlign: 'center',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  width: '95%'
                }}
              >
                Estoy de acuerdo en recibir información promocional y
                publicitaria a través del correo electrónico
              </Text>
            </View>
            <TouchableOpacity onPress={handleLinkPress}>
              <Text
                style={{
                  fontSize: FontSize.t4TEXTMICRO_size,
                  color: Color.gREY2SPORTSMATCH,
                  textAlign: 'center',
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                Al continuar, aceptas automáticamente nuestras Condiciones,
                Polítíca de privacidad y Polítíca de cookies
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  loginSwitchChild: {
    marginBottom: 0, // o el modo de ajuste que prefieras
    width: 200,
    height: 200,
    top: -10,
    // bottom: '75%',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    right: -85,
    zIndex: 0,
    overflow: 'hidden'
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
  },
  loginSwitchChild2: {
    // backgroundColor: 'red',
    width: 270,
    height: 270,
    // bottom: '75%',
    top: -20,
    left: -40,
    transform: [{ rotate: '-45deg' }],
    zIndex: 0
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
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
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: '15%'
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
    width: '100%',
    height: 43
  },
  vectorIcon: {
    width: 22,
    height: 22
  },
  campo2Frame: {
    paddingRight: Padding.p_12xs
  },
  campo2: {
    height: 38,
    marginTop: 11,
    width: '100%'
  },
  simboloIcon2: {
    width: 22,
    height: 22
  },
  contraseaFrame: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  campo3Frame: {
    height: 39,
    width: '100%',
    marginTop: 15
  },
  campo3: {
    alignSelf: 'stretch',
    marginTop: 15,
    flex: 1
  },
  campos: {
    marginTop: 34,
    width: Dimensions.get('screen').width,
    paddingHorizontal: 15
  },
  titularcampos: {
    alignItems: 'center',
    width: '100%'
  },
  camposFormulario: {},
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
    width: '100%',

    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  loremIpsum: {
    flexDirection: 'row'
  },
  botonRegistrate: {
    height: 40,
    marginTop: 10,
    width: '100%'
  },
  formularioFrame: {
    alignItems: 'center',
    width: '100%'
  },
  yaTenesUnaCuentaIniciaS: {
    width: '100%',
    textAlign: 'center'
  },
  yaTenesUnaContainer: {
    alignItems: 'center'
  },
  texto1: {
    lineHeight: 14,
    zIndex: 0
  },
  textoLegalFrame: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  textoInferior: {
    marginTop: 9
  },
  textoLegal: {
    marginTop: 42
  },
  formulariotextoLegal: {
    marginTop: 15,
    width: '100%'
  },
  contenido: {
    // justifyContent: 'center',
    marginTop: '20%',
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
