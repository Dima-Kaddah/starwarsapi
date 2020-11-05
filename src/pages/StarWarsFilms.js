import React, { useState, useEffect } from 'react';
import useHttpClient from '../hooks/http-hook';
import FilmsList from '../components/film/FilmsList';
import ErrorGif from '../images/error.gif';
import LoadingGif from '../images/loading3.gif';

const StarWarsFilms = () => {
  const [films, setFilms] = useState([]);

  const { isLoading, error, sendRequest } = useHttpClient();

  const getFilms = async () => {

    let filmsdata;
    try {
      filmsdata = await sendRequest(`https://swapi.dev/api/films/`);
      setFilms(filmsdata.results);

    } catch (err) {
      console.log({ error }, err);
    }

  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <React.Fragment>
      <div className="app-container">
        <div className='loadin-err'>
          {isLoading && <img src={LoadingGif} alt="Loading" />}
          {error && <img src={ErrorGif} alt="Error" />}
        </div>
        {!error && !isLoading &&
          <FilmsList films={films} />}
      </div>
    </React.Fragment>
  );


};
export default StarWarsFilms;