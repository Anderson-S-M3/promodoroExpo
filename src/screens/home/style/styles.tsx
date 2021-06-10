import { StyleSheet } from "react-native";
import { colors } from "../../../styles/global";

export default StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: colors.black,
  },

  title: {
    color: colors.boldBlue,
    fontSize: 25,
    fontWeight: "bold",

    letterSpacing: 2,
  },
});
