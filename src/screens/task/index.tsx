import React from "react";
import { View, Text } from "react-native";

import { global } from "../../styles/global";
import styles from "./style/styles";

export default function index() {
  return (
    <View style={global.container}>
      <View style={styles.container}>
        <Text>Tasks</Text>
      </View>
    </View>
  );
}
