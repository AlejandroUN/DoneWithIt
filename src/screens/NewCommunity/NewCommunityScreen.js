import React, {useState} from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import apolloProvider from '../../providers/apollo.provider';
import { gql } from "@apollo/client";
import AsyncStorage from '@react-native-community/async-storage';


const NewCommunityScreen = () => {
    const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	const navigation = useNavigation();

	const newCommunityPressed = async () => {
		const userId = await AsyncStorage.getItem('userId');
        console.log(userId)
		const communityData = await apolloProvider.mutate({
			mutation: gql`
			mutation {
				createComunity(comunity: { 
                    name: "${name}"
                    description: "${description}"
                    creatorId: ${userId}
				}) {
					id
				}
			}
		  `
		}).catch(err => {

		})
        console.log(communityData)
		navigation.navigate('Communities');
	}

    return (
        <ScrollView>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Nueva Comunidad
                </Text>
                <CustomInput 
                placeholder="Nombre"
                value={name} 
                setValue={setName} 
                />
                <CustomInput 
                placeholder="Descripción"
                value={description} 
                setValue={setDescription} 
                />
                <CustomButton 
                text={"Crear"}
                onPress={newCommunityPressed} 
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
	main: {
		alignItems: 'center',
		padding: 20,
        display: 'flex'
	},
	title: {
		color: 'indigo',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 40,
	}
})

export default NewCommunityScreen