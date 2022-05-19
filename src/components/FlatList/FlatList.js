import React, { useEffect, Component } from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import apolloProvider from '../../providers/apollo.provider';
import { gql } from "@apollo/client";
import AsyncStorage from '@react-native-community/async-storage';


class newFlatListBasics extends Component {
  constructor(props){
    super(props);
    this.state = {
      communities: [],
      userId: -1
    }
  }

  componentWillReceiveProps(nextProps) {
    let newProps = nextProps.data.map(community => { 
      return { ...community, key: community.name }
    });
    this.setState({ ...this.state, communities: newProps });
  }

  async componentDidMount () { 
		const userId = await AsyncStorage.getItem('userId');
    this.setState({ ...this.state, userId: userId });
  }

  async eliminarComunidad(id, index) {
    console.log("id", id)
		await apolloProvider.mutate({
			mutation: gql`
			mutation {
				deleteComunity(id: ${id})
			}
		  `
		}).catch(err => {

		});
    let newCommunities = this.state.communities;
    console.log(newCommunities.splice(index,1))
    this.setState({ ...this.state, communities: newCommunities });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.communities}
          renderItem={
            ({item, index}) => { 
              return (
                <div style={{ wisth: "100wh" }}>
                  <Text style={styles.item}>{item.key}</Text>
                  <div style={{display: "inline-block", float: "right"}}>
                    { item.creatorId == this.state.userId ?
                      <Button
                      onPress={() => this.eliminarComunidad(item.id, index)}
                      title="Eliminar"
                      color="#841584"
                      style="display: inline-block !important"
                      accessibilityLabel="Learn more about this purple button"
                      />: null  
                    }
                  </div>
                </div>
              ) }}
        />
        
      </View>
    );
  }
}

const styles = {
  container: {
   flex: 1,
   paddingTop: 22,
   width: "100%"
  },
  item: {
    padding: "10",
    left: "10",
    fontSize: 20,
    height: 44,
    display: "inline-block",
    float: "center"
  },
  button: {
    display: "inline-block"
  }
};

export default newFlatListBasics;