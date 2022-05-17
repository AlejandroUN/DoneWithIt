import React, {useState} from 'react'
import { View, Text, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';


const NewCommunityScreen = ()=>{
    return (
        <ScrollView>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Nueva Comunidad
                </Text>
                <CustomInput placeholder="Nombre"/>
                <CustomInput placeholder="Descripción"/>
                <CustomButton text={"Crear"}/>
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