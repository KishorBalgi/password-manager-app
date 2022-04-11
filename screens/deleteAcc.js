import * as React from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import NativeDevSettings from "react-native/Libraries/NativeModules/specs/NativeDevSettings";
import CustomButton from "../components/customButton";
import globalStyles from "../styles/globalStyles";
import { _deleteAcc } from "../utils/store";

export default function DelAcc({ navigation }) {
  function handleDeleteAcc() {
    if (_deleteAcc()) {
      NativeDevSettings.reload();
    } else {
      console.log("Something went wrong!!!");
    }
  }
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.form }}>
      <Text style={globalStyles.title}>Delete Account</Text>
      <Text style={globalStyles.note}>
        Note: Once you delete your account it cannot be restored. If you want to
        save your passwords you can do so by extracting them to a .txt file.
        Please confirm to delete.
      </Text>
      <CustomButton title={"Confirm"} onPress={handleDeleteAcc} />
    </View>
  );
}
