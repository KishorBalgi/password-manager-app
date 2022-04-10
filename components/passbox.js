import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalColors } from "../styles/globalStyles";

export default function PassBox({ item, navigation }) {
  return (
    <TouchableOpacity
      style={styles.passBox}
      onPress={() => navigation.navigate("PasswordEdit", item)}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.pass}>{item.pass}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  passBox: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: globalColors.clrPrimary,
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  pass: {
    textAlign: "center",
    fontSize: 16,
    backgroundColor: "#ddd",
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: 5,
  },
});
