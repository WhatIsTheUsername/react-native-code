/**
 * Created by guoqingping on 2017/3/26.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';


//引入外部的组件
var Home = require("../Component/Home");
var Find = require("../Component/Find");
var Message = require("../Component/Message");
var Mine = require("../Component/Mine");


var Main = React.createClass({

    //初始化方法
    getInitialState(){
      return{
          //设置选中标识
          selectedItem:"home" //默认首页被选中
      }
    },

    render() {
        return (
            <TabBarIOS
                tintColor="orange"
            >

                {/*首页*/}
                <TabBarIOS.Item
                    icon={require('image!tabbar_home')}
                    title="首页"
                    selected={this.state.selectedItem == "home"}
                    onPress={()=>{this.setState({selectedItem:"home"})}}
                >
                    <NavigatorIOS
                        tintColor="orange"
                        style={{flex: 1}}
                        initialRoute={{
                        component:Home,  //跳到home版块
                        title:"网易",
                        leftButtonSystemIcon:require("image!navigationbar_friendattention"),
                        rightButtonIcon:require('image!navigationbar_pop')
                        }}
                    />


                </TabBarIOS.Item>



                {/*发现*/}
                <TabBarIOS.Item
                    icon={require("image!tabbar_discover")}
                    title="发现"
                    selected={this.state.selectedItem == "find"}
                    onPress={()=>{this.setState({selectedItem:"find"})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Find, //发现版块
                            title:"发现"
                        }}
                    />

                </TabBarIOS.Item>




                {/*消息*/}
                <TabBarIOS.Item
                    icon={require("image!tabbar_message_center")}
                    title="消息"
                    selected={this.state.selectedItem == "discover"}
                    onPress={()=>{this.setState({selectedItem:"discover"})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Message,  //具体的版块
                            title:"消息"
                        }}
                    />

                </TabBarIOS.Item>




                {/*我的*/}
                <TabBarIOS.Item
                    icon={require("image!tabbar_profile")}
                    title="我的"
                    selected={this.state.selectedItem == "mine"}
                    onPress={()=>{this.setState({selectedItem:"mine"})}}
                >
                    <NavigatorIOS
                        style={{flex:1}}
                        initialRoute={{
                            component:Mine,  //我的版块
                            title:"我的"
                        }}
                    />

                </TabBarIOS.Item>

            </TabBarIOS>
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

//输出类
module.exports = Main;