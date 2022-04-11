import * as React from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import CustomButton from "../components/customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";
import { _updatePass } from "../utils/store";

export default function PassEdit({ route, navigation }) {
  async function handleDelete() {
    if (await _updatePass(route.params.id, route.params.sk, "delete"))
      navigation.goBack();
  }
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.form }}>
      <Text style={globalStyles.title}>Update Password</Text>
      <Formik
        initialValues={{
          id: route.params.id,
          name: route.params.name,
          pass: route.params.pass,
        }}
        onSubmit={async (values, actions) => {
          if (await _updatePass(values, route.params.sk)) navigation.goBack();
        }}
      >
        {(props) => (
          <ScrollView>
            <TextInput
              style={{ ...globalStyles.input, ...globalStyles.formInp }}
              placeholder="Enter a title"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            />
            <TextInput
              style={{ ...globalStyles.input, ...globalStyles.formInp }}
              placeholder="Enter the password"
              onChangeText={props.handleChange("pass")}
              value={props.values.pass}
            />
            <CustomButton title={"Update"} onPress={props.handleSubmit} />
            <CustomButton title={"Delete"} onPress={handleDelete} />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
