import React, { useContext, useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  Dimensions,
  ActivityIndicator
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import HeaderPerfil from './Perfil/EditarPerfil/club/HeaderPerfil'
import CircleSkills from '../components/CircleSkills'
import PercentageSkills from '../components/PercentageSkills'
import CardInfoPerfil from '../components/CardInfoPerfil'
import { allImagesMuro } from '../utils/allimagesMuro'
import ImagesRender from '../components/ImagesRender'
import { useDispatch, useSelector } from 'react-redux'
import CircularStat from '../components/svg/CircularStatSVG'
import BarStatSVG from '../components/svg/BarStatSVG'
import Feed from '../components/Feed'
import { opciones_skills, skills_deporte } from '../utils/SkillUserLocal'
import axiosInstance from '../utils/apiBackend'
import { getUserData } from '../redux/actions/users'
import { Context } from '../context/Context'

const PerfilFeedVisualitzaciJug = () => {
  const navigation = useNavigation()
  const router = useRoute()

  const dataa = router.params
  console.log(dataa, 'paaaaraaaaaaaaaaaa')
  const { mainColor, user } = useSelector((state) => state.users)
  const [selectComponents, setSelectComponents] = useState('perfil')
  const [selectedOptions, setSelectedOptions] = useState([])
  const [data, setData] = useState({})
  const [isBanned, setIsBanned] = useState(false)
  const { scalableFontSize } = useContext(Context)

  const selectores = () => {
    const sport = dataa?.author?.sportman?.info?.sport
    const selectedSkills = skills_deporte[sport]
    console.log(sport, selectedSkills, 'AAAAAAAAAAA')
    if (selectedSkills) {
      setSelectedOptions(selectedSkills)
    }
  }
  const dispatch = useDispatch()
  const getUser = async () => {
    axiosInstance.get(`user/${dataa?.author?.id}`).then((r) => {
      setData({ author: r.data })
      selectores()
      setIsBanned(r?.data?.banned?.includes(user?.user?.id))
      console.log({ author: r.data }, 'respuesta')
      console.log(r?.data?.banned?.includes(user?.user?.id), 'respuesta2')
      if (r?.data?.banned?.includes(user?.user?.id)) {
        dispatch(getUserData(user?.user?.id))
      }
    })
  }

  useEffect(() => {
    getUser()
  }, [])

  const calculateAge = () => {
    const actualYear = new Date().getFullYear()
    return actualYear - data?.author?.sportman?.info?.birthdate || 2000
  }

  const age = calculateAge(data?.author?.sportman?.info?.birthdate) || 2000

  return (
    <View style={styles.perfilFeedVisualitzaciJug}>
      {data?.author?.id && !isBanned ? (
        <>
          <StatusBar translucent={true} backgroundColor={'transparent'} />
          <ScrollView keyboardShouldPersistTaps={'always'}>
            <HeaderPerfil
              getUser={getUser}
              name={data?.author?.nickname}
              sport={
                data?.author?.type === 'club'
                  ? data?.author?.club?.sport
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
                  : data?.author?.sportman?.info.img_front
              }
              avatar={
                data?.author?.type === 'club'
                  ? data?.author?.club.img_front
                  : data?.author?.sportman?.info.img_perfil
              }
              data={data ? data : null}
              external={true}
            />

            {selectComponents === 'perfil' && (
              <Feed
                externalId={
                  data?.author?.sportman?.user?.id ?? data?.author?.id
                }
              />
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
                            value={data?.author?.sportman?.info?.attack || 0}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',

                            zIndex: 1
                          }}
                        >
                          <Text
                            style={{
                              fontSize: FontSize.h2TITLEBIG_size,
                              color: mainColor,
                              fontWeight: '500',
                              textAlign: 'center',
                              fontFamily: FontFamily.t4TEXTMICRO
                            }}
                          >
                            {data?.author?.sportman?.info.attack || 0}
                          </Text>
                          <Text
                            style={[
                              styles.ataque,
                              styles.ataqueClr,
                              { fontSize: scalableFontSize(10) }
                            ]}
                          >
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
                            {data?.author?.sportman?.info.defense || 0}
                          </Text>
                          <Text
                            style={[
                              styles.ataque,
                              styles.ataqueClr,
                              { fontSize: scalableFontSize(10) }
                            ]}
                          >
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
                            {data?.author?.sportman?.info.speed || 0}
                          </Text>
                          <Text
                            style={[
                              styles.ataque,
                              styles.ataqueClr,
                              { fontSize: scalableFontSize(10) }
                            ]}
                          >
                            Velocidad
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View
                      style={{
                        marginTop: 30,
                        width: '95%',
                        gap: 10
                      }}
                    >
                      {selectedOptions.length > 0 &&
                        selectedOptions.map((opt, i) => (
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
                                value={
                                  data?.author?.sportman?.info[
                                    `prop${i + 1}`
                                  ] || 0
                                }
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
                              {data?.author?.sportman?.info[`prop${i + 1}`] ||
                                0}
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
                            numberOfLines={1}
                            style={[
                              styles.masculino,
                              styles.text1Typo,
                              { color: mainColor }
                            ]}
                          >
                            {data?.author?.sportman?.info.category.split(
                              '('
                            )[0] || '-'}
                          </Text>
                        </View>
                        <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                          <Text style={[styles.concepto, styles.ataqueClr]}>
                            Posición principal
                          </Text>
                          <Text
                            numberOfLines={1}
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
                          >{`Lugar de residencia`}</Text>
                          <Text
                            numberOfLines={1}
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
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: 20
                    }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start'
                      }}
                    >
                      <View style={styles.moduloSpaceBlock}>
                        <Text style={[styles.concepto, styles.ataqueClr]}>
                          Lugar de residencia
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            lineHeight: 22,
                            fontSize: FontSize.h3TitleMEDIUM_size,
                            width: 173,
                            color: mainColor,
                            fontWeight: '500',
                            textAlign: 'center',
                            fontFamily: FontFamily.t4TEXTMICRO
                          }}
                        >
                          {data?.author?.sportman?.info?.city || '-'}
                        </Text>
                      </View>
                      <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                        <Text style={[styles.concepto, styles.ataqueClr]}>
                          Años de expereiencia
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            lineHeight: 22,
                            fontSize: FontSize.h3TitleMEDIUM_size,
                            width: 173,
                            color: mainColor,
                            fontWeight: '500',
                            textAlign: 'center',
                            fontFamily: FontFamily.t4TEXTMICRO
                          }}
                        >
                          {data?.author?.sportman?.info?.yearsOfExperience}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        marginTop: 15
                      }}
                    >
                      <View style={styles.moduloSpaceBlock}>
                        <Text style={[styles.concepto, styles.ataqueClr]}>
                          Deporte
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            lineHeight: 22,
                            fontSize: FontSize.h3TitleMEDIUM_size,
                            width: 173,
                            color: mainColor,
                            fontWeight: '500',
                            textAlign: 'center',
                            fontFamily: FontFamily.t4TEXTMICRO
                          }}
                        >
                          {data?.author?.sportman?.info.sport.name || '-'}
                        </Text>
                      </View>
                      <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                        <Text style={[styles.concepto, styles.ataqueClr]}>
                          Rol
                        </Text>
                        <Text
                          style={{
                            marginTop: 10,
                            lineHeight: 22,
                            fontSize: FontSize.h3TitleMEDIUM_size,
                            width: 173,
                            color: mainColor,
                            fontWeight: '500',
                            textAlign: 'center',
                            fontFamily: FontFamily.t4TEXTMICRO
                          }}
                        >
                          {data?.author?.sportman?.info.rol}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.masDetalles}>
                      <Text style={[styles.msDetallesSobre, styles.ataqueClr]}>
                        Más detalles sobre mí
                      </Text>
                      <Text
                        style={[
                          styles.apasionadoLderCompettvo,
                          styles.ataqueClr
                        ]}
                      >
                        {data?.author?.sportman?.info.description}
                      </Text>
                    </View>
                  </View>
                )}
              </ScrollView>
            )}
          </ScrollView>
        </>
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size={50} color={mainColor}></ActivityIndicator>
        </View>
      )}
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
    width: '46%',
    height: 80,
    justifyContent: 'center',
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
    fontSize: FontSize.h2TITLEBIG_size
  },
  ataque: {
    width: 109,
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
    flexDirection: 'row',
    width: '100%',
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
    fontSize: FontSize.h2TITLEBIG_size,
    fontWeight: '500',
    textAlign: 'left'
  },
  apasionadoLderCompettvo: {
    fontSize: FontSize.t1TextSMALL_size,
    marginTop: 15,
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
