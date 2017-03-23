/**
 * Created by barry on 2017/3/23.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

var Dimensions = require("Dimensions");
var {width, height} = Dimensions.get("window");

export default class LoginView extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={styles.iconStyle} source ={require("./img/icon.png")} />
                {/*账号和密码*/}
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"QQ号/手机号/邮箱"}

                />
                <TextInput
                    style={styles.textInputStyle}
                    placeholder={"密码"}
                    secureTextEntry={true}/>
                {/*登录*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:"white"}}>登录</Text>
                </View>
                {/*设置*/}
                <View style={styles.settingBtnStyle}>
                    <Text>无法登录?</Text>
                    <Text>新用户</Text>
                </View>
                {/*其它登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>第三方登录:</Text>
                    <Image style={styles.otherImageStyle} source={require("./img/icon3.png")}></Image>
                    <Image style={styles.otherImageStyle} source={require("./img/icon8.png")}></Image>
                    <Image style={styles.otherImageStyle} source={require("./img/icon7.png")}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dddddd',
        alignItems:"center",
    },

    iconStyle:{
        width:80,
        height:80,
        borderRadius:40,
        marginTop:80,
        marginBottom:20,
        borderWidth:1,
        borderColor:"white",
    },

    textInputStyle:{
        backgroundColor:"white",
        height:38,
        marginBottom:1,
        color :"lightgrey",
    },

    loginBtnStyle:{
        marginTop:20,
        backgroundColor:"#008000",
        height:38,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        width:width*0.9,
    },

    settingBtnStyle:{
        marginTop:10,
        flexDirection:"row",
        width:width*0.9,
        height:20,
        // backgroundColor:"red",
        justifyContent:"space-between",

    },

    otherLoginStyle:{
        flexDirection:"row",
        position:"absolute",
        bottom:10,
        left:20,
        alignItems:"center",
    },
    otherImageStyle:{
        borderRadius:20,
        width:40,
        height:40,
        marginLeft:10,
    },

});

//输出类
module.exports = LoginView;
