import React from 'react';
import './Pokedex.css';
import fallback from '../assets/default.png';

function PokedexImage(props) {
  return (
    <div className='Pokedex-image-container'>
      {props.image ? (
        <img
          className='Pokedex-image'
          alt={props.active.name + ' sprite'}
          src={props.image}
        ></img>
      ) : (
        // If there is no image available, render a fallback image
        <React.Fragment>
          <img
            className='Pokedex-fallback-image'
            alt={props.active.name + ' sprite'}
            src={fallback}
          ></img>
          <div className='Pokedex-image-subtitle'>No image available</div>
        </React.Fragment>
      )}
    </div>
  );
}

export default PokedexImage;
