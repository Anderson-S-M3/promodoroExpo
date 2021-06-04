import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { CountDownStorage } from "./src/contexts/CountDownContext";

import Home from "./src/screens/home";

import { global } from "./src/styles/global";

export default function Apps() {
  return (
    <>
      <StatusBar hidden={true} />
      <CountDownStorage>
        <View style={global.container}>
          <Home />
        </View>
      </CountDownStorage>
    </>
  );
}
