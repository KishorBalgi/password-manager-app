import * as React from "react";
import { StyleSheet, View, Text, TextInput, ScrollView } from "react-native";
import CustomButton from "../components/customButton";
import globalStyles from "../styles/globalStyles";
import { Formik } from "formik";

export default function ChangeSK({ navigation }) {
  return (
    <View style={{ ...globalStyles.container, ...globalStyles.form }}>
      <Text style={globalStyles.title}>Update Secret Key</Text>
      <Formik
        initialValues={{ oldSK: "", newSK: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          navigation.navigate("VerifyPassword");
        }}
      >
        {(props) => (
          <ScrollView>
            <TextInput
              style={{ ...globalStyles.input, ...globalStyles.formInp }}
              placeholder="Enter your current secret key"
              onChangeText={props.handleChange("oldSK")}
              value={props.values.oldSK}
            />
            <TextInput
              style={{ ...globalStyles.input, ...globalStyles.formInp }}
              placeholder="Enter your new secret key"
              onChangeText={props.handleChange("newSK")}
              value={props.values.newSK}
            />
            <CustomButton title={"Update"} onPress={props.handleSubmit} />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}
