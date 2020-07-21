import React from 'react';
import ReactDOM from 'react-dom';
import PokedexInfo from '../components/PokedexInfo';

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

it('renders Pokedex info with valid name', () => {
  const data = {
    name: 'bulbasaur',
    id: '1',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    weight: 69,
    height: 7,
  };

  ReactDOM.render(
    <PokedexInfo
      id={data.id}
      name={data.name}
      height={data.height}
      weight={data.weight}
    />,
    container
  );

  const pokedexContainer = container.querySelector('.Pokedex-info');
  expect(pokedexContainer).toBeInTheDocument();

  const pokemonName = container.querySelector('.Pokedex-name');
  expect(pokemonName.textContent).toBe('Name: bulbasaur');
});
