import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Pokedex from './Pokedex';

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

it('renders the empty pokedex container', () => {
  const active = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  };

  ReactDOM.render(
    <Pokedex active={active} onClickBack={() => {}} onClickNext={() => {}} />,
    container
  );

  const pokedexContainer = container.querySelector('.Pokedex-container');
  expect(pokedexContainer).toBeInTheDocument();
  expect(pokedexContainer.firstChild).toBeNull();
});
