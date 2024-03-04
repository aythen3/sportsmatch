import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const TusMatchs1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tusMatchs}>
      <Text style={[styles.nuevosMatchs, styles.buscarTypo]}>
        Nuevos matchs
      </Text>
      <View style={styles.tusMatchsParent}>
        <Pressable
          style={styles.tusMatchs1}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.tusMatchs2}>Tus Matchs</Text>
        </Pressable>
        <Pressable
          style={[styles.coolicon, styles.cooliconPosition]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={[styles.icon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/coolicon4.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.search, styles.targetaLayout1]}>
        <View style={[styles.searchInner, styles.groupChildPosition]}>
          <View style={[styles.groupChild, styles.borderBorder]} />
        </View>
        <Image
          style={[styles.searchChild, styles.iconChildLayout]}
          contentFit="cover"
          source={require("../assets/group-428.png")}
        />
        <Text style={[styles.buscar, styles.buscarTypo]}>Buscar</Text>
      </View>
      <Pressable
        style={[styles.targetaMatchClub, styles.targetaLayout]}
        onPress={() => navigation.navigate("TusMatchsDetalle1")}
      >
        <View
          style={[styles.targetaMatchClubChild, styles.groupChildPosition]}
        />
        <Image
          style={styles.targetaMatchClubItem}
          contentFit="cover"
          source={require("../assets/group-414.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.targetaLayout]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={styles.jordiEspelt}>{`Jordi 
Espelt`}</Text>
        <Image
          style={styles.maskGroupPosition}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.targetaMatchClub1, styles.targetaLayout]}
        onPress={() => navigation.navigate("TusMatchsDetalle1")}
      >
        <View
          style={[styles.targetaMatchClubChild, styles.groupChildPosition]}
        />
        <Image
          style={styles.targetaMatchClubItem}
          contentFit="cover"
          source={require("../assets/group-414.png")}
        />
        <Image
          style={[styles.maskGroupIcon, styles.targetaLayout]}
          contentFit="cover"
          source={require("../assets/mask-group2.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.groupChildPosition]}
          contentFit="cover"
          source={require("../assets/mask-group3.png")}
        />
        <Text style={styles.jordiEspelt}>{`Carles
Mir`}</Text>
        <Image
          style={[styles.maskGroupIcon5, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group4.png")}
        />
      </Pressable>
      <Image
        style={[styles.maskGroupIcon6, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/mask-group15.png")}
      />
      <View style={styles.groupItemPosition}>
        <View style={[styles.groupItem, styles.groupItemPosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderBorder]} />
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
      <View style={[styles.menuClub, styles.menuClubPosition]}>
        <Image
          style={[styles.maskGroupIcon7, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon8, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.menuClubChild, styles.groupChildPosition]} />
        <View style={[styles.menuClubItem, styles.groupChildPosition]} />
        <View style={[styles.menuClubInner, styles.borderBorder]} />
        <Pressable
          style={[styles.ellipseParent, styles.ellipseParentPosition]}
          onPress={() => navigation.navigate("PerfilDatosPropioClub")}
        >
          <Image
            style={[styles.maskGroupIcon1, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-765.png")}
          />
          <Image
            style={[
              styles.logoUem21RemovebgPreview1Icon,
              styles.iconChildLayout,
            ]}
            contentFit="cover"
            source={require("../assets/logo-uem21removebgpreview-17.png")}
          />
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("ExplorarClubs")}
        >
          <Image
            style={[styles.icon, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/group-535.png")}
          />
        </Pressable>
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
          <Pressable
            style={[styles.container, styles.groupChildPosition]}
            onPress={() => navigation.navigate("SiguiendoJugadores")}
          >
            <Image
              style={[styles.icon, styles.iconChildLayout]}
              contentFit="cover"
              source={require("../assets/group-5402.png")}
            />
          </Pressable>
          <Pressable
            style={styles.frame}
            onPress={() => navigation.navigate("TusMensajes1")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-5395.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.menuClubChild2, styles.ellipseParentPosition]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
      </View>
      <Image
        style={[styles.tusMatchsChild, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <Image
        style={[styles.tusMatchsItem, styles.menuClubPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buscarTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    position: "absolute",
  },
  cooliconPosition: {
    left: "0%",
    position: "absolute",
  },
  iconChildLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  targetaLayout1: {
    width: 358,
    left: 16,
  },
  groupChildPosition: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  borderBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  targetaLayout: {
    height: 85,
    position: "absolute",
  },
  maskGroupPosition: {
    left: "2.51%",
    bottom: "23.53%",
    right: "84.92%",
    width: "12.57%",
    height: "52.94%",
    top: "23.53%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupItemPosition: {
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
  menuClubPosition: {
    left: "50%",
    position: "absolute",
  },
  maskGroupLayout: {
    width: "8.97%",
    height: "44.87%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseParentPosition: {
    bottom: "38.46%",
    top: "16.67%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
  },
  lineIconLayout: {
    width: 0,
    bottom: "0%",
    maxHeight: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  nuevosMatchs: {
    top: "19.19%",
    left: "3.85%",
    fontSize: FontSize.button_size,
    lineHeight: 20,
    color: Color.wHITESPORTSMATCH,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  tusMatchs2: {
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "500",
  },
  tusMatchs1: {
    left: "13.85%",
    top: "0%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  coolicon: {
    top: "18.18%",
    right: "93.23%",
    bottom: "13.64%",
    width: "6.77%",
    height: "68.18%",
  },
  tusMatchsParent: {
    height: "2.61%",
    width: "33.33%",
    top: "7.11%",
    right: "62.56%",
    bottom: "90.28%",
    left: "4.1%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    width: "100%",
  },
  searchInner: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  searchChild: {
    height: "42.86%",
    width: "3.58%",
    top: "31.43%",
    right: "92.79%",
    bottom: "25.71%",
    left: "3.63%",
    maxHeight: "100%",
    position: "absolute",
  },
  buscar: {
    height: "45.14%",
    width: "70.45%",
    top: "25.14%",
    left: "9.44%",
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  search: {
    top: 113,
    height: 35,
    position: "absolute",
  },
  targetaMatchClubChild: {
    backgroundColor: Color.bALONCESTO,
    borderRadius: Border.br_10xs,
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  targetaMatchClubItem: {
    width: 218,
    left: 0,
    top: 0,
    height: 85,
    position: "absolute",
  },
  maskGroupIcon: {
    left: 236,
    width: 122,
    top: 0,
  },
  maskGroupIcon1: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  jordiEspelt: {
    height: "58.82%",
    width: "38.55%",
    left: "17.6%",
    top: "23.53%",
    lineHeight: 22,
    fontSize: FontSize.h3TitleMEDIUM_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "500",
    position: "absolute",
  },
  targetaMatchClub: {
    top: 203,
    borderRadius: Border.br_10xs,
    width: 358,
    left: 16,
  },
  maskGroupIcon5: {
    display: "none",
  },
  targetaMatchClub1: {
    top: 301,
    borderRadius: Border.br_10xs,
    width: 358,
    left: 16,
  },
  maskGroupIcon6: {
    height: "5.33%",
    width: "11.54%",
    top: "38.03%",
    right: "82.05%",
    bottom: "56.64%",
    left: "6.41%",
    maxHeight: "100%",
    position: "absolute",
  },
  groupItem: {
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
    top: 0,
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
    top: 10,
    left: 15,
    height: 24,
  },
  maskGroupIcon7: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
  },
  maskGroupIcon8: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  menuClubItem: {
    width: "19.74%",
    right: "59.49%",
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: "20.77%",
    position: "absolute",
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
  logoUem21RemovebgPreview1Icon: {
    height: "72.57%",
    width: "77.43%",
    top: "13.71%",
    right: "10.86%",
    bottom: "13.71%",
    left: "11.71%",
    maxHeight: "100%",
    position: "absolute",
  },
  ellipseParent: {
    right: "6.15%",
    left: "84.87%",
  },
  wrapper: {
    left: "25.9%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    width: "7.69%",
    height: "37.95%",
    position: "absolute",
  },
  lineIcon: {
    left: "20.77%",
  },
  menuClubChild1: {
    left: "40.51%",
  },
  container: {
    right: "88.06%",
    width: "11.94%",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  frame: {
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuClub: {
    marginLeft: -195,
    top: 766,
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
    left: "50%",
  },
  tusMatchsChild: {
    height: "0.59%",
    width: "1.28%",
    top: "96.33%",
    right: "28.97%",
    bottom: "3.08%",
    left: "69.74%",
    maxHeight: "100%",
    position: "absolute",
  },
  tusMatchsItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
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

export default TusMatchs1;
