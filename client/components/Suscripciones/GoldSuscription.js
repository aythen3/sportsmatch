import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
// import { useSelector } from 'react-redux'
import { Image } from 'expo-image'
import {
  Border,
  Color,
  FontFamily,
  FontSize,
  Padding
} from '../../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import axios from 'axios'
import axiosInstance from '../../utils/apiBackend'
import AsyncStorage from '@react-native-async-storage/async-storage'
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

  const handleGetGold = async () => {
    const res = await axiosInstance.post('/user/create-subscription', {
      priceId: 'price_1PbXiXGmE60O5ob7jb0U2Wap',
      customerId: user.user.stripeId
    })

    if (res.data) {
      setPlanSelected('pro')
      setClientSecret(
        res.data.subscription.clientSecret.latest_invoice.payment_intent
          .client_secret
      )
      setPlanSelectedId(res.data.subscription.subscriptionId)
    }
  }

  return (
    <View>
      <View style={styles.goldSpaceBlock}>
        <View
          style={{
            width: '100%',
            height: 80,
            backgroundColor: Color.colorSilver,
            justifyContent: 'center'
          }}
        >
          <LinearGradient
            style={{
              width: '100%',
              height: 500,
              transform: [{ scaleY: 0.16 }],
              position: 'absolute',
              left: 0,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            colors={[
              '#e6b300',
              '#bd9710',
              '#ebc02a',
              '#e6b300',
              '#bd9710',
              '#ebc02a'
            ]}
            locations={[0, 0.18, 0.38, 0.58, 0.79, 1]}
            start={[0.0, 1.0]}
            end={[1.0, 0.0]}
          ></LinearGradient>
          <Text
            style={{
              zIndex: 1,
              textAlign: 'center',
              color: Color.wHITESPORTSMATCH,
              fontSize: FontSize.h3TitleMEDIUM_size,
              fontWeight: '700',
              fontFamily: FontFamily.t4TEXTMICRO
            }}
          >
            PRO
          </Text>
        </View>

        <View style={styles.silverInner}>
          <View style={styles.frameContainer}>
            <View>
            <View style={styles.gratuitoWrapper}>
                <Text style={{...styles.gratuito,textDecorationLine:"line-through"}}>12,90€/mes</Text>
                <Text style={{...styles.timeTypo,textDecorationLine:"line-through"}}>124,40€/año</Text>
                <View style={{flexDirection:"column",gap:5}}>
              <Text style={{...styles.gratuito,color:"red"}}>DTE. 40%</Text>
              <Text style={{...styles.gratuito}}>7,75€/mes</Text>


              </View>
              <Text style={{...styles.timeTypo}}>74,64€/año</Text>

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
                  Creación gratis del perfil del jugador/a o profesional
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
                  Acceso al buscador de ofertas deportivas de los clubes
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
                  Posibilidad de hacer Match con cualquier club
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
                    a las ofertas deportivas de los clubes 
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        {!deletePlan && !myPlan && (
          <TouchableOpacity
            onPress={handleGetGold}
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
            <Text style={styles.ofertasTypo}>{'Seleccionar este plan'}</Text>
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
              onPress={() => handleCancelSuscription()}
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
  container: {
    width: '100%',
    height: 28,
    backgroundColor: Color.colorSilver,
    justifyContent: 'center'
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
    paddingHorizontal: 20
  },
  frameContainer: {
    alignItems: 'center'
  },
  gratuito: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.t4TEXTMICRO,
    color: '#e6b300',
    fontWeight: '700',
    textAlign: 'center'
  },
  timeTypo: {
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
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
    // width: 260,
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
  gradient: {
    width: '100%',
    height: 500,
    transform: [{ scaleY: 0.056 }],
    position: 'absolute',
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default GoldSuscription
