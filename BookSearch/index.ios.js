/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS
} from 'react-native';

import Featured from './Featured';
import Search from './Search';

class BookSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'featured'
    };
  }

  render() {
    return (
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item selected={this.state.selectedTab === 'featured'} title="featured" icon={require('image!featured')} onPress={() => {this.setState({selectedTab:'featured'});}}>
          <Featured />
        </TabBarIOS.Item>
        <TabBarIOS.Item selected={this.state.selectedTab === 'search'} title="search" icon={require('image!search')} onPress={() => {this.setState({selectedTab:'search'});}}>
          <Search />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}


AppRegistry.registerComponent('BookSearch', () => BookSearch);
