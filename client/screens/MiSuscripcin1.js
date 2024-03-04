import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const MiSuscripcin1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.miSuscripcin}>
      <View style={styles.contenido}>
        <View style={styles.header}>
          <View style={styles.cooliconParent}>
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
        <View style={styles.textoTargetaPlanActual}>
          <View>
            <Text style={[styles.esteEsTu, styles.silverFlexBox]}>
              Este es tu plan actual
            </Text>
          </View>
          <View style={styles.targetaPlanActualSilver}>
            <View style={styles.targetaSpaceBlock}>
              <View>
                <Image
                  style={styles.colorDeFondo}
                  contentFit="cover"
                  source={require("../assets/rectangle-259.png")}
                />
                <Text style={[styles.silver, styles.silverTypo]}>SILVER</Text>
              </View>
              <View style={styles.contenidoTitularbeneficios}>
                <View style={styles.titularbeneficios}>
                  <View style={styles.titular}>
                    <Text style={[styles.gratuito, styles.timeTypo]}>{`Gratuito
`}</Text>
                  </View>
                  <View style={styles.beneficios}>
                    <View style={styles.beneficio1}>
                      <Image
                        style={styles.beneficio1Child}
                        contentFit="cover"
                        source={require("../assets/vector-27.png")}
                      />
                      <Text
                        style={[
                          styles.creacinGratisDel,
                          styles.creacinGratisDelLayout,
                        ]}
                      >
                        Creación gratis del perfil del club
                      </Text>
                    </View>
                    <View style={styles.beneficiosChild} />
                    <View style={styles.beneficio2}>
                      <Image
                        style={styles.beneficio1Child}
                        contentFit="cover"
                        source={require("../assets/vector-27.png")}
                      />
                      <Text
                        style={[
                          styles.creacinGratisDel,
                          styles.creacinGratisDelLayout,
                        ]}
                      >
                        Acceso al buscador de jugadores/as y profesionales del
                        deporte 
                      </Text>
                    </View>
                    <View style={styles.beneficiosChild} />
                    <View style={styles.beneficio2}>
                      <Image
                        style={styles.beneficio1Child}
                        contentFit="cover"
                        source={require("../assets/vector-27.png")}
                      />
                      <Text
                        style={[
                          styles.creacinGratisDel,
                          styles.creacinGratisDelLayout,
                        ]}
                      >
                        Número ilimitado de Match 
                      </Text>
                    </View>
                    <View style={styles.beneficiosChild} />
                    <View style={styles.beneficio2}>
                      <Image
                        style={styles.beneficio1Child}
                        contentFit="cover"
                        source={require("../assets/vector-27.png")}
                      />
                      <Text
                        style={[
                          styles.creacinGratisDel,
                          styles.creacinGratisDelLayout,
                        ]}
                      >
                        Publicación gratis e ilimitada de anuncios de ofertas
                        deportivas 
                      </Text>
                    </View>
                    <View style={styles.beneficiosChild} />
                    <View style={styles.beneficio2}>
                      <Image
                        style={styles.beneficio1Child}
                        contentFit="cover"
                        source={require("../assets/vector-27.png")}
                      />
                      <Text style={styles.creacinGratisDelLayout}>
                        <Text
                          style={styles.accesoLimitadoA}
                        >{`Acceso limitado a las personas inscritas en tu oferta: `}</Text>
                        <Text style={styles.silverTypo}>3 perfiles </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.beneficios}>
              <Text style={[styles.esteEsTu, styles.silverFlexBox]}>
                Otros planes
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.targetaPlanGold, styles.targetaSpaceBlock]}>
          <View>
            <Image
              style={styles.colorDeFondo}
              contentFit="cover"
              source={require("../assets/pro.png")}
            />
            <Text style={[styles.silver, styles.silverTypo]}>{`GOLD
`}</Text>
          </View>
          <View style={styles.contenidoTitularbeneficios}>
            <View style={styles.titularbeneficios}>
              <View>
                <View style={styles.textoTitular}>
                  <Text style={[styles.pagoNico, styles.timeTypo]}>
                    <Text style={styles.text}>{`125€
`}</Text>
                    <Text style={styles.pagoNico1}>Pago único</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.beneficios}>
                <View style={styles.beneficio1}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Creación gratis del perfil del club
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-27.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Acceso al buscador de jugadores/as y profesionales del
                    deporte 
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Número ilimitado de Match 
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Publicación gratis e ilimitada de anuncios de ofertas
                    deportivas 
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text style={styles.creacinGratisDelLayout}>
                    <Text
                      style={styles.accesoLimitadoA}
                    >{`Acceso limitado a las personas inscritas en tu oferta: `}</Text>
                    <Text style={styles.silverTypo}>30 perfiles</Text>
                    <Text style={styles.accesoLimitadoA}> </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.botonSeleccionarEstePlan}>
              <Pressable
                style={[styles.seleccionarEstePlan, styles.destacadoLayout]}
                onPress={() => navigation.navigate("ChatAbierto")}
              >
                <Text style={[styles.seleccionarEstePlan1, styles.aceptarTypo]}>
                  Seleccionar este plan
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={[styles.targetaPlanGold, styles.targetaSpaceBlock]}>
          <View>
            <Image
              style={styles.colorDeFondo}
              contentFit="cover"
              source={require("../assets/color-de-fondo.png")}
            />
            <Text style={[styles.silver, styles.silverTypo]}>{`STAR
`}</Text>
          </View>
          <View style={styles.contenidoTitularbeneficios}>
            <View style={styles.titularbeneficios}>
              <View>
                <View style={styles.textoTitular}>
                  <Text style={[styles.pagoNico, styles.timeTypo]}>
                    <Text style={styles.text}>126€</Text>
                    <Text style={styles.mes}>{`/mes 
`}</Text>
                    <Text style={styles.pagoNico1}>
                      o también 1.650,20€/año
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.beneficios}>
                <View style={styles.beneficio1}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Creación gratis del perfil del club
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Acceso al buscador de jugadores/as y profesionales del
                    deporte 
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Número ilimitado de Match 
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text
                    style={[
                      styles.creacinGratisDel,
                      styles.creacinGratisDelLayout,
                    ]}
                  >
                    Publicación gratis e ilimitada de anuncios de ofertas
                    deportivas 
                  </Text>
                </View>
                <View style={styles.beneficiosChild} />
                <View style={styles.beneficio2}>
                  <Image
                    style={styles.beneficio1Child}
                    contentFit="cover"
                    source={require("../assets/vector-271.png")}
                  />
                  <Text style={styles.creacinGratisDelLayout}>
                    <Text style={styles.accesoLimitadoA}>Acceso</Text>
                    <Text style={styles.silverTypo}> ilimitado</Text>
                    <Text style={styles.accesoLimitadoA}>
                      {" "}
                      a las personas inscritas en tu oferta 
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.botonSeleccionarEstePlan}>
              <Pressable
                style={[styles.seleccionarEstePlan, styles.destacadoLayout]}
                onPress={() => navigation.navigate("ChatAbierto")}
              >
                <Text style={[styles.seleccionarEstePlan1, styles.aceptarTypo]}>
                  Seleccionar este plan
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.loremIpsum}>
          <View style={[styles.loremIpsum1, styles.loremIpsum1FlexBox]}>
            <Text style={[styles.aceptar, styles.aceptarTypo]}>
              Realizar cambios
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.destacado, styles.borderBorder]} />
      <View style={styles.uxIphone}>
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
            source={require("../assets/cellular-connection3.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  silverFlexBox: {
    textAlign: "center",
    width: 358,
    color: Color.wHITESPORTSMATCH,
  },
  silverTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  timeTypo: {
    fontWeight: "600",
    textAlign: "center",
  },
  creacinGratisDelLayout: {
    marginLeft: 5,
    width: 260,
    lineHeight: 16,
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
  },
  targetaSpaceBlock: {
    paddingBottom: Padding.p_11xl,
    borderRadius: Border.br_mini,
    backgroundColor: Color.wHITESPORTSMATCH,
    alignItems: "center",
    overflow: "hidden",
  },
  destacadoLayout: {
    borderWidth: 1,
    position: "absolute",
  },
  aceptarTypo: {
    color: Color.bLACK1SPORTSMATCH,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loremIpsum1FlexBox: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  borderBorder: {
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
  },
  groupLayout: {
    height: 12,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  miSuscripcin2: {
    fontWeight: "500",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
  },
  miSuscripcin1: {
    marginLeft: 9,
  },
  cooliconParent: {
    alignItems: "center",
    flexDirection: "row",
    left: 0,
    top: 0,
    position: "absolute",
  },
  header: {
    width: 163,
    height: 22,
  },
  esteEsTu: {
    lineHeight: 14,
    width: 358,
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  colorDeFondo: {
    height: 50,
    zIndex: 0,
    width: 358,
  },
  silver: {
    top: 16,
    height: 19,
    zIndex: 1,
    width: 358,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    left: 0,
    position: "absolute",
  },
  gratuito: {
    fontSize: FontSize.size_21xl,
    width: 358,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
  },
  titular: {
    height: 22,
  },
  beneficio1Child: {
    width: 10,
    height: 7,
  },
  creacinGratisDel: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  beneficio1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  beneficiosChild: {
    borderColor: Color.gREY2SPORTSMATCH,
    borderTopWidth: 1,
    width: 305,
    height: 1,
    marginTop: 10,
    borderStyle: "solid",
  },
  beneficio2: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  accesoLimitadoA: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  beneficios: {
    marginTop: 30,
  },
  titularbeneficios: {
    alignItems: "center",
  },
  contenidoTitularbeneficios: {
    marginTop: 30,
    alignItems: "center",
  },
  targetaPlanActualSilver: {
    marginTop: 40,
  },
  textoTargetaPlanActual: {
    marginTop: 25,
    justifyContent: "center",
  },
  text: {
    fontSize: FontSize.size_21xl,
  },
  pagoNico1: {
    color: Color.colorDimgray_100,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  pagoNico: {
    width: 358,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 22,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textoTitular: {
    height: 47,
    width: 358,
  },
  seleccionarEstePlan1: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.bLACK1SPORTSMATCH,
  },
  seleccionarEstePlan: {
    marginTop: -13.5,
    right: "0%",
    left: "0%",
    borderColor: Color.bLACK1SPORTSMATCH,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    borderStyle: "solid",
    width: "100%",
  },
  botonSeleccionarEstePlan: {
    width: 328,
    height: 27,
    marginTop: 30,
  },
  targetaPlanGold: {
    opacity: 0.5,
    marginTop: 25,
  },
  mes: {
    fontSize: FontSize.h3TitleMEDIUM_size,
  },
  aceptar: {
    fontSize: FontSize.button_size,
  },
  loremIpsum1: {
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    width: 360,
    backgroundColor: Color.wHITESPORTSMATCH,
  },
  loremIpsum: {
    marginTop: 25,
    flexDirection: "row",
  },
  contenido: {
    marginLeft: -180,
    top: 60,
    left: "50%",
    position: "absolute",
  },
  destacado: {
    marginLeft: -185,
    top: 157,
    borderRadius: Border.br_xl,
    width: 368,
    height: 379,
    borderWidth: 1,
    position: "absolute",
    left: "50%",
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    top: 0,
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
    right: 0,
    position: "absolute",
  },
  capacity: {
    top: 2,
    right: 4,
    borderRadius: 2,
    width: 18,
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    position: "absolute",
  },
  battery: {
    width: 25,
    right: 0,
    top: 0,
  },
  wifiIcon: {
    width: 16,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  group: {
    top: 7,
    width: 68,
    right: 0,
  },
  time: {
    marginTop: -9.55,
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.openSansSemiBold,
    top: "50%",
    fontSize: FontSize.t2TextSTANDARD_size,
    fontWeight: "600",
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    width: 61,
  },
  starus: {
    height: 24,
    left: 0,
    top: 0,
  },
  uxIphone: {
    top: 10,
    right: 15,
    height: 24,
    width: 360,
    position: "absolute",
  },
  miSuscripcin: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    flex: 1,
    height: 1671,
    overflow: "hidden",
    width: "100%",
  },
});

export default MiSuscripcin1;
