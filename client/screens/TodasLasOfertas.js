import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { Color, Border, FontSize, FontFamily, Padding } from '../GlobalStyles'
import CardInfoOffers from '../components/CardInfoOffers'
import FiltersHome from '../components/FiltersHome'
import MonetizarOfertaPRO from './MonetizarOfertaPRO'
import FiltersSportman from '../components/FiltersSportman'
import { useSelector, useDispatch } from 'react-redux'
import { sendMatch } from '../redux/actions/matchs'
import { signToOffer } from '../redux/actions/offers'

const TodasLasOfertas = () => {
  const dispatch = useDispatch()
  const { offers } = useSelector((state) => state.offers)
  const { user } = useSelector((state) => state.users)
  const navigation = useNavigation()
  const [selectOfferComponent, setSelectOfferComponent] = useState('todas')
  const [modalVisible, setModalVisible] = useState(false)

  const [modalFilterSportman, setModalFilterSportman] = useState(false)

  const onFilterSportman = () => {
    setModalFilterSportman(true)
  }

  return (
    <View style={styles.todasLasOfertas}>
      <View style={{ marginVertical: 30, marginLeft: 15 }}>
        <View style={styles.cabezera1}>
          <Pressable
            style={styles.coolicon}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/coolicon3.png')}
            />
          </Pressable>
          <Pressable style={styles.ofertas} onPress={() => navigation.goBack()}>
            <Text style={[styles.ofertas1, styles.pvotTypo]}>Ofertas</Text>
          </Pressable>
        </View>
      </View>

      <FiltersHome modalSportmanActive={onFilterSportman} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 15
        }}
      >
        <Pressable
          onPress={() => {
            setSelectOfferComponent('todas')
          }}
        >
          <View
            style={{
              borderBottomWidth: 3,
              borderColor:
                selectOfferComponent === 'todas'
                  ? Color.bALONCESTO
                  : 'transparent',
              width: 150
            }}
          >
            <Text
              style={[
                selectOfferComponent === 'todas'
                  ? styles.todasLaOfertas
                  : styles.todasLaOfertas2,
                styles.ofertasTypo
              ]}
            >
              Todas la ofertas
            </Text>
          </View>
        </Pressable>

        <Pressable
          onPress={() => {
            setSelectOfferComponent('favoritas')
          }}
        >
          <View
            style={{
              borderBottomWidth: 3,
              borderColor:
                selectOfferComponent === 'favoritas'
                  ? Color.bALONCESTO
                  : 'transparent',
              width: 150
            }}
          >
            <Text
              style={[
                selectOfferComponent === 'favoritas'
                  ? styles.todasLaOfertas
                  : styles.todasLaOfertas2,
                ,
                styles.ofertasTypo
              ]}
            >
              Ofertas favoritas
            </Text>
          </View>
        </Pressable>
      </View>

      <ScrollView>
        {offers.map((offer, index) => (
          <View
            key={index}
            style={{
              marginTop: 20,
              padding: 10,
              flex: 1,
              backgroundColor: Color.bLACK2SPORTMATCH,
              alignItems: 'center',
              opacity: 0.7
            }}
          >
            <View style={{ flexDirection: 'row', zIndex: 5 }}>
              <CardInfoOffers
                text="Sexo"
                value={offer.sexo === 'Male' ? 'Masculino' : 'Femenino'}
              />
              <CardInfoOffers text="Categoria" value={offer.category} />
            </View>

            <View style={{ flexDirection: 'row', zIndex: 5 }}>
              <CardInfoOffers text="Posicion" value={`${offer.urgency}/10`} />
              <CardInfoOffers text="Ubicacion" value="Random" />
            </View>

            <View style={{ flexDirection: 'row', zIndex: 5 }}>
              <CardInfoOffers text="Urgencia" value={offer.urgency} />
              <CardInfoOffers
                text="Retribucion"
                value={offer.retribution ? 'Si' : 'No'}
              />
            </View>

            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 10,
                borderWidth: 2,
                borderColor: Color.bLACK3SPORTSMATCH,
                height: 90
              }}
            >
              <Pressable style={[styles.aceptar, styles.aceptarBg]}>
                <Text
                  // onPress={() => setModalVisible(true)}
                  onPress={() => {
                    console.log('offer', offer)
                    console.log('sp id: ', user.user.sportman.id)
                    dispatch(
                      signToOffer({
                        offerId: offer?.id,
                        userId: user.user.sportman.id
                      })
                    )
                    navigation.navigate('TusMatchs')
                  }}
                  style={[styles.verOferta, styles.verOfertaTypo]}
                >
                  Inscríbete en la oferta 
                </Text>
              </Pressable>
            </View>
            <Image
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1,
                borderRadius: 8,
                overflow: 'hidden'
              }}
              source={require('../assets/group-4891.png')}
            />
          </View>
        ))}
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 15
            }}
          >
            <MonetizarOfertaPRO onClose={() => setModalVisible(false)} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal
        visible={modalFilterSportman}
        transparent={true}
        animationType="slide"
      >
        <View
          style={{
            width: 200,
            position: 'absolute',
            right: 10,
            top: 160
          }}
        >
          <FiltersSportman onClose={() => setModalFilterSportman(false)} />
        </View>
      </Modal>

      {/* <Text style={[styles.misOfertas, styles.ofertasTypo]}>Mis ofertas</Text>
      <View style={[styles.contenido, styles.menuClubPosition]}>
        <View style={[styles.menuClub, styles.menuClubPosition]}>
          <Image
            style={[styles.maskGroupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
          <Image
            style={[styles.maskGroupIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
          <View style={[styles.menuClubChild, styles.groupChildPosition]} />
          <View style={[styles.menuClubItem, styles.itemPosition]} />
          <View style={[styles.menuClubInner, styles.borderBorder]} />
          <Image
            style={[styles.groupIcon, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-535.png")}
          />
          <Image
            style={[styles.lineIcon, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
          <Image
            style={[styles.menuClubChild1, styles.lineIconLayout]}
            contentFit="cover"
            source={require("../assets/line-5.png")}
          />
          <View style={styles.groupParent}>
            <Image
              style={[styles.groupChild, styles.groupChildPosition]}
              contentFit="cover"
              source={require("../assets/group-5401.png")}
            />
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("TusMensajes")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/group-5391.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.menuClubChild2, styles.menuClubChild2Layout]}
            contentFit="cover"
            source={require("../assets/group-593.png")}
          />
          <Image
            style={[styles.maskGroupIcon2, styles.menuClubChild2Layout]}
            contentFit="cover"
            source={require("../assets/mask-group7.png")}
          />
          <Image
            style={[styles.ellipseIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-83.png")}
          />
        </View>
        <View style={styles.targetaContenido}>
          <View style={[styles.targeta, styles.groupBorder]}>
            <Image
              style={styles.fondoImagenIcon}
              contentFit="cover"
              source={require("../assets/fondo-imagen.png")}
            />
            <View style={[styles.contenido1, styles.iphonePosition]}>
              <View style={styles.modulos}>
                <View style={[styles.masculino, styles.pivotLayout]}>
                  <View style={[styles.sexoParent, styles.parentPosition]}>
                    <Text style={[styles.sexo, styles.sexoTypo]}>Sexo</Text>
                    <Text style={[styles.masculino1, styles.pvotTypo]}>
                      Masculino
                    </Text>
                  </View>
                </View>
                <View style={[styles.senior, styles.pivotLayout]}>
                  <View style={[styles.sexoParent, styles.parentPosition]}>
                    <Text style={[styles.sexo, styles.sexoTypo]}>
                      Categoría
                    </Text>
                    <Text style={[styles.masculino1, styles.pvotTypo]}>
                      Sénior
                    </Text>
                  </View>
                </View>
                <View style={[styles.pivot, styles.pivotLayout]}>
                  <View style={[styles.sexoParent, styles.parentPosition]}>
                    <Text style={[styles.sexo, styles.sexoTypo]}>Posición</Text>
                    <Text style={[styles.pvot, styles.pvotTypo]}>Pívot</Text>
                  </View>
                </View>
                <View style={[styles.comarca, styles.pivotLayout]}>
                  <View style={[styles.sexoParent, styles.parentPosition]}>
                    <Text style={[styles.sexo, styles.sexoTypo]}>Comarca</Text>
                    <Text style={[styles.pvot, styles.pvotTypo]}>Maresme</Text>
                  </View>
                </View>
                <View style={[styles.urgencia, styles.pivotLayout]}>
                  <View style={styles.rectangleParent}>
                    <View style={[styles.groupItem, styles.groupBorder]} />
                    <Text style={[styles.urgencia1, styles.sexoTypo]}>
                      Urgencia
                    </Text>
                  </View>
                  <Image
                    style={styles.urgenciaChild}
                    contentFit="cover"
                    source={require("../assets/group-692.png")}
                  />
                </View>
                <View style={[styles.retribucion, styles.pivotLayout]}>
                  <View style={styles.rectangleParent}>
                    <View style={[styles.groupItem, styles.groupBorder]} />
                    <Text style={[styles.urgencia1, styles.sexoTypo]}>
                      Retribución
                    </Text>
                  </View>
                  <Image
                    style={styles.urgenciaChild}
                    contentFit="cover"
                    source={require("../assets/group-692.png")}
                  />
                </View>
                <View style={[styles.modulosChild, styles.frameBorder]} />
              </View>
              <Image
                style={styles.contenidoChild}
                contentFit="cover"
                source={require("../assets/rectangle-250.png")}
              />
            </View>
          </View>
          <View style={styles.boton}>
            <View style={[styles.aceptar, styles.aceptarBg]}>
              <Text style={[styles.verOferta, styles.verOfertaTypo]}>
                Inscríbete en la oferta 
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.menuContenido, styles.iphonePosition]}>
        <View>
          <Pressable onPress={() => navigation.navigate("TusMensajes")}>
            <Text style={[styles.todasLaOfertas, styles.ofertasTypo]}>
              Todas la ofertas
            </Text>
          </Pressable>
          <Image
            style={styles.menuChild}
            contentFit="cover"
            source={require("../assets/line-6.png")}
          />
        </View>
      </View>
      <View style={styles.cabezera}>
        <View style={styles.cabezeraBuscarFiltros}>
          <View style={[styles.cabezera1, styles.iphonePosition]}>
            <Pressable
              style={styles.coolicon}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/coolicon3.png")}
              />
            </Pressable>
            <Pressable
              style={styles.ofertas}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.ofertas1, styles.pvotTypo]}>Ofertas</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buscarFiltrosDespliegue}>
          <View style={styles.buscarPictograma}>
            <View style={[styles.cabezera1, styles.iphonePosition]}>
              <View
                style={[styles.groupContainer, styles.groupContainerSpaceBlock]}
              >
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/group-428.png")}
                />
                <Text style={styles.posicnDeJuego}>
                  Posicón de juego, población, club...
                </Text>
              </View>
              <Image
                style={styles.groupIcon1}
                contentFit="cover"
                source={require("../assets/group5.png")}
              />
            </View>
          </View>
          <View style={styles.despliegue}>
            <View
              style={[
                styles.filtrosSugeridosParent,
                styles.groupContainerSpaceBlock,
              ]}
            >
              <Text style={[styles.filtrosSugeridos, styles.sexoTypo]}>
                Filtros sugeridos
              </Text>
              <View style={[styles.frameItem, styles.frameBorder]} />
              <View style={styles.porProximidadPicto}>
                <View style={styles.porProximidadPicto1}>
                  <Image
                    style={styles.porProximidadPictoChild}
                    contentFit="cover"
                    source={require("../assets/vector-16.png")}
                  />
                  <View style={styles.porProximidadParent}>
                    <Text style={[styles.porProximidad, styles.verOfertaTypo]}>
                      Por proximidad
                    </Text>
                    <Image
                      style={[styles.pictogramaIcon, styles.groupChildPosition]}
                      contentFit="cover"
                      source={require("../assets/pictograma.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.frameInner, styles.frameBorder]} />
              <View style={styles.porProximidadPicto}>
                <View style={styles.groupGroup}>
                  <Image
                    style={[styles.groupIcon2, styles.groupChildPosition]}
                    contentFit="cover"
                    source={require("../assets/group6.png")}
                  />
                  <Text style={[styles.porProximidad, styles.verOfertaTypo]}>
                    Por relevancia
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.uxIphone, styles.iphonePosition]}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderBorder]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.aceptarBg]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection2.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  ofertasTypo: {
    fontWeight: '700',
    textAlign: 'center'
  },
  menuClubPosition: {
    marginLeft: -195,
    width: 390,
    left: '50%',
    position: 'absolute'
  },
  groupIconLayout: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  iconPosition: {
    bottom: '33.33%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupChildPosition: {
    bottom: '0%',
    position: 'absolute'
  },
  itemPosition: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    bottom: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    position: 'absolute'
  },
  menuClubChild2Layout: {
    bottom: '38.46%',
    top: '16.67%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute',
    overflow: 'hidden'
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: 'solid'
  },

  pivotLayout: {
    width: 150,
    height: 80
  },
  parentPosition: {
    paddingHorizontal: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    top: 0,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: 'absolute'
  },
  sexoTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: 'left',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  pvotTypo: {
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  frameBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid'
  },
  aceptarBg: {
    backgroundColor: Color.wHITESPORTSMATCH,
    height: 45
  },
  verOfertaTypo: {
    lineHeight: 17,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size
  },
  groupContainerSpaceBlock: {
    paddingVertical: Padding.p_4xs,
    overflow: 'hidden'
  },
  batteryPosition: {
    right: 0,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  misOfertas: {
    width: '44.1%',
    top: '18.96%',
    left: '51.79%',
    textAlign: 'center',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 12,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    position: 'absolute'
  },
  maskGroupIcon: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%',
    maxHeight: '100%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute'
  },
  maskGroupIcon1: {
    top: '21.79%',
    right: '9.74%',
    left: '81.28%',
    width: '8.97%',
    height: '44.87%'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    width: '100%'
  },
  menuClubItem: {
    width: '19.74%',
    right: '59.49%',
    left: '20.77%'
  },
  menuClubInner: {
    height: '3.85%',
    width: '20.51%',
    top: '1.92%',
    right: '59.1%',
    bottom: '94.23%',
    left: '20.38%',
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3
  },
  groupIcon: {
    height: '37.95%',
    width: '7.69%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    left: '25.9%',
    maxHeight: '100%',
    position: 'absolute'
  },
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild1: {
    left: '40.51%'
  },
  groupChild: {
    width: '11.94%',
    right: '88.06%',
    left: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupParent: {
    height: '39.23%',
    width: '68.69%',
    top: '19.74%',
    right: '25.41%',
    bottom: '41.03%',
    left: '5.9%',
    position: 'absolute'
  },
  menuClubChild2: {
    right: '44.87%',
    left: '46.15%'
  },
  maskGroupIcon2: {
    right: '6.15%',
    left: '84.87%'
  },
  ellipseIcon: {
    height: '6.41%',
    width: '1.28%',
    top: '60.26%',
    right: '28.97%',
    left: '69.74%'
  },
  menuClub: {
    top: 562,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: -4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    left: '50%'
  },
  fondoImagenIcon: {
    height: 400,
    width: 360,
    zIndex: 0
  },
  sexo: {
    width: 143,
    height: 17,
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH
  },
  masculino1: {
    marginTop: 11,
    height: 18,
    lineHeight: 20,
    fontSize: FontSize.button_size,
    fontWeight: '500',
    width: 150,
    textAlign: 'center'
  },
  sexoParent: {
    paddingVertical: Padding.p_9xs,
    alignItems: 'flex-end',
    height: 80,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Color.colorDimgray_100,
    overflow: 'hidden'
  },
  masculino: {
    height: 80,
    zIndex: 0
  },
  senior: {
    marginLeft: 20,
    height: 80,
    zIndex: 1
  },
  pvot: {
    marginTop: 13,
    height: 18,
    lineHeight: 20,
    fontSize: FontSize.button_size,
    fontWeight: '500',
    width: 150,
    textAlign: 'center'
  },
  pivot: {
    zIndex: 2,
    marginLeft: 20,
    height: 80
  },
  comarca: {
    zIndex: 3,
    marginLeft: 20,
    height: 80
  },
  groupItem: {
    opacity: 0.5,
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    left: '0%',
    right: '0%',
    width: '100%'
  },
  urgencia1: {
    height: '21.25%',
    width: '95.33%',
    top: '5%',
    left: '4.67%',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    position: 'absolute'
  },
  rectangleParent: {
    alignSelf: 'stretch',
    zIndex: 0,
    flex: 1
  },
  urgenciaChild: {
    top: 36,
    left: 14,
    width: 122,
    height: 18,
    zIndex: 1,
    position: 'absolute'
  },
  urgencia: {
    zIndex: 4,
    marginLeft: 20,
    height: 80
  },
  retribucion: {
    zIndex: 5,
    marginLeft: 20,
    height: 80
  },
  modulosChild: {
    top: 310,
    left: -20,
    zIndex: 6,
    width: 361,
    position: 'absolute'
  },
  modulos: {
    width: 320,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  contenidoChild: {
    height: 70,
    marginTop: 30,
    opacity: 0.5,
    width: 360
  },
  contenido1: {
    top: 20,
    zIndex: 1,
    alignItems: 'center'
  },
  targeta: {
    zIndex: 0,
    alignItems: 'center',
    width: 361,
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    borderRadius: Border.br_8xs,
    overflow: 'hidden'
  },
  verOferta: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontWeight: '700'
  },
  aceptar: {
    width: '70%',
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    justifyContent: 'center',
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 5
  },
  targetaContenido: {
    flexDirection: 'row',
    left: 15,
    top: 0,
    position: 'absolute'
  },
  contenido: {
    top: 205,
    height: 640,
    width: 390,
    left: '50%'
  },
  todasLaOfertas: {
    color: Color.bALONCESTO,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    marginBottom: 5
  },
  todasLaOfertas2: {
    color: Color.colorWhitesmoke,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    fontWeight: '700',
    marginBottom: 5
  },
  menuChild: {
    width: 188,
    marginTop: 8,
    maxHeight: '100%'
  },
  menuContenido: {
    top: 160
  },
  coolicon: {
    width: 9,
    height: 15
  },
  ofertas1: {
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  ofertas: {
    marginLeft: 9
  },
  cabezera1: {
    alignItems: 'center',
    flexDirection: 'row'
  },

  frameChild: {
    width: 13,
    height: 15
  },
  posicnDeJuego: {
    width: 265,
    height: 16,
    marginLeft: 6,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupContainer: {
    borderColor: Color.wHITESPORTSMATCH,
    paddingHorizontal: Padding.p_2xs,
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    borderWidth: 1,
    borderStyle: 'solid'
  },
  groupIcon1: {
    width: 22,
    marginLeft: 20,
    height: 17
  },
  buscarPictograma: {
    width: 348,
    height: 34
  },
  filtrosSugeridos: {
    textAlign: 'left',
    color: Color.gREY2SPORTSMATCH
  },
  frameItem: {
    marginTop: 10,
    width: 175
  },
  porProximidadPictoChild: {
    width: 10,
    height: 7
  },
  porProximidad: {
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    left: '0%',
    top: '0%',
    position: 'absolute'
  },
  pictogramaIcon: {
    width: '10.49%',
    left: '89.51%',
    right: '0%',
    top: '0%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  porProximidadParent: {
    width: 130,
    marginLeft: 6,
    height: 17
  },
  porProximidadPicto1: {
    width: 146,
    alignItems: 'center',
    flexDirection: 'row'
  },
  porProximidadPicto: {
    marginTop: 10,
    alignItems: 'center'
  },
  frameInner: {
    width: 176,
    marginTop: 10
  },
  groupIcon2: {
    height: '84.21%',
    width: '12.03%',
    top: '15.79%',
    left: '87.97%',
    right: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  groupGroup: {
    width: 133,
    height: 19
  },
  filtrosSugeridosParent: {
    paddingHorizontal: 0,
    left: 0,
    borderRadius: Border.br_8xs,
    top: 0,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    position: 'absolute',
    alignItems: 'center'
  },
  despliegue: {
    height: 108,
    marginTop: 9,
    width: 175
  },
  buscarFiltrosDespliegue: {
    marginTop: 21,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cabezera: {
    top: 60,
    height: 146,
    left: 15,
    position: 'absolute'
  },
  uxIphoneChild: {
    height: 34,
    top: 0,
    width: 390,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    opacity: 0.35,
    height: 12,
    width: 22,
    top: 0
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7
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
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    fontSize: FontSize.t2TextSTANDARD_size,
    top: '50%',
    color: Color.wHITESPORTSMATCH,
    textAlign: 'center'
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
  },
  uxIphone: {
    height: 34,
    top: 0,
    width: 390
  },
  todasLasOfertas: {
    width: '100%',
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default TodasLasOfertas
