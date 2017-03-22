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
  Image
} from 'react-native';

var ImageData = require("./ImageData.json");

export default class AImageDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*返回所有的水果*/}
        {this.renderAllFood()}
      </View>
    );
  }

  //返回所有的水果
  renderAllFood(){
    //定义数组封装所有的子组件
    var allBadge = [];
    //遍历json数据
    for(var i=0; i< ImageData.data.length; i++){
      //取出单独的数据对象
      var badge = ImageData.data[i];
      //存入数组
      allBadge.push(
          <View key={i} style={styles.outViewStyle}>
            <Image source={{uri: badge.icon}} style={styles.imageStyle} />
            <Text style={styles.foodTitleStyle}>
              {badge.title}
            </Text>
          </View>
      )
    }
    //返回数组
    return allBadge;
  }
}

const styles = StyleSheet.create({
  container: {
    //上边距
    marginTop: 40,
    //确定主轴的方向
    flexDirection:"row",
    //确定主轴的排列方式
    justifyContent: 'space-around',

    //换行显示
    flexWrap:"wrap"
  },
  outViewStyle:{
    //上边距
    marginTop: 10,
    backgroundColor:"red",
    //设置侧轴的对齐方式
    alignItems:"center",
    width:100,
    height:100,
  },
  foodTitleStyle:{},
  imageStyle:{
    width:80,
    height:80,
  }

});

AppRegistry.registerComponent('AImageDemo', () => AImageDemo);
