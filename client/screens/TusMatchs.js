import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const TusMatchs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tusMatchs}>
      <View style={styles.informacion}>
        <Text style={[styles.nuevosMatchs, styles.buscarTypo]}>
          Nuevos matchs
        </Text>
        <View style={styles.targetaClub}>
          <Pressable
            style={styles.fondoPastilla}
            onPress={() => navigation.navigate("TusMatchsDetalle")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/fondo-pastilla.png")}
            />
          </Pressable>
          <View style={styles.texto}>
            <View style={styles.escudo}>
              <Image
                style={[styles.escudoChild, styles.iconGroupLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-762.png")}
              />
              <Image
                style={[
                  styles.logoUem21RemovebgPreview1Icon,
                  styles.groupChildLayout,
                ]}
                contentFit="cover"
                source={require("../assets/logo-uem21removebgpreview-12.png")}
              />
            </View>
            <Text
              style={[styles.clubBasquetLametlla, styles.tusMatchs2Typo]}
            >{`Club Basquet L’ametlla 
de Mar`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cabeezeraParent}>
        <View style={styles.cabeezera}>
          <Pressable
            style={styles.tusMatchs1}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.tusMatchs2Typo}>Tus Matchs</Text>
          </Pressable>
          <Pressable
            style={styles.coolicon}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={[styles.icon1, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/coolicon4.png")}
            />
          </Pressable>
        </View>
        <View style={styles.buscador}>
          <View style={[styles.buscadorInner, styles.innerChildPosition]}>
            <View style={[styles.groupChild, styles.borderBorder]} />
          </View>
          <Image
            style={[styles.buscadorChild, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-428.png")}
          />
          <Text style={[styles.buscar, styles.buscarTypo]}>Buscar</Text>
        </View>
      </View>
      <View style={styles.groupItemPosition}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
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
            source={require("../assets/cellular-connection4.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.tusMatchsChild, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <View style={styles.menuClub}>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.menuClubChild, styles.innerChildPosition]} />
        <View style={[styles.menuClubItem, styles.innerChildPosition]} />
        <View style={[styles.menuClubInner, styles.borderBorder]} />
        <Image
          style={[styles.groupIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-535.png")}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Image
          style={[styles.menuClubChild1, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupInner, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-5402.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("TusMensajes")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-5392.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menuClubChild2, styles.menuClubChild2Layout]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.menuClubChild2Layout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-83.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buscarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  iconGroupLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupChildLayout: {
    borderRadius: Border.br_81xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  tusMatchs2Typo: {
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "500",
  },
  innerChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  groupItemPosition: {
    height: 34,
    left: 0,
    width: 390,
    top: 0,
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
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
  },
  iconPosition: {
    bottom: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineIconLayout: {
    width: 0,
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  menuClubChild2Layout: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  nuevosMatchs: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    color: Color.wHITESPORTSMATCH,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  fondoPastilla: {
    height: 85,
    zIndex: 0,
    width: 358,
  },
  escudoChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    right: "0%",
    width: "100%",
  },
  logoUem21RemovebgPreview1Icon: {
    width: "77.78%",
    right: "11.11%",
    left: "11.11%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  escudo: {
    width: 45,
    height: 45,
  },
  clubBasquetLametlla: {
    width: 183,
    height: 61,
    marginLeft: 9,
  },
  texto: {
    left: 5,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
    top: 10,
    position: "absolute",
  },
  targetaClub: {
    marginTop: 14,
  },
  informacion: {
    top: 162,
    left: 15,
    position: "absolute",
  },
  tusMatchs1: {
    left: "13.85%",
    top: "0%",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  coolicon: {
    top: "18.18%",
    right: "93.23%",
    bottom: "13.64%",
    width: "6.77%",
    height: "68.18%",
    left: "0%",
    position: "absolute",
  },
  cabeezera: {
    width: 130,
    height: 22,
  },
  groupChild: {
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    borderRadius: Border.br_81xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  buscadorInner: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  buscadorChild: {
    height: "42.86%",
    width: "3.58%",
    top: "31.43%",
    right: "92.79%",
    bottom: "25.71%",
    left: "3.63%",
    position: "absolute",
  },
  buscar: {
    height: "45.14%",
    width: "70.45%",
    top: "25.14%",
    left: "9.44%",
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: "absolute",
  },
  buscador: {
    height: 35,
    marginTop: 31,
    width: 358,
  },
  cabeezeraParent: {
    top: 60,
    left: 16,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    left: 0,
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
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7,
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
    textAlign: "center",
    fontSize: FontSize.t2TextSTANDARD_size,
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    height: 24,
    top: 10,
    left: 15,
  },
  tusMatchsChild: {
    height: "0.59%",
    top: "96.33%",
    right: "29.74%",
    bottom: "3.08%",
    left: "68.97%",
    width: "1.28%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  maskGroupIcon1: {
    top: "21.79%",
    right: "9.74%",
    left: "81.28%",
    width: "8.97%",
    height: "44.87%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    left: "0%",
    right: "0%",
    width: "100%",
  },
  menuClubItem: {
    width: "19.74%",
    right: "59.49%",
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: "20.77%",
  },
  menuClubInner: {
    height: "3.85%",
    width: "20.51%",
    top: "1.92%",
    right: "59.1%",
    bottom: "94.23%",
    left: "20.38%",
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
  },
  groupIcon: {
    height: "37.95%",
    width: "7.69%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    left: "25.9%",
    position: "absolute",
  },
  lineIcon: {
    left: "20.77%",
  },
  menuClubChild1: {
    left: "40.51%",
  },
  groupInner: {
    width: "11.94%",
    right: "88.06%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  wrapper: {
    left: 234,
    top: 3,
    width: 34,
    height: 23,
    position: "absolute",
  },
  groupParent: {
    height: "39.23%",
    width: "68.69%",
    top: "19.74%",
    right: "25.41%",
    bottom: "41.03%",
    left: "5.9%",
    position: "absolute",
  },
  menuClubChild2: {
    right: "44.87%",
    left: "46.15%",
  },
  maskGroupIcon2: {
    right: "6.15%",
    left: "84.87%",
  },
  ellipseIcon: {
    height: "6.41%",
    top: "60.26%",
    right: "28.97%",
    left: "69.74%",
    width: "1.28%",
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
    left: "50%",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 78,
    width: 390,
    position: "absolute",
  },
  tusMatchs: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default TusMatchs;
