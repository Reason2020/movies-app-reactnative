import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieCard from './MovieCard'
import colors from '../constants/colors'

export const MovieData = [
    {
        id: 1,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse',
        rating: 4.5,
        tags: ['Action', ]
    },
    {
        id: 2,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 3,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 4,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 5,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 6,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 7,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 8,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 9,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    },
    {
        id: 10,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
    }
]

const MovieList = ({ title, navigation, moviesList }) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.categoryTitle}>{title}</Text>
        </View>
        <FlatList 
            data={moviesList}
            renderItem={({item}) => <MovieCard movieDetails={{...item}} navigation={navigation} />}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default MovieList

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 5
    },
    categoryTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    moreBtn: {
        // fontSize: 18,
        // fontWeight: 'bold',
        color: colors.orange
    }
})