import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import Loader from '../../components/Loader/Loader';
import css from './Rewiews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    async function fetchMovieReviews() {
      setStatus('pending');
      try {
        const data = await getMovieReviews(movieId);
        setReviews(data);
        setStatus('resolved');
      } catch (error) {
        console.log(error.message);
        setStatus('rejected');
      }
    }

    fetchMovieReviews();
  }, [movieId]);
  return (
    <>
      {status === 'pending' && <Loader />}
      {status === 'rejected' && <h1> Sorry something went wrong</h1>}
      {reviews && reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>Character: {review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </>
  );
};
export default Reviews;
