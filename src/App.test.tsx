import React from 'react';
import { renderWithRouter } from './testUtils'
import App from './App';

test('renders Hello world', () => {
  const { getByText } = renderWithRouter(<App />);
  const helloWorldElement = getByText(/Hello World/i);
  expect(helloWorldElement).toBeInTheDocument();
});
