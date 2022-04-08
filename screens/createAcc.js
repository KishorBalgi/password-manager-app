import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";
import SKForm from "../components/skForm";

export default function CreateAcc({ setAcc }) {
  return (
    <View style={globalStyles.container}>
      <SKForm setAcc={setAcc} />
    </View>
  );
}
