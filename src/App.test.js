import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Blue Squad/i);
  expect(linkElement).toBeInTheDocument();
});
