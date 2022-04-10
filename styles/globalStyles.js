import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  nestedCont: { flex: 1 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  input: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 6,
  },
  txtBody: {
    lineHeight: 25,
    fontSize: 18,
    textAlign: "justify",
  },
  form: {
    justifyContent: "center",
  },
  formInp: {
    marginVertical: 20,
  },
});
export default globalStyles;

export const globalColors = {
  clrPrimary: "#29B6F6",
};
