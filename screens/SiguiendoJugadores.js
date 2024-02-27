import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily, Padding } from "../GlobalStyles";

const SiguiendoJugadores = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.siguiendoJugadores}>
      <View style={styles.nickFithenBuuGssofvoUnsplaParent}>
        <Image
          style={[styles.nickFithenBuuGssofvoUnsplaIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/nickfithenbuugssofvounsplash-13.png")}
        />
        <View style={[styles.rectangleParent, styles.groupLayout1]}>
          <View style={[styles.groupChild, styles.groupLayout1]} />
          <View style={[styles.avatar, styles.avatarPosition]}>
            <Image
              style={[styles.maskGroupIcon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
            <Text style={styles.jordiEspelt}>Carles Mir</Text>
          </View>
          <Image
            style={[styles.maskGroupIcon1, styles.wrapperPosition]}
            contentFit="cover"
            source={require("../assets/mask-group12.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={[styles.avatar, styles.avatarPosition]}>
          <View style={styles.maskGroupParent}>
            <Image
              style={styles.maskGroupIcon2}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
            <Text
              style={[
                styles.jordiEspeltPromocionadaContainer,
                styles.likes1Typo,
              ]}
            >
              <Text style={styles.jordiEspelt1}>{`Jordi Espelt  
`}</Text>
              <Text style={styles.promocionada}>Promocionada</Text>
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.likes}>2369 likes</Text>
      <View
        style={[styles.hannahRedingKqyboqrw5wUnspParent, styles.hannahPosition]}
      >
        <Image
          style={[styles.hannahRedingKqyboqrw5wUnspIcon, styles.hannahPosition]}
          contentFit="cover"
          source={require("../assets/hannahredingkqyboqrw5wunsplash-13.png")}
        />
        <View style={[styles.bullets, styles.likes1Position]}>
          <View style={styles.component6}>
            <Image
              style={styles.component6Layout}
              contentFit="cover"
              source={require("../assets/ellipse-85.png")}
            />
            <Image
              style={[styles.component6Item, styles.component6Layout]}
              contentFit="cover"
              source={require("../assets/ellipse-85.png")}
            />
            <Image
              style={[styles.component6Item, styles.component6Layout]}
              contentFit="cover"
              source={require("../assets/ellipse-83.png")}
            />
            <Image
              style={[styles.component6Item, styles.component6Layout]}
              contentFit="cover"
              source={require("../assets/ellipse-85.png")}
            />
            <Image
              style={[styles.component6Item, styles.component6Layout]}
              contentFit="cover"
              source={require("../assets/ellipse-85.png")}
            />
          </View>
        </View>
        <Text style={[styles.likes1, styles.likes1Position]}>236 likes</Text>
        <Text
          style={[styles.jordiEspeltMireu, styles.verLos24Typo]}
        >{`Jordi Espelt Mireu quina jugada vaig fer l’altre dia 
entrenant al camp del meu poble. Toooop!...  más`}</Text>
        <Text style={[styles.verLos24, styles.verLos24Typo]}>
          Ver los 24 comentarios
        </Text>
        <Text style={[styles.alexMijaresPedazo, styles.verLos24Typo]}>
          Alex Mijares Pedazo de jugada crack! Graaan!
        </Text>
        <Image
          style={[styles.buttonsInterectionIcon, styles.likes1Position]}
          contentFit="cover"
          source={require("../assets/buttons-interection.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.menuClubPosition]}>
        <View style={[styles.frameChild, styles.menuClubShadowBox]} />
        <Pressable
          style={styles.usuarios}
          onPress={() => navigation.navigate("SiguiendoUsuarios")}
        >
          <Text style={styles.clubs}>Clubs</Text>
        </Pressable>
        <Image
          style={[styles.frameItem, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/vector-4.png")}
        />
      </View>
      <View style={styles.groupPosition}>
        <View style={[styles.groupInner, styles.groupPosition]} />
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
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection2.png")}
          />
        </View>
        <View style={styles.starus}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Image
        style={[styles.siguiendoJugadoresChild, styles.iconGroupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("LoginSwitch")}
      >
        <Image
          style={[styles.icon, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group-537.png")}
        />
      </Pressable>
      <View style={[styles.menuClub, styles.menuClubShadowBox]}>
        <Image
          style={[styles.maskGroupIcon3, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <Image
          style={[styles.maskGroupIcon4, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group7.png")}
        />
        <View style={[styles.menuClubChild, styles.childPosition]} />
        <View style={[styles.menuClubItem, styles.menuPosition]} />
        <View style={[styles.menuClubInner, styles.borderBorder]} />
        <Pressable
          style={[styles.ellipseParent, styles.groupIconPosition]}
          onPress={() => navigation.navigate("PerfilDatosPropioClub")}
        >
          <Image
            style={[styles.groupChild1, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-765.png")}
          />
          <Image
            style={[
              styles.logoUem21RemovebgPreview1Icon,
              styles.iconGroupLayout,
            ]}
            contentFit="cover"
            source={require("../assets/logo-uem21removebgpreview-16.png")}
          />
        </Pressable>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("ExplorarClubs")}
        >
          <Image
            style={[styles.icon, styles.iconGroupLayout]}
            contentFit="cover"
            source={require("../assets/group-5351.png")}
          />
        </Pressable>
        <Image
          style={[styles.lineIcon, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <Image
          style={[styles.menuClubChild1, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/line-5.png")}
        />
        <View style={styles.groupParent}>
          <Pressable
            style={[styles.frame, styles.framePosition]}
            onPress={() => navigation.navigate("SiguiendoJugadores")}
          >
            <Image
              style={[styles.icon, styles.iconGroupLayout]}
              contentFit="cover"
              source={require("../assets/group-5404.png")}
            />
          </Pressable>
          <Pressable
            style={styles.groupPressable}
            onPress={() => navigation.navigate("TusMensajes1")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-5391.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
      </View>
      <Image
        style={[styles.siguiendoJugadoresItem, styles.hannahPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
      <View style={[styles.vectorParent, styles.vectorParentLayout]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorParentLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-1761.png")}
        />
        <Image
          style={[styles.groupIcon1, styles.iconGroupLayout]}
          contentFit="cover"
          source={require("../assets/group7.png")}
        />
        <View style={[styles.ellipseGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild2, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-812.png")}
          />
          <Text style={styles.text}>2</Text>
        </View>
        <View style={[styles.ellipseContainer, styles.groupLayout]}>
          <Image
            style={[styles.groupChild2, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-812.png")}
          />
          <Text style={styles.text}>3</Text>
        </View>
        <Image
          style={[styles.groupChild4, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/line-211.png")}
        />
        <Image
          style={[styles.groupChild5, styles.avatarPosition]}
          contentFit="cover"
          source={require("../assets/group-6582.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 450,
    borderRadius: Border.br_10xs,
  },
  groupLayout1: {
    height: 52,
    width: 390,
    left: 0,
    position: "absolute",
  },
  avatarPosition: {
    top: 8,
    position: "absolute",
  },
  iconGroupLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  wrapperPosition: {
    left: "3.85%",
    position: "absolute",
  },
  likes1Typo: {
    fontSize: FontSize.t1TextSMALL_size,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
  },
  hannahPosition: {
    left: "50%",
    position: "absolute",
  },
  likes1Position: {
    top: 460,
    position: "absolute",
  },
  component6Layout: {
    height: 5,
    width: 5,
  },
  verLos24Typo: {
    left: "0.28%",
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    position: "absolute",
  },
  menuClubPosition: {
    marginLeft: -195,
    left: "50%",
    width: 390,
  },
  menuClubShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  groupPosition: {
    height: 34,
    top: 0,
    width: 390,
    left: 0,
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
    height: "44.87%",
    width: "8.97%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  childPosition: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  menuPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  groupIconPosition: {
    bottom: "38.46%",
    top: "16.67%",
    height: "44.87%",
    width: "8.97%",
    position: "absolute",
  },
  childLayout: {
    width: 0,
    position: "absolute",
  },
  framePosition: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  vectorParentLayout: {
    height: 45,
    width: 120,
    position: "absolute",
  },
  groupLayout: {
    height: 14,
    width: 14,
    position: "absolute",
  },
  nickFithenBuuGssofvoUnsplaIcon: {
    width: 360,
    height: 450,
    borderRadius: Border.br_10xs,
    left: 15,
    top: 52,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  maskGroupIcon: {
    width: "16.43%",
    right: "83.57%",
    display: "none",
    maxHeight: "100%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  jordiEspelt: {
    width: "79.81%",
    top: "28.57%",
    left: "20.19%",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    position: "absolute",
  },
  avatar: {
    width: 213,
    height: 35,
    left: 15,
  },
  maskGroupIcon1: {
    height: "67.31%",
    top: "17.31%",
    right: "87.18%",
    bottom: "15.38%",
    width: "8.97%",
    left: "3.85%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 0,
  },
  nickFithenBuuGssofvoUnsplaParent: {
    top: 742,
    height: 502,
    width: 390,
    left: 0,
    position: "absolute",
  },
  maskGroupIcon2: {
    width: 35,
    height: 35,
  },
  jordiEspelt1: {
    fontWeight: "700",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  promocionada: {
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  jordiEspeltPromocionadaContainer: {
    lineHeight: 15,
    marginLeft: 8,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
  },
  maskGroupParent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleGroup: {
    top: 109,
  },
  likes: {
    top: 1155,
    fontSize: FontSize.t4TEXTMICRO_size,
    color: Color.gREY2SPORTSMATCH,
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 15,
    position: "absolute",
  },
  hannahRedingKqyboqrw5wUnspIcon: {
    marginLeft: -180,
    left: "50%",
    width: 360,
    top: 0,
    height: 450,
    borderRadius: Border.br_10xs,
  },
  component6Item: {
    marginLeft: 4,
  },
  component6: {
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexDirection: "row",
  },
  bullets: {
    left: 139,
    flexDirection: "row",
  },
  likes1: {
    fontWeight: "700",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    fontSize: FontSize.t1TextSMALL_size,
    left: 0,
  },
  jordiEspeltMireu: {
    top: "87.48%",
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
  },
  verLos24: {
    top: "94.26%",
    color: Color.gREY2SPORTSMATCH,
  },
  alexMijaresPedazo: {
    top: "97.04%",
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
  },
  buttonsInterectionIcon: {
    left: 208,
    width: 152,
    height: 35,
  },
  hannahRedingKqyboqrw5wUnspParent: {
    top: 162,
    height: 575,
    marginLeft: -180,
    left: "50%",
    width: 360,
  },
  frameChild: {
    shadowRadius: 50,
    elevation: 50,
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  clubs: {
    fontSize: FontSize.button_size,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    display: "none",
  },
  usuarios: {
    left: "8.21%",
    top: "62.39%",
    position: "absolute",
  },
  frameItem: {
    height: "4.59%",
    width: "2.56%",
    top: "69.72%",
    right: "93.08%",
    bottom: "25.69%",
    left: "4.36%",
    display: "none",
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleContainer: {
    height: 109,
    top: 0,
    position: "absolute",
  },
  groupInner: {
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
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    width: 61,
    color: Color.wHITESPORTSMATCH,
    position: "absolute",
  },
  starus: {
    top: 10,
    height: 24,
    width: 61,
    left: 15,
    position: "absolute",
  },
  siguiendoJugadoresChild: {
    height: "0.59%",
    width: "1.28%",
    top: "91.11%",
    right: "28.97%",
    bottom: "8.29%",
    left: "69.74%",
    maxHeight: "100%",
    position: "absolute",
  },
  icon: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  wrapper: {
    top: "6.28%",
    right: "48.36%",
    bottom: "88.51%",
    width: "47.79%",
    height: "5.21%",
  },
  maskGroupIcon3: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
  },
  maskGroupIcon4: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
  },
  menuClubChild: {
    backgroundColor: Color.bLACK2SPORTMATCH,
    position: "absolute",
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    width: 81,
    left: 0,
    position: "absolute",
  },
  menuClubInner: {
    height: "3.85%",
    width: "21.54%",
    top: "1.92%",
    right: "78.85%",
    bottom: "94.23%",
    left: "-0.38%",
    borderColor: Color.bALONCESTO,
    borderTopWidth: 3,
  },
  groupChild1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
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
  container: {
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
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  menuClubChild1: {
    left: "40.51%",
    maxHeight: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  frame: {
    right: "88.06%",
    width: "11.94%",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  groupPressable: {
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
  groupIcon: {
    right: "44.87%",
    left: "46.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  menuClub: {
    top: 766,
    shadowRadius: 4,
    elevation: 4,
    height: 78,
    marginLeft: -195,
    left: "50%",
    width: 390,
  },
  siguiendoJugadoresItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
  },
  rectangleIcon: {
    top: 0,
    left: 0,
  },
  groupIcon1: {
    height: "57.11%",
    width: "27.75%",
    top: "24.44%",
    right: "11.17%",
    bottom: "18.44%",
    left: "61.08%",
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild2: {
    top: 0,
    left: 0,
  },
  text: {
    fontSize: FontSize.size_5xs,
    lineHeight: 8,
    width: 14,
    top: 3,
    textAlign: "center",
    height: 7,
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
    fontFamily: FontFamily.t4TEXTMICRO,
    left: 0,
    position: "absolute",
  },
  ellipseGroup: {
    left: 100,
    top: 2,
  },
  ellipseContainer: {
    left: 41,
    top: 2,
  },
  groupChild4: {
    left: 61,
    height: 44,
    top: 2,
  },
  groupChild5: {
    left: 16,
    width: 31,
    height: 31,
  },
  vectorParent: {
    left: 270,
    top: 52,
    height: 45,
    width: 120,
  },
  siguiendoJugadores: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default SiguiendoJugadores;
