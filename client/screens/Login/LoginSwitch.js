import React, { useEffect, useState } from 'react'
import * as AppleAuthentication from 'expo-apple-authentication';

import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'
import { Switch } from 'react-native-switch'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setIsSpotMan } from '../../redux/slices/users.slices'
import { getAll } from '../../redux/actions/sports'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithCredential
} from 'firebase/auth'
import { auth } from '../../firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from '../../redux/actions/users'
import * as Facebook from 'expo-auth-session/providers/facebook'
import axiosInstance from '../../utils/apiBackend';

WebBrowser.maybeCompleteAuthSession()

const LoginSwitch = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { isSportman } = useSelector((state) => state.users)

  const [isEnabled, setIsEnabled] = useState(false)
  const [isPlayer, setIsPlayer] = useState(true)

  useEffect(() => {
    dispatch(getAll())
  }, [])

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
    dispatch(setIsSpotMan(isEnabled))
    setIsPlayer(!isPlayer)
  }

  useEffect(() => {
    console.log('isSportman', isSportman)
  }, [isSportman])

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
        dispatch(
          create({
            nickname: user.displayName,
            email: user.email,
            googleId: user.uid
          })
        )
      } else {
        console.log('user not authenticated')
      }
    })
    return () => unsub()
  }, [])

  // =========================================================
  const [user, setUser] = useState(null)
  const [req, res, prompt] = Facebook.useAuthRequest({
    clientId: '955537832791728'
  })

  useEffect(() => {
    if (res && res.type === 'success' && res.authentication) {
      ; (async () => {
        const userInfoResponse = await fetch(
          `https://graph.facebook.com/me?access_token=${res.authentication.accessToken}&fields=id,name,picture.type(large)`
        )
        const userInfo = await userInfoResponse.json()
        console.log('userInfo: ', userInfo)
        console.log('accessToken: ', res.params.access_token)
        setUser(userInfo)
        dispatch(
          create({
            nickname: userInfo.name,
            facebookAccessToken: res.params.access_token
          })
        )

        //         {"id": "10229138853848687", "name": "Alejo Sada", "picture": {"data": {"height": 200,
        // "is_silhouette": false, "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10229138853848687&height=200&width=200&ext=1716313330&hash=AbbVkV53n6HBYUSIilnf2iX0", "width": 200}}}
        console.log(JSON.stringify(res, null, 2))
      })()
    }
  }, [res])

  const handlePressAsync = async () => {
    const result = await prompt()
    if (result.type !== 'success') {
      alert('Uh oh, something went wrong')
      return
    }
  }

  if (loading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size={'large'} />
      </View>
    )

  return (
    <ScrollView keyboardShouldPersistTaps={'always'} style={styles.loginSwitch}>
      <Image
        style={styles.loginSwitchChild}
        contentFit="cover"
        source={require('../../assets/fondo-inicial.png')}
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
                  Jugador / Profesional deporte*
                </Text>

                <Switch
                  circleSize={16}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                  backgroundActive={'#00FF18'}
                  backgroundInactive={'#00FF18'}
                  activeText={false}
                  inActiveText={false}
                  circleActiveColor={'black'}
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
                  Club / Scouting
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
                            Contínua con Google
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
                        onPress={handlePressAsync}
                        style={styles.loremIpsumGroup}
                      >
                        <View style={styles.loremIpsum2}>
                          <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Continua con Facebook
                          </Text>
                        </View>

                        <Image
                          style={[styles.groupIcon, styles.groupPosition]}
                          contentFit="cover"
                          source={require('../../assets/group12.png')}
                        />
                      </TouchableOpacity>
                      <AppleAuthentication.AppleAuthenticationButton
                        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                        buttonStyle={{backgroundColor:"black"}}
                        
                        cornerRadius={5}
                        style={{width:"auto",height:44,borderRadius:100,marginTop:10,overflow:"hidden"}}
                        onPress={async () => {
                          try {
                            const credential = await AppleAuthentication.signInAsync({
                              requestedScopes: [

                                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                                AppleAuthentication.AppleAuthenticationScope.EMAIL,
                                
                              ],
                            });
                            // LOGICA PARA LOGEARSE VA ACA
                            console.log(credential,"credddd")
                            // axiosInstance.post('user',credential)
                            // signed in
                          } catch (e) {
                            if (e.code === 'ERR_REQUEST_CANCELED') {
                              // handle that the user canceled the sign-in flow
                            } else {
                              // handle other errors
                            }
                          }
                        }}
                      />
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
                      style={[styles.groupChild1, styles.groupPosition]}
                      contentFit="cover"
                      source={require('../../assets/group-238.png')}
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
    // backgroundColor: 'red',
    width: '150%',
    height: '40%',
    top: '-20%',
    // bottom: '75%',
    position: 'absolute',
    left: '-45%',
    zIndex: 0
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
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  jugador: {
    fontSize: 12,
    color: '#00FF18',
    marginRight: 5
  },
  jugador2: {
    fontSize: 12,
    color: '#999999',
    marginRight: 5
  },
  clubScouting: {
    color: '#999999',
    fontSize: 12,
    marginLeft: 5
  },
  clubScouting2: {
    color: '#00FF18',
    fontSize: 12,
    marginLeft: 5
  }
})

export default LoginSwitch
