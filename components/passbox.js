import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { globalColors } from "../styles/globalStyles";

export default function PassBox() {
  return (
    <View style={styles.passBox}>
      <Text style={styles.name}>Google</Text>
      <TextInput editable={false} value="asdfghjkl" style={styles.pass} />
    </View>
  );
}
const styles = StyleSheet.create({
  passBox: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: globalColors.clrPrimary,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    textAlign: "center",
  },
  pass: {
    fontSize: 18,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: "#ccc",
    textAlign: "center",
    color: "#000",
  },
});
