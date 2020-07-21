import React from 'react';
import './Pokedex.css';
import fallback from '../assets/default.png';

function PokedexImage(props) {
  // If there is no image available, a fallback image will be rendered.
  return (
    <div className='Pokedex-image-container'>
      {props.image ? (
        <img
          className='Pokedex-image'
          alt={props.active.name + ' sprite'}
          src={props.image}
        ></img>
      ) : (
        <React.Fragment>
          <img
            className='Pokedex-fallback-image'
            alt={props.active.name + ' image placeholder'}
            src={fallback}
          ></img>
          <div className='Pokedex-image-subtitle'>No image available</div>
        </React.Fragment>
      )}
    </div>
  );
}

export default PokedexImage;
