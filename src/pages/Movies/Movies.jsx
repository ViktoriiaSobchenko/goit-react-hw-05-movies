import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from '../../services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';
import css from './Muvies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.currentTarget.elements.searchQuery.value.trim();
    if (searchQuery === '') {
      return alert('Please enter word to search');
    }
    setSearchParams({ query: searchQuery });
    evt.currentTarget.reset();
  };
  useEffect(() => {
    if (!query) return;
    async function fetchMoviesByQuery() {
      setStatus('pending');
      try {
        const data = await getMoviesByQuery(query);
        if (data.results.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(data.results);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }
    fetchMoviesByQuery();
  }, [query]);

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && (
        <h1>
          Sorry something went wrong. We don't have any movie for this query.
          Try again.
        </h1>
      )}
      <MoviesList movies={movies} />
    </main>
  );
};
export default Movies;
