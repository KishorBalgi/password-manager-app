import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function MyPasswords() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>My Passwords</Text>
    </View>
  );
}
