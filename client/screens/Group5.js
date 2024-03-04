import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Group5 = () => {
  return (
    <View style={styles.groupParent}>
      <Image
        style={styles.groupChild}
        contentFit="cover"
        source={require("../assets/group-757.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChild: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 198,
    height: 198,
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 198,
  },
});

export default Group5;
