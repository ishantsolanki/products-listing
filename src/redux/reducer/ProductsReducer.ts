import { List, Record } from 'immutable'

import { createReducer } from './utils'
import { ProductType } from '../../types/Product'

export interface ProductsReducerType {
  listing: List<Record<ProductType>>
}

const initialState = {
  listing: List(),
}

const ProductsReducer = createReducer(initialState, {
})

export default ProductsReducer
