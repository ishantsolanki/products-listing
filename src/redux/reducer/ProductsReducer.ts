import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { ProductType, ProductRecord, forexRatesResultType } from '../../types/Product'
import { PRODUCT_TYPES } from '../actions/productActions'
import { ReduxState } from '../reducer/rootReducer'

export interface ProductsReducerType {
  listing: List<Record<ProductType>>
  forexRates: forexRatesResultType['rates']
  productUpdating: Record<ProductType> | null
}

const initialState = {
  listing: List(),
  forexRates: {},
  productUpdating: null,
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

export const setProductUpdatingReducer = (state: ReduxState, action: { product: Record<ProductType> }) => ({
  ...state,
  productUpdating: action.product,
})

const ProductsReducer = createReducer(initialState, {
  [PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS]: (state: ReduxState, action: { products: ProductType[]}) => fetchProductsSuccessReducer(state, action),
  [PRODUCT_TYPES.SET_FOREX_RATES]: (state: ReduxState, action: { forexRatesResult: forexRatesResultType}) => setForexRatesReducer(state, action),
  [PRODUCT_TYPES.SET_PRODUCT_UPDATING]: (state: ReduxState, action: { product: Record<ProductType> }) => setProductUpdatingReducer(state, action)
})

export default ProductsReducer
