import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>About</Text>
      <Text>
        This is a simple app to securely store and manage your passwords. The
        passwords are encrypted and stored in a file on your device. The
        password are encrypted using a secret key which only you know, this
        makes it hard to decipher the passwords without the secret key.
      </Text>
    </View>
  );
}
