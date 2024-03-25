import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'

const Premium = () => {
  return (
    <View style={styles.premium}>
      <View style={styles.rectanguloIcon}>
        <Text style={[styles.texto, styles.textoTypo]}>
          Visualización inscritos
        </Text>
      </View>
      <View
        style={{ backgroundColor: Color.colorWhitesmoke, paddingBottom: 15 }}
      >
        <Text style={styles.cuntasVisualizacionesCuanContainer}>
          <Text
            style={[styles.cuntasVisualizaciones, styles.textoTypo]}
          >{`¿Cuántas visualizaciones?
`}</Text>
          <Text
            style={styles.cuantosMsPerfiles}
          >{`¡Cuantos más perfiles puedas visualizar, 
más probabilidades tendrás de hacer match!`}</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          // width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: Color.colorWhitesmoke
        }}
      >
        <View style={styles.targetaStarSpaceBlock}>
          <View>
            <View>
              <Text style={[styles.silver, styles.textLayout]}>Silver</Text>
            </View>
          </View>
          <View style={styles.perfilesFrame1}>
            <View>
              <Text style={[styles.text, styles.textTypo]}>3</Text>
              <Text style={styles.perfiles1Typo}>Perfiles</Text>
            </View>
            <Text style={[styles.grats, styles.mesClr]}>Gratís</Text>
          </View>
        </View>

        <View
          style={{
            width: 130,

            // backgroundColor: '#EBC02A',
            // opacity: 0.5,
            // marginLeft: 30,
            borderRadius: Border.br_mini,
            overflow: 'hidden'
          }}
        >
          <LinearGradient
            style={[styles.opacidad, styles.outlineBorder]}
            locations={[0, 0.18, 0.38, 0.58, 0.79, 1]}
            colors={[
              '#e6b300',
              '#bd9710',
              '#ebc02a',
              '#e6b300',
              '#bd9710',
              '#ebc02a'
            ]}
          >
            <Text style={[styles.elMsPopular, styles.timeClr]}>
              El más popular
            </Text>
          </LinearGradient>
          <View style={{ backgroundColor: '#F8E08A', height: 180 }}>
            <View style={styles.perfilesFrame1}>
              {/* <Text style={[styles.gold, styles.textoTypo]}>Gold</Text> */}
              <Text style={[styles.textTypo]}>30</Text>
              <Text style={[styles.perfiles2, styles.textoTypo]}>Perfiles</Text>
              <View style={styles.perfilesFrame1}>
                <Text style={[styles.pagoNico, styles.textoTypo]}>
                  Pago único
                </Text>
                <Text style={[styles.text2, styles.mesClr]}>125€</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.targetaStarSpaceBlock}>
          <View>
            <View>
              {/* <Text style={[styles.silver, styles.textLayout]}>Star</Text> */}
            </View>
          </View>
          <View style={styles.perfilesFrame1}>
            <View>
              <View style={styles.precio}>
                <Text style={[styles.mes, styles.mesTypo]}>126,90€/mes</Text>
                <Text style={[styles.ao, styles.aoTypo]}>1.650,20€/año</Text>
              </View>
            </View>
            <Text style={[styles.grats, styles.mesClr]}>Ilimmitado</Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: Color.colorWhitesmoke }}>
        <Text
          style={[styles.accesoLimitadoDe, styles.mesTypo]}
        >{`Acceso limitado de visualización 
de hasta 30 perfiles inscritos en tus ofertas`}</Text>
        <View style={styles.botonesInferiores}>
          <View style={[styles.botonContinuar, styles.botonFlexBox]}>
            <Text style={[styles.texto2, styles.timeClr]}>Contínuar</Text>
          </View>
          <View style={styles.botonFlexBox}>
            <Text style={[styles.taxto, styles.aoTypo]}>No, gracias</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  premiumLayout: {
    overflow: 'hidden',
    width: '100%',
    flex: 1
  },
  textoPosition: {
    zIndex: 1,
    position: 'absolute'
  },
  textoTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  textLayout: {
    // width: 103,
    opacity: 0.3
  },
  textTypo: {
    fontWeight: '500',
    lineHeight: 40,
    fontSize: FontSize.h1TitleHUGE_size,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  mesClr: {
    color: Color.bLACK3SPORTSMATCH,
    fontWeight: '700'
  },
  outlineBorder: {
    borderColor: Color.colorGoldenrod,
    borderStyle: 'solid'
    // width: 119,
    // height: 180,
    // borderRadius: Border.br_mini
    // left: 0,
    // top: 0,
    // position: 'absolute'
  },
  capacityPosition: {
    top: 2,
    position: 'absolute'
  },
  timeClr: {
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  targetaStarSpaceBlock: {
    width: 130,
    height: 170,
    alignItems: 'center',
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    backgroundColor: Color.colorGainsboro,
    opacity: 0.6,
    borderRadius: Border.br_mini,
    overflow: 'hidden'
  },
  mesTypo: {
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  aoTypo: {
    color: Color.gREY2SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  perfiles1Typo: {
    // height: 17,
    opacity: 0.4,
    // width: 103,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  botonFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_81xl,
    justifyContent: 'center',
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row'
  },
  iphonePosition: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: 'absolute'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  rectangulo: {
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    height: 550,
    width: 361,
    position: 'absolute'
  },
  fondoTargeta: {
    zIndex: 0,
    alignSelf: 'stretch',
    flex: 1
  },
  rectanguloIcon: {
    height: 124,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    backgroundColor: Color.colorGainsboro
    // width: 361
  },
  texto: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.t4TEXTMICRO,
    zIndex: 1
  },
  cuntasVisualizaciones: {
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cuantosMsPerfiles: {
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cuntasVisualizacionesCuanContainer: {
    color: Color.bLACK2SPORTMATCH,
    // width: 359,
    textAlign: 'center'
  },
  silver: {
    opacity: 0.3,
    lineHeight: 17,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  text: {
    // height: 40,
    opacity: 0.3
    // width: 103
  },
  grats: {
    // height: 20,
    marginTop: 26,
    opacity: 0.3,
    // width: 103,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  perfilesFrame: {
    marginTop: 15
  },
  opacidad: {
    height: 40,
    // width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // opacity: 0.1,
    backgroundColor: Color.promocio
  },
  outline: {
    borderWidth: 2
  },
  rectanguloIcon1: {
    maxWidth: '100%',
    maxHeight: '100%',
    zIndex: 0,
    alignSelf: 'stretch'
  },
  elMsPopular: {
    lineHeight: 17,
    fontSize: FontSize.t4TEXTMICRO_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  header1: {
    alignSelf: 'stretch',
    flex: 1
  },
  gold: {
    lineHeight: 17,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.t4TEXTMICRO
  },

  perfiles2: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  perfilesFrame1: {
    marginTop: 12
  },
  pagoNico: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: '#BD9710'
  },
  text2: {
    // width: 116,
    marginTop: 3,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  contenidoRame: {
    height: 165,
    left: 0
  },
  targetaGold: {
    marginLeft: 4,
    width: 119,
    height: 180
  },
  mes: {
    color: Color.bLACK3SPORTSMATCH,
    fontWeight: '700',
    opacity: 0.3
  },
  ao: {
    opacity: 0.5,
    marginTop: 1,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  precio: {
    marginTop: 34,
    alignItems: 'center'
  },
  ilimitado: {
    marginTop: 34
  },
  texto1: {
    alignItems: 'center',
    flex: 1
  },
  targetaStar: {
    width: 100,
    marginLeft: 4,
    flexDirection: 'row'
  },
  targetasFrame: {
    alignItems: 'center',
    left: 0,
    top: 0,
    flexDirection: 'row',
    position: 'absolute'
  },
  targetas: {
    width: 330,
    height: 180
  },
  accesoLimitadoDe: {
    marginTop: 12,
    lineHeight: 17,
    color: Color.colorDimgray_100
  },
  targetastextoInferior: {
    marginTop: 21,
    alignItems: 'center'
  },
  texto2: {
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  botonContinuar: {
    backgroundColor: Color.colorDimgray_100,
    width: '90%'
  },
  taxto: {
    fontSize: FontSize.button_size
  },
  botonesInferiores: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contenido: {
    marginTop: 8,
    alignItems: 'center'
  },
  contenidoFrame: {
    alignItems: 'center',
    left: 0,
    top: 0
  },
  popup: {
    top: 147,
    left: 14,
    flexDirection: 'row',
    height: 550,
    width: 361,
    position: 'absolute'
  },
  uxIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: 'solid',
    top: 0,
    position: 'absolute'
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
  },
  capacity: {
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH
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
    top: '50%',
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size
  },
  starus: {
    top: 10,
    left: 15,
    height: 24
  },
  premium: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0
  }
})

export default Premium
