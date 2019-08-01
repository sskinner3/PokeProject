import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#cc0000",
    height: Platform.OS === "ios" ? 70 : 50,
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    color: "#f2f2f2",
    fontFamily: "Verdana",
    fontSize: 24,
    textAlign: "center",
    textTransform: "capitalize",
  },
});

export default styles;
