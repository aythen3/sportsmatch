import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CrearHighlight = () => {
  return (
    <View style={styles.crearHighlight}>
      <Image
        style={styles.codeBlockPersonaEnCanch}
        contentFit="cover"
        source={require("../assets/code-blockpersona-en-cancha-de-baloncesto-1.png")}
      />
      <Image
        style={[styles.crearHighlightChild, styles.cooliconLayout]}
        contentFit="cover"
        source={require("../assets/group-565.png")}
      />
      <View style={[styles.crearHighlightItem, styles.crearBorder]} />
      <View style={[styles.crearHighlightInner, styles.crearBorder]} />
      <View style={styles.hannahRedingKqyboqrw5wUnspParent}>
        <Image
          style={[
            styles.hannahRedingKqyboqrw5wUnspIcon,
            styles.basketballIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/hannahredingkqyboqrw5wunsplash-22.png")}
        />
        <Image
          style={[
            styles.hannahRedingKqyboqrw5wUnspIcon1,
            styles.hannahIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/hannahredingkqyboqrw5wunsplash-3.png")}
        />
        <Image
          style={[styles.basketballUnsplash1, styles.basketballIconLayout]}
          contentFit="cover"
          source={require("../assets/basketball-unsplash-1.png")}
        />
        <Image
          style={[
            styles.hannahRedingKqyboqrw5wUnspIcon2,
            styles.basketballIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/hannahredingkqyboqrw5wunsplash-4.png")}
        />
        <Image
          style={[styles.basketballJedVillejo1, styles.basketballIconLayout]}
          contentFit="cover"
          source={require("../assets/basketball-jed-villejo-1.png")}
        />
        <Image
          style={[
            styles.hannahRedingKqyboqrw5wUnspIcon3,
            styles.basketballIconPosition,
          ]}
          contentFit="cover"
          source={require("../assets/hannahredingkqyboqrw5wunsplash-5.png")}
        />
        <Image
          style={[styles.basketballUnsplash2, styles.basketballIconPosition]}
          contentFit="cover"
          source={require("../assets/basketball-unsplash-2.png")}
        />
        <Image
          style={[styles.basketballUnsplash31, styles.basketballPosition1]}
          contentFit="cover"
          source={require("../assets/basketball-unsplash-3-1.png")}
        />
        <Image
          style={[styles.basketballJedVillejo2, styles.basketballIconPosition]}
          contentFit="cover"
          source={require("../assets/basketball-jed-villejo-2.png")}
        />
        <Image
          style={[styles.basketballUnsplash32, styles.basketballPosition1]}
          contentFit="cover"
          source={require("../assets/basketball-unsplash-3-2.png")}
        />
        <Image
          style={[styles.basketballMiraKireeva1, styles.basketballPosition]}
          contentFit="cover"
          source={require("../assets/basketball-mira-kireeva-1.png")}
        />
        <Image
          style={[styles.basketballTimMossholder1, styles.basketballPosition1]}
          contentFit="cover"
          source={require("../assets/basketball-tim-mossholder-1.png")}
        />
        <Image
          style={[styles.basketballMiraKireeva11, styles.basketballPosition1]}
          contentFit="cover"
          source={require("../assets/basketball-mira-kireeva-1-1.png")}
        />
        <Image
          style={[styles.basketballMiraKireeva2, styles.basketballPosition]}
          contentFit="cover"
          source={require("../assets/basketball-mira-kireeva-2.png")}
        />
        <Image
          style={[styles.basketballUnsplash21, styles.basketballPosition]}
          contentFit="cover"
          source={require("../assets/basketball-unsplash-2-1.png")}
        />
        <Image
          style={[styles.basketballAnthonyTedja1, styles.basketballPosition]}
          contentFit="cover"
          source={require("../assets/basketball-anthony-tedja-1.png")}
        />
      </View>
      <View style={[styles.siguienteWrapper, styles.groupParentLayout]}>
        <Text style={[styles.siguiente, styles.siguientePosition]}>
          Siguiente
        </Text>
      </View>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={styles.recientesWrapper}>
          <Text style={[styles.recientes, styles.siguientePosition]}>
            Recientes
          </Text>
        </View>
        <Image
          style={[styles.coolicon, styles.cooliconLayout]}
          contentFit="cover"
          source={require("../assets/coolicon6.png")}
        />
      </View>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-621.png")}
      />
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={styles.group}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.batteryPosition]}
              contentFit="cover"
              source={require("../assets/cap1.png")}
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
        style={[styles.lineIcon, styles.cooliconLayout]}
        contentFit="cover"
        source={require("../assets/line-9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cooliconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  crearBorder: {
    opacity: 0.5,
    borderColor: Color.wHITESPORTSMATCH,
    borderStyle: "solid",
    position: "absolute",
  },
  basketballIconLayout: {
    height: 87,
    width: 90,
    top: 0,
    position: "absolute",
  },
  hannahIconPosition: {
    marginLeft: 89.65,
    left: "50%",
  },
  basketballIconPosition: {
    top: 261,
    height: 87,
    width: 90,
    position: "absolute",
  },
  basketballPosition1: {
    top: 87,
    height: 87,
    width: 90,
    position: "absolute",
  },
  basketballPosition: {
    top: 174,
    height: 87,
    width: 90,
    position: "absolute",
  },
  groupParentLayout: {
    height: "2.01%",
    position: "absolute",
  },
  siguientePosition: {
    fontFamily: FontFamily.t4TEXTMICRO,
    fontWeight: "700",
    color: Color.wHITESPORTSMATCH,
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
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
  borderPosition: {
    top: 0,
    height: 12,
  },
  timeLayout: {
    width: 61,
    position: "absolute",
  },
  codeBlockPersonaEnCanch: {
    marginLeft: -180,
    top: 101,
    width: 360,
    height: 490,
    left: "50%",
    position: "absolute",
  },
  crearHighlightChild: {
    height: "1.78%",
    width: "3.79%",
    top: "7.46%",
    right: "91.33%",
    bottom: "90.76%",
    left: "4.87%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  crearHighlightItem: {
    top: 345,
    left: 160,
    borderTopWidth: 2,
    width: 52,
    height: 2,
  },
  crearHighlightInner: {
    top: 320,
    left: 185,
    borderRightWidth: 2,
    width: 2,
    height: 52,
  },
  hannahRedingKqyboqrw5wUnspIcon: {
    marginLeft: -179.35,
    left: "50%",
  },
  hannahRedingKqyboqrw5wUnspIcon1: {
    height: 87,
    width: 90,
    top: 0,
    position: "absolute",
  },
  basketballUnsplash1: {
    left: 90,
  },
  hannahRedingKqyboqrw5wUnspIcon2: {
    marginLeft: -179.35,
    left: "50%",
  },
  basketballJedVillejo1: {
    left: 179,
  },
  hannahRedingKqyboqrw5wUnspIcon3: {
    marginLeft: 89.65,
    left: "50%",
  },
  basketballUnsplash2: {
    left: 90,
  },
  basketballUnsplash31: {
    left: 0,
  },
  basketballJedVillejo2: {
    left: 179,
  },
  basketballUnsplash32: {
    left: 269,
  },
  basketballMiraKireeva1: {
    left: 0,
  },
  basketballTimMossholder1: {
    left: 90,
  },
  basketballMiraKireeva11: {
    left: 179,
  },
  basketballMiraKireeva2: {
    left: 269,
  },
  basketballUnsplash21: {
    left: 90,
  },
  basketballAnthonyTedja1: {
    left: 179,
  },
  hannahRedingKqyboqrw5wUnspParent: {
    marginLeft: -179,
    top: 657,
    width: 359,
    height: 348,
    left: "50%",
    position: "absolute",
  },
  siguiente: {
    textAlign: "right",
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  siguienteWrapper: {
    width: "27.18%",
    top: "7.58%",
    right: "3.85%",
    bottom: "90.4%",
    left: "68.97%",
  },
  recientes: {
    fontSize: FontSize.t1TextSMALL_size,
    lineHeight: 17,
    textAlign: "left",
    color: Color.wHITESPORTSMATCH,
  },
  recientesWrapper: {
    height: "100%",
    width: "92.21%",
    right: "7.79%",
    bottom: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  coolicon: {
    height: "34.12%",
    width: "12.99%",
    top: "35.29%",
    right: "0%",
    bottom: "30.59%",
    left: "87.01%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  groupParent: {
    width: "19.74%",
    top: "73.34%",
    right: "76.15%",
    bottom: "24.64%",
    left: "4.1%",
  },
  groupIcon: {
    top: 606,
    left: 339,
    width: 35,
    height: 35,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.bLACK1SPORTSMATCH,
    width: 390,
  },
  border: {
    right: 2,
    borderRadius: 3,
    borderWidth: 1.1,
    width: 22,
    opacity: 0.35,
    height: 12,
    borderColor: Color.wHITESPORTSMATCH,
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
    color: Color.wHITESPORTSMATCH,
    fontSize: FontSize.t2TextSTANDARD_size,
  },
  starus: {
    top: 10,
    left: 15,
    height: 24,
  },
  lineIcon: {
    marginLeft: -74,
    top: 831,
    width: 148,
    left: "50%",
  },
  crearHighlight: {
    borderRadius: Border.br_21xl,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bLACK1SPORTSMATCH,
  },
});

export default CrearHighlight;
