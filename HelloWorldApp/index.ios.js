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








//7、使用flexbox布局,使用flexDirection、alignItems和 justifyContent三个样式属性就已经能满足大多数布局需求。
//示意图（http://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment#_rnd1488780667180）

//7.1 、 flex direction。在组件的style中指定flexDirection可以决定布局的主轴。子元素是沿着水平轴（row）排列，还是竖直轴（column）排列。默认是竖直轴排列。
// import {AppRegistry, View} from "react-native";
// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			//尝试将“flexDirection”改成“colomn”看看
// 			<View style={{flex:1, flexDirection:"row"}}>
// 				<View style={{width:50, height:50, backgroundColor:"powderblue"}}/>
// 				<View style={{width:50, height:50, backgroundColor:"skyblue"}}/>
// 				<View style={{width:50, height:50, backgroundColor:"steelblue"}}/>
// 			</View>
// 		);
// 	}
// };



//7.2 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
//对应的可选性有flex-start、center、flex-end、space-around以及space-between
// import {AppRegistry, View} from "react-native";
// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<View style={{
// 				flex:1,
// 				flexDirection:"column",
// 				justifyContent:"space-between",
// 			}}>
// 			<View style={{width:50, height:50, backgroundColor:"powderblue"}}/>
// 			<View style={{width:50, height:50, backgroundColor:"skyblue"}}/>
// 			<View style={{width:50, height:50, backgroundColor:"steelblue"}}/>
// 			</View>
// 		);
// 	};
// };







//7.3 在组件的style中指定alignItems可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
//子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？对应的这些可选项有：flex-start、center、flex-end以及stretch。
// import {AppRegistry, View} from "react-native";
// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<View style={{
// 				flex:1,
// 				flexDirection:"column",
// 				justifyContent:"space-between",
// 				alignItems:"center",
// 			}}>
// 			<View style={{width:50, height:50, backgroundColor:"powderblue"}}/>
// 			<View style={{width:50, height:50, backgroundColor:"skyblue"}}/>
// 			<View style={{width:50, height:50, backgroundColor:"steelblue"}}/>
// 			</View>
// 		);
// 	}
// };








//8.0、处理文本输入
//TextInput是一个允许用户输入文本的基础组件。它有一个名为onChangeText的属性，这个属性接受一个函数，此函数会在文本变化的时候回调
//另外还有一个名为onSubmitEditing的属性，会在文本被提交后调用。
// import {AppRegistry, Text, TextInput, View} from "react-native";
// class HelloWorldApp extends Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {text: " "};
// 	}

// 	render(){
// 		return (
// 			<View style={{padding: 10}}>
// 				<TextInput
// 					style = {{height:40}}
// 					placeholder = "type here to translate!"
// 					onChangeText = {(text) =>this.setState({text})}
// 				/>
// 				<Text style={{padding:10, fontSize:42}}>
// 					{this.state.text.split(" ").map((word) => word && "🍕").join(" ")}
// 				</Text>
// 			</View>
// 		);
// 	}
// }










//8.0、使用ScrollView
//ScrollView是一个通用可滚动的容器，可以在其中放置多个组件和容器，而这些容器并不需要同类型。ScrollView不仅可以垂直滚动，还能水平滚动(horizontal)
// import{AppRegistry, ScrollView, Image, Text, View} from "react-native";
// class HelloWorldApp extends Component{
// 	render(){
// 		return(
// 			<ScrollView>
// 				<Text style={{fontSize:96}}>Scroll me plz</Text>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Text style={{fontSize:20}}>If you like</Text>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Text style={{fontSize:96}}>Scroll down</Text>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Text style={{fontSize:96}}>What is the best</Text>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Text style={{fontSize:96}}>Framework around?</Text>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Image source={require("./img/apple.png")}/>
// 				<Text style={{fontSize:96}}>React Native</Text>
// 			</ScrollView>
// 		)
// 	}
// }








//9.0、ListView组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而仅数据不同
//ListView更适合长列表数据，且元素个数可以增删。和ScrollView不同的是，ListView并不立刻渲染所有元素，而是有限渲染可见的元素。
//ListView组件必须的两个属性是dataSource和renderRow。dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，然后返回一个设定好格式的组件来渲染。
// import {AppRegistry, ListView, Text, View} from "react-native";
// class HelloWorldApp extends Component{
// 	//初始化模拟数据
// 	constructor(props){
// 		super(props);
// 		const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
// 		this.state = {
// 			dataSource : ds.cloneWithRows([
// 				"john","Joel","james","jimmy","jackson","jillian","julie","devin"
// 			])
// 		};
// 	}

// 	render(){
// 		return(
// 			<View style={{flex:1, paddingTop:22}}>
// 			<ListView
// 				dataSource = {this.state.dataSource}
// 				renderRow = {(rowData) => <Text>{rowData}</Text>}
// 			/>
// 			</View> 
// 		);
// 	}
// }








//10.网络 




//11.0 使用导航器跳转页面
//Navigator    
//场景(Scene)的概念与使用
// import {AppRegistry, Navigator, Text, View} from "react-native";

// import MyScene from "./MyScene";

// class HelloWorldApp extends Component{
// 	render(){
// 		return (
// 			<Navigator
// 				initialRoute = {{title: "My Initial Scene", index:0}}
// 				renderScene = {(route, Navigator) =>
// 					<MyScene
// 						title={route.title}

// 						//function to call when a new scene should be displayed
// 						onForward={() =>{
// 							const nextIndex = route.index + 1;
// 							Navigator.push({
// 								title:"Scene" + nextIndex,
// 								index: nextIndex,
// 							});
// 						}}

// 						//funtion to call to go back to the privious scene
// 						onBack={() =>{
// 							if (route.index > 0) {
// 								Navigator.pop();
// 							};
// 						}}
// 					/>

// 				}
// 			/>
// 		)
// 	}
// }







//12、动画
import {AppRegistry,Animated, Image} from "react-native";
class HelloWorldApp extends React.Component{
	constructor(props:any){
		super(props);
		this.state = {
			bounceValue: new Animated.value(0),
		};
	}

	render():ReactElement{
		return(
			<Animated.Image   //可选的基本组件 Image、Text、View
				source = {{uri:"http://i.imgur.com/XMKOH81.jpg"}}
				style={{
					flex:1,
					transform:[      //"transform"是一个有序数组，动画按顺序排序
						{scale: this.state.bounceValue},  //将bounceValue的值赋给scale
					]
				}}
			/>
		);
	}

	componentDidMount(){
	this.state.bounceValue.setValue(1.5);   //设置一个较大的初始值
	Animated.spring(            //可选的动画类型 spring, decay, timing
		this.state.bounceValue,   //将 bounceValue值动画化
		{ 
			toValue: 0.8,           //将值以动画的形式改成一个较小值
			friction: 1,
		}
	).start();                //开始执行动画
}}
































































//注册应用（registerComponent）后才能正确渲染。只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent("HelloWorldApp",()=>HelloWorldApp);






















