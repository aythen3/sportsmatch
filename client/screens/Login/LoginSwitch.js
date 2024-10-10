import React, { useContext, useEffect, useRef, useState } from 'react'
import * as AppleAuthentication from 'expo-apple-authentication'
import InstagramLogin from 'react-native-instagram-login'

import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  useWindowDimensions,
  Dimensions
} from 'react-native'
import { Switch } from 'react-native-switch'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import {
  logedIn,
  logedOut,
  setIsSpotMan,
  updateUser
} from '../../redux/slices/users.slices'
import { getAll } from '../../redux/actions/sports'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential,
  signOut
} from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axiosInstance from '../../utils/apiBackend'
import {
  create,
  getAllUsers,
  login,
  updateUserData
} from '../../redux/actions/users'
import { setClub } from '../../redux/slices/club.slices'
import axios from 'axios'
import HomeGif from '../../utils/HomeGif'
import { detectSportColor } from './PantallaInicio'
import { setInitialSportman } from '../../redux/slices/sportman.slices'
import { Context } from '../../context/Context'

WebBrowser.maybeCompleteAuthSession()

const firebaseLogout = () => {
  signOut(auth)
}

const scalableFontSize = (fontSize) => {
  const { width } = Dimensions.get('window')
  const scalableFontSize = fontSize * (width / 375) // 375 es el ancho de la pantalla de un iPhone 8
  return scalableFontSize
}
const LoginSwitch = () => {
  const instagramRef = useRef()
  const [igToken, setIgToken] = useState(null)

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { isSportman, user, loged } = useSelector((state) => state.users)
  const [isEnabled, setIsEnabled] = useState(false)
  const [isPlayer, setIsPlayer] = useState(true)
  const [mailSend, setMailSend] = useState(false)

  const [optionPlayer, setOptionPlayer] = useState(true)

  const getUserAuth = async () => {
    const normalUserAuth = await AsyncStorage.getItem('userAuth')
    const facebookUserAuth = await AsyncStorage.getItem('facebookAuth')
    const appleUserAuth = await AsyncStorage.getItem('appleUserAuth')
    const googleUserAuth = await AsyncStorage.getItem('googleAuth')
    if (facebookUserAuth) {
      const facebookId = await JSON.parse(facebookUserAuth)
      const response = await dispatch(login({ facebookId }))
      dispatch(
        setIsSpotMan(response.payload.user.type === 'club' ? false : true)
      )
      dispatch(setClub(response))
      return
    }
    if (normalUserAuth) {
      const valuesUser = await JSON.parse(normalUserAuth)
      // const res = await AsyncStorage.removeItem('userAuth')
      // console.log('resres: ', res)

      dispatch(login(valuesUser))
        .then(async (response) => {
          dispatch(
            setIsSpotMan(response.payload.user.type === 'club' ? false : true)
          )
          dispatch(setClub(response))
        })
        .catch((error) => {
          console.error(error)
        })

      return
    }
    if (appleUserAuth) {
      try {
        const response = await dispatch(login({ appleId: appleUserAuth }))
        console.log(response, 'responseeeeee--------------')
        detectSportColor(
          response.payload.user.sportman?.info?.sport ||
            response?.payload?.user?.club?.sport,
          dispatch
        )
        if (response.payload.user.sportman !== null) {
          dispatch(
            setInitialSportman({
              id: response.payload.user?.sportman?.id,
              ...response.payload.user?.sportman
            })
          )
        }
        dispatch(
          setIsSpotMan(response.payload.user.type === 'club' ? false : true)
        )

        dispatch(setClub(response))
        if (response.payload.user.sportman || response.payload.user.club) {
          return navigation.reset({
            index: 0,
            routes: [{ name: 'ScreenPrincipal' }]
          })
        } else if (response.payload.user.type === 'sportman') {
          return navigation.navigate('Paso1')
        } else {
          return navigation.navigate('StepsClub')
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }
  }

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getAll())
    getUserAuth()
    setMailSend(false)
  }, [])

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
    dispatch(setIsSpotMan(isEnabled))
    setIsPlayer(!isPlayer)
  }

  const [userInfo, setUserInfo] = useState()
  const [loading, setLoading] = useState(false)

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId:
      '290667898990-dgk8b4uuq5k0728pia6so4f4qvlkl4ae.apps.googleusercontent.com',
    androidClientId:
      '290667898990-a3eficeqn7fhm541v2fg1tmllsge06fm.apps.googleusercontent.com'
  })

  const getLocalUser = async () => {
    try {
      setLoading(true)
      const userJSON = await AsyncStorage.getItem('@user')
      const userData = userJSON ? JSON.parse(userJSON) : null
      setUserInfo(userData)
    } catch (e) {
      console.log(e, 'Error getting local user')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params
      const credential = GoogleAuthProvider.credential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  useEffect(() => {
    getLocalUser()
    const unsub = onAuthStateChanged(auth, async (user) => {
      console.log(user, 'user')
      if (user) {
        if (user.providerData[0].providerId === 'google.com') {
          console.log('=====LOGIN WITH GOOGLE=====')
          await AsyncStorage.setItem('@user', JSON.stringify(user))
          setUserInfo(user)
          const exist = await axiosInstance.get(`user/${user.uid}`)
          console.log('exist', exist)
          if (exist.existe) {
            try {
              const response = await dispatch(login({ googleId: user.uid }))
              if (!response?.payload?.user?.emailCheck) {
                dispatch(
                  updateUserData(response?.payload?.user?.id, {
                    emailCheck: true
                  })
                )
                return
              }
              detectSportColor(
                response.payload.user.sportman?.info?.sport ||
                  response?.payload?.user?.club?.sport,
                dispatch
              )
              if (response.payload.user.sportman !== null) {
                dispatch(
                  setInitialSportman({
                    id: response.payload.user?.sportman?.id,
                    ...response.payload.user?.sportman
                  })
                )
              }
              dispatch(
                setIsSpotMan(
                  response.payload.user.type === 'club' ? false : true
                )
              )

              await AsyncStorage.setItem('googleAuth', user.uid)
              await AsyncStorage.setItem('userType', response.payload.user.type)
              dispatch(setClub(response))
              if (
                response.payload.user.sportman ||
                response.payload.user.club
              ) {
                return navigation.reset({
                  index: 0,
                  routes: [{ name: 'ScreenPrincipal' }]
                })
              } else if (response.payload.user.type === 'sportman') {
                return navigation.navigate('Paso1')
              } else {
                return navigation.navigate('StepsClub')
              }
            } catch (error) {
              console.log('Error:', error)
            }
          }
          dispatch(
            create({
              nickname: user.displayName,
              email: user.email,
              googleId: user.uid,
              type: isSportman === true ? 'sportman' : 'club'
            })
          ).then(async (data) => {
            console.log('data from back:', data)
            try {
              const response = await dispatch(login({ googleId: user.uid }))
              console.log(response, 'ressssponsede')
              if (!response?.payload?.user?.emailCheck) {
                // setMailSend(true)
                // setLoading(false)
                dispatch(
                  updateUserData(response?.payload?.user?.id, {
                    emailCheck: true
                  })
                )
                return
              }
              detectSportColor(
                response.payload.user.sportman?.info?.sport ||
                  response?.payload?.user?.club?.sport,
                dispatch
              )
              if (response.payload.user.sportman !== null) {
                dispatch(
                  setInitialSportman({
                    id: response.payload.user?.sportman?.id,
                    ...response.payload.user?.sportman
                  })
                )
              }
              dispatch(
                setIsSpotMan(
                  response.payload.user.type === 'club' ? false : true
                )
              )

              await AsyncStorage.setItem('googleAuth', user.uid)
              await AsyncStorage.setItem('userType', response.payload.user.type)
              dispatch(setClub(response))
              if (
                response.payload.user.sportman ||
                response.payload.user.club
              ) {
                return navigation.reset({
                  index: 0,
                  routes: [{ name: 'ScreenPrincipal' }]
                })
              } else if (response.payload.user.type === 'sportman') {
                return navigation.navigate('Paso1')
              } else {
                return navigation.navigate('StepsClub')
              }
            } catch (error) {
              console.log('Error:', error)
            }
          })
          return
        } else {
          console.log('=====LOGIN WITH FACEBOOK=====')
          dispatch(
            create({
              nickname: user.displayName,
              email: '',
              facebookId: user.uid,
              type: isSportman === true ? 'sportman' : 'club'
            })
          ).then(async (data) => {
            // console.log('data from back fb:', data);
            try {
              const response = await dispatch(login({ facebookId: user.uid }))
              //  console.log('response facebook:', response.payload)
              dispatch(
                setIsSpotMan(
                  response.payload.user.type === 'club' ? false : true
                )
              )
              // await AsyncStorage.setItem(
              //   'userToken',
              //   response?.payload?.accesToken
              // )
              await AsyncStorage.setItem('facebookAuth', user.uid)
              await AsyncStorage.setItem('userType', response.payload.user.type)
              dispatch(setClub(response))
              navigation.reset({
                index: 0,
                routes: [{ name: 'ScreenPrincipal' }]
              })
            } catch (error) {
              console.log('Error:', error)
            }
          })
        }
      } else {
      }
    })
    return () => unsub()
  }, [response])

  const getInstagramUsername = async (accessToken) => {
    try {
      const response = await axios.get(`https://graph.instagram.com/me`, {
        params: {
          fields: 'id,username',
          access_token: accessToken
        }
      })
      return response.data
    } catch (error) {
      console.error('Error fetching Instagram username:', error)
      throw error
    }
  }

  useEffect(() => {
    const fetchInstagramUsername = async () => {
      if (igToken) {
        console.log('=====LOGIN WITH INSTAGRAM=====')
        // const {username} = await getInstagramUsername(igToken.access_token)
        // console.log('userData before dispatching', userData)
        dispatch(
          create({
            // nickname: userData?.username,
            nickname: igToken.user_id.toString(),
            email: '',
            facebookId: igToken.user_id.toString(),
            type: isSportman === true ? 'sportman' : 'club'
          })
        ).then(async (data) => {
          try {
            const response = await dispatch(
              login({ facebookId: igToken.user_id.toString() })
            )
            // console.log('response instagram:', response.payload)
            dispatch(
              setIsSpotMan(response.payload.user.type === 'club' ? false : true)
            )
            await AsyncStorage.setItem(
              'facebookAuth',
              igToken.user_id.toString()
            )
            await AsyncStorage.setItem('userType', response.payload.user.type)
            dispatch(setClub(response))
            navigation.reset({
              index: 0,
              routes: [{ name: 'ScreenPrincipal' }]
            })
          } catch (error) {
            console.log('Error:', error)
          }
        })
      }
    }

    fetchInstagramUsername()
  }, [igToken])

  // =========================FACEBOOK================================

  // const signInWithFacebook = async () => {
  //   try {
  //     await LoginManager.logInWithPermissions(['public_profile', 'email'])
  //     const data = await AccessToken.getCurrentAccessToken()
  //     if (!data) {
  //       return
  //     }
  //     const facebookCredential = FacebookAuthProvider.credential(
  //       data.accessToken
  //     )
  //     await signInWithCredential(auth, facebookCredential)
  //   } catch (error) {
  //     console.log('error: ', error)
  //   }
  // }
  const handleIos = async (user) => {
    const exist = await axiosInstance.get(`user/apple/${user.appleId}`)

    console.log(exist.data, 'exist')

    if (!exist.data.existe) {
      dispatch(create(user)).then(async (data) => {
        console.log(user, 'ususario')
        try {
          const response = await dispatch(login({ appleId: user.appleId }))
          detectSportColor(
            response.payload.user.sportman?.info?.sport ||
              response?.payload?.user?.club?.sport,
            dispatch
          )
          if (response.payload.user.sportman !== null) {
            dispatch(
              setInitialSportman({
                id: response.payload.user?.sportman?.id,
                ...response.payload.user?.sportman
              })
            )
          }
          dispatch(
            setIsSpotMan(response.payload.user.type === 'club' ? false : true)
          )
          await AsyncStorage.setItem('userToken', response?.payload?.accesToken)
          await AsyncStorage.setItem('userType', response.payload.user.type)
          await AsyncStorage.setItem('appleUserAuth', user.appleId)

          dispatch(setClub(response))
          if (response.payload.user.sportman || response.payload.user.club) {
            return navigation.reset({
              index: 0,
              routes: [{ name: 'ScreenPrincipal' }]
            })
          } else if (response.payload.user.type === 'sportman') {
            return navigation.navigate('Paso1')
          } else {
            return navigation.navigate('StepsClub')
          }
        } catch (error) {
          console.log('Error:', error)
        }
      })
    } else {
      try {
        const response = await dispatch(login({ appleId: user.appleId }))
        console.log(response, 'responseeeeee--------------')
        detectSportColor(
          response.payload.user.sportman?.info?.sport ||
            response?.payload?.user?.club?.sport,
          dispatch
        )
        if (response.payload.user.sportman !== null) {
          dispatch(
            setInitialSportman({
              id: response.payload.user?.sportman?.id,
              ...response.payload.user?.sportman
            })
          )
        }
        dispatch(
          setIsSpotMan(response.payload.user.type === 'club' ? false : true)
        )
        await AsyncStorage.setItem('appleUserAuth', user.appleId)

        await AsyncStorage.setItem('userToken', response?.payload?.accesToken)
        await AsyncStorage.setItem('userType', response.payload.user.type)
        dispatch(setClub(response))
        if (response.payload.user.sportman || response.payload.user.club) {
          return navigation.reset({
            index: 0,
            routes: [{ name: 'ScreenPrincipal' }]
          })
        } else if (response.payload.user.type === 'sportman') {
          return navigation.navigate('Paso1')
        } else {
          return navigation.navigate('StepsClub')
        }
      } catch (error) {
        console.log('Error:', error)
      }
    }
  }

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={{
        flex: 1
      }}
    >
      <HomeGif></HomeGif>
      <InstagramLogin
        ref={instagramRef}
        appId="831187755599572"
        appSecret="2ec849af68b38422f8da9cc54ee9c794"
        redirectUrl="https://github.com/"
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={(token) => {
          console.log('Setting instagram token to', token)
          setIgToken(token)
        }}
        onLoginFailure={(data) => console.log('Instagram login failed', data)}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center'
        }}
      >
        <View
          style={{
            marginTop: '10%',
            width: '100%'
          }}
        >
          <Image
            style={styles.icon}
            contentFit="contain"
            source={require('../../assets/group-1.png')}
          />
          <Text style={[styles.eresJugadorO, styles.aceptarTypo]}>
            ¿Eres jugador o un club?
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            width: '100%'
          }}
        >
          <View style={styles.frameGroup}>
            <View style={{ width: '100%' }}>
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 15,
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    dispatch(setIsSpotMan(true))
                    setOptionPlayer(true)
                  }}
                  style={[
                    styles.groupChild,
                    styles.borderPosition,
                    {
                      justifyContent: 'space-between',
                      borderColor: optionPlayer
                        ? '#1FD430'
                        : Color.gREY2SPORTSMATCH,
                      backgroundColor: optionPlayer
                        ? 'rgba(0, 255, 24, 0.2)'
                        : 'transparent'
                    }
                  ]}
                >
                  <Text style={{ color: 'gray' }}>Soy</Text>
                  <View style={{ alignItems: 'center' }}>
                    <Text
                      style={optionPlayer ? styles.jugador : styles.jugador2}
                    >
                      Jugador
                    </Text>
                    <Text
                      style={optionPlayer ? styles.jugador : styles.jugador2}
                    >
                      Profesional deporte
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.entrenadoraPreparadoraFs,
                      styles.aceptarTypo
                    ]}
                  >
                    (Entrenador/a, preparador/a físico/a, analista técnico/a,
                    psicólogo/a, fisioterapeuta, nutricionista.)
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    dispatch(setIsSpotMan(false))

                    setOptionPlayer(false)
                  }}
                  style={[
                    styles.groupChild,
                    styles.borderPosition,
                    {
                      justifyContent: 'center',
                      borderColor: !optionPlayer
                        ? '#1FD430'
                        : Color.gREY2SPORTSMATCH,
                      backgroundColor: !optionPlayer
                        ? 'rgba(0, 255, 24, 0.2)'
                        : 'transparent'
                    }
                  ]}
                >
                  <Text style={{ color: 'gray', position: 'absolute', top: 6 }}>
                    Soy
                  </Text>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center'
                    }}
                  >
                    <Text
                      style={!optionPlayer ? styles.jugador : styles.jugador2}
                    >
                      Club
                    </Text>
                    <Text
                      style={!optionPlayer ? styles.jugador : styles.jugador2}
                    >
                      Representante
                    </Text>
                    <Text
                      style={!optionPlayer ? styles.jugador : styles.jugador2}
                    >
                      Scouter
                    </Text>
                  </View>

                  {/* <Switch
                    circleSize={16}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    backgroundActive={'#1FD430'}
                    backgroundInactive={'#1FD430'}
                    circleActiveColor={'black'}
                    activeText={false}
                    inActiveText={false}
                    circleInActiveColor={'black'}
                    barHeight={18}
                    switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                    switchRightPx={5}
                  /> */}

                  {/* <Text
                    style={
                      !isEnabled ? styles.clubScouting : styles.clubScouting2
                    }
                  >
                    Club/Representante/Scouter
                  </Text> */}
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginBottom: 15 }}></View>
          </View>
          <View style={styles.frameWrapper}>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Text style={[styles.regstrateOInicia, styles.contnuarTypo]}>
                Regístrate o inicia sesión
              </Text>
              <View style={styles.frameContainer}>
                <View style={{ width: '100%' }}>
                  <View style={styles.frameGroup}>
                    <View style={styles.frameGroup}>
                      <View style={{ width: '100%' }}>
                        <TouchableOpacity
                          onPress={() => promptAsync()}
                          style={styles.loremIpsumParent}
                        >
                          <View style={styles.loremIpsum2}>
                            <Image
                              style={[styles.groupItem, styles.groupPosition1]}
                              contentFit="contain"
                              source={require('../../assets/group-236.png')}
                            />
                            <Text style={[styles.aceptar, styles.aceptarTypo]}>
                              Continua con Google
                            </Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                          onPress={() => {
                            console.log('showing Instagram popup')
                            instagramRef.current.show()
                          }}
                          style={styles.loremIpsumGroup}
                        >
                          <View style={styles.loremIpsum2}>
                            <Image
                              style={[styles.groupIcon, styles.groupPosition]}
                              contentFit="contain"
                              source={require('../../assets/instagramlogo2.png')}
                            />
                            <Text style={[styles.aceptar, styles.aceptarTypo]}>
                              Continua con Instagram
                            </Text>
                          </View>
                        </TouchableOpacity>
                        {Platform.OS === 'ios' && (
                          <AppleAuthentication.AppleAuthenticationButton
                            buttonType={
                              AppleAuthentication.AppleAuthenticationButtonType
                                .SIGN_IN
                            }
                            buttonStyle={{ backgroundColor: 'black' }}
                            cornerRadius={5}
                            style={{
                              width: 'auto',
                              height: 44,
                              borderRadius: 100,
                              marginTop: 10,
                              overflow: 'hidden'
                            }}
                            onPress={async () => {
                              try {
                                const credential =
                                  await AppleAuthentication.signInAsync({
                                    requestedScopes: [
                                      AppleAuthentication
                                        .AppleAuthenticationScope.FULL_NAME,
                                      AppleAuthentication
                                        .AppleAuthenticationScope.EMAIL
                                    ]
                                  })
                                console.log(
                                  'aaa-------------------------------------',
                                  credential
                                )
                                // LOGICA PARA LOGEARSE VA ACA
                                const {
                                  identityToken,
                                  fullName,
                                  user: ident
                                } = credential

                                // Construcción del objeto a enviar en el post
                                const postData = {
                                  email: credential.email,
                                  type:
                                    isSportman === true ? 'sportman' : 'club',
                                  nickname:
                                    fullName.givenName +
                                    ' ' +
                                    fullName.familyName,
                                  appleId: ident // Se utiliza el identityToken como el valor del appleId
                                }

                                // Envío del objeto postData al servidor
                                const response2 = await handleIos(postData)
                              } catch (e) {
                                console.log(e, 'entra al catch')
                                if (e.code === 'ERR_REQUEST_CANCELED') {
                                  // handle that the user canceled the sign-in flow
                                } else {
                                  console.log('llegue al final')
                                  // handle other errors
                                }
                              }
                            }}
                          />
                        )}
                      </View>
                      <Text style={[styles.oContnuarCon, styles.contnuarTypo]}>
                        — o continuar con el e-mail —
                      </Text>
                    </View>
                    <Pressable
                      style={styles.loremIpsumGroup}
                      onPress={() =>
                        navigation.navigate('Registrarse', {
                          isPlayer
                        })
                      }
                    >
                      <View style={styles.loremIpsum2}>
                        <Text style={[styles.aceptar, styles.aceptarTypo]}>
                          Regístrate con el e-mail
                        </Text>
                      </View>
                    </Pressable>
                  </View>
                  <Pressable
                    style={styles.yaTenesUnaContainer}
                    onPress={() =>
                      navigation.navigate('IniciarSesin', {
                        isPlayer
                      })
                    }
                  >
                    <Text
                      style={[
                        styles.yaTenesUnaCuentaIniciaS,
                        styles.aceptarTypo
                      ]}
                    >
                      ¿Ya tienes una cuenta? Inicia sesión
                    </Text>
                  </Pressable>
                  {mailSend === true && (
                    <Pressable disabled style={styles.yaTenesUnaContainer}>
                      <Text
                        style={[
                          styles.yaTenesUnaCuentaIniciaS,
                          styles.aceptarTypo
                        ]}
                      >
                        Se envió el mail de confirmación. Comprueba tu bandeja
                        de entrada.
                      </Text>
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Text style={[styles.alContnuarAceptas, styles.contnuarTypo]}>
        {/* Al continuar, aceptas automáticamente nuestras Condiciones, {'\n'}
        Polítíca de privacidad y Polítíca de cookies */}
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  aceptarTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  borderPosition: {
    borderStyle: 'solid',
    marginTop: 30
  },
  contnuarTypo: {
    width: '100%',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupPosition1: {
    position: 'absolute',
    left: '5%'
  },
  groupPosition: {
    position: 'absolute',
    left: 20
  },

  wrapper: {
    marginTop: 120
    // height: 180,
    // top: '12%'
  },
  eresJugadorO: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    marginTop: 20
    // bottom: '15%'
  },
  loginSwitchChild: {
    marginBottom: 0, // o el modo de ajuste que prefieras
    width: 320,
    height: 300,
    bottom: -200,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    // bottom: '75%',
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    right: '-26%',
    zIndex: 0,
    overflow: 'hidden'
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
  },
  loginSwitchChild2: {
    // backgroundColor: 'red',
    width: '100%',
    height: '150%',
    // bottom: '75%',
    transform: [{ rotate: '-45deg' }],
    zIndex: 0
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
  },
  loginSwitchChild3: {
    // backgroundColor: 'red',
    width: 100,
    height: 100,
    // bottom: '75%',
    top: 0,
    left: 0,
    transform: [{ rotate: '-45deg' }, { scale: 1 }],
    zIndex: 99
    // Ajusta este valor según sea necesario para reducir el tamaño de la imagen
  },
  icon: {
    height: 50,
    width: Dimensions.get('screen').width / 2,
    marginLeft: 15
  },
  groupChild: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    borderRadius: 12,
    width: Dimensions.get('screen').width / 2.2,
    // left: 0,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 6
  },
  container: {
    width: 329,
    height: 20,
    zIndex: 1
  },
  entrenadoraPreparadoraFs: {
    fontSize: scalableFontSize(8),
    // lineHeight: 14,
    // width: 271,
    marginTop: 10,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'center'
  },
  frameGroup: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center'
    // gap: 20
  },
  regstrateOInicia: {
    height: 35,
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  aceptar: {
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  loremIpsum2: {
    width: '100%',
    justifyContent: 'center',
    paddingVertical: Padding.p_2xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    flexDirection: 'row',
    borderRadius: Border.br_81xl,
    alignItems: 'center'
  },

  groupItem: {
    height: 20,
    width: 20
  },
  loremIpsumParent: {
    width: '100%'
  },
  groupInner: {
    height: '57%',
    width: '6%'
  },
  loremIpsumGroup: {
    marginTop: 10,
    width: '100%'
  },
  groupIcon: {
    height: 20,
    width: 20
  },
  oContnuarCon: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.colorDimgray_100,
    marginTop: 10
  },
  groupChild1: {
    height: '40%',
    width: '5.92%',
    top: '27.5%',
    right: '90.47%',
    bottom: '32.5%'
  },
  yaTenesUnaCuentaIniciaS: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.gREY2SPORTSMATCH,
    width: '100%',
    textAlign: 'center'
  },
  yaTenesUnaContainer: {
    marginTop: 10
  },
  alContnuarAceptas: {
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH
  },
  frameContainer: {
    marginTop: 0,
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameWrapper: {
    marginTop: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  frameParent: {
    alignItems: 'center',
    paddingBottom: 100
    // left: 0
    // height: '100%'
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12
  },
  time: {
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    height: 24,
    top: 10,
    left: 15
  },
  loginSwitch: {
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    marginEnd: 250,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  jugador: {
    fontSize: scalableFontSize(14),
    color: '#1FD430',
    marginRight: 5,
    textAlign: 'center'
  },
  jugador2: {
    fontSize: scalableFontSize(14),
    color: 'white',
    marginRight: 5,
    textAlign: 'center'
  },
  clubScouting: {
    color: '#999999',
    fontSize: 10,
    marginLeft: 5
  },
  clubScouting2: {
    color: '#1FD430',
    fontSize: 10,
    marginLeft: 5
  }
})

export default LoginSwitch
