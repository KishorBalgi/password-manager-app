import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPasswords from "../screens/myPasswords";
import VerifySKForm from "../components/verifySKForm";

const Stack = createNativeStackNavigator();

const MyPasswordsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="VerifyPassword" component={VerifySKForm} />
      <Stack.Screen name="MyPasswords" component={MyPasswords} />
    </Stack.Navigator>
  );
};

export default MyPasswordsStack;
