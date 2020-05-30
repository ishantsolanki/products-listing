import { List } from 'immutable'

import { ReduxState }from '../reducer/rootReducer'

export const getProductById = (id: string) => (state: ReduxState) => {
  return state.products.listing.filter(product => product.get('id') === id).first(null)
}
