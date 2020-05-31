import { ReduxState } from '../reducer/rootReducer'

export const getProductById = (id: string) => (state: ReduxState) => {
  return state.products.listing.find(product => product.get('id') === id)
}

export const getProductPriceinGBP = (id: string) => (state: ReduxState) => {
  const product = getProductById(id)(state)
  const forexRates = state.products.forexRates
  if (product) {
    return Math.round(product.get('price') / forexRates[product.get('currency')] * 100) / 100
  }

  return null
}
