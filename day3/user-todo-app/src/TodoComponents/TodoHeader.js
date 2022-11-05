import React from 'react';
import "../Header.css";
import { Link } from 'react-router-dom';

function TodoHeader() {
  return (
    <nav className='header'>
      <Link to="/">
        <h2 className='header__textLogo'>Home</h2>
      </Link>

      <Link to="/user">
        <h2 className='header__textLogo'>User</h2>
      </Link>

      {/* <h2 className='header__textLogo'>Todo</h2> */}

      

      <div className='header__nav'>

        <Link to="/todo" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLine'>All Todos</span>
          </div>
        </Link>

        <Link to="/todo/add" className='header__link'>
          <div className='header__option'>
            <span className='header__optionLine'>Add Todo</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default TodoHeader