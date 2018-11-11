import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import {
  AppRegistry
} from 'react-native';

import DefaultScene from './src/components/DefaultScene';
import AboutGame from './src/components/AboutGame';
import OtherGames from './src/components/OtherGames';
import Result from './src/components/Result';

export default class HeadsOrTails extends Component {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key="defaultScene" component={DefaultScene} title="Heads or Tails" initil />
        <Scene key="about" component={AboutGame} title="About the Game" />
        <Scene key="other" component={OtherGames} title="Other Games" />
        <Scene key="result" component={Result} title="Result Game" />
      </Router>
    );
  }
}

AppRegistry.registerComponent('HeadsOrTails', () => HeadsOrTails);
