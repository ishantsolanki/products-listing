import React from 'react'

import { CURRENCY } from '../../types/Product'
import InputRow from '../InputRow/InputRow'

const inputClassName = 'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-md py-2 px-4 appearance-none leading-normal w-2/3';

export const Sidebar = () => {

  const options = [];

  for(let option in CURRENCY) {
    options.push(option)
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
          />
        </InputRow>

        <InputRow label="description">
          <input
            id="description"
            className={inputClassName}
          />
        </InputRow>

        <InputRow label="price">
          <input
            id="price"
            className={inputClassName}
          />
        </InputRow>


        <InputRow label="currency">
          <select
            id="price"
            className={inputClassName}
          >
            {options.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </InputRow>

        <div className="text-center">
          <button className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold">Add to listing</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
