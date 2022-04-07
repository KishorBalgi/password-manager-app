import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import CustomButton from "./customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";

export default function PassForm() {
  return (
    <View style={{ ...globalStyles.container, ...styles.form }}>
      <Text style={globalStyles.title}>Add Password</Text>
      <Formik
        initialValues={{ name: "", pass: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={{ ...globalStyles.input, ...styles.formInp }}
              placeholder="Enter the name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              style={{ ...globalStyles.input, ...styles.formInp }}
              placeholder="Enter the password"
              onChangeText={props.handleChange("pass")}
              value={props.values.pass}
            />
            <CustomButton title={"Add"} onPress={props.handleSubmit} />
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
