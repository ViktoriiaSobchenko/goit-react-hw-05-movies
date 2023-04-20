import { Link, useLocation } from 'react-router-dom';
import { IoImageOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <Link
            to={`/movies/${movie.id}`}
            state={{ from: location }}
            className={css.link}
          >
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                alt={movie.title}
                className={css.img}
              />
            ) : (
              <IoImageOutline className={css.icon} />
            )}
            <h3 className={css.title}>{movie.title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
