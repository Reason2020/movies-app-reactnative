import { StyleSheet, Text, Image, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { fallbackMoviePoster, height, width } from '../constants/otherconstants';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ movieDetails, navigation }) => {
    // console.log('details of the movie: ', movieDetails);
  return (
    <Pressable style={styles.container} onPress={() => navigation.push('MovieDetails', {
        itemId: movieDetails.id
    })}>
        <Image 
            source={{uri: movieDetails.poster_path !== null ? `${imageBaseUrl}${movieDetails.poster_path}` : fallbackMoviePoster}}
            style={styles.moviePoster}
        />
        <Text style={styles.movieTitle} numberOfLines={2}>{movieDetails.title}</Text>
    </Pressable>
  )
}

export default MovieCard

const styles = StyleSheet.create({
    container: {
        width: width*0.32,
        marginRight: 4
    },
    moviePoster: {
        // width: width*0.35,
        height: height*0.25,
        resizeMode: 'contain',
        borderRadius: 13
    },
    movieTitle: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
})