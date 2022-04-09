import AsyncStorage from "@react-native-async-storage/async-storage";
import aes from "crypto-js/aes";

export const _encrypt = (data) => {
  //   AsyncStorage.setItem(
  //     "passwords",
  //     `{"pass":[{"name":"kihs","pass":"fdjsf"},{"name":"kihs","pass":"fdjsf"}]}`
  //   );

  AsyncStorage.getItem("passwords", (er, res) => {
    let pass = [];
    if (res) pass = JSON.parse(res).pass;
    const d = {
      pass: [data, ...pass],
    };
    console.log(d);
    AsyncStorage.setItem("passwords", JSON.stringify(d));
  });
  //   console.log(JSON.stringify(d));
  //   console.log(
  //     JSON.parse(
  //       `{"pass":[{"name":"kihs","pass":"fdjsf"},{"name":"kihs","pass":"fdjsf"}]}`
  //     ).pass[0]
  //   );
};

export const _decrypt = () => {
  AsyncStorage.setItem("passwords", "dfdshgdgfkl");
  AsyncStorage.getItem("passwords", (er, res) => {
    return res;
  });
};
