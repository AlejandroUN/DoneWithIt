import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Meddit.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import apolloProvider from '../../providers/apollo.provider';
import { gql } from "@apollo/client";
import AsyncStorage from '@react-native-community/async-storage';

const SignInScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigation = useNavigation();

	const onSignInPressed = async () => {
		console.warn("Sign In");
		console.log("nuevo")
		console.log("username", username, "pasword", password);
		const userdata = await apolloProvider.mutate({
			mutation: gql`
			mutation{
				loginUser(user: { 
					email: "${username}",
					password: "${password}"
				}) {
					id
				}
			}
		  `
		}).catch(err => {

		})
		AsyncStorage.setItem("userId", userdata.data.loginUser.id);
		navigation.navigate('Communities');
	}

	const onForgotPasswordPressed = () => {
		console.warn("onForgotPasswordPressed");
		navigation.navigate('ForgotPassword');
	}	
	const onSignUpPress = () => {
		console.warn("onSignUpPress");
		navigation.navigate('SignUp');
	}	
	

	const {height} = useWindowDimensions();
	return (
		// We put the hole view inside the ScrollView so that the user is able to scroll through the screen
		<ScrollView>	
		<View style={styles.root}>
			<Image 
			source={Logo} 
			style={[styles.root, {height: height * 0.3}]} 
			resizeMode="contain" 
			/>

			<CustomInput 
			placeholder="Username" 
			value={username} 
			setValue={setUsername} 
			/>

			<CustomInput 
			placeholder="Password" 
			value={password} 
			setValue={setPassword}
			secureTextEntry={true} 
			/>

			<CustomButton 
			text="Sign In" 
			onPress={onSignInPressed} 
			/>

			<CustomButton 
			text="Don't have an account? Create one" 
			onPress={onSignUpPress} 
			type="TERTIARY" 
			/>
		</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	root: {
		alignItems: 'center',
		padding: 20,
	},
	logo: {
		width: '70%',
		maxWidth: 300,
		maxHeight: 200,
	}
})

export default SignInScreen