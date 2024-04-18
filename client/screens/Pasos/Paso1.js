import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'expo-image'
import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import {
  FontFamily,
  Color,
  FontSize,
  Padding,
  Border
} from '../../GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import Lines from '../../components/Lines'
import Paso3Profesional from './Paso3Profesional'
import Paso4Jugador from './Paso4Jugador'
import SkillSeleccion from '../../components/SkillSeleccion'
import Paso4Profesional from './Paso4Profesional'
import { createSportman } from '../../redux/actions/sportman'
import { Context } from '../../context/Context'
import { setInitialSportman } from '../../redux/slices/sportman.slices'

const Paso1 = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { profileImage, coverImage } = useContext(Context)

  const { sport } = useSelector((state) => state.sports)
  const {
    user,
    sportmanGender,
    birthdate,
    city,
    category,
    position,
    profesionalType
  } = useSelector((state) => state.users)

  const [selectedRole, setSelectedRole] = useState(null)
  const [sportman, setSportman] = useState(false)
  const [stepsSportman, setStepsSportman] = useState(0)
  const [profesional, setProfesional] = useState(false)
  const [stepsProfesional, setStepsProfesional] = useState(0)
  const [sportmanValues, setSportmanValues] = useState({
    sport: sport.name,
    gender: sportmanGender,
    birthdate: birthdate,
    city: city,
    actualClub: '',
    description: '',
    category: category,
    position: position
  })
  const [profesionalValues, setProfesionalValues] = useState({
    rol: profesionalType,
    sport: sport.name,
    yearsOfExperience: '',
    city: city,
    actualClub: '',
    description: ''
  })
  const [data, setData] = useState({})

  useEffect(() => {
    setProfesionalValues((prevValues) => ({
      ...prevValues,
      sport: sport,
      city: city
    }))
  }, [sport, city])

  useEffect(() => {
    setSportmanValues((prevValues) => ({
      ...prevValues,
      gender: sportmanGender,
      sport: sport.name,
      birthdate: birthdate,
      city: city,
      position: position,
      category: category
    }))
  }, [sport, sportmanGender, birthdate, city, position, category])

  const handleRoleSelection = (role) => {
    setSelectedRole(role)
  }

  const handleNext = () => {
    if (selectedRole === 'Profesional del deporte') {
      setProfesional(true)
      setSportman(false)
    } else {
      setProfesional(false)
      setSportman(true)
    }
  }

  useEffect(() => {
    console.log('sportman changed: ', sportman)
  }, [sportman])

  useEffect(() => {
    console.log('stepsSportman changed: ', stepsSportman)
  }, [stepsSportman])

  const handleNavigation = async () => {
    if (sportman) {
      stepsSportman !== 1 && setStepsSportman((prev) => prev + 1)
      if (stepsSportman === 1) {
        const fullData = {
          ...sportmanValues,
          img_perfil: profileImage,
          img_front: coverImage,
          ...data
        }
        const body = {
          sportmanData: {
            type: selectedRole === 'Jugador' ? 'player' : 'coach',
            info: fullData,
            club: null
          },
          userId: user.user.id
        }

        console.log('body', body)
        dispatch(createSportman(body)).then((response) => {
          console.log('reponse: ')
          dispatch(
            setInitialSportman({
              id: response.payload.id,
              ...body.sportmanData
            })
          )
          navigation.navigate('SiguiendoJugadores')
        })
      }
    } else {
      setStepsProfesional((prev) => prev + 1)
      if (profesional && stepsProfesional === 1) {
        const fullData = {
          ...profesionalValues,
          img_perfil: profileImage,
          img_front: coverImage
        }
        const body = {
          sportmanData: {
            type: selectedRole === 'Jugador' ? 'player' : 'coach',
            info: fullData,
            club: null
          },
          userId: user.user.id
        }
        dispatch(createSportman(body))
      }

      if (stepsProfesional === 1) {
        setStepsProfesional(0)
        navigation.navigate('SiguiendoJugadores')
      }
    }
  }

  return (
    <ScrollView keyboardShouldPersistTaps={'always'}>
      <View
        style={{
          height: Dimensions.get('window').height,

          paddingBottom: 10,
          paddingHorizontal: 15,
          backgroundColor: Color.bLACK1SPORTSMATCH
        }}
      >
        <Image
          style={styles.imagenDeFondo}
          contentFit="cover"
          source={require('../../assets/imagen-de-fondo3.png')}
        />
        <View style={{ alignItems: 'center' }}>
          <View>
            <Pressable
              style={{
                paddingHorizontal: Padding.p_xl,
                marginBottom: 10,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.coolicon}
                contentFit="cover"
                source={require('../../assets/coolicon1.png')}
              />
              <Text
                style={{
                  color: Color.gREY2SPORTSMATCH,
                  marginLeft: 5,
                  textAlign: 'center',
                  fontSize: FontSize.t2TextSTANDARD_size,
                  fontFamily: FontFamily.t4TEXTMICRO,
                  textAlign: 'center'
                }}
              >
                Atrás
              </Text>
            </Pressable>
            <View>
              <Text
                style={{
                  fontSize: FontSize.t1TextSMALL_size,
                  color: Color.bALONCESTO,
                  textAlign: 'center',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  textAlign: 'center'
                }}
              >
                {!sportman && !profesional && 'Paso 2'}
                {sportman && stepsSportman === 0 && 'Paso 3'}
                {stepsSportman === 1 && 'Paso 4'}
                {profesional && stepsProfesional === 0 && 'Paso 3'}
                {stepsProfesional === 1 && 'Paso 4'}
              </Text>
              <Text
                style={{
                  fontSize: FontSize.size_9xl,
                  color: Color.wHITESPORTSMATCH,
                  textAlign: 'center',
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: '500',
                  color: Color.wHITESPORTSMATCH
                }}
              >
                {!sportman && !profesional && 'Escoge tu rol'}
                {sportman && stepsSportman === 0 && 'Define tus skills'}
                {stepsSportman === 1 && 'Unos detalles sobre ti'}
                {profesional && 'Unos detalles sobre ti'}
              </Text>

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

        <View style={{ marginTop: 30 }}>
          {!sportman && !profesional && (
            <View
              style={{
                ...styles.container
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
                    source={require('../../assets/simbolo6.png')}
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
                    source={require('../../assets/simbolo7.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}

          {sportman && stepsSportman === 1 && (
            <Paso4Jugador
              sportmanValues={sportmanValues}
              setSportmanValues={setSportmanValues}
            />
          )}
          {profesional && stepsProfesional === 0 && (
            <Paso3Profesional
              profesionalValues={profesionalValues}
              setProfesionalValues={setProfesionalValues}
            />
          )}
          {sportman && stepsSportman === 0 && (
            <SkillSeleccion setData={setData} data={data} />
          )}
          {profesional && stepsProfesional === 1 && <Paso4Profesional />}

          <View style={styles.botonesRoles}>
            <Pressable
              style={styles.siguiente}
              disabled={
                (stepsSportman === 1 && !profileImage) ||
                (stepsProfesional === 1 && !coverImage)
              }
              onPress={() =>
                !sportman && !profesional ? handleNext() : handleNavigation()
              }
            >
              <Text style={styles.siguiente1}>Siguiente</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  jugadorTypo1: {
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  jugadorTypo: {
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  simboloIconLayout: {
    height: 25,
    width: 25,
    position: 'absolute',
    left: 20
  },
  botonLayout1: {
    height: 70,
    width: 330
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
  escogeTuRol: {
    fontSize: FontSize.size_9xl,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
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
  },
  jugador: {
    color: Color.wHITESPORTSMATCH,
    fontWeight: '500'
  },
  botonesRoles: {
    width: '100%',
    marginTop: 30,
    paddingBottom: 30
  },
  siguiente1: {
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  siguiente: {
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    width: '90%',
    alignSelf: 'center'
  },
  selectedBackground: {
    backgroundColor: Color.bALONCESTO
  },
  container: {
    gap: 20,
    alignSelf: 'center',
    justifyContent: 'center'
  }
})

export default Paso1
