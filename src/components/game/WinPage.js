import React from 'react';
import { Link } from 'react-router-dom';

import winGIf from '../../images/winGif.gif';

const WinPage = () => {
  return (
    <div className='flexWin'>
      <img className='winImge flexWin' src={winGIf} />
      <h1 className='flexWin' style={{ padding: '20px', color: 'yellow' }}>you win</h1>
      <Link to='/game' className='restbutton'><button className='flexWin restbutton'>Play Again</button></Link>
    </div >
  );
};

export default WinPage;
