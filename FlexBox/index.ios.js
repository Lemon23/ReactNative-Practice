'use strict'

import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

var styles = StyleSheet.create({
	height50: {
		height: 50
	},
	height300: {
		height: 300,
	},
	width300: {
		width: 300
	},
	bgred: {
		backgroundColor: 'red'
	},
	box: {
		flexDirection: 'column',
		flex: 1,
		position: 'relative'
	},
	top: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottom: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	right: {
		width: 50,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	left: {
		width: 50,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	white: {
		color: 'white',
		fontWeight: '800'
	},
	margginBox: {
		position: 'absolute',
		paddingLeft: 7,
		paddingRight: 7
	},
	borderBox: {
		flex: 1,
		justifyContent: 'space-between',
		flexDirection: 'row'
	}
});

var FlexboxTask = React.createClass({
	render: function() {
		return (
			<View style={[styles.margginBox]} ref="lab1" >
				<View style={[styles.box, styles.height300, styles.width300]} >
					<View style={[styles.top, styles.height50, styles.bgred]} >
						<Text style={[styles.white]} >Top</Text>
					</View>
					<View style={[styles.borderBox]} >
						<View style={[styles.left, styles.bgred]} >
							<Text style={[styles.white]} >Left</Text>
						</View>
						<View style={[styles.right, styles.bgred]} >
							<Text style={[styles.white]} >Right</Text>
						</View>
					</View>
					<View style={[styles.bottom, styles.height50, styles.bgred]} >
						<Text style={[styles.white]} >Bottom</Text>
					</View>
				</View>
			</View>
		);
	}
});

AppRegistry.registerComponent('FlexboxTask', () => FlexboxTask);
