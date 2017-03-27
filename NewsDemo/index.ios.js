/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';




//引入外部组件
var Main = require("./Component/NMain");

var NewsDemo = React.createClass({
  render() {
    return (
        <View style={styles.container}>
          <Main></Main>
        </View>
    );
  }
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
