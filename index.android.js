import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Routes from './src/Routes';

export default class HeadsOrTails extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

AppRegistry.registerComponent('HeadsOrTails', () => HeadsOrTails);
