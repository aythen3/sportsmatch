import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Pressable
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import { FontFamily, FontSize, Color, Border, Padding } from '../GlobalStyles'
import { useSelector } from 'react-redux'
import ModalOptionOffers from '../components/ModalOptionOffers'

const OfertasEmitidas = () => {
  const { offers } = useSelector((state) => state.offers)
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const handleImageClick = (event) => {
    const { pageX, pageY } = event.nativeEvent

    setModalPosition({ x: pageX - 130, y: pageY - 60 })

    setModalVisible(true)
  }

  return (
    <View style={styles.ofertasEmitidas}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 30,
          width: '100%',
          justifyContent: 'center',
          gap: 10
        }}
      >
        {offers.map((offer, i) => (
          <View
            key={offer.id}
            style={{
              width: 170,
              marginTop: 20,
              backgroundColor: Color.bLACK2SPORTMATCH,
              borderRadius: 8,
              padding: 10
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Text style={[styles.oferta1, styles.sexo1Typo]}>
                Oferta {i + 1}
              </Text>
              <TouchableOpacity onPress={handleImageClick}>
                <Image
                  style={styles.titularChild}
                  contentFit="cover"
                  source={require('../assets/frame-957.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 8 }}>
              <View>
                <Text style={[styles.sexo1, styles.sexo1Typo]}>Sexo</Text>
                <Text style={[styles.masculino, styles.timeTypo]}>
                  Masculino
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: Color.colorGhostwhite,
                  marginVertical: 8
                }}
              />

              <View>
                <Text style={[styles.sexo1, styles.sexo1Typo]}>Categoria</Text>
                <Text style={[styles.masculino, styles.timeTypo]}>Senior</Text>
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: Color.colorGhostwhite,
                  marginVertical: 8
                }}
              />

              <View>
                <Text style={[styles.sexo1, styles.sexo1Typo]}>Posicion</Text>
                <Text style={[styles.masculino, styles.timeTypo]}>Escolta</Text>
              </View>

              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: Color.colorGhostwhite,
                  marginVertical: 8
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <View>
                  <Text style={[styles.sexo1, styles.sexo1Typo]}>Urgencia</Text>
                  <Text style={[styles.masculino, styles.timeTypo]}>7/10</Text>
                </View>
                <View>
                  <Text style={[styles.sexo1, styles.sexo1Typo]}>
                    Retribucion
                  </Text>
                  <Text style={[styles.masculino, styles.timeTypo]}>NO</Text>
                </View>
              </View>
            </View>
            <View style={styles.botonPausar}>
              <View style={[styles.pausar, styles.pausarFlexBox]}>
                <Text style={[styles.pausar1, styles.pausar1Typo]}>Pausar</Text>
              </View>
            </View>
            <Pressable
              style={styles.inscritos}
              onPress={() => navigation.navigate('InscritosAMisOfertas')}
            >
              <Text
                style={[styles.inscritos1, styles.pausar1Typo]}
              >{`6 inscritos `}</Text>
            </Pressable>
          </View>
        ))}
      </View>

      <Modal visible={modalVisible} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                position: 'absolute',
                top: modalPosition.y,
                left: modalPosition.x,
                padding: 20,
                borderRadius: 8
              }}
            >
              <ModalOptionOffers onClose={() => setModalVisible(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  contenidoPosition: {
    zIndex: 1,
    position: 'absolute'
  },
  sexo1Typo: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  childLayout: {
    height: 1,
    borderTopWidth: 1,
    borderStyle: 'solid'
  },
  pausarFlexBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pausar1Typo: {
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  childPosition: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  editarLayout: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  },
  eliminarWrapperLayout: {
    height: 17,
    width: 114
  },
  oferta1Position: {
    left: 0,
    position: 'absolute'
  },
  iconGroupLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  groupIconPosition: {
    bottom: '38.46%',
    top: '16.67%',
    width: '8.97%',
    height: '44.87%',
    position: 'absolute'
  },
  lineIconLayout: {
    width: 0,
    maxHeight: '100%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
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
  fondo: {
    borderWidth: 1,
    opacity: 0.5,
    borderColor: Color.colorDimgray_100,
    borderStyle: 'solid',
    backgroundColor: Color.bLACK3SPORTSMATCH,
    borderRadius: Border.br_8xs,
    left: '0%',
    bottom: '0%',
    right: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  fondoGrupo: {
    width: 173,
    height: 286,
    zIndex: 0
  },
  oferta1: {
    color: Color.bALONCESTO,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  oferta1Wrapper: {
    height: 14,
    width: 48
  },
  titularChild: {
    width: 5,
    height: 21
  },
  ofertasSuperior: {
    flexDirection: 'row'
  },
  sexo1: {
    color: Color.gREY2SPORTSMATCH,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  masculino: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  camposChild: {
    marginTop: 6,
    width: 155,
    borderColor: Color.bLACK3SPORTSMATCH,
    height: 1,
    borderTopWidth: 1
  },
  categoria: {
    marginTop: 6
  },
  linia1: {
    marginTop: 7,
    width: 155,
    borderColor: Color.bLACK3SPORTSMATCH,
    height: 1,
    borderTopWidth: 1
  },
  urgencia: {
    marginTop: 7
  },
  columnaIzquierda: {
    zIndex: 0
  },
  columnaDerecha: {
    top: 134,
    left: 90
  },
  ofertaIzquierda: {
    flexDirection: 'row'
  },
  titularcamposboton: {
    // alignItems: 'flex-end'
  },
  pausar1: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  },
  pausar: {
    borderRadius: Border.br_81xl,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  botonPausar: {
    height: 27,
    marginTop: 14
  },
  inscritos1: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH
  },
  inscritos: {
    // height: 20,
    marginTop: 16
  },
  contenido: {
    top: 6,
    left: 1,
    alignItems: 'center'
  },
  ofertaIzquierda1: {
    marginLeft: 14,
    flexDirection: 'row'
  },
  ofertasInferior: {
    marginTop: 10,
    flexDirection: 'row'
  },
  gridOfertas: {
    top: 109,
    left: 15,
    position: 'absolute'
  },
  editar: {
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    left: '0%',
    top: '0%',
    position: 'absolute',
    width: '100%'
  },
  editarWrapper: {
    right: '0%',
    bottom: '0%',
    top: '0%',
    width: '100%'
  },
  despliegueOpcionesChild: {
    alignSelf: 'stretch',
    marginTop: 8,
    borderTopWidth: 1,
    height: 1,
    borderColor: Color.colorDimgray_100
  },
  eliminarWrapper: {
    marginTop: 8
  },
  despliegueOpcionesItem: {
    width: 115,
    marginTop: 8,
    borderTopWidth: 1,
    height: 1,
    borderColor: Color.colorDimgray_100
  },
  promocionar: {
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    left: '0%',
    top: '0%',
    position: 'absolute',
    width: '100%'
  },
  despliegueOpciones: {
    height: '12.2%',
    width: '34.36%',
    top: '16.94%',
    bottom: '70.85%',
    left: '60.26%',
    backgroundColor: '#292929',
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    right: '5.38%',
    justifyContent: 'center',
    borderRadius: Border.br_8xs
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  ofertas1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500',
    color: Color.wHITESPORTSMATCH
  },
  ofertas: {
    marginLeft: 9
  },
  atrasOfertasFrame: {
    top: 0,
    alignItems: 'center',
    flexDirection: 'row'
  },
  atrasOfertas: {
    top: 60,
    left: 16,
    width: 92,
    height: 22,
    position: 'absolute'
  },
  maskGroupIcon: {
    top: '20.51%',
    bottom: '34.62%',
    left: '85.64%',
    width: '8.97%',
    height: '44.87%',
    maxWidth: '100%',
    position: 'absolute',
    right: '5.38%'
  },
  maskGroupIcon1: {
    top: '21.79%',
    right: '9.74%',
    bottom: '33.33%',
    left: '81.28%',
    width: '8.97%',
    height: '44.87%',
    maxWidth: '100%',
    position: 'absolute'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: '0%',
    bottom: '0%',
    top: '0%',
    width: '100%'
  },
  menuClubItem: {
    width: 81,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: 0,
    bottom: '0%',
    top: '0%',
    height: '100%'
  },
  menuClubInner: {
    height: '3.85%',
    width: '21.54%',
    top: '1.92%',
    right: '78.85%',
    bottom: '94.23%',
    left: '-0.38%',
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3
  },
  groupChild: {
    left: '0%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    right: '0%',
    width: '100%'
  },
  logoUem21RemovebgPreview1Icon: {
    height: '72.57%',
    width: '77.43%',
    top: '13.71%',
    right: '10.86%',
    bottom: '13.71%',
    left: '11.71%',
    position: 'absolute'
  },
  ellipseParent: {
    right: '6.15%',
    left: '84.87%'
  },
  icon1: {
    height: '100%',
    width: '100%'
  },
  wrapper: {
    left: '25.9%',
    top: '14.1%',
    right: '66.41%',
    bottom: '47.95%',
    width: '7.69%',
    height: '37.95%',
    position: 'absolute'
  },
  lineIcon: {
    left: '20.77%'
  },
  menuClubChild1: {
    left: '40.51%'
  },
  container: {
    right: '88.06%',
    width: '11.94%',
    bottom: '0%',
    top: '0%'
  },
  frame: {
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
  groupIcon: {
    right: '44.87%',
    left: '46.15%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden'
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
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
    left: '50%',
    position: 'absolute'
  },
  uxIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
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
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: 'absolute'
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
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
  },
  ofertasEmitidas: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default OfertasEmitidas
