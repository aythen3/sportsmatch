import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Border, Color, Padding } from '../GlobalStyles'

const FeedStats = () => {
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.perfilDatosVisualitzaciMa}>
      <View style={styles.contenidoPerfil}>
        <View style={styles.bloquePerfil}>
          <View style={styles.contenidoDatos}>
            <View style={styles.circulos}>
              <View style={styles.circuloLayout}>
                <Image
                  style={[styles.circuloIcon, styles.circuloLayout]}
                  contentFit="cover"
                  source={require('../assets/circulo4.png')}
                />
                <View
                  style={[styles.informacionCirculo, styles.grupoTextoPosition]}
                >
                  <Text style={[styles.text1, styles.text1Typo]}>80</Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>Ataque</Text>
                </View>
              </View>
              <View style={[styles.circulo2, styles.circuloLayout]}>
                <Image
                  style={[styles.circuloIcon, styles.circuloLayout]}
                  contentFit="cover"
                  source={require('../assets/circulo5.png')}
                />
                <View
                  style={[styles.informacionCirculo, styles.grupoTextoPosition]}
                >
                  <Text style={[styles.text1, styles.text1Typo]}>60</Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>Defensa</Text>
                </View>
              </View>
              <View style={[styles.circulo2, styles.circuloLayout]}>
                <Image
                  style={[styles.circuloIcon, styles.circuloLayout]}
                  contentFit="cover"
                  source={require('../assets/circulo6.png')}
                />
                <View
                  style={[styles.informacionCirculo, styles.grupoTextoPosition]}
                >
                  <Text style={[styles.text1, styles.text1Typo]}>90</Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>
                    Velocidad
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.barras}>
              <View style={styles.barra1}>
                <View>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Bote</Text>
                  <Image
                    style={styles.barraCompletaIcon}
                    contentFit="cover"
                    source={require('../assets/barra-completa.png')}
                  />
                </View>
                <Text style={[styles.numero, styles.numeroTypo]}>80</Text>
              </View>
              <View style={styles.barra2}>
                <View>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Lanzamiento
                  </Text>
                  <Image
                    style={styles.barraCompletaIcon}
                    contentFit="cover"
                    source={require('../assets/barra-completa1.png')}
                  />
                </View>
                <Text style={[styles.numero1, styles.numeroTypo]}>15</Text>
              </View>
              <View style={styles.barra2}>
                <View>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Dribling
                  </Text>
                  <Image
                    style={styles.barraCompletaIcon}
                    contentFit="cover"
                    source={require('../assets/barra-completa2.png')}
                  />
                </View>
                <Text style={[styles.numero, styles.numeroTypo]}>50</Text>
              </View>
            </View>
            <View style={styles.barras}>
              <View style={styles.circulos}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Sexo</Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Masculino
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Edad</Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>24</Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Categoría
                  </Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Sénior
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Posición principal
                  </Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Pívot
                  </Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Altura
                  </Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    190cm
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text
                    style={[styles.concepto, styles.ataqueClr]}
                  >{`Lugar de residencia `}</Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Mataró
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.masDetalles}>
              <Text style={[styles.msDetallesSobre, styles.ataqueClr]}>
                Más detalles sobre mí
              </Text>
              <Text style={[styles.apasionadoLderCompettvo, styles.ataqueClr]}>
                Apasionado líder competítívo. Mi carrera en baloncesto refleja
                dedicación, habilidades excepcionales y la capacidad de motívar
                al equipo hacia el éxito. Me dedico a ello desde que tengo 6
                años y llevo toda la vida en el mismo club, el CF Mataró.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  grupoTextoPosition: {
    zIndex: 1
  },
  circuloLayout: {
    height: 110,
    width: 110
  },
  text1Typo: {
    color: Color.bALONCESTO,
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  ataqueClr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  numeroTypo: {
    textAlign: 'right',
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  moduloSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    height: 80,
    backgroundColor: Color.bLACK2SPORTMATCH,
    borderRadius: Border.br_8xs,
    alignItems: 'center',
    overflow: 'hidden'
  },
  bloquePerfil: {
    height: 227,
    alignItems: 'flex-end'
  },
  text1: {
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    alignSelf: 'stretch',
    flex: 1
  },
  ataque: {
    marginTop: 9,
    width: 109,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'center'
  },
  informacionCirculo: {
    top: 32,
    left: 1,
    height: 63
  },
  circulo2: {
    marginLeft: 15
  },
  circulos: {
    flexDirection: 'row'
  },
  concepto: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'left'
  },
  barraCompletaIcon: {
    width: 298,
    height: 15,
    marginTop: 4
  },
  numero: {
    marginLeft: 42
  },
  barra1: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  numero1: {
    marginLeft: 47
  },
  barra2: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  barras: {
    marginTop: 30
  },
  masculino: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    width: 173
  },
  modulo2: {
    marginLeft: 16
  },
  modulosMedio: {
    marginTop: 15,
    flexDirection: 'row'
  },
  msDetallesSobre: {
    lineHeight: 30,
    height: 25,
    fontSize: FontSize.h2TITLEBIG_size,
    alignSelf: 'stretch',
    fontWeight: '500',
    textAlign: 'left'
  },
  apasionadoLderCompettvo: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    marginTop: 15,
    alignSelf: 'stretch',
    flex: 1,
    textAlign: 'left'
  },
  masDetalles: {
    width: 367,
    height: 130,
    marginTop: 30
  },
  contenidoDatos: {
    marginTop: 21
  },
  perfilDatosVisualitzaciMa: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: '100%'
  }
})

export default FeedStats
