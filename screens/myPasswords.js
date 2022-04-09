import * as React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, TextInput, FlatList } from "react-native";
import globalStyles from "../styles/globalStyles";
import Loading from "../components/loading";
import PassBox from "../components/passbox";
import { _decryptPass } from "../utils/store";

export default function MyPasswords({ route }) {
  const [passwords, setPasswords] = useState(null);
  useEffect(async () => {
    const pass = await _decryptPass(route.params.sk);
    setPasswords(pass);
  }, []);
  return (
    <View style={globalStyles.container}>
      {passwords ? (
        <View>
          <Text style={globalStyles.title}>My Passwords</Text>
          <FlatList
            data={passwords}
            renderItem={({ item }) => <PassBox item={item} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      ) : (
        <Loading />
      )}
    </View>
  );
}
