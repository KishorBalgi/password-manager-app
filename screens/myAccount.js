import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function MyAccount() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>My Account</Text>
    </View>
  );
}
