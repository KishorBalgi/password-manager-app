import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";
import PassBox from "../components/passbox";

export default function MyPasswords() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>My Passwords</Text>
      <PassBox />
    </View>
  );
}
