import { StyleSheet, Text, View, Pressable, ScrollView, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons';
import colors from '../constants/colors';
import MovieList from '../components/MovieList';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../api/themoviedb';
import { height, width } from '../constants/otherconstants';

const HomeScreen = ({ navigation }) => {
    const [ popular, setPopular ] = useState([]);
    const [ upcoming, setUpcoming ] = useState([]);
    const [ topRated, setTopRated ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    //make an api call to retrieve the data
    useEffect(() => {
        getPopularMovies();
        getUpcomingMovies();
        getTopRatedMovies();
        setIsLoading(false);
    }, [])

    const getPopularMovies = async () => {
        const data = await fetchPopularMovies();
        // console.log('got popular movies: ', data);
        if (data && data.results) setPopular(data.results);
    }
    const getUpcomingMovies = async () => {
        const data = await fetchUpcomingMovies();
        // console.log('got upcoming movies: ', data);
        if (data && data.results) setUpcoming(data.results);
    }
    const getTopRatedMovies = async () => {
        const data = await fetchTopRatedMovies();
        // console.log('got top rated movies: ', data);
        if (data && data.results) setTopRated(data.results);
    }

  return (
    <SafeAreaView>
        <StatusBar />
        {isLoading ? (<ActivityIndicator size="large" color={colors.orange} style={{marginTop: height * 0.40}} />) : (
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                {/* headerbar */}
                <View style={styles.headerBar}>
                    {/* todo */}
                    <Pressable onPress={() => null}>
                        <Feather name="align-left" size={24} color="black" />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Search')}>
                        <FontAwesome name="search" size={24} color="black" />
                    </Pressable>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Movies</Text>
                    <View style={styles.separator}></View>
                </View>
                {/* Popular Movies List */}
                <MovieList title="Popular" navigation={navigation} moviesList={popular} />

                {/* Top Rated Movies List */}
                <MovieList title="Top Rated" navigation={navigation} moviesList={topRated}/>

                {/* Upcoming Movies List */}
                <MovieList title="Upcoming" navigation={navigation} moviesList={upcoming}/>
            </ScrollView>
        )}
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    headerBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleContainer: {
        marginVertical: 15
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    separator: {
        height: 6,
        width: width*0.1,
        backgroundColor: colors.orange,
        borderRadius: 5  
    }
})