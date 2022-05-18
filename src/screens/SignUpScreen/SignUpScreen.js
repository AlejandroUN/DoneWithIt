import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Meddit.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRepeat, setPasswordRepeat] = useState('');

	const navigation = useNavigation();	

	const onRegisterPressed = () => {
		console.warn("onRegisterPressed");
		//validation
		console.log(username);
		console.log(email);

		navigation.navigate('Home');
	}
	const onSignInPress = () => {
		console.warn("onSignIpPress");
		navigation.navigate('SignIn');
	}	
	const onTermsOfUsePressed = () => {
		console.warn("termsOfUsePressed");
	}	
	const onPrivacyPressed = () => {
		console.warn("privacyPressed");
	}	
	

	const {height} = useWindowDimensions();

	return (
		// We put the hole view inside the ScrollView so that the user is able to scroll through the screen
		<ScrollView>
		<View style={styles.root}>
			<Text style={styles.title}>Create an account</Text>

			<CustomInput 
			placeholder="Username" 
			value={username} 
			setValue={setUsername} 
			/>
			<CustomInput 
			placeholder="Email" 
			value={email} 
			setValue={setEmail} 
			/>

			<CustomInput 
			placeholder="Password" 
			value={password} 
			setValue={setPassword}
			secureTextEntry={true} 
			/>
			<CustomInput 
			placeholder="Repeat Password" 
			value={passwordRepeat} 
			setValue={setPasswordRepeat}
			secureTextEntry={true} 
			/>

			<CustomButton 
			text="Register" 
			onPress={onRegisterPressed} 
			/>

			<Text style={styles.text}>
				By registering, you confirm that you accept our{' '} 
				<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of use</Text> and{' '} 
				<Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
			</Text>

			<CustomButton 
			text="Have an account? Sign in" 
			onPress={onSignInPress} 
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
	},
	title:{
		fontSize: 24,
		fontWeight: 'bold',
		color: '#051C60',
		margin: 10,
	},
	text:{
		color:'gray',
		marginVertical: 10,
	},
	link: {
		color: "#FDB075",
	},
})

export default SignUpScreen;