import * as React from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import CustomButton from "../components/customButton";
import globalStyles from "../styles/globalStyles";

export default function DelAcc({ navigation }) {
  function handleDeleteAcc() {
    console.log("DELETE");
  }
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.form }}>
      <Text style={globalStyles.title}>Delete Account</Text>
      <Text style={styles.note}>
        Note: Once you delete your account it cannot be restored. If you want to
        save your passwords you can do so by extracting them to a .txt file.
        Please confirm to delete.
      </Text>
      <CustomButton title={"Confirm"} onPress={handleDeleteAcc} />
    </View>
  );
}

const styles = StyleSheet.create({
  note: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "red",
    paddingVertical: 5,
  },
});