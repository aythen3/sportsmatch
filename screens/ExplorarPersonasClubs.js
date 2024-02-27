import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const ExplorarPersonasClubs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explorarPersonasClubs}>
      <Image
        style={[styles.hannahRedingKqyboqrw5wUnspIcon, styles.hannahIconLayout]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[
          styles.hannahRedingKqyboqrw5wUnspIcon1,
          styles.hannahIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[styles.nickFithenBuuGssofvoUnsplaIcon, styles.nickIconLayout]}
        contentFit="cover"
        source={require("../assets/nickfithenbuugssofvounsplash-12.png")}
      />
      <Image
        style={[styles.nickFithenBuuGssofvoUnsplaIcon1, styles.nickIconLayout]}
        contentFit="cover"
        source={require("../assets/nickfithenbuugssofvounsplash-12.png")}
      />
      <Image
        style={[styles.hannahRedingKqyboqrw5wUnspIcon2, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[
          styles.hannahRedingKqyboqrw5wUnspIcon3,
          styles.hannahIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[styles.hannahRedingKqyboqrw5wUnspIcon4, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[
          styles.hannahRedingKqyboqrw5wUnspIcon5,
          styles.hannahIconPosition,
        ]}
        contentFit="cover"
        source={require("../assets/hannahredingkqyboqrw5wunsplash-1.png")}
      />
      <Image
        style={[styles.nickFithenBuuGssofvoUnsplaIcon2, styles.iconPosition2]}
        contentFit="cover"
        source={require("../assets/nickfithenbuugssofvounsplash-12.png")}
      />
      <Image
        style={[styles.nickFithenBuuGssofvoUnsplaIcon3, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/nickfithenbuugssofvounsplash-12.png")}
      />
      <View style={styles.explorarPersonasClubsChild} />
      <View style={styles.ellipseParent}>
        <Image
          style={[styles.groupChild, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-76.png")}
        />
        <Image
          style={[styles.logoUem21RemovebgPreview1Icon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/logo-uem21removebgpreview-1.png")}
        />
      </View>
      <View style={[styles.rectangleParent, styles.hannahIconLayout]}>
        <View style={[styles.groupItem, styles.hannahIconLayout]} />
        <View style={styles.ellipseGroup}>
          <Image
            style={[styles.groupChild, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-761.png")}
          />
          <Image
            style={[
              styles.logoUem21RemovebgPreview1Icon1,
              styles.groupChild2Layout,
            ]}
            contentFit="cover"
            source={require("../assets/logo-uem21removebgpreview-11.png")}
          />
        </View>
      </View>
      <View style={[styles.explorarPersonasClubsItem, styles.menuClubLayout]} />
      <Image
        style={styles.explorarPersonasClubsInner}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
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
            source={require("../assets/wifi2.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <View style={styles.starus}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <View style={[styles.menuClub, styles.menuClubLayout]}>
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
        <View style={[styles.menuClubChild, styles.groupChildPosition]} />
        <View style={[styles.menuClubItem, styles.lineIconPosition]} />
        <View style={[styles.menuClubInner, styles.borderBorder]} />
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
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
            style={[styles.groupChild1, styles.groupIconLayout]}
            contentFit="cover"
            source={require("../assets/group-540.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("TusMensajes")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-539.png")}
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
      <Image
        style={[styles.explorarPersonasClubsChild1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-428.png")}
      />
      <View style={styles.personasClubsPosicinDeJParent}>
        <Text style={styles.personasClubsPosicin}>
          Personas, clubs, posición de juego...
        </Text>
        <View style={[styles.groupChild2, styles.borderBorder]} />
      </View>
      <View style={styles.logosuperior}>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("LoginSwitch")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/logo.png")}
          />
        </Pressable>
        <View style={[styles.groupContainer, styles.frameChildLayout]}>
          <View style={[styles.ellipseContainer, styles.groupChild3Layout]}>
            <Image
              style={[styles.groupChild3, styles.groupChild3Layout]}
              contentFit="cover"
              source={require("../assets/ellipse-81.png")}
            />
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.vectorParent}>
            <Image
              style={[styles.frameChild, styles.frameChildLayout]}
              contentFit="cover"
              source={require("../assets/rectangle-176.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group4.png")}
            />
            <Image
              style={[styles.frameItem, styles.lineIconLayout]}
              contentFit="cover"
              source={require("../assets/line-21.png")}
            />
            <Image
              style={styles.frameInner}
              contentFit="cover"
              source={require("../assets/group-658.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hannahIconLayout: {
    height: 146,
    width: 117,
  },
  hannahIconPosition: {
    marginLeft: 63,
    height: 146,
    width: 117,
    left: "50%",
  },
  nickIconLayout: {
    height: 295,
    width: 240,
  },
  iconPosition2: {
    top: 760,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  iconPosition1: {
    top: 1056,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild2Layout: {
    borderRadius: Border.br_81xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  menuClubLayout: {
    width: 390,
    position: "absolute",
  },
  rectanglePosition: {
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
  borderBorder: {
    borderStyle: "solid",
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
  groupChildPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  lineIconPosition: {
    left: "20.77%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  lineIconLayout: {
    width: 0,
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
  frameChildLayout: {
    height: 45,
    width: 120,
  },
  groupChild3Layout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspIcon: {
    borderRadius: Border.br_10xs,
    position: "absolute",
    left: "50%",
    top: 164,
    marginLeft: -180,
    height: 146,
  },
  hannahRedingKqyboqrw5wUnspIcon1: {
    top: 611,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  nickFithenBuuGssofvoUnsplaIcon: {
    left: 135,
    height: 295,
    width: 240,
    borderRadius: Border.br_10xs,
    position: "absolute",
    top: 164,
  },
  nickFithenBuuGssofvoUnsplaIcon1: {
    top: 462,
    left: 15,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspIcon2: {
    height: 146,
    width: 117,
    left: "50%",
    marginLeft: -180,
  },
  hannahRedingKqyboqrw5wUnspIcon3: {
    top: 909,
    borderRadius: Border.br_10xs,
    position: "absolute",
    left: "50%",
    marginLeft: -180,
    height: 146,
  },
  hannahRedingKqyboqrw5wUnspIcon4: {
    marginLeft: 63,
    height: 146,
    width: 117,
    left: "50%",
  },
  hannahRedingKqyboqrw5wUnspIcon5: {
    top: 1205,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  nickFithenBuuGssofvoUnsplaIcon2: {
    height: 295,
    width: 240,
    left: 135,
  },
  nickFithenBuuGssofvoUnsplaIcon3: {
    left: 15,
    height: 295,
    width: 240,
  },
  explorarPersonasClubsChild: {
    top: 461,
    left: 258,
    backgroundColor: "#5d3191",
    height: 147,
    width: 117,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupChild: {
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  logoUem21RemovebgPreview1Icon: {
    height: "72.53%",
    width: "77.44%",
    top: "13.74%",
    right: "10.81%",
    bottom: "13.74%",
    left: "11.74%",
    maxHeight: "100%",
  },
  ellipseParent: {
    height: "10.18%",
    width: "22.05%",
    top: "57.94%",
    right: "7.44%",
    bottom: "31.88%",
    left: "70.51%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    top: 0,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  logoUem21RemovebgPreview1Icon1: {
    width: "77.79%",
    right: "11.05%",
    left: "11.16%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ellipseGroup: {
    height: "58.9%",
    width: "73.5%",
    top: "20.55%",
    right: "13.68%",
    bottom: "20.55%",
    left: "12.82%",
    position: "absolute",
  },
  rectangleParent: {
    top: 313,
    left: 15,
    position: "absolute",
  },
  explorarPersonasClubsItem: {
    top: 109,
    height: 52,
    left: 0,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  explorarPersonasClubsInner: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  rectangleView: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
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
    right: 4,
    borderRadius: 2,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    height: 7,
    top: 2,
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
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
    width: 61,
    position: "absolute",
  },
  starus: {
    top: 10,
    height: 24,
    width: 61,
    left: 15,
    position: "absolute",
  },
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
    position: "absolute",
  },
  menuClubItem: {
    width: "19.74%",
    right: "59.49%",
    backgroundColor: Color.bLACK3SPORTSMATCH,
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
  groupIcon: {
    height: "37.95%",
    width: "7.69%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    left: "25.9%",
    maxHeight: "100%",
  },
  lineIcon: {
    left: "20.77%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
  },
  menuClubChild1: {
    left: "40.51%",
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupChild1: {
    width: "11.94%",
    right: "88.06%",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 234,
    width: 34,
    height: 23,
    top: 3,
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
    width: "1.28%",
    top: "60.26%",
    right: "28.97%",
    left: "69.74%",
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
    left: "50%",
  },
  explorarPersonasClubsChild1: {
    height: "1.78%",
    width: "3.28%",
    top: "15.28%",
    right: "89.79%",
    bottom: "82.94%",
    left: "6.92%",
    maxHeight: "100%",
  },
  personasClubsPosicin: {
    height: "45.14%",
    width: "84.64%",
    top: "25.14%",
    left: "9.36%",
    color: Color.gREY2SPORTSMATCH,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t2TextSTANDARD_size,
    position: "absolute",
  },
  groupChild2: {
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
  personasClubsPosicinDeJParent: {
    height: "4.15%",
    width: "91.79%",
    top: "13.98%",
    right: "4.36%",
    bottom: "81.87%",
    left: "3.85%",
    position: "absolute",
  },
  container: {
    width: 186,
    height: 44,
  },
  groupChild3: {
    left: 0,
    top: 0,
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    fontWeight: "700",
    width: 14,
    fontFamily: FontFamily.t4TEXTMICRO,
    top: 3,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    height: 7,
    left: 0,
    position: "absolute",
  },
  ellipseContainer: {
    left: 100,
    top: 2,
  },
  frameChild: {
    zIndex: 0,
  },
  groupIcon1: {
    height: "57.11%",
    width: "27.75%",
    top: "24.44%",
    right: "11.17%",
    bottom: "18.44%",
    left: "61.08%",
    zIndex: 1,
    maxHeight: "100%",
  },
  frameItem: {
    left: 61,
    zIndex: 2,
    height: 44,
    top: 2,
  },
  frameInner: {
    top: 8,
    left: 16,
    width: 31,
    height: 31,
    zIndex: 3,
    position: "absolute",
  },
  vectorParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupContainer: {
    marginLeft: 69,
  },
  logosuperior: {
    top: 52,
    flexDirection: "row",
    alignItems: "flex-end",
    left: 15,
    position: "absolute",
  },
  explorarPersonasClubs: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default ExplorarPersonasClubs;
