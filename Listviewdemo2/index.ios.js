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
TouchableOpacity
} from 'react-native';


//导入外部的json数据
var Car = require("./Car.json");

var Listviewdemo2 = React.createClass({
   //初始化函数
  getInitialState(){

    var getSectionData = (dataBlod, sectionID) =>{
      return dataBlod[sectionID];
    };

    var getRowData = (dataBlob, sectionID, rowID) =>{
      return dataBlob[sectionID +":" +rowID];
    };

    return{
      dataSource: new ListView.DataSource({
        getSectionData:getSectionData, //获取组中的数据
        getRowData : getRowData, //获取行中的数据
        rowHasChanged:(r1,r2) => r1!==r2,
        sectionHeaderHasChanged:(s1,s2) => s1!==s2
      })
    }
  },


  //复杂的操作:数据请求 或者 异步操作(定时器)
  componentDidMount(){
    //调用json数据
    this.loadDataFromJson();
  },


  loadDataFromJson(){
    //拿到json数据
    var jsonData = Car.data;

    //定义一些变量
    var dataBlod = {},
        sectionIDs = [],
        rowIDs = [],
        cars = [];

    //遍历
    for (var i=0; i<jsonData.length; i++){
      //1.把组号放入sectionIDss数组中
      sectionIDs.push(i);
      //把组中的内容放入dataBlod对象中
      dataBlod[i] = jsonData[i].title;
      //取出该组中的所有的车
      cars = jsonData[i].cars;
      rowIDs[i] = [];
      //遍历所有的车数组
      for(var j=0; j<cars.length; j++){
        //把行号放入rowIDS
        rowIDs[i].push(j);
        //把每一行中的内容放入dataBlod对象中
        dataBlod[i+":"+j] = cars[j];
      }
    }


    //更新状态
    this.setState({
      dataSource:this.state.dataSource.cloneWithRowsAndSections(dataBlod, sectionIDs, rowIDs)
    });
  },


  render(){
    return(
        <View style={styles.outerViewStyle}>
          {/*头部*/}
          <View style={styles.headerViewStyle}>
            <Text style={{color:"white", fontSize:25}}>汽车品牌</Text>
          </View>
          {/*ListView*/}
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            renderSectionHeader = {this.renderSectionHeader}
          />
        </View>
    )
  },

  //每一行的数据
  renderRow(rowData){
    return(
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.rowStyle}>
          <Image source={{uri:rowData.icon}} style={styles.rowImageStyle}></Image>
          <Text style={{marginLeft:5}}>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    );
  },

  //每一组中的数据
  renderSectionHeader(sectionData, sectionID){
    return(
        <View style={styles.sectionHeaderViewStyle}>
          <Text style={{marginLeft:5, color:"red"}}>{sectionData}</Text>
        </View>
    );
  },



});

const styles = StyleSheet.create({
  outerViewStyle:{
    //占满窗口
    flex:1
  },
  
  headerViewStyle:{
    height:64,
    backgroundColor:"orange",
    
    justifyContent:"center",
    alignItems:"center"
  },
  
  rowStyle:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    borderBottomColor:"#e8e8e8",
    borderBottomWidth:0.5
  },
  
  rowImageStyle:{
    width:70,
    height:70
  },
  
  sectionHeaderViewStyle:{
    backgroundColor:"#e8e8e8",
    height:25,
    justifyContent:"center"
  }
  
  

});

AppRegistry.registerComponent('Listviewdemo2', () => Listviewdemo2);
