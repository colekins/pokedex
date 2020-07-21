import React from 'react';
import ReactDOM from 'react-dom';
import PokedexImage from '../components/PokedexImage';

let container;

beforeEach(() => {
  jest.resetModules();
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

const data = {
  active: { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
  image:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

it('renders Pokedex image correctly', () => {
  ReactDOM.render(
    <PokedexImage image={data.image} active={data.active} />,
    container
  );

  const pokedexContainer = container.querySelector('.Pokedex-image-container');
  expect(pokedexContainer).toBeInTheDocument();

  const image = container.querySelector('.Pokedex-image');
  expect(image.alt).toBe('bulbasaur sprite');
});

it('renders fallback image if necessary', () => {
  ReactDOM.render(
    <PokedexImage image={null} active={data.active} />,
    container
  );

  const pokedexContainer = container.querySelector('.Pokedex-image-container');
  expect(pokedexContainer).toBeInTheDocument();

  const image = container.querySelector('.Pokedex-fallback-image');
  expect(image.alt).toBe('bulbasaur image placeholder');
});
