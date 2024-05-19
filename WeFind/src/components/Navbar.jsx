// Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">WeFind</div>
        <div className="search-form">
          <input className="search-input" type="search" placeholder="Search" aria-label="Search" />
          <button className="search-btn" type="submit">Search</button>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faCog} className="icon setting-icon" />
          <FontAwesomeIcon icon={faUserCircle} className="icon user-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
