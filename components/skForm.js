import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CustomButton from "./customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";
import { hashSK } from "../utils/SK";

export default function SKForm({ setAcc }) {
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.form }}>
      <Text style={globalStyles.title}>Create Account</Text>
      <Text style={globalStyles.note}>
        Please remember this secret key as you will need it to save and retrive
        your passwords.
      </Text>
      <Formik
        initialValues={{ sk: "" }}
        onSubmit={(values, actions) => {
          hashSK(values.sk);
          actions.resetForm();
          setAcc(true);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={{ ...globalStyles.input, ...globalStyles.formInp }}
              placeholder="Enter a secret key"
              onChangeText={props.handleChange("sk")}
              value={props.values.sk}
            />
            <CustomButton title={"Create"} onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
