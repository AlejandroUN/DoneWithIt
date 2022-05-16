import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Meddit.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onSignInPressed = () => {
		console.warn("Sign In");
	}
	const onForgotPasswordPressed = () => {
		console.warn("onForgotPasswordPressed");
	}	
	const onSignUpPress = () => {
		console.warn("onSignUpPress");
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
			text="Forgot password?" 
			onPress={onForgotPasswordPressed} 
			type="TERTIARY" 
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