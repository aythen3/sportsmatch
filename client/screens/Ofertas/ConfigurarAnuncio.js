import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Touchable,
  TextInput
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
import ScrollableModal from '../../components/modals/ScrollableModal'
import { useStripe } from '@stripe/stripe-react-native'

const ConfigurarAnuncio = () => {
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()

  const { offer } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const { user } = useSelector((state) => state.users)
  const { allPositions } = useSelector((state) => state.positions)

  const [selectedProvince, setSelectedProvince] = useState('')

  const [selectedGender, setSelectedGender] = useState()
  const [retribucion, setRetribucion] = useState('')

  const [selectedRemuneration, setSelectedRemuneration] = useState()
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedPriority, setSelectedPriority] = useState()
  const [selectedPosition, setSelectedPosition] = useState()
  const [selectedSport, setSelectedSport] = useState('')

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

  const opciones = {
    futbol: ['Pase', 'Resistencia', 'Disparo', 'Regate'],
    baloncesto: ['Altura', 'Bote', 'Lanzamiento', 'Dribling'],
    futbolSala: ['Pase', 'Resistencia', 'Disparo', 'Regate'],
    hockey: ['Pase', 'Resistencia', 'Disparo', 'Dribling'],
    voleibol: ['Altura', 'Servicio', 'Recepción', 'Salto'],
    handball: ['Altura', 'Fuerza', 'Finta', 'Lanzamiento']
  }

  const remunerationData = ['Si', 'No']

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const handleChange = (name, value) => {
    setValues((prev) => ({
      ...prev,
      [name]: value
    }))
    if (name === 'province') {
      setSelectedProvince(value)
    }
  }

  const getClubData = async (id) => {
    try {
      const { data } = await axiosInstance.get(`club/${id}`)
      setClubData(data)
      setSelectedSport(data.sport)
      return data
    } catch (error) {
      console.error('Error fetching club data:', error)
    }
  }

  useEffect(() => {
    const fetchClubData = async () => {
      try {
        const data = await getClubData(club.id)
      } catch (error) {
        console.error('Error fetching club data:', error)
      }
    }
    fetchClubData()
  }, [])

  const [clientSecret, setClientSecret] = useState('')

  const handleGetGold = async () => {
    const res = await axiosInstance.post('/user/create-subscription', {
      priceId: 'price_1P4cNLGmE60O5ob7O3hTmP9d',
      customerId: user.user.stripeId
    })

    if (res.data) {
      setClientSecret(
        res.data.subscription.clientSecret.latest_invoice.payment_intent
          .client_secret
      )
    }
  }

  const { initPaymentSheet, presentPaymentSheet } = useStripe(null)

  React.useEffect(() => {
    const initializePaymentSheet = async () => {
      const { error } = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'azul',
        returnURL: 'stripe-example://payment-sheet'
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
      })
      if (error) {
        // Handle error
        console.log(error, 'error')
      } else {
        const { error } = await presentPaymentSheet()
        if (error) {
          console.log(error, 'error')
        } else {
          navigation.goBack()
        }
      }
    }

    if (clientSecret) {
      initializePaymentSheet()
    }
  }, [clientSecret, initPaymentSheet])

  const handleRegister = async () => {
    handleGetGold()
  }

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
          <View style={{ width: '100%', gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
              Posición
            </Text>
            {/* <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal)
              }}
              style={{ zIndex: 10000, ...styles.containerBox }}
            >
              <Text style={styles.inputText}>
                {selectedPosition
                  ? selectedPosition
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
                  {selectedSport && opciones[`futbol`]
                    .map((position, index) => {
                      return { name: position, id: index }
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
                          console.log(item.name)
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
                                allPositions.map((position) => {
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
              {showModal && (
                <ScrollableModal
                  visible={showModal}
                  closeModal={() => setShowModal(false)}
                  onSelectItem={setSelectedPosition}
                  options={opciones[`futbol`]}
                />
              )}
            </TouchableOpacity> */}
            <View style={{ width: '100%' }}>
              <TextInput
                inputMode="numeric"
                value={selectedPosition}
                placeholderTextColor={'#fff'}
                placeholder={selectedPosition || 'Indique una posición'}
                onChangeText={(text) => setSelectedPosition(text)}
                style={{ ...styles.containerBox, paddingHorizontal: 18 }}
              ></TextInput>
            </View>
          </View>
          <View style={{ width: '100%', gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
              Sexo
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowGenderModal(!showGenderModal)
              }}
              style={{ zIndex: 9000, ...styles.containerBox }}
            >
              <Text style={styles.inputText}>
                {!selectedGender
                  ? 'Selecciona un género'
                  : selectedGender === 'Female'
                    ? 'Mujer'
                    : 'Hombre'}
              </Text>
              {/* {showGenderModal && (
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
              )} */}
              {showGenderModal && (
                <ScrollableModal
                  visible={showGenderModal}
                  closeModal={() => setShowGenderModal(false)}
                  onSelectItem={setSelectedGender}
                  options={[`Hombre`, 'Mujer']}
                />
              )}
            </TouchableOpacity>
          </View>
          {/* <View style={{ width: '100%'  }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>Provincia</Text>
            <Input
              value={selectedProvince}
              placeholder="Ingrese la provincia"
              onChangeText={(text) => setSelectedProvince(text)}
              style={styles.inputText}
            />
          </View> */}
          <View style={{ width: '100%', gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
              Categoría
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowCategoryModal(true)
              }}
              style={{ zIndex: 8000, ...styles.containerBox }}
            >
              <Text style={styles.inputText}>
                {selectedCategory || 'Selecciona una categoría'}
              </Text>
              {/* {showCategoryModal && (
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
              )} */}
              {showCategoryModal && (
                <ScrollableModal
                  visible={showCategoryModal}
                  closeModal={() => setShowCategoryModal(false)}
                  onSelectItem={setSelectedCategory}
                  options={categories}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
              Urgencia
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowPriorityModal(!showPriorityModal)
              }}
              style={{ zIndex: 7000, ...styles.containerBox }}
            >
              <Text style={styles.inputText}>
                {selectedPriority || 'Seleccione el nivel de urgencia'}
              </Text>
              {/* {showPriorityModal && (
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
                          borderBottomWidth:
                            index !== numbers.length - 1 ? 1 : 0,
                          borderBottomColor: '#ccc',
                          ...styles.optionText
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )} */}
              {showPriorityModal && (
                <ScrollableModal
                  visible={showPriorityModal}
                  closeModal={() => setShowPriorityModal(false)}
                  onSelectItem={setSelectedPriority}
                  options={numbers}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
              Retribución
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowRemunerationModal(!showRemunerationModal)
              }}
              style={{ zIndex: 6000, ...styles.containerBox }}
            >
              <Text style={styles.inputText}>
                {selectedRemuneration || 'Seleccione retribución'}
              </Text>

              {/* {showRemunerationModal && (
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
              )} */}
              {showRemunerationModal && (
                <ScrollableModal
                  visible={showRemunerationModal}
                  closeModal={() => setShowRemunerationModal(false)}
                  onSelectItem={setSelectedRemuneration}
                  options={remunerationData}
                />
              )}
            </TouchableOpacity>
          </View>
          {selectedRemuneration == 'Si' && (
            <View style={{ width: '100%', gap: 8 }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
                Importe anual
              </Text>

              <View style={{ width: '100%' }}>
                <TextInput
                  inputMode="numeric"
                  value={retribucion}
                  placeholderTextColor={'#fff'}
                  placeholder={retribucion || 'Ingrese retribución anual'}
                  onChangeText={(e) => setRetribucion(e)}
                  style={{ ...styles.containerBox, paddingHorizontal: 18 }}
                ></TextInput>
              </View>
            </View>
          )}
        </View>

        <View style={styles.botonsOferta}>
          <View>
            <TouchableOpacity
              onPress={() => handleRegister()}
              style={[styles.botonPromocion, styles.boitonCrearFlexBox]}
            >
              <Text style={[styles.promocionarOferta, styles.ofertaTypo]}>
                Promocionar la oferta
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.boitonCrear, styles.boitonCrearFlexBox]}
              onPress={async () => {
                if (!editOffer) {
                  const data = {
                    offerData: {
                      sexo:
                        (selectedGender == 'Hombre' && 'Male') ||
                        (selectedGender == 'Mujer' && 'Female'),
                      category: selectedCategory,
                      urgency: selectedPriority,
                      prop1: retribucion,
                      retribution:
                        selectedRemuneration === 'Si'
                          ? true
                          : selectedRemuneration === 'No'
                            ? false
                            : null,
                      posit: selectedPosition,
                      paused: false,
                      province: selectedProvince,
                      sport: selectedSport
                    },

                    clubId: club?.id
                  }
                  console.log('SENDIND DATAAAA', data)
                  await dispatch(setOffer(data)).then((data) =>
                    dispatch(getAllOffers())
                  )
                  navigation.navigate('OfertasEmitidas')
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
                    ...(selectedGender && {
                      sexo:
                        (selectedGender == 'Hombre' && 'Male') ||
                        (selectedGender == 'Mujer' && 'Female')
                    }),
                    ...(selectedCategory && { category: selectedCategory }),
                    ...(selectedPriority && { urgency: selectedPriority }),
                    ...(retribucion && { prop1: 'asdasd' }),
                    ...(selectedPosition && { posit: selectedPosition }),
                    ...(selectedRemuneration && {
                      retribution: selectedRemuneration === 'Si' ? true : false
                    }),
                    province: selectedProvince
                  }
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
        </View>
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
    height: '100%',
    gap: 25
  },
  configurarAnuncio: {
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: '100%'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  containerBox: {
    borderWidth: 0.5,
    color: 'white',
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
    gap: 15
  },
  inputText: {
    marginLeft: 20,
    color: Color.colorWhitesmoke,
    fontFamily: FontFamily.t4TEXTMICRO
  }
})

export default ConfigurarAnuncio
