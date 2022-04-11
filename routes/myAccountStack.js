import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "../screens/myAccount";
import ChangeSK from "../screens/changeSK";
import VerifySKForm from "../components/verifySKForm";
import DelAcc from "../screens/deleteAcc";

const Stack = createNativeStackNavigator();

const MyAccountStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyAccount" component={MyAccount} />
      <Stack.Screen name="ChngSK" component={ChangeSK} />
      <Stack.Screen name="VerifySK" component={VerifySKForm} />
      <Stack.Screen name="DelAcc" component={DelAcc} />
    </Stack.Navigator>
  );
};

export default MyAccountStack;
