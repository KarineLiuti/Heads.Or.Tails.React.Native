import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import DefaultScene from './components/DefaultScene';
import AboutGame from './components/AboutGame';
import OtherGames from './components/OtherGames';
import Result from './components/Result';

const Routes = () => (
  <Router sceneStyle={{ paddingTop: 50 }}>
    <Scene key="defaultScene" component={DefaultScene} title="Heads or Tails" initial />
    <Scene key="about" component={AboutGame} title="About the Game" />
    <Scene key="other" component={OtherGames} title="Other Games" />
    <Scene key="result" component={Result} title="Result Game" />
  </Router>
);

export default Routes;
