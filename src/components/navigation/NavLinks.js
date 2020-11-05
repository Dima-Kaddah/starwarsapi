import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props => {

  return (
    <React.Fragment>
      <ul className="nav-links">
        <li>
          <NavLink to="/" exact>
            HOME
        </NavLink>
        </li>
        <li>
          <NavLink to="/films" exact>
            ALL MOVIES
        </NavLink>
        </li>
        <li>
          <NavLink to="/chars" exact>
            CHARACTERS
        </NavLink>
        </li>
        <li>
          <li>
            <NavLink to="/game" exact>
              Play Game
        </NavLink>
          </li>
        </li>
        <div className='animations start-home'></div>
      </ul>
    </React.Fragment>

  );
};

export default NavLinks;
