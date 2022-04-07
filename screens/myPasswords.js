import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import PassBox from "../components/passBox";
import globalStyles from "../styles/globalStyles";

export default function MyPasswords() {
  return (
    <View style={globalStyles.container}>
      <PassBox />
    </View>
  );
}
