import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '527e0abd6c1939f1ffcc5ad4666908d5';

export async function getTrandingMovies() {
  const data = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return data;
}

export async function getMoviesByQuery(query) {
  const { data } = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data;
}

export async function getMovieDetails(movieId) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return responce.data;
}

export async function getMovieCast(movieId) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return responce.data.cast;
}

export async function getMovieReviews(movieId) {
  const responce = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return responce.data.results;
}
