import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const PerfilFeedVisualitzaciJug = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.perfilFeedVisualitzaciJug}>
      <View style={styles.contenidoPerfil}>
        <View style={styles.bloquePerfil}>
          <View style={styles.imagenInformacionBotones}>
            <View style={styles.imagenInformacion}>
              <Image
                style={styles.imagenIcon}
                contentFit="cover"
                source={require("../assets/imagen3.png")}
              />
              <View style={styles.informacion}>
                <View style={styles.jordiEspeltPvotBaloncestoWrapper}>
                  <Pressable
                    style={styles.jordiEspeltPvotContainer}
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
            <View style={styles.botonSeguirBotonMensaje}>
              <View style={styles.botonLayout}>
                <View style={[styles.botonSeguirChild, styles.botonLayout]} />
                <Text style={[styles.seguir, styles.timeTypo]}>Seguir</Text>
                <Image
                  style={styles.simboloGrupoIcon}
                  contentFit="cover"
                  source={require("../assets/simbolo-grupo.png")}
                />
              </View>
              <View style={styles.botonMensaje}>
                <View style={[styles.botonSeguirChild, styles.botonLayout]} />
                <Text style={[styles.mensaje, styles.timeTypo]}>Mensaje</Text>
              </View>
            </View>
          </View>
          <View style={styles.bloqueNumeroSeguidores}>
            <Text style={[styles.seguidores, styles.seguidoresTypo]}>
              Seguidores
            </Text>
            <Text style={[styles.text, styles.textTypo]}>24</Text>
          </View>
        </View>
        <View style={styles.feddImagenesPestaasSubme}>
          <View style={styles.pestaasBarraSelectora}>
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
                onPress={() => navigation.navigate("PerfilFeedVisualitzaciJug")}
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
        <View style={styles.imagenOpacidad}>
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
  botonLayout: {
    height: 35,
    width: 173,
  },
  timeTypo: {
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
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
    maxWidth: "100%",
    alignSelf: "stretch",
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
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    height: "100%",
    width: "100%",
  },
  jordiEspeltPvotContainer: {
    left: "0%",
    top: "0%",
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
  imagenInformacion: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
  botonSeguirChild: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
    position: "absolute",
  },
  seguir: {
    width: "27.75%",
    left: "41.04%",
    top: "25.71%",
    height: "48.57%",
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    position: "absolute",
  },
  simboloGrupoIcon: {
    top: 8,
    left: 51,
    width: 14,
    height: 18,
    position: "absolute",
  },
  mensaje: {
    width: "35.84%",
    left: "32.37%",
    top: "25.71%",
    height: "48.57%",
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    position: "absolute",
  },
  botonMensaje: {
    marginLeft: 14,
    alignSelf: "stretch",
    flex: 1,
  },
  botonSeguirBotonMensaje: {
    marginTop: 10,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  imagenInformacionBotones: {
    height: 158,
    alignItems: "center",
    width: 360,
  },
  seguidores: {
    width: 109,
  },
  text: {
    fontSize: FontSize.h3TitleMEDIUM_size,
    lineHeight: 22,
    fontWeight: "500",
    width: 102,
    marginTop: 10,
  },
  bloqueNumeroSeguidores: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_8xs,
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
  pestaasBarraSelectora: {
    width: 287,
    height: 30,
  },
  imagen1Icon: {
    borderBottomRightRadius: Border.br_10xs,
    borderBottomLeftRadius: Border.br_10xs,
    zIndex: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    alignSelf: "stretch",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
  pinGrupoIcon: {
    top: 3,
    left: 96,
    zIndex: 1,
    height: 18,
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
    width: 359,
    marginTop: 2,
  },
  gridFeed: {
    marginTop: 7,
  },
  feddImagenesPestaasSubme: {
    marginTop: 25,
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
  imagenOpacidad: {
    alignSelf: "stretch",
    flex: 1,
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
    backgroundColor: Color.wHITESPORTSMATCH,
    height: 7,
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
    top: "50%",
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
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
    height: 24,
    width: 360,
    position: "absolute",
  },
  perfilFeedVisualitzaciJug: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default PerfilFeedVisualitzaciJug;
