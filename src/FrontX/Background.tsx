import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundImage: "#000",
    filter: "blur(40px)",
  },
});

const Background = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#8B918D" }} />
      <View style={styles.container} />
    </View>
  );
};

export default Background;
