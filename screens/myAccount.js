import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import globalStyles, { globalColors } from "../styles/globalStyles";

export default function MyAccount({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>My Account</Text>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("ChngSK");
          }}
        >
          <Text style={styles.btnLabel}>Change my secret key</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("VerifySK", { nav: "MyAccount" });
          }}
        >
          <Text style={styles.btnLabel}>Extract my passwords</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("VerifySK", { nav: "DelAcc" });
          }}
        >
          <Text style={styles.btnLabel}>Delete my account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: globalColors.clrPrimary,
    marginVertical: 5,
  },
  btnLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
