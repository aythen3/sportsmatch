import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Border, Color, Padding } from '../GlobalStyles'
import CircularStat from '../components/svg/CircularStatSVG'
import BarStatSVG from '../components/svg/BarStatSVG'

const FeedStats = () => {
  const navigation = useNavigation()

  const { sportman } = useSelector((state) => state.sportman)

  const calculateAge = () => {
    const actualYear = new Date().getFullYear()
    return actualYear - sportman?.info.birthdate
  }

  const age = calculateAge(sportman?.info.birthdate)

  return (
    <ScrollView style={styles.perfilDatosVisualitzaciMa}>
      <View style={styles.contenidoDatos}>
        <View style={styles.circulos}>
          <View style={styles.circuloLayout}>
            <CircularStat value={sportman?.info.attack} />
            <View
              style={[styles.informacionCirculo, styles.grupoTextoPosition]}
            >
              <Text style={[styles.text1, styles.text1Typo]}>
                {sportman?.info.attack}
              </Text>
              <Text style={[styles.ataque, styles.ataqueClr]}>Ataque</Text>
            </View>
          </View>
          <View style={[styles.circulo2, styles.circuloLayout]}>
            <CircularStat value={sportman?.info.defense} />
            <View
              style={[styles.informacionCirculo, styles.grupoTextoPosition]}
            >
              <Text style={[styles.text1, styles.text1Typo]}>
                {sportman?.info.defense}
              </Text>
              <Text style={[styles.ataque, styles.ataqueClr]}>Defensa</Text>
            </View>
          </View>
          <View style={[styles.circulo2, styles.circuloLayout]}>
            <CircularStat value={sportman?.info.speed} />
            <View
              style={[styles.informacionCirculo, styles.grupoTextoPosition]}
            >
              <Text style={[styles.text1, styles.text1Typo]}>
                {sportman?.info.speed}
              </Text>
              <Text style={[styles.ataque, styles.ataqueClr]}>Velocidad</Text>
            </View>
          </View>
        </View>

        <View style={styles.barras}>
          <View style={styles.barra1}>
            <View>
              <Text style={[styles.concepto, styles.ataqueClr]}>Bote</Text>
              <BarStatSVG value={sportman?.info.prop1} />
            </View>
            <Text style={[styles.numero1, styles.numeroTypo]}>
              {sportman?.info.prop1}
            </Text>
          </View>

          <View style={styles.barra2}>
            <View>
              <Text style={[styles.concepto, styles.ataqueClr]}>
                Lanzamiento
              </Text>
              <BarStatSVG value={sportman?.info.prop2} />
            </View>
            <Text style={[styles.numero1, styles.numeroTypo]}>
              {sportman?.info.prop2}
            </Text>
          </View>

          <View style={styles.barra2}>
            <View>
              <Text style={[styles.concepto, styles.ataqueClr]}>Dribling</Text>
              <BarStatSVG value={sportman?.info.prop3} />
            </View>
            <Text style={[styles.numero1, styles.numeroTypo]}>
              {sportman?.info.prop3}
            </Text>
          </View>
        </View>
        <View style={styles.barras}>
          <View style={styles.circulos}>
            <View style={styles.moduloSpaceBlock}>
              <Text style={[styles.concepto, styles.ataqueClr]}>Sexo</Text>
              <Text style={[styles.masculino, styles.text1Typo]}>
                {sportman?.info.gender}
              </Text>
            </View>
            <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
              <Text style={[styles.concepto, styles.ataqueClr]}>Edad</Text>
              <Text style={[styles.masculino, styles.text1Typo]}>{age}</Text>
            </View>
          </View>
          <View style={styles.modulosMedio}>
            <View style={styles.moduloSpaceBlock}>
              <Text style={[styles.concepto, styles.ataqueClr]}>Categoría</Text>
              <Text style={[styles.masculino, styles.text1Typo]}>
                {sportman?.info.category}
              </Text>
            </View>
            <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
              <Text style={[styles.concepto, styles.ataqueClr]}>
                Posición principal
              </Text>
              <Text style={[styles.masculino, styles.text1Typo]}>
                {sportman?.info.position}
              </Text>
            </View>
          </View>
          <View style={styles.modulosMedio}>
            <View style={styles.moduloSpaceBlock}>
              <Text style={[styles.concepto, styles.ataqueClr]}>Altura</Text>
              <Text style={[styles.masculino, styles.text1Typo]}>
                {sportman?.info.height}cm
              </Text>
            </View>
            <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
              <Text
                style={[styles.concepto, styles.ataqueClr]}
              >{`Lugar de residencia `}</Text>
              <Text style={[styles.masculino, styles.text1Typo]}>
                {sportman?.info.city}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.masDetalles}>
          <Text style={[styles.msDetallesSobre, styles.ataqueClr]}>
            Más detalles sobre mí
          </Text>
          <Text style={[styles.apasionadoLderCompettvo, styles.ataqueClr]}>
            {sportman?.info.description}
          </Text>
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
    bottom: 84,
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
    width: '80%',
    height: 15,
    marginTop: 4,
    marginLeft: 10
  },
  barra1: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  numero1: {
    marginLeft: 35
  },
  barra2: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  barras: {
    marginTop: 30,
    marginLeft: 1
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
    width: '100%',
    height: '140%'
  }
})

export default FeedStats
