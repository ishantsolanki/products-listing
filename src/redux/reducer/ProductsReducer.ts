import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { ProductType, ProductRecord, forexRatesResultType } from '../../types/Product'
import { PRODUCT_TYPES } from '../actions/productActions'

export interface ProductsReducerType {
  listing: List<Record<ProductType>>
  forexRates: forexRatesResultType['rates']
  updatingProduct: Record<ProductType> | null
}

export const initialState = {
  listing: List(),
  forexRates: { AUD: 1, BGN: 1, BRL: 1, CAD: 1, CHF: 1, CNY: 1, CZK: 1, DKK: 1, EUR: 1, GBP: 1, HKD: 1, HRK: 1, HUF: 1, IDR: 1, ILS: 1, INR: 1, ISK: 1, JPY: 1, KRW: 1, MXN: 1, MYR: 1, NOK: 1, NZD: 1, PHP: 1, PLN: 1, RON: 1, RUB: 1, SEK: 1, SGD: 1, THB: 1, TRY: 1, USD: 1, ZAR: 1},
  updatingProduct: null,
}

export const fetchProductsSuccessReducer = (state: ProductsReducerType, action: { products: ProductType[]}) => {
  const listing = List([
    ...action.products.map(product => new ProductRecord(product))
  ])
  return {
    ...state,
    listing
  }
}

export const setForexRatesReducer = (state: ProductsReducerType, action: { forexRatesResult: forexRatesResultType}) => ({
  ...state,
  forexRates: action.forexRatesResult.rates
})

export const setProductUpdatingReducer = (state: ProductsReducerType, action: { product: Record<ProductType> }) => ({
  ...state,
  updatingProduct: action.product,
})

const ProductsReducer = createReducer(initialState, {
  [PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS]: (state: ProductsReducerType, action: { products: ProductType[]}) => fetchProductsSuccessReducer(state, action),
  [PRODUCT_TYPES.SET_FOREX_RATES]: (state: ProductsReducerType, action: { forexRatesResult: forexRatesResultType}) => setForexRatesReducer(state, action),
  [PRODUCT_TYPES.SET_PRODUCT_UPDATING]: (state: ProductsReducerType, action: { product: Record<ProductType> }) => setProductUpdatingReducer(state, action),
})

export default ProductsReducer
