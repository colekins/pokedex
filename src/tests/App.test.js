import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from '../App';

it('renders app without crashing', () => {
  const div = document.createElement('div');
  render(<App />, div);
  unmountComponentAtNode(div);
});

it('renders title correctly', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Blue Squad Pokedex/i);
  expect(header).toBeInTheDocument();
});
