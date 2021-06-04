import { StyleSheet } from "react-native";
import { colors } from "../../../styles/global";

const styles = StyleSheet.create({
  button: {
    width: "100%",
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: colors.boldBlue,
    alignItems: "center",
  },

  buttonDisable: {
    width: "100%",
    flex: 1,
    borderRadius: 8,
    paddingVertical: 16,
    backgroundColor: colors.darkBlue,
    alignItems: "center",
  },

  text: {
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: colors.white,

    paddingVertical: 5,
  },

  textDisable: {
    letterSpacing: 1,
    fontSize: 16,
    textTransform: "capitalize",
    color: colors.boldBlue,
  },
});

export default styles;
