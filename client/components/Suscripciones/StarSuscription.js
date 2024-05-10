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

const GoldSuscription = ({setClientSecret,setPlanSelected,setPlanSelectedId,myPlan,handleCancelSuscription,deletePlan,setDeletePlan}) => {
  const { user } = useSelector((state) => state.users)

  const handleGetStar = async () => {
    console.log("entra")
     const res = await axiosInstance.post('/user/create-subscription',{
       priceId:"price_1P4cOSGmE60O5ob7cqUBAyjk",
       customerId:user.user.stripeId
     })
     if(res.data){
      setPlanSelected("star")
       setClientSecret(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret)
      setPlanSelectedId(res.data.subscription.subscriptionId)

       // console.log(res.data.subscription.clientSecret.latest_invoice.payment_intent.client_secret,"res dataaa")
     }
     console.log(user.user.stripeId,"user")
   }
  return (
    <View>
      <View style={styles.goldSpaceBlock}>
        <View
          style={{
            width: '100%',
            height: 42,
            backgroundColor: Color.colorSilver,
            justifyContent: 'center'
          }}
        >
          <LinearGradient
            style={styles.gradient}
            start={{ x: 0, y: 1 }} // Punto de inicio (esquina superior derecha)
            end={{ x: 1, y: 0 }} // Punto final (esquina inferior izquierda)
            colors={['#FF00E6', '#1FFFBC']}
          >
            <Text style={[styles.freemium2, styles.ofertasTypo]}>STAR</Text>
          </LinearGradient>
        </View>
        <View style={styles.silverInner}>
          <View style={styles.frameContainer}>
            <View>
              <View style={styles.gratuitoWrapper}>
                <Text style={styles.gratuito}>126€</Text>
                <Text style={styles.timeTypo}>O también 1650,20€/año</Text>
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
                  <Text style={styles.accesoA}>{`Acceso a `}</Text>
                  <Text style={styles.ofertasTypo}>20 ofertas</Text>
                  <Text style={styles.accesoA}> deportivas de los clubes </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        {!deletePlan && !myPlan && (
          <TouchableOpacity
          onPress={handleGetStar }
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
           <Text style={styles.ofertasTypo}>{ "Seleccionar este plan"}</Text>
        </TouchableOpacity>
        )}
          {myPlan && !deletePlan &&(
          <TouchableOpacity
          onPress={()=> setDeletePlan(true)}
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
        <View style={{paddingTop:20,width:"100%"}}>
          <Text style={{textAlign:"center"}}>Seguro quieres cancelar?</Text>
          <TouchableOpacity
         onPress={()=> setDeletePlan(false)}

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
           backgroundColor:"red",
           color:"white",
           borderRadius: 100,
           height: 30,
           alignItems: 'center',
           justifyContent: 'center'
         }}
       >
         <Text style={{...styles.ofertasTypo,color:"white"}}>Confirmar</Text>
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
    paddingHorizontal: 20
  },
  frameContainer: {
    alignItems: 'center'
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
  gradient: {
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default GoldSuscription
