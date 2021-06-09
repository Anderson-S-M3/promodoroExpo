import React from "react";
import { Modal, View, Text } from "react-native";

import { Body, Eye } from "../../utils/icons/iconsChallenger";

import challenges from "../../utils/challenges.json";

import FailedButton from "../button/FailedButton";
import SucessButton from "../button/SucessButton";

import styles from "./styles/modalChallenger";
import { CountDownContext } from "../../contexts/CountDownContext";

interface IChallenges {
  type: string;
  description: string;
}

export default function CompletedChalenger() {
  const { restartCountDown } = React.useContext(CountDownContext);
  const [showModal, setShowModal] = React.useState<boolean>(true);
  const [challenger, setChallenger] = React.useState<IChallenges>();

  React.useEffect(() => {
    setChallenger(challenges[Math.floor(Math.random() * challenges.length)]);
  }, [showModal]);

  function closeModal() {
    setShowModal(false);
    restartCountDown();
  }

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <View style={styles.modal}>
        <View style={styles.container}>
          {challenger?.type === "eye" ? <Eye /> : <Body />}
          <Text style={styles.title}>Novo Desafio</Text>
          <Text style={styles.text}>{challenger?.description}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <FailedButton onPress={closeModal} />
          <SucessButton onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
}
