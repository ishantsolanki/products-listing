import { combineReducers } from 'redux'

import ProductsReducer, { ProductsReducerType } from './ProductsReducer'

export interface ReduxState {
  products: ProductsReducerType
}

export default combineReducers({
  products: ProductsReducer,
})
