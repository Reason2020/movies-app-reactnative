import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import { fetchCreditsDetails, fetchMoviesByCredits } from '../api/themoviedb';
import MovieList from '../components/MovieList';

//constants
const { width, height } = Dimensions.get('screen');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w185';
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const CastDetailsScreen = ({ navigation, route }) => {
  const [ cast, setCast ] = useState({});
  const [ movies, setMovies ] = useState([]);

  //api call
  useEffect(() => {
    getCreditsDetails(itemId);
    getMoviesByCreditsId(itemId);
  }, [itemId]);
  //api call method
  const getCreditsDetails = async (id) => {
    const data = await fetchCreditsDetails(id);
    // console.log(data);
    if (data) setCast(data);
  }
  const getMoviesByCreditsId = async (id) => {
    const data = await fetchMoviesByCredits(id);
    console.log('Movies of cast are: ', data);
    if (data) setMovies(data.cast);
  }

  const castAge = cast.birthday && currentYear - cast.birthday.split('-')[0];

  //get id from router
  const { itemId } = route.params;
  // console.log(itemId);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        
        {/* back button container */}
        <View style={styles.topIconContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Entypo name="chevron-left" size={24} color={colors.black} />
          </TouchableOpacity>
        </View>

        {/* cast image container */}
        <View style={styles.imageContainer}>
          <Image 
            source={{uri: `${imageBaseUrl}${cast.profile_path}`}}
            style={styles.imageStyle}
          />
        </View>

        {/* cast details container */}
        <View style={styles.detailsContainer}>
          <Text style={styles.castName}>{cast.name}</Text>
          <Text style={styles.minorDetails}>{castAge}, {cast.gender === 1 ? 'Female' : 'Male'}</Text>
        </View>

      {/* biography container */}
      <View>
        <Text style={styles.biographyTitle}>Biography</Text>
        <Text style={styles.biographyText}>{cast.biography}</Text>
      </View>

      {/* cast movies */}
      <MovieList title="Movies" navigation={navigation} moviesList={movies} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CastDetailsScreen

const styles = StyleSheet.create({
  container: {
    padding: 5,
    gap: 15
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  imageStyle: {
    height: height * 0.4,
    width: height * 0.4,
    borderRadius: height * 0.2,
    resizeMode: 'contain'
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  castName: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  minorDetails: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  biographyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    marginBottom: 6
  },
  biographyText: {
    fontSize: 14,
    fontWeight: '400',
    paddingHorizontal: 5
  }
})