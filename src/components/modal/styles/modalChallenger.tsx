import { StyleSheet } from "react-native";
import { colors } from "../../../styles/global";

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.grey,

    padding: 30,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 16,
    color: colors.lightBlue,
  },

  text: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 22,
    textAlign: "center",
    color: colors.white,
  },

  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 15,
  },
});

export default styles;
