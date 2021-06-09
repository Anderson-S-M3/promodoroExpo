import { StyleSheet } from "react-native";

export const colors = {
  white: "#f2f3f5",
  black: "#090a0a",

  grey: "#121212",
  boldGrey: "#373737",

  lightBlue: "#5864dd",
  boldBlue: "#5c3cbd",
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
