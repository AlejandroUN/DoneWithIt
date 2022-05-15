import React from 'react'
import { View, Text, TextInput, Image, StyleSheet, useWindowDimensions } from 'react-native'
import Logo from '../../../assets/images/Meddit.jpg';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
	const {height} = useWindowDimensions();
	return (
		<View style={styles.container}>
			<TextInput 
			value={value}
			onChangeText={setValue}
			placeholder={placeholder} 
			style={styles.input}
			secureTextEntry={secureTextEntry}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container:{
		backgroundColor: 'white',
		width: '100%',

		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 5,

		paddingHorizontal: 10,
		marginVertical: 10,
	},
	input: {

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

export default CustomInput;