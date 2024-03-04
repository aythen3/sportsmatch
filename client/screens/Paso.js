import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Padding, Border } from "../GlobalStyles";

const Paso = () => {
  return (
    <View style={styles.paso5}>
      <Image
        style={styles.imagenDeFondo}
        contentFit="cover"
        source={require("../assets/imagen-de-fondo.png")}
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
              <Text style={[styles.paso2, styles.atrsTypo]}>Paso 2</Text>
              <Text style={[styles.escogeTuDeporte, styles.timeClr]}>
                Escoge tu deporte
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
        <View style={[styles.verticales, styles.verticalesSpaceBlock]}>
          <View style={styles.futbol}>
            <Image
              style={[styles.grupoFutbolIcon, styles.grupoLayout]}
              contentFit="cover"
              source={require("../assets/grupo-futbol.png")}
            />
            <Text style={[styles.ftbol, styles.ftbolTypo]}>Fútbol</Text>
          </View>
          <View style={[styles.baloncesto, styles.voleibolSpaceBlock]}>
            <Image
              style={[styles.grupoFutbolIcon, styles.grupoLayout]}
              contentFit="cover"
              source={require("../assets/grupo-baloncesto.png")}
            />
            <Text style={[styles.baloncesto1, styles.ftbolTypo]}>
              Baloncesto
            </Text>
          </View>
          <View style={styles.hockeyLayout}>
            <Image
              style={[styles.grupoFutbolIcon, styles.grupoLayout]}
              contentFit="cover"
              source={require("../assets/grupo-hockey.png")}
            />
            <Text style={[styles.hockey1, styles.ftbolTypo]}>Hockey</Text>
          </View>
          <View style={[styles.futbolSala, styles.hockeyLayout]}>
            <Image
              style={[styles.grupoFutbolIcon, styles.grupoLayout]}
              contentFit="cover"
              source={require("../assets/grupo-futbol-sala.png")}
            />
            <Text style={[styles.baloncesto1, styles.ftbolTypo]}>
              Fútbol sala
            </Text>
          </View>
          <View style={styles.voleibolSpaceBlock}>
            <View style={styles.grupoLayout}>
              <Image
                style={[styles.maskGroupIcon, styles.groupIconLayout]}
                contentFit="cover"
                source={require("../assets/mask-group6.png")}
              />
              <View style={[styles.group, styles.groupPosition]}>
                <Image
                  style={[styles.vectorIcon, styles.groupPosition]}
                  contentFit="cover"
                  source={require("../assets/vector2.png")}
                />
                <Image
                  style={[styles.groupIcon, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
              </View>
            </View>
            <Text style={[styles.ftbol, styles.ftbolTypo]}>Vóleibol</Text>
          </View>
          <View style={[styles.baloncesto, styles.voleibolSpaceBlock]}>
            <Image
              style={styles.grupoBalonmanoIcon}
              contentFit="cover"
              source={require("../assets/grupo-balonmano.png")}
            />
            <Text style={[styles.balonmano1, styles.ftbolTypo]}>Balonmano</Text>
          </View>
        </View>
        <View style={styles.verticalesSpaceBlock}>
          <View style={styles.siguiente}>
            <Text style={[styles.siguiente1, styles.atrsTypo]}>Siguiente</Text>
          </View>
        </View>
      </View>
      <View style={styles.iphonePosition}>
        <View style={[styles.uxIphoneChild, styles.iphonePosition]} />
        <View style={styles.group1}>
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
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  timeClr: {
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
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
  verticalesSpaceBlock: {
    marginTop: 47,
    flexDirection: "row",
  },
  grupoLayout: {
    width: 130,
    flex: 1,
  },
  ftbolTypo: {
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  voleibolSpaceBlock: {
    marginLeft: 15,
    height: 155,
  },
  hockeyLayout: {
    height: 157,
    marginLeft: 15,
  },
  groupIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    left: "0%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
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
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  botonAtras: {
    paddingHorizontal: Padding.p_xl,
    paddingVertical: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  paso2: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
  },
  escogeTuDeporte: {
    alignSelf: "stretch",
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.wHITESPORTSMATCH,
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
  grupoFutbolIcon: {
    maxHeight: "100%",
  },
  ftbol: {
    width: 133,
  },
  futbol: {
    height: 156,
  },
  baloncesto1: {
    width: 137,
  },
  baloncesto: {
    alignItems: "center",
  },
  hockey1: {
    width: 132,
  },
  futbolSala: {
    alignItems: "center",
  },
  maskGroupIcon: {
    height: "98.08%",
    width: "97.7%",
    bottom: "1.92%",
    left: "2.3%",
    right: "0%",
    maxWidth: "100%",
    top: "0%",
    position: "absolute",
  },
  vectorIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    right: "0%",
    width: "100%",
    left: "0%",
    bottom: "0%",
    height: "100%",
  },
  groupIcon: {
    height: "34%",
    width: "34%",
    top: "9.23%",
    right: "56.77%",
    bottom: "56.77%",
    left: "9.23%",
    position: "absolute",
  },
  group: {
    width: "99.62%",
    right: "0.38%",
  },
  grupoBalonmanoIcon: {
    width: 131,
    maxHeight: "100%",
    flex: 1,
  },
  balonmano1: {
    width: 138,
  },
  verticales: {
    width: 287,
    flexWrap: "wrap",
  },
  siguiente1: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
  },
  siguiente: {
    borderRadius: Border.br_81xl,
    width: 360,
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    flexDirection: "row",
    alignItems: "center",
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
    top: 0,
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
  group1: {
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
  paso5: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Paso;
