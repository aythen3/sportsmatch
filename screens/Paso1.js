import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Paso1 = () => {
  return (
    <View style={styles.paso6}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require("../assets/imagen-de-fondo3.png")}
      />
      <View style={styles.contenido}>
        <View style={styles.headerSteps}>
          <View style={styles.botonAtras}>
            <Image
              style={styles.coolicon}
              contentFit="cover"
              source={require("../assets/coolicon1.png")}
            />
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </View>
          <View style={styles.stepseccion}>
            <View>
              <Text style={[styles.paso1, styles.atrsTypo]}>Paso 1</Text>
              <Text style={[styles.escogeTuRol, styles.jugadorTypo1]}>
                Escoge tu rol
              </Text>
            </View>
            <View style={styles.linias}>
              <View style={[styles.linia1, styles.liniaLayout1]} />
              <View style={[styles.linia2, styles.liniaLayout]} />
              <View style={[styles.linia3, styles.liniaLayout]} />
              <View style={[styles.linia44, styles.liniaLayout1]} />
            </View>
          </View>
        </View>
        <View style={styles.botonesRoles}>
          <View style={styles.botonLayout1}>
            <View style={[styles.rectangulo, styles.botonPosition]} />
            <Text style={[styles.jugador, styles.jugadorTypo]}>Jugador</Text>
            <Image
              style={[styles.simboloIcon, styles.simboloIconLayout]}
              contentFit="cover"
              source={require("../assets/simbolo6.png")}
            />
          </View>
          <View
            style={[styles.botonProfesionalDelDeporte, styles.botonLayout1]}
          >
            <Image
              style={[styles.simboloIcon1, styles.simboloIconLayout]}
              contentFit="cover"
              source={require("../assets/simbolo7.png")}
            />
            <View style={[styles.boton, styles.botonPosition]}>
              <View style={[styles.rectangulo, styles.botonPosition]} />
              <Text style={[styles.jugador, styles.jugadorTypo]}>
                Profesional del deporte
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.botonSiguiente}>
          <View style={styles.siguiente}>
            <Text style={[styles.siguiente1, styles.jugadorTypo]}>
              Siguiente
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.iphonePosition}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={styles.capacity} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection1.png")}
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
  atrsTypo: {
    fontFamily: FontFamily.t4TEXTMICRO,
    textAlign: "center",
  },
  jugadorTypo1: {
    fontWeight: "500",
    color: Color.wHITESPORTSMATCH,
  },
  liniaLayout1: {
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  liniaLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    borderStyle: "solid",
    top: -1,
    position: "absolute",
  },
  botonPosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  jugadorTypo: {
    fontSize: FontSize.button_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  simboloIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "43.71%",
    position: "absolute",
    overflow: "hidden",
  },
  botonLayout1: {
    height: 70,
    width: 360,
  },
  iphonePosition: {
    height: 34,
    width: 390,
    top: 0,
    left: 0,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  borderPosition: {
    top: 0,
    height: 12,
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  imagenDeFondo: {
    top: -38,
    left: -229,
    width: 956,
    height: 956,
    opacity: 0.2,
    position: "absolute",
  },
  coolicon: {
    width: 9,
    height: 15,
  },
  atrs: {
    color: Color.gREY2SPORTSMATCH,
    marginLeft: 5,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  paso1: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
    textAlign: "center",
  },
  escogeTuRol: {
    alignSelf: "stretch",
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  linia1: {
    left: -1,
    zIndex: 0,
  },
  linia2: {
    left: 93,
    zIndex: 1,
    borderColor: Color.colorDimgray_100,
    width: 81,
  },
  linia3: {
    left: 187,
    borderColor: Color.bALONCESTO,
    zIndex: 2,
  },
  linia44: {
    left: 282,
    zIndex: 3,
  },
  linias: {
    padding: Padding.p_3xs,
    marginTop: 20,
    flexDirection: "row",
  },
  stepseccion: {
    marginTop: 3,
    alignItems: "center",
  },
  headerSteps: {
    alignItems: "flex-end",
  },
  rectangulo: {
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    borderStyle: "solid",
  },
  jugador: {
    top: "35.71%",
    lineHeight: 20,
    left: "0%",
    position: "absolute",
    width: "100%",
    color: Color.wHITESPORTSMATCH,
    fontWeight: "500",
  },
  simboloIcon: {
    width: "8.53%",
    top: "28.57%",
    right: "85.28%",
    bottom: "27.71%",
    left: "6.19%",
  },
  simboloIcon1: {
    width: "6.47%",
    top: "27.86%",
    right: "86.44%",
    bottom: "28.43%",
    left: "7.08%",
  },
  boton: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
  },
  botonProfesionalDelDeporte: {
    marginTop: 20,
  },
  botonesRoles: {
    marginTop: 211,
  },
  siguiente1: {
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
  },
  siguiente: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    width: 360,
    flexDirection: "row",
    alignItems: "center",
  },
  botonSiguiente: {
    marginTop: 211,
    flexDirection: "row",
  },
  contenido: {
    top: 77,
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  uxIphoneChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34,
    width: 390,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderStyle: "solid",
    position: "absolute",
  },
  capIcon: {
    top: 4,
    width: 1,
    height: 4,
    opacity: 0.4,
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
    height: 12,
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
    top: 17,
    right: 15,
    width: 68,
    height: 12,
    position: "absolute",
  },
  time: {
    marginTop: -9.55,
    top: "50%",
    left: 4,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  paso6: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Paso1;
