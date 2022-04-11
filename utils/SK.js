import AsyncStorage from "@react-native-async-storage/async-storage";
import pk from "./PK";
import sha256 from "crypto-js/sha256";

export const hashSK = async (sk) => {
  const hash = sha256(sk + pk).toString();
  await AsyncStorage.setItem("sk", hash);
};

export const _validateSK = async (sk) => {
  const hash = sha256(sk + pk).toString();
  const orgHash = await AsyncStorage.getItem("sk");
  return hash === orgHash;
};
