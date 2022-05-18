import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView} from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import FlatList from '../../components/FlatList';
import { useNavigation } from '@react-navigation/native';

const CommunityScreen = ()=>{
    //const {height} = useWindowDimensions();
    const navigation = useNavigation();
	
	const onNewPressed = () => {
		navigation.navigate('NewCommunity');
	}
    return (
        <ScrollView>
            <View style={styles.main}>
                <Text style={styles.title}>
                    Comunidades
                </Text>
                <CustomInput placeholder="Buscar"/>
                <CustomButton text={"Buscar"}/>
                <FlatList/>
                <CustomButton text={"Nueva"} onPress={onNewPressed} />
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