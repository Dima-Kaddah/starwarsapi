import React, { Fragment, useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa';
import useLocalStorage from '../../hooks/useLocalStorage';

const FilmCard = ({ film }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [animation, setAnimation] = useState('');
  const [rating, setRating] = useLocalStorage(film.title, null);
  const [hover, setHover] = useState(null);


  return (
    <Fragment>
      <div className="film-item">
        <h3>{film.title}</h3>
        <button onClick={() => {
          setShowDetails(!showDetails);
          setAnimation('crawl-text');
        }}>
          {showDetails ? <i class="fas fa-film"> Less</i> : <i class="fas fa-film"> More </i>}
        </button>
        <div className={showDetails ? `more-info` : `hide`}>
          <div className='opening_crawl'>
            <p className={animation}>{film.opening_crawl}</p>
          </div>
          <p>
            <em>Released: </em>
            {film.release_date.substring(0, 4)}
          </p>
        </div>
        <div>
          <p>{rating === null ? 'Please rate this Movie' : `Your rating for this Movie is : ${rating} 
          ${rating <= 1 ? 'Star' : 'Stars'}`} </p>
          {[...Array(5)].map((star, i) => {
            const ratingVal = i + 1;
            return (
              <label>
                <input type='radio' name={film.title} value={ratingVal} onClick={() => {
                  if (rating === ratingVal) {
                    setRating(null);
                  } else {
                    setRating(ratingVal);
                  }
                }}
                />
                <FaStar className='stars' color={ratingVal <= (hover || rating) ? '#FFE400' : '#685f53'} size={20} onMouseEnter={() => setHover(ratingVal)} onMouseLeave={() => setHover(null)} />
              </label>);
          })}

        </div>
      </div>
    </Fragment>

  );
};

export default FilmCard;;;
