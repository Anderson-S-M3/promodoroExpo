import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { CountDownStorage } from "./src/contexts/CountDownContext";

import Home from "./src/screens/home";

import { colors } from "./src/styles/global";

export default function Apps() {
  return (
    <CountDownStorage>
      <View style={styles.container}>
        <Home />
      </View>
      <StatusBar hidden={true} />
    </CountDownStorage>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",

    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 25,

    backgroundColor: colors.black,
  },
});
