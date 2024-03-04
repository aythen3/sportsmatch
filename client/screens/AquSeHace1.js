import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AquSeHace1 = () => {
  return <Text style={styles.aquSeHace}>Aquí se hace match</Text>;
};

const styles = StyleSheet.create({
  aquSeHace: {
    fontSize: FontSize.size_31xl,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.colorDarkturquoise,
    textAlign: "left",
  },
});

export default AquSeHace1;
