import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Touchable
} from 'react-native'
import {
  Color,
  Padding,
  Border,
  FontSize,
  FontFamily
} from '../../GlobalStyles'
import Input from '../../components/Input'
import { handleSubmit } from './utils/handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomModal from '../../components/modals/CustomModal'
import axiosInstance from '../../utils/apiBackend'
import { getClub } from '../../redux/actions/club'
import { getAllOffers, setOffer, updateOffer } from '../../redux/actions/offers'

const ConfigurarAnuncio = () => {
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()

  const { offer } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const { user } = useSelector((state) => state.users)
  const { allPositions } = useSelector((state) => state.positions)

  const [selectedGender, setSelectedGender] = useState()
  const [selectedRemuneration, setSelectedRemuneration] = useState()
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedPriority, setSelectedPriority] = useState()
  const [selectedPosition, setSelectedPosition] = useState()

  const [showRemunerationModal, setShowRemunerationModal] = useState()
  const [showPriorityModal, setShowPriorityModal] = useState()
  const [showModal, setShowModal] = useState(false)
  const [showGenderModal, setShowGenderModal] = useState(false)
  const [showCategoryModal, setShowCategoryModal] = useState(false)

  const [clubPositions, setClubPositions] = useState()

  const [clubData, setClubData] = useState()
  const { editOffer } = route.params || false
  const { offerId } = route.params || false

  const statesCleanUp = (stateToUpdate) => {
    const stateSetters = {
      selectedGender: setSelectedGender,
      selectedRemuneration: setSelectedRemuneration,
      selectedCategory: setSelectedCategory,
      selectedPriority: setSelectedPriority,
      selectedPosition: setSelectedPosition
    }

    // Iterate over the state setters and update the states
    for (const [stateKey, setState] of Object.entries(stateSetters)) {
      if (stateKey !== stateToUpdate) {
        setState()
      }
    }
  }

  const [values, setValues] = useState({
    sexo: '',
    category: '',
    urgency: '',
    retribution: ''
  })

  const categories = [
    'Escuela (4-6 años)',
    'Prebenjamín (6-8 años)',
    'Benjamín (8-10 años)',
    'Alevín (10-12 años)',
    'Infantil (12-14 años)',
    'Cadete (14-16 años)',
    'Juvenil (16-18 años)',
    'Senior (+18 años)',
    'Veteranos (+30 años)'
  ]

  const remunerationData = ['Si', 'No']

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const getClubData = async (id) => {
    console.log('id: ', id)
    try {
      const { data } = await axiosInstance.get(`club/${id}`)
      setClubData(data)
      console.log('settingData: ', data)
      return data
    } catch (error) {
      console.error('Error fetching club data:', error)
    }
  }

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const data = await getClubData(club.id)
        console.log('club data:', data)
      } catch (error) {
        console.error('Error fetching club data:', error)
      }
    }
    fetchClubData()
  }, [])

  if (!clubData || !allPositions)
    return <View style={{ flex: 1, backgroundColor: '#000' }} />
  return (
    <SafeAreaView style={styles.configurarAnuncio}>
      <View style={styles.contenido}>
        <View style={styles.topContainer}>
          <Text style={styles.configuraTuOferta}>Configura tu oferta</Text>
          <Text
            onPress={() => {
              statesCleanUp()
              navigation.goBack()
            }}
            style={styles.configuraTuOferta}
          >
            X
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal)
            }}
            style={{ zIndex: 10000, ...styles.containerBox }}
          >
            <Text style={styles.inputText}>
              {selectedPosition
                ? selectedPosition?.name.charAt(0).toUpperCase() +
                  selectedPosition?.name.slice(1).toLowerCase()
                : 'Selecciona una posición'}
            </Text>
            {showModal && (
              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  width: '100%',
                  borderRadius: 15,
                  borderWidth: 1,
                  backgroundColor: Color.bLACK1SPORTSMATCH
                }}
              >
                {allPositions
                  .filter(
                    (position) =>
                      position.sport?.name === clubData.sports[0]?.name
                  )
                  .map((position) => {
                    return { name: position?.name, id: position.id }
                  })
                  .map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={{
                        paddingVertical: 3,
                        width: '100%',
                        alignItems: 'center'
                      }}
                      onPress={() => {
                        setSelectedPosition(item)
                        setShowModal(false)
                      }}
                    >
                      <Text
                        style={{
                          width: 200,
                          paddingBottom: 5,
                          textAlign: 'center',
                          borderBottomWidth:
                            index !==
                            allPositions
                              .filter(
                                (position) =>
                                  position.sport?.name ===
                                  clubData.sports[0]?.name
                              )
                              .map((position) => {
                                return position?.name
                              }).length -
                              1
                              ? 1
                              : 0,
                          borderBottomColor: '#ccc',
                          ...styles.optionText
                        }}
                      >
                        {item?.name.charAt(0).toUpperCase() +
                          item?.name.slice(1).toLowerCase()}
                      </Text>
                    </TouchableOpacity>
                  ))}
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowGenderModal(!showGenderModal)
            }}
            style={{ zIndex: 9000, ...styles.containerBox }}
          >
            <Text style={styles.inputText}>
              {!selectedGender
                ? 'Selecciona un genero'
                : selectedGender === 'Female'
                  ? 'Mujer'
                  : 'Hombre'}
            </Text>
            {showGenderModal && (
              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  width: '100%',
                  borderRadius: 15,
                  borderWidth: 1,
                  backgroundColor: Color.bLACK1SPORTSMATCH
                }}
              >
                {['Male', 'Female'].map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 3,
                      width: '100%',
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      setSelectedGender(item)
                      setShowGenderModal(false)
                    }}
                  >
                    <Text
                      style={{
                        width: 200,
                        paddingBottom: 5,
                        textAlign: 'center',
                        borderBottomWidth: index !== 1 ? 1 : 0,
                        borderBottomColor: '#ccc',
                        ...styles.optionText
                      }}
                    >
                      {item === 'Female' ? 'Mujer' : 'Hombre'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowCategoryModal(!showCategoryModal)
            }}
            style={{ zIndex: 8000, ...styles.containerBox }}
          >
            <Text style={styles.inputText}>
              {selectedCategory || 'Selecciona una categoría'}
            </Text>
            {showCategoryModal && (
              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  width: '100%',
                  borderRadius: 15,
                  borderWidth: 1,
                  backgroundColor: Color.bLACK1SPORTSMATCH
                }}
              >
                {categories.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 3,
                      width: '100%',
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      setSelectedCategory(item)
                      setShowCategoryModal(false)
                    }}
                  >
                    <Text
                      style={{
                        width: 200,
                        paddingBottom: 5,
                        textAlign: 'center',
                        borderBottomWidth:
                          index !== categories.length - 1 ? 1 : 0,
                        borderBottomColor: '#ccc',
                        ...styles.optionText
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowPriorityModal(!showPriorityModal)
            }}
            style={{ zIndex: 7000, ...styles.containerBox }}
          >
            <Text style={styles.inputText}>
              {selectedPriority || 'Seleccione el nivel de urgencia'}
            </Text>
            {showPriorityModal && (
              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  width: '100%',
                  borderRadius: 15,
                  borderWidth: 1,
                  backgroundColor: Color.bLACK1SPORTSMATCH
                }}
              >
                {numbers.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 3,
                      width: '100%',
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      setSelectedPriority(item)
                      setShowPriorityModal(false)
                    }}
                  >
                    <Text
                      style={{
                        width: 200,
                        paddingBottom: 5,
                        textAlign: 'center',
                        borderBottomWidth: index !== numbers.length - 1 ? 1 : 0,
                        borderBottomColor: '#ccc',
                        ...styles.optionText
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setShowRemunerationModal(!showRemunerationModal)
            }}
            style={{ zIndex: 6000, ...styles.containerBox }}
          >
            <Text style={styles.inputText}>
              {selectedRemuneration || 'Seleccione remuneracion'}
            </Text>
            {showRemunerationModal && (
              <View
                style={{
                  position: 'absolute',
                  top: 40,
                  width: '100%',
                  borderRadius: 15,
                  borderWidth: 1,
                  backgroundColor: Color.bLACK1SPORTSMATCH
                }}
              >
                {remunerationData.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      paddingVertical: 3,
                      width: '100%',
                      alignItems: 'center'
                    }}
                    onPress={() => {
                      setSelectedRemuneration(item)
                      setShowRemunerationModal(false)
                    }}
                  >
                    <Text
                      style={{
                        width: 200,
                        paddingBottom: 5,
                        textAlign: 'center',
                        borderBottomWidth:
                          index !== remunerationData.length - 1 ? 1 : 0,
                        borderBottomColor: '#ccc',
                        ...styles.optionText
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.botonsOferta}
          onPress={() => navigation.navigate('SiguiendoJugadores')}
        >
          <View>
            <View style={[styles.botonPromocion, styles.boitonCrearFlexBox]}>
              <Text style={[styles.promocionarOferta, styles.ofertaTypo]}>
                Promocionar la oferta
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.boitonCrear, styles.boitonCrearFlexBox]}
              onPress={async () => {
                if (!editOffer) {
                  const data = {
                    offerData: {
                      sexo: selectedGender,
                      category: selectedCategory,
                      urgency: selectedPriority,
                      retribution:
                        selectedRemuneration === 'Si'
                          ? true
                          : selectedRemuneration === 'No'
                            ? false
                            : null
                    },
                    positionId: selectedPosition?.id,
                    clubId: club?.id
                  }
                  // console.log('data: ', data)
                  await dispatch(setOffer(data)).then((data) =>
                    dispatch(getAllOffers())
                  )

                  navigation.goBack()
                } else {
                  // const data = {
                  //   offerData: {
                  //     ...(selectedGender && { sexo: selectedGender }),
                  //     ...(selectedCategory && { category: selectedCategory }),
                  //     ...(selectedPriority && { urgency: selectedPriority }),
                  //     ...(selectedRemuneration && {
                  //       retribution:
                  //         selectedRemuneration === 'Si' ? true : false
                  //     })
                  //   },
                  //   ...(selectedPosition && {
                  //     positionId: selectedPosition.id
                  //   }),
                  //   ...(club && { clubId: club.id })
                  // }
                  const data = {
                    ...(selectedGender && { sexo: selectedGender }),
                    ...(selectedCategory && { category: selectedCategory }),
                    ...(selectedPriority && { urgency: selectedPriority }),
                    ...(selectedRemuneration && {
                      retribution: selectedRemuneration === 'Si' ? true : false
                    }),
                    ...(selectedPosition && {
                      positionId: selectedPosition.id
                    })
                  }
                  // console.log('data: ', data)
                  await dispatch(updateOffer({ id: offerId, body: data })).then(
                    (data) => dispatch(getAllOffers())
                  )

                  navigation.goBack()
                }
              }}
            >
              <Text style={[styles.crearOferta, styles.ofertaTypo]}>
                {editOffer ? 'Editar oferta' : 'Crear oferta'}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boitonCrearFlexBox: {
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    borderRadius: Border.br_81xl,
    alignItems: 'center'
  },
  ofertaTypo: {
    fontWeight: '700',
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  optionText: {
    fontSize: 16,
    color: Color.gREY2SPORTSMATCH
  },
  configuraTuOferta: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  title: {
    fontSize: FontSize.t2TextSTANDARD_size,
    alignSelf: 'stretch',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  masculino: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  promocionarOferta: {
    color: Color.wHITESPORTSMATCH
  },
  botonPromocion: {
    backgroundColor: Color.colorDimgray_100
  },
  crearOferta: {
    color: Color.bLACK1SPORTSMATCH
  },
  boitonCrear: {
    marginTop: 13,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  botonsOferta: {
    // marginTop: 50,
    zIndex: -5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  contenido: {
    top: '5%',
    marginBottom: '5%',
    gap: 25
  },
  configurarAnuncio: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  containerBox: {
    borderWidth: 0.5,
    position: 'relative',
    borderColor: Color.colorWhitesmoke,
    borderRadius: 50,
    width: '100%',
    height: 40,
    justifyContent: 'center'
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 20
  },
  inputText: {
    marginLeft: 20,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.t4TEXTMICRO
  }
})

export default ConfigurarAnuncio
