import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles/buttonRetang";

interface ButtonRetangProps {
  title: string;
  disable: boolean;
  onPress?: () => void;
}

const ButtonRetang = ({ title, disable, onPress }: ButtonRetangProps) => {
  if (disable === true) {
    return (
      <TouchableOpacity
        style={styles.buttonDisable}
        disabled={disable}
        onPress={onPress}
      >
        <Text style={styles.textDisable}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRetang;
