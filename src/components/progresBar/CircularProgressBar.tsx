import React from "react";
import { Text, Dimensions } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";
import { CountDownContext } from "../../contexts/CountDownContext";

import { colors } from "../../styles/global";
import styles from "./styles/circularProgressBar";

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
      lineCap="round"
      renderCap={({ center }) => (
        <Circle cx={center.x} cy={center.y} r="8" fill={colors.lightBlue} />
      )}
    >
      {() => <Text style={styles.title}>{minutos + ":" + segundos}</Text>}
    </AnimatedCircularProgress>
  );
};

export default CircularProgressBar;
