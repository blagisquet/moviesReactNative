import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

import FilmItem from './FilmItem';

import data from '../Helpers/filmsData';

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this._films = [];
  }

  _loadFilms() {
    getFilmsFromApiWithSearchedText("star").then(data => {
      this._films = data.results;
      this.forceUpdate();
    });
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <TextInput placeholder="Titre du film" style={styles.textinput} />
        <Button title="Rechercher" onPress={() => { this._loadFilms() }} />
        <FlatList
          data={this._films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />} />
      </View>
    );
  }
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