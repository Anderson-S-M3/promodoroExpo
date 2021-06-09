import { StyleSheet } from "react-native";

export const colors = {
  white: "#f2f3f5",
  black: "#000000",

  grey: "#090a0a",
  boldGrey: "#373737",

  lightBlue: "#6374ff",
  boldBlue: "#4953B8",
  darkBlue: "#110b24",
};

export const global = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 16,
    paddingBottom: 25,

    backgroundColor: colors.black,
  },
});
