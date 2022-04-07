import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CustomButton from "./customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";
import { addSK } from "../utils/createSK";

export default function SKForm() {
  return (
    <View style={{ ...globalStyles.container, ...styles.form }}>
      <Text style={globalStyles.title}>Create Account</Text>
      <Formik
        initialValues={{ sk: "" }}
        onSubmit={(values, actions) => {
          addSK(values.sk);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={{ ...globalStyles.input, ...styles.formInp }}
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

const styles = StyleSheet.create({
  form: {
    marginTop: 80,
  },
  formInp: {
    marginVertical: 20,
  },
});
