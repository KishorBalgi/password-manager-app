import * as React from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import CustomButton from "./customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";
import { _encrypt } from "../utils/store";
export default function PassForm() {
  return (
    <View style={{ ...globalStyles.container, ...styles.form }}>
      <Text style={globalStyles.title}>Add Password</Text>
      <Formik
        initialValues={{ name: "", pass: "", sk: "" }}
        onSubmit={(values, actions) => {
          _encrypt(values);
          // console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <ScrollView>
            <TextInput
              style={{ ...globalStyles.input, ...styles.formInp }}
              placeholder="Enter a title"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              style={{ ...globalStyles.input, ...styles.formInp }}
              placeholder="Enter the password"
              onChangeText={props.handleChange("pass")}
              value={props.values.pass}
            />
            <TextInput
              style={{ ...globalStyles.input, ...styles.formInp }}
              placeholder="Enter your secret key"
              onChangeText={props.handleChange("sk")}
              value={props.values.sk}
            />
            <CustomButton title={"Add"} onPress={props.handleSubmit} />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
  },
  formInp: {
    marginVertical: 20,
  },
});
