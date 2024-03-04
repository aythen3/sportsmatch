import React, { useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  Switch
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'
import { useDispatch } from 'react-redux'
import { setIsSpotMan } from '../redux/slices/users.slices'

const LoginSwitch = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState)
    dispatch(setIsSpotMan(isEnabled))
  }

  console.log('Enable?', isEnabled)

  return (
    <ScrollView style={styles.loginSwitch}>
      <Image
        style={styles.loginSwitchChild}
        contentFit="cover"
        source={require('../assets/group-10.png')}
      />
      <View style={styles.wrapper}>
        <Pressable onPress={() => navigation.navigate('PantallaInicio')}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/group-1.png')}
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
                <Text style={styles.jugador}>
                  Jugador / Profesional deporte*
                </Text>
                <Switch
                  trackColor={{ false: '#00FF18', true: '#00FF18' }}
                  thumbColor={isEnabled ? 'black' : 'black'}
                  ios_backgroundColor="#00FF18"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
                <Text style={styles.clubScouting}>Club / Scouting</Text>
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
                      <View style={styles.loremIpsumParent}>
                        <View style={styles.loremIpsum2}>
                          <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Contínua con Google
                          </Text>
                        </View>

                        <Image
                          style={[styles.groupItem, styles.groupPosition1]}
                          contentFit="cover"
                          source={require('../assets/group-236.png')}
                        />
                      </View>
                      <View style={styles.loremIpsumGroup}>
                        <View style={styles.loremIpsum2}>
                          <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Contínua con Apple
                          </Text>
                        </View>

                        <Image
                          style={[styles.groupInner, styles.groupPosition1]}
                          contentFit="cover"
                          source={require('../assets/group-237.png')}
                        />
                      </View>
                      <View style={styles.loremIpsumGroup}>
                        <View style={styles.loremIpsum2}>
                          <Text style={[styles.aceptar, styles.aceptarTypo]}>
                            Continua con Facebook
                          </Text>
                        </View>

                        <Image
                          style={[styles.groupIcon, styles.groupPosition]}
                          contentFit="cover"
                          source={require('../assets/group12.png')}
                        />
                      </View>
                    </View>
                    <Text style={[styles.oContnuarCon, styles.contnuarTypo]}>
                      — o contínuar con el e-mail —
                    </Text>
                  </View>
                  <Pressable
                    style={styles.loremIpsumGroup}
                    onPress={() => navigation.navigate('Registrarse')}
                  >
                    <View style={styles.loremIpsum2}>
                      <Text style={[styles.aceptar, styles.aceptarTypo]}>
                        Regístrate con el e-mail
                      </Text>
                    </View>

                    <Image
                      style={[styles.groupChild1, styles.groupPosition]}
                      contentFit="cover"
                      source={require('../assets/group-238.png')}
                    />
                  </Pressable>
                </View>
                <Pressable
                  style={styles.yaTenesUnaContainer}
                  onPress={() => navigation.navigate('IniciarSesin')}
                >
                  <Text
                    style={[styles.yaTenesUnaCuentaIniciaS, styles.aceptarTypo]}
                  >
                    ¿Ya tíenes una cuenta? Inicia sesión
                  </Text>
                </Pressable>
              </View>
              <Text style={[styles.alContnuarAceptas, styles.contnuarTypo]}>
                Al contínuar, aceptas automátícamente nuestras Condiciones,{' '}
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
    top: -50
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
    top: '16%'
  },
  eresJugadorO: {
    fontSize: FontSize.h1TitleHUGE_size,
    lineHeight: 40,
    fontWeight: '500',
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    bottom: '15%'
  },
  loginSwitchChild: {
    width: '200%',
    height: '48%',
    bottom: '75%',
    position: 'absolute',
    zIndex: 0
  },
  icon: {
    height: '34%',
    // backgroundColor: 'red',
    width: '52%',
    left: '4%'
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
    lineHeight: 14,
    width: 271,
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
    fontSize: 14,
    color: '#00FF18'
  },
  clubScouting: {
    color: '#999999',
    fontSize: 14
  }
})

export default LoginSwitch
