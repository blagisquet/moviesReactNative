import React from 'react';
import  { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Search() {
  return (
    <View style={styles.mainContainer}>
      <TextInput placeholder="Titre du film" style={styles.textinput} />
      <Button title="Rechercher" onPress={() => {}} />
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