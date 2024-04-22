import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
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
      <View style={styles.topTextContainer}>
        <Text style={styles.cuntasVisualizacionesCuanContainer}>
          <Text style={styles.cuntasVisualizaciones}>
            ¿Cuántas visualizaciones?{'\n'}
          </Text>
          <Text style={styles.cuantosMsPerfiles}>
            ¡Cuantos más perfiles puedas visualizar, más probabilidades tendrás
            de hacer match!
          </Text>
        </Text>
      </View>

      <View style={styles.secondBox}>
        <View style={styles.targetaStarSpaceBlock}>
          <View>
            <Text style={[styles.silver, styles.textLayout]}>Silver</Text>
          </View>

          <View style={styles.perfilesFrame1}>
            <View>
              <Text style={[styles.text, styles.textTypo]}>3</Text>
              <Text style={styles.perfiles1Typo}>Perfiles</Text>
            </View>
            <Text style={[styles.grats, styles.mesClr]}>Gratís</Text>
          </View>
        </View>

        <View style={styles.boxContainer}>
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
          <View style={styles.midBg}>
            <View style={styles.perfilesFrame1}>
              <Text style={[styles.perfiles2, styles.textoTypo]}>Gold</Text>
              <Text style={[styles.textTypo]}>30</Text>
              <Text style={[styles.perfiles2, styles.textoTypo]}>Perfiles</Text>
              <View style={styles.perfilesFrame1}>
                <Text style={[styles.pagoNico, styles.textoTypo]}>
                  Pago único
                </Text>
                <Text style={styles.text2}>125€</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.targetaStarSpaceBlock}>
          <View style={styles.precio}>
            <Text style={[styles.mes, styles.mesTypo]}>126,90€/mes</Text>
            <Text style={[styles.ao, styles.aoTypo]}>1.650,20€/año</Text>
          </View>

          <Text style={[styles.grats, styles.mesClr]}>Ilimmitado</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={[styles.accesoLimitadoDe, styles.mesTypo]}>
          Acceso limitado de visualización de hasta 30 perfiles inscritos en tus
          ofertas
        </Text>
        <View style={styles.botonesInferiores}>
          <View style={[styles.botonContinuar, styles.botonFlexBox]}>
            <Text style={[styles.texto2, styles.timeClr]}>Continuar</Text>
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
  textoTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  textLayout: {
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
  },
  timeClr: {
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  targetaStarSpaceBlock: {
    width: '32%',
    height: 170,
    alignItems: 'center',
    paddingVertical: Padding.p_6xs,
    backgroundColor: Color.colorGainsboro,
    opacity: 0.6,
    borderRadius: Border.br_mini
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
    opacity: 0.4,
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
    flexDirection: 'row',
    width: '90%'
  },
  rectanguloIcon: {
    height: 124,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 0,
    backgroundColor: Color.colorGainsboro
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
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  cuantosMsPerfiles: {
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  cuntasVisualizacionesCuanContainer: {
    color: Color.bLACK2SPORTMATCH,
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
    opacity: 0.3
  },
  grats: {
    marginTop: 26,
    opacity: 0.3,
    fontSize: FontSize.button_size,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  opacidad: {
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.promocio
  },
  elMsPopular: {
    lineHeight: 17,
    fontSize: FontSize.t4TEXTMICRO_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: '#BD9710'
  },
  text2: {
    marginTop: 3,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.bLACK3SPORTSMATCH,
    fontWeight: 'bold'
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
  accesoLimitadoDe: {
    marginTop: 12,
    lineHeight: 17,
    color: Color.colorDimgray_100,
    width: '90%'
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
  premium: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0
  },
  midBg: {
    backgroundColor: '#f5edd0',
    height: 180
  },
  bottomContainer: {
    backgroundColor: Color.colorWhitesmoke,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxContainer: {
    width: 130,
    borderRadius: Border.br_mini,
    overflow: 'hidden',
    borderColor: '#e6b300',
    borderWidth: 1.5
  },
  topTextContainer: {
    backgroundColor: Color.colorWhitesmoke,
    paddingBottom: 15
  },
  secondBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.colorWhitesmoke
  }
})

export default Premium
