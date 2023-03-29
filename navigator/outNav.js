import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogIn from "../screens/LogIn";
import Join from "../screens/Join";

const Nav = createNativeStackNavigator();

const OutNav = () => {
  return (
    <Nav.Navigator
      screenOptions={{ headerStyle: { backgroundColor: "bisque" } }}
    >
      <Nav.Screen name="LogIn" component={LogIn} />
      <Nav.Screen name="Join" component={Join} />
    </Nav.Navigator>
  );
};

export default OutNav;
