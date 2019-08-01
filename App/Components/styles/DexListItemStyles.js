import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignContent: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  numberContainer: {
    paddingHorizontal: 10,
  },
  number: {
    fontSize: 14,
    fontFamily: "Verdana",
  },
  titleContainer: {},
  title: {
    fontSize: 14,
    fontFamily: "Verdana",
    textTransform: "capitalize",
  },
});

export default styles;
