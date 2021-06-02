import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CountDownContext } from "../../contexts/CountDownContext";
import { colors } from "../../styles/global";

const ButtonRetang = ({ title, change }: any) => {
  const { startCountDown, pauseCountDown, restartCountDown } =
    React.useContext(CountDownContext);

  const [startStop, setStartStop] = React.useState("Começar");

  function onPressStartStop() {
    setStartStop(startStop === "Começar" ? "Reiniciar" : "Começar");

    if (startStop === "Começar") {
      startCountDown();
    } else if (startStop === "Reiniciar") {
      restartCountDown();
      pauseCountDown();
    }
  }

  function onPressStop() {
    pauseCountDown();
  }

  if (change === "StartStop") {
    return (
      <TouchableOpacity onPress={onPressStartStop} style={styles.button}>
        <Text style={styles.text}>{startStop}</Text>
      </TouchableOpacity>
    );
  }

  if (change === "Stop") {
    return (
      <TouchableOpacity onPress={onPressStop} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: colors.boldBlue,
    alignItems: "center",
  },

  text: {
    letterSpacing: 1,
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.white,
  },
});

export default ButtonRetang;
