import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import LoginForm from './LoginForm';

test('renders Login', () => {
  const { getByText } = render(<LoginForm />)
  const headerElement = getByText(/Login/i)
  expect(headerElement).toBeInTheDocument()
});

test('shows error when login details incorrect', () => {
  const { getByLabelText, getByText } = render(<LoginForm />)
  fireEvent.change(getByLabelText('Username'), {target: {value: 'foo'}})
  fireEvent.change(getByLabelText('Password'), {target: {value: 'bar'}})
  fireEvent.click(getByText('Log In'))

  expect(getByText('Invalid username or password')).toBeInTheDocument()
})
