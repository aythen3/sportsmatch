import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const Vector = () => {
  return <View style={styles.vectorView} />;
};

const styles = StyleSheet.create({
  vectorView: {
    borderStyle: "solid",
    borderColor: Color.colorDarkturquoise,
    borderWidth: 5,
    flex: 1,
    width: "100%",
    height: 2303,
  },
});

export default Vector;
