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
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native';


//导入json数据
var Wine = require("./Wine.json");

var Dimensions = require("Dimensions");
var {width} = Dimensions.get("window");


var ListViewDemo1 = React.createClass({

  //设置初始值
  getInitialState(){
    //1.1设置数据源
    var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 != r2});
    //设置返回数据
    return{
      dataSource:ds.cloneWithRows(Wine)
    }
  },

  //设置render函数
  render() {
    return (
        <ListView
              dataSource = {this.state.dataSource}   //数据源
              renderRow = {this.renderRow}
        />
    );
  },


  //返回具体的cell
  renderRow(rowData,sectionID,rowID,highlightRow){
    return(
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{AlertIOS.alert("点击了"+rowID+"行")}}>
          <View style={styles.cellViewStyle}>
            {/*左边的图片*/}
            <Image source={{uri:rowData.image}} style={styles.leftImageStyle}/>
            {/*右边的view*/}
            <View style={styles.rightViewStyle}>
              {/*上面的text*/}
              <Text style={styles.topTitleStyle}>{rowData.name}</Text>
              {/*下面的text*/}
              <Text style={styles.bottomTitleStyle}>¥{rowData.money}</Text>
            </View>
          </View>
        </TouchableOpacity>
    )
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  cellViewStyle:{
    padding:10,
    backgroundColor:"white",
    //下划线
    borderBottomWidth:0.5,
    borderBottomColor:"#e8e8e8",

    //确定主轴的方向
    flexDirection:"row"
  },

  leftImageStyle:{
    width:60,
    height:60,
    marginRight:15
  },

  rightViewStyle:{
    //主轴的对齐方式
    justifyContent:"center"
  },

  topTitleStyle:{
    color:"red",
    fontSize:15,
    width:width*0.7,
    marginBottom:8
  },

  bottomTitleStyle:{
    color:"blue"
  }


});

AppRegistry.registerComponent('ListViewDemo1', () => ListViewDemo1);
