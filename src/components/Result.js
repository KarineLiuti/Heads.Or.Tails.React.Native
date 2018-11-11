import React, { Component } from 'react';
import { Image, View } from 'react-native';

const heads = require('../imgs/moeda_cara.png');
const tails = require('../imgs/moeda_coroa.png');

export default class OtherGames extends Component {
	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#61BD8C' }}>
				<Image source={heads} />
        <Image source={tails} />
			</View>
		);
	}
}
