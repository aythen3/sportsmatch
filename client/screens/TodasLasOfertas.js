import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, Border, FontSize, FontFamily, Padding } from '../GlobalStyles'
import CardInfoOffers from '../components/CardInfoOffers'
import FiltersHome from '../components/FiltersHome'
import MonetizarOfertaPRO from './MonetizarOfertaPRO'
import FiltersSportman from '../components/FiltersSportman'
import { useSelector, useDispatch } from 'react-redux'
import { sendMatch } from '../redux/actions/matchs'
import { getAllOffers, signToOffer } from '../redux/actions/offers'
import { Context } from '../context/Context'
import { updateUser } from '../redux/slices/users.slices'
import {
  getAllUsers,
  getUserData,
  updateUserData
} from '../redux/actions/users'
import { FontAwesome } from '@expo/vector-icons'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../utils/apiBackend'
import CustomHeaderBack from '../components/CustomHeaderBack'

const TodasLasOfertas = () => {
  const _ = require('lodash')
  const dispatch = useDispatch()
  const { userMatches } = useContext(Context)
  const { offers } = useSelector((state) => state.offers)
  const { user, mainColor } = useSelector((state) => state.users)
  const navigation = useNavigation()
  const [selectOfferComponent, setSelectOfferComponent] = useState('todas')
  const [modalVisible, setModalVisible] = useState(false)
  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [modalFilterSportman, setModalFilterSportman] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [planSelected, setPlanSelected] = useState('')

  useEffect(() => {
    dispatch(getAllOffers())
  }, [])

  useEffect(() => {}, [selectOfferComponent])

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  const handleGetGold = async () => {
    const res = await axiosInstance.post('/user/create-subscription', {
      priceId: 'price_1P4cNLGmE60O5ob7O3hTmP9d',
      customerId: user.user.stripeId
    })

    if (res.data) {
      setPlanSelected('pro')
      setClientSecret(
        res.data.subscription.clientSecret.latest_invoice.payment_intent
          .client_secret
      )
      // console.log(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret,"res dataaa")
    }
  }

  const actualFavoriteOffers =
    user?.user?.prop1 && user?.user?.prop1?.favoriteOffers
      ? user?.user?.prop1?.favoriteOffers
      : []

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
          const updUser = await axiosInstance
            .patch(`user/${user.user.id}`, {
              plan: planSelected
            })
            .then(() => dispatch(getUserData(user.user.id)))

          setShowPremiumModal(false)
        }
      }
    }
    if (clientSecret) {
      initializePaymentSheet()
    }
  }, [clientSecret, initPaymentSheet])

  console.log('O============OOFFERS', offers)

  return (
    <View style={styles.todasLasOfertas}>
      <CustomHeaderBack header={'Ofertas'}></CustomHeaderBack>

      <FiltersHome modalSportmanActive={onFilterSportman} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 5
        }}
      >
        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            setSelectOfferComponent('todas')
          }}
        >
          <View
            style={{
              borderBottomWidth: 3,
              borderColor:
                selectOfferComponent === 'todas' ? mainColor : 'transparent',
              width: '100%'
            }}
          >
            <Text
              style={[
                selectOfferComponent === 'todas'
                  ? { ...styles.todasLaOfertas, color: mainColor }
                  : styles.todasLaOfertas2,
                styles.ofertasTypo
              ]}
            >
              Todas la ofertas
            </Text>
          </View>
        </Pressable>

        <Pressable
          style={{ flex: 1 }}
          onPress={() => {
            setSelectOfferComponent('favoritas')
          }}
        >
          <View
            style={{
              borderBottomWidth: 3,
              borderColor:
                selectOfferComponent === 'favoritas'
                  ? mainColor
                  : 'transparent',
              width: '100%'
            }}
          >
            <Text
              style={[
                selectOfferComponent === 'favoritas'
                  ? { ...styles.todasLaOfertas, color: mainColor }
                  : styles.todasLaOfertas2,
                ,
                styles.ofertasTypo
              ]}
            >
              Inscripciones
            </Text>
          </View>
        </Pressable>
      </View>

      {selectOfferComponent === 'todas' &&
      offers &&
      offers.filter((offer) => {
        const filteredUserMatches = userMatches.filter(
          (match) => match.offerId && match.offerId !== offer.id
        )
        const alreadyJoined = offer?.inscriptions?.includes(
          user?.user?.sportman?.id
        )
        if (filteredUserMatches.length > 0) {
          return false
        }
        if (alreadyJoined) {
          return false
        }
        return true
      }).length > 0 ? (
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {offers
            .filter((offer) => {
              const filteredUserMatches = userMatches.filter(
                (match) => match.offerId && match.offerId !== offer.id
              )
              const alreadyJoined = offer?.inscriptions?.includes(
                user?.user?.sportman?.id
              )
              if (filteredUserMatches.length > 0) {
                return false
              }
              if (alreadyJoined) {
                return false
              }
              return true
            })
            .slice(
              0,
              user?.user?.plan === 'pro' || user?.user?.plan === 'star'
                ? 1000
                : 20
            )
            .map((offer, index) => (
              <View
                key={index}
                style={{
                  marginTop: 20,
                  padding: 10,
                  flex: 1,
                  backgroundColor: Color.bLACK2SPORTMATCH,
                  alignItems: 'center',
                  opacity: 0.7
                }}
              >
                {/* <TouchableOpacity style={{position:'absolute',right:20,top:10, zIndex:3000}}  onPress={() => {
                let actualUser = _.cloneDeep(user)
                console.log('atualUser: ', actualUser)
                const newFavoriteOffersArray = actualFavoriteOffers?.includes(offer.id) ? actualFavoriteOffers.filter(
                      (favorite) => favorite !== offer.id
                    )
                  : [...actualFavoriteOffers, offer.id]
                  console.log('newFavoriteOffersArray: ',newFavoriteOffersArray)
                  if (!actualUser.user.prop1) {
                    actualUser.user.prop1 = {};
                  }
                  actualUser.user.prop1.favoriteOffers = newFavoriteOffersArray
                  console.log('userFavs: ', actualUser?.user?.prop1?.favoriteOffers)

                  console.log('setting user favorites to:', newFavoriteOffersArray)
                  dispatch(
                    updateUserData({
                      id: user.user.id,
                      body: { prop1: { ...user.user.prop1, favoriteOffers: newFavoriteOffersArray } }
                    })
                  ).then((data) => {
                    dispatch(getAllUsers())
                    dispatch(updateUser(actualUser))
                  })
                }}
                >
                  <FontAwesome name={actualFavoriteOffers.includes(offer.id) ? 'heart' : 'heart-o'} color='#E1451E' size={30} />

                </TouchableOpacity> */}
                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers
                    text="Sexo"
                    value={offer.sexo === 'Male' ? 'Masculino' : 'Femenino'}
                  />
                  <CardInfoOffers
                    category={true}
                    text="Categoría"
                    value={offer.category}
                  />
                </View>

                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers
                    text="Posición"
                    value={`${offer.urgency}/10`}
                  />
                  <CardInfoOffers text="Ubicacion" value="Random" />
                </View>

                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers text="Urgencia" value={offer.urgency} />
                  <CardInfoOffers
                    text="Retribucion"
                    value={offer.retribution ? 'Si' : 'No'}
                  />
                </View>

                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                    borderWidth: 2,
                    borderColor: Color.bLACK3SPORTSMATCH,
                    height: 90
                  }}
                >
                  <Pressable
                    style={{
                      width: '70%',
                      paddingHorizontal: Padding.p_mini,
                      paddingVertical: Padding.p_8xs,
                      justifyContent: 'center',
                      borderRadius: Border.br_81xl,
                      flexDirection: 'row',
                      alignItems: 'center',
                      zIndex: 5,
                      backgroundColor: !offer?.inscriptions?.includes(
                        user?.user?.sportman?.id
                      )
                        ? Color.wHITESPORTSMATCH
                        : '#e1451e',
                      height: 45
                    }}
                  >
                    <Text
                      // onPress={() => setModalVisible(true)}
                      disabled={offer?.inscriptions?.includes(
                        user?.user?.sportman?.id
                      )}
                      onPress={() => {
                        if (
                          !offer?.inscriptions?.includes(
                            user?.user?.sportman?.id
                          )
                        ) {
                          console.log('offer', offer)
                          console.log('sp id: ', user?.user?.sportman?.id)
                          dispatch(
                            signToOffer({
                              offerId: offer?.id,
                              userId: user?.user?.sportman?.id
                            })
                          ).then((data) => dispatch(getAllOffers()))
                        }
                      }}
                      style={{
                        color: offer?.inscriptions?.includes(
                          user?.user?.sportman?.id
                        )
                          ? '#fff'
                          : Color.bLACK1SPORTSMATCH,
                        textAlign: 'center',
                        fontWeight: '700',
                        lineHeight: 17,
                        fontFamily: FontFamily.t4TEXTMICRO,
                        fontSize: 17
                      }}
                    >
                      {offer?.inscriptions?.includes(user?.user?.sportman?.id)
                        ? 'Inscrito!'
                        : 'Inscríbete en la oferta'}
                    </Text>
                  </Pressable>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}
                  source={require('../assets/group-4891.png')}
                />
              </View>
            ))}
        </ScrollView>
      ) : (
        selectOfferComponent === 'todas' && (
          <View
            style={{ width: '100%', alignSelf: 'center', alignItems: 'center' }}
          >
            <Text
              style={{
                marginTop: 30,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: 400,
                fontSize: 14,
                color: Color.wHITESPORTSMATCH,
                bottom: 4
              }}
            >
              Aun no hay ofertas activas!
            </Text>
          </View>
        )
      )}

      {/* {selectOfferComponent === 'todas' &&
        offers.filter((offer) => {
          const filteredUserMatches = userMatches.filter(
            (match) => match.offerId && match.offerId !== offer.id
          )
          const alreadyJoined = offer?.inscriptions?.includes(
            user?.user?.sportman?.id
          )
          if (filteredUserMatches.length > 0) {
            return false
          }
          if (alreadyJoined) {
            return false
          }
          return true
        }).length > 2 &&
        user.user.plan === 'basic' && (
          <TouchableOpacity
            style={{
              backgroundColor: Color.wHITESPORTSMATCH,
              marginTop: 0,
              width: '95%',
              justifyContent: 'center',
              paddingHorizontal: Padding.p_81xl,
              paddingVertical: Padding.p_3xs,
              alignSelf: 'center',
              zIndex: 3,
              marginBottom: 10,
              backgroundColor: Color.wHITESPORTSMATCH,
              borderRadius: Border.br_81xl,
              flexDirection: 'row',
              alignItems: 'center'
            }}
            onPress={() =>
              user.user.plan === 'pro' || user.user.plan === 'star'
                ? null
                : setShowPremiumModal(true)
            }
          >
            <Text>Ver más ofertas</Text>
          </TouchableOpacity>
        )} */}
      {/* ============================ FAVORITE OFFERS ============================ */}
      {/* {selectOfferComponent !== 'todas' &&
      offers &&
      offers.filter((offer) => {
        const filteredUserMatches = userMatches.filter(
          (match) => match.offerId && match.offerId !== offer.id
        )
        if (filteredUserMatches.length > 0) {
          return false
        }
        return true
      }).length > 0 ? (
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {offers
            .filter((offer) => {
              const filteredUserMatches = userMatches.filter(
                (match) => match.offerId && match.offerId !== offer.id
              )
              const alreadyJoined = offer?.inscriptions?.includes(
                user?.user?.sportman?.id
              )
              if (filteredUserMatches.length > 0) {
                return false
              }
              if (alreadyJoined) {
                return true
              }
              return false
            })
            .map((offer, index) => (
              <View
                key={index}
                style={{
                  marginTop: 20,
                  padding: 10,
                  flex: 1,
                  backgroundColor: Color.bLACK2SPORTMATCH,
                  alignItems: 'center',
                  opacity: 0.7
                }}
              >
                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers
                    text="Sexo"
                    value={offer.sexo === 'Male' ? 'Masculino' : 'Femenino'}
                  />
                  <CardInfoOffers text="Categoría" value={offer.category} />
                </View>

                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers
                    text="Posición"
                    value={`${offer.urgency}/10`}
                  />
                  <CardInfoOffers text="Ubicacion" value="Random" />
                </View>

                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers text="Urgencia" value={offer.urgency} />
                  <CardInfoOffers
                    text="Retribucion"
                    value={offer.retribution ? 'Si' : 'No'}
                  />
                </View>

                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                    borderWidth: 2,
                    borderColor: Color.bLACK3SPORTSMATCH,
                    height: 90
                  }}
                >
                  <Pressable
                    style={{
                      width: '70%',
                      paddingHorizontal: Padding.p_mini,
                      paddingVertical: Padding.p_8xs,
                      justifyContent: 'center',
                      borderRadius: Border.br_81xl,
                      flexDirection: 'row',
                      alignItems: 'center',
                      zIndex: 5,
                      backgroundColor: !offer?.inscriptions?.includes(
                        user?.user?.sportman?.id
                      )
                        ? Color.wHITESPORTSMATCH
                        : '#e1451e',
                      height: 45
                    }}
                  >
                    <Text
                      // onPress={() => setModalVisible(true)}
                      disabled={offer?.inscriptions?.includes(
                        user?.user?.sportman?.id
                      )}
                      onPress={() => {
                        if (
                          !offer?.inscriptions?.includes(
                            user?.user?.sportman?.id
                          )
                        ) {
                          console.log('offer', offer)
                          console.log('sp id: ', user?.user?.sportman?.id)
                          dispatch(
                            signToOffer({
                              offerId: offer?.id,
                              userId: user?.user?.sportman?.id
                            })
                          ).then((data) => dispatch(getAllOffers()))

                          navigation.goBack()
                        }
                      }}
                      style={{
                        color: offer?.inscriptions?.includes(
                          user?.user?.sportman?.id
                        )
                          ? '#fff'
                          : Color.bLACK1SPORTSMATCH,
                        textAlign: 'center',
                        fontWeight: '700',
                        lineHeight: 17,
                        fontFamily: FontFamily.t4TEXTMICRO,
                        fontSize: 17
                      }}
                    >
                      {offer?.inscriptions?.includes(user?.user?.sportman?.id)
                        ? 'Inscripto!'
                        : 'Inscríbete en la oferta'}
                    </Text>
                  </Pressable>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}
                  source={require('../assets/group-4891.png')}
                />
              </View>
            ))}
        </ScrollView>
      ) : (
        selectOfferComponent !== 'todas' && (
          <Text
            style={{ width: '100%', alignSelf: 'center', alignItems: 'center' }}
          >
            Aun no hay ofertas activas!
          </Text>
        )
      )} */}

      {selectOfferComponent === 'todas' &&
        offers.filter((offer) => {
          const filteredUserMatches = userMatches.filter(
            (match) => match.offerId && match.offerId !== offer.id
          )
          const alreadyJoined = offer?.inscriptions?.includes(
            user?.user?.sportman?.id
          )
          if (filteredUserMatches.length > 0) {
            return false
          }
          if (alreadyJoined) {
            return false
          }
          return true
        }).length > 2 &&
        user.user.plan === 'basic' && (
          <TouchableOpacity
            style={{
              backgroundColor: Color.wHITESPORTSMATCH,
              marginTop: 0,
              width: '95%',
              justifyContent: 'center',
              paddingHorizontal: Padding.p_81xl,
              paddingVertical: Padding.p_3xs,
              alignSelf: 'center',
              zIndex: 3,
              marginBottom: 10,
              backgroundColor: Color.wHITESPORTSMATCH,
              borderRadius: Border.br_81xl,
              flexDirection: 'row',
              alignItems: 'center'
            }}
            onPress={() =>
              user.user.plan === 'pro' || user.user.plan === 'star'
                ? null
                : setShowPremiumModal(true)
            }
          >
            <Text>Ver más ofertas</Text>
          </TouchableOpacity>
        )}
      {/* ============================ FAVORITE OFFERS ============================ */}
      {selectOfferComponent !== 'todas' &&
      offers &&
      offers.filter((offer) => {
        const filteredUserMatches = userMatches.filter(
          (match) => match.offerId && match.offerId !== offer.id
        )
        const alreadyJoined = offer?.inscriptions?.includes(
          user?.user?.sportman?.id
        )
        if (filteredUserMatches.length > 0) {
          return false
        }
        if (alreadyJoined) {
          return true
        }
        return false
      }).length > 0 ? (
        <ScrollView keyboardShouldPersistTaps={'always'}>
          {offers
            .filter((offer) => {
              const filteredUserMatches = userMatches.filter(
                (match) => match.offerId && match.offerId !== offer.id
              )
              const alreadyJoined = offer?.inscriptions?.includes(
                user?.user?.sportman?.id
              )
              if (filteredUserMatches.length > 0) {
                return false
              }
              if (alreadyJoined) {
                return true
              }
              return false
            })
            .map((offer, index) => (
              <View
                key={index}
                style={{
                  marginTop: 20,
                  padding: 10,
                  flex: 1,
                  backgroundColor: Color.bLACK2SPORTMATCH,
                  alignItems: 'center',
                  opacity: 0.7
                }}
              >
                {/* <TouchableOpacity style={{position:'absolute',right:20,top:10, zIndex:3000}}  onPress={() => {
                let actualUser = _.cloneDeep(user)
                console.log('atualUser: ', actualUser)
                const newFavoriteOffersArray = actualFavoriteOffers?.includes(offer.id) ? actualFavoriteOffers.filter(
                  (favorite) => favorite !== offer.id
                )
                  : [...actualFavoriteOffers, offer.id]
                console.log('newFavoriteOffersArray: ', newFavoriteOffersArray)
                if (!actualUser.user.prop1) {
                  actualUser.user.prop1 = {};
                }
                actualUser.user.prop1.favoriteOffers = newFavoriteOffersArray
                console.log('userFavs: ', actualUser?.user?.prop1?.favoriteOffers)

                console.log('setting user favorites to:', newFavoriteOffersArray)
                dispatch(
                  updateUserData({
                    id: user.user.id,
                    body: { prop1: { ...user.user.prop1, favoriteOffers: newFavoriteOffersArray } }
                  })
                ).then((data) => {
                  dispatch(getAllUsers())
                  dispatch(updateUser(actualUser))
                })
              }}
              >
                <FontAwesome name={actualFavoriteOffers.includes(offer.id) ? 'heart' : 'heart-o'} color='#E1451E' size={30} />

                </TouchableOpacity> */}
                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers
                    text="Sexo"
                    value={offer.sexo === 'Male' ? 'Masculino' : 'Femenino'}
                  />
                  <CardInfoOffers
                    text="Categoría"
                    category={true}
                    value={offer.category}
                  />
                </View>

                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers
                    text="Posicion"
                    value={`${offer.urgency}/10`}
                  />
                  <CardInfoOffers text="Ubicacion" value="Random" />
                </View>

                <View style={{ flexDirection: 'row', zIndex: 5 }}>
                  <CardInfoOffers text="Urgencia" value={offer.urgency} />
                  <CardInfoOffers
                    text="Retribucion"
                    value={offer.retribution ? 'Si' : 'No'}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 10,
                    borderWidth: 2,
                    borderColor: Color.bLACK3SPORTSMATCH,
                    height: 90
                  }}
                >
                  <Pressable
                    style={{
                      width: '70%',
                      paddingHorizontal: Padding.p_mini,
                      paddingVertical: Padding.p_8xs,
                      justifyContent: 'center',
                      borderRadius: Border.br_81xl,
                      flexDirection: 'row',
                      alignItems: 'center',
                      zIndex: 5,
                      backgroundColor: !offer?.inscriptions?.includes(
                        user?.user?.sportman?.id
                      )
                        ? Color.wHITESPORTSMATCH
                        : mainColor,
                      height: 45
                    }}
                  >
                    <Text
                      // onPress={() => setModalVisible(true)}
                      disabled={offer?.inscriptions?.includes(
                        user?.user?.sportman?.id
                      )}
                      onPress={() => {
                        if (
                          !offer?.inscriptions?.includes(
                            user?.user?.sportman?.id
                          )
                        ) {
                          dispatch(
                            signToOffer({
                              offerId: offer?.id,
                              userId: user?.user?.sportman?.id
                            })
                          ).then((data) => dispatch(getAllOffers()))

                          navigation.goBack()
                        }
                      }}
                      style={{
                        color: offer?.inscriptions?.includes(
                          user?.user?.sportman?.id
                        )
                          ? '#fff'
                          : Color.bLACK1SPORTSMATCH,
                        textAlign: 'center',
                        fontWeight: '700',
                        lineHeight: 17,
                        fontFamily: FontFamily.t4TEXTMICRO,
                        fontSize: 17
                      }}
                    >
                      {offer?.inscriptions?.includes(user?.user?.sportman?.id)
                        ? 'Inscrito!'
                        : 'Inscríbete en la oferta'}
                    </Text>
                  </Pressable>
                </View>
                <Image
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    borderRadius: 8,
                    overflow: 'hidden'
                  }}
                  source={require('../assets/group-4891.png')}
                />
              </View>
            ))}
        </ScrollView>
      ) : (
        selectOfferComponent !== 'todas' && (
          <View
            style={{
              width: '100%',
              top: 200,
              alignSelf: 'flex-start',
              alignItems: 'center',
              flex: 1
            }}
          >
            <Text
              style={{
                marginTop: 30,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: 400,
                fontSize: 15,
                color: Color.wHITESPORTSMATCH,
                bottom: 4
              }}
            >
              Aún no te has inscrito en ninguna oferta!
            </Text>
          </View>
        )
      )}

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 15
            }}
          >
            <MonetizarOfertaPRO onClose={() => setModalVisible(false)} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <Modal
        visible={showPremiumModal}
        transparent={true}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={() => setShowPremiumModal(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 15
            }}
          >
            <MonetizarOfertaPRO
              handle={handleGetGold}
              onClose={() => setShowPremiumModal(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={modalFilterSportman}
        transparent={true}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={() => setModalFilterSportman(false)}>
          <View
            // style={{
            //   width: 200,
            //   position: 'absolute',
            //   right: 10,
            //   top: 160
            // }}
            style={{
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-end',
              paddingTop: 132,
              paddingHorizontal: 20
            }}
          >
            <FiltersSportman
              sports={user?.user?.sportman?.info?.sport}
              onClose={() => setModalFilterSportman(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  ofertasTypo: {
    fontWeight: '700',
    textAlign: 'center'
  },
  menuClubPosition: {
    marginLeft: -195,
    width: 390,
    left: '50%',
    position: 'absolute'
  },
  groupIconLayout: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  iconPosition: {
    bottom: '33.33%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupChildPosition: {
    bottom: '0%',
    position: 'absolute'
  },
  itemPosition: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    bottom: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    position: 'absolute'
  },
  menuClubChild2Layout: {
    bottom: '38.46%',
    top: '16.67%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: 'solid'
  },

  pivotLayout: {
    width: 150,
    height: 80
  },
  parentPosition: {
    paddingHorizontal: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    top: 0,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: 'absolute'
  },
  sexoTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pvotTypo: {
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid'
  },
  aceptarBg: {
    backgroundColor: Color.wHITESPORTSMATCH,
    height: 45
  },
  verOfertaTypo: {
    lineHeight: 17,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: 17
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    overflow: 'hidden'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  misOfertas: {
    width: '44.1%',
    top: '18.96%',
    left: '51.79%',
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 12,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    position: 'absolute'
  },
  maskGroupIcon: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%',
    maxHeight: '100%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute'
  },
  maskGroupIcon1: {
    top: '21.79%',
    right: '9.74%',
    left: '81.28%',
    width: '8.97%',
    height: '44.87%'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    width: '100%'
  },
  menuClubItem: {
    width: '19.74%',
    right: '59.49%',
    left: '20.77%'
  },
  menuClubInner: {
    height: '3.85%',
    width: '20.51%',
    top: '1.92%',
    right: '59.1%',
    bottom: '94.23%',
    left: '20.38%',
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3
  },
  groupIcon: {
    height: '37.95%',
    width: '7.69%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%',
    maxHeight: '100%',
    position: 'absolute'
  },
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild1: {
    left: '40.51%'
  },
  groupChild: {
    width: '11.94%',
    right: '88.06%',
    left: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupParent: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubChild2: {
    right: '44.87%',
    left: '46.15%'
  },
  maskGroupIcon2: {
    right: '6.15%',
    left: '84.87%'
  },
  ellipseIcon: {
    height: '6.41%',
    width: '1.28%',
    top: '60.26%',
    right: '28.97%',
    left: '69.74%'
  },
  menuClub: {
    top: 562,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    left: '50%'
  },
  fondoImagenIcon: {
    height: 400,
    width: 360,
    zIndex: 0
  },
  sexo: {
    width: 143,
    height: 17,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH
  },
  masculino1: {
    marginTop: 11,
    height: 18,
    lineHeight: 20,
    fontSize: FontSize.button_size,
    fontWeight: '500',
    width: 150,
    textAlign: 'center'
  },
  sexoParent: {
    paddingVertical: Padding.p_9xs,
    alignItems: 'flex-end',
    height: 80,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.colorDimgray_100,
    overflow: 'hidden'
  },
  masculino: {
    height: 80,
    zIndex: 0
  },
  senior: {
    marginLeft: 20,
    height: 80,
    zIndex: 1
  },
  pvot: {
    marginTop: 13,
    height: 18,
    lineHeight: 20,
    fontSize: FontSize.button_size,
    fontWeight: '500',
    width: 150,
    textAlign: 'center'
  },
  pivot: {
    zIndex: 2,
    marginLeft: 20,
    height: 80
  },
  comarca: {
    zIndex: 3,
    marginLeft: 20,
    height: 80
  },
  groupItem: {
    opacity: 0.5,
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    left: '0%',
    right: '0%',
    width: '100%'
  },
  urgencia1: {
    height: '21.25%',
    width: '95.33%',
    top: '5%',
    left: '4.67%',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  rectangleParent: {
    alignSelf: 'stretch',
    zIndex: 0,
    flex: 1
  },
  urgenciaChild: {
    top: 36,
    left: 14,
    width: 122,
    height: 18,
    zIndex: 1,
    position: 'absolute'
  },
  urgencia: {
    zIndex: 4,
    marginLeft: 20,
    height: 80
  },
  retribucion: {
    zIndex: 5,
    marginLeft: 20,
    height: 80
  },
  modulosChild: {
    top: 310,
    left: -20,
    zIndex: 6,
    width: 361,
    position: 'absolute'
  },
  modulos: {
    width: 320,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  contenidoChild: {
    height: 70,
    marginTop: 30,
    opacity: 0.5,
    width: 360
  },
  contenido1: {
    top: 20,
    zIndex: 1,
    alignItems: 'center'
  },
  targeta: {
    zIndex: 0,
    alignItems: 'center',
    width: 361,
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    overflow: 'hidden'
  },
  verOferta: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700'
  },
  aceptar: {
    width: '70%',
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    justifyContent: 'center',
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5
  },
  targetaContenido: {
    flexDirection: 'row',
    left: 15,
    top: 0,
    position: 'absolute'
  },
  contenido: {
    top: 205,
    height: 640,
    width: 390,
    left: '50%'
  },
  todasLaOfertas: {
    color: Color.bALONCESTO,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    marginBottom: 5
  },
  todasLaOfertas2: {
    color: Color.colorWhitesmoke,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    marginBottom: 5
  },
  menuChild: {
    width: 188,
    marginTop: 8,
    maxHeight: '100%'
  },
  menuContenido: {
    top: 160
  },
  coolicon: {
    width: 9,
    height: 15
  },
  ofertas1: {
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  ofertas: {
    marginLeft: 9
  },
  cabezera1: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  frameChild: {
    width: 13,
    height: 15
  },
  posicnDeJuego: {
    width: 265,
    height: 16,
    marginLeft: 6,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupContainer: {
    borderColor: Color.wHITESPORTSMATCH,
    paddingHorizontal: Padding.p_2xs,
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  groupIcon1: {
    width: 22,
    marginLeft: 20,
    height: 17
  },
  buscarPictograma: {
    width: 348,
    height: 34
  },
  filtrosSugeridos: {
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH
  },
  frameItem: {
    marginTop: 10,
    width: 175
  },
  porProximidadPictoChild: {
    width: 10,
    height: 7
  },
  porProximidad: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    left: '0%',
    top: '0%',
    position: 'absolute'
  },
  pictogramaIcon: {
    width: '10.49%',
    left: '89.51%',
    right: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  porProximidadParent: {
    width: 130,
    marginLeft: 6,
    height: 17
  },
  porProximidadPicto1: {
    width: 146,
    alignItems: 'center',
    flexDirection: 'row'
  },
  porProximidadPicto: {
    marginTop: 10,
    alignItems: 'center'
  },
  frameInner: {
    width: 176,
    marginTop: 10
  },
  groupIcon2: {
    height: '84.21%',
    width: '12.03%',
    top: '15.79%',
    left: '87.97%',
    right: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  groupGroup: {
    width: 133,
    height: 19
  },
  filtrosSugeridosParent: {
    paddingHorizontal: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    top: 0,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: 'absolute',
    alignItems: 'center'
  },
  despliegue: {
    height: 108,
    marginTop: 9,
    width: 175
  },
  buscarFiltrosDespliegue: {
    marginTop: 21,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cabezera: {
    top: 60,
    height: 146,
    left: 15,
    position: 'absolute'
  },
  uxIphoneChild: {
    height: 34,
    top: 0,
    width: 390,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    opacity: 0.35,
    height: 12,
    width: 22,
    top: 0
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7
  },
  battery: {
    width: 25,
    height: 12,
    top: 0
  },
  wifiIcon: {
    width: 16,
    height: 11
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11
  },
  group: {
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: 'absolute'
  },
  time: {
    marginTop: -9.55,
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.t2TextSTANDARD_size,
    top: '50%',
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
  },
  uxIphone: {
    height: 34,
    top: 0,
    width: 390
  },
  todasLasOfertas: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default TodasLasOfertas
