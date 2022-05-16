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
                <CustomInput/>
                <CustomButton text={"Buscar"}/>
                <FlatList/>
                <CustomInput/>
                <CustomButton text={"Crear"}/>
            </View>
        </ScrollView>
        // <FlatList style={styles.main}/>
    )
}

const styles = StyleSheet.create({
	main: {
		alignItems: 'center',
		padding: 20,
	},
	title: {
		color: 'indigo',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 40,
	}
})

export default CommunityScreen