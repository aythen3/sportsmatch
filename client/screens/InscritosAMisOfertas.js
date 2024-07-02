import React, { useContext, useEffect, useState } from 'react'
import { Image } from 'expo-image'
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Color, FontFamily, FontSize, Border, Padding } from '../GlobalStyles'
import RegisteredOffers from '../components/RegisteredOffers'
import { useDispatch, useSelector } from 'react-redux'
import Premium from './Premium'
import { getAllMatchs, sendMatch } from '../redux/actions/matchs'
import { updateOffer } from '../redux/actions/offers'
import { sendNotification } from '../redux/actions/notifications'
import { BlurView } from 'expo-blur'
import { getColorsWithOpacity } from '../utils/colorUtils'
import { Context } from '../context/Context'
import { getAllUsers } from '../redux/actions/users'

const InscritosAMisOfertas = () => {
  const dispatch = useDispatch()
  const { getClubMatches, clubMatches } = useContext(Context)
  const { offers } = useSelector((state) => state.offers)
  const { allUsers, user, mainColor } = useSelector((state) => state.users)
  const navigation = useNavigation()
  const [modalPremium, setModalPremium] = useState(false)
  const route = useRoute()

  const inscriptions = route.params.inscriptions
  const moreOpacity = 0.65 // 80% opacity
  const lessOpacity = 0.4 // 40% opacity
  const colors = getColorsWithOpacity(mainColor, moreOpacity, lessOpacity)
  console.log('colors', colors)

  useEffect(() => {
    getClubMatches()
  }, [])

  useEffect(() => {
    if (allUsers.length === 0) {
      dispatch(getAllUsers())
    }
  }, [])

  useEffect(() => {
    // console.log('clubMatches', clubMatches.filter(match=>match?.prop1?.sportmanId === inscription))
  }, [])

  return (
    <ScrollView
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: Color.bLACK1SPORTSMATCH,
        overflow: 'hidden'
      }}
      contentContainerStyle={{
        paddingBottom: 30
      }}
    >
      <View
        style={{
          width: '100%',
          backgroundColor: Color.bLACK1SPORTSMATCH,
          justifyContent: 'space-between'
        }}
      >
        <View style={{ width: '100%' }}>
          <View
            style={{
              marginTop: 30,
              marginLeft: 15,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5
            }}
          >
            <Pressable
              style={{ width: 15, height: 15 }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Image
                style={{
                  maxHeight: '100%',
                  height: '100%',
                  width: '100%',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  overflow: 'hidden'
                }}
                contentFit="cover"
                source={require('../assets/coolicon4.png')}
              />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Text
                style={{
                  fontSize: FontSize.h3TitleMEDIUM_size,
                  lineHeight: 22,
                  fontWeight: '500',
                  color: Color.wHITESPORTSMATCH,
                  fontFamily: FontFamily.t4TEXTMICRO
                }}
              >
                Inscritos
              </Text>
            </Pressable>
          </View>

          <View style={{ marginTop: 30, marginBottom: 20 }}>
            {inscriptions.filter((item) => item !== 'undefined').length > 0 ? (
              <View>
                {inscriptions
                  .filter((item) => item !== 'undefined')
                  .slice(
                    0,
                    user?.user?.plan === 'pro'
                      ? 30
                      : user?.user?.plan === 'star'
                        ? 1000
                        : 3
                  )
                  .map((inscription, index) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '95%',
                        height: 80,
                        alignItems: 'center',
                        alignSelf: 'center',
                        borderBottomWidth: 1,
                        borderBottomColor: '#cecece'
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 10,
                          alignItems: 'center'
                        }}
                      >
                        <Image
                          style={{ width: 50, height: 50, borderRadius: 100 }}
                          contentFit="contain"
                          source={{
                            uri: allUsers
                              .filter(
                                (user) =>
                                  user.type === 'sportman' && user?.sportman
                              )
                              .filter(
                                (user) => user?.sportman.id === inscription
                              )[0]?.sportman?.info?.img_perfil
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: 500,
                            fontSize: 14,
                            color: '#fff'
                          }}
                        >
                          {
                            allUsers
                              .filter(
                                (user) =>
                                  user?.type === 'sportman' && user?.sportman
                              )
                              .filter(
                                (user) => user?.sportman?.id === inscription
                              )[0]?.nickname
                          }
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{
                          flexDirection: 'row',
                          backgroundColor:
                            clubMatches.filter(
                              (match) =>
                                match?.prop1?.sportmanId === inscription
                            ).length > 0
                              ? colors.moreOpaque
                              : colors.lessOpaque,
                          borderRadius: Border.br_81xl,
                          height: 25,
                          width: 90,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                        onPress={() => {
                          const currentOffer = offers.filter(
                            (offer) =>
                              offer.inscriptions &&
                              offer.inscriptions.includes(inscription)
                          )[0]
                          const offerId = offers.filter(
                            (offer) =>
                              offer.inscriptions &&
                              offer.inscriptions.includes(inscription)
                          )[0].id
                          const newInscriptions =
                            currentOffer.inscriptions.filter(
                              (applicant) => applicant !== inscription
                            )

                          const actualMatches = currentOffer.matches || []
                          const newMatchs = [...actualMatches, inscription]

                          const sportmanUser = allUsers.filter(
                            (user) => user?.sportman?.id === inscription
                          )[0]

                          dispatch(
                            sendMatch({
                              offerId,
                              sportmanId: inscription,
                              clubId: user.user.club.id,
                              status: 'success',
                              prop1: {
                                clubId: user.user.club.id,
                                offerId,
                                sportmanId: inscription,
                                sportManData: {
                                  userId: sportmanUser?.id,
                                  profilePic:
                                    sportmanUser?.sportman?.info?.img_perfil,
                                  name: sportmanUser?.nickname
                                },
                                clubData: {
                                  userId: user?.user?.id,
                                  name: user?.user?.nickname,
                                  profilePic: user?.user?.club?.img_perfil
                                }
                              }
                            })
                          )
                            .then((data) => {
                              dispatch(
                                sendNotification({
                                  title: 'Match',
                                  message: 'Has hecho match!',
                                  recipientId:
                                    data?.payload?.prop1?.sportManData?.userId,
                                  date: new Date(),
                                  read: false,
                                  prop1: {
                                    matchId: data?.payload?.id,
                                    clubData: {
                                      name: user?.user?.nickname,
                                      userId: user.user.id,
                                      ...user?.user?.club
                                    }
                                  }
                                })
                              )
                            })
                            .then((data) => dispatch(getAllMatchs()))

                          dispatch(
                            updateOffer({
                              id: offerId,
                              body: {
                                inscriptions: newInscriptions,
                                matches: newMatchs
                              }
                            })
                          )
                        }}
                      >
                        {/* <Image
                        style={{ height: 58 * 0.7, width: 111 * 0.7 }}
                        contentFit="contain"
                        source={require('../assets/matchButton.png')}
                      /> */}
                        <Text
                          style={{
                            width: '70%',
                            fontSize: 13,
                            textAlign: 'center',
                            marginLeft:
                              clubMatches.filter(
                                (match) =>
                                  match?.prop1?.sportmanId === inscription
                              ).length === 0
                                ? '30%'
                                : '-30%',
                            color:
                              clubMatches.filter(
                                (match) =>
                                  match?.prop1?.sportmanId === inscription
                              ).length === 0
                                ? colors.moreOpaque
                                : 'rgba(255,255,255,0.7)',
                            fontFamily: FontFamily.t4TEXTMICRO,
                            fontWeight: '700'
                          }}
                        >
                          {'Match'}
                        </Text>
                        <View
                          style={{
                            width: 30,
                            height: 30,
                            borderRadius: 100,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: mainColor,
                            position: 'absolute',
                            left:
                              clubMatches.filter(
                                (match) =>
                                  match?.prop1?.sportmanId === inscription
                              ).length === 0 && 0,
                            right:
                              clubMatches.filter(
                                (match) =>
                                  match?.prop1?.sportmanId === inscription
                              ).length > 0 && 0
                          }}
                        >
                          <Image
                            style={{ width: '80%', height: '80%' }}
                            contentFit="cover"
                            source={require('../assets/whiteSport.png')}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
              </View>
            ) : (
              <View
                style={{
                  width: '95%',
                  alignItems: 'center',
                  alignSelf: 'center'
                }}
              >
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
                  Aun no hay ningun inscrito en esta oferta!
                </Text>
              </View>
            )}

            {inscriptions.filter((item) => item !== 'undefined').length > 2 && (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '95%',
                  height: 80,
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#cecece'
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center'
                  }}
                >
                  {/* <View style={{borderRadius:100,overflow:'hidden'}}>
                      <BlurView style={{zIndex:1000, borderRadius:100}} intensity={160}>
                      <Image
                        style={{ width: 50, height: 50, borderRadius: 100,zIndex:-1000 }}
                        contentFit="contain"
                        source={{
                          uri: allUsers
                            .filter(
                              (user) => user.type === 'sportman' && user.sportman
                            )
                            .filter((user) => user.sportman.id === inscriptions[2])[0]
                            .sportman.info.img_perfil
                        }}
                      />
                      </BlurView>
                      </View> */}
                  <View style={{ position: 'relative' }}>
                    <Image
                      style={{ width: 50, height: 50, borderRadius: 100 }}
                      contentFit="contain"
                      source={require('../assets/blurryProfile2.png')}
                    />
                    {inscriptions.filter((item) => item !== 'undefined')
                      .length > 3 && (
                      <Image
                        style={{
                          position: 'absolute',
                          top: 4,
                          left: 7,
                          width: 50,
                          height: 50,
                          borderRadius: 100
                        }}
                        contentFit="contain"
                        source={require('../assets/blurryProfile.png')}
                      />
                    )}
                  </View>

                  <Text
                    style={{ fontWeight: 500, fontSize: 14, color: '#fff' }}
                  >
                    {inscriptions.filter((item) => item !== 'undefined')
                      .length > 3
                      ? `+ ${inscriptions.filter((item) => item !== 'undefined').length - 2} inscripciones más`
                      : '+ 1 inscripción más'}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.simboloIcon}
              contentFit="cover"
              source={require('../assets/simbolo.png')}
            />
            <Text
              style={[styles.texto1, styles.textoSpaceBlock]}
            >{`Con tu modelo de suscripción no puedes 
      alizar todas las inscripciones`}</Text>
            <Text
              style={[styles.texto2, styles.textoSpaceBlock]}
            >{`¡Sube de nivel en tu cuenta para 
      alizar todas las inscripciones!`}</Text>
            <Pressable
              style={{
                backgroundColor: Color.wHITESPORTSMATCH,
                marginTop: 14,
                width: '95%',
                justifyContent: 'center',
                paddingHorizontal: Padding.p_81xl,
                paddingVertical: Padding.p_3xs,
                zIndex: 3,
                backgroundColor: Color.wHITESPORTSMATCH,
                borderRadius: Border.br_81xl,
                flexDirection: 'row',
                alignItems: 'center'
              }}
              onPress={() => setModalPremium(true)}
            >
              <Text style={styles.textoBoton}>Hazte premium</Text>
            </Pressable>
          </View>
        </View>

        <Modal visible={modalPremium} transparent={true} animationType="slide">
          <TouchableWithoutFeedback onPress={() => setModalPremium(false)}>
            <View
              style={{
                flex: 1
              }}
            >
              <Premium onClose={() => setModalPremium(false)} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  groupFrameSpaceBlock: {
    marginLeft: 15
  },
  carlesMirTypo: {
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupWrapperLayout: {
    height: 38,
    width: 101
  },
  matchLayout: {
    height: 37,
    width: 101
  },
  groupInnerPosition: {
    width: '100%'
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: 'center'
  },
  frameLayout: {
    width: 38,
    height: 38
  },
  iconGroupLayout: {
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden'
  },
  frameItemLayout: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.bLACK3SPORTSMATCH,
    width: 360,
    borderStyle: 'solid'
  },
  groupPosition: {
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute'
  },
  textoSpaceBlock: {
    marginTop: 9
  },
  menuClubPosition: {
    left: '50%',
    position: 'absolute'
  },
  maskGroupLayout: {
    width: '8.97%',
    height: '44.87%',
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden'
  },
  borderBorder: {
    borderStyle: 'solid',
    position: 'absolute'
  },
  ellipseParentPosition: {
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
    top: 0,
    left: 0,
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
  maskGroupIcon: {
    width: 45,
    height: 45
  },
  jordiEspelt: {
    fontWeight: '700',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    height: '100%',
    width: '100%'
  },
  jordiEspeltWrapper: {
    height: 16
  },
  frameGroup: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  groupChild: {
    backgroundColor: Color.colorMaroon,
    borderRadius: Border.br_81xl,
    height: '100%',
    width: '100%'
  },
  matchAssetInner: {
    height: 40
  },

  matchAssetWrapper: {
    zIndex: 0
  },
  match: {
    // top: '27.03%',
    // left: '43.56%',
    color: Color.bALONCESTO,
    alignSelf: 'flex-end',
    marginRight: 10,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700',
    lineHeight: 17
    // position: 'absolute'
  },
  groupParent: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  frameChild: {
    zIndex: 0
  },
  groupIcon: {
    height: '55%',
    width: '71.32%',
    top: '23.68%',
    right: '15%',
    bottom: '21.32%',
    left: '13.68%',
    opacity: 0.9,
    maxHeight: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  groupContainer: {
    top: 0,
    flexDirection: 'row',
    left: 0,
    position: 'absolute'
  },
  frameWrapper: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  frameContainer: {
    top: 0,
    left: 0,
    position: 'absolute'
  },
  groupWrapper: {
    marginLeft: 118
  },
  frameItem: {
    marginTop: 11
  },
  carlesMir: {
    fontWeight: '700',
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    left: '0%',
    top: '0%',
    position: 'absolute',
    width: '100%',
    textAlign: 'left'
  },
  groupView: {
    right: '0%',
    left: '0%',
    width: '100%'
  },
  groupFrame: {
    height: 17
  },
  frameView: {
    marginTop: 11,
    flexDirection: 'row'
  },
  frameChild1: {
    width: 52,
    height: 49
  },
  groupWrapper2: {
    width: 266,
    marginLeft: 11,
    height: 17
  },
  groupParent3: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  perfilesChild: {
    marginTop: 10
  },
  simboloIcon: {
    width: 46,
    height: 46,
    zIndex: 0
  },
  texto1: {
    color: Color.gREY2SPORTSMATCH,
    zIndex: 1,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  texto2: {
    zIndex: 2,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size
  },
  textoBoton: {
    fontSize: FontSize.button_size,
    color: Color.bLACK1SPORTSMATCH,
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: '700'
  },
  botonPremium: {
    // top: 144,
    justifyContent: 'center',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    zIndex: 3,
    // left: 15,
    // width: 360,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerPremiumFrame: {
    alignItems: 'center'
  },
  contenido: {
    top: 109,
    alignItems: 'center',
    left: 0,
    position: 'absolute'
  },
  inscritosAMisOfertasChild: {
    height: '0.59%',
    width: '1.28%',
    top: '91.11%',
    right: '28.97%',
    bottom: '8.29%',
    left: '69.74%',
    maxHeight: '100%',
    position: 'absolute'
  },
  maskGroupIcon2: {
    top: '20.51%',
    right: '5.38%',
    bottom: '34.62%',
    left: '85.64%'
  },
  maskGroupIcon3: {
    top: '21.79%',
    right: '9.74%',
    bottom: '33.33%',
    left: '81.28%'
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: '0%',
    left: '0%',
    width: '100%'
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    width: 81,
    left: 0
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
  groupInner: {
    maxHeight: '100%',
    bottom: '0%',
    top: '0%',
    height: '100%',
    position: 'absolute',
    right: '0%',
    left: '0%',
    width: '100%'
  },
  logoUem21RemovebgPreview1Icon: {
    height: '72.57%',
    width: '77.43%',
    top: '13.71%',
    right: '10.86%',
    bottom: '13.71%',
    left: '11.71%',
    maxHeight: '100%',
    position: 'absolute'
  },
  ellipseParent: {
    right: '6.15%',
    left: '84.87%'
  },
  icon: {
    maxHeight: '100%',
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
    left: '0%'
  },
  iconLayout: {
    height: '100%',
    width: '100%'
  },
  frame: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: 'absolute'
  },
  groupParent4: {
    height: '39.23%',
    width: '68.69%'
  },
  menuClubChild2: {
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
    left: '50%'
  },
  inscritosAMisOfertasItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: '100%'
  },
  inscritos1: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: '500'
  },

  coolicon: {
    width: 15,
    height: 15
  },
  inscritosParent: {
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
    // height: '2.61%',
    // width: '26.41%',
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
    top: '50%',
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: '600',
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: 'center',
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH
  },
  starus: {
    top: 10,
    height: 24,
    left: 15
  },
  inscritosAMisOfertas: {
    width: '100%',
    backgroundColor: Color.bLACK1SPORTSMATCH
  }
})

export default InscritosAMisOfertas
