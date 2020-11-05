import React, { useState, useEffect } from 'react';
import Board from './Board';
import initializeDeck from './Deck';

const Game = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [dimension, setDimension] = useState(false);

  useEffect(() => {
    resizeBoard();
    setCards(initializeDeck());
  }, []);

  useEffect(() => {
    perloadImages();
  }, [cards]);


  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find(card => card.id === id);
    const flippedCard = cards.find(card => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;

  };
  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const perloadImages = () => {
    cards.map(card => {
      const src = `/img/${card.type}.png`;
      new Image().src = src;

    });
  };

  useEffect(() => {
    const resizeListener = window.addEventListener('resize', resizeBoard);
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  const resizeBoard = () => {
    setDimension(Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight));
  };

  return (
    <div >
      <h1>lets play</h1>
      <Board cards={cards} handleClick={handleClick} flipped={flipped} disabled={disabled} solved={solved} dimension={dimension} />
    </div >
  );
};

export default Game;