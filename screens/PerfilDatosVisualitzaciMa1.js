import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PerfilDatosVisualitzaciMa1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilDatosVisualitzaciMa}>
      <View style={styles.contenidoPerfil}>
        <View style={styles.bloquePerfil}>
          <View style={styles.imagenInformacion}>
            <View style={styles.imagenInformacion1}>
              <Image
                style={styles.imagenIcon}
                contentFit="cover"
                source={require("../assets/imagen2.png")}
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
                        styles.textTypo,
                      ]}
                    >{`Jordi Espelt
Pívot
Baloncesto`}</Text>
                  </Pressable>
                </View>
                <Text
                  style={[styles.jugandoAlUni, styles.seguidoresTypo]}
                >{`Jugando al Unió Esportíva 
de Mataró desde el 2021`}</Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.botonesPerfilSubscripcion,
              styles.bloqueNumeroSeguidoresSpaceBlock,
            ]}
          >
            <View style={styles.botonEditarPerfil}>
              <View style={styles.botonEditarPerfilChild} />
              <Text style={[styles.editarPerfil, styles.timeTypo]}>
                Editar perfil
              </Text>
            </View>
            <View style={styles.botonMiSuscripcion}>
              <View style={styles.botonParent}>
                <View style={styles.boton} />
                <View style={[styles.grupoTexto, styles.grupoTextoPosition]}>
                  <Text style={[styles.miSuscripcin, styles.timeTypo]}>
                    Mi suscripción
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.bloqueNumeroSeguidores,
              styles.bloqueNumeroSeguidoresSpaceBlock,
            ]}
          >
            <View>
              <Text style={[styles.seguidores, styles.seguidoresTypo]}>
                Seguidores
              </Text>
              <Text style={[styles.text, styles.textTypo]}>24</Text>
            </View>
          </View>
        </View>
        <View style={styles.feddImagenespestaasSubmenu}>
          <View style={styles.pestaasbarraSelectora}>
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
                onPress={() =>
                  navigation.navigate("PerfilDatosVisualitzaciMa1")
                }
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/simbolo-datos1.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.gridFeed}>
            <View style={styles.fila1}>
              <View style={[styles.imagen1pin, styles.fila2Layout]}>
                <Image
                  style={styles.imagen1Icon}
                  contentFit="cover"
                  source={require("../assets/imagen-1.png")}
                />
                <Image
                  style={[styles.pinGrupoIcon, styles.capacityLayout]}
                  contentFit="cover"
                  source={require("../assets/pin-grupo.png")}
                />
              </View>
              <View style={[styles.imagen2pin, styles.fila2Layout]}>
                <Image
                  style={styles.imagen1Icon}
                  contentFit="cover"
                  source={require("../assets/imagen-2.png")}
                />
                <Image
                  style={[styles.pinGrupoIcon, styles.capacityLayout]}
                  contentFit="cover"
                  source={require("../assets/pin-grupo1.png")}
                />
              </View>
              <View style={[styles.imagen2pin, styles.fila2Layout]}>
                <Image
                  style={styles.imagen1Icon}
                  contentFit="cover"
                  source={require("../assets/imagen-3.png")}
                />
                <Image
                  style={[styles.pinGrupoIcon, styles.capacityLayout]}
                  contentFit="cover"
                  source={require("../assets/pin-grupo1.png")}
                />
              </View>
            </View>
            <View style={[styles.fila2, styles.fila2Layout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/imagen-4.png")}
              />
              <Image
                style={[styles.imagen5Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/imagen-5.png")}
              />
              <Image
                style={[styles.imagen5Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/imagen-6.png")}
              />
            </View>
            <View style={[styles.fila2, styles.fila2Layout]}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../assets/imagen-7.png")}
              />
              <Image
                style={[styles.imagen5Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/imagen-8.png")}
              />
              <Image
                style={[styles.imagen5Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/imagen-9.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.imagenPosition}>
        <View style={styles.botonEditarPerfil}>
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
            <View style={[styles.capacity, styles.capacityLayout]} />
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
  textTypo: {
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  seguidoresTypo: {
    lineHeight: 14,
    fontSize: FontSize.t4TEXTMICRO_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  bloqueNumeroSeguidoresSpaceBlock: {
    marginTop: 15,
    alignSelf: "stretch",
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  grupoTextoPosition: {
    top: "25.71%",
    height: "48.57%",
    position: "absolute",
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
  fila2Layout: {
    height: 146,
    flexDirection: "row",
  },
  capacityLayout: {
    width: 18,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_10xs,
    maxHeight: "100%",
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
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
    height: 113,
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
  jordiEspeltPvotBaloncesto: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: "700",
    textAlign: "left",
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
  },
  informacion: {
    marginLeft: 15,
  },
  imagenInformacion1: {
    flexDirection: "row",
    width: 359,
    alignItems: "flex-end",
  },
  imagenInformacion: {
    alignItems: "center",
  },
  botonEditarPerfilChild: {
    backgroundColor: Color.colorDimgray_100,
    width: 176,
    height: 35,
    borderRadius: Border.br_81xl,
    left: 0,
    top: 0,
    position: "absolute",
  },
  editarPerfil: {
    width: "49.72%",
    left: "25.45%",
    top: "25.71%",
    height: "48.57%",
    position: "absolute",
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  botonEditarPerfil: {
    alignSelf: "stretch",
    flex: 1,
  },
  boton: {
    zIndex: 0,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 173,
    height: 35,
    borderRadius: Border.br_81xl,
  },
  miSuscripcin: {
    color: Color.bLACK1SPORTSMATCH,
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
    zIndex: 1,
    left: "0%",
    height: "48.57%",
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
    flexDirection: "row",
    flex: 1,
  },
  seguidores: {
    width: 109,
  },
  text: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    width: 102,
    marginTop: 3,
  },
  bloqueNumeroSeguidores: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
    overflow: "hidden",
  },
  bloquePerfil: {
    height: 227,
    alignItems: "flex-end",
  },
  barraSelectora: {
    top: 29,
    left: -1,
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
  icon: {
    height: "100%",
    width: "100%",
  },
  simboloDatos: {
    width: 24,
    height: 14,
    marginLeft: 165,
  },
  pestaasSubmenu: {
    left: 78,
    width: 209,
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  pestaasbarraSelectora: {
    width: 287,
    height: 30,
  },
  imagen1Icon: {
    borderBottomRightRadius: Border.br_10xs,
    borderBottomLeftRadius: Border.br_10xs,
    maxHeight: "100%",
    zIndex: 0,
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  pinGrupoIcon: {
    top: 3,
    left: 96,
    height: 18,
    zIndex: 1,
  },
  imagen1pin: {
    width: 117,
    height: 146,
  },
  imagen2pin: {
    marginLeft: 4,
    width: 117,
    height: 146,
  },
  fila1: {
    flexDirection: "row",
  },
  imagen5Icon: {
    marginLeft: 4,
  },
  fila2: {
    marginTop: 2,
    width: 359,
  },
  gridFeed: {
    marginTop: 7,
  },
  feddImagenespestaasSubmenu: {
    marginTop: 25,
  },
  contenidoPerfil: {
    top: 141,
    left: 14,
    alignItems: "flex-end",
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
    height: 7,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
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
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PerfilDatosVisualitzaciMa1;
