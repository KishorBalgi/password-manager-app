import AsyncStorage from "@react-native-async-storage/async-storage";
import pk from "./PK";
import sha256 from "crypto-js/sha256";

export const hashSK = (sk) => {
  const hash = sha256(sk + pk).toString();
  AsyncStorage.setItem("sk", hash);
};
