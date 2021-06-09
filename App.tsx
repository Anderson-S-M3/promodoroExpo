import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { CountDownStorage } from "./src/contexts/CountDownContext";

import { colors } from "./src/styles/global";
import Navigator from "./src/components/navigator/Navigator";

export default function Apps() {
  return (
    <>
      <CountDownStorage>
        <SafeAreaView>
          <StatusBar
            backgroundColor={colors.black}
            style="light"
            translucent={false}
            hidden={true}
          />
          <Navigator />
        </SafeAreaView>
      </CountDownStorage>
    </>
  );
}
