import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const MENUCLUB = () => {
  return (
    <View style={styles.menuClub}>
      <Image
        style={[styles.maskGroupIcon, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <Image
        style={[styles.maskGroupIcon1, styles.maskGroupPosition]}
        contentFit="cover"
        source={require("../assets/mask-group1.png")}
      />
      <View style={[styles.menuClubChild, styles.menuPosition]} />
      <View style={styles.groupParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/group-5405.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/group-5352.png")}
        />
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/group-593.png")}
        />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-5398.png")}
        />
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/mask-group19.png")}
        />
      </View>
      <Image
        style={[styles.menuClubItem, styles.menuPosition]}
        contentFit="cover"
        source={require("../assets/line-7.png")}
      />
      <View style={[styles.menuClubInner, styles.maskGroupPosition]}>
        <Image
          style={styles.lineIcon}
          contentFit="cover"
          source={require("../assets/line-62.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maskGroupPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  menuPosition: {
    bottom: "0%",
    position: "absolute",
  },
  maskGroupIcon: {
    top: "20.51%",
    right: "5.38%",
    bottom: "34.62%",
    left: "85.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "8.97%",
    height: "44.87%",
    overflow: "hidden",
  },
  maskGroupIcon1: {
    top: "21.79%",
    right: "9.74%",
    bottom: "33.33%",
    left: "81.28%",
    maxHeight: "100%",
    maxWidth: "100%",
    width: "8.97%",
    height: "44.87%",
    overflow: "hidden",
  },
  menuClubChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    left: "0%",
    backgroundColor: Color.bLACK2SPORTMATCH,
    width: "100%",
  },
  frameChild: {
    width: 32,
    height: 31,
  },
  frameItem: {
    width: 30,
    height: 30,
    marginLeft: 44,
  },
  frameInner: {
    width: 35,
    height: 35,
    marginLeft: 44,
  },
  groupIcon: {
    width: 34,
    height: 23,
    marginLeft: 44,
  },
  groupParent: {
    top: 17,
    left: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  menuClubItem: {
    height: "99.36%",
    top: "0.64%",
    left: "80.13%",
    width: 0,
    maxHeight: "100%",
  },
  lineIcon: {
    width: 77,
    maxHeight: "100%",
  },
  menuClubInner: {
    top: 0,
    left: 313,
    backgroundColor: Color.bLACK3SPORTSMATCH,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_11xs,
  },
  menuClub: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flex: 1,
    height: 78,
    width: "100%",
  },
});

export default MENUCLUB;
