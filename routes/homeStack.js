import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
