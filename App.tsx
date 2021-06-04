import React from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CountDownStorage } from "./src/contexts/CountDownContext";

import Home from "./src/screens/home";

import { global, colors } from "./src/styles/global";

export default function Apps() {
  return (
    <>
      <SafeAreaView>
        <StatusBar
          backgroundColor={colors.black}
          style="light"
          translucent={false}
        />
        <CountDownStorage>
          <View style={global.container}>
            <Home />
          </View>
        </CountDownStorage>
      </SafeAreaView>
    </>
  );
}
