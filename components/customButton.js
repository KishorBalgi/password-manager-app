import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { globalColors } from "../styles/globalStyles";
export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: globalColors.clrPrimary,
  },
  btnTxt: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
