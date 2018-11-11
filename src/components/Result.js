import React, { Component } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const heads = require('../imgs/moeda_cara.png');
const tails = require('../imgs/moeda_coroa.png');

export default class OtherGames extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      result: '' 
    };
  }

  componentWillMount() {
    let randomValues = [];
    let i = 49;

    while (i >= 0) {
      randomValues.push(i);
      i--;
    }
    
    const getIndex = Math.floor(Math.random() * 50);

    let result = randomValues[getIndex] <= 24 ? 'heads' : 'tails';

    this.setState({ result });
  }

	render() {
    if (this.state.result === 'heads') {
      return (
        <View style={{ flex: 1, backgroundColor: '#61BD8C', padding: 30 }}>
          <Image source={heads} />
          <Text style={styles.resultText}>
            CARA
          </Text>
        </View>
      );
    }

      return (
        <View style={{ flex: 1, backgroundColor: '#61BD8C', padding: 30 }}>
          <Image source={tails} />
          <Text style={styles.resultText}>
            COROA
          </Text>
        </View>
      );
	}
}

const styles = StyleSheet.create({
  resultText: {
    alignSelf: 'center',
    marginTop: 30,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
