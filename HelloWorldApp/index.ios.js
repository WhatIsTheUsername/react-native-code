import React, {Component} from "react";



//1、显示helloWorld
// import {
// 	AppRegistry,
// 	Text,
// 	Image } from "react-native";

// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<Text>Hello World!</Text>
// 		);
// 	}
// }




//2、显示香蕉，使用props
// import {
// 	AppRegistry,
// 	Image } from "react-native";

// class HelloWorldApp extends Component{
// 	render(){
// 		let pic = {
// 			url:"https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1488771417&di=ef076ec2ef6e35018d5c25578b449cee&src=http://img.taopic.com/uploads/allimg/140627/240408-14062FG42471.jpg"
// 		};
// 		return(
// 			<Image source={pic} style={{width:193, height:110}} />
// 		);
// 	};
// }





//3、自定义组件 使用props
// import{
// 	AppRegistry,
// 	Text,
// 	View
// } from "react-native";

// class Greeting extends Component{
// 	render(){
// 		return (<Text>Hello {this.props.name}!</Text>);
// 	}
// }

// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 				<View style={{alignItems:"center"}}>
// 					<Greeting name="Rexxar"/>
// 					<Greeting name="Jaina"/>
// 					<Greeting name="Valeera"/>
// 				</View>
// 			);
// 	}
// }






//4、state状态
// import{ AppRegistry, Text, View }from "react-native";
// class Blink extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = { showText : true };

// 		//每1000毫秒对showText状态做一次取反操作
// 		setInterval(() =>{
// 			this.setState({showText : !this.state.showText});
// 		}, 1000);
// 	}

// 	render(){
// 		//根据当时showtext的值决定是否显示text内容
// 		let display = this.state.showText ? this.props.text : " ";
// 		return(
// 				<Text>{display}</Text>
// 			);
// 	}
// }

// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<View>
// 				<Blink text = "I love to Blink"/>
// 				<Blink text = "Yes Blinking is so great"/>
// 				<Blink text = "why did they ever take this out of Html"/>
// 				<Blink text = "look at me look at me look at me "/>
// 			</View>
// 		);
// 	}
// }






//5、样式  驼峰命名法  居后的样式比居前的样式有更加的优先级，可以实现样式的继承
// import { AppRegistry, StyleSheet, Text, View} from "react-native";

// class HelloWorldApp	 extends Component{
// 	render(){
// 		return(
// 			<View>
// 				<Text style={styles.red}>just red</Text>
// 				<Text style={styles.bigblue}>just bigblue</Text>
// 				<Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
// 				<Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	bigblue:{
// 		color:"blue",
// 		fontWeight:"bold",
// 		fontSize:30,
// 	},

// 	red:{
// 		color:"red",
// 	},
// });








//6.1、指定高度与宽度
// import {AppRegistry, View} from "react-native";
// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<View>
// 				<View style={{width:50,  height:50,  backgroundColor:"powderblue"}} />
// 				<View style={{width:100, height:100, backgroundColor:"skyblue"}}/>
// 				<View style={{width:150, height:150, backgroundColor:"steelblue"}}/>
// 			</View>
// 		);
// 	}
// } 







//6.2 、弹性宽高 flex
//那个组件的flex值大，占的空间就大
// import {AppRegistry, View} from "react-native";
// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<View style={{flex:1}}>
				//如果父视图的flex去掉，那么子视图也不会显示了
// 				<View style={{flex:1,  backgroundColor:"powderblue"}} />
// 				<View style={{flex:2, backgroundColor:"skyblue"}}/>
// 				<View style={{flex:3, backgroundColor:"steelblue"}}/>
// 			</View>
// 		);
// 	}
// } 








//7、使用flexbox布局,示意图（http://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment#_rnd1488780667180）
//7.1 、 flex direction。决定子元素是沿着水平轴（row）排列，还是竖直轴（column）排列。默认是竖直轴排列。
import {AppRegistry, View} from "react-native";
class HelloWorldApp extends Component{
	render(){
		return(
			//尝试将“flexDirection”改成“colomn”看看
			<View style={{flex:1, flexDirection:"row"}}>
				<View style={{width:50, height:50, backgroundColor:"powderblue"}}/>
				<View style={{width:50, height:50, backgroundColor:"skyblue"}}/>
				<View style={{width:50, height:50, backgroundColor:"steelblue"}}/>
			</View>
		);
	}
};



AppRegistry.registerComponent("HelloWorldApp",()=>HelloWorldApp);