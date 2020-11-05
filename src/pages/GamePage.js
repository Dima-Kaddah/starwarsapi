import React from 'react';

import Game from '../components/game/Game';

const GamePage = () => {

  return (
    <React.Fragment>
      <div className='game-container'>
        <Game />
      </div>
    </React.Fragment >
  );
};

export default GamePage;