import React, { useState } from 'react';
import FilmCard from './FilmCard';


const FilmsList = ({ films }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="films-list">
      <input
        className="search-input"
        type="text"
        value={searchValue}
        placeHolder="Search a movie"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      {films && films.filter(film => {
        if (searchValue.length > 2) {
          return film.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
        }
        return film;
      }).map(film => {
        return <FilmCard film={film} key={film.title} />;
      })}
    </div>
  );
};

export default FilmsList;