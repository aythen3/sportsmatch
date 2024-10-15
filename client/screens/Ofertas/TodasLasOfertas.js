import React, { useContext, useEffect, useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding
} from '../../GlobalStyles'
import CardInfoOffers from '../../components/CardInfoOffers'
import FiltersHome from '../../components/FiltersHome'
import MonetizarOfertaPRO from '../MonetizarOfertaPRO'
import FiltersSportman from '../../components/FiltersSportman'
import { useSelector, useDispatch } from 'react-redux'
import { sendMatch } from '../../redux/actions/matchs'
import {
  deleteSignToOffer,
  getAllOffers,
  signToOffer
} from '../../redux/actions/offers'
import { Context } from '../../context/Context'
import { updateUser } from '../../redux/slices/users.slices'
import {
  getAllUsers,
  getUserData,
  login,
  updateUserData
} from '../../redux/actions/users'
import { FontAwesome } from '@expo/vector-icons'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../../utils/apiBackend'
import CustomHeaderBack from '../../components/CustomHeaderBack'
import { sendNotification } from '../../redux/actions/notifications'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { updateOffers } from '../../redux/slices/offers.slices'
import PagerView from 'react-native-pager-view'
import { PageIndicator } from 'react-native-page-indicator'
import { Platform } from 'react-native'

