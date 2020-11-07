import React from 'react';
import alongtimeago from '../images/alongtimeago.png';
import starWarsLogo from '../images/starwarsLogo.png';
import { Link } from 'react-router-dom';
import enjoyGif from '../images/starwarsinfo.gif';
import './HomePage.css';

const HomePage = () => {
  return (
    <React.Fragment>
      <div className='home-container'>
        <img className='alongtimeago' src={alongtimeago} />
        <img className='starWarsLogo' src={starWarsLogo} />
      </div>
      <div className='info'>
        <p className='p1'>This web site is about</p>
        <p className='p2'>Star Wars MOVIES and CHARACTERS</p>
        <p className='p3'> Useing <a href='https://swapi.dev/'>SWAPI</a></p>
        <p className='p4'>And you can also enjoy</p>
        <p className='p5'>Memory Card Star Wars Game...</p>
        <Link to='/game' ><img className='enjoy' src={enjoyGif} /></Link>
      </div>
    </React.Fragment >
  );
};

export default HomePage;