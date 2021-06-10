import React from "react";
import { Text, View } from "react-native";
import ModalChallenger from "../../components/modal/ModalChallenger";
import CircularProgressBar from "../../components/progresBar/CircularProgressBar";
import { CountDownContext } from "../../contexts/CountDownContext";

import { colors, global } from "../../styles/global";

import PlayButton from "../../components/button/PlayButton";
import ResetButton from "../../components/button/RestButton";

import styles from "./style/styles";

export default function index() {
  const { startCountDown, restartCountDown, active, time } =
    React.useContext(CountDownContext);

  function onPresStartCountDown() {
    startCountDown();
  }

  function onPressResetCountDown() {
    restartCountDown();
  }

  return (
    <>
      <View style={global.container}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Promodoro</Text>
          </View>
          <View>
            <CircularProgressBar />
          </View>
          <View>
            {!active && time > 0 ? (
              <PlayButton onPress={onPresStartCountDown} />
            ) : active && time !== 0 ? (
              <ResetButton onPress={onPressResetCountDown} />
            ) : (
              <ModalChallenger />
            )}
          </View>
        </View>
      </View>
    </>
  );
}
