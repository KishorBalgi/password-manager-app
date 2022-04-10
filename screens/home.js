import React, { useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";
import PassForm from "../components/passForm";

export default function Home({ navigation }) {
  useEffect(() => {}, []);
  return (
    <View style={globalStyles.container}>
      <PassForm />
    </View>
  );
}
