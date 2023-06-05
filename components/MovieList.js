import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieCard from './MovieCard'
import colors from '../constants/colors'

const MovieData = [
    {
        id: 1,
        imgUrl: 'https://image.tmdb.org/t/p/w300/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
        title: 'Spider-Man: Across the Spider-Verse'
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

const MovieList = ({ title }) => {
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.categoryTitle}>{title}</Text>
            <Pressable>
                <Text style={styles.moreBtn}>More</Text>
            </Pressable>
        </View>
        <FlatList 
            data={MovieData}
            renderItem={({item}) => <MovieCard movieDetails={{...item}} />}
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