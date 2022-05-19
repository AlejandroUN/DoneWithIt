import React, { Component, useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, SafeAreaView, TextInput} from 'react-native'
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import FlatList from '../../components/FlatList';
import apolloProvider from '../../providers/apollo.provider';
import { gql } from "@apollo/client";

class CommunityScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            communities: [],
            filteredCommunities: [],
            filter: ""
        };
    }

    componentDidMount(){
        const { navigation } = this.props;
        navigation.addListener ('focus', async () =>{ this. fetchCommunities() });
    }

    filterCommunities(){
        let filteredCommunities = this.state.communities.filter(
            community => {
                return community.name.includes(this.state.filter)
            }
        )
        this.setState({ ...this.state, filteredCommunities });
        console.log(filteredCommunities)
    }

    deleteCommunity(index){
        console.log(this.state)
        const newa = this.state.communities.splice(index, 1);
        console.log(newa)
    }

    async fetchCommunities(){
        console.log("fetch")
        const response = await apolloProvider.query({
			query: gql`
			query {
				allComunities {
					id,
                    name,
                    description,
                    creatorId   
				}
			}
		  `
		}).catch(err => {

		})
        let communities = response.data.allComunities.map(community =>{
            const NewCommunity = { ...community, name: community.name };
            return NewCommunity;
        });
        this.setState({ communities, filteredCommunities: communities });
    }

    render(){
        const { navigate } = this.props.navigation;
        let filter = "";

        return (
            <ScrollView>
                <View style={styles.main}>
                    <Text style={styles.title}>
                        Communities
                    </Text>
                    <CustomInput 
                    placeholder="Nombre"
                    value={this.state.filter} 
                    setValue={(value)=>{ this.setState({...this.state, filter: value })}} 
                    />
                    <CustomButton text={"Buscar"} onPress={() => this.filterCommunities(filter)}/>
                    <FlatList data={this.state.filteredCommunities} refreshCommunity={this.fetchCommunities}/>
                    <CustomButton text={"Nueva"} onPress={() => navigate('NewCommunity')} />
                </View>
            </ScrollView>
        )
    }

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


export default CommunityScreen;