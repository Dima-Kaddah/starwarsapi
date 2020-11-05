import React, { useState, useEffect } from 'react';
import useHttpClient from '../hooks/http-hook';
import CharsList from '../components/characters/CharList';
import ErrorGif from '../images/error.gif';
import LoadingGif from '../images/loading3.gif';

const StarWarsChars = () => {
  const [chars, setChars] = useState([]);

  const { isLoading, error, sendRequest } = useHttpClient();

  const getFilms = async () => {
    let CharsData;
    try {
      CharsData = await sendRequest(`https://swapi.dev/api/people/`);
      setChars(CharsData.results);

    } catch (err) {
      console.log({ error }, err);
    }
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <React.Fragment>
      <div className='app-container'>
        <div className='loadin-err'>
          {isLoading && <img src={LoadingGif} alt='Loading' />}
          {error && <img src={ErrorGif} alt='Error' />}
        </div>
        {!error && !isLoading &&
          <CharsList chars={chars} />}
      </div>
    </React.Fragment>
  );
};

export default StarWarsChars;