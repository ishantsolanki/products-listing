import React from 'react';
import { fireEvent } from '@testing-library/react'
import { renderWithRouter } from '../../testUtils'
import SignupLink from './SignupLink';

test('clicking on signup navigates to sign up page', () => {
  const { getByText, history } = renderWithRouter(<SignupLink />)
  const linkElement = getByText(/Sign Up/i)
  fireEvent.click(linkElement);

  expect(history.location.pathname).toEqual('/signup')
});
