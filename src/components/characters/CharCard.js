import React from 'react';
import CharsDetails from './CharsDetails';

const CharCard = ({ char }) => {
  return (
    <div className="char-item">
      <div className="char-info">
        <p>
          Name: {char.name}
        </p>
        <p>
          Birth: {char.birth_year}
        </p>
        <p>
          Height: {char.height} - Mass: {char.mass}
        </p>
        <p>
          Gender: {char.gender}
        </p>
      </div>
      <div className="details">
        <CharsDetails urls={char.films} detail={<i class="fas fa-video"></i>} placeholder="This character has no films" />
        <CharsDetails urls={char.vehicles} detail={<i class="fas fa-snowplow"></i>} placeholder="This character has no vehicles" />
        <CharsDetails
          urls={char.starships}
          detail={<i class="fas fa-fighter-jet"></i>}
          placeholder="This character has no starships"
        />
      </div>
    </div >
  );
};

export default CharCard;

