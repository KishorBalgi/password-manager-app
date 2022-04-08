import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import MyDrawer from "./routes/drawer";
import CreateAcc from "./screens/createAcc";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [acc, setAcc] = useState(null);
  useEffect(() => {
    AsyncStorage.setItem("sk", "");
    AsyncStorage.getItem("sk", (err, res) => {
      if (!res) setAcc(false);
      else setAcc(true);
    });
  }, []);
  // function account() {
  //   let bol;
  //   AsyncStorage.setItem("sk", "");
  //   AsyncStorage.getItem("sk", (err, res) => {
  //     if (res === "") bol = false;
  //     bol = true;
  //   });
  //   return bol;
  // }
  return (
    <NavigationContainer>
      {/* {acc === undefined ? <AppLoading /> : null} */}

      {acc === undefined ? (
        <AppLoading />
      ) : acc ? (
        <MyDrawer />
      ) : (
        <CreateAcc setAcc={setAcc} />
      )}
    </NavigationContainer>
  );
}
