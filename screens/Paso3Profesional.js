import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Paso3Profesional = () => {
  return (
    <View style={styles.paso3Profesional}>
      <Image
        style={styles.paso3ProfesionalChild}
        contentFit="cover"
        source={require("../assets/group-2411.png")}
      />
      <View style={styles.atrsParent}>
        <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
        <Image
          style={[styles.coolicon, styles.cooliconLayout]}
          contentFit="cover"
          source={require("../assets/coolicon.png")}
        />
      </View>
      <Text style={[styles.aosEnActvo, styles.aosEnActvoTypo]}>
        Años en actívo
      </Text>
      <View style={[styles.parent, styles.parentGroupLayout]}>
        <Text style={[styles.text, styles.textTypo]}>2000</Text>
        <View style={[styles.groupChild, styles.groupBorder]} />
      </View>
      <Text style={[styles.tpoDeProfesional, styles.aosEnActvoTypo]}>
        típo de profesional
      </Text>
      <Text
        style={[styles.lugarDeResidencia, styles.aosEnActvoTypo]}
      >{`Lugar de residencia `}</Text>
      <Text style={[styles.clubActual, styles.aosEnActvoTypo]}>
        Club actual
      </Text>
      <View
        style={[styles.rellenaSloSiEstsEnAlgnParent, styles.parentGroupLayout]}
      >
        <Text style={[styles.text, styles.textTypo]}>
          Rellena sólo si estás en algún club 
        </Text>
        <View style={[styles.groupChild, styles.groupBorder]} />
      </View>
      <Text
        style={[styles.comoTeDefines, styles.aosEnActvoTypo]}
      >{`Como te defines como profesional `}</Text>
      <View
        style={[styles.describeTuJuegoTuCondiciParent, styles.groupInnerLayout]}
      >
        <Text
          style={[styles.describeTuJuego, styles.textTypo]}
        >{`Describe tu juego, tu condición física, 
tu personalidad en el campo...`}</Text>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
      </View>
      <Text style={styles.unosDetallesSobre}>Unos detalles sobre tí</Text>
      <Text style={[styles.paso3, styles.paso3Position]}>Paso 3</Text>
      <View style={[styles.paso3ProfesionalItem, styles.paso3Layout]} />
      <View style={[styles.paso3ProfesionalInner, styles.lineViewLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.paso3ProfesionalChild1, styles.paso3Layout]} />
      <View style={[styles.loremIpsum, styles.lineIconPosition]}>
        <View style={[styles.loremIpsum1, styles.groupChildLayout]}>
          <Text style={[styles.aceptar, styles.atrsTypo]}>Siguiente</Text>
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentGroupLayout]}>
        <View style={[styles.barcelonaParent, styles.paso3Position]}>
          <Text style={[styles.text, styles.textTypo]}>Barcelona</Text>
          <View style={[styles.groupChild, styles.groupBorder]} />
        </View>
        <Image
          style={[styles.coolicon1, styles.cooliconLayout]}
          contentFit="cover"
          source={require("../assets/coolicon2.png")}
        />
      </View>
      <View style={[styles.groupContainer, styles.parentGroupLayout]}>
        <View style={[styles.barcelonaParent, styles.paso3Position]}>
          <Text style={[styles.text, styles.textTypo]}>Entrenador</Text>
          <View style={[styles.groupChild, styles.groupBorder]} />
        </View>
        <Image
          style={[styles.coolicon1, styles.cooliconLayout]}
          contentFit="cover"
          source={require("../assets/coolicon2.png")}
        />
      </View>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={styles.groupChild2Position}>
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
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
  atrsTypo: {
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  cooliconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  aosEnActvoTypo: {
    height: 23,
    width: 360,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    left: 15,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: "absolute",
  },
  parentGroupLayout: {
    width: 360,
    height: 40,
  },
  textTypo: {
    textAlign: "left",
    color: Color.gREY2SPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: "absolute",
  },
  groupBorder: {
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  groupInnerLayout: {
    height: 148,
    width: 360,
    position: "absolute",
  },
  paso3Position: {
    left: 0,
    position: "absolute",
  },
  paso3Layout: {
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: 166,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewLayout: {
    width: 81,
    height: 3,
    borderTopWidth: 3,
    top: 166,
    borderStyle: "solid",
    position: "absolute",
  },
  lineIconPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_81xl,
    width: 360,
  },
  groupChild2Position: {
    height: 34,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    position: "absolute",
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  paso3ProfesionalChild: {
    top: -78,
    left: -1821,
    width: 3822,
    height: 996,
    opacity: 0.2,
    position: "absolute",
  },
  atrs: {
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 14,
    top: 0,
    position: "absolute",
  },
  coolicon: {
    height: "83.33%",
    width: "16.92%",
    top: "11.11%",
    right: "83.08%",
    bottom: "5.56%",
    left: "0%",
    maxHeight: "100%",
  },
  atrsParent: {
    top: 77,
    left: 323,
    width: 52,
    height: 18,
    position: "absolute",
  },
  aosEnActvo: {
    top: 270,
  },
  text: {
    left: 20,
    width: 313,
    top: 10,
  },
  groupChild: {
    borderRadius: Border.br_81xl,
    width: 360,
    height: 40,
    position: "absolute",
  },
  parent: {
    top: 293,
    height: 40,
    left: 14,
    position: "absolute",
  },
  tpoDeProfesional: {
    top: 189,
  },
  lugarDeResidencia: {
    top: 361,
  },
  clubActual: {
    top: 454,
  },
  rellenaSloSiEstsEnAlgnParent: {
    top: 477,
    height: 40,
    left: 14,
    position: "absolute",
  },
  comoTeDefines: {
    top: 548,
  },
  describeTuJuego: {
    top: 7,
    left: 12,
    width: 335,
    height: 128,
  },
  groupInner: {
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.gREY2SPORTSMATCH,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  describeTuJuegoTuCondiciParent: {
    top: 571,
    left: 14,
  },
  unosDetallesSobre: {
    top: 113,
    fontSize: FontSize.size_9xl,
    lineHeight: 32,
    fontWeight: "500",
    width: 390,
    left: 0,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  paso3: {
    top: 98,
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  paso3ProfesionalItem: {
    left: 14,
  },
  paso3ProfesionalInner: {
    left: 108,
    borderColor: Color.colorDimgray_100,
    width: 81,
  },
  lineView: {
    left: 202,
    borderColor: Color.bALONCESTO,
  },
  paso3ProfesionalChild1: {
    left: 297,
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  loremIpsum1: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    backgroundColor: Color.wHITESPORTSMATCH,
    flexDirection: "row",
  },
  loremIpsum: {
    marginLeft: -180,
    top: 749,
    flexDirection: "row",
  },
  barcelonaParent: {
    height: 40,
    width: 360,
    top: 0,
  },
  coolicon1: {
    height: "17.5%",
    width: "3.33%",
    top: "45%",
    right: "5%",
    bottom: "37.5%",
    left: "91.67%",
    maxHeight: "100%",
  },
  groupParent: {
    top: 384,
    height: 40,
    left: 14,
    position: "absolute",
  },
  groupContainer: {
    top: 215,
    height: 40,
    left: 14,
    position: "absolute",
  },
  lineIcon: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
  },
  groupChild2: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    height: 34,
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
    width: 61,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    height: 24,
    top: 10,
    width: 61,
    left: 15,
  },
  paso3Profesional: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default Paso3Profesional;
