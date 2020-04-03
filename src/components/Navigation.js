import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = ({className}) => {
  return (
    <nav className={'navbar '+className}>
    <div className="container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink exact to="/" className="navbar-link">Home</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/🪐/yavin" className="navbar-link">Yavin</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/🪐/middleearth" className="navbar-link">Middle-earth</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navigation;