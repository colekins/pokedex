import React from 'react';
import './Pokedex.css';

function PokedexInfo(props) {
  return (
    <div className='Pokedex-info'>
      <h3 className='Pokedex-number'>#{props.id}</h3>
      <p className='Pokedex-name'>Name: {props.name}</p>
      <p>Weight: {props.weight.toString()}</p>
      <p>Height: {props.height.toString()}</p>
    </div>
  );
}

export default PokedexInfo;
