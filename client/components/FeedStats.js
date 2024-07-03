import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Border, Color, Padding } from '../GlobalStyles'
import CircularStat from '../components/svg/CircularStatSVG'
import BarStatSVG from '../components/svg/BarStatSVG'
import { opciones_skills } from '../utils/SkillUserLocal'

const FeedStats = () => {
  const navigation = useNavigation()
  const [selectedOptions, setSelectedOptions] = useState([])

  const { sportman } = useSelector((state) => state.sportman)
  const { user, mainColor } = useSelector((state) => state.users)

  useEffect(() => {
    selectores()
  }, [])

  const selectores = () => {
    if (sportman?.info?.sport === 'Fútbol')
      setSelectedOptions(opciones_skills.futbol)
    if (sportman?.info?.sport === 'Fútbol Sala')
      setSelectedOptions(opciones_skills.futbolSala)
    if (sportman?.info?.sport === 'Básquetbol')
      setSelectedOptions(opciones_skills.baloncesto)
    if (sportman?.info?.sport === 'Hockey')
      setSelectedOptions(opciones_skills.hockey)
    if (sportman?.info?.sport === 'Handball')
      setSelectedOptions(opciones_skills.handball)
    if (sportman?.info?.sport === 'Voley')
      setSelectedOptions(opciones_skills.voleibol)
  }

  const calculateAge = () => {
    const actualYear = new Date().getFullYear()
    return actualYear - sportman?.info?.birthdate || 2000
  }

  const age = calculateAge(sportman?.info?.birthdate) || 2000

  if (user)
    return (
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        style={{
          backgroundColor: Color.bLACK1SPORTSMATCH,
          width: '100%'
        }}
      >
        <View
          style={{
            marginTop: 21,
            alignSelf: 'center',
            width: '95%',
            alignItems: 'center'
          }}
        >
          {sportman?.type !== 'coach' && (
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around'
              }}
            >
              <View
                style={{
                  height: (Dimensions.get('screen').width * 0.8) / 3,
                  width: (Dimensions.get('screen').width * 0.8) / 3,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    padding: 2
                  }}
                >
                  <CircularStat
                    color={mainColor}
                    value={sportman?.info?.attack || 0}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',

                    height: (Dimensions.get('screen').width * 0.45) / 3,
                    zIndex: 1
                  }}
                >
                  <Text
                    style={{
                      lineHeight: 40,
                      fontSize: FontSize.h2TITLEBIG_size,
                      alignSelf: 'stretch',
                      flex: 1,
                      color: mainColor,
                      fontWeight: '500',
                      textAlign: 'center',
                      fontFamily: FontFamily.t4TEXTMICRO
                    }}
                  >
                    {sportman?.info?.attack || 0}
                  </Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>Ataque</Text>
                </View>
              </View>
              <View
                style={{
                  height: (Dimensions.get('screen').width * 0.8) / 3,
                  width: (Dimensions.get('screen').width * 0.8) / 3,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                  <CircularStat
                    color={mainColor}
                    value={sportman?.info.defense || 0}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: (Dimensions.get('screen').width * 0.45) / 3,
                    zIndex: 1
                  }}
                >
                  <Text
                    style={[
                      styles.text1,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.defense || 0}
                  </Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>Defensa</Text>
                </View>
              </View>
              <View
                style={{
                  height: (Dimensions.get('screen').width * 0.8) / 3,
                  width: (Dimensions.get('screen').width * 0.8) / 3,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                  <CircularStat
                    color={mainColor}
                    value={sportman?.info.speed || 0}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: (Dimensions.get('screen').width * 0.45) / 3,
                    zIndex: 1
                  }}
                >
                  <Text
                    style={[
                      styles.text1,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.speed || 0}
                  </Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>
                    Velocidad
                  </Text>
                </View>
              </View>
            </View>
          )}

          {sportman?.type !== 'coach' && (
            <View
              style={{
                marginTop: 30,
                width: '95%',
                gap: 10
              }}
            >
              {selectedOptions &&
                selectedOptions.map((opt, i) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between'
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          lineHeight: 14,
                          marginBottom: 2,
                          fontSize: 13,
                          textAlign: 'left',
                          color: Color.gREY2SPORTSMATCH,
                          fontFamily: FontFamily.t4TEXTMICRO
                        }}
                      >
                        {selectedOptions[i]}
                      </Text>
                      <BarStatSVG
                        color={mainColor}
                        value={sportman?.info[`prop${i + 1}`] || 0}
                      />
                    </View>
                    <Text
                      style={{
                        textAlign: 'right',
                        color: Color.gREY2SPORTSMATCH,
                        fontSize: FontSize.t2TextSTANDARD_size,
                        fontFamily: FontFamily.t4TEXTMICRO
                      }}
                    >
                      {sportman?.info[`prop${i + 1}`]}
                    </Text>
                  </View>
                ))}
            </View>
          )}

          {sportman?.type !== 'coach' ? (
            <View style={styles.barras}>
              <View style={styles.circulos}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Sexo</Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.gender || '-'}
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Edad</Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {age || '-'}
                  </Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Categoría
                  </Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.category || '-'}
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Posición principal
                  </Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.position || '-'}
                  </Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Altura
                  </Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.height || '-'}
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text
                    style={[styles.concepto, styles.ataqueClr]}
                  >{`Lugar de residencia `}</Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.city || '-'}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.circulos}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Lugar de residencia
                  </Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman.info.city}
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Años de expereiencia
                  </Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman.info.yearsOfExperience}
                  </Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Deporte
                  </Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.sport.name || 'sin deporte'}
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Rol</Text>
                  <Text
                    style={[
                      styles.masculino,
                      styles.text1Typo,
                      { color: mainColor }
                    ]}
                  >
                    {sportman?.info.rol || 'sin rol'}
                  </Text>
                </View>
              </View>
            </View>
          )}
          <View style={{ width: '95%', paddingVertical: 30 }}>
            <Text
              style={{
                lineHeight: 30,
                height: 25,
                fontSize: FontSize.h2TITLEBIG_size,
                alignSelf: 'stretch',
                fontWeight: '500',
                textAlign: 'left',
                color: Color.gREY2SPORTSMATCH,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              Más detalles sobre mí
            </Text>
            <Text
              style={{
                fontSize: FontSize.t1TextSMALL_size,
                lineHeight: 17,
                marginTop: 15,
                alignSelf: 'stretch',
                flex: 1,
                textAlign: 'left',
                color: Color.gREY2SPORTSMATCH,
                fontFamily: FontFamily.t4TEXTMICRO
              }}
            >
              {sportman?.info.description || 'sin descripcion'}
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
    height: 80,
    width: '46%',
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
  circulos: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  concepto: {
    lineHeight: 14,
    marginBottom: 2,
    fontSize: 13,
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
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  barras: {
    marginTop: 30,
    width: '100%'
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
    flexDirection: 'row',
    justifyContent: 'center'
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
    width: '95%',
    paddingVertical: 30
  }
})

export default FeedStats
