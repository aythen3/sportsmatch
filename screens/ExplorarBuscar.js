import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const ExplorarBuscar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.explorarBuscar}>
      <View style={styles.menuClub}>
        <Image
          style={[styles.maskGroupIcon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <View style={[styles.menuClubChild, styles.jordiChildPosition]} />
        <View style={[styles.menuClubItem, styles.lineIconPosition]} />
        <View style={styles.menuClubInner} />
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
            style={[styles.groupChild, styles.jordiChildPosition]}
            contentFit="cover"
            source={require("../assets/group-5401.png")}
          />
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("TusMensajes")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-5391.png")}
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
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-83.png")}
        />
      </View>
      <View style={styles.cabezeraBuscadorPerfiles}>
        <View>
          <View>
            <View style={styles.logoSuperior}>
              <Pressable
                style={styles.logo}
                onPress={() => navigation.navigate("LoginSwitch")}
              >
                <Image
                  style={[styles.icon1, styles.iconGroupLayout]}
                  contentFit="cover"
                  source={require("../assets/logo1.png")}
                />
              </Pressable>
              <View style={[styles.superior, styles.superiorLayout]}>
                <View style={[styles.ellipseParent, styles.groupItemLayout]}>
                  <Image
                    style={[styles.groupItem, styles.groupItemPosition]}
                    contentFit="cover"
                    source={require("../assets/ellipse-811.png")}
                  />
                  <Text style={[styles.text, styles.textLayout]}>2</Text>
                </View>
                <View style={styles.groupItemPosition}>
                  <Image
                    style={[styles.frameChild, styles.superiorLayout]}
                    contentFit="cover"
                    source={require("../assets/rectangle-176.png")}
                  />
                  <Image
                    style={[styles.groupIcon1, styles.iconGroupLayout]}
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
          <View style={styles.buscador}>
            <Image
              style={styles.lupaPictoIcon}
              contentFit="cover"
              source={require("../assets/group-428.png")}
            />
            <Text style={styles.jordi}>Jordi</Text>
          </View>
        </View>
        <View style={styles.perfilesFrame}>
          <View style={styles.perfilFlexBox}>
            <Image
              style={styles.maskGroupIcon3}
              contentFit="cover"
              source={require("../assets/mask-group4.png")}
            />
            <Pressable
              style={[styles.jordiEspeltWrapper, styles.jordiWrapperSpaceBlock]}
              onPress={() => navigation.navigate("ChatAbierto1")}
            >
              <Text style={[styles.jordiEspelt, styles.jordiTypo]}>
                Jordi Espelt
              </Text>
            </Pressable>
          </View>
          <View style={[styles.perfilJordiMoreno, styles.perfilFlexBox]}>
            <Image
              style={styles.maskGroupIcon3}
              contentFit="cover"
              source={require("../assets/mask-group8.png")}
            />
            <Text style={[styles.jordiMoreno, styles.jordiTypo]}>
              Jordi Moreno
            </Text>
          </View>
          <View style={[styles.perfilJordiMoreno, styles.perfilFlexBox]}>
            <Image
              style={styles.maskGroupIcon3}
              contentFit="cover"
              source={require("../assets/mask-group9.png")}
            />
            <Text style={[styles.jordiMoreno, styles.jordiTypo]}>
              Jordi Basart
            </Text>
          </View>
          <View style={[styles.perfilJordiMoreno, styles.perfilFlexBox]}>
            <Image
              style={styles.maskGroupIcon3}
              contentFit="cover"
              source={require("../assets/mask-group10.png")}
            />
            <Pressable
              style={[styles.jordiReusWrapper, styles.jordiWrapperSpaceBlock]}
              onPress={() => navigation.navigate("ChatAbierto1")}
            >
              <Text style={[styles.jordiReus, styles.jordiTypo]}>
                Jordi Reus
              </Text>
            </Pressable>
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
            <View style={[styles.capacity, styles.textLayout]} />
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
  iconGroupLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "33.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  jordiChildPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
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
    maxHeight: "100%",
    maxWidth: "100%",
    width: "8.97%",
    height: "44.87%",
    position: "absolute",
    overflow: "hidden",
  },
  superiorLayout: {
    width: 120,
    height: 45,
  },
  groupItemLayout: {
    height: 14,
    width: 14,
  },
  groupItemPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    height: 7,
    position: "absolute",
  },
  jordiWrapperSpaceBlock: {
    marginLeft: 10,
    flex: 1,
  },
  jordiTypo: {
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
  },
  perfilFlexBox: {
    alignItems: "center",
    width: 304,
    flexDirection: "row",
  },
  iphonePosition: {
    height: 34,
    left: 0,
    top: 0,
    width: 390,
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
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    maxHeight: "100%",
    width: "8.97%",
    height: "44.87%",
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
    right: "0%",
    backgroundColor: Color.bLACK2SPORTMATCH,
    bottom: "0%",
    height: "100%",
    width: "100%",
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
    borderStyle: "solid",
    position: "absolute",
  },
  groupIcon: {
    height: "37.95%",
    width: "7.69%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    left: "25.9%",
    maxHeight: "100%",
    position: "absolute",
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
    bottom: "0%",
    height: "100%",
    top: "0%",
    width: 0,
    maxHeight: "100%",
  },
  groupChild: {
    width: "11.94%",
    right: "88.06%",
    bottom: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  icon1: {
    height: "100%",
    flex: 1,
  },
  logo: {
    height: 44,
  },
  groupItem: {
    height: 14,
    width: 14,
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    height: 7,
    left: 0,
    width: 14,
    top: 3,
  },
  ellipseParent: {
    left: 100,
    top: 2,
    position: "absolute",
  },
  frameChild: {
    zIndex: 0,
    height: 45,
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
    position: "absolute",
  },
  frameItem: {
    left: 61,
    zIndex: 2,
    top: 2,
    height: 44,
  },
  frameInner: {
    top: 8,
    left: 16,
    width: 31,
    height: 31,
    zIndex: 3,
    position: "absolute",
  },
  superior: {
    marginLeft: 69,
    height: 45,
  },
  logoSuperior: {
    width: 375,
    alignItems: "flex-end",
    flexDirection: "row",
  },
  lupaPictoIcon: {
    width: 13,
    height: 15,
  },
  jordi: {
    width: 303,
    marginLeft: 9,
    textAlign: "left",
    fontSize: FontSize.t2TextSTANDARD_size,
    height: 15,
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  buscador: {
    borderRadius: Border.br_81xl,
    borderColor: Color.wHITESPORTSMATCH,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_4xs,
    marginTop: 21,
    flexDirection: "row",
    borderStyle: "solid",
    overflow: "hidden",
  },
  maskGroupIcon3: {
    width: 45,
    height: 45,
  },
  jordiEspelt: {
    left: "0%",
    top: "0%",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  jordiEspeltWrapper: {
    height: 15,
  },
  jordiMoreno: {
    marginLeft: 10,
    flex: 1,
  },
  perfilJordiMoreno: {
    marginTop: 10,
  },
  jordiReus: {
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  jordiReusWrapper: {
    height: 17,
  },
  perfilesFrame: {
    marginTop: 30,
  },
  cabezeraBuscadorPerfiles: {
    top: 52,
    left: 15,
    position: "absolute",
  },
  uxIphoneChild: {
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
    right: 4,
    borderRadius: 2,
    backgroundColor: Color.wHITESPORTSMATCH,
    width: 18,
    top: 2,
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
    fontSize: FontSize.t2TextSTANDARD_size,
    width: 61,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
  },
  starus: {
    top: 10,
    height: 24,
    left: 15,
  },
  explorarBuscar: {
    borderRadius: Border.br_21xl,
    height: 844,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default ExplorarBuscar;
