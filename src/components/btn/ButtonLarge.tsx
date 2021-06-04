import React from "react";
import { Text, TouchableOpacity } from "react-native";

import styles from "./styles/buttonLarge";

interface ButtonLargeProps {
  title: string;
  disable: boolean;
  onPress?: () => void;
}

const ButtonLarge = ({ title, disable, onPress }: ButtonLargeProps) => {
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
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonLarge;
