import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Record } from 'immutable'

import { ProductType, CURRENCY } from '../../types/Product'
import InputRow from '../InputRow/InputRow'

import { ReduxState } from '../../redux/reducer/rootReducer'

import { addProduct, updateProduct, setProductUpdating } from '../../redux/actions/productActions'

const inputClassName = 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 appearance-none leading-normal w-2/3';

const mapStateToProps = (state: ReduxState) => ({
  updatingProduct: state.products.updatingProduct
})

const mapDispatchToProps = {
  addProductBound: addProduct,
  updateProductBound: updateProduct,
  setProductUpdatingBound: setProductUpdating
}

interface Props {
  updatingProduct: Record<ProductType> | null
  addProductBound: ({ name, description, price, currency }: { name: string, description: string, price: number, currency: CURRENCY }) => Promise<any>
  updateProductBound: ({ name, description, price, currency, id }: { name: string, description: string, price: number, currency: CURRENCY, id: string }) => Promise<any>
  setProductUpdatingBound: (product: Record<ProductType> | null) => void
}

export const Sidebar: React.FC<Props> = ({
  updatingProduct,
  addProductBound,
  updateProductBound,
  setProductUpdatingBound,
}) => {
  const options = [];
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('0')
  const [currency, setCurrency] = useState<CURRENCY>(CURRENCY.AUD)
  const [isInvalidInputs, setIsInvalidInputs] = useState<boolean>(false)

  useEffect(() => {
    if (updatingProduct) {
      setName(updatingProduct.get('name'))
      setDescription(updatingProduct.get('description'))
      setPrice(String(updatingProduct.get('price')))
      setCurrency(updatingProduct.get('currency'))
    }
  }, [updatingProduct])

  useEffect(() => {
    setIsInvalidInputs(false)
  }, [name, description, price, currency])

  for(let option in CURRENCY) {
    options.push(option)
  }

  const resetForm = () => {
    setName('')
    setDescription('')
    setPrice('0')
    setCurrency(CURRENCY.AUD)
  }

  const handleSubmit = () => {
    const validInputs = !!name && !!description && !!price && !!currency

    if (validInputs) {
      addProductBound({
        name,
        description,
        price: Number(price),
        currency
      }).then(resetForm)
    } else {
      setIsInvalidInputs(true)
    }
  }

  const handleUpdateListing = () => {
    const validInputs = !!name && !!description && !!price && !!currency

    if (validInputs && updatingProduct) {
      updateProductBound({
        name,
        description,
        price: Number(price),
        currency,
        id: updatingProduct.get('id')
      }).then(() => {
        resetForm()
        setProductUpdatingBound(null)
      })
    }
  }

  const handleUpdateCancel = () => {
    setProductUpdatingBound(null)
    resetForm()
  }

  return (
    <div>
      {!!updatingProduct ? (
        <div className="text-center py-2 bg-teal-100">
          Update <span className="text-teal-600 font-bold">{updatingProduct.get('name')}</span>
        </div>
      ) : (
        <div className="text-center py-2">
          List a new Product
        </div>
      )}

      <hr />

      <div className="py-5 text-right">
        <InputRow label="name">
          <input
            id="name"
            className={inputClassName}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputRow>

        <InputRow label="description">
          <input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={inputClassName}
          />
        </InputRow>

        <InputRow label="price">
          <input
            id="price"
            className={inputClassName}
            value={price}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </InputRow>


        <InputRow label="currency">
          <select
            id="price"
            className={inputClassName}
            value={currency}
            onChange={(e) => setCurrency(e.target.value as CURRENCY)}
          >
            {options.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </InputRow>

        {isInvalidInputs && (
          <div className="text-red-400 text-center pb-3">Cannot add a product with empty fields</div>
        )}

        <div className="text-center">
        {!!updatingProduct ? (
          <>
          <button
            className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold mr-2"
            onClick={handleUpdateListing}
          >
            Update listing
          </button>
          <button
            className="px-4 py-2 border-teal-300 border rounded-md text-teal-400 text-white font-bold ml-2"
            onClick={handleUpdateCancel}
          >
            Cancel
          </button>
          </>
        ) : (
          <button
            className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold"
            onClick={handleSubmit}
          >
            Add to listing
          </button>
        )}
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
