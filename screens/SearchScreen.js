import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { fetchMoviesBySearch } from '../api/themoviedb';
import MovieCard from '../components/MovieCard';

const { width, height } = Dimensions.get('screen');

const SearchScreen = ({ navigation }) => {
  const [ movieName, setMovieName ] = useState('');
  const [ moviesList, setMoviesList ] = useState([]);

  // console.log(movieName);
  useEffect(() => {
    getMoviesBySearch();
  }, [movieName]);

  //get the movies list
  const getMoviesBySearch = async () => {
    const data = await fetchMoviesBySearch(movieName);
    setMoviesList(data.results);
  }

  return (
    <SafeAreaView>
      {/* search field container */}
      <View style={styles.searchFieldContainer}>
        <Pressable onPress={() => navigation.pop()}>
          <Entypo name='chevron-left' size={24} color={colors.black}/>
        </Pressable>
        <TextInput 
          style={styles.inputField}
          placeholder='Search movies...'
          onChangeText={setMovieName}
          value={movieName}
        />
      </View>

      {/* movies list container */}
      <ScrollView style={{padding: 5}}>
        <Text>{moviesList.length} Results found</Text>
        <View style={styles.moviesListContainer}>
          {moviesList.map((item, index) => {
            return (
              <Pressable key={index}>
                <MovieCard navigation={navigation} movieDetails={item} />
              </Pressable>
            )
          })}
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  searchFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.9,
    padding: 5
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 5,
    padding: 4,
    width: width * 0.87
  },
  moviesListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})