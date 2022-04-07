import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "../screens/myAccount";

const Stack = createNativeStackNavigator();

const MyAccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyAccount" component={MyAccount} />
    </Stack.Navigator>
  );
};

export default MyAccountStack;
