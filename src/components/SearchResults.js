import React from 'react';
import './SearchResults.css';

function SearchResults(props) {
  const validResults = props.results.length <= 50 && props.results.length > 0;
  const searchIsActive = document.activeElement.className === 'Search-input';
  const noResults = props.input.length > 1 && props.results.length === 0;

  return (
    <div
      className={
        'Search-results ' +
        ((validResults || noResults) && searchIsActive ? 'active' : 'inactive')
      }
    >
      {validResults &&
        props.results.slice(0, 10).map(function (p, i) {
          return (
            <div
              className='Search-result'
              key={i}
              id={props.results[i].name}
              onClick={props.onClickSearchResult}
            >
              {props.results[i].name}
            </div>
          );
        })}
      {noResults && <div className='Search-result-none'>No Pokemon found</div>}
    </div>
  );
}

export default SearchResults;

// {props.results[0] ? props.results[0].name : 'hi'}
