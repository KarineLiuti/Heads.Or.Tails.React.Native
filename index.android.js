import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const logo = require('./src/imgs/logo.png');
const btnPlay = require('./src/imgs/botao_jogar.png');
const btnAboutGame = require('./src/imgs/sobre_jogo.png');
const btnOtherGames = require('./src/imgs/outros_jogos.png');

export default class HeadsOrTails extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>

        <View style={styles.presentationGame}>
          <Image source={logo} />
          <Image source={btnPlay} />
        </View>

        <View style={styles.rodape}>
          <Image source={btnAboutGame} />
          <Image source={btnOtherGames} />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  presentationGame: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

AppRegistry.registerComponent('HeadsOrTails', () => HeadsOrTails);