const TodasLasOfertas = () => {
  const _ = require('lodash')
  const dispatch = useDispatch()
  const { userMatches, scalableFontSize, emitToUser } = useContext(Context)
  const { offers } = useSelector((state) => state.offers)
  const { user, allUsers, mainColor } = useSelector((state) => state.users)
  const { sportman } = useSelector((state) => state.sportman)
  const navigation = useNavigation()
  const [selectOfferComponent, setSelectOfferComponent] = useState('todas')
  const [modalVisible, setModalVisible] = useState(false)
  const [showPremiumModal, setShowPremiumModal] = useState(false)
  const [modalFilterSportman, setModalFilterSportman] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const [planSelected, setPlanSelected] = useState('')
  const [selectedSports, setSelectedSports] = useState([])
  const [byRelevance, setByRelevance] = useState(false)
  const [offer, setOffer] = useState([])
  const [signinToOffer, setSigninToOffer] = useState(false)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [cantPage1, setCantPage1] = useState(0)
  const [cantPage2, setCantPage2] = useState(0)

  const [plansData, setPlansData] = useState([])

  const fetchUserData = async () => {
    console.log('Fetching user data...')
    const userData = await AsyncStorage.getItem('userAuth')
    const userData2 = await AsyncStorage.getItem('@user')

    console.log('userData', userData, userData2)
    if (userData) {
      return dispatch(login(JSON.parse(userData))).then((a) =>
        console.log('logeo', a)
      )
    }
    if (userData2) {
      return dispatch(login({ googleId: JSON.parse(userData2).uid })).then(
        (a) => console.log('logeo2', a)
      )
    }
  }

  useEffect(() => {
    console.log('USER.USER', user.user)
    console.log('USER.USER.SPORTMAN', sportman.id)
    if (!user?.user?.sportman) {
      fetchUserData()
    }
    dispatch(getAllOffers())
  }, [])

  useEffect(() => {
    const getinfo = async (planId) => {
      const res = await axiosInstance.get(`user/subscription/${planId}`)
      return res.data
    }

    if (user?.user?.prop1?.plans) {
      const plans = user.user.prop1.plans
      const planPromises = plans.map((plan) => getinfo(plan))
      Promise.all(planPromises).then((plansInfo) => {
        const plansData = plansInfo.map((subscription, index) => {
          const currentDate = new Date(subscription.current_period_end * 1000)
          const interval = subscription.plan.interval
          const intervalCount = subscription.plan.interval_count

          if (interval === 'month') {
            currentDate.setMonth(currentDate.getMonth() + (intervalCount - 1))
          } else if (interval === 'year') {
            currentDate.setFullYear(
              currentDate.getFullYear() + (intervalCount - 1)
            )
          }

          const nextPaymentDate = currentDate.getTime() / 1000
          const nextPaymentDate2 = new Date(nextPaymentDate * 1000)

          const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          }

          const formattedDate = nextPaymentDate2
            .toLocaleDateString('es-AR', options)
            .replace(/-/g, '/')

          const getPlanName = (planId) => {
            switch (planId) {
              case 'price_1Plj60GmE60O5ob7lsmKEbPK':
                return 'PRO ANUAL'
              case 'price_1PbXiXGmE60O5ob7jb0U2Wap':
                return 'PRO MENSUAL'
              case 'price_1PbXgIGmE60O5ob7mAwCw3YQ':
                return 'GOLD'
              case 'price_1PbXhFGmE60O5ob7cTUy19CD':
                return 'STAR MENSUAL'
              case 'price_1Plj8LGmE60O5ob768A57ICn':
                return 'STAR ANUAL'
              default:
                return 'Unknown plan'
            }
          }

          return {
            planId: plans[index],
            subs: subscription.plan.id,
            expirationDate: formattedDate,
            status: subscription.status,
            planName: getPlanName(subscription.plan.id)
          }
        })
        setPlansData(plansData)
        console.log(plansData, 'plansss')
      })
    }
  }, [user?.user?.planId])

  useEffect(() => {
    if (byRelevance === true) {
      setOffer(offer)
    }
  }, [byRelevance])

  useEffect(() => {
    if (offers) {
      setOffer(offers)
      // console.log(offers)
    }
  }, [offers])

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  const handleGetGold = async () => {
    const res = await axiosInstance.post('/user/create-subscription', {
      priceId: 'price_1PbXiXGmE60O5ob7jb0U2Wap',
      customerId: user?.user?.stripeId
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
            .patch(`user/${user?.user?.id}`, {
              plan: planSelected
            })
            .then(() => dispatch(getUserData(user?.user?.id)))

          setShowPremiumModal(false)
        }
      }
    }
    if (clientSecret) {
      initializePaymentSheet()
    }
  }, [clientSecret, initPaymentSheet])

  useEffect(() => {
    const cant = offer
      .filter((offer) => offer.paused === false)
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
        user?.user?.plan === 'pro' || user?.user?.plan === 'star' ? 1000 : 20
      )
      .filter((offer) => offer.paused === false)
      .filter((off) => {
        if (search.length > 0) {
          if (
            off.province.toLowerCase().includes(search.toLowerCase()) ||
            off.posit.toLowerCase().includes(search.toLowerCase())
          ) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      })
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
        user?.user?.plan === 'pro' || user?.user?.plan === 'star' ? 1000 : 20
      )
      .sort((a, b) => {
        const first = a.inscriptions?.length || 0
        const second = b.inscriptions?.length || 0
        return byRelevance ? second - first : first - second
      })
    setCantPage1(cant.length)

    const cant2 = offer
      .filter((off) => {
        if (search.length > 0) {
          if (
            off.province.toLowerCase().includes(search.toLowerCase()) ||
            off.posit.toLowerCase().includes(search.toLowerCase())
          ) {
            return true
          } else {
            return false
          }
        } else {
          return true
        }
      })
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
      .map((_, index) => (
        <View
          key={index}
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 2,
            backgroundColor: index === currentPage ? mainColor : 'gray'
          }}
        />
      ))
    setCantPage2(cant2.length)
    // console.log('offers changed on alloffers', offers)
  }, [offers])

  // console.log(
  //   'O============OOFFERS',
  //   offers.map((off) => {
  //     return `${off?.inscriptions?.length || 0} ${off?.posit}`
  //   })
  // )

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }} // Asegúrate de que el KeyboardAvoidingView ocupe todo el espacio
    >
      <View style={styles.todasLasOfertas}>
        <CustomHeaderBack header={'Ofertas'}></CustomHeaderBack>

        <FiltersHome
          modalSportmanActive={onFilterSportman}
          setTextValue={(e) => setSearch(e)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20
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
                Mis inscripciones
              </Text>
            </View>
          </Pressable>
        </View>

        {selectOfferComponent === 'todas' &&
        offers &&
        offers
          .filter((off) => {
            if (search.length > 0) {
              if (
                off.province.toLowerCase().includes(search.toLowerCase()) ||
                off.posit.toLowerCase().includes(search.toLowerCase()) ||
                off.category.toLowerCase().includes(search.toLowerCase()) ||
                off.sexo.toLowerCase().includes(search.toLowerCase())
              ) {
                return true
              } else {
                return false
              }
            } else {
              return true
            }
          })
          .filter((offer) => offer.paused === false)
          .filter((offer) => {
            const alreadyJoined = user?.user?.offers?.find(
              (of) => of.id === offer.id
            )

            if (alreadyJoined) {
              return false
            }
            return true
          }).length > 0 ? (
          <View
            style={{
              flex: 1
            }}
          >
            <PagerView
              onPageSelected={(event) =>
                setCurrentPage(event.nativeEvent.position)
              }
              initialPage={0}
              style={{
                flex: 1,
                width: '100%',
                gap: 15
              }}
            >
              {offer
                .filter((offer) => offer.paused === false)
                .filter((offer) => {
                  // const filteredUserMatches = userMatches.filter(
                  //   (match) => match.offerId && match.offerId !== offer.id
                  // )
                  const alreadyJoined = user?.user?.offers?.find(
                    (of) => of.id === offer.id
                  )
                  // if (filteredUserMatches.length > 0) {
                  //   return false
                  // }
                  if (alreadyJoined) {
                    return false
                  }
                  return true
                })
                .slice(
                  0,
                  user?.user?.plan === 'pro' ||
                    user?.user?.plan === 'star' ||
                    user?.user?.prop1?.plans
                    ? 1000
                    : 20
                ).length > 0 ? (
                offer
                  .filter((offer) => offer.paused === false)
                  .filter((off) => {
                    if (search.length > 0) {
                      if (
                        off.province
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        off.posit
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        off.category
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                        off.sexo.toLowerCase().includes(search.toLowerCase())
                      ) {
                        return true
                      } else {
                        return false
                      }
                    } else {
                      return true
                    }
                  })
                  .filter((offer) => {
                    // const filteredUserMatches = userMatches.filter(
                    //   (match) => match.offerId && match.offerId !== offer.id
                    // )
                    const alreadyJoined = user?.user?.offers?.find(
                      (of) => of.id === offer.id
                    )
                    // if (filteredUserMatches.length > 0) {
                    //   return false
                    // }
                    if (alreadyJoined) {
                      return false
                    }
                    return true
                  })
                  .slice(
                    0,
                    user?.user?.plan === 'pro' ||
                      user?.user?.plan === 'star' ||
                      user?.user?.prop1?.plans
                      ? 1000
                      : 20
                  )
                  .sort((a, b) => {
                    const first = a.inscriptions?.length || 0
                    const second = b.inscriptions?.length || 0
                    // console.log('first', first, 'second', second)

                    return byRelevance ? second - first : first - second
                  })
                  .map((offer, index) => {
                    const can = allUsers.find(
                      (e) => e?.club?.id === offer?.club?.id
                    )
                    if (!can?.isDelete) {
                      return (
                        <View
                          key={index}
                          style={{
                            marginTop: 10,
                            padding: 22,
                            flex: 1,
                            marginHorizontal: 20,
                            backgroundColor: '#252525',
                            borderRadius: 10,
                            alignItems: 'center',
                            borderColor: '#505050',
                            borderWidth: 1,
                            opacity: 1
                          }}
                        >
                          <View
                            style={{
                              borderBottomWidth: 1,
                              borderColor: '#505050',
                              flexDirection: 'row',
                              zIndex: 5,
                              flex: 1
                            }}
                          >
                            <View
                              style={{
                                flex: 1,
                                borderEndWidth: 1,
                                borderColor: '#505050'
                              }}
                            >
                              <CardInfoOffers
                                text="Sexo"
                                value={
                                  offer.sexo === 'Male'
                                    ? 'Masculino'
                                    : 'Femenino'
                                }
                              />
                              <View
                                style={{
                                  position: 'absolute',
                                  right: -15,
                                  bottom: -15,
                                  height: 30,
                                  width: 30,
                                  backgroundColor: '#252525',
                                  borderRadius: 50
                                }}
                              ></View>
                            </View>
                            <View
                              style={{
                                flex: 1,
                                zIndex: 3
                              }}
                            >
                              <CardInfoOffers
                                category={true}
                                text="Categoría"
                                value={offer.category}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              borderBottomWidth: 1,
                              borderColor: '#505050',
                              flexDirection: 'row',
                              zIndex: 2,
                              flex: 1
                            }}
                          >
                            <View
                              style={{
                                flex: 1,
                                borderEndWidth: 1,
                                borderColor: '#505050'
                              }}
                            >
                              <CardInfoOffers
                                text="Posición"
                                value={offer?.posit}
                              />
                              <View
                                style={{
                                  position: 'absolute',
                                  right: -15,
                                  bottom: -15,
                                  height: 30,
                                  width: 30,
                                  backgroundColor: '#252525',
                                  borderRadius: 50
                                }}
                              ></View>
                            </View>
                            <View
                              style={{
                                flex: 1
                              }}
                            >
                              <CardInfoOffers
                                text="Ubicación"
                                value={offer?.province || 'Random'}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              zIndex: -1,
                              flex: 1
                            }}
                          >
                            <View
                              style={{
                                flex: 1,
                                borderEndWidth: 1,
                                borderColor: '#505050'
                              }}
                            >
                              <CardInfoOffers
                                text="Urgencia"
                                value={offer?.urgency}
                              />
                            </View>

                            <View
                              style={{
                                flex: 1,
                                borderColor: '#505050'
                              }}
                            >
                              <CardInfoOffers
                                text="Retribucion"
                                value={
                                  offer.retribution === false
                                    ? 'No'
                                    : offer.prop1
                                }
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              width: '100%',
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop: 30,
                              zIndex: 10
                            }}
                          >
                            <TouchableOpacity
                              disabled={signinToOffer}
                              onPress={async () => {
                                if (
                                  !offer?.inscriptions?.includes(sportman?.id)
                                ) {
                                  setSigninToOffer(true)
                                  if (sportman) {
                                    try {
                                      await dispatch(updateOffers(offer?.id))
                                      dispatch(
                                        signToOffer({
                                          offerId: offer?.id,
                                          userId: user.user?.id
                                        })
                                      ).then((data) => {
                                        ToastAndroid.show(
                                          'Te has inscrito en la oferta!',
                                          ToastAndroid.SHORT
                                        )
                                        dispatch(getUserData(user?.user?.id))
                                        console.log(data, 'response offer')
                                        const userr = allUsers.filter(
                                          (e) => e?.club?.id === offer?.clubId
                                        )[0]
                                        console.log(userr, 'userrr')
                                        dispatch(
                                          sendNotification({
                                            title: 'Inscripción',
                                            message: `${user?.user?.sportman?.info?.nickname} se ha inscrito a tu oferta`,
                                            recipientId: userr?.id,
                                            date: new Date(),
                                            read: false,
                                            prop2: {
                                              rol: 'user'
                                            },
                                            prop1: {
                                              userId: user?.user?.id,
                                              userData: {
                                                ...user
                                              }
                                            }
                                          })
                                        ).then(() =>
                                          emitToUser(
                                            userr?.id,
                                            'notifications',
                                            'hola'
                                          )
                                        )
                                        // dispatch(getAllOffers())
                                      })
                                    } catch (error) {
                                      console.log(
                                        'Error on inscription..',
                                        error
                                      )
                                      setSigninToOffer(false)
                                    } finally {
                                      setSigninToOffer(false)
                                    }
                                  } else {
                                    console.log('SPORTMAN NOT FOUND!.')
                                  }
                                }
                              }}
                              style={{
                                width: '80%',
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
                                  ? '#ffff'
                                  : Color.wHITESPORTSMATCH
                              }}
                            >
                              <Text
                                style={{
                                  color: offer?.inscriptions?.includes(
                                    user?.user?.sportman?.id
                                  )
                                    ? '#fff'
                                    : Color.bLACK1SPORTSMATCH,
                                  textAlign: 'center',
                                  fontWeight: '700',
                                  fontFamily: FontFamily.t4TEXTMICRO,
                                  fontSize: scalableFontSize(16)
                                }}
                              >
                                {offer?.inscriptions?.includes(
                                  user?.user?.sportman?.id
                                )
                                  ? 'Inscrito!'
                                  : 'Inscríbete en la oferta'}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      )
                    }
                  })
              ) : (
                <View
                  style={{
                    width: '100%',
                    alignSelf: 'center',
                    alignItems: 'center'
                  }}
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
                    No hay ofertas disponibles basadas en su búsqueda!
                  </Text>
                </View>
              )}
            </PagerView>
            {offers.length > 1 && (
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 15,
                    marginBottom: '6%',

                    marginHorizontal: '10%'
                  }}
                >
                  <ScrollView
                    horizontal={true}
                    style={{ width: '100%', flex: 1 }}
                    contentContainerStyle={{
                      width: cantPage1 > 20 ? '' : '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignContent: 'center'
                    }}
                    showsHorizontalScrollIndicator={false}
                  >
                    {offer
                      .filter((offer) => offer.paused === false)
                      .filter((offer) => {
                        // const filteredUserMatches = userMatches.filter(
                        //   (match) => match.offerId && match.offerId !== offer.id
                        // )
                        const alreadyJoined = user?.user?.offers?.find(
                          (of) => of.id === offer.id
                        )
                        // if (filteredUserMatches.length > 0) {
                        //   return false
                        // }
                        if (alreadyJoined) {
                          return false
                        }
                        return true
                      })
                      .slice(
                        0,
                        user?.user?.plan === 'pro' ||
                          user?.user?.plan === 'star'
                          ? 1000
                          : 20
                      )
                      .filter((offer) => offer.paused === false)
                      .filter((off) => {
                        if (search.length > 0) {
                          if (
                            off.province
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            off.posit
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            off.category
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                            off.sexo
                              .toLowerCase()
                              .includes(search.toLowerCase())
                          ) {
                            return true
                          } else {
                            return false
                          }
                        } else {
                          return true
                        }
                      })
                      .filter((offer) => {
                        // const filteredUserMatches = userMatches.filter(
                        //   (match) => match.offerId && match.offerId !== offer.id
                        // )
                        const alreadyJoined = user?.user?.offers?.find(
                          (of) => of.id === offer.id
                        )
                        // if (filteredUserMatches.length > 0) {
                        //   return false
                        // }
                        if (alreadyJoined) {
                          return false
                        }
                        return true
                      })
                      .slice(
                        0,
                        user?.user?.plan === 'pro' ||
                          user?.user?.plan === 'star'
                          ? 1000
                          : 20
                      )
                      .sort((a, b) => {
                        const first = a.inscriptions?.length || 0
                        const second = b.inscriptions?.length || 0
                        return byRelevance ? second - first : first - second
                      })
                      .map((_, index) => (
                        <View
                          key={index}
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginHorizontal: 2,
                            backgroundColor:
                              index === currentPage ? mainColor : 'gray'
                          }}
                        />
                      ))}
                  </ScrollView>
                </View>
              </View>
            )}
            {selectOfferComponent === 'todas' &&
              offer
                .filter((off) => {
                  if (search.length > 0) {
                    if (
                      off.province
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      off.posit.toLowerCase().includes(search.toLowerCase()) ||
                      off.category
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      off.sexo.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return true
                    } else {
                      return false
                    }
                  } else {
                    return true
                  }
                })
                .filter((offer) => {
                  const alreadyJoined = user?.user?.offers?.find(
                    (of) => of.id === offer.id
                  )

                  if (alreadyJoined) {
                    return false
                  }
                  return true
                }).length > 30 &&
              user?.user?.plan === 'basic' &&
              !user?.user?.prop1?.plans && (
                <TouchableOpacity
                  style={{
                    backgroundColor: Color.wHITESPORTSMATCH,
                    width: '65%',
                    justifyContent: 'center',
                    paddingVertical: 6,
                    alignSelf: 'center',
                    zIndex: 3,
                    marginBottom: 20,
                    borderRadius: Border.br_81xl,
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                  onPress={() =>
                    user?.user?.plan === 'pro' ||
                    user?.user?.plan === 'star' ||
                    user?.user?.prop1?.plans
                      ? null
                      : setShowPremiumModal(true)
                  }
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      width: '100%',
                      fontFamily: FontFamily.t4TEXTMICRO,
                      fontWeight: 600,
                      fontSize: scalableFontSize(12),
                      textAlign: 'center'
                    }}
                  >
                    Ver más ofertas
                  </Text>
                </TouchableOpacity>
              )}
          </View>
        ) : (
          selectOfferComponent === 'todas' && (
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginTop: 60,
                  marginBottom: 20,
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: 400,
                  fontSize: 14,
                  color: Color.wHITESPORTSMATCH,
                  bottom: 4,
                  textAlign: 'center'
                }}
              >
                {search?.length > 0
                  ? 'No encontramos resultados para su búsqueda.'
                  : `Con tu modelo de suscripción no puedes visualizar más ofertas deportívas de los clubs.`}
              </Text>
            </View>
          )
        )}

        {/* ============================ FAVORITE OFFERS ============================ */}
        {selectOfferComponent !== 'todas' &&
        user?.user?.offers &&
        user?.user?.offers
          .filter((off) => {
            if (search.length > 0) {
              if (
                off.province.toLowerCase().includes(search.toLowerCase()) ||
                off.posit.toLowerCase().includes(search.toLowerCase()) ||
                off.category.toLowerCase().includes(search.toLowerCase()) ||
                off.sexo.toLowerCase().includes(search.toLowerCase())
              ) {
                return true
              } else {
                return false
              }
            } else {
              return true
            }
          })
          .filter((offer) => {
            return true
          }).length > 0 ? (
          <View
            keyboardShouldPersistTaps={'always'}
            style={{ flex: 1, paddingBottom: 20 }}
          >
            <PagerView
              onPageSelected={(event) =>
                setCurrentPage(event.nativeEvent.position)
              }
              initialPage={0}
              style={{ flex: 1, width: '100%', height: 500, gap: 15 }}
            >
              {user?.user?.offers
                .filter((off) => {
                  if (search.length > 0) {
                    if (
                      off.province
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      off.posit.toLowerCase().includes(search.toLowerCase()) ||
                      off.category
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      off.sexo.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return true
                    } else {
                      return false
                    }
                  } else {
                    return true
                  }
                })
                .filter((offer) => {
                  return true
                })
                .map((offer, index) => (
                  <View
                    key={index}
                    style={{
                      marginTop: 10,
                      padding: 22,
                      marginHorizontal: 20,
                      backgroundColor: '#252525',
                      borderRadius: 10,
                      alignItems: 'center',
                      borderColor: '#505050',
                      borderWidth: 1,
                      // height: Dimensions.get('screen').height / 2
                      flex: 1
                    }}
                  >
                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderColor: '#505050',
                        flexDirection: 'row',
                        zIndex: 5,
                        flex: 1
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          borderEndWidth: 1,
                          borderColor: '#505050'
                        }}
                      >
                        <CardInfoOffers
                          text="Sexo"
                          value={
                            offer.sexo === 'Male' ? 'Masculino' : 'Femenino'
                          }
                        />
                        <View
                          style={{
                            position: 'absolute',
                            right: -15,
                            bottom: -15,
                            height: 30,
                            width: 30,
                            backgroundColor: '#252525',
                            borderRadius: 50
                          }}
                        ></View>
                      </View>

                      <View
                        style={{
                          flex: 1
                        }}
                      >
                        <CardInfoOffers
                          category={true}
                          text="Categoría"
                          value={offer.category}
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        borderBottomWidth: 1,
                        borderColor: '#505050',
                        flexDirection: 'row',
                        zIndex: 2,
                        flex: 1
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          borderEndWidth: 1,
                          borderColor: '#505050'
                        }}
                      >
                        <CardInfoOffers text="Posición" value={offer?.posit} />
                        <View
                          style={{
                            position: 'absolute',
                            right: -15,
                            bottom: -15,
                            height: 30,
                            width: 30,
                            backgroundColor: '#252525',
                            borderRadius: 50
                          }}
                        ></View>
                      </View>
                      <View
                        style={{
                          flex: 1
                        }}
                      >
                        <CardInfoOffers
                          text="Ubicacion"
                          value={offer?.province || 'Random'}
                        />
                      </View>
                    </View>

                    <View style={{ flexDirection: 'row', zIndex: -1, flex: 1 }}>
                      <View
                        style={{
                          flex: 1,
                          borderEndWidth: 1,
                          borderColor: '#505050'
                        }}
                      >
                        <CardInfoOffers
                          text="Urgencia"
                          value={offer?.urgency}
                        />
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderColor: '#505050'
                        }}
                      >
                        <CardInfoOffers
                          text="Retribucion"
                          value={
                            offer.retribution === false ? 'No' : offer.prop1
                          }
                        />
                      </View>
                    </View>

                    <View
                      style={{
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 30,
                        zIndex: 10
                      }}
                    >
                      <TouchableOpacity
                        disabled={signinToOffer}
                        onPress={async () => {
                          if (true) {
                            setSigninToOffer(true)
                            if (sportman) {
                              try {
                                await dispatch(updateOffers(offer?.id))
                                dispatch(
                                  deleteSignToOffer({
                                    offerId: offer?.id,
                                    userId: user.user?.id
                                  })
                                ).then((data) => {
                                  console.log(data, 'dataaa')
                                  dispatch(getAllOffers())
                                  dispatch(getUserData(user?.user?.id))

                                  ToastAndroid.show(
                                    'Inscripción cancelada',
                                    ToastAndroid.SHORT
                                  )
                                })
                              } catch (error) {
                                console.log('Error on inscription..', error)
                                setSigninToOffer(false)
                              } finally {
                                setSigninToOffer(false)
                              }
                            } else {
                              console.log('SPORTMAN NOT FOUND!.')
                            }
                          }
                        }}
                        style={{
                          width: '70%',
                          paddingHorizontal: Padding.p_mini,
                          justifyContent: 'center',
                          borderRadius: Border.br_81xl,
                          flexDirection: 'row',
                          alignItems: 'center',
                          zIndex: 5,
                          backgroundColor: mainColor,
                          minHeight: 35
                        }}
                      >
                        <Text
                          style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontWeight: '700',
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontSize: scalableFontSize(17)
                          }}
                        >
                          Cancelar inscripción
                        </Text>
                      </TouchableOpacity>
                    </View>
                    {/* <Image
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      zIndex: 1,
                      borderRadius: 8,
                      overflow: 'hidden'
                    }}
                    source={require('../assets/group-4891.png')}
                  /> */}
                  </View>
                ))}
            </PagerView>
            {user?.user?.offers.length > 0 && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 15,
                  marginBottom: '2%',
                  marginHorizontal: 100
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{ flex: 1 }}
                  contentContainerStyle={{
                    width: cantPage2 > 20 ? '' : '100%',

                    alignItems: 'center',
                    justifyContent: 'center',
                    alignContent: 'center'
                  }}
                >
                  {user?.user?.offers
                    .filter((off) => {
                      if (search.length > 0) {
                        if (
                          off.province
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          off.posit
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          off.category
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          off.sexo.toLowerCase().includes(search.toLowerCase())
                        ) {
                          return true
                        } else {
                          return false
                        }
                      } else {
                        return true
                      }
                    })
                    .map((_, index) => (
                      <View
                        key={index}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          marginHorizontal: 2,
                          backgroundColor:
                            index === currentPage ? mainColor : 'gray'
                        }}
                      />
                    ))
                    .slice(0, 15)}
                </ScrollView>
              </View>
            )}
          </View>
        ) : (
          selectOfferComponent !== 'todas' && (
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                alignItems: 'center'
              }}
            >
              <Text
                style={{
                  marginTop: 60,
                  fontFamily: FontFamily.t4TEXTMICRO,
                  fontWeight: 400,
                  fontSize: 14,
                  color: Color.wHITESPORTSMATCH,
                  bottom: 4
                }}
              >
                {search?.length > 0
                  ? 'No encontramos resultados para su búsqueda.'
                  : '¡Aún no hay ofertas activas!'}
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
          animationType="fade"
        >
          <TouchableWithoutFeedback
            onPress={() => setModalFilterSportman(false)}
          >
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                paddingTop: 122,
                paddingHorizontal: 20
              }}
            >
              <FiltersSportman
                byRelevance={byRelevance}
                setByRelevance={setByRelevance}
                setSelectedSports={setSelectedSports}
                selectedSports={selectedSports}
                setOffer={setOffer}
                offer={offers}
                sports={[
                  { name: 'Hockey' },
                  { name: 'Fútbol Sala' },
                  { name: 'Baloncesto' },
                  { name: 'Fútbol' },
                  { name: 'Voley' },
                  { name: 'Handball' }
                ]}
                onClose={() => setModalFilterSportman(false)}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </KeyboardAvoidingView>
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
    height: Dimensions.get('screen').height / 1.1,
    paddingVertical: 20
  }
})

export default TodasLasOfertas
