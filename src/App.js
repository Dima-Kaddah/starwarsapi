import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import StarWarsFilms from './pages/StarWarsFilms';
import StarWarsChars from './pages/StarWarsChars';
import HomePage from './pages/HomePage';
import MainNavigation from './components/navigation/MainNavigation';
import GamePage from './pages/GamePage';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/films' component={StarWarsFilms} />
            <Route exact path='/chars' component={StarWarsChars} />
            <Route exact path='/game' component={GamePage} />
            <Redirect to='/' />
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
