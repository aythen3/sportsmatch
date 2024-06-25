import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  BackHandler
} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import Lines from '../../components/Lines'
import EscogerDeporte2 from './EscogerDeporte2'
import EscogerDeporte1 from './EscogerDeporte1'
import Paso2Jugador from './Paso2Jugador'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { createClub, getClub } from '../../redux/actions/club'
import { Context } from '../../context/Context'
import { getUserData, updateUserClubData } from '../../redux/actions/users'
import { clearUser } from '../../redux/slices/users.slices'
import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { useStripe } from '@stripe/stripe-react-native'
import axiosInstance from '../../utils/apiBackend'

const PromocionarPost = () => {
  const { mainColor } = useSelector((state) => state.users)
  const route = useRoute()
  const data = route.params

  const navigation = useNavigation()
  const {
    coverImage,
    setCoverImage,
    profileImage,
    setProfileImage,
    provisoryProfileImage,
    setProvisoryProfileImage,
    provisoryCoverImage,
    setProvisoryCoverImage
  } = useContext(Context)
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.users)
  const { sport } = useSelector((state) => state.sports)
  const { club } = useSelector((state) => state.clubs)

  const [stepsIndex, setstepsIndex] = useState(1)
  const [optionIndex, setOptionIndex] = useState(1)

  const [sportS, setSportS] = useState('')
  const { height, width } = useWindowDimensions()

  const [clubValues, setClubValues] = useState({
    name: '',
    city: '',
    country: '',
    field: '',
    year: '',
    capacity: '',
    description: ''
  })

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
          navigation.navigate('SiguiendoJugadores')
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

  const ViewComponent = (index) => {
    switch (index) {
      case 1:
        return (
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              height: '89%',
              paddingHorizontal: 10,
              alignItems: 'center'
            }}
          >
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 9
              }}
            >
              <Image
                style={{ width: 130, height: 130, borderRadius: 5 }}
                source={{ uri: data.image[0] }}
              ></Image>
              <Text
                style={{
                  color: 'gray',
                  width: 120,
                  textAlign: 'center',
                  fontSize: 12
                }}
              >
                Vista previa en formato cuadrado
              </Text>
            </View>
            <View style={{ paddingHorizontal: 50 }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  fontWeight: 700,
                  textAlign: 'center'
                }}
              >
                Visitas a tu perfil
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 14,
                  textAlign: 'center'
                }}
              >
                El objetivo de esta promoción es que obtengas más visitas en tu
                perfil.
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: 'gray',
                paddingVertical: 8
              }}
            >
              <Text style={{ color: 'gray', fontSize: 12 }}>
                Tu publicación se destacará el la página buscar y aparecerá cómo
                promoción en el feed de seguimiento de los usuarios de tu
                deporte.
              </Text>
            </View>
          </View>
        )
      case 2:
        return (
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              height: '89%',
              paddingHorizontal: 10
            }}
          >
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 9
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  optionIndex == 1 ? setOptionIndex(0) : setOptionIndex(1)
                }
                style={{
                  width: '100%',
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  flexDirection: 'row',
                  paddingRight: 30,
                  alignItems: 'center'
                }}
              >
                <View style={{ width: '100%' }}>
                  <Text style={{ color: 'white' }}>2 días (5,00€)</Text>
                  <Text style={{ color: 'gray' }}>Te sale a 2,50 € al día</Text>
                </View>
                <Pressable
                  style={[
                    styles.circle,
                    optionIndex == 1 && { backgroundColor: mainColor }
                  ]}
                  onPress={() =>
                    optionIndex == 1 ? setOptionIndex(0) : setOptionIndex(1)
                  }
                >
                  {optionIndex == 1 && (
                    <Ionicons name="checkmark" size={10} color="white" />
                  )}
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  optionIndex == 2 ? setOptionIndex(0) : setOptionIndex(2)
                }
                style={{
                  width: '100%',
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  flexDirection: 'row',
                  paddingRight: 30,
                  alignItems: 'center'
                }}
              >
                <View style={{ width: '100%' }}>
                  <Text style={{ color: 'white' }}>5 días (10,00€)</Text>
                  <Text style={{ color: 'gray' }}>Te sale a 2,00 € al día</Text>
                </View>
                <Pressable
                  style={[
                    styles.circle,
                    optionIndex == 2 && { backgroundColor: mainColor }
                  ]}
                  onPress={() =>
                    optionIndex == 2 ? setOptionIndex(0) : setOptionIndex(2)
                  }
                >
                  {optionIndex == 2 && (
                    <Ionicons name="checkmark" size={10} color="white" />
                  )}
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  optionIndex == 3 ? setOptionIndex(0) : setOptionIndex(3)
                }
                style={{
                  width: '100%',
                  borderBottomColor: 'gray',
                  borderBottomWidth: 1,
                  paddingBottom: 10,
                  flexDirection: 'row',
                  paddingRight: 30,
                  alignItems: 'center'
                }}
              >
                <View style={{ width: '100%' }}>
                  <Text style={{ color: 'white' }}>15 días (22,00€)</Text>
                  <Text style={{ color: 'gray' }}>Te sale a 1,50€ al día</Text>
                </View>
                <Pressable
                  style={[
                    styles.circle,
                    optionIndex == 3 && { backgroundColor: mainColor }
                  ]}
                  onPress={() =>
                    optionIndex == 3 ? setOptionIndex(0) : setOptionIndex(3)
                  }
                >
                  {optionIndex == 3 && (
                    <Ionicons name="checkmark" size={10} color="white" />
                  )}
                </Pressable>
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderColor: 'gray',
                paddingVertical: 8
              }}
            >
              <Text style={{ color: 'gray' }}>Presupuesto publicitario</Text>
              <Text style={{ color: 'white', fontSize: 30, fontWeight: 700 }}>
                {optionIndex == 1 && '5,00€'}
                {optionIndex == 2 && '10,00€'}
                {optionIndex == 3 && '22,00€'}
              </Text>
            </View>
          </View>
        )
      case 3:
        return (
          <View style={{ paddingHorizontal: 10 }}>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 14
              }}
            >
              <Text style={{ color: 'white' }}>Beneficiario y pagador</Text>
              <Text
                style={{ color: 'gray' }}
              >{`Beneficiario: ${user?.user?.type !== 'club' ? user.user.nickname : club.name}`}</Text>
              <Text
                style={{ color: 'gray' }}
              >{`Pagador: ${user?.user?.type !== 'club' ? user.user.nickname : club.name}`}</Text>
            </View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 14
              }}
            >
              <Text style={{ color: 'white' }}>Objetivo</Text>
              <Text style={{ color: 'gray' }}>
                {`Visitas en el perfil de ${user?.user?.type !== 'club' ? user.user.nickname : club.name}`}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 14
              }}
            >
              <Text style={{ color: 'white' }}>Audiencia</Text>
              <Text style={{ color: 'gray' }}>
                Jugadores / Profesional deporte / Clubes / Scouters /
                Representantes
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 14
              }}
            >
              <Text style={{ color: 'white' }}>Presupuesto</Text>
              <Text style={{ color: 'gray' }}>
                {optionIndex == 1 && '5,00€'}
                {optionIndex == 2 && '10,00€'}
                {optionIndex == 3 && '22,00€'}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 14
              }}
            >
              <Text style={{ color: 'white' }}>Duración</Text>
              <Text style={{ color: 'gray' }}>
                {optionIndex == 1 && '2 días'}
                {optionIndex == 2 && '5 días'}
                {optionIndex == 3 && '15 días'}
              </Text>
            </View>
            <View
              style={{
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 14,
                gap: 7
              }}
            >
              <Text style={{ color: 'white' }}>Método de pago</Text>
              <Image source={require('../../assets/visa.png')}></Image>
              <Text style={{ color: 'gray' }}>Visa · 3691</Text>
            </View>
          </View>
        )
      default:
        return null
    }
  }

  const back = async () => {
    // await dispatch(clearUser())
    navigation.goBack()
  }

  return (
    <View
      style={{
        ...styles.escogerDeporte,
        height: height,
        width: width,
        flex: 1
      }}
    >
      <Image
        style={{
          ...styles.escogerDeporteChild
        }}
        contentFit="cover"
        source={require('../../assets/group-2412.png')}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          top: 10,
          justifyContent: 'space-between',
          right: 0,
          paddingHorizontal: 20,
          marginBottom: 60
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Image
            style={styles.coolicon}
            contentFit="cover"
            source={require('../../assets/coolicon.png')}
          />
          <Pressable
            onPress={() =>
              stepsIndex === 1 ? back() : setstepsIndex((prev) => prev - 1)
            }
          >
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Pressable onPress={() => navigation.navigate('SiguiendoJugadores')}>
            <Text style={[styles.atrs, styles.atrsTypo]}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop: -30 }}>
        <Text style={styles.paso2}>Paso {stepsIndex}</Text>
        <Text style={styles.detallesDelClub}>
          {stepsIndex === 1 && 'Objetivo'}
          {stepsIndex === 2 && 'Duración y presupuesto'}
          {stepsIndex === 3 && 'Revisión'}
        </Text>
      </View>
      <Lines club={true} index={stepsIndex} color={mainColor} />

      <View
        style={{
          justifyContent: 'space-between',
          height: '100%',
          flex: 1,
          paddingVertical: 20
        }}
      >
        {ViewComponent(stepsIndex)}

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => {
            stepsIndex === 3
              ? handleRegister()
              : setstepsIndex((prev) => prev + 1)
          }}
        >
          <Text style={styles.nextText}>
            {stepsIndex == 3 ? 'Promocionar publicación' : 'Siguiente'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkedCircle: {
    backgroundColor: 'green'
  },
  detallesDelClub: {
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: '500',
    width: '100%',
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  paso2: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: '100%',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: 'center'
  },
  atrs: {
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  coolicon: {
    height: 15,
    width: 10,
    marginRight: 8
  },
  atrsParent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    top: 0,
    justifyContent: 'flex-end',
    right: 20,
    marginBottom: 50
  },
  escogerDeporteChild: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  escogerDeporte: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  nextText: {
    fontSize: FontSize.button_size,
    fontWeight: '700',
    color: Color.bLACK1SPORTSMATCH
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    paddingVertical: Padding.p_3xs
  }
})

export default PromocionarPost
