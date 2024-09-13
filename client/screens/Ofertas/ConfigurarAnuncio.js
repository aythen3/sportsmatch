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
import { Entypo } from '@expo/vector-icons'

const ConfigurarAnuncio = () => {
  const navigation = useNavigation()

  const route = useRoute()

  const dispatch = useDispatch()

  const { offer, offers } = useSelector((state) => state.offers)
  const { club } = useSelector((state) => state.clubs)
  const { user } = useSelector((state) => state.users)
  const { allPositions } = useSelector((state) => state.positions)

  const [selectedProvince, setSelectedProvince] = useState('')

  const [selectedGender, setSelectedGender] = useState('')
  const [retribucion, setRetribucion] = useState('')

  const [selectedRemuneration, setSelectedRemuneration] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedRol, setSelectedRol] = useState('Deportista')

  const [selectedPriority, setSelectedPriority] = useState('')
  const [selectedPosition, setSelectedPosition] = useState('')
  const [selectedSport, setSelectedSport] = useState('')

  const [showRemunerationModal, setShowRemunerationModal] = useState()
  const [showPriorityModal, setShowPriorityModal] = useState()
  const [showModal, setShowModal] = useState(false)
  const [showGenderModal, setShowGenderModal] = useState(false)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showRolModal, setShowRolModal] = useState(false)
  const [showError, setShowError] = useState('')

  const [showPositionModal, setShowPositionModal] = useState(false)

  const [province, setProvince] = useState('')

  const [clubPositions, setClubPositions] = useState()

  const [clubData, setClubData] = useState()
  const { editOffer } = route.params || false
  const { offerId } = route.params || false
  const { offerData } = route.params || false
  const { promocionar } = route.params || false

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

  // selectedGender &&
  //                   selectedPriority &&
  //                   retribucion &&
  //                   selectedRemuneration &&
  //                   selectedPosition &&
  //                   selectedProvince &&
  //                   selectedSport &&
  //                   selectedRol

  useEffect(() => {
    setShowError('')
  }, [
    selectedGender,
    selectedPriority,
    selectedRemuneration,
    selectedPosition,
    selectedProvince,
    selectedSport,
    selectedRol,
    selectedCategory
  ])

  useEffect(() => {
    if (offerData?.retribution) {
      setSelectedRemuneration('Si')
    }
    if (promocionar) {
      handleRegister()
    }
  }, [])

  const [values, setValues] = useState({
    sexo: '',
    category: '',
    urgency: '',
    retribution: ''
  })

  const categories = [
    'Todas las categorias',
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
  const opcionesProfesional = [
    'Entrenador/a',
    'Preparador/a físico/a',
    'Analista técnico/a',
    'Psicólogo/a',
    'Fisioterapeuta',
    'Nutricionista'
  ]
  const roles = ['Deportista', 'Profesional']

  const remunerationData = ['Si', 'No']

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
  console.log(offer, 'esto es de la oferta')

  if (!clubData || !allPositions)
    return <View style={{ flex: 1, backgroundColor: '#000' }} />
  return (
    <SafeAreaView style={styles.configurarAnuncio}>
      <ScrollView
        style={{ flex: 1, flexGrow: 1 }}
        contentContainerStyle={styles.contenido}
      >
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
          {true && (
            <View style={{ width: '100%', gap: 8 }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
                Rol
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setShowRolModal(true)
                }}
                style={{ zIndex: 8000, ...styles.containerBox }}
              >
                <Text style={styles.inputText}>
                  {!selectedRol && !offerData && 'Selecciona un rol'}
                  {selectedRol === '' && offerData?.prop4}
                  {selectedRol}
                </Text>
                <Entypo
                  style={{ color: '#fff', marginRight: 15 }}
                  name={showRolModal ? 'chevron-up' : 'chevron-down'}
                  color="#fff"
                  size={18}
                />

                {showRolModal && (
                  <ScrollableModal
                    visible={showRolModal}
                    closeModal={() => setShowRolModal(false)}
                    onSelectItem={setSelectedRol}
                    options={roles}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
          {selectedRol !== 'Profesional' ? (
            <View style={{ width: '100%', gap: 8 }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
                Posición
              </Text>
              <View style={{ width: '100%' }}>
                <TextInput
                  value={selectedPosition || offerData?.posit}
                  placeholderTextColor={'#fff'}
                  placeholder={
                    selectedPosition ||
                    offerData?.posit ||
                    'Indique una posición'
                  }
                  onChangeText={(text) => setSelectedPosition(text)}
                  style={{ ...styles.containerBox, paddingHorizontal: 18 }}
                ></TextInput>
              </View>
            </View>
          ) : (
            <View style={{ width: '100%', gap: 8 }}>
              <Text style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>
                Posición
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setShowPositionModal(true)
                }}
                style={{ zIndex: 8000, ...styles.containerBox }}
              >
                <Text style={styles.inputText}>
                  {!selectedPosition && !offerData && 'Indique una posición'}
                  {selectedPosition === '' && offerData?.prop4}
                  {selectedPosition}
                </Text>
                <Entypo
                  style={{ color: '#fff', marginRight: 15 }}
                  name={showPositionModal ? 'chevron-up' : 'chevron-down'}
                  color="#fff"
                  size={18}
                />

                {showPositionModal && (
                  <ScrollableModal
                    visible={showPositionModal}
                    closeModal={() => setShowPositionModal(false)}
                    onSelectItem={setSelectedPosition}
                    options={opcionesProfesional}
                  />
                )}
              </TouchableOpacity>
            </View>
          )}
          {selectedRol !== 'Profesional' && (
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
                  {!selectedGender &&
                    !offerData?.sexo &&
                    'Selecciona un género'}
                  {selectedGender === '' &&
                    offerData?.sexo &&
                    (offerData.sexo === 'Male' ? 'Hombre' : 'Mujer')}
                  {selectedGender}
                </Text>
                <Entypo
                  style={{ color: '#fff', marginRight: 15 }}
                  name={showGenderModal ? 'chevron-up' : 'chevron-down'}
                  color="#fff"
                  size={18}
                />

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
          )}
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
                {!selectedCategory && !offerData && 'Selecciona una categoría'}
                {selectedCategory == '' && offerData?.category}
                {selectedCategory}
              </Text>
              <Entypo
                style={{ color: '#fff', marginRight: 15 }}
                name={showCategoryModal ? 'chevron-up' : 'chevron-down'}
                color="#fff"
                size={18}
              />

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
              Provincia
            </Text>
            <View style={{ width: '100%' }}>
              <TextInput
                value={selectedProvince || offerData?.province}
                placeholderTextColor={'#fff'}
                placeholder={
                  selectedProvince ||
                  offerData?.province ||
                  'Indique la provincia'
                }
                onChangeText={(text) => setSelectedProvince(text)}
                style={{ ...styles.containerBox, paddingHorizontal: 18 }}
              ></TextInput>
            </View>
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
                {!selectedPriority &&
                  !offerData?.urgency &&
                  'Seleccione el nivel de urgencia'}
                {selectedPriority == '' && offerData?.urgency}
                {selectedPriority}
              </Text>
              <Entypo
                style={{ color: '#fff', marginRight: 15 }}
                name={showPriorityModal ? 'chevron-up' : 'chevron-down'}
                color="#fff"
                size={18}
              />

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
                {offerData?.retribution !== false &&
                  offerData?.retribution !== true &&
                  selectedRemuneration == '' &&
                  'Seleccione retribución'}
                {selectedRemuneration === ''
                  ? (offerData?.retribution == false && 'No') ||
                    (offerData?.retribution == true && 'Si')
                  : selectedRemuneration}
              </Text>

              <Entypo
                style={{ color: '#fff', marginRight: 15 }}
                name={showRemunerationModal ? 'chevron-up' : 'chevron-down'}
                color="#fff"
                size={18}
              />
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

          {showError && <Text style={{ color: 'red' }}>{showError}</Text>}
        </View>

        <View style={styles.botonsOferta}>
          <View style={{ width: '100%', paddingHorizontal: 14 }}>
            <TouchableOpacity
              onPress={() => {
                if (
                  (selectedRol === 'Deportista' &&
                    selectedGender &&
                    selectedPriority &&
                    selectedRemuneration &&
                    selectedPosition &&
                    selectedProvince &&
                    selectedSport &&
                    selectedRol) ||
                  (selectedRol === 'Profesional' &&
                    selectedPriority &&
                    selectedRemuneration &&
                    selectedPosition &&
                    selectedProvince &&
                    selectedSport)
                ) {
                  navigation.navigate('PostPromocion', {
                    fromOffer: true,
                    oferta: {
                      offerData: {
                        sexo:
                          (selectedGender === 'Hombre' && 'Male') ||
                          (selectedGender === 'Mujer' && 'Female') ||
                          (selectedGender === '' && 'Otro'),
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
                        sport: selectedSport,
                        prop4: selectedRol
                      },

                      clubId: club?.id
                    },
                    ...offerData
                  })
                } else {
                  setShowError('Debes completar los campos')
                }
              }}
              style={[styles.botonPromocion, styles.boitonCrearFlexBox]}
            >
              <Text
                numberOfLines={1}
                style={[
                  styles.promocionarOferta,
                  styles.ofertaTypo,
                  { width: '100%' }
                ]}
              >
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
                        (selectedGender === 'Hombre' && 'Male') ||
                        (selectedGender === 'Mujer' && 'Female') ||
                        (selectedGender === '' && 'Otro'),

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
                      sport: selectedSport,
                      prop4: selectedRol
                    },

                    clubId: club?.id
                  }
                  console.log('SENDIND DATAAAA', data)
                  if (
                    (selectedRol === 'Deportista' &&
                      selectedGender &&
                      selectedPriority &&
                      selectedRemuneration &&
                      selectedPosition &&
                      selectedProvince &&
                      selectedSport &&
                      selectedRol) ||
                    (selectedRol === 'Profesional' &&
                      selectedPriority &&
                      selectedRemuneration &&
                      selectedPosition &&
                      selectedProvince &&
                      selectedSport)
                  ) {
                    await dispatch(setOffer(data)).then((data) =>
                      dispatch(getAllOffers())
                    )
                    navigation.navigate('OfertaCreada')
                  } else {
                    setShowError('Debes completar los campos')
                  }
                } else {
                  const data = {
                    ...(selectedGender && {
                      sexo:
                        (selectedGender === 'Hombre' && 'Male') ||
                        (selectedGender === 'Mujer' && 'Female')
                    }),
                    ...(selectedCategory && { category: selectedCategory }),
                    ...(selectedPriority && { urgency: selectedPriority }),
                    ...(retribucion && { prop1: 'asdasd' }),
                    ...(selectedPosition && { posit: selectedPosition }),
                    ...(selectedRol && { prop4: selectedRol }),
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
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  boitonCrearFlexBox: {
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
    gap: 25,
    paddingBottom: 70
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
    flexDirection: 'row',
    borderWidth: 0.5,
    color: 'white',
    position: 'relative',
    borderColor: Color.colorWhitesmoke,
    borderRadius: 50,
    width: '100%',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center'
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
