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

export default class BViewDemo extends Component {
  render() {
    return (
        <View style={styles.container}>
          {/*<Text>我是外层的文本</Text>*/}
          <View style={styles.innerView}>
            <Text>我是内层的文本</Text>
          </View>
          <View style={styles.innerView2}>
            <Text>我是内层下面的文本</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"red",
    width:300,
    height:100,
    // flex: 1
    flexDirection:"row"
  },
  innerView:{
    backgroundColor:"green",
    width:100,
  },
  innerView2:{
    backgroundColor:"blue",
    width:100,
    height:30,
  }

});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo);
