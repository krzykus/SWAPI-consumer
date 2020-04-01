import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Planet from './Planet';
import List from './List';
import './App.css';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Planet name="Earth" />
      </header>
    </div>
  );
}

export default App;*/

export default props => {
  return (
    <div>
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
        <Route
          exact
          path="/"
          render={List}
        />
        <Route exact path="/🪐/:name" render={() => <Planet />} />
        <Route exact path="/🪐🪐/:name" component={Planet}/>
      </Switch>
    </div>
  );
};
