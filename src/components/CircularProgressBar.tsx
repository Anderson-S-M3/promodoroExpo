import React from "react";
import { Text, Dimensions, StyleSheet } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import { CountDownContext } from "../contexts/CountDownContext";

import { colors } from "../styles/global";

const CircularProgressBar = () => {
  const { time, timer, minutos, segundos } = React.useContext(CountDownContext);
  const { width } = Dimensions.get("window");

  const size: number = width - 80;
  const percent: number = (time * 100) / timer;

  return (
    <AnimatedCircularProgress
      rotation={360}
      size={size}
      width={15}
      fill={100 - percent}
      tintColor={colors.boldBlue}
      backgroundColor={colors.black}
      style={styles.circle}
      renderCap={({ center }) => (
        <Circle cx={center.x} cy={center.y} r="8" fill={colors.lightBlue} />
      )}
    >
      {() => <Text style={styles.title}>{minutos + ":" + segundos}</Text>}
    </AnimatedCircularProgress>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    color: colors.white,
  },

  circle: {
    borderRadius: 999,
    elevation: 25,
    backgroundColor: colors.black2,
    borderWidth: 6,
    borderColor: colors.black2,
  },
});

export default CircularProgressBar;
