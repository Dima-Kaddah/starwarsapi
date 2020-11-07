import React from 'react';
import { Link } from 'react-router-dom';

import winGIf from '../../images/winGif.gif';

const WinPage = () => {
  return (
    <div>
      <img style={{ borderRadius: '20px' }} src={winGIf} />
      <h1 style={{ padding: '20px', color: 'yellow' }}>you win</h1>
      <Link to='/game'><button style={{ margin: '3px' }}>Play Again</button></Link>
    </div >
  );
};

export default WinPage;
