import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: '#Tv'},
          {key: '#Cine'},
          {key: '#Comida'},
          {key: '#Juegos'},
          {key: '#Manualidades'},
          {key: '#Lugares'},
          {key: '#Economia'},
          {key: '#Ciencia'},
          {key: '#Idiomas'},
          {key: '#Matemáticas'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default FlatListBasics;