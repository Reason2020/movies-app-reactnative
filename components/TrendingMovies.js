import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'

const imageBaseUrl = 'https://image.tmdb.org/t/p/w300';
const { width, height } = Dimensions.get('screen');


const TrendingMovies = ({ navigation, movies }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Trending</Text>
        <Carousel 
            data={movies}
            renderItem={({item}) => <TrendingMovieCard movie={item} navigation={navigation} />}
            firstItem={1}
            inactiveSlideOpacity={0.6}
            sliderWidth={width}
            itemWidth={width * 0.62}
            slideStyle={{alignItems: 'center'}}
        />
    </View>
  )
}

const TrendingMovieCard = ({ navigation, movie }) => {
    return (
        <Pressable onPress={() => navigation.push('MovieDetails', {
            itemId: movie.id
        })}>
            <Image 
                source={{uri: `${imageBaseUrl}${movie.poster_path}`}}
                style={{width: width * 0.6, height: height * 0.4, borderRadius: 8}}
            />
        </Pressable>
    )
}

export default TrendingMovies

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})