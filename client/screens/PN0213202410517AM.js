import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";

const PN0213202410517AM = () => {
  return (
    <View style={styles.pn0213202410517Am}>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle.png")}
      />
      <Text style={styles.autolayoutOk}>AUTOLAYOUT OK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    top: 0,
    left: 0,
    width: 390,
    position: "absolute",
    height: 36,
  },
  autolayoutOk: {
    top: 8,
    left: 26,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.bLACK1SPORTSMATCH,
    textAlign: "center",
    width: 347,
    position: "absolute",
  },
  pn0213202410517Am: {
    flex: 1,
    width: "100%",
    height: 36,
  },
});

export default PN0213202410517AM;
