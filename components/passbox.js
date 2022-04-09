import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalColors } from "../styles/globalStyles";

export default function PassBox() {
  return (
    <View style={styles.passBox}>
      <Text style={styles.title}>Google</Text>
      <Text style={styles.pass}>sjldkgjf</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  passBox: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: globalColors.clrPrimary,
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
