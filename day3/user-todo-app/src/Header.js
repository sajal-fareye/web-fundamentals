import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className='header'>

        <h2 className='header__textLogo'>Home</h2>

      <Link to="/todo">
        <h2 className='header__textLogo'>Todo</h2>
      </Link>

      <Link to="/user">
        <h2 className='header__textLogo'>User</h2>
      </Link>
    </nav>
  )
}

export default Header