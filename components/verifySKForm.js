import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CustomButton from "./customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";
import { _validateSK } from "../utils/SK";

export default function VerifySKForm({ navigation }) {
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.form }}>
      <Text style={globalStyles.title}>Verify your Secret Key</Text>
      <Formik
        initialValues={{ sk: "" }}
        onSubmit={async (values, actions) => {
          if (await _validateSK(values.sk))
            navigation.navigate("MyPasswords", values);
          else console.log("Invalid SK!!!");
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={{ ...globalStyles.input, ...globalStyles.formInp }}
              placeholder="Enter your secret key"
              onChangeText={props.handleChange("sk")}
              value={props.values.sk}
            />
            <CustomButton title={"Verify"} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
