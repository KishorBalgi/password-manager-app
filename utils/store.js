import AsyncStorage from "@react-native-async-storage/async-storage";
import aes from "crypto-js/aes";
import { enc } from "crypto-js/core";
import pk from "./PK";
import { _validateSK } from "./SK";

export const _encrypt = async (data) => {
  const sk = data.sk;
  data = { name: data.name, pass: data.pass };
  // AsyncStorage.setItem("passwords", "");
  if (await _validateSK(sk)) {
    let res = await AsyncStorage.getItem("passwords");
    let pass = [];
    if (res) {
      res = _decrypt(res, sk);
      pass = JSON.parse(res).pass;
    }
    const obj = {
      pass: [data, ...pass],
    };
    const cipher = aes.encrypt(JSON.stringify(obj), sk + pk).toString();
    console.log(await _decryptPass(sk));
    // AsyncStorage.setItem("passwords", cipher);
  } else {
    console.log("Invalid SK!!!");
  }
  //   console.log(
  //     JSON.parse(
  //       `{"pass":[{"name":"kihs","pass":"fdjsf"},{"name":"kihs","pass":"fdjsf"}]}`
  //     ).pass[0]
  //   );
};

export const _decrypt = (cipher, sk) => {
  const decipher = aes.decrypt(cipher, sk + pk).toString(enc.Utf8);
  return decipher;
};

export const _decryptPass = async (sk) => {
  const cipher = await AsyncStorage.getItem("passwords");
  const decipher = aes.decrypt(cipher, sk + pk).toString(enc.Utf8);
  return JSON.parse(decipher).pass;
};
