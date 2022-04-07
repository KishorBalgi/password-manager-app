import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";
import PassForm from "../components/passForm";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <PassForm />
    </View>
  );
}
