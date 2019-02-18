import React from 'react';
import logo from '../../../logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Trackman logo with superhero"/>
    </header>
  );
}

export default Header;