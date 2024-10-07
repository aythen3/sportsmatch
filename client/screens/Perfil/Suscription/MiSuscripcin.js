import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  Color,
  Padding,
  Border,
  FontFamily,
  FontSize
} from '../../../GlobalStyles'
import SilverSuscription from '../../../components/Suscripciones/SilverSuscription'
import GoldSuscription from '../../../components/Suscripciones/GoldSuscription'
import StarSuscription from '../../../components/Suscripciones/StarSuscription'
import { useStripe, PaymentSheetError } from '@stripe/stripe-react-native'
import axiosInstance from '../../../utils/apiBackend'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../../redux/actions/users'
import SilverSuscriptionClub from '../../../components/Suscripciones/SilverSuscriptionClub'
import GoldSuscriptionClub from '../../../components/Suscripciones/GoldSuscriptionClub'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeaderBack from '../../../components/CustomHeaderBack'
import axios from 'axios'

const MiSuscripcin = () => {
  const navigation = useNavigation()
  const [clientSecret, setClientSecret] = useState(null)
  const [planSelected, setPlanSelected] = useState(null)
  const [planSelectedId, setPlanSelectedId] = useState('')
  const [nextPayment, setNextPayment] = useState('')
  const [planInterval, setPlanInterval] = useState('')

  const [plansData, setPlansData] = useState([])

  const [deletePlan, setDeletePlan] = useState(false)

  const mesesDelAño = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ]

  const { user } = useSelector((state) => state.users)

  const dispatch = useDispatch()

  const { initPaymentSheet, presentPaymentSheet } = useStripe(null)

  React.useEffect(() => {
    const initializePaymentSheet = async () => {
      setDeletePlan(false)
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
          console.log(user, 'user')
          const updUser = await axiosInstance
            .patch(`user/${user?.user?.id}`, {
              plan: planSelected,
              planId: planSelectedId,
              prop1: {
                plans: user?.user?.prop1?.plans
                  ? [...user?.user?.prop1?.plans, planSelectedId]
                  : [planSelectedId]
              }
            })
            .finally(
              async () =>
                await dispatch(getUserData(user?.user?.id)).then((e) => {
                  const getinfo = async () => {
                    const res = await axiosInstance.get(
                      `user/subscription/${user?.user?.planId}`
                    )
                    return res.data
                  }
                  navigation.navigate('SuscriptionChange', {
                    suscription: {
                      plan: planSelected,
                      user,
                      nextPayment
                    }
                  })
                  console.log(e, 'eeeeeeeeeee', user)
                })
            )
        }
      }
    }

    if (clientSecret) {
      initializePaymentSheet()
    }
  }, [clientSecret, initPaymentSheet])

  const getPlanName = (planId) => {
    switch (planId) {
      case 'price_1Plj60GmE60O5ob7lsmKEbPK':
        return 'PRO (Anual)'
      case 'price_1PbXiXGmE60O5ob7jb0U2Wap':
        return 'PRO (Mensual)'
      case 'price_1PbXgIGmE60O5ob7mAwCw3YQ':
        return 'GOLD'
      case 'price_1PbXhFGmE60O5ob7cTUy19CD':
        return 'STAR (Mensual)'
      case 'price_1Plj8LGmE60O5ob768A57ICn':
        return 'STAR (Anual)'
      default:
        return 'Unknown plan'
    }
  }

  useEffect(() => {
    const getinfo = async (planId) => {
      const res = await axiosInstance.get(`user/subscription/${planId}`)
      return res.data
    }

    if (user?.user?.planId) {
      getinfo(user.user.planId).then((subscription) => {
        console.log(subscription, 'susss')
        const currentDate = new Date(subscription.current_period_end * 1000)
        const interval = subscription.plan.interval
        const intervalCount = subscription.plan.interval_count

        if (interval === 'month') {
          currentDate.setMonth(currentDate.getMonth() + (intervalCount - 1))
          setPlanInterval(getPlanName(subscription.plan.id))
        } else if (interval === 'year') {
          setPlanInterval(getPlanName(subscription.plan.id))

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
        setNextPayment(formattedDate)
        console.log(formattedDate, 'payment')
      })
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

  const handleCancelSuscription = async () => {
    try {
      const { data } = await axiosInstance.post('user/cancel-subscription', {
        planId: user.user.planId
      })
      console.log(data, 'datita')
      if (data) {
        setDeletePlan(false)
        const updUser = await axiosInstance
          .patch(`user/${user.user.id}`, {
            plan: 'basic',
            planId: ''
          })
          .then(() => {
            navigation.navigate('SuscriptionChange', {
              suscription: {
                plan: 'basic',
                nextPayment,
                user
              }
            })
            dispatch(getUserData(user?.user?.id))
          })
        return data
      }
    } catch (error) {
      console.log(error, 'error')
    }
  }

  return (
    <SafeAreaView style={styles.miSuscripcin}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 10 }}
        keyboardShouldPersistTaps={'always'}
      >
        <CustomHeaderBack header={'Mi suscripción'}></CustomHeaderBack>

        <View style={{ paddingHorizontal: 10 }}>
          <View>
            {/* {plansData && (
              <Text style={[styles.esteEsTu, styles.esteEsTuFlexBox]}>
                Beneficios activos
              </Text>
            )} */}
            {plansData &&
              plansData.map((plan, i) => {
                if (plan.planId !== user.user.planId) {
                  return (
                    <View>
                      <Text
                        style={[
                          styles.esteEsTu,
                          styles.esteEsTuFlexBox,
                          { color: 'gray', marginTop: 5 }
                        ]}
                      >
                        {plan.planName}
                      </Text>
                      <Text
                        style={[
                          styles.esteEsTu,
                          styles.esteEsTuFlexBox,
                          { color: 'gray', marginTop: 5 }
                        ]}
                      >
                        expira el {plan.expirationDate.slice(0, 2)} de{' '}
                        {mesesDelAño[plan.expirationDate.slice(3, 5) - 1]} de{' '}
                        {plan.expirationDate.slice(6, 10)}
                      </Text>
                    </View>
                  )
                }
              })}
            <Text style={[styles.esteEsTu, styles.esteEsTuFlexBox]}>
              Este es tu plan actual
            </Text>
            {planInterval && (
              <Text
                style={[
                  styles.esteEsTu,
                  styles.esteEsTuFlexBox,
                  { fontWeight: 500 }
                ]}
              >
                Plan {planInterval}
              </Text>
            )}
            {user.user.planId && (
              <Text
                style={[
                  styles.esteEsTu,
                  styles.esteEsTuFlexBox,
                  { color: 'gray', marginTop: 5 }
                ]}
              >
                {user.user.club && user.user.plan === 'pro'
                  ? ''
                  : nextPayment
                    ? `Se renueva el ${nextPayment.slice(0, 2)} de ${mesesDelAño[nextPayment.slice(3, 5) - 1]} de ${nextPayment.slice(6, 10)}`
                    : ''}
              </Text>
            )}
          </View>

          <View style={{ marginTop: 30, gap: 30 }}>
            {user?.user?.plan === 'basic' && !user.user.club && (
              <SilverSuscription />
            )}
            {user?.user?.plan === 'basic' && user.user.club && (
              <SilverSuscriptionClub />
            )}

            {user?.user?.plan === 'pro' && !user.user.club && (
              <GoldSuscription
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
                suscription={planInterval}
                handleCancelSuscription={handleCancelSuscription}
                myPlan={true}
                deletePlan={deletePlan}
                setDeletePlan={setDeletePlan}
              />
            )}

            {user?.user?.plan === 'pro' && user.user.club && (
              <GoldSuscriptionClub
                handleCancelSuscription={handleCancelSuscription}
                myPlan={true}
                deletePlan={deletePlan}
                setDeletePlan={setDeletePlan}
              />
            )}
            {/* {user?.user?.plan === 'pro' && user.user.type === 'club' && (
              <GoldSuscriptionClub
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
              />
            )} */}
            {/* {user?.user?.plan === 'pro' && user.user.type !== 'club' && (
              <GoldSuscription
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
              />
            )} */}

            {user?.user?.plan === 'star' && (
              <StarSuscription
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
                suscription={planInterval}
                handleCancelSuscription={handleCancelSuscription}
                myPlan={true}
                deletePlan={deletePlan}
                setDeletePlan={setDeletePlan}
              />
            )}

            <View>
              <Text style={[styles.esteEsTu, styles.esteEsTuFlexBox]}>
                Otros planes
              </Text>
            </View>
            {user?.user?.plan !== 'basic' && user.user.type === 'club' && (
              <SilverSuscriptionClub />
            )}

            {user?.user?.plan === 'star' && user.user.type == 'sportman' && (
              <SilverSuscription />
            )}
            {user?.user?.plan === 'pro' && user.user.type == 'sportman' && (
              <SilverSuscription />
            )}

            {user.user?.plan !== 'pro' && !user.user.club && (
              <GoldSuscription
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
              />
            )}
            {user?.user?.plan !== 'pro' && user.user.type === 'club' && (
              <GoldSuscriptionClub
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
              />
            )}
            {user?.user?.plan !== 'star' && user.user.type === 'club' && (
              <StarSuscription
                setPlanSelected={setPlanSelected}
                setClientSecret={setClientSecret}
                setPlanSelectedId={setPlanSelectedId}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    marginLeft: -185,
    left: '50%'
  },

  esteEsTuFlexBox: {
    textAlign: 'center',
    marginTop: 20,
    // width: 358,
    color: Color.wHITESPORTSMATCH
  },
  freemiumLayout: {
    // height: 397
    // width: 370
  },
  goldSpaceBlock: {
    paddingBottom: Padding.p_11xl,
    borderRadius: Border.br_mini,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    overflow: 'hidden'
  },
  ofertasTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  timeTypo: {
    fontWeight: '600',
    textAlign: 'center'
  },
  creacinGratisDelLayout: {
    marginLeft: 5,
    // width: 260,
    lineHeight: 16,
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left'
  },
  aceptarBorder: {
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'absolute'
  },
  aceptarFlexBox: {
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  aceptar1Typo: {
    color: Color.bLACK1SPORTSMATCH,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupLayout: {
    height: 12,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  miSuscripcin2: {
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  miSuscripcin1: {
    marginLeft: 9
  },
  cooliconParent: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row'
  },
  cabezera: {
    width: 163,
    height: 22
  },
  esteEsTu: {
    // lineHeight: 14,
    // width: 358,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  freemiumChild: {
    marginLeft: -174,
    top: 52,
    borderRadius: Border.br_xs,
    borderWidth: 2,
    width: 346,
    height: 308,
    borderColor: Color.bLACK1SPORTSMATCH,
    borderStyle: 'solid',
    left: '50%',
    position: 'absolute'
  },
  freemiumItem: {
    height: 50,

    width: 358
  },
  freemium2: {
    zIndex: 1,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  gratuito: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  gratuitoWrapper: {
    // height: 47,
    // width: 358
  },
  frameWrapper: {
    height: 22
  },
  frameChild: {
    width: 10,
    height: 7
  },
  creacinGratisDel: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  vectorParent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  frameItem: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderTopWidth: 1,
    height: 1,
    marginTop: 10,
    borderStyle: 'solid'
  },
  vectorGroup: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  accesoA: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  frameView: {
    marginTop: 30
  },
  frameContainer: {
    alignItems: 'center'
  },
  silverInner: {
    marginTop: 30,
    alignItems: 'center'
  },
  marcaPlanActual: {
    borderRadius: Border.br_xl,
    borderColor: Color.wHITESPORTSMATCH,
    top: 0,
    height: 397,
    width: 370,
    left: '50%',
    marginLeft: -185
  },
  freemium: {
    marginTop: 30
  },
  frameGroup: {
    marginTop: 40
  },
  cabezeraParent: {
    justifyContent: 'center'
  },
  text: {
    fontSize: FontSize.size_21xl
  },
  mes: {
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  oTambin12440ao: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.button_size
  },
  mesOTambinContainer: {
    width: 358,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
    left: 0,
    position: 'absolute',
    top: 0
  },
  verOferta: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bLACK1SPORTSMATCH
  },
  aceptar: {
    marginTop: -13.5,
    right: '0%',
    left: '0%',
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    top: '50%',
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    borderColor: Color.bLACK1SPORTSMATCH,
    width: '100%'
  },
  boto: {
    width: 328,
    height: 27,
    marginTop: 30
  },
  gold: {
    opacity: 0.5,
    marginTop: 25
  },
  aceptar1: {
    fontSize: FontSize.button_size
  },
  loremIpsum: {
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    width: 360,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  botoFinal: {
    marginTop: 25,
    flexDirection: 'row'
  },
  frameParent: {
    top: 60,
    left: '50%',
    position: 'absolute'
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    borderColor: Color.wHITESPORTSMATCH,
    top: 0,
    borderStyle: 'solid'
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: 'absolute'
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  battery: {
    width: 25,
    right: 0,
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
    top: 7,
    width: 68,
    right: 0
  },
  time: {
    marginTop: -9.55,
    left: 4,
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.openSansSemiBold,
    top: '50%',
    fontWeight: '600',
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    width: 61
  },
  starus: {
    height: 24,
    left: 0,
    top: 0
  },
  iphone: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: 'absolute'
  },
  miSuscripcin: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    paddingBottom: 0,
    width: '100%'
  }
})

export default MiSuscripcin
