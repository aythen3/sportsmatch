import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const LineVector = () => {
  return <View style={styles.lineView} />;
};

const styles = StyleSheet.create({
  lineView: {
    borderStyle: "solid",
    borderColor: Color.colorDarkturquoise,
    borderWidth: 5,
    flex: 1,
    width: "100%",
    height: 5,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
});

export default LineVector;
