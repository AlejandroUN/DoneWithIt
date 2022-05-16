import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView} from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import FlatList from '../../components/FlatList';

const CommunityScreen = ()=>{
    //const {height} = useWindowDimensions();
    return (
        <ScrollView>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Comunidades
                </Text>
                <CustomInput placeholder="Buscar"/>
                <CustomButton text={"Buscar"}/>
                <FlatList/>
                <CustomInput placeholder="Nueva"/>
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

export default CommunityScreen