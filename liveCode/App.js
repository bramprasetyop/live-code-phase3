import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import WelcomeScreen from './src/screens/Home';
import MainScreen from './src/screens/Room';

const RootStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
    Main: { screen: MainScreen },
    // GameOver: { screen: GameOverScreen }
  },
  {
    initialRouteName: "Welcome"

  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

