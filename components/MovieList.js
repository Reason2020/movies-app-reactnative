import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MovieCard from './MovieCard'
import colors from '../constants/colors'

const MovieList = ({ title, navigation, moviesList }) => {
    if (title === 'Similar') console.log('Similar', moviesList);
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