import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/api';
import { GoPerson } from 'react-icons/go';
import Loader from '../../components/Loader/Loader';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovieCast() {
      setStatus('pending');
      try {
        const data = await getMovieCast(movieId);
        setCast(data);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }

    fetchMovieCast();
  }, [movieId]);

  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1> Sorry something went wrong</h1>}
      {cast && cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(item => {
            return (
              <li key={item.id} className={css.item}>
                {item.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
                    alt={item.name}
                    className={css.img}
                  />
                ) : (
                  <GoPerson className={css.icon} />
                )}
                <h4>{item.name}</h4>
                <p>Character: {item.character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>We don't have any information about cast for this movie.</h3>
      )}
    </>
  );
};

export default Cast;
