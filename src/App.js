import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Planet from './Planet';
import Main from './Main';
import './App.css';

export default props => {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Welcome to SWAPI Consumer!
        </h3>
        <nav class="navbar">
          <div class="container">
            <ul class="navbar-list">
              <li class="navbar-item">
                <NavLink to="/" className="navbar-link">Home</NavLink>
              </li>
              <li class="navbar-item">
                <NavLink to="/🪐/yavin" className="navbar-link">Yavin</NavLink>
              </li>
              <li class="navbar-item">
                <NavLink to="/🪐/middleearth" className="navbar-link">Middle-earth</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Switch>
          <Route exact path="/" render={Main}/>
          <Route exact path="/🪐/:name" component={Planet}/>
        </Switch>
    </div>
  );
};
