import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";

const PerfilDatosVisualitzaciMa = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.perfilDatosVisualitzaciMa, styles.imagenIconFlexBox]}>
      <View style={styles.contenidoPerfil}>
        <View style={styles.bloquePerfil}>
          <View style={styles.imagenInformacion}>
            <View style={styles.imagenInformacion1}>
              <Image
                style={[styles.imagenIcon, styles.imagenIconFlexBox]}
                contentFit="cover"
                source={require("../assets/imagen1.png")}
              />
              <View style={styles.informacion}>
                <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
                  <Pressable
                    style={styles.miSuscripcinPosition}
                    onPress={() => navigation.goBack()}
                  >
                    <Text
                      style={[
                        styles.jordiEspeltPvotBaloncesto,
                        styles.editarPerfilTypo,
                      ]}
                    >{`Jordi Espelt
Pívot
Baloncesto`}</Text>
                  </Pressable>
                </View>
                <Text
                  style={[styles.jugandoAlUni, styles.conceptoTypo]}
                >{`Jugando al Unió Esportíva 
de Mataró desde el 2021`}</Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.botonesPerfilSubscripcion, styles.perfilFlexBox]}
          >
            <View style={styles.perfilFlexBox}>
              <View
                style={[styles.botonEditarPerfilChild, styles.botonLayout]}
              />
              <Text style={[styles.editarPerfil, styles.timeTypo]}>
                Editar perfil
              </Text>
            </View>
            <View style={styles.botonMiSuscripcion}>
              <View style={styles.botonParent}>
                <View style={[styles.boton, styles.botonLayout]} />
                <View style={[styles.grupoTexto, styles.grupoTextoPosition]}>
                  <Text style={[styles.miSuscripcin, styles.timeTypo]}>
                    Mi suscripción
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bloqueNumeroSeguidores}>
            <View>
              <Text style={[styles.seguidores, styles.ataqueLayout]}>
                Seguidores
              </Text>
              <Text style={[styles.text, styles.textTypo]}>24</Text>
            </View>
          </View>
        </View>
        <View style={styles.pestaacontenidoDatos}>
          <View style={styles.pestaasSubmenuBarraSelec}>
            <View style={[styles.barraSelectora, styles.borderBorder]} />
            <View style={styles.pestaasSubmenu}>
              <View style={styles.simboloFeed}>
                <View style={[styles.simboloFeedChild, styles.simboloLayout]} />
                <View style={[styles.simboloFeedItem, styles.simboloLayout]} />
                <View
                  style={[styles.simboloFeedInner, styles.rectangleViewLayout]}
                />
                <View
                  style={[styles.rectangleView, styles.rectangleViewLayout]}
                />
              </View>
              <Pressable
                style={styles.simboloDatos}
                onPress={() => navigation.navigate("PerfilDatosVisualitzaciMa")}
              >
                <Image
                  style={styles.iconLayout}
                  contentFit="cover"
                  source={require("../assets/simbolo-datos.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.contenidoDatos}>
            <View style={styles.circulos}>
              <View style={styles.circuloLayout}>
                <Image
                  style={[styles.circuloIcon, styles.circuloLayout]}
                  contentFit="cover"
                  source={require("../assets/circulo4.png")}
                />
                <View
                  style={[styles.informacionCirculo, styles.grupoTextoPosition]}
                >
                  <Text style={[styles.text1, styles.text1Typo]}>80</Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>Ataque</Text>
                </View>
              </View>
              <View style={[styles.circulo2, styles.circuloLayout]}>
                <Image
                  style={[styles.circuloIcon, styles.circuloLayout]}
                  contentFit="cover"
                  source={require("../assets/circulo5.png")}
                />
                <View
                  style={[styles.informacionCirculo, styles.grupoTextoPosition]}
                >
                  <Text style={[styles.text1, styles.text1Typo]}>60</Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>Defensa</Text>
                </View>
              </View>
              <View style={[styles.circulo2, styles.circuloLayout]}>
                <Image
                  style={[styles.circuloIcon, styles.circuloLayout]}
                  contentFit="cover"
                  source={require("../assets/circulo6.png")}
                />
                <View
                  style={[styles.informacionCirculo, styles.grupoTextoPosition]}
                >
                  <Text style={[styles.text1, styles.text1Typo]}>90</Text>
                  <Text style={[styles.ataque, styles.ataqueClr]}>
                    Velocidad
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.barras}>
              <View style={styles.barra1}>
                <View>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Bote</Text>
                  <Image
                    style={styles.barraCompletaIcon}
                    contentFit="cover"
                    source={require("../assets/barra-completa.png")}
                  />
                </View>
                <Text style={[styles.numero, styles.numeroTypo]}>80</Text>
              </View>
              <View style={styles.barra2}>
                <View>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Lanzamiento
                  </Text>
                  <Image
                    style={styles.barraCompletaIcon}
                    contentFit="cover"
                    source={require("../assets/barra-completa1.png")}
                  />
                </View>
                <Text style={[styles.numero1, styles.numeroTypo]}>15</Text>
              </View>
              <View style={styles.barra2}>
                <View>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Dribling
                  </Text>
                  <Image
                    style={styles.barraCompletaIcon}
                    contentFit="cover"
                    source={require("../assets/barra-completa2.png")}
                  />
                </View>
                <Text style={[styles.numero, styles.numeroTypo]}>50</Text>
              </View>
            </View>
            <View style={styles.barras}>
              <View style={styles.circulos}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Sexo</Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Masculino
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>Edad</Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>24</Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Categoría
                  </Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Sénior
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Posición principal
                  </Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Pívot
                  </Text>
                </View>
              </View>
              <View style={styles.modulosMedio}>
                <View style={styles.moduloSpaceBlock}>
                  <Text style={[styles.concepto, styles.ataqueClr]}>
                    Altura
                  </Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    190cm
                  </Text>
                </View>
                <View style={[styles.modulo2, styles.moduloSpaceBlock]}>
                  <Text
                    style={[styles.concepto, styles.ataqueClr]}
                  >{`Lugar de residencia `}</Text>
                  <Text style={[styles.masculino, styles.text1Typo]}>
                    Mataró
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.masDetalles}>
              <Text style={[styles.msDetallesSobre, styles.ataqueClr]}>
                Más detalles sobre mí
              </Text>
              <Text style={[styles.apasionadoLderCompettvo, styles.ataqueClr]}>
                Apasionado líder competítívo. Mi carrera en baloncesto refleja
                dedicación, habilidades excepcionales y la capacidad de motívar
                al equipo hacia el éxito. Me dedico a ello desde que tengo 6
                años y llevo toda la vida en el mismo club, el CF Mataró.
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imagenPosition}>
        <View style={styles.perfilFlexBox}>
          <Image
            style={styles.imagenPosition}
            contentFit="cover"
            source={require("../assets/hannahredingkqyboqrw5wunsplash-12.png")}
          />
          <LinearGradient
            style={[styles.imagenOpacidadChild, styles.imagenPosition]}
            locations={[0, 1]}
            colors={["#000", "rgba(0, 0, 0, 0)"]}
          />
        </View>
      </View>
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
            source={require("../assets/cellular-connection2.png")}
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
  imagenIconFlexBox: {
    overflow: "hidden",
    flex: 1,
  },
  editarPerfilTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  conceptoTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: "left",
  },
  perfilFlexBox: {
    alignSelf: "stretch",
    flex: 1,
  },
  botonLayout: {
    borderRadius: Border.br_81xl,
    height: 35,
  },
  timeTypo: {
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
  },
  grupoTextoPosition: {
    zIndex: 1,
    position: "absolute",
  },
  ataqueLayout: {
    width: 109,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
  },
  textTypo: {
    fontWeight: "500",
    textAlign: "left",
  },
  borderBorder: {
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
  },
  simboloLayout: {
    height: 9,
    width: 9,
    borderWidth: 2,
    borderRadius: Border.br_11xs,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  rectangleViewLayout: {
    top: 11,
    height: 9,
    width: 9,
    borderWidth: 2,
    borderRadius: Border.br_11xs,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    position: "absolute",
  },
  circuloLayout: {
    height: 110,
    width: 110,
  },
  text1Typo: {
    color: Color.bALONCESTO,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  ataqueClr: {
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  numeroTypo: {
    textAlign: "right",
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  moduloSpaceBlock: {
    paddingVertical: Padding.p_7xs,
    paddingHorizontal: 0,
    height: 80,
    backgroundColor: Color.bLACK2SPORTMATCH,
    borderRadius: Border.br_8xs,
    alignItems: "center",
    overflow: "hidden",
  },
  imagenPosition: {
    height: 150,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 12,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  imagenIcon: {
    maxWidth: "100%",
    height: 113,
  },
  jordiEspeltPvotBaloncesto: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    height: "100%",
    width: "100%",
  },
  miSuscripcinPosition: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  jordiEspeltPvotBaloncestoWrapper: {
    width: 144,
    height: 60,
  },
  jugandoAlUni: {
    width: 235,
    marginTop: 2,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  informacion: {
    marginLeft: 15,
  },
  imagenInformacion1: {
    width: 359,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  imagenInformacion: {
    alignItems: "center",
  },
  botonEditarPerfilChild: {
    backgroundColor: Color.colorDimgray_100,
    width: 176,
    height: 35,
    left: 0,
    top: 0,
    position: "absolute",
  },
  editarPerfil: {
    width: "49.72%",
    left: "25.45%",
    textAlign: "center",
    top: "25.71%",
    height: "48.57%",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    position: "absolute",
  },
  boton: {
    zIndex: 0,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 173,
    height: 35,
  },
  miSuscripcin: {
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    top: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  grupoTexto: {
    right: "0%",
    bottom: "25.71%",
    top: "25.71%",
    height: "48.57%",
    left: "0%",
    zIndex: 1,
    width: "100%",
  },
  botonParent: {
    marginTop: -17.5,
    marginLeft: -86.5,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  botonMiSuscripcion: {
    marginLeft: 10,
    width: 173,
    height: 35,
  },
  botonesPerfilSubscripcion: {
    marginTop: 15,
    flexDirection: "row",
  },
  seguidores: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  text: {
    width: 102,
    marginTop: 3,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  bloqueNumeroSeguidores: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_8xs,
    marginTop: 15,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  bloquePerfil: {
    height: 227,
    alignItems: "flex-end",
  },
  barraSelectora: {
    top: 29,
    left: 115,
    borderTopWidth: 2,
    width: 175,
    height: 2,
    position: "absolute",
  },
  simboloFeedChild: {
    left: 0,
  },
  simboloFeedItem: {
    left: 11,
  },
  simboloFeedInner: {
    left: 0,
  },
  rectangleView: {
    left: 11,
  },
  simboloFeed: {
    height: 20,
    flex: 1,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  simboloDatos: {
    width: 24,
    height: 14,
    marginLeft: 165,
  },
  pestaasSubmenu: {
    width: 209,
    left: 0,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  pestaasSubmenuBarraSelec: {
    width: 289,
    height: 30,
  },
  circuloIcon: {
    zIndex: 0,
  },
  text1: {
    lineHeight: 40,
    fontSize: FontSize.h2TITLEBIG_size,
    alignSelf: "stretch",
    flex: 1,
  },
  ataque: {
    marginTop: 9,
    width: 109,
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: "center",
  },
  informacionCirculo: {
    top: 32,
    left: 1,
    height: 63,
  },
  circulo2: {
    marginLeft: 15,
  },
  circulos: {
    flexDirection: "row",
  },
  concepto: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: "left",
  },
  barraCompletaIcon: {
    width: 298,
    height: 15,
    marginTop: 4,
  },
  numero: {
    marginLeft: 42,
  },
  barra1: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  numero1: {
    marginLeft: 47,
  },
  barra2: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  barras: {
    marginTop: 30,
  },
  masculino: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    width: 173,
  },
  modulo2: {
    marginLeft: 16,
  },
  modulosMedio: {
    marginTop: 15,
    flexDirection: "row",
  },
  msDetallesSobre: {
    lineHeight: 30,
    height: 25,
    fontSize: FontSize.h2TITLEBIG_size,
    alignSelf: "stretch",
    fontWeight: "500",
    textAlign: "left",
  },
  apasionadoLderCompettvo: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    marginTop: 15,
    alignSelf: "stretch",
    flex: 1,
    textAlign: "left",
  },
  masDetalles: {
    width: 367,
    height: 130,
    marginTop: 30,
  },
  contenidoDatos: {
    marginTop: 21,
  },
  pestaacontenidoDatos: {
    marginTop: 25,
    alignItems: "flex-end",
  },
  contenidoPerfil: {
    top: 141,
    left: 14,
    position: "absolute",
  },
  imagenOpacidadChild: {
    opacity: 0.5,
    backgroundColor: Color.promocio,
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
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    height: 24,
    left: 0,
    top: 0,
  },
  uxIphone: {
    top: 10,
    right: 15,
    width: 360,
    height: 24,
    position: "absolute",
  },
  perfilDatosVisualitzaciMa: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 1211,
    width: "100%",
  },
});

export default PerfilDatosVisualitzaciMa;
