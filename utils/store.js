import AsyncStorage from "@react-native-async-storage/async-storage";
import aes from "crypto-js/aes";
import uuid from "react-native-uuid";
import { enc } from "crypto-js/core";
import pk from "./PK";
import { _validateSK } from "./SK";

export const _encrypt = async (data) => {
  const sk = data.sk;
  data = { name: data.name, pass: data.pass, id: uuid.v1() };
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
    AsyncStorage.setItem("passwords", cipher);
  } else {
    console.log("Invalid SK!!!");
  }
};

export const _decrypt = (cipher, sk) => {
  const decipher = aes.decrypt(cipher, sk + pk).toString(enc.Utf8);
  return decipher;
};

export const _decryptPass = async (sk) => {
  let decipher = [];
  const cipher = await AsyncStorage.getItem("passwords");
  if (cipher)
    decipher = JSON.parse(aes.decrypt(cipher, sk + pk).toString(enc.Utf8)).pass;
  return decipher;
};

export const _updatePass = async (data, sk) => {
  let res = await AsyncStorage.getItem("passwords");
  res = _decrypt(res, sk);
  JSON.parse(res).pass;
  const cipher = aes.encrypt(JSON.stringify(obj), sk + pk).toString();
  AsyncStorage.setItem("passwords", cipher);
};
