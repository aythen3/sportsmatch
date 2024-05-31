import { View, Text, StyleSheet } from 'react-native'
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

const SilverSuscriptionClub = () => {
  return (
    <View>
      <View style={styles.goldSpaceBlock}>
      <LinearGradient
            style={styles.gradient}
            start={{ x: 0, y: 1 }} // Punto de inicio (esquina superior derecha)
            end={{ x: 1, y: 0 }} // Punto final (esquina inferior izquierda)
            colors={['gray', '#b3b1b1']}
          >
            <Text style={[styles.freemium2, styles.ofertasTypo]}>SILVER</Text>
          </LinearGradient>
        <View style={styles.silverInner}>
          <View style={styles.frameContainer}>
            <View>
              <View style={styles.gratuitoWrapper}>
                <Text style={[styles.gratuito, styles.timeTypo]}>Gratuito</Text>
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
                  Publicación gratis e ilimitada de anuncios de ofertas deportivas
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
                  <Text style={styles.accesoA}> a las personas inscritas en tu oferta: </Text>
                  <Text style={styles.ofertasTypo}>3 perfiles</Text>
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
  gradient: {
    width:"100%",
    height: 42,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goldSpaceBlock: {
    paddingBottom: Padding.p_11xl,
    borderRadius: Border.br_mini,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    overflow: 'hidden'
  },
  freemium2: {
    width:"100%",
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
    color: Color.colorSilver
  },
  timeTypo: {
    fontWeight: '700',
    textAlign: 'center'
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

export default SilverSuscriptionClub
