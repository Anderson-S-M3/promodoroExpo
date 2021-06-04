import { StyleSheet } from "react-native";

export const colors = {
  white: "#f2f3f5",
  black: "#090a0a",
  black2: "#0e0f0f",
  lightBlue: "#8eb1df",
  mediumBlue: "#6686bb",
  boldBlue: "#5c3cbd",
  darkBlue: "#191033",
};

export const global = StyleSheet.create({
  container: {
    height: "100%",

    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 25,

    backgroundColor: colors.black,
  },
});
