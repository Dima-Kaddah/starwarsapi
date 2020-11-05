import React, { Fragment, useState } from 'react';
import CharCard from './CharCard';

const CharsList = ({ chars }) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Fragment>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        placeHolder="Search a characters"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <div className="char-list">
        {chars && chars.filter(char => {
          if (searchValue.length > 2) {
            return char.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
          }
          return char;
        }).map(char => {
          return <CharCard char={char} key={char.name} />;
        })}
      </div>
    </Fragment>
  );
};

export default CharsList;

