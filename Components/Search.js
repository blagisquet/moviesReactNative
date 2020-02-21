import React from 'react';
import  { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

import FilmItem from './FilmItem';

import data from '../Helpers/filmsData';

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Titre du film" style={styles.textinput} />
      <Button title="Rechercher" onPress={() => {}} />
      <FlatList 
      data={data} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item}) => <FilmItem film={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 40
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})