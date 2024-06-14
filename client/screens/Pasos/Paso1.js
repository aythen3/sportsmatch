import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Image } from 'expo-image'
import {
  BackHandler,
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
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
import { createSportman, updateSportman } from '../../redux/actions/sportman'
import { Context } from '../../context/Context'
import { setInitialSportman } from '../../redux/slices/sportman.slices'
import Visores from './visores'
import StepsJugador from './StepsJugador'
import Paso2Jugador from './Paso2Jugador'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { clearUser, setMainColor } from '../../redux/slices/users.slices'
import { setColor } from '../../utils/handles/HandlerSportColor'

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
  const [sportColor, setSportColor] = useState('#00F0FF')

  const [sportman, setSportman] = useState(false)
  const [stepsSportman, setStepsSportman] = useState(0)
  const [selectedCity, setSelectedCity] = useState()
  const [profesional, setProfesional] = useState(false)
  const [invitado, setInvitado] = useState(false)
  const { height, width } = useWindowDimensions();
  const { sportman: sportmanRedux } = useSelector((state) => state.sportman)
  const { loged } = useSelector((state) => state.users)
  const [invitadoStep, setInvitadoStep] = useState(0)
  const [stepsProfesional, setStepsProfesional] = useState(0)
  const [selectedSport, setSelectedSport] = useState(null)
  const [sportmanValues, setSportmanValues] = useState({
    sport: sport?.name || 'Voley',
    gender: sportmanGender || "Masculino",
    birthdate: birthdate || 2020,

    city: city || 'otra',
    actualClub: '',
    description: '',
    category: category || 'Prebenjamín (6-8 años)"',
    position: position || ''
  })
  const [profesionalValues, setProfesionalValues] = useState({
    rol: profesionalType,
    sport: sport.name,
    yearsOfExperience: '',
    city: '',
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
    if (selectedRole == null) {
      return
    }
    if (selectedRole === 'Invitado') {
      if (Object.keys(sportmanRedux).length !== 0) {
        navigation.navigate('SiguiendoJugadores')
        return
      }
      const fullData = {
        ...sportmanValues,
        sport: "Invitado",
        img_perfil: profileImage || '',
        img_front: coverImage || '',
        attack: data?.attack || '100',
        speed: data?.speed || '100',
        height: data?.height || '100',
        defense: data?.defense || '100',
        prop1: data?.prop1 || '',
        prop2: data?.prop2 || '',
        prop3: data?.prop3 || '',
        nickname: user?.user?.nickname || '',
        city: sportmanValues.city || ''
      }
      const body = {
        sportmanData: {
          type: 'invitado',
          info: fullData,
          club: null
        },
        userId: user.user.id
      }

      dispatch(createSportman(body)).then((response) => {
        dispatch(
          setInitialSportman({
            id: response.payload.id,
            ...body.sportmanData
          })
        )
        navigation.navigate('SiguiendoJugadores')
      })


    }

    if (selectedRole === 'Profesional del deporte') {
      setProfesional(true)
      return setSportman(false)
    }
    if (selectedRole === 'Invitado') {

      setInvitadoStep((prev) => prev + 1)
    }
    else {

      setProfesional(false)
      setSportman(true)
    }
  }


  // const backAction = async () => {
  //   // Despacha tu acción de Redux aquí
  //   await handleBackSteps();
  //   return true; // Indica que el evento fue manejado
  // };

  // const backHandlerr = BackHandler.addEventListener(
  //   'hardwareBackPress',
  //   backAction // Cambiado de handleBackSteps a backAction
  // );

  // useEffect(() => {
  //   const backAction = () => {
  //     if (navigation.isFocused()) {
  //       handleBackSteps()
  //       return true;
  //     }

  //   };
  //   const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);
  //   return () => {
  //     backHandler.remove();}
  // }, [])



  // useEffect(() => {

  //   return async () => {
  //     console.log("me despido de ti y me voy")
  //   } // Remueve el listener al desmontar el componente
  // }, [stepsSportman, stepsProfesional, loged]);


  useEffect(() => {
    const color = setColor(selectedSport?.name)
    setSportColor(color)

  }, [selectedSport, profesional, sportman])



  const handleNavigation = async () => {


    if (selectedRole === "Jugador" && selectedSport == null) {
      return
    }
    if (sportman && stepsSportman === 1) {
      return setStepsSportman((prev) => prev + 1)

    }
    if (sportman) {

      stepsSportman !== 2 && setStepsSportman((prev) => prev + 1)
      if (stepsSportman === 2) {


        const fullData = {
          ...sportmanValues,
          img_perfil: profileImage,
          img_front: coverImage,
          attack: data?.attack,
          speed: data?.speed,
          height: data?.height,
          defense: data?.defense,
          prop1: data?.prop1,
          prop2: data?.prop2,
          prop3: data?.prop3,
          nickname: user?.user?.nickname || '',
          city: sportmanValues.city || ''
        }
        const body = {
          sportmanData: {
            type: selectedRole === 'Jugador' ? 'player' : 'coach',
            info: fullData,
            club: null
          },
          userId: user.user.id
        }
        if (Object.keys(sportmanRedux).length == 0) {


          dispatch(createSportman(body)).then((response) => {
            dispatch(
              setInitialSportman({
                id: response.payload.id,
                ...body.sportmanData
              })
            )
            const color = !sportman && !profesional
              && "#E1451E" || profesional && '#00F0FF' || !selectedSport && '#E1451E' || sportColor
            dispatch(setMainColor(color))
            navigation.navigate('SiguiendoJugadores')
          })
        } else {
          const upd = {
            id: sportmanRedux.id,
            newData: fullData,
            type: "player"
          }
          dispatch(updateSportman(upd)).then((response) => {
            dispatch(
              setInitialSportman({
                id: sportmanRedux.id,
                ...body.sportmanData
              })
            )

            navigation.navigate('SiguiendoJugadores')
          })
        }
      }
    } else {
      stepsProfesional !== 1 && setStepsProfesional((prev) => prev + 1)
      if (profesional && stepsProfesional === 1) {
 
        const fullData = {
          ...profesionalValues,
          img_perfil: profileImage,
          img_front: coverImage,
          nickname: user?.user?.nickname || '',
          city: selectedCity || ''
        }
        const body = {
          sportmanData: {
            type: selectedRole === 'Jugador' ? 'player' : 'coach',
            info: fullData,
            club: null
          },
          userId: user.user.id
        }
        if (Object.keys(sportmanRedux).length == 0) {

          dispatch(createSportman(body)).then((response) => {
            dispatch(
              setInitialSportman({
                id: response.payload.id,
                ...body.sportmanData
              })
            )
            const color = !sportman && !profesional
              && "#E1451E" || profesional && '#00F0FF' || !selectedSport && '#E1451E' || sportColor
            dispatch(setMainColor(color))

            navigation.navigate('SiguiendoJugadores')
          })
        } else {
          const upd = {
            id: sportmanRedux.id,
            newData: fullData,
            type: "player"
          }
          dispatch(updateSportman(upd)).then((response) => {
            dispatch(
              setInitialSportman({
                id: sportmanRedux.id,
                ...body.sportmanData
              })
            )
            navigation.navigate('SiguiendoJugadores')
          })
        }
      }
    }
  }


  const handleBackSteps = async () => {
    if (!loged) {
      if (!sportman && !profesional && !invitado) {
        await dispatch(clearUser())
        navigation.navigate('LoginSwitch')
        return true
      }
      if (stepsProfesional > 0) {
        setStepsProfesional((prev) => prev - 1)
        return true
      }
      if (stepsSportman > 0) {
        setStepsSportman((prev) => prev - 1)
        return true
      }
      else {
        setSportman(false)
        setProfesional(false)
        setInvitado(false)
      }
      return true
    }
    else {
      BackHandler.removeEventListener('hardwareBackPress', backHandler)
      navigation.goBack()
    }
  }

  return (
    <View
      style={{
        height: height,
        width: width,
        flex: 1,
        paddingHorizontal: 0,
        paddingTop:10,
        backgroundColor: Color.bLACK1SPORTSMATCH
      }}
    >
      {!sportman && !profesional && !invitado && (
        <Image
          style={styles.imagenDeFondo}
          contentFit="cover"
          source={require('../../assets/turolfondo.png')}
        />
      )}
      {sportman && stepsSportman === 0 && (
        <Image
          style={styles.imagenDeFondo}
          contentFit="cover"
          source={require('../../assets/tudeportefondo.png')}
        />
      )}
      {sportman && stepsSportman === 1 && (
        <Image
          style={styles.imagenDeFondo}
          contentFit="cover"
          source={require('../../assets/skillsfondo.png')}
        />
      )}
      {sportman && stepsSportman === 2 && (
        <Image
          style={styles.imagenDeFondo}
          contentFit="cover"
          source={require('../../assets/sobretifondo.png')}
        />
      )}
      {profesional && (
        <Image
          style={styles.imagenDeFondo}
          contentFit="cover"
          source={require('../../assets/sobretifondo.png')}
        />
      )}


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
            onPress={handleBackSteps}
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
                color: !sportman && !profesional
                  && "#E1451E" || profesional && '#00F0FF' || !selectedSport && '#E1451E' || sportColor,
                textAlign: 'center',
                fontFamily: FontFamily.t4TEXTMICRO,
                textAlign: 'center'
              }}
            >
              {!sportman && !profesional && 'Paso 1'}
              {sportman && stepsSportman === 0 && 'Paso 2'}
              {stepsSportman === 1 && 'Paso 3'}
              {stepsSportman === 2 && 'Paso 4'}

              {profesional && stepsProfesional === 0 && 'Paso 2'}
              {stepsProfesional === 1 && 'Paso 3'}
              {/* {stepsProfesional === 0 && 'Paso 2'} */}

            </Text>
            <Text
              style={{
                marginTop: -5,
                marginBottom: -3,
                fontSize: FontSize.size_9xl,
                color: Color.wHITESPORTSMATCH,
                textAlign: 'center',
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: '500',
                color: Color.wHITESPORTSMATCH
              }}
            >
              {!sportman && !profesional && !invitado && 'Escoge tu rol'}
              {invitado && 'Unos detalles sobre ti'}
              {sportman && stepsSportman === 0 && 'Escoge tu deporte'}
              {sportman && stepsSportman === 1 && "Define tus skills"}
              {stepsSportman === 2 && 'Unos detalles sobre ti'}

              {profesional && 'Unos detalles sobre ti'}
            </Text>

            <Lines
              selectedSport={selectedSport}
              profesional={profesional}

              index={
                !sportman && !profesional
                  ? 1
                  : sportman && stepsSportman === 0 ||
                    profesional && stepsProfesional === 0
                    ? 2
                    : stepsProfesional === 1 || stepsSportman === 1
                      ? 3
                      : '' || stepsSportman === 2
                        ? 4
                        : ''
              }
            />
          </View>
        </View>
      </View>

      <View style={{ height: "100%", justifyContent: "space-between", flex: 1, paddingTop: "6%" }}>
        {!sportman && !profesional && !invitado && (
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
            <View style={styles.botonLayout1}>
              <TouchableOpacity
                style={[
                  styles.rectangulo,
                  selectedRole === 'Invitado' &&
                  styles.selectedBackground
                ]}
                onPress={() => handleRoleSelection('Invitado')}
              >
                <View style={{ position: "absolute", left: 18 }}><Visores></Visores></View>

                <Text
                  style={[
                    styles.jugador,
                    styles.jugadorTypo,
                    selectedRole === 'Profesional del deporte' &&
                    styles.selectedText
                  ]}
                >
                  Invitado
                </Text>
                {/* <Image
                    style={styles.simboloIconLayout}
                    contentFit="cover"
                    source={require('../../assets/simbolo7.png')}
                  /> */}
              </TouchableOpacity>
            </View>
          </View>
        )}

        {sportman && stepsSportman === 1 && (
          <SkillSeleccion selectedSport={selectedSport} setData={setData} data={data} />

          // <Paso4Jugador
          //   selectedCity={selectedCity}
          //   setSelectedCity={setSelectedCity}
          //   sportmanValues={sportmanValues}
          //   setSportmanValues={setSportmanValues}
          // />
        )}
        {sportman && stepsSportman === 2 && (
          //  <SkillSeleccion setData={setData} data={data} />

          <Paso4Jugador
            selectedSport={selectedSport}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            sportmanValues={sportmanValues}
            setSportmanValues={setSportmanValues}
          />
        )}
        {invitado && (
          <Paso4Jugador
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            sportmanValues={sportmanValues}
            setSportmanValues={setSportmanValues}
          />
        )}
        {profesional && stepsProfesional === 0 && (
          <Paso3Profesional
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            profesionalValues={profesionalValues}
            setProfesionalValues={setProfesionalValues}
          />
        )}
        {sportman && stepsSportman === 0 && (

          <Paso2Jugador setSelectedSport={setSelectedSport} selectedSport={selectedSport}></Paso2Jugador>

        )}
        {profesional && stepsProfesional === 1 &&
          <Paso4Profesional
            profesionalValues={profesionalValues}
            setProfesionalValues={setProfesionalValues}
          />
        }

        <View style={styles.botonesRoles}>
          <Pressable
            style={styles.siguiente}

            onPress={() =>
              !sportman && !profesional ? handleNext() : handleNavigation()
            }
          >
            <Text style={styles.siguiente1}>Siguiente</Text>
          </Pressable>
        </View>
      </View>
    </View>
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
    width: '100%',
    zIndex: 0,
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
    paddingVertical: 25,
    paddingHorizontal: 10
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
    width: '100%',
    alignSelf: 'center'
  },
  selectedBackground: {
    backgroundColor: Color.bALONCESTO
  },
  container: {
    gap: 20,
    alignSelf: 'center',
    justifyContent: 'center',
  }
})

export default Paso1
