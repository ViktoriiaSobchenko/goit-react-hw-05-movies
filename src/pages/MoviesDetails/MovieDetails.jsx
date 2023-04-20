import { useEffect, useState, useRef, Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../services/api';
import { IoArrowBack } from 'react-icons/io5';
import { IoImageOutline } from 'react-icons/io5';
import Loader from '../../components/Loader/Loader';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState('idle');
  const { movieId } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setStatus('pending');
      try {
        const data = await getMovieDetails(movieId);
        setMovie(data);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <main>
      <Link to={backLink.current} className={css.back_link}>
        <button type="button" className={css.button}>
          <IoArrowBack /> Go back
        </button>
      </Link>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1> Sorry something went wrong</h1>}
      {movie && (
        <>
          <div className={css.wrapper}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className={css.img}
              />
            ) : (
              <IoImageOutline className={css.icon} />
            )}

            <div>
              <h1>{movie.original_title}</h1>
              <p>User Score: {Math.round(movie.vote_average * 10)} %</p>
              <h2>Overview</h2>
              <p>{movie.overview}</p>
              <h2>Genres</h2>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </div>
          <div>
            <h2>Additional information</h2>
            <ul className={css.list}>
              <li>
                <NavLink
                  to="cast"
                  className={css.link}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: '#2db2ff',
                        }
                      : { color: '#ffffff' }
                  }
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="reviews"
                  className={css.link}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: '#2db2ff',
                        }
                      : { color: '#ffffff' }
                  }
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
