import { StatusBar } from 'expo-status-bar';
// below we're importing components and API's
import { StyleSheet, Text, Platform, View, Alert, TouchableNativeFeedback,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback, Image, SafeAreaView, Button } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import SignInScreen  from './src/screens/SignInScreen';
import CommunityScreen  from './src/screens/Community';
import { FlatList } from 'react-native-web';
import Community from './src/screens/Community';

export default function App() {
	// console.log(require("./assets/icon.png"))
	const handlePress = () => console.log("Text Pressed")
	console.log("App executed");
	// const {landscape} = useDeviceOrientation();
	// console.log(useDimensions());
	// console.log(useDeviceOrientation());
  return (
	  <SafeAreaView style={styles.root}>
		  {/* <SignInScreen /> */}
		  <CommunityScreen/>		  
	  </SafeAreaView>
	//   <View
	//   	style={{
	// 		  backgroundColor: "#fff",
	// 		  flex: 1,
	// 		  flexDirection: "row"
	// 	  }}	  
	//   >
	// 	  <View style={{
	// 		  backgroundColor: "dodgerblue",
	// 		  width: 100,	
	// 		  height: 100,		  
	// 	  	}}/>
	// 	  <View style={{
	// 		  backgroundColor: "orange",
	// 		  width: 100,	
	// 		  height: 100,
	// 	  	}}/>
	// 	  <View style={{
	// 		  backgroundColor: "gold",
	// 		  width: 100,	
	// 		  height: 100,
	// 	  	}}/>
	//   </View>
	//   <View
	//   	style={{
	// 		  backgroundColor: "#fff",
	// 		  flex: 1,
	// 	  }}	  
	//   >
	// 	  <View style={{
	// 		  backgroundColor: "dodgerblue",
	// 		  flex:2,
	// 	  	}}/>
	// 	  <View style={{
	// 		  backgroundColor: "orange",
	// 		  flex:1,
	// 	  	}}/>
	// 	  <View style={{
	// 		  backgroundColor: "gold",
	// 		  flex:1,
	// 	  	}}/>
	//   </View>
    // <SafeAreaView style={[styles.container, containerStyle]}>
	// {/* <SafeAreaView style={styles.container}> */}
	// {/* <SafeAreaView style={{ backgroundColor: "orange" }}> */}
    //   {/* <View style={{
	// 	  backgroundColor: 'orange',
	// 	  width: '%50',
	// 	  height: 70
	//   }}>
	//   </View> */}
	//   <Text numberOfLines={1} onPress={handlePress}>Meddit login!</Text>
	//   <Button 
	//   	color="orange"
	//   	title="Click me" 
	//   	//  onPress={() => console.log("Button tapped")}/>
	// 	 onPress={() => alert('Button tapped')} />
	// 	 {/* onPress={() => Alert.alert('My title', 'My message', [
	// 	 	{text: "Yes", onPress: () => console.log('Yes')},
	// 	 	{text: "No", onPress: () => console.log('No')},
	// 	 ])} /> */}

	//   {/* For network images we do as the following line */}
	//   {/* <TouchableNativeFeedback onPress={() => console.log('Image Tapped')}>
	// 	  <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue"}}></View>
	//   </TouchableNativeFeedback>	  
	//   <Image 
	// 	//   resize mode to resize an image
	// 	  fadeDuration={1000}
	// 	  source={{ 
	// 		  width: 200,
	// 		  height:300,
	// 		  uri: "https://picsum.photos/200/300",
	// 		  }} />
	//   For local images we do as the following line */}
	//   {/* <Image source={require("./assets/icon.png")} /> */}
    //   {/* <StatusBar style="auto" /> */}
    // </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "dodgerblue" };

const styles = StyleSheet.create({
	root:{
		flex: 1,
		backgroundColor: '#F9FBFC'
	},
  container: {
    flex: 1,
    backgroundColor: '#fff',
	//paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
     alignItems: 'center',
     justifyContent: 'center',
  },
});
