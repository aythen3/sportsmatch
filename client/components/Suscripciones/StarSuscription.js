import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import axiosInstance from '../../utils/apiBackend'
import { useSelector } from 'react-redux'

const GoldSuscription = ({
  setClientSecret,
  setPlanSelected,
  setPlanSelectedId,
  myPlan,
  handleCancelSuscription,
  deletePlan,
  setDeletePlan
}) => {
  const { user } = useSelector((state) => state.users)

  const handleGetStar = async () => {
    const res = await axiosInstance.post('/user/create-subscription', {
      priceId: 'price_1PbXhFGmE60O5ob7cTUy19CD',
      customerId: user.user.stripeId
    })
    if (res.data) {
      setPlanSelectedId(res.data.subscription.subscriptionId)
      setPlanSelected('star')
      setClientSecret(
        res.data.subscription.clientSecret.latest_invoice.payment_intent
          .client_secret
      )

      // console.log(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret,"res dataaa")
    }
  }

  const handleGetStarAnual = async () => {
    const res = await axiosInstance.post('/user/create-subscription', {
      priceId: 'price_1Plj8LGmE60O5ob768A57ICn',
      customerId: user.user.stripeId
    })
    if (res.data) {
      setPlanSelectedId(res.data.subscription.subscriptionId)
      setPlanSelected('star')
      setClientSecret(
        res.data.subscription.clientSecret.latest_invoice.payment_intent
          .client_secret
      )

      // console.log(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret,"res dataaa")
    }
  }
  return (
    <View>
      <View style={styles.goldSpaceBlock}>
        <View style={styles.container}>
          <LinearGradient
            style={styles.gradient}
            colors={['#1FFFBC', '#FF00E6']}
            locations={[0, 1]}
            start={[0.0, 1.0]}
            end={[1.0, 0.0]}
          ></LinearGradient>
          <Text style={[styles.freemium2, styles.ofertasTypo]}>STAR</Text>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <Text style={{ textAlign: 'center', color: 'white' }}>
            Descuento 60%
          </Text>
        </View>

        <View style={styles.silverInner}>
          <View style={styles.frameContainer}>
            <View style={{ width: '100%' }}>
              <View style={{ width: '100%' }}>
                {/* <Text
                  style={{
                    ...styles.gratuito,
                    textDecorationLine: 'line-through'
                  }}
                >
                  316,25€/mes
                </Text>
                <Text
                  style={{
                    ...styles.timeTypo,
                    textDecorationLine: 'line-through'
                  }}
                >
                  3.150,25€/año
                </Text>
                <View style={{ flexDirection: 'column', gap: 5 }}>
                  <Text style={{ ...styles.gratuito, color: 'red' }}>
                    DTE. 60%
                  </Text>
                  <Text style={{ ...styles.gratuito }}>126,5€/mes</Text>
                </View>
                <Text style={{ ...styles.timeTypo }}>1.260,1€/año</Text> */}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    borderBottomWidth: 1,
                    borderColor: '#e6b300'
                  }}
                >
                  <Text
                    style={{
                      ...styles.timeTypo,

                      textDecorationLine: 'line-through',
                      color: 'red'
                    }}
                  >
                    316,25€/mes
                  </Text>
                  <Text style={{ ...styles.gratuito }}>126,5€/mes</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                    justifyContent: 'space-between'
                  }}
                >
                  <Text
                    style={{
                      ...styles.timeTypo,
                      textDecorationLine: 'line-through',
                      color: 'red'
                    }}
                  >
                    3.150,25€/año
                  </Text>
                  <Text style={{ ...styles.gratuito }}>1.260,1€/año</Text>
                </View>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../../assets/vector-27.png')}
                />
                <Text
                  style={[
                    styles.creacinGratisDel,
                    styles.creacinGratisDelLayout
                  ]}
                >
                  Creación gratis del perfil del club
                </Text>
              </View>
              <View style={styles.frameItem} />
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../../assets/vector-27.png')}
                />
                <Text
                  style={[
                    styles.creacinGratisDel,
                    styles.creacinGratisDelLayout
                  ]}
                >
                  Acceso a la red social 
                </Text>
              </View>
              <View style={styles.frameItem} />
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../../assets/vector-27.png')}
                />
                <Text
                  style={[
                    styles.creacinGratisDel,
                    styles.creacinGratisDelLayout
                  ]}
                >
                  Acceso al buscador de jugadores/as y profesionales del deporte
                </Text>
              </View>
              <View style={styles.frameItem} />
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../../assets/vector-27.png')}
                />
                <Text
                  style={[
                    styles.creacinGratisDel,
                    styles.creacinGratisDelLayout
                  ]}
                >
                  Número ilimitado de Match
                </Text>
              </View>
              <View style={styles.frameItem} />
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../../assets/vector-27.png')}
                />
                <Text
                  style={[
                    styles.creacinGratisDel,
                    styles.creacinGratisDelLayout
                  ]}
                >
                  Publicación gratis e ilimitada de anuncios de ofertas
                  deportivas
                </Text>
              </View>
              <View style={styles.frameItem} />
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../../assets/vector-27.png')}
                />
                <Text style={styles.creacinGratisDelLayout}>
                  <Text style={styles.accesoA}>{`Acceso `}</Text>
                  <Text style={styles.ofertasTypo}>ilimitado</Text>
                  <Text style={styles.accesoA}>
                    {' '}
                    a las personas inscritas en tu oferta 
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        {!deletePlan && !myPlan && (
          <TouchableOpacity
            onPress={handleGetStar}
            style={{
              width: '95%',
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 25,
              borderColor: '#000',
              borderRadius: 100,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={styles.ofertasTypo}>{'Seleccionar plan mensual'}</Text>
          </TouchableOpacity>
        )}
        {!deletePlan && !myPlan && (
          <TouchableOpacity
            onPress={handleGetStarAnual}
            style={{
              width: '95%',
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 25,
              borderColor: '#000',
              borderRadius: 100,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={styles.ofertasTypo}>{'Seleccionar plan anual'}</Text>
          </TouchableOpacity>
        )}
        {myPlan && !deletePlan && (
          <TouchableOpacity
            onPress={() => setDeletePlan(true)}
            style={{
              width: '95%',
              borderWidth: 1,
              alignSelf: 'center',
              marginTop: 25,
              borderColor: '#000',
              borderRadius: 100,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text style={styles.ofertasTypo}>Cancelar suscripcion</Text>
          </TouchableOpacity>
        )}
        {deletePlan && (
          <View style={{ paddingTop: 20, width: '100%' }}>
            <Text style={{ textAlign: 'center' }}>
              Seguro quieres cancelar?
            </Text>
            <TouchableOpacity
              onPress={() => setDeletePlan(false)}
              style={{
                width: '95%',
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 14,
                borderColor: '#000',
                borderRadius: 100,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={styles.ofertasTypo}>Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleCancelSuscription}
              style={{
                width: '95%',
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 14,
                borderColor: '#000',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: 100,
                height: 30,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text style={{ ...styles.ofertasTypo, color: 'white' }}>
                Confirmar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {/* <View style={[styles.marcaPlanActual, styles.aceptarBorder]} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  goldSpaceBlock: {
    paddingBottom: Padding.p_11xl,
    borderRadius: Border.br_mini,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    overflow: 'hidden'
  },
  freemium2: {
    zIndex: 1,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  ofertasTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  silverInner: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%'
  },
  frameContainer: {
    alignItems: 'center',
    width: '100%'
  },
  gratuito: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.t4TEXTMICRO,
    color: '#ff00e6',
    fontWeight: '700',
    textAlign: 'center'
  },
  timeTypo: {
    fontWeight: '600',
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  frameView: {
    marginTop: 30
  },
  vectorParent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  frameChild: {
    width: 10,
    height: 7
  },
  creacinGratisDel: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  creacinGratisDelLayout: {
    marginLeft: 5,
    lineHeight: 16,
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left'
  },
  frameItem: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderTopWidth: 1,
    height: 1,
    marginTop: 10,
    borderStyle: 'solid'
  },
  vectorParent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  accesoA: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  accesoA: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  container: {
    width: '100%',
    height: 80,
    backgroundColor: Color.colorSilver,
    justifyContent: 'center'
  },
  gradient: {
    width: '100%',
    height: 500,
    transform: [{ scaleY: 0.16 }],
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GoldSuscription
