import { StyleSheet } from "react-native";

import { colors } from "../../../styles/global";

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

export default styles;
