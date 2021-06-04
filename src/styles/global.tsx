import { StyleSheet } from "react-native";

export const colors = {
  white: "#ffffff",
  black: "#111212",
  black2: "#090a0a",
  grey: "#373737",
  lightBlue: "#8eb1df",
  semiLightBlue: "#759ace",
  mediumBlue: "#6686bb",
  boldBlue: "#6e7dff",
  darkBlue: "#39415b",
  brown: "#866a6c",
};

export const global = StyleSheet.create({
  container: {
    height: "100%",

    paddingTop: 10,
    paddingHorizontal: 16,
    paddingBottom: 25,

    backgroundColor: colors.black,
  },
});
