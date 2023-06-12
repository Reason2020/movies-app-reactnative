import { apiKey } from "../constants/otherconstants";
import axios from "axios";

//endpoints
const apiBaseUrl = 'https://api.themoviedb.org/3';
const popularMoviesEndpoint = `${apiBaseUrl}/movie/popular?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

//dynamic endpoints
const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
const creditsDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const moviesByCreditsEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

//apicall method
const apiCall = async (endpoint, params) => {
    const options = {
        method: 'GET',
        url: endpoint,
        params: params ? params : {}
    }

    try {
        const response = await axios.request(options);
        return response.data;
    } catch(error) {
        console.log('error: ' + error);
        return {}
    }
}

export const fetchPopularMovies = () => {
    return apiCall(popularMoviesEndpoint);
}
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}
export const fetchMovieDetails = (id) => {
    return apiCall(movieDetailsEndpoint(id));
}
export const fetchMovieCredits = (id) => {
    return apiCall(movieCreditsEndpoint(id));
}
export const fetchSimilarMovies = (id) => {
    return apiCall(similarMoviesEndpoint(id));
}
export const fetchCreditsDetails = (id) => {
    return apiCall(creditsDetailsEndpoint(id));
}
export const fetchMoviesByCredits = (id) => {
    return apiCall(moviesByCreditsEndpoint(id));
}
export const fetchMovieBySearch = (movieName) => {
    return apiCall(searchMoviesEndpoint, {query: `${movieName}`, include_adult: 'false', language: 'en-US', page: '1'});
}