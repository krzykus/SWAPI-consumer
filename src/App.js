import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Planet from './Planet';
import Main from './Main';
import './App.css';

export default props => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to SWAPI Consumer!
        </p>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/🪐/yavin">Yavin</NavLink>
          </li>
          <li>
            <NavLink to="/🪐/middleearth">Middle Earth</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/" render={Main}/>
          <Route exact path="/🪐/:name" component={Planet}/>
        </Switch>
      </header>
    </div>
  );
};
