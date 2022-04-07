import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./routes/drawer";
import account from "./utils/account";
import CreateAcc from "./screens/createAcc";

export default function App() {
  return (
    <NavigationContainer>
      <CreateAcc />
      {/* {account.sk === "" ? <CreateAcc /> : <MyDrawer />} */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
