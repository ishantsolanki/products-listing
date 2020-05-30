import React from 'react';
import { fireEvent } from '@testing-library/react'
import { renderWithRouter } from '../../testUtils'
import LoginForm from './LoginForm';

test('renders Login', () => {
  const { getByText } = renderWithRouter(<LoginForm />)
  const headerElement = getByText(/Login/i)
  expect(headerElement).toBeInTheDocument()
});

test('shows error when login details incorrect', () => {
  const { getByLabelText, getByText } = renderWithRouter(<LoginForm />)
  fireEvent.change(getByLabelText('Username'), {target: {value: 'foo'}})
  fireEvent.change(getByLabelText('Password'), {target: {value: 'bar'}})
  fireEvent.click(getByText('Log In'))

  expect(getByText('Invalid username or password')).toBeInTheDocument()
})
