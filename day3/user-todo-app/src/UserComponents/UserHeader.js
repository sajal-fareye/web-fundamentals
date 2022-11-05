import React from 'react';
import "../Header.css";
import { Link } from 'react-router-dom';

function UserHeader() {
  return (
    <nav className='header'>
      <Link to="/">
        <h2 className='header__textLogo'>Home</h2>

        
      </Link>

      <Link to="/todo">
        <h2 className='header__textLogo'>Todo</h2>
      </Link>

      {/* <h2 className='header__textLogo'>User</h2> */}

      <div className='header__nav'>

      

        <Link to="/user" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLine'>All Users</span>
          </div>
        </Link>

        <Link to="/user/add" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLine'>Add User</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default UserHeader