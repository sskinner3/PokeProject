// In App.js in a new project

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

//import HomeScreen from "./Screens/HomeScreen";
import PokeAction from "./Actions/PokeAction";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: PokeAction
    }
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AppNavigator);
