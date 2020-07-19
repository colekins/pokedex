import React from 'react';
import './Search.css';

function Search(props) {
  return (
    <div className='Search'>
      <label htmlFor='search'> Search</label>
      <input
        type='search'
        value={props.input}
        className='Search-input'
        onChange={props.onSearchInput}
      ></input>
    </div>
  );
}

export default Search;
