import React, { useEffect, useState, useRef, useContext } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
  useWindowDimensions
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  FontSize,
  Padding,
  Color,
  Border,
  FontFamily
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/users'
import { setClub } from '../../redux/slices/club.slices'
import { useIsFocused } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  setIsSpotMan,
  logedIn,
  logedOut
} from '../../redux/slices/users.slices'
import { Context } from '../../context/Context'
import PassView from './passview'
import HomeGif from '../../utils/HomeGif'
import OjoCerradoSVG from '../../components/svg/OjoCerradoSVG'
import { detectSportColor } from './PantallaInicio'
import { setInitialSportman } from '../../redux/slices/sportman.slices'
import axiosInstance from '../../utils/apiBackend'

const RecuperarContra = () => {
  const {
    setProvisoryProfileImage,
    setProvisoryCoverImage,
    setProfileImage,
    setCoverImage,
    setActiveIcon
  } = useContext(Context)
  const isFocused = useIsFocused()
  const navigation = useNavigation()
  const [passview2, setPassview2] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const route = useRoute()

  const dispatch = useDispatch()

  const passwordInputRef = useRef(null)

  const { user, loged, allUsers } = useSelector((state) => state.users)

  const [valuesUser, setValuesUser] = useState({
    email: '',
    password: ''
  })

  const seterValues = (field, value) => {
    if (error) {
      setError('')
    }
    setValuesUser((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    const find = allUsers.find((e) => e.email === valuesUser.email)
    if (find) {
      console.log(
        'email valido',
        allUsers.find((e) => e.email === valuesUser.email)
      )
      await axiosInstance
        .post('/user/recuperar-contrasena', {
          email: valuesUser.email
        })
        .then(() => {
          navigation.goBack()
          setLoading(false)
        })
    } else {
      setError('El email no esta registrado en SportsMatch')
      setLoading(false)
    }
  }

  const { height, width } = useWindowDimensions()

  return (
    <ScrollView style={{ ...styles.iniciarSesin }}>
      {isFocused && (
        <StatusBar barStyle={'light-content'} backgroundColor="#000" />
      )}

      <HomeGif></HomeGif>

      <View
        style={{
          ...styles.contenido,
          height: height - StatusBar.currentHeight
        }}
      >
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
          <View style={styles.formulario}>
            <View style={styles.formularioFrame}>
              <View
                style={{
                  flex: 1,
                  width: '100%',

                  justifyContent: 'center',
                  paddingHorizontal: 15,
                  alignItems: 'center'
                }}
              >
                <View style={styles.titularcampos}>
                  <Text style={styles.titular}>Recuperar contraseña</Text>
                  <View style={styles.campos}>
                    <View style={styles.campoLayout}>
                      <View style={[styles.campo1Frame, styles.framePosition]}>
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
                            paddingLeft: 10,
                            paddingRight: 10,
                            width: '100%'
                          }}
                          placeholder="E-mail"
                          placeholderTextColor="#999"
                          value={valuesUser.email}
                          capitalize="sentences"
                          autoCapitalize="none"
                          onChangeText={(value) => seterValues('email', value)}
                          onSubmitEditing={() => {
                            passwordInputRef.current.focus()
                          }}
                        />
                      </View>
                    </View>
                  </View>
                </View>

                {error && (
                  <Text style={[styles.hasOlvidadoTu, styles.contraseaClr]}>
                    {error}
                  </Text>
                )}
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    backgroundColor: Color.wHITESPORTSMATCH,
                    borderRadius: Border.br_81xl,
                    width: '100%',
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 45,
                    top: '5%'
                  }}
                  onPress={handleSubmit}
                >
                  {!loading ? (
                    <Text style={styles.aceptar}>Enviar</Text>
                  ) : (
                    <View style={{ width: '100%' }}>
                      <ActivityIndicator color={'#000'} size={'small'} />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
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
    paddingRight: Padding.p_12xs,
    paddingTop: Padding.p_3xs,
    paddingLeft: Padding.p_mini,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: 'solid',
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  campoLayout: {
    // height: 38,
    width: '100%',
    paddingHorizontal: 10
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
    marginLeft: 5,
    zIndex: 9999
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
    marginTop: 34,
    width: '100%'
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
    fontFamily: FontFamily.t4TEXTMICRO,
    width: '100%'
  },
  botonIniciaSesin2: {
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    width: '100%',
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
  formulario: {
    flex: 1
  },
  alContnuarAceptas: {
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'center',
    paddingHorizontal: 15
  },
  formulariotextoLegal: {
    marginTop: 45,
    flex: 1
  },
  contenido: {
    flex: 1
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
  }
})

export default RecuperarContra
