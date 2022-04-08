import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./routes/drawer";

export default async function App() {
  // async function account() {
  //   AsyncStorage.getItem("sk", (err, res) => {
  //     if (!res) return false;
  //     console.log(res);
  //     return true;
  //   });
  // }
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
