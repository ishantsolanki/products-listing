import React, { useState } from 'react'
import { connect } from 'react-redux'

import { CURRENCY } from '../../types/Product'
import InputRow from '../InputRow/InputRow'

import { addProduct } from '../../redux/actions/productActions'

const inputClassName = 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 appearance-none leading-normal w-2/3';

const mapDispatchToProps = {
  addProductBound: addProduct
}

interface Props {
  addProductBound: ({ name, description, price, currency }: { name: string, description: string, price: number, currency: CURRENCY }) => Promise<any>
}

export const Sidebar: React.FC<Props> = ({
  addProductBound
}) => {
  const options = [];
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [price, setPrice] = useState<string>('0')
  const [currency, setCurrency] = useState<CURRENCY>(CURRENCY.AUD)
  const [isInvalidInputs, setIsInvalidInputs] = useState<boolean>(false)

  for(let option in CURRENCY) {
    options.push(option)
  }

  const handleSubmit = () => {
    const validInputs = !!name && !!description && !!price && !!currency

    if (validInputs) {
      addProductBound({
        name,
        description,
        price: Number(price),
        currency
      }).then(() => {
        setName('')
        setDescription('')
        setPrice('0')
        setCurrency(CURRENCY.AUD)
      })
    } else {
      setIsInvalidInputs(true)
    }
  }
  return (
    <div>
      <div className="text-center pb-2">
        List a new Product
      </div>
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
          <span className="text-red-400 text-center pb-3">Fields cant be empty</span>
        )}

        <div className="text-center">
          <button
            className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold"
            onClick={handleSubmit}
          >
            Add to listing
          </button>
        </div>
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Sidebar)
