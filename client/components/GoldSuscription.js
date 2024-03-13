import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Border, Color, FontFamily, FontSize, Padding } from '../GlobalStyles'
import { LinearGradient } from 'expo-linear-gradient'

const GoldSuscription = () => {
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
            style={{ height: 42 }}
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
            <Text style={[styles.freemium2, styles.ofertasTypo]}>Pro</Text>
          </LinearGradient>
        </View>
        <View style={styles.silverInner}>
          <View style={styles.frameContainer}>
            <View>
              <View style={styles.gratuitoWrapper}>
                <Text style={styles.gratuito}>12,90€</Text>
                <Text style={styles.timeTypo}>O también 124.40€/año</Text>
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require('../assets/vector-27.png')}
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
                  source={require('../assets/vector-27.png')}
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
                  source={require('../assets/vector-27.png')}
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
                  source={require('../assets/vector-27.png')}
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
                  source={require('../assets/vector-27.png')}
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
  }
})

export default GoldSuscription
