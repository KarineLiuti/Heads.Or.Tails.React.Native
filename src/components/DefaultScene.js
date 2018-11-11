import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const logo = require('../imgs/logo.png');
const btnPlay = require('../imgs/botao_jogar.png');
const btnAboutGame = require('../imgs/sobre_jogo.png');
const btnOtherGames = require('../imgs/outros_jogos.png');

export default class HeadsOrTails extends Component {
  render() {
    return (
      <View style={styles.cenaPrincipal}>

        <View style={styles.presentationGame}>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => { Actions.result(); }}
          >
            <Image source={btnPlay} />
          </TouchableHighlight>
        </View>

        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => { Actions.about(); }}
          >
            <Image source={btnAboutGame} />
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => { Actions.other(); }}
          >
            <Image source={btnOtherGames} />
          </TouchableHighlight>
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
