import React from 'react'
import { Image } from 'expo-image'
import { StyleSheet, Pressable, Text, View, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Color, Padding, Border, FontFamily, FontSize } from '../GlobalStyles'
import SilverSuscription from '../components/SilverSuscription'
import GoldSuscription from '../components/GoldSuscription'
import StarSuscription from '../components/StarSuscription'

const MiSuscripcin = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.miSuscripcin}>
      <ScrollView>
        <View style={styles.cooliconParent}>
          <Pressable
            style={{ width: 9, height: 20 }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require('../assets/coolicon3.png')}
            />
          </Pressable>
          <Pressable
            style={styles.miSuscripcin1}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.miSuscripcin2}>Mi suscripción</Text>
          </Pressable>
        </View>

        <View>
          <Text style={[styles.esteEsTu, styles.esteEsTuFlexBox]}>
            Este es tu plan actual
          </Text>
        </View>

        {/* ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */}
        <View style={{ marginTop: 30, gap: 30 }}>
          <SilverSuscription />
          <GoldSuscription />
          <StarSuscription />
        </View>

        {/* <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={styles.cabezeraParent}>
          <View style={styles.cabezera}>
            <View style={[styles.cooliconParent, styles.starusPosition]}>
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
                style={styles.miSuscripcin1}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.miSuscripcin2}>Mi suscripción</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View>
              <Text style={[styles.esteEsTu, styles.esteEsTuFlexBox]}>
                Este es tu plan actual
              </Text>
            </View>
            <View style={[styles.freemium, styles.freemiumLayout]}>
              <View style={styles.freemiumChild} />
              <View style={[styles.silver, styles.goldSpaceBlock]}>
                <View>
                  <Image
                    style={styles.freemiumItem}
                    contentFit="cover"
                    source={require("../assets/rectangle-259.png")}
                  />
                  <Text style={[styles.freemium2, styles.ofertasTypo]}>
                    FREEMIUM
                  </Text>
                </View>
                <View style={styles.silverInner}>
                  <View style={styles.frameContainer}>
                    <View style={styles.frameWrapper}>
                      <View style={styles.gratuitoWrapper}>
                        <Text
                          style={[styles.gratuito, styles.timeTypo]}
                        >{`Gratuito
`}</Text>
                      </View>
                    </View>
                    <View style={styles.frameView}>
                      <View style={styles.vectorParent}>
                        <Image
                          style={styles.frameChild}
                          contentFit="cover"
                          source={require("../assets/vector-27.png")}
                        />
                        <Text
                          style={[
                            styles.creacinGratisDel,
                            styles.creacinGratisDelLayout,
                          ]}
                        >
                          Creación gratis del perfil del jugador/a o
                          profesional 
                        </Text>
                      </View>
                      <View style={styles.frameItem} />
                      <View style={styles.vectorGroup}>
                        <Image
                          style={styles.frameChild}
                          contentFit="cover"
                          source={require("../assets/vector-27.png")}
                        />
                        <Text
                          style={[
                            styles.creacinGratisDel,
                            styles.creacinGratisDelLayout,
                          ]}
                        >
                          Acceso a la red social 
                        </Text>
                      </View>
                      <View style={styles.frameItem} />
                      <View style={styles.vectorGroup}>
                        <Image
                          style={styles.frameChild}
                          contentFit="cover"
                          source={require("../assets/vector-27.png")}
                        />
                        <Text
                          style={[
                            styles.creacinGratisDel,
                            styles.creacinGratisDelLayout,
                          ]}
                        >
                          Acceso al buscador de ofertas deportivas de los
                          clubes 
                        </Text>
                      </View>
                      <View style={styles.frameItem} />
                      <View style={styles.vectorGroup}>
                        <Image
                          style={styles.frameChild}
                          contentFit="cover"
                          source={require("../assets/vector-27.png")}
                        />
                        <Text
                          style={[
                            styles.creacinGratisDel,
                            styles.creacinGratisDelLayout,
                          ]}
                        >
                          Posibilidad de hacer Match con cualquier club 
                        </Text>
                      </View>
                      <View style={styles.frameItem} />
                      <View style={styles.vectorGroup}>
                        <Image
                          style={styles.frameChild}
                          contentFit="cover"
                          source={require("../assets/vector-27.png")}
                        />
                        <Text style={styles.creacinGratisDelLayout}>
                          <Text style={styles.accesoA}>{`Acceso a `}</Text>
                          <Text style={styles.ofertasTypo}>20 ofertas</Text>
                          <Text style={styles.accesoA}>
                            {" "}
                            deportivas de los clubes 
                          </Text>
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.marcaPlanActual, styles.aceptarBorder]} />
            </View>
            <View style={styles.frameView}>
              <Text style={[styles.esteEsTu, styles.esteEsTuFlexBox]}>
                Otros planes
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.gold, styles.goldSpaceBlock]}>
          <View>
            <Image
              style={styles.freemiumItem}
              contentFit="cover"
              source={require("../assets/pro.png")}
            />
            <Text style={[styles.freemium2, styles.ofertasTypo]}>{`PRO
`}</Text>
          </View>
          <View style={styles.silverInner}>
            <View style={styles.frameContainer}>
              <View>
                <View style={styles.gratuitoWrapper}>
                  <Text style={[styles.mesOTambinContainer, styles.timeTypo]}>
                    <Text style={styles.text}>12,90€</Text>
                    <Text style={styles.mes}>{`/mes
`}</Text>
                    <Text style={styles.oTambin12440ao}>
                      o también 124,40€/año
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.frameView}>
                <View style={styles.vectorParent}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Creación gratis del perfil del jugador/a o profesional 
                  </Text>
                </View>
                <View style={styles.frameItem} />
                <View style={styles.vectorGroup}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Acceso gratuito a la red social 
                  </Text>
                </View>
                <View style={styles.frameItem} />
                <View style={styles.vectorGroup}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Acceso al buscador de ofertas deportivas de los clubes 
                  </Text>
                </View>
                <View style={styles.frameItem} />
                <View style={styles.vectorGroup}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Posibilidad de hacer Match con cualquier club 
                  </Text>
                </View>
                <View style={styles.frameItem} />
                <View style={styles.vectorGroup}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text style={styles.creacinGratisDelLayout}>
                    <Text style={styles.accesoA}>{`Acceso `}</Text>
                    <Text style={styles.ofertasTypo}>{`ilimitado `}</Text>
                    <Text style={styles.accesoA}>
                      a las ofertas deportivas de los clubes 
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.boto}>
              <Pressable
                style={[styles.aceptar, styles.aceptarFlexBox]}
                onPress={() => navigation.navigate("ChatAbierto")}
              >
                <Text style={[styles.verOferta, styles.aceptar1Typo]}>
                  Seleccionar este plan
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.botoFinal}>
          <View style={[styles.loremIpsum, styles.aceptarFlexBox]}>
            <Text style={[styles.aceptar1, styles.aceptar1Typo]}>
              Realizar cambios
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.iphone}>
        <View style={[styles.group, styles.groupLayout]}>
          <View style={[styles.battery, styles.groupLayout]}>
            <View style={[styles.border, styles.groupLayout]} />
            <Image
              style={styles.capIcon}
              contentFit="cover"
              source={require("../assets/cap1.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  frameParentPosition: {
    marginLeft: -185,
    left: '50%'
  },

  esteEsTuFlexBox: {
    textAlign: 'center',
    marginTop: 20,
    // width: 358,
    color: Color.wHITESPORTSMATCH
  },
  freemiumLayout: {
    // height: 397
    // width: 370
  },
  goldSpaceBlock: {
    paddingBottom: Padding.p_11xl,
    borderRadius: Border.br_mini,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: 'center',
    overflow: 'hidden'
  },
  ofertasTypo: {
    fontWeight: '700',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  timeTypo: {
    fontWeight: '600',
    textAlign: 'center'
  },
  creacinGratisDelLayout: {
    marginLeft: 5,
    // width: 260,
    lineHeight: 16,
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: 'left'
  },
  aceptarBorder: {
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'absolute'
  },
  aceptarFlexBox: {
    borderRadius: Border.br_81xl,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  aceptar1Typo: {
    color: Color.bLACK1SPORTSMATCH,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: FontFamily.t4TEXTMICRO
  },
  groupLayout: {
    height: 12,
    position: 'absolute'
  },
  timeLayout: {
    width: 61,
    position: 'absolute'
  },
  icon: {
    height: '100%',
    width: '100%'
  },
  coolicon: {
    width: 9,
    height: 15
  },
  miSuscripcin2: {
    fontWeight: '500',
    textAlign: 'left',
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  miSuscripcin1: {
    marginLeft: 9
  },
  cooliconParent: {
    // alignItems: 'center',
    // marginLeft: 15,
    marginTop: 50,
    flexDirection: 'row'
  },
  cabezera: {
    width: 163,
    height: 22
  },
  esteEsTu: {
    // lineHeight: 14,
    // width: 358,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  freemiumChild: {
    marginLeft: -174,
    top: 52,
    borderRadius: Border.br_xs,
    borderWidth: 2,
    width: 346,
    height: 308,
    borderColor: Color.bLACK1SPORTSMATCH,
    borderStyle: 'solid',
    left: '50%',
    position: 'absolute'
  },
  freemiumItem: {
    height: 50,

    width: 358
  },
  freemium2: {
    zIndex: 1,
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  gratuito: {
    fontSize: FontSize.size_21xl,
    fontFamily: FontFamily.t4TEXTMICRO
  },
  gratuitoWrapper: {
    // height: 47,
    // width: 358
  },
  frameWrapper: {
    height: 22
  },
  frameChild: {
    width: 10,
    height: 7
  },
  creacinGratisDel: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  vectorParent: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  frameItem: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderTopWidth: 1,
    height: 1,
    marginTop: 10,
    borderStyle: 'solid'
  },
  vectorGroup: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  accesoA: {
    fontFamily: FontFamily.t4TEXTMICRO
  },
  frameView: {
    marginTop: 30
  },
  frameContainer: {
    alignItems: 'center'
  },
  silverInner: {
    marginTop: 30,
    alignItems: 'center'
  },
  marcaPlanActual: {
    borderRadius: Border.br_xl,
    borderColor: Color.wHITESPORTSMATCH,
    top: 0,
    height: 397,
    width: 370,
    left: '50%',
    marginLeft: -185
  },
  freemium: {
    marginTop: 30
  },
  frameGroup: {
    marginTop: 40
  },
  cabezeraParent: {
    justifyContent: 'center'
  },
  text: {
    fontSize: FontSize.size_21xl
  },
  mes: {
    fontSize: FontSize.h3TitleMEDIUM_size
  },
  oTambin12440ao: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.button_size
  },
  mesOTambinContainer: {
    width: 358,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
    left: 0,
    position: 'absolute',
    top: 0
  },
  verOferta: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bLACK1SPORTSMATCH
  },
  aceptar: {
    marginTop: -13.5,
    right: '0%',
    left: '0%',
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    top: '50%',
    borderWidth: 1,
    borderStyle: 'solid',
    position: 'absolute',
    borderColor: Color.bLACK1SPORTSMATCH,
    width: '100%'
  },
  boto: {
    width: 328,
    height: 27,
    marginTop: 30
  },
  gold: {
    opacity: 0.5,
    marginTop: 25
  },
  aceptar1: {
    fontSize: FontSize.button_size
  },
  loremIpsum: {
    alignSelf: 'stretch',
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    width: 360,
    backgroundColor: Color.wHITESPORTSMATCH
  },
  botoFinal: {
    marginTop: 25,
    flexDirection: 'row'
  },
  frameParent: {
    top: 60,
    left: '50%',
    position: 'absolute'
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    borderColor: Color.wHITESPORTSMATCH,
    top: 0,
    borderStyle: 'solid'
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: 'absolute'
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
    right: 0,
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
    top: 7,
    width: 68,
    right: 0
  },
  time: {
    marginTop: -9.55,
    left: 4,
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.openSansSemiBold,
    top: '50%',
    fontWeight: '600',
    textAlign: 'center',
    color: Color.wHITESPORTSMATCH,
    width: 61
  },
  starus: {
    height: 24,
    left: 0,
    top: 0
  },
  iphone: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: 'absolute'
  },
  miSuscripcin: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    paddingHorizontal: 15,
    // height: 1293,
    // overflow: 'hidden',
    width: '100%'
  }
})

export default MiSuscripcin
