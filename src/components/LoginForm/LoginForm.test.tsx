import React from 'react';
import { fireEvent } from '@testing-library/react'
import { renderWithRouter } from '../../testUtils'
import { LoginForm } from './LoginForm';
import { act } from 'react-dom/test-utils';

test('renders Login', () => {
  const { getByText } = renderWithRouter(<LoginForm checkUserBound={() => Promise.resolve() } />)
  const headerElement = getByText(/Login/i)
  expect(headerElement).toBeInTheDocument()
});

test('shows error when login details incorrect', async () => {
  const { getByLabelText, getByRole, getByText } = renderWithRouter(<LoginForm checkUserBound={() => Promise.resolve({ result: false }) } />)

    await act(async () => {
      fireEvent.change(getByLabelText('Username'), {target: {value: 'foo'}})
      fireEvent.change(getByLabelText('Password'), {target: {value: 'bar'}})
      await fireEvent.click(getByRole('button'))
      expect(getByText('Invalid username or password')).toBeInTheDocument()
    })
})

test('navigates to listing page when login is correct', async () => {
  const { getByLabelText, getByRole, history } = renderWithRouter(<LoginForm checkUserBound={() => Promise.resolve({ result: true }) } />)

    await act(async () => {
      fireEvent.change(getByLabelText('Username'), {target: {value: 'foo'}})
      fireEvent.change(getByLabelText('Password'), {target: {value: 'bar'}})
      await fireEvent.click(getByRole('button'))
      expect(history.location.pathname).toEqual('/listings')
    })
})
