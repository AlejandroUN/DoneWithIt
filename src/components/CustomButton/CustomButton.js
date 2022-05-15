import React from 'react'
import { View, Text, TextInput, Image, Pressable, StyleSheet, useWindowDimensions } from 'react-native'
import customButton from '.';
import Logo from '../../../assets/images/Meddit.jpg';

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
	const {height} = useWindowDimensions();
	return (
		<Pressable 
		onPress={onPress} 
		style={[styles.container, styles[`container_${type}`]]}>
			<Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container:{
		width: '100%',

		padding: 15,
		marginVertical: 5,

		alignItems: 'center',
		borderRadius: 5,
	},

	container_PRIMARY:{
		backgroundColor: '#3B71F3',
	},
	container_TERTIARY:{
		
	},
	text: {
		fontWeight: 'bold',
		color: 'white',
	},
	text_TERTIARY:{
		color: 'gray',
	},
	root: {
		alignItems: 'center',
		padding: 20,
	},
	logo: {
		width: '20%',
		maxWidth: 300,
		maxHeight: 200,
	}
})

export default CustomButton;