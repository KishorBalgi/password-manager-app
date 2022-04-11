import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>About</Text>
      <Text style={globalStyles.txtBody}>
        This is a simple app to securely store and manage your passwords. All
        your passwords are encrypted using a secret key, the secret key is
        hashed with a public key using the SHA256 alogithm. This make it
        impossible to decrypt. All the passwords are encrypted with the secret
        key and a public key, using the AES algorithm from crypto-js. The
        passwords can be retrived only using the secret key. All the passwords
        are stored on the device using AsyncStorage.
      </Text>
    </View>
  );
}
