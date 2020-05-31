import React from 'react';
import { fireEvent, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { Sidebar } from './Sidebar';

import { renderWithRouter } from '../../testUtils'
import { ProductRecord, CURRENCY } from '../../types/Product';

test('renders the heading', () => {
  const addProductMock = jest.fn()
  const updateProductMock = jest.fn()
  const setProductUpdatingMock = jest.fn()
  const { getByText } = renderWithRouter(
    <Sidebar
      updatingProduct={null}
      addProductBound={addProductMock}
      updateProductBound={updateProductMock}
      setProductUpdatingBound={setProductUpdatingMock}
    />
  )

  expect(getByText(/List a new Product/)).toBeInTheDocument()
});

test('shows error when submitting with empty values', () => {
  const addProductMock = jest.fn()
  const updateProductMock = jest.fn()
  const setProductUpdatingMock = jest.fn()
  const { getByRole, getByText } = renderWithRouter(
    <Sidebar
      updatingProduct={null}
      addProductBound={addProductMock}
      updateProductBound={updateProductMock}
      setProductUpdatingBound={setProductUpdatingMock}
    />
  )

  act(() => {
    fireEvent.click(getByRole('button'))
  })

  expect(getByText(/Cannot add a product with empty fields/)).toBeInTheDocument()
  expect(addProductMock).not.toHaveBeenCalled()
})

test('adds a product and clears field after adding', async () => {
  const addProductMock = jest.fn().mockResolvedValue('')
  const updateProductMock = jest.fn()
  const setProductUpdatingMock = jest.fn()

  act(() => {
    renderWithRouter(
      <Sidebar
        updatingProduct={null}
        addProductBound={addProductMock}
        updateProductBound={updateProductMock}
        setProductUpdatingBound={setProductUpdatingMock}
      />
    )
    fireEvent.input(screen.getByLabelText('name'), { target: {value: 'product1'} })
    fireEvent.input(screen.getByLabelText('description'), { target: {value: 'product1 description'} })
    fireEvent.input(screen.getByLabelText('price'), { target: {value: '56'} })
    fireEvent.input(screen.getByLabelText('currency'), { target: {value: 'GBP'} })
  })

  act(() => {
    fireEvent.click(screen.getByRole('button'))
  })

  await expect(addProductMock).toHaveBeenCalledTimes(1)

  expect(screen.getByLabelText('name').value).toEqual('')
  expect(screen.getByLabelText('description').value).toEqual('')
  expect(screen.getByLabelText('price').value).toEqual('0')
  expect(screen.getByLabelText('currency').value).toEqual('AUD')
})

test('updating product', () => {
  const addProductMock = jest.fn().mockResolvedValue('')
  const updateProductMock = jest.fn()
  const setProductUpdatingMock = jest.fn()

  renderWithRouter(
    <Sidebar
      updatingProduct={new ProductRecord({
        name: 'mockProduct',
        description: 'mockDescription',
        price: 34,
        currency: CURRENCY.GBP
      })}
      addProductBound={addProductMock}
      updateProductBound={updateProductMock}
      setProductUpdatingBound={setProductUpdatingMock}
    />
  )

  expect(screen.getByLabelText('name').value).toEqual('mockProduct')
  expect(screen.getByLabelText('description').value).toEqual('mockDescription')
  expect(screen.getByLabelText('price').value).toEqual('34')
  expect(screen.getByLabelText('currency').value).toEqual('GBP')

  expect(screen.getByText(/mockProduct/)).toBeInTheDocument()
  expect(screen.getByText(/Update listing/)).toBeInTheDocument()
  expect(screen.getByText(/Cancel/)).toBeInTheDocument()
})
