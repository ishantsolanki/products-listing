import React from 'react';
import { render } from '@testing-library/react'
import Header from './Header';

test('renders Products listing', () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText(/Products Listing/i);
  expect(headerElement).toBeInTheDocument();
});
