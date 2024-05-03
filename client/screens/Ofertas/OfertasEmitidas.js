import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  ScrollView,
  Dimensions
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
import {
  getAllOffers,
  getOfferById,
  setOffer
} from '../../redux/actions/offers'
import BackArrowSVG from '../../components/svg/BackArrowSVG'
import { getAllPositions } from '../../redux/actions/sports'
import { SafeAreaView } from 'react-native-safe-area-context'

const OfertasEmitidas = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { club } = useSelector((state) => state.clubs)

  const { offers, offer: offerRedux } = useSelector((state) => state.offers)
  // const { positions } = useSelector((state) => state.sports)

  const [modalVisible, setModalVisible] = useState(false)
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const [selectedOffer, setSelectedOffer] = useState()

  useEffect(() => {
    dispatch(getAllOffers())
    dispatch(getAllPositions())
  }, [])

  const handleImageClick = (event) => {
    const { pageX, pageY } = event.nativeEvent

    setModalPosition({ x: pageX - 160, y: pageY - 60 })

    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.ofertasEmitidas}>
      <View style={styles.topContainer}>
        <Pressable style={styles.header} onPress={() => navigation.goBack()}>
          <BackArrowSVG />
          <Text style={styles.titular}>Ofertas</Text>
        </Pressable>
        <TouchableOpacity
          style={styles.add}
          onPress={() => navigation.navigate('ConfigurarAnuncio')}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 15 }}>
        <View style={styles.container}>
          {offers.length === 0 ||
          offers.filter((offer) => offer.club.id === club.id).length === 0 ? (
            <Text
              style={{
                marginTop: 30,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: 500,
                fontSize: FontSize.size_9xl,
                color: Color.wHITESPORTSMATCH,
                bottom: 4
              }}
            >
              Aun no has creado ninguna oferta!
            </Text>
          ) : (
            offers
              .filter((offer) => offer.club.id === club.id)
              .map((offer, i) => (
                <View key={offer.id} style={styles.offers}>
                  <View style={styles.offerView}>
                    <Text style={[styles.oferta1, styles.sexo1Typo]}>
                      Oferta {i + 1}
                    </Text>
                    <TouchableOpacity
                      onPress={(event) => {
                        handleImageClick(event)
                        setSelectedOffer(offer.id)
                      }}
                      style={styles.touchableImg}
                    >
                      <Image
                        style={styles.titularChild}
                        contentFit="cover"
                        source={require('../../assets/frame-957.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View>
                      <Text style={[styles.sexo1, styles.sexo1Typo]}>Sexo</Text>
                      <Text style={[styles.masculino, styles.timeTypo]}>
                        {offer.sexo === 'Male' ? 'Masculino' : 'Femenino'}
                      </Text>
                    </View>

                    <View style={styles.innerLine} />

                    <View>
                      <Text style={[styles.sexo1, styles.sexo1Typo]}>
                        Categoría
                      </Text>
                      <Text style={[styles.masculino, styles.timeTypo]}>
                        {offer.category}
                      </Text>
                    </View>

                    <View style={styles.innerLine} />

                    <View>
                      <Text style={[styles.sexo1, styles.sexo1Typo]}>
                        Posicion
                      </Text>
                      <Text style={[styles.masculino, styles.timeTypo]}>
                        {/* {offer.position} */} Posicion
                      </Text>
                    </View>

                    <View style={styles.innerLine} />

                    <View style={styles.offerView}>
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
                          {offer && offer.retribution ? 'Si' : 'No'}
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
                    onPress={() =>
                      navigation.navigate('InscritosAMisOfertas', {
                        inscriptions: offer.inscriptions || []
                      })
                    }
                  >
                    <Text style={[styles.inscritos1, styles.pausar1Typo]}>
                      {offer.inscriptions
                        ? `${offer.inscriptions.length} inscritos`
                        : '0 inscritos'}
                    </Text>
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
                            offerId={selectedOffer}
                            onClose={() => setModalVisible(false)}
                          />
                        </View>
                      </View>
                    </TouchableWithoutFeedback>
                  </Modal>
                </View>
              ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
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
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: Color.bLACK1SPORTSMATCH
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'flex-start',
    gap: 11
  },
  offers: {
    width: (Dimensions.get('window').width * 0.9) / 2,
    marginTop: 20,
    backgroundColor: Color.bLACK2SPORTMATCH,
    borderRadius: 8,
    padding: 10
  },
  offerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  innerLine: {
    borderWidth: 0.5,
    borderColor: Color.colorGhostwhite,
    marginVertical: 8
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: '5%',
    marginRight: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  titular: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.size_9xl,
    color: Color.wHITESPORTSMATCH,
    bottom: 4
  },
  add: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.bALONCESTO,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.bALONCESTO
  },
  addText: {
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.size_21xl,
    bottom: 8.5
  },
  touchableImg: {
    width: 24,
    height: 25,
    top: 2,
    alignItems: 'center'
  }
})

export default OfertasEmitidas
