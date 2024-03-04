import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const ChatAbierto1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chatAbierto}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.groupParent}>
          <Image
            style={[styles.groupItem, styles.iconChildLayout]}
            contentFit="cover"
            source={require("../assets/coolicon4.png")}
          />
          <View style={styles.jordiEspeltWrapper}>
            <Text style={[styles.jordiEspelt, styles.jordiEspeltTypo]}>
              Jordi Espelt
            </Text>
          </View>
          <Image
            style={[styles.groupInner, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-467.png")}
          />
        </View>
      </View>
      <View style={[styles.holaMePresentoSoyElJuga, styles.holaPosition1]}>
        <Text style={styles.jordiEspeltTypo}>{`Perfecto, estoy a la espera de 
vuestra decisión`}</Text>
        <Text style={styles.textTypo}>10:33</Text>
        <Image
          style={styles.groupIconLayout}
          contentFit="cover"
          source={require("../assets/group-454.png")}
        />
      </View>
      <View style={[styles.holaMePresentoSoyElJuga1, styles.holaPosition1]}>
        <Text
          style={styles.jordiEspeltTypo}
        >{`Oh! Fantástíco! Qué contento!  `}</Text>
        <Text style={styles.textTypo}>10:33</Text>
        <Image
          style={styles.groupIconLayout}
          contentFit="cover"
          source={require("../assets/group-4542.png")}
        />
      </View>
      <View style={[styles.holaMePresentoSoyElJuga2, styles.holaPosition1]}>
        <Text
          style={styles.jordiEspeltTypo}
        >{`Buenos días, me presento: Soy el jugador de 
baloncesto Jordi Espelt. Hemos hecho Match 
recientemente y me gustaría que vierais mi 
perfil y saber si soy de interés por vuestro club.`}</Text>
        <Text style={styles.textTypo}>10:33</Text>
        <Image
          style={styles.groupIconLayout}
          contentFit="cover"
          source={require("../assets/group-4543.png")}
        />
      </View>
      <View style={[styles.holaMePresentoSoyElJuga3, styles.holaPosition]}>
        <Text style={styles.jordiEspeltTypo}>{`Encantado Jordi, efectívamente, 
nos interesa tu perfil.`}</Text>
        <Text style={[styles.text3, styles.textTypo]}>10:33</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-454.png")}
        />
      </View>
      <View style={[styles.holaMePresentoSoyElJuga4, styles.holaPosition]}>
        <Text
          style={styles.jordiEspeltTypo}
        >{`Hola Jordi, hemos estudiado tu perfil y visto 
tus highlights y nos encajas. Si te parece 
cerramos oferta contígo!  `}</Text>
        <Text style={[styles.text3, styles.textTypo]}>10:33</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-4542.png")}
        />
      </View>
      <View style={[styles.holaMePresentoSoyElJuga5, styles.holaPosition]}>
        <Text style={styles.jordiEspeltTypo}>{`Perfecto! Quedamos así pues, 
muchas gracias por todo.`}</Text>
        <Text style={[styles.text3, styles.textTypo]}>10:33</Text>
        <Image
          style={[styles.groupIcon, styles.groupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-4542.png")}
        />
      </View>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupIconLayout]}
        contentFit="cover"
        source={require("../assets/mask-group18.png")}
      />
      <View style={styles.rectanglePosition}>
        <View style={[styles.rectangleView, styles.rectanglePosition]} />
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
            source={require("../assets/cellular-connection.png")}
          />
        </View>
        <View style={[styles.starus, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.menuClub, styles.menuClubPosition]}>
        <Image
          style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupLayout]}
          contentFit="cover"
          source={require("../assets/mask-group1.png")}
        />
        <View style={[styles.menuClubChild, styles.menuPosition1]} />
        <View style={[styles.menuClubItem, styles.menuPosition]} />
        <Pressable
          style={[styles.ellipseParent, styles.ellipseParentPosition]}
          onPress={() => navigation.navigate("PerfilDatosPropioClub")}
        >
          <Image
            style={[styles.ellipseIcon, styles.menuPosition1]}
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
        <Image
          style={[styles.menuClubInner, styles.maskGroupIconLayout]}
          contentFit="cover"
          source={require("../assets/group-535.png")}
        />
        <View style={styles.groupContainer}>
          <Pressable
            style={[styles.wrapper, styles.menuPosition1]}
            onPress={() => navigation.navigate("SiguiendoJugadores")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/group-5402.png")}
            />
          </Pressable>
          <Image
            style={[styles.groupChild1, styles.groupLayout]}
            contentFit="cover"
            source={require("../assets/group-5396.png")}
          />
        </View>
        <Image
          style={[styles.menuClubChild1, styles.ellipseParentPosition]}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
        <Image
          style={[styles.lineIcon, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-51.png")}
        />
        <Image
          style={[styles.menuClubChild2, styles.lineIconLayout]}
          contentFit="cover"
          source={require("../assets/line-7.png")}
        />
        <Image
          style={[styles.menuClubChild3, styles.menuPosition]}
          contentFit="cover"
          source={require("../assets/line-61.png")}
        />
      </View>
      <Image
        style={[styles.chatAbiertoChild, styles.iconChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-83.png")}
      />
      <Image
        style={[styles.chatAbiertoItem, styles.menuClubPosition]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildPosition: {
    height: 100,
    left: 0,
    width: 390,
    top: 0,
    position: "absolute",
  },
  iconChildLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  jordiEspeltTypo: {
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    color: Color.wHITESPORTSMATCH,
  },
  groupLayout: {
    height: 23,
    position: "absolute",
  },
  holaPosition1: {
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_mini,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    position: "absolute",
  },
  holaPosition: {
    left: 16,
    backgroundColor: Color.bLACK2SPORTMATCH,
    paddingBottom: Padding.p_5xs,
    paddingRight: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_mini,
    justifyContent: "center",
    alignItems: "flex-end",
    flexDirection: "row",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textTypo: {
    marginLeft: 8,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.bodyBodyXS_size,
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
  },
  groupIconLayout: {
    height: 8,
    width: 11,
    marginLeft: 8,
  },
  maskGroupIconLayout: {
    width: "7.69%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
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
  menuPosition1: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  menuPosition: {
    right: "20.51%",
    width: "19.74%",
    left: "59.74%",
    position: "absolute",
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
    top: "0.64%",
    height: "99.36%",
    bottom: "0%",
    maxHeight: "100%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  groupItem: {
    height: "65.22%",
    width: "2.46%",
    top: "17.39%",
    right: "97.54%",
    bottom: "17.39%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
  },
  jordiEspelt: {
    fontWeight: "700",
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.t4TEXTMICRO,
    lineHeight: 17,
    fontSize: FontSize.t1TextSMALL_size,
    left: "0%",
    position: "absolute",
  },
  jordiEspeltWrapper: {
    height: "73.91%",
    width: "20.67%",
    top: "13.04%",
    right: "63.69%",
    bottom: "13.04%",
    left: "15.64%",
    position: "absolute",
  },
  groupInner: {
    left: 353,
    width: 5,
    top: 0,
  },
  groupParent: {
    height: "23%",
    width: "91.79%",
    top: "60%",
    right: "4.1%",
    bottom: "17%",
    left: "4.1%",
    position: "absolute",
  },
  holaMePresentoSoyElJuga: {
    top: 283,
    left: 114,
  },
  holaMePresentoSoyElJuga1: {
    top: 442,
    left: 115,
  },
  holaMePresentoSoyElJuga2: {
    top: 113,
    width: 359,
    left: 15,
  },
  text3: {
    display: "flex",
    width: 24,
    alignItems: "flex-end",
    marginLeft: 8,
    color: Color.gREY2SPORTSMATCH,
    fontSize: FontSize.bodyBodyXS_size,
  },
  groupIcon: {
    display: "none",
  },
  holaMePresentoSoyElJuga3: {
    top: 213,
    backgroundColor: Color.bLACK2SPORTMATCH,
  },
  holaMePresentoSoyElJuga4: {
    top: 353,
    backgroundColor: Color.bLACK2SPORTMATCH,
  },
  holaMePresentoSoyElJuga5: {
    top: 495,
    backgroundColor: Color.bLACK2SPORTMATCH,
  },
  maskGroupIcon: {
    height: "3.55%",
    top: "6.64%",
    right: "83.59%",
    bottom: "89.81%",
    left: "8.72%",
  },
  rectangleView: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.colorGhostwhite,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
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
    fontSize: FontSize.t2TextSTANDARD_size,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    color: Color.wHITESPORTSMATCH,
    width: 61,
  },
  starus: {
    top: 10,
    height: 24,
    left: 15,
  },
  maskGroupIcon1: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
  },
  maskGroupIcon2: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
  },
  menuClubChild: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.bLACK2SPORTMATCH,
  },
  menuClubItem: {
    backgroundColor: Color.bLACK3SPORTSMATCH,
    left: "59.74%",
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  ellipseIcon: {
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  menuClubInner: {
    height: "37.95%",
    top: "14.1%",
    right: "66.41%",
    bottom: "47.95%",
    left: "25.9%",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    right: "88.06%",
    width: "11.94%",
    left: "0%",
    position: "absolute",
  },
  groupChild1: {
    top: 3,
    left: 234,
    width: 34,
  },
  groupContainer: {
    height: "39.23%",
    width: "68.69%",
    top: "19.74%",
    right: "25.41%",
    bottom: "41.03%",
    left: "5.9%",
    position: "absolute",
  },
  menuClubChild1: {
    right: "44.87%",
    left: "46.15%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  lineIcon: {
    left: "59.74%",
  },
  menuClubChild2: {
    left: "79.62%",
  },
  menuClubChild3: {
    height: "3.85%",
    top: "1.92%",
    bottom: "94.23%",
    left: "59.74%",
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
  chatAbiertoChild: {
    height: "0.59%",
    width: "1.28%",
    top: "96.33%",
    right: "28.97%",
    bottom: "3.08%",
    left: "69.74%",
    maxHeight: "100%",
    position: "absolute",
  },
  chatAbiertoItem: {
    marginLeft: -74,
    top: 831,
    width: 148,
    maxHeight: "100%",
  },
  chatAbierto: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default ChatAbierto1;
