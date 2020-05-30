import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { ProductType, ProductRecord } from '../../types/Product'
import { PRODUCT_TYPES } from '../actions/productActions'
import { ReduxState } from '../reducer/rootReducer'

export interface ProductsReducerType {
  listing: List<Record<ProductType>>
}

const initialState = {
  listing: List(),
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

const ProductsReducer = createReducer(initialState, {
  [PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS]: (state: ReduxState, action: { products: ProductType[]}) => fetchProductsSuccessReducer(state, action)
})

export default ProductsReducer
