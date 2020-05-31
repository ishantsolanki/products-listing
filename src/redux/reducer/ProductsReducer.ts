import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { ProductType, ProductRecord, forexRatesResultType } from '../../types/Product'
import { PRODUCT_TYPES } from '../actions/productActions'
import { ReduxState } from '../reducer/rootReducer'

export interface ProductsReducerType {
  listing: List<Record<ProductType>>
  forexRates: forexRatesResultType['rates']
}

const initialState = {
  listing: List(),
  forexRates: {},
}

export const fetchProductsSuccessReducer = (state: ReduxState, action: { products: ProductType[]}) => {
  const listing = List([
    ...action.products.map(product => new ProductRecord(product))
  ])
  return {
    ...state,
    listing
  }
}

export const setForexRatesReducer = (state: ReduxState, action: { forexRatesResult: forexRatesResultType}) => ({
  ...state,
  forexRates: action.forexRatesResult.rates
})

const ProductsReducer = createReducer(initialState, {
  [PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS]: (state: ReduxState, action: { products: ProductType[]}) => fetchProductsSuccessReducer(state, action),
  [PRODUCT_TYPES.SET_FOREX_RATES]: (state: ReduxState, action: { forexRatesResult: forexRatesResultType}) => setForexRatesReducer(state, action)
})

export default ProductsReducer
