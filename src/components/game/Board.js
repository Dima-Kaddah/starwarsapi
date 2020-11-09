import React from 'react';
import Card from './Card';
import { Redirect } from 'react-router-dom';

const Board = ({
  cards, flipped, handleClick, disabled, solved, dimension, youWin }) => {

  return (
    <div>
      <div className='board'>
        {youWin ? <Redirect to='/win' /> : (
          cards.map(card => <Card key={card.id} id={card.id} type={card.type} width={dimension / 4.5} height={dimension / 4.5} flipped={flipped.includes(card.id)} handleClick={handleClick} disabled={disabled || solved.includes(card.id)} solved={solved.includes(card.id)} />)
        )}
      </div >
    </div >
  );
};

export default Board;
