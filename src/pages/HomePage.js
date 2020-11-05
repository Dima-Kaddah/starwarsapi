import React from 'react';
import alongtimeago from '../images/alongtimeago.png';
import starWarsLogo from '../images/starwarsLogo.png';
import './HomePage.css';

const HomePage = () => {

  return (
    <React.Fragment>
      <div className='home-container'>
        <img className='alongtimeago' src={alongtimeago} />
        <img className='starWarsLogo' src={starWarsLogo} />
      </div>
    </React.Fragment >
  );
};

export default HomePage;