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
  setOffer,
  updateOffer
} from '../../redux/actions/offers'
import BackArrowSVG from '../../components/svg/BackArrowSVG'
import { getAllPositions } from '../../redux/actions/sports'
import { SafeAreaView } from 'react-native-safe-area-context'

const OfertasEmitidas = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { mainColor } = useSelector((state) => state.users)
  const { club } = useSelector((state) => state.clubs)
  const { allPositions } = useSelector((state) => state.positions)

  const { offers, offer: offerRedux } = useSelector((state) => state.offers)
  // const { positions } = useSelector((state) => state.sports)

  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })

  const [selectedOffer, setSelectedOffer] = useState()
  const [selectedOfferData, setSelectedOfferData] = useState()

  useEffect(() => {
    dispatch(getAllOffers())
    dispatch(getAllPositions())
  }, [])

  const handleImageClick = (event) => {
    const { pageX, pageY } = event.nativeEvent

    setModalPosition({ x: pageX - 160, y: pageY - 60 })

    setModalVisible(true)
  }

  useEffect(() => {
    console.log(
      'ALL CLUB OFFERS:',
      offers.filter((offer) => offer.club.id === club.id)
    )
  }, [])

  const total = offers
    .filter((offer) => offer.club.id === club.id)
    .filter((offer, i) => offer?.prop2?.price && offer?.prop2?.price)
  const finalNumber = total.map((c) => c?.prop2?.price)
  const totalNumber = finalNumber.reduce((a, b) => a + b, 0)

  console.log(totalNumber, 'tota2l')

  return (
    <SafeAreaView style={styles.ofertasEmitidas}>
      <View style={styles.topContainer}>
        <Pressable
          style={styles.header}
          onPress={() => {
            return navigation.reset({
              index: 0,
              routes: [{ name: 'ScreenPrincipal' }]
            })
          }}
        >
          <BackArrowSVG />
        </Pressable>
        <Text style={styles.titular}>Ofertas</Text>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: mainColor,
            borderRadius: 10
          }}
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
                width: '100%',
                marginTop: 14,
                fontFamily: FontFamily.t4TEXTMICRO,
                fontWeight: 400,
                fontSize: 14,
                textAlign: 'center',
                color: Color.wHITESPORTSMATCH,
                bottom: 4
              }}
            >
              ¡Aún no has creado ninguna oferta!
            </Text>
          ) : (
            offers
              .filter((offer) => offer.club.id === club.id)
              .map((offer, i) => {
                return (
                  <View key={offer.id} style={styles.offers}>
                    <View style={styles.offerView}>
                      <Text
                        style={{
                          color: mainColor,
                          lineHeight: 14,
                          fontSize: FontSize.t4TEXTMICRO_size,
                          fontFamily: FontFamily.t4TEXTMICRO
                        }}
                      >
                        Oferta {i + 1}
                      </Text>
                      {offer?.prop2 && (
                        <TouchableOpacity
                          onPress={(event) => {
                            setModalVisible2(true)
                            // handleImageClick(event)
                            setSelectedOfferData(offer)
                          }}
                          style={{
                            width: 24,
                            height: 25,
                            top: 2,
                            alignItems: 'center'
                          }}
                        >
                          <Image
                            style={{ width: 40, height: 24 }}
                            contentFit="contain"
                            source={require('../../assets/CoinsPromo.png')}
                          />
                        </TouchableOpacity>
                      )}

                      <TouchableOpacity
                        onPress={(event) => {
                          handleImageClick(event)
                          setSelectedOffer(offer.id)
                        }}
                        style={{
                          width: 24,
                          height: 25,
                          top: 2,
                          alignItems: 'center'
                        }}
                      >
                        <Image
                          style={{ width: 5, height: 21 }}
                          contentFit="contain"
                          source={require('../../assets/frame-957.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      <View>
                        <Text style={[styles.sexo1, styles.sexo1Typo]}>
                          Sexo
                        </Text>
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
                          {offer.posit}
                        </Text>
                      </View>
                      <View style={styles.innerLine} />
                      <View>
                        <Text style={[styles.sexo1, styles.sexo1Typo]}>
                          Provincia
                        </Text>
                        <Text style={[styles.masculino, styles.timeTypo]}>
                          {offer?.province?.length > 0 ? offer.province : '-'}
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
                    <TouchableOpacity
                      onPress={async () => {
                        await dispatch(
                          updateOffer({
                            id: offer.id,
                            body: { paused: !offer.paused }
                          })
                        ).then((data) => dispatch(getAllOffers()))
                      }}
                      style={styles.botonPausar}
                    >
                      <View style={[styles.pausar, styles.pausarFlexBox]}>
                        <Text style={[styles.pausar1, styles.pausar1Typo]}>
                          {!offer.paused ? 'Pausar' : 'Reanudar'}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <Pressable
                      style={styles.inscritos}
                      onPress={() =>
                        navigation.navigate('InscritosAMisOfertas', {
                          inscriptions: offer.inscriptions || []
                        })
                      }
                    >
                      <Text style={[styles.inscritos1, styles.pausar1Typo]}>
                        {offer.inscriptions &&
                        offer.inscriptions.filter(
                          (item) => item !== 'undefined'
                        ).length > 0
                          ? `${offer?.inscriptions?.filter((item) => item !== 'undefined')?.length} inscritos`
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
                              offerData={
                                offers?.filter(
                                  (off) => selectedOffer === off?.id
                                )[0]
                              }
                            />
                          </View>
                        </View>
                      </TouchableWithoutFeedback>
                    </Modal>
                  </View>
                )
              })
          )}
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        style={{ flex: 1 }}
        onRequestClose={() => setModalVisible2(false)}
        transparent
        visible={modalVisible2}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end'
          }}
        >
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1
            }}
            onTouchStart={() => setModalVisible2(false)}
          />

          <View
            style={{
              bottom: 0,
              width: '100%',
              borderTopEndRadius: 20,
              borderTopStartRadius: 20,
              borderWidth: 1,
              borderBottomWidth: 0,
              borderColor: 'gray',
              padding: 14,
              position: 'absolute',
              backgroundColor: Color.bLACK2SPORTMATCH
            }}
          >
            <View
              style={{
                height: 6,
                width: 50,
                borderRadius: 20,
                backgroundColor: Color.wHITESPORTSMATCH,
                alignSelf: 'center',
                marginBottom: 12
              }}
            />
            <Text style={{ color: 'gray', textAlign: 'center' }}>
              Oferta promocionada
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: 'gray',
                paddingVertical: 10
              }}
            >
              <Text style={{ color: 'white' }}>
                Promocionada desde {selectedOfferData?.prop2?.date.slice(8, 10)}
                /{selectedOfferData?.prop2?.date.slice(5, 7)}/
                {selectedOfferData?.prop2?.date.slice(0, 4)}
              </Text>

              <Text style={{ color: 'white' }}>
                Duración: {selectedOfferData?.prop2?.days} Días
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlignVertical: 'bottom'
                }}
              >
                Precio de promoción
              </Text>
              <Text style={{ color: 'white', fontSize: 20 }}>
                €{selectedOfferData?.prop2?.price}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text
                style={{
                  color: 'white',
                  textAlignVertical: 'bottom'
                }}
              >
                Total invertido en promoción
              </Text>
              <Text style={{ color: 'white', fontSize: 20 }}>
                €{totalNumber}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
    justifyContent: 'space-between'
  },
  offers: {
    width: ((Dimensions.get('window').width - 30) * 0.97) / 2,
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
    height: '100%',
    textAlignVertical: 'center'
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
    fontSize: 26,
    bottom: 2
  },
  touchableImg: {
    width: 24,
    height: 25,
    top: 2,
    alignItems: 'center'
  }
})

export default OfertasEmitidas
