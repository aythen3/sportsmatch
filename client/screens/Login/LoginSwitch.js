import React, { useEffect, useRef, useState } from 'react'
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
  useWindowDimensions
} from 'react-native'
import { Switch } from 'react-native-switch'
import {
  useFocusEffect,
  useIsFocused,
  useNavigation
} from '@react-navigation/native'
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
  setIsSpotMan
} from '../../redux/slices/users.slices'
import { getAll } from '../../redux/actions/sports'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Facebook from 'expo-auth-session/providers/facebook'
import axiosInstance from '../../utils/apiBackend'
import { create, login } from '../../redux/actions/users'
import { LoginManager, AccessToken } from 'react-native-fbsdk-next'
import { setClub } from '../../redux/slices/club.slices'
import axios from 'axios'
import Linea from '../../components/svg/Linea'
import InstagramSVG from '../../components/svg/InstagramSVG'
import HomeGif from '../../utils/HomeGif'

WebBrowser.maybeCompleteAuthSession()

const LoginSwitch = () => {
  const instagramRef = useRef()
  const [igToken, setIgToken] = useState(null)
  const { height, width } = useWindowDimensions()

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { isSportman, user, loged } = useSelector((state) => state.users)
  const isFocused = useIsFocused()
  const [isEnabled, setIsEnabled] = useState(false)
  const [isPlayer, setIsPlayer] = useState(true)

  const getUserAuth = async () => {
    const normalUserAuth = await AsyncStorage.getItem('userAuth')
    const facebookUserAuth = await AsyncStorage.getItem('facebookAuth')
    const googleUserAuth = await AsyncStorage.getItem('googleAuth')

    if (googleUserAuth) {
      const googleId = await JSON.parse(googleUserAuth)
      const response = await dispatch(login({ googleId }))
      dispatch(
        setIsSpotMan(response.payload.user.type === 'club' ? false : true)
      )
      await AsyncStorage.setItem('googleAuth', user.uid)
      await AsyncStorage.setItem('userType', response.payload.user.type)
      dispatch(setClub(response))
      dispatch(logedIn())
      return
    }
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
  }

  useEffect(() => {
    getUserAuth()
  }, [])

  useEffect(() => {
    dispatch(getAll())
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
      '981049209549-nvp257t5bs9kr6dmi2hmmi7giogt5r95.apps.googleusercontent.com',
    androidClientId:
      '981049209549-b2d80rtev22jklna06n2j7ingp6tfjo1.apps.googleusercontent.com'
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
      if (user) {
        await AsyncStorage.setItem('@user', JSON.stringify(user))
        setUserInfo(user)
        if (user.providerData[0].providerId === 'google.com') {
          console.log('=====LOGIN WITH GOOGLE=====')
          dispatch(
            create({
              nickname: user.displayName,
              email: '',
              googleId: user.uid,
              type: isSportman === true ? 'sportman' : 'club'
            })
          ).then(async (data) => {
            // console.log('data from back:', data);
            try {
              const response = await dispatch(login({ googleId: user.uid }))
              console.log('response google:', response.payload)
              dispatch(
                setIsSpotMan(
                  response.payload.user.type === 'club' ? false : true
                )
              )
              // await AsyncStorage.setItem(
              //   'userToken',
              //   response?.payload?.accesToken
              // )
              await AsyncStorage.setItem('googleAuth', user.uid)
              await AsyncStorage.setItem('userType', response.payload.user.type)
              dispatch(setClub(response))
              navigation.navigate('SiguiendoJugadores')
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
              console.log('response facebook:', response.payload)
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
              navigation.navigate('SiguiendoJugadores')
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
            console.log('response instagram:', response.payload)
            dispatch(
              setIsSpotMan(response.payload.user.type === 'club' ? false : true)
            )
            await AsyncStorage.setItem(
              'facebookAuth',
              igToken.user_id.toString()
            )
            await AsyncStorage.setItem('userType', response.payload.user.type)
            dispatch(setClub(response))
          } catch (error) {
            console.log('Error:', error)
          }
        })
      }
    }

    fetchInstagramUsername()
  }, [igToken])

  // =========================FACEBOOK================================

  const signInWithFacebook = async () => {
    try {
      await LoginManager.logInWithPermissions(['public_profile', 'email'])
      const data = await AccessToken.getCurrentAccessToken()
      if (!data) {
        return
      }
      const facebookCredential = FacebookAuthProvider.credential(
        data.accessToken
      )
      await signInWithCredential(auth, facebookCredential)
    } catch (error) {
      console.log('error: ', error)
    }
  }
  const handleIos = async (user) => {
    console.log('=====LOGIN WITH APPLE=====')
    dispatch(create(user)).then(async (data) => {
      try {
        const response = await dispatch(login({ appleId: user.appleId }))
        dispatch(
          setIsSpotMan(response.payload.user.type === 'club' ? false : true)
        )
        await AsyncStorage.setItem('userToken', response?.payload?.accesToken)
        await AsyncStorage.setItem('userType', response.payload.user.type)
        dispatch(setClub(response))
      } catch (error) {
        console.log('Error:', error)
      }
    })
    return
  }

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )

  return (
    <View style={{ backgroundColor: 'black', height: height, width: width }}>
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
      <View style={styles.wrapper}>
        <Pressable onPress={() => navigation.navigate('PantallaInicio')}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../../assets/group-1.png')}
          />
        </Pressable>
        <Text style={[styles.eresJugadorO, styles.aceptarTypo]}>
          ¿Eres jugador {'\n'} o un club?
        </Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View>
            <View>
              <View style={[styles.groupChild, styles.borderPosition]}>
                <Text style={!isEnabled ? styles.jugador : styles.jugador2}>
                  Jugador/Profesional deporte*
                </Text>

                <Switch
                  circleSize={16}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  backgroundActive={'#00FF18'}
                  backgroundInactive={'#00FF18'}
                  circleActiveColor={'black'}
                  activeText={false}
                  inActiveText={false}
                  circleInActiveColor={'black'}
                  barHeight={18}
                  switchLeftPx={5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                  switchRightPx={5}
                />

                <Text
                  style={
                    !isEnabled ? styles.clubScouting : styles.clubScouting2
                  }
                >
                  Club/Representante/Scouter
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={[styles.entrenadoraPreparadoraFs, styles.aceptarTypo]}>
              (*) Entrenador/a, preparador/a físico/a, analista técnico/a,
              psicólogo/a, fisioterapeuta, nutricionista.
            </Text>
          </View>
        </View>
        <View style={styles.frameWrapper}>
          <View>
            <Text style={[styles.regstrateOInicia, styles.contnuarTypo]}>
              Regístrate o inicia sesión
            </Text>
            <View style={styles.frameContainer}>
              <View>
                <View style={styles.frameGroup}>
                  <View style={styles.frameGroup}>
                    <View>
                      <TouchableOpacity
                        onPress={() => promptAsync()}
                        style={styles.loremIpsumParent}
                      >
                        <View style={styles.loremIpsum2}>
                          <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Continua con Google
                          </Text>
                        </View>

                        <Image
                          style={[styles.groupItem, styles.groupPosition1]}
                          contentFit="cover"
                          source={require('../../assets/group-236.png')}
                        />
                      </TouchableOpacity>
                      {/* <TouchableOpacity style={styles.loremIpsumGroup}>
                        <View style={styles.loremIpsum2}>
                        <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Contínua con Apple
                          </Text>
                        </View>

                        <Image
                          style={[styles.groupInner, styles.groupPosition1]}
                          contentFit="cover"
                          source={require('../../assets/group-237.png')}
                          />
                        </TouchableOpacity> */}

                      <TouchableOpacity
                        // onPress={signInWithFacebook}
                        onPress={() => {
                          console.log('showing Instagram popup')
                          instagramRef.current.show()
                        }}
                        style={styles.loremIpsumGroup}
                      >
                        <View style={styles.loremIpsum2}>
                          <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Continua con Instagram
                          </Text>
                        </View>
                        <Image
                          style={[styles.groupIcon, styles.groupPosition]}
                          contentFit="cover"
                          source={require('../../assets/instagramlogo2.png')}
                        />
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
                                    AppleAuthentication.AppleAuthenticationScope
                                      .FULL_NAME,
                                    AppleAuthentication.AppleAuthenticationScope
                                      .EMAIL
                                  ]
                                })
                              // LOGICA PARA LOGEARSE VA ACA
                              const { identityToken, fullName } = credential

                              // Construcción del objeto a enviar en el post
                              const postData = {
                                email: '',
                                type: isSportman === true ? 'sportman' : 'club',
                                nickname:
                                  fullName.givenName +
                                  ' ' +
                                  fullName.familyName,
                                appleId: identityToken // Se utiliza el identityToken como el valor del appleId
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

                    <Image
                      style={{ width: 30, height: 30 }}
                      contentFit="cover"
                      source={require('../../assets/registromail.png')}
                    />
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
                    style={[styles.yaTenesUnaCuentaIniciaS, styles.aceptarTypo]}
                  >
                    ¿Ya tienes una cuenta? Inicia sesión
                  </Text>
                </Pressable>
              </View>
              <Text style={[styles.alContnuarAceptas, styles.contnuarTypo]}>
                Al continuar, aceptas automáticamente nuestras Condiciones,{' '}
                {'\n'}
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
  aceptarTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  borderPosition: {
    borderStyle: 'solid',
    marginTop: 30
  },
  contnuarTypo: {
    width: 393,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupPosition1: {
    left: '3.89%',
    bottom: '76%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  groupPosition: {
    left: '3.61%',
    bottom: '76%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },

  wrapper: {
    marginTop: 120
    // height: 180,
    // top: '12%'
  },
  eresJugadorO: {
    fontSize: FontSize.h1TitleHUGE_size,
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
    height: 40,
    width: 170,
    marginLeft: 15
  },
  groupChild: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    height: 40,
    width: '100%',
    // left: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: 329,
    height: 20,
    zIndex: 1
  },
  entrenadoraPreparadoraFs: {
    fontSize: FontSize.bodyBodyXS_size,
    // lineHeight: 14,
    // width: 271,
    marginTop: 15,
    paddingHorizontal: 40,
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'center'
  },
  frameGroup: {
    alignItems: 'center'
    // gap: 20
  },
  regstrateOInicia: {
    height: 25,
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  aceptar: {
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  loremIpsum2: {
    justifyContent: 'center',
    paddingVertical: Padding.p_2xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    flexDirection: 'row',
    borderRadius: Border.br_81xl,
    alignItems: 'center'
  },

  groupItem: {
    height: '50%',
    width: '6.1%'
  },
  loremIpsumParent: {
    width: 360,
    height: 45
  },
  groupInner: {
    height: '57%',
    width: '6%'
  },
  loremIpsumGroup: {
    marginTop: 10,
    width: 360,
    height: 45
  },
  groupIcon: {
    height: '56%',
    width: '7.18%'
  },
  oContnuarCon: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.colorDimgray_100,
    marginTop: 11
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
    width: 390,
    textAlign: 'center'
  },
  yaTenesUnaContainer: {
    marginTop: 27
  },
  alContnuarAceptas: {
    fontSize: FontSize.t4TEXTMICRO_size,
    marginTop: 72,
    color: Color.gREY2SPORTSMATCH
  },
  frameContainer: {
    marginTop: 9
  },
  frameWrapper: {
    marginTop: 21
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
    fontSize: 10,
    color: '#00FF18',
    marginRight: 5
  },
  jugador2: {
    fontSize: 10,
    color: '#999999',
    marginRight: 5
  },
  clubScouting: {
    color: '#999999',
    fontSize: 10,
    marginLeft: 5
  },
  clubScouting2: {
    color: '#00FF18',
    fontSize: 10,
    marginLeft: 5
  }
})

export default LoginSwitch
