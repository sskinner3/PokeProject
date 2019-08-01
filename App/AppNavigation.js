// In App.js in a new project

import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./Screens/HomeScreen";
import PokeScreen from "./Screens/PokeScreen";

const AppNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    PokeScreen: {
      screen: PokeScreen,
    },
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(AppNavigator);
