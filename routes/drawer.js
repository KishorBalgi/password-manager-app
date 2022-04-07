import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import MyPasswordsStack from "./myPasswordsStack";
import MyAccountStack from "./myAccountStack";
import AboutStack from "./aboutStack";
import { globalColors } from "../styles/globalStyles";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalColors.clrPrimary,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
      }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="MyPasswordsStack"
        component={MyPasswordsStack}
        options={{ title: "My Passwords" }}
      />
      <Drawer.Screen
        name="MyAccountStack"
        component={MyAccountStack}
        options={{ title: "My Account" }}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{ title: "About" }}
      />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
