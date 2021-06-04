import React from "react";
import { View, Text } from "react-native";

import CircularProgressBar from "../../components/progresBar/CircularProgressBar";

import styles from "./style/styles";
import ButtonRetang from "../../components/btn/ButtonRetang";
import { CountDownContext } from "../../contexts/CountDownContext";
import ButtonLarge from "../../components/btn/ButtonLarge";

interface UseStateObjectProps {
  title: string;
  disable: boolean;
}

export default function index() {
  const { time } = React.useContext(CountDownContext);

  const { startCountDown, pauseCountDown, restartCountDown } =
    React.useContext(CountDownContext);

  const [startReset, setStartReset] = React.useState<UseStateObjectProps>({
    title: "Começar",
    disable: false,
  });
  const [pauseContinue, setPauseContinue] = React.useState<UseStateObjectProps>(
    { title: "Parar", disable: true }
  );

  // Time Zero
  React.useEffect(() => {
    if (time === 0) {
      setStartReset({ ...startReset, title: "Começar", disable: false });
      setPauseContinue({ ...pauseContinue, title: "Parar", disable: true });
    }
  }, [time]);
  function onPressStartReset() {
    // Reset
    if (startReset.title === "Começar") {
      setStartReset({ ...startReset, title: "Reiniciar", disable: true });
      setPauseContinue({ ...pauseContinue, disable: false });
      startCountDown();
    }
    // Start
    if (startReset.title === "Reiniciar") {
      setStartReset({ ...startReset, title: "Começar", disable: false });
      setPauseContinue({ ...pauseContinue, title: "Parar", disable: true });

      restartCountDown();
    }
  }

  function onPressPauseContinue() {
    // Stop
    if (pauseContinue.title === "Parar") {
      setPauseContinue({ ...pauseContinue, title: "Continuar" });
      setStartReset({ ...startReset, disable: false });
      pauseCountDown();
    }
    // Continue
    if (pauseContinue.title === "Continuar") {
      setPauseContinue({ ...pauseContinue, title: "Parar" });
      setStartReset({ ...startReset, title: "Reiniciar", disable: true });

      startCountDown();
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "white" }}>v1</Text>
      </View>

      <View>
        <CircularProgressBar />
      </View>

      <View style={styles.buttonsContainer}>
        {time === 0 ? (
          <>
            <ButtonLarge
              title="Recomeçar"
              disable={false}
              onPress={restartCountDown}
            />
          </>
        ) : (
          <>
            <ButtonRetang
              title={startReset.title}
              disable={startReset.disable}
              onPress={onPressStartReset}
            />
            <View style={{ marginHorizontal: 8 }} />
            <ButtonRetang
              title={pauseContinue.title}
              disable={pauseContinue.disable}
              onPress={onPressPauseContinue}
            />
          </>
        )}
      </View>
    </View>
  );
}
