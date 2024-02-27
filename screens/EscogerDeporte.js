import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const EscogerDeporte = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.escogerDeporte}>
      <Image
        style={styles.escogerDeporteChild}
        contentFit="cover"
        source={require("../assets/group-241.png")}
      />
      <Pressable
        style={styles.atrsParent}
        onPress={() => navigation.navigate("LoginSwitch")}
      >
        <Text style={[styles.atrs, styles.atrsTypo]}>Atrás</Text>
        <Image
          style={[styles.coolicon, styles.cooliconLayout]}
          contentFit="cover"
          source={require("../assets/coolicon.png")}
        />
      </Pressable>
      <View style={[styles.loremIpsum, styles.loremIpsumPosition]}>
        <View style={styles.loremIpsum1}>
          <Text style={[styles.aceptar, styles.atrsTypo]}>Siguiente</Text>
        </View>
      </View>
      <View style={styles.frameParent}>
        <View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-389.png")}
          />
          <Text style={[styles.ftbol, styles.ftbolTypo]}>Fútbol</Text>
        </View>
        <View style={styles.instanceGroup}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/group-390.png")}
          />
          <Text style={[styles.baloncesto, styles.ftbolTypo]}>Baloncesto</Text>
        </View>
        <View style={styles.instanceGroup}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/group-391.png")}
          />
          <Text style={[styles.hockey, styles.ftbolTypo]}>Hockey</Text>
        </View>
        <View style={styles.instanceGroup}>
          <Image
            style={styles.frameInner}
            contentFit="cover"
            source={require("../assets/group-395.png")}
          />
          <Text style={[styles.baloncesto, styles.ftbolTypo]}>Fútbol sala</Text>
        </View>
        <View style={styles.instanceGroup}>
          <View style={styles.frameItem}>
            <Image
              style={[styles.maskGroupIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/mask-group5.png")}
            />
            <View style={[styles.group, styles.groupPosition]}>
              <Image
                style={[styles.vectorIcon, styles.groupPosition]}
                contentFit="cover"
                source={require("../assets/vector1.png")}
              />
              <Image
                style={[styles.groupIcon1, styles.cooliconLayout]}
                contentFit="cover"
                source={require("../assets/group2.png")}
              />
            </View>
          </View>
          <Text style={[styles.ftbol, styles.ftbolTypo]}>Vóleibol</Text>
        </View>
        <View style={styles.instanceParent2}>
          <Image
            style={styles.frameChild1}
            contentFit="cover"
            source={require("../assets/group-394.png")}
          />
          <Text style={[styles.balonmano, styles.ftbolTypo]}>Balonmano</Text>
        </View>
      </View>
      <View style={styles.paso1Parent}>
        <Text style={[styles.paso1, styles.atrsTypo]}>Paso 1</Text>
        <Text style={styles.escogeTuDeporte}>Escoge tu deporte</Text>
      </View>
      <View style={styles.lineParent}>
        <View style={styles.lineView} />
        <View style={[styles.frameChild2, styles.frameChildLayout]} />
        <View style={[styles.frameChild3, styles.frameChildLayout]} />
        <View style={styles.frameChild4} />
      </View>
      <Image
        style={[styles.escogerDeporteItem, styles.loremIpsumPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.group1}>
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
            source={require("../assets/cellular-connection.png")}
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
  loremIpsumPosition: {
    left: "50%",
    position: "absolute",
  },
  ftbolTypo: {
    marginTop: 7,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  iconLayout: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  frameChildLayout: {
    width: 81,
    borderColor: Color.colorDimgray_100,
    height: 3,
    borderTopWidth: 3,
    borderStyle: "solid",
    top: -1,
    position: "absolute",
  },
  groupChildPosition: {
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
  escogerDeporteChild: {
    top: -78,
    left: -1821,
    width: 3822,
    height: 996,
    opacity: 0.2,
    position: "absolute",
  },
  atrs: {
    left: 14,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    fontFamily: FontFamily.t4TEXTMICRO,
    top: 0,
    position: "absolute",
  },
  coolicon: {
    height: "83.33%",
    width: "16.92%",
    top: "11.11%",
    right: "83.08%",
    bottom: "5.56%",
    maxHeight: "100%",
    left: "0%",
    maxWidth: "100%",
  },
  atrsParent: {
    top: 77,
    left: 323,
    width: 52,
    height: 18,
    position: "absolute",
  },
  aceptar: {
    fontSize: FontSize.button_size,
    fontWeight: "700",
    color: Color.bLACK1SPORTSMATCH,
  },
  loremIpsum1: {
    borderRadius: Border.br_81xl,
    width: 360,
    justifyContent: "center",
    paddingHorizontal: Padding.p_81xl,
    paddingVertical: Padding.p_3xs,
    alignItems: "center",
    backgroundColor: Color.wHITESPORTSMATCH,
    flexDirection: "row",
  },
  loremIpsum: {
    marginLeft: -180,
    top: 749,
    flexDirection: "row",
  },
  frameChild: {
    height: 131,
    width: 130,
  },
  ftbol: {
    width: 133,
  },
  frameItem: {
    height: 130,
    width: 130,
  },
  baloncesto: {
    width: 137,
  },
  instanceGroup: {
    marginLeft: 15,
  },
  frameInner: {
    height: 132,
    width: 130,
  },
  hockey: {
    width: 132,
  },
  maskGroupIcon: {
    height: "98.08%",
    width: "97.7%",
    bottom: "1.92%",
    left: "2.3%",
    top: "0%",
    right: "0%",
    position: "absolute",
  },
  vectorIcon: {
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
    bottom: "0%",
    height: "100%",
  },
  groupIcon1: {
    height: "34%",
    width: "34%",
    top: "9.23%",
    right: "56.77%",
    bottom: "56.77%",
    left: "9.23%",
    maxHeight: "100%",
  },
  group: {
    width: "99.62%",
    right: "0.38%",
  },
  frameChild1: {
    width: 131,
    height: 130,
  },
  balonmano: {
    width: 138,
  },
  instanceParent2: {
    marginLeft: 15,
    alignItems: "center",
  },
  frameParent: {
    top: 211,
    left: 54,
    width: 287,
    flexWrap: "wrap",
    flexDirection: "row",
    position: "absolute",
  },
  paso1: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    color: Color.bALONCESTO,
    width: 393,
  },
  escogeTuDeporte: {
    fontSize: FontSize.size_9xl,
    lineHeight: 40,
    fontWeight: "500",
    width: 390,
    color: Color.wHITESPORTSMATCH,
    textAlign: "center",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  paso1Parent: {
    top: 98,
    left: 0,
    position: "absolute",
  },
  lineView: {
    left: -1,
    borderColor: Color.bALONCESTO,
    zIndex: 0,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    top: -1,
    borderStyle: "solid",
    position: "absolute",
  },
  frameChild2: {
    left: 93,
    zIndex: 1,
  },
  frameChild3: {
    left: 187,
    zIndex: 2,
  },
  frameChild4: {
    left: 282,
    zIndex: 3,
    borderColor: Color.colorDimgray_100,
    height: 3,
    width: 80,
    borderTopWidth: 3,
    borderStyle: "solid",
    top: -1,
    position: "absolute",
  },
  lineParent: {
    top: 167,
    padding: Padding.p_3xs,
    left: 15,
    flexDirection: "row",
    position: "absolute",
  },
  escogerDeporteItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
  },
  groupChild: {
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
    right: 0,
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
    width: 61,
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    top: 10,
    height: 24,
    left: 15,
  },
  escogerDeporte: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default EscogerDeporte;
