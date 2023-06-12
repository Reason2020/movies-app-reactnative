import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieList from '../components/MovieList'
import { height, width } from '../constants/otherconstants';
import { Entypo, AntDesign } from '@expo/vector-icons';
import colors from '../constants/colors';
import StarRating from '../components/StarRating';
import GenreCard from '../components/GenreCard';
import CastList from '../components/CastList';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies } from '../api/themoviedb';

const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsScreen = ({ navigation, route }) => {
  // const [ movieId, setMovieId ] = useState('');
  const [ movie, setMovie ] = useState({});
  const [ credits, setCredits ] = useState({});
  const [ similarMovies, setSimilarMovies ] = useState({});
  const [ isFavourite, setIsFavourite ] = useState(false);

  useEffect(() => {
    getMovieDetails(itemId);
    getMovieCredits(itemId);
    getSimilarMovies(itemId);
  }, [itemId]);

  const { itemId } = route.params;
  // setMovieId(itemId);

  const getMovieDetails = async (id) => {
    const data = await fetchMovieDetails(id);
    if (data) setMovie(data);
    // console.log('Movie Details: ', movie);
  }
  const getMovieCredits = async (id) => {
    const data = await fetchMovieCredits(id);
    if (data) setCredits(data);
    // console.log('Credits: ', data);
  }
  const getSimilarMovies = async (id) => {
    const data = await fetchSimilarMovies(id);
    if (data) setSimilarMovies(data.results);
  }

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        {/* back button and heart icon */}
        <View style={styles.topIconsContainer}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Entypo name="chevron-left" size={24} color={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
            <AntDesign name={isFavourite ? 'heart' : 'hearto'} size={24} color={colors.white} />
          </TouchableOpacity>
        </View>

        {/* image container */}
        <View>
          <Image
            source={{uri: `${imageBaseUrl}${movie.poster_path}`}}
            style={styles.imageStyle}
          />
        </View>

        {/* Movie Details */}
        <View style={styles.detailsContainer}>

          {/* title container */}
          <View style={styles.titleContainer}>
            <Text style={styles.movieTitle}>{movie.original_title}</Text>
            <View style={styles.separator}></View>

            {/* star rating component */}
            <StarRating rating={(movie.vote_average/2).toFixed(1)} />
          </View>

          {/* movie tags component */}
          <View style={styles.genreContainer}>
            <FlatList
              data={movie.genres}
              renderItem={({item}) => <GenreCard genre={item.name} key={item.id} />}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* overview component */}
          <View style={styles.overviewContainer}>
            <Text style={styles.overviewTitle}>Overview</Text>
            <Text style={styles.overviewText}>{movie.overview}</Text>
          </View>

          {/* cast list */}
          <CastList castList={credits.cast} navigation={navigation} />

          {/* similar movies list */}
          <MovieList title='Similar' navigation={navigation} moviesList={similarMovies} />
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default MovieDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    position: 'absolute',
    zIndex: 2,
    width
  },
  imageStyle: {
    width,
    height: height*0.37,
    resizeMode: 'stretch',
  },
  detailsContainer: {
    width,
    padding: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    zIndex: 2,
    marginTop: -15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    gap: 20
  },
  movieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 10,
    width: width*0.1,
    backgroundColor: colors.orange,
    borderRadius: 5  
  },
  titleContainer: {
    gap: 4
  },
  genreContainer: {
    flexDirection: 'row',
    gap: 4
  },
  overviewContainer: {
    gap: 4
  },
  overviewTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  overviewText: {
    fontSize: 14,
    fontWeight: '400'
  }
})