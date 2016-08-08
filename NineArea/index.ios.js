'use strict'

import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	PixelRatio,
	TextInput,
	Text,
	View
} from 'react-native';

var onePT = 1/PixelRatio.get();

var styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		marginLeft: 5,
		marginRight: 5,
		padding: 2,
		height: 80,
		borderRadius: 5,
		flexDirection: 'row'
	},
	item: {
		flex: 1,
		height: 80
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	flex: {
		flex: 1
	},
	flexDirection: {
		flexDirection: 'row'
	},
	font: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold'
	},
	lineLeftRight: {
		borderLeftWidth: onePT,	// 用于获取高清设备的像素比，获得最小线宽
		borderRightWidth: onePT,
		borderColor: '#fff'
	},
	lineCenter: {
		borderBottomWidth: onePT,
		borderColor: '#fff'
	},
	lineLeftBox: {
		borderWidth: onePT,
		borderColor: '#666'
	},
	lineRightBox: {
		borderRightWidth: onePT,
		borderBottomWidth: onePT,
		borderTopWidth: onePT,
		borderColor: '#666'
	},
	topStatus: {
		marginTop: 25
	},
	input: {
		height: 35,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 4,
		marginLeft: 5,
		paddingLeft: 5
	},
	inputHeight: {
		height: 35
	},
	btn: {
		width: 55,
		height: 35,
		marginLeft: 5,
		marginRight: 5,
		borderRadius: 4,
		backgroundColor: '#23beff'
	},
	result: {
		marginTop: onePT,
		marginLeft: 5,
		marginRight: 5,
		height: 200,
		borderColor: '#ccc',
		borderTopWidth: 0
	},
	result_item: {
		fontSize: 16,
		padding: 5,
		paddingTop: 10,
		paddingBottom: 10,
		borderWidth: onePT,
		borderTopWidth: 0,
		borderColor: '#ddd'
	}
});

var Search = React.createClass({

	getInitialState: function() {
		return {
			show: false
		};
	},

	getValue: function(text) {
		var value = text;
		this.setState({
			show: true,
			value: value
		});
	},

	hide: function(val) {
		this.setState({
			show: false,
			value: val
		});
	},

	render: function() {
		return (
			<View style={styles.flex} >
				<View style={[styles.flexDirection, styles.inputHeight]}>
					<View style={styles.flex} >
						<TextInput style={styles.input} 
							returnKeyType="search" placheholder="请输入关键字" 
							onEndEditing={this.hide.bind(this, this.state.value)} 
							value={this.state.value} onChangeText={this.getValue} />
					</View>
					<View style={[styles.btn, styles.center]} >
						<Text style={styles.font} onPress={this.hide.bind(this, this.state.value)} >搜索</Text>
					</View>
				</View>
				{this.state.show ? 
					<View style={styles.result} >
						<Text style={styles.result_item} 
							onPress={this.hide.bind(this, this.state.value + '街')} 
							numberOfLines={1} >{this.state.value}街</Text>
						<Text style={styles.result_item} 
							onPress={this.hide.bind(this, this.state.value + '路')} 
							numberOfLines={1} >{this.state.value}路</Text>
						<Text style={styles.result_item} 
							onPress={this.hide.bind(this, 80 + this.state.value + '综合商店')} 
							numberOfLines={1} >80{this.state.value}综合商店</Text>
						<Text style={styles.result_item} 
							onPress={this.hide.bind(this, '海' + this.state.value + '园')} 
							numberOfLines={1} >海{this.state.value}园</Text>
						<Text style={styles.result_item} 
							onPress={this.hide.bind(this, this.state.value + '购物广场')} 
							numberOfLines={1} >{this.state.value}购物广场</Text>
					</View> : null }
			</View>
		);
	}
});

var NineArea = React.createClass({
	render: function() {
		return (
			<View >

				<View style={[styles.flex, styles.topStatus]} >
					<Search />
				</View>

				<View style={[styles.container, {marginTop: 40}]} >
					<View style={[styles.lineLeftBox, styles.center, {flex: 1, backgroundColor: '#ccc'}]} >
						<Text style={[styles.font, {color: '#000'}]} >广告栏</Text>
					</View>
				</View>

				<View style={[styles.container, {backgroundColor: '#489'}]} >
					<View style={[styles.item, styles.center]} >
						<Text style={styles.font} >酒店</Text>
					</View>
					<View style={[styles.item, styles.lineLeftRight]} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >海外酒店</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >特惠酒店</Text>
						</View>
					</View>
					<View style={styles.item} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >团购</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >客栈.公寓</Text>
						</View>
					</View>	
				</View>

				<View style={[styles.container, {backgroundColor:'#387'}]} >
					<View style={[styles.item, styles.center]} >
						<Text style={styles.font} >机票</Text>
					</View>
					<View style={[styles.item, styles.lineLeftRight]} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >火车票</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >接送机</Text>
						</View>
					</View>
					<View style={styles.item} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >汽车票</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >用车</Text>
						</View>
					</View>	
				</View>

				<View style={[styles.container, {backgroundColor: '#285'}]} >
					<View style={[styles.item, styles.center]} >
						<Text style={styles.font} >旅游</Text>
					</View>
					<View style={[styles.item, styles.lineLeftRight]} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >门票.玩乐</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >周末游</Text>
						</View>
					</View>
					<View style={styles.item} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >邮轮</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >签证</Text>
						</View>
					</View>	
				</View>

				<View style={[styles.container, {backgroundColor: '#184'}]} >
					<View style={[styles.item, styles.center]} >
						<Text style={styles.font} >攻略.身边</Text>
					</View>
					<View style={[styles.item, styles.lineLeftRight]} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >出境WiFi</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >礼品卡</Text>
						</View>
					</View>
					<View style={styles.item} >
						<View style={[styles.center, styles.flex, styles.lineCenter]} >
							<Text style={styles.font} >美食.购物</Text>
						</View>
						<View style={[styles.center, styles.flex]} >
							<Text style={styles.font} >更多</Text>
						</View>
					</View>	
				</View>

				<View style={[styles.container, {height: 50}]} >
					<View style={[styles.lineLeftBox, styles.center, {flex: 1}]} >
						<Text style={[styles.font, {color: '#333', marginBottom: 10}]} >特卖会</Text>
						<Text style={{fontSize: 10, color: '#aaa'}} >限时抢购，超值预售</Text>
					</View>
					<View style={[styles.lineRightBox, styles.center, {flex: 1}]} >
						<Text style={[styles.font, {color: '#333', marginBottom: 10}]} >签到领积分</Text>
						<Text style={{fontSize: 10, color: '#aaa'}} >天天有礼，积分不止</Text>
					</View>
				</View>
			</View>
		);
	}
});

AppRegistry.registerComponent('NineArea', () => NineArea);
