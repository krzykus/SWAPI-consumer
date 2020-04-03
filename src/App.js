import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Planet from './Planet';
import Main from './Main';
import Navigation from './components/Navigation';
import './App.css';

export default props => {
  return (
    <div className="wrapper">
      <Navigation className="mobile" />
      <div className="App container">
        <header className="App-header">
          <h3>
            Welcome to SWAPI Consumer!
          </h3>
          <Navigation className="desktop" />
        </header>
        <Switch>
          <Route exact path="/" render={Main}/>
          <Route exact path="/🪐/:name" component={Planet}/>
        </Switch>
      </div>
    </div>
  );
};
