import { useState, useEffect } from 'react';
import { getTrandingMovies } from '../../services/api';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchTrandingMovies() {
      setStatus('pending');
      try {
        const { data } = await getTrandingMovies();
        setTrandingMovies(data.results);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }

    fetchTrandingMovies();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1> Sorry something went wrong</h1>}
      <MoviesList movies={trandingMovies} />
    </main>
  );
};
export default Home;
