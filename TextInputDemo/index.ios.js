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
  View,
    TextInput
} from 'react-native';

export default class TextInputDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle} defaultValue = {"这是占位文字"} >
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInputStyle:{
    width:300,
    height:40,
    backgroundColor:"yellow",
    borderColor:"black",
  }
});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
