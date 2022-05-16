import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../assets/images/Meddit.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
	const [code, setCode] = useState('');
	const [newPassword, setNewPassword] = useState('');
	
	const navigation = useNavigation();

	const onSubmitPressed = () => {
		console.warn("onSubmitPressed");
		navigation.navigate('Home');
	}
	const onSignInPress = () => {
		console.warn("onSignInPress");
		navigation.navigate('SignIn');
	}		

	const {height} = useWindowDimensions();
	return (
		// We put the hole view inside the ScrollView so that the user is able to scroll through the screen
		<ScrollView>
		<View style={styles.root}>
			<Text style={styles.title}>Reset your password</Text>

			<CustomInput 
			placeholder="Code" 
			value={code} 
			setValue={setCode} 
			/>
			<CustomInput 
			placeholder="Enter your new password" 
			value={newPassword} 
			setValue={setNewPassword} 
			/>
			
			<CustomButton 
			text="Submit" 
			onPress={onSubmitPressed} 
			/>

			<CustomButton 
			text="Back to Sign in" 
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

export default NewPasswordScreen;