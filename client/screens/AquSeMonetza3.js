import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const AquSeMonetza3 = () => {
  return <Text style={styles.aquSeMonetza}>Aquí se monetíza</Text>;
};

const styles = StyleSheet.create({
  aquSeMonetza: {
    fontSize: FontSize.size_31xl,
    fontWeight: "500",
    fontFamily: FontFamily.t4TEXTMICRO,
    color: Color.colorDarkturquoise,
    textAlign: "left",
  },
});

export default AquSeMonetza3;
