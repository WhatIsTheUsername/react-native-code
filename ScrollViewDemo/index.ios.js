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
    ScrollView,
} from 'react-native';


export default class ScrollViewDemo extends Component {
  render() {
    return (
      <ScrollView
        horizotal={true}
        showsHorizontalScrollIndicator ={false}
        pagingEnabled = {true}
      >
        {this.renderChildView()}
      </ScrollView>
    );
  }
  
  renderChildView(){
    //数组
    var allChild = [];
    var colors = ["red", "green", "blue", "yellow", "purple"];
    //遍历
    for(var i=0; i< 5;i++){
      allChild.push(
          <View key={i} style={{backgroundColor:colors[i], width: 375, height: 120}}>
            <Text>{i}</Text>
          </View>
        );
    }
    return allChild;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});

AppRegistry.registerComponent('ScrollViewDemo', () => ScrollViewDemo);
