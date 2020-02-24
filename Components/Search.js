import React from 'react';
import { ActivityIndicator, StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native';

import FilmItem from './FilmItem';

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = '';
    this.state = {
      films: [],
      isLoading: false
    };
  }

  _displayLoading() {
    if(this.state.isLoading) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _loadFilms() {
    if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
        this.setState({
          films: data.results,
          isLoading: false
        })
      })
    }
  }

  _searchTextInputChanged(text) {
    this.searchedText = text
  }

  render() {
    console.log(this.state.isLoading);
    return (
      <View style={styles.mainContainer}>
        <TextInput
          placeholder="Titre du film"
          style={styles.textinput}
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()}
        />
        <Button title="Rechercher" onPress={() => { this._loadFilms() }} />
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />} 
        />
        {this._displayLoading()}
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
  },
  loadingContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})