import { StyleSheet } from "react-native";
import { colors } from "../../../styles/global";

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: colors.boldBlue,
    alignItems: "center",
  },

  buttonDisable: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
  },

  text: {
    letterSpacing: 1,
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.white,
  },

  textDisable: {
    letterSpacing: 1,
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.boldBlue,
  },
});

export default styles;
