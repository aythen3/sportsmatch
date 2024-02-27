import React from "react";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Paso1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.paso6}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require("../assets/imagen-de-fondo3.png")}
      />
      <View style={styles.contenido}>
        <View style={styles.headerSteps}>
          <Pressable style={styles.botonAtras}>
            <Image
              style={styles.coolicon}
              contentFit="cover"
              source={require("../assets/coolicon1.png")}
            />
            <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
          </Pressable>
          <View style={styles.stepseccion}>
            <View>
              <Text style={[styles.paso1, styles.atrsTypo]}>Paso 1</Text>
              <Text style={[styles.escogeTuRol, styles.jugadorTypo1]}>
                Escoge tu rol
              </Text>
            </View>
            <View style={styles.linias}>
              <View style={styles.liniaLayout2} />
              <View style={styles.liniaLayout1} />
              <View style={styles.liniaLayout1} />
              <View style={styles.liniaLayout1} />
            </View>
          </View>
        </View>
        <View style={styles.botonesRoles}>
          <View style={styles.botonLayout1}>
            <View style={styles.rectangulo}>
              <Text style={[styles.jugador, styles.jugadorTypo]}>Jugador</Text>
              <Image
                style={styles.simboloIconLayout}
                contentFit="cover"
                source={require("../assets/simbolo6.png")}
              />
            </View>
          </View>
          <View style={styles.botonLayout1}>
            <View style={styles.rectangulo}>
              <Text style={[styles.jugador, styles.jugadorTypo]}>
                Profesional del deporte
              </Text>
              <Image
                style={styles.simboloIconLayout}
                contentFit="cover"
                source={require("../assets/simbolo7.png")}
              />
            </View>
          </View>
          <Pressable
            style={styles.siguiente}
            onPress={() => navigation.navigate("Paso2Jugador")}
          >
            <Text style={styles.siguiente1}>Siguiente</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
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
    width: "20%",
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
  },
  liniaLayout2: {
    height: 3,
    width: "20%",
    borderTopWidth: 3,
    top: -1,
    borderColor: Color.bALONCESTO,
    borderStyle: "solid",
  },
  liniaLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    borderStyle: "solid",
    top: -1,
  },
  jugadorTypo: {
    fontSize: FontSize.button_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    top: "35%",
  },
  simboloIconLayout: {
    height: "43.71%",
    width: "8.53%",
    left: "5%",
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
  },
  batteryPosition: {
    right: 0,
  },
  borderPosition: {
    top: 0,
    height: 12,
  },
  timeLayout: {
    width: 61,
  },
  imagenDeFondo: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 0,
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
    right: "10%",
    marginBottom: "5%",
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
    gap: 20,
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
    height: "100%",
    borderStyle: "solid",
  },
  jugador: {
    lineHeight: 20,
    color: Color.wHITESPORTSMATCH,
    fontWeight: "500",
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
    marginTop: 170,
    gap: 30,
  },
  siguiente1: {
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    fontSize: FontSize.button_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  siguiente: {
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    borderRadius: Border.br_81xl,
    marginTop: "25%",
  },
  botonSiguiente: {
    // marginTop: 50,
    // flexDirection: "row",
  },
  contenido: {
    top: 77,
    alignItems: "center",
    left: 0,
    height: "130%",
  },
  paso6: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Paso1;
