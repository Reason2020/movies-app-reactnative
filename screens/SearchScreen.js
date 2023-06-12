import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import MovieCard from '../components/MovieCard';
import colors from '../constants/colors';
import { fetchMovieBySearch } from '../api/themoviedb';

const SearchScreen = ({ navigation }) => {
  const [ movieName, setMovieName ] = useState('');
  const [ searchResult, setSearchResult ] = useState([]);

  useEffect(() => {
    getMoviesBySearch();
  }, [movieName]);

  //getting movies
  const getMoviesBySearch = async () => {
    const data = await fetchMovieBySearch(movieName);
    // console.log(data.results);
    setSearchResult(data.results);
  }

  return (
    <SafeAreaView style={{padding: 8}}>
      {/* search field container */}
      <View style={styles.searchFieldContainer}>
          <Pressable onPress={() => navigation.pop()}>
              <Entypo name='chevron-left' size={24} color={colors.black} />
          </Pressable>
          <TextInput
              style={styles.inputField}
              onChangeText={setMovieName}
              value={movieName}
              placeholder='Search Movies...'
          />
      </View>

      {/* movies list */}
      <ScrollView>
          <Text>({searchResult.length}) Results:</Text>
          <View style={styles.moviesListContainer}>
            {searchResult && searchResult.map((item, index) => {
              return (
                <MovieCard movieDetails={item} navigation={navigation} key={index} />
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
    alignItems: 'center'
  },
  inputField: {
    borderColor: colors.orange,
    borderWidth: 1,
    borderRadius: 30,
    padding: 8,
    width: Dimensions.get('screen').width * 0.88
  },
  moviesListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})