'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Text,
  View
} from 'react-native';
import BookList from './BookList';

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

class Featured extends Component {
	render() {
		return (
			<NavigatorIOS style={styles.container} initialRoute={{title: 'Featured Books', component: BookList}} />
		);
	}
}

module.exports = Featured;