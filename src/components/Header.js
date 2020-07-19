import React from 'react';
import '../App.css';
import Search from './Search.js';

function Header(props) {
  return (
    <header className='Header'>
      <h3>Blue Squad Pokedex</h3>
      <div className='Search-row'>
        <Search input={props.input} onSearchInput={props.onSearchInput} />
      </div>
    </header>
  );
}

export default Header;
