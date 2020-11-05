import React from 'react';
import './Card.css';

const Card = ({
  id,
  width,
  height,
  type,
  flipped,
  disabled,
  solved,
  handleClick }) => {

  return (
    <div className='Allcards'>
      <div className={`flip-container ${flipped ? 'flipped' : ''}`} style={{ width, height }} onClick={() => disabled ? null : handleClick(id)}>
        <div className='flipper'>
          <img style={{ height, width }} className={flipped ? 'front' : 'back'} src={flipped || solved ? `/img/${type}.png` : '/img/back2.png'} />
        </div>
      </div >
    </div>
  );
};

export default Card;
