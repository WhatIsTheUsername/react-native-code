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

/** ---------------第一个示例程序--------------------*/
  class CFlexBoxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{backgroundColor:"red", height:30}}>第一个</Text>
        <Text style={{backgroundColor:"yellow", height:60}}>第二个</Text>
        <Text style={{backgroundColor:"blue", height:40}}>第三个</Text>
        <Text style={{backgroundColor:"black", height:70}}>第四个</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    //改变主轴的对齐方式
    justifyContent: 'space-around',
    //改变侧轴的对齐方式
    alignItems: 'center',

    backgroundColor: '#F5FCFF',
    //改变主轴的方向
    flexDirection:"row",
    //上边距
    marginTop: 40,
  },

});





/** ---------------第二个示例程序--------------------*/
  class CFlexBoxDemo2 extends Component {
  render() {
    return (
        <View style={styles2.container}>
          <Text style={{backgroundColor:"red", width: 80 }}>第一个</Text>
          <Text style={{backgroundColor:"yellow", width: 90}}>第二个</Text>
          <Text style={{backgroundColor:"blue", width: 100}}>第三个</Text>
          <Text style={{backgroundColor:"black",width: 200}}>第四个</Text>
        </View>
    );
  }
}

const styles2 = StyleSheet.create({
  container: {
    // flex: 1,
    //改变主轴的对齐方式
    justifyContent: 'flex-start',
    //改变侧轴的对齐方式
    alignItems: 'center',

    backgroundColor: 'purple',
    //改变主轴的方向
    flexDirection:"row",
    //上边距
    marginTop: 40,
    //显示不下一行,换一行
    flexWrap:"wrap"
  },

});



/** ---------------第三个示例程序--------------------*/
class CFlexBoxDemo3 extends Component {
  render() {
    return (
        <View style={styles3.container}>
          <Text style={{backgroundColor:"red", flex:1 , alignSelf:"flex-start"}}>第一个</Text>
          <Text style={{backgroundColor:"yellow", flex:2}}>第二个</Text>
          <Text style={{backgroundColor:"blue", flex:3}}>第三个</Text>
          <Text style={{backgroundColor:"black", flex:1, height:100}}>第四个</Text>
        </View>
    );
  }
}

const styles3 = StyleSheet.create({
  container: {
    // flex: 1,
    //改变主轴的对齐方式
    justifyContent: 'flex-start',
    //改变侧轴的对齐方式
    alignItems: 'center',

    backgroundColor: 'purple',
    //改变主轴的方向
    flexDirection:"row",
    //上边距
    marginTop: 40,
  },

});



/** ---------------第四个示例程序--------------------*/
//引入
var Dimensions = require("Dimensions");
class CFlexBoxDemo4 extends Component {
  render() {
    return (
        <View style={styles4.container}>
          <Text >当前屏幕的宽度:{Dimensions.get("window").width}</Text>
          <Text >当前屏幕的高度:{Dimensions.get("window").height}</Text>
          <Text >当前屏幕的分辨率:{Dimensions.get("window").scale}</Text>
        </View>
    );
  }
}

const styles4 = StyleSheet.create({
  container: {
    flex: 1,
    //改变主轴的对齐方式
    justifyContent: 'center',
    //改变侧轴的对齐方式
    alignItems: 'center',

    backgroundColor: 'purple',

  },

});




AppRegistry.registerComponent('CFlexBoxDemo', () => CFlexBoxDemo4);
