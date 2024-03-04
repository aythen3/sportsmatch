import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={[styles.groupChild, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-4333.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group14.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  groupChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
  },
  groupIcon: {
    height: "55.1%",
    width: "71.43%",
    top: "23.78%",
    right: "14.8%",
    bottom: "21.12%",
    left: "13.78%",
    opacity: 0.9,
  },
  groupParent: {
    flex: 1,
    height: 196,
    width: "100%",
  },
});

export default Group;
