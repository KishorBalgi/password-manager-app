import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import MyPasswordsStack from "./myPasswordsStack";
import MyAccountStack from "./myAccountStack";
import AboutStack from "./aboutStack";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="My Passwords" component={MyPasswordsStack} />
      <Drawer.Screen name="My Account" component={MyAccountStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
