import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPasswords from "../screens/myPasswords";
import VerifySKForm from "../components/verifySKForm";
import PassEdit from "../screens/passEdit";

const Stack = createNativeStackNavigator();

const MyPasswordsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="VerifyPassword"
        component={VerifySKForm}
        initialParams={{ nav: "MyPasswords" }}
      />
      <Stack.Screen name="MyPasswords" component={MyPasswords} />
      <Stack.Screen name="PasswordEdit" component={PassEdit} />
    </Stack.Navigator>
  );
};

export default MyPasswordsStack;
