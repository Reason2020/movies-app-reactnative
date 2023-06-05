import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('screen');

const MovieCard = ({ movieDetails }) => {
  return (
    <View style={styles.container}>
        <Image 
            source={{uri: movieDetails.imgUrl}}
            style={styles.moviePoster}
        />
        <Text style={styles.movieTitle} numberOfLines={2}>{movieDetails.title}</Text>
    </View>
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