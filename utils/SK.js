import AsyncStorage from "@react-native-async-storage/async-storage";
import bcrypt from "bcrypt";

export const hashSK = (sk) => {
  bcrypt.hash(sk, 10, function (err, hash) {
    console.log(hash);
  });
};
