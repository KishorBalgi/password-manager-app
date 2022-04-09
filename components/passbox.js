import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalColors } from "../styles/globalStyles";

export default function PassBox({ item }) {
  return (
    <View style={styles.passBox}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.pass}>{item.pass}</Text>
    </View>
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
