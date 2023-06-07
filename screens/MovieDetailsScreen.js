import { SafeAreaView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import MovieList, { MovieData } from '../components/MovieList'
import { Entypo, AntDesign } from '@expo/vector-icons';
import colors from '../constants/colors';
import StarRating from '../components/StarRating';
import GenreCard from '../components/GenreCard';
import CastList from '../components/CastList';
import { fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies } from '../api/themoviedb';

const { width, height } = Dimensions.get('screen');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

const spiderManDetails = {
  title: 'Spider-Man: Across the Spider-Verse',
  genres: ['Action', "Adventure", 'Animation', 'Science Fiction'],
  overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
  cast: [
    {gender: 2, name: 'Shameik Moore', profile_path: 'https://image.tmdb.org/t/p/w185/uJNaSTsfBOvtFWsPP23zNthknsB.jpg', id: 587506, index: 1},
    {gender: 2, name: 'Shameik Moore', profile_path: 'https://image.tmdb.org/t/p/w185/uJNaSTsfBOvtFWsPP23zNthknsB.jpg', id: 587506, index: 2},
    {gender: 2, name: 'Shameik Moore', profile_path: 'https://image.tmdb.org/t/p/w185/uJNaSTsfBOvtFWsPP23zNthknsB.jpg', id: 587506, index: 3},
    {gender: 2, name: 'Shameik Moore', profile_path: 'https://image.tmdb.org/t/p/w185/uJNaSTsfBOvtFWsPP23zNthknsB.jpg', id: 587506, index: 4},
    {gender: 2, name: 'Shameik Moore', profile_path: 'https://image.tmdb.org/t/p/w185/uJNaSTsfBOvtFWsPP23zNthknsB.jpg', id: 587506, index: 5},
    {gender: 2, name: 'Shameik Moore', profile_path: 'https://image.tmdb.org/t/p/w185/uJNaSTsfBOvtFWsPP23zNthknsB.jpg', id: 587506, index: 6},
  ],
  similar: [...MovieData],
  imgUrl: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
  rating: 4.5
}

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