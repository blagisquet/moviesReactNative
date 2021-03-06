import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { getImageFromApi} from '../API/TMDBApi';

export default class FilmItem extends React.Component {
  render() {
    const film = this.props.film;
    return (
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={{ uri: getImageFromApi(film.poster_path)}} />
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>{film.title}</Text>
            <Text style={styles.voteText}>{film.vote_average}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText} numberOfLines={6}>{film.overview}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>{film.release_date}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5
  },
  contentContainer: {
    flex: 1,
    margin: 5
  },
  headerContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  voteText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  descriptionContainer: {
    flex: 7
  },
  descriptionText: {
    fontStyle: 'italic',
    color: '#666666'
  },
  dateContainer: {
    flex: 1
  },
  dateText: {
    textAlign: 'right',
    fontSize: 14
  }
})