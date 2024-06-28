import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  Dimensions
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import HeaderPerfil from './Perfil/EditarPerfil/club/HeaderPerfil'
import CircleSkills from '../components/CircleSkills'
import PercentageSkills from '../components/PercentageSkills'
import CardInfoPerfil from '../components/CardInfoPerfil'
import { allImagesMuro } from '../utils/allimagesMuro'
import ImagesRender from '../components/ImagesRender'
import { useSelector } from 'react-redux'
import CircularStat from '../components/svg/CircularStatSVG'
import BarStatSVG from '../components/svg/BarStatSVG'
import Feed from '../components/Feed'

const PerfilFeedVisualitzaciJug = () => {
  const navigation = useNavigation()
  const router = useRoute()
  const { isSportman } = useSelector((state) => state.users)
  const { club } = useSelector((state) => state.clubs)
  const [selectComponents, setSelectComponents] = useState('perfil')
  const [selectedOptions, setSelectedOptions] = useState([])
  const { mainColor } = useSelector((state) => state.users)

  const opciones = {
    futbol: [
      "Portero",
      "Lateral",
      "Central",
      "Mediocentro",
      "Interior",
      "Extremo",
      "Mediapunta",
      "Delantero centro"
    ],
    baloncesto: [
      "Base",
      "Escolta",
      "Alero",
      "Ala-pivot",
      "Pivot"
    ],
    futbolSala: [
      "Portero",
      "Cierre",
      "Ala",
      "Pivot"
    ],
    hockey: [
      "Portero",
      "Jugador"
    ],
    voleibol: [
      "Colocador",
      "Rematador externo",
      "Rematador opuesto",
      "Central",
      "Libero",
      "Receptor/zaguero"
    ],
    handball: [
      "Portero",
      "Central",
      "Ala derecha",
      "Ala izquierda",
      "Pivot",
      "Extremo derecho",
      "Extremo izquierdo"
    ]
  }
  const selectores = () => {
    if (data?.author?.sportman.info.sport) setSelectedOptions(opciones.futbol)
    if (data?.author?.sportman.info.sport)
      setSelectedOptions(opciones.futbolSala)
    if (data?.author?.sportman.info.sport)
      setSelectedOptions(opciones.baloncesto)
    if (data?.author?.sportman.info.sport) setSelectedOptions(opciones.hockey)
    if (data?.author?.sportman.info.sport) setSelectedOptions(opciones.handball)
    if (data?.author?.sportman.info.sport) setSelectedOptions(opciones.voleibol)
  }
  useEffect(() => {
    console.log('A===========', data.author)
    selectores()
  }, [])

  const data = router.params

  // function calculateAge(birthYear) {
  //   const birthYearNum =
  //     typeof birthYear === 'string' ? parseInt(birthYear, 10) : birthYear
  //   if (isNaN(birthYearNum)) {
  //     throw new Error('Invalid birth year')
  //   }
  //   const currentYear = new Date().getFullYear()
  //   const age = currentYear - birthYearNum
  //   return age
  // }

  const calculateAge = () => {
    const actualYear = new Date().getFullYear()
    return actualYear - data?.author?.sportman?.info?.birthdate || 2000
  }

  const age = calculateAge(data?.author?.sportman?.info?.birthdate) || 2000

  return (
    <View style={styles.perfilFeedVisualitzaciJug}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <ScrollView keyboardShouldPersistTaps={'always'}>
        <HeaderPerfil
          name={data?.author?.nickname}
          sport={
            data?.author?.type === 'club'
              ? null
              : data?.author?.sportman?.type === 'coach'
                ? data?.author?.sportman?.info?.sport?.name
                : data?.author?.sportman?.info?.sport
          }
          position={
            data?.author?.type === 'club'
              ? null
              : data?.author?.sportman?.type === 'coach'
                ? data?.author?.sportman?.info?.rol
                : data?.author?.sportman?.info?.position
          }
          description={
            data?.author?.type === 'club'
              ? data?.author?.club?.description
              : data?.author?.sportman?.info?.description
          }
          myPerfil={false}
          setSelectComponents={setSelectComponents}
          selectComponents={selectComponents}
          front={
            data?.author?.type === 'club'
              ? data?.author?.club.img_perfil
              : data?.author?.sportman.info.img_perfil
          }
          avatar={
            data?.author?.type === 'club'
              ? data?.author?.club.img_front
              : data?.author?.sportman.info.img_front
          }
          data={data ? data : null}
          external={true}
        />

        {selectComponents === 'perfil' && (
          <Feed externalId={ data.author.id || data?.author?.sportman?.user?.id } />
        )}

        {selectComponents === 'estadisticas' && (
          <ScrollView
            keyboardShouldPersistTaps={'always'}
            style={styles.perfilDatosVisualitzaciMa}
          >
            {data?.author?.sportman?.type !== 'coach' ? (
              <View
                style={{
                  marginTop: 21,
                  alignSelf: 'center',
                  width: '95%',
                  alignItems: 'center'
                }}
              >
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
                    <View style={{ position: 'absolute', top: 0, left: 0 }}>
                      <CircularStat
                        color={mainColor}
                        value={data?.author?.sportman?.info.attack || 0}
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
                        {data?.author?.sportman?.info.attack}
                      </Text>
                      <Text style={[styles.ataque, styles.ataqueClr]}>
                        Ataque
                      </Text>
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
                        value={data?.author?.sportman?.info.defense || 0}
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
                        {data?.author?.sportman?.info.defense}
                      </Text>
                      <Text style={[styles.ataque, styles.ataqueClr]}>
                        Defensa
                      </Text>
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
                        value={data?.author?.sportman?.info.speed || 0}
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
                        {data?.author?.sportman?.info.speed}
                      </Text>
                      <Text style={[styles.ataque, styles.ataqueClr]}>
                        Velocidad
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 30,
                    width: '95%',
                    gap:10
                  }}
                >


                  {selectedOptions && selectedOptions.map((opt, i) => (
                    <View
                    key={i}
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
                          value={data?.author?.sportman?.info[`prop${i + 1}`] || 0}
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
                        {data?.author?.sportman?.info[`prop${i + 1}`] || 0}
                      </Text>
                    </View>
                  ))}


{/* 
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
                        {selectedOptions[0]}
                      </Text>
                      <BarStatSVG
                        color={mainColor}
                        value={data?.author?.sportman?.info.prop1 || 0}
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
                      {data?.author?.sportman?.info.prop1}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: 8,
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
                        {selectedOptions[1]}
                      </Text>
                      <BarStatSVG
                        color={mainColor}
                        value={data?.author?.sportman?.info.prop2 || 0}
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
                      {data?.author?.sportman?.info.prop2}
                    </Text>
                  </View>

                  <View
                    style={{
                      marginTop: 8,
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
                        {selectedOptions[2]}
                      </Text>
                      <BarStatSVG
                        color={mainColor}
                        value={data?.author?.sportman?.info.prop3 || 0}
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
                      {data?.author?.sportman?.info.prop3}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginTop: 8,
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
                        {selectedOptions[3]}
                      </Text>
                      <BarStatSVG
                        color={mainColor}
                        value={data?.author?.sportman?.info.height || 0}
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
                      {data?.author?.sportman?.info.prop3}
                    </Text>
                  </View> */}
                </View>
                <View
                  style={{
                    marginTop: 30,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <View style={styles.circulos}>
                    <View style={styles.moduloSpaceBlock}>
                      <Text style={[styles.concepto, styles.ataqueClr]}>
                        Sexo
                      </Text>
                      <Text
                        style={[
                          styles.masculino,
                          styles.text1Typo,
                          { color: mainColor }
                        ]}
                      >
                        {data?.author?.sportman?.info.gender || '-'}
                      </Text>
                    </View>
                    <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                      <Text style={[styles.concepto, styles.ataqueClr]}>
                        Edad
                      </Text>
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
                        {data?.author?.sportman?.info.category || '-'}
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
                        {data?.author?.sportman?.info.position || '-'}
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
                        {data?.author?.sportman?.info.height || '-'}cm
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
                        {data?.author?.sportman?.info.city || '-'}
                      </Text>
                    </View>
                  </View>
                </View>
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
                    {data?.author?.sportman?.info.description ||
                      'sin descripcion'}
                  </Text>
                </View>
              </View>
            ) : (
              <View style={{ alignSelf: 'center', marginTop: 20 }}>
                <View style={styles.circulos}>
                  <View style={styles.moduloSpaceBlock}>
                    <Text style={[styles.concepto, styles.ataqueClr]}>
                      Lugar de residencia
                    </Text>
                    <Text style={[styles.masculino, styles.text1Typo]}>
                      {data?.author?.sportman.info.city}
                    </Text>
                  </View>
                  <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                    <Text style={[styles.concepto, styles.ataqueClr]}>
                      Años de expereiencia
                    </Text>
                    <Text style={[styles.masculino, styles.text1Typo]}>
                      {data?.author?.sportman.info.yearsOfExperience}
                    </Text>
                  </View>
                </View>
                <View style={styles.modulosMedio}>
                  <View style={styles.moduloSpaceBlock}>
                    <Text style={[styles.concepto, styles.ataqueClr]}>
                      Deporte
                    </Text>
                    <Text style={[styles.masculino, styles.text1Typo]}>
                      {data?.author?.sportman?.info.sport.name}
                    </Text>
                  </View>
                  <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                    <Text style={[styles.concepto, styles.ataqueClr]}>Rol</Text>
                    <Text style={[styles.masculino, styles.text1Typo]}>
                      {data?.author?.sportman?.info.rol}
                    </Text>
                  </View>
                </View>

                <View style={styles.masDetalles}>
                  <Text style={[styles.msDetallesSobre, styles.ataqueClr]}>
                    Más detalles sobre mí
                  </Text>
                  <Text
                    style={[styles.apasionadoLderCompettvo, styles.ataqueClr]}
                  >
                    {data?.author?.sportman?.info.description}
                  </Text>
                </View>
              </View>
            )}
          </ScrollView>
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  perfilFeedVisualitzaciJug: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    overflow: 'hidden',
    width: '100%',
    flex: 1
  },
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
    width: '100%',
    marginTop: 20,
    paddingBottom: 20
  },
  contenidoDatos: {
    marginTop: 21,
    alignSelf: 'center',
    width: '95%',
    alignItems: 'center'
  },
  perfilDatosVisualitzaciMa: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: '100%'
  }
})

export default PerfilFeedVisualitzaciJug
