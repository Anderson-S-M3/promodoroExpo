import React from "react";
import { View, Text } from "react-native";

import CircularProgressBar from "../../components/CircularProgressBar";

import styles from "./styles";
import ButtonRetang from "../../components/btn/ButtonRetang";

export default function index() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white" }}>v1</Text>
      </View>

      <View>
        <CircularProgressBar />
      </View>

      <View style={styles.buttonsContainer}>
        <ButtonRetang change="StartStop" />
        <View style={{ marginHorizontal: 8 }} />
        <ButtonRetang title="Pausar" change="Stop" />
      </View>
    </View>
  );
}
