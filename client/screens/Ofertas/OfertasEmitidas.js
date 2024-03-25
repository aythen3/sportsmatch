import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView
} from 'react-native'
import { Image } from 'expo-image'
import { useNavigation } from '@react-navigation/native'
import {
  FontFamily,
  FontSize,
  Color,
  Border,
  Padding
} from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import ModalOptionOffers from '../../components/ModalOptionOffers'
import { setOffer } from '../../redux/slices/offers.slices'

const OfertasEmitidas = () => {
  const { offers } = useSelector((state) => state.offers)
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const handleImageClick = (event) => {
    const { pageX, pageY } = event.nativeEvent

    setModalPosition({ x: pageX - 160, y: pageY - 60 })

    setModalVisible(true)
  }

  return (
    <View style={styles.ofertasEmitidas}>
      <ScrollView>
        <View style={styles.container}>
          {offers.map((offer, i) => (
            <View key={offer.id} style={styles.offers}>
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
                <TouchableOpacity
                  onPress={(event) => {
                    handleImageClick(event)
                  }}
                >
                  <Image
                    style={styles.titularChild}
                    contentFit="cover"
                    source={require('../../assets/frame-957.png')}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 8 }}>
                <View>
                  <Text style={[styles.sexo1, styles.sexo1Typo]}>Sexo</Text>
                  <Text style={[styles.masculino, styles.timeTypo]}>
                    {offer.gender}
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
                  <Text style={[styles.sexo1, styles.sexo1Typo]}>
                    Categoria
                  </Text>
                  <Text style={[styles.masculino, styles.timeTypo]}>
                    {offer.category}
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
                  <Text style={[styles.sexo1, styles.sexo1Typo]}>Posicion</Text>
                  <Text style={[styles.masculino, styles.timeTypo]}>
                    {offer.position}
                  </Text>
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
                    <Text style={[styles.sexo1, styles.sexo1Typo]}>
                      Urgencia
                    </Text>
                    <Text style={[styles.masculino, styles.timeTypo]}>
                      {offer.urgency}/10
                    </Text>
                  </View>
                  <View>
                    <Text style={[styles.sexo1, styles.sexo1Typo]}>
                      Retribucion
                    </Text>
                    <Text style={[styles.masculino, styles.timeTypo]}>
                      {offer.remuneration}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.botonPausar}>
                <View style={[styles.pausar, styles.pausarFlexBox]}>
                  <Text style={[styles.pausar1, styles.pausar1Typo]}>
                    Pausar
                  </Text>
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
              <Modal visible={modalVisible} transparent={true}>
                <TouchableWithoutFeedback
                  onPress={() => setModalVisible(false)}
                >
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
                      <ModalOptionOffers
                        offer={offer}
                        onClose={() => setModalVisible(false)}
                      />
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Modal>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  sexo1Typo: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
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
  sexo1: {
    color: Color.gREY2SPORTSMATCH,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size
  },
  masculino: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
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
    marginTop: 16
  },
  frame: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  ofertasEmitidas: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    width: '100%',
    justifyContent: 'center',
    gap: 10
  },
  offers: {
    width: 170,
    marginTop: 20,
    backgroundColor: Color.bLACK2SPORTMATCH,
    borderRadius: 8,
    padding: 10
  }
})

export default OfertasEmitidas
