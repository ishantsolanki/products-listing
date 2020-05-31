import { List } from 'immutable'
import { ProductRecord, CURRENCY } from '../../types/Product'
import {
  initialState,
  fetchProductsSuccessReducer,
  setForexRatesReducer,
  setProductUpdatingReducer,
} from './ProductsReducer'

test('fetchProductsSuccessReducer', () => {
  const state = {...initialState}
  const action = {
    products: [{
      name: 'mockName',
      description: 'mockDescription',
      currency: CURRENCY.GBP,
      price: 30,
      id: 'mockId'
    }, {
      name: 'mockName1',
      description: 'mockDescription2',
      currency: CURRENCY.AUD,
      price: 35,
      id: 'mockId1'
    }]
  }

  expect(fetchProductsSuccessReducer(state, action)).toEqual({
    ...initialState,
    listing: List([
      new ProductRecord(action.products[0]),
      new ProductRecord(action.products[1])
    ])
  })
})

test('setForexRatesReducer', () => {
  const state = {...initialState}
  const action = { forexRatesResult: {rates: { AUD: 30, BGN: 30, BRL: 30, CAD: 30, CHF: 30, CNY: 30, CZK: 30, DKK: 30, EUR: 30, GBP: 30, HKD: 30, HRK: 30, HUF: 30, IDR: 30, ILS: 30, INR: 30, ISK: 30, JPY: 30, KRW: 30, MXN: 30, MYR: 30, NOK: 30, NZD: 30, PHP: 30, PLN: 30, RON: 30, RUB: 30, SEK: 30, SGD: 30, THB: 30, TRY: 30, USD: 30, ZAR: 30}}}

  expect(setForexRatesReducer(state, action)).toEqual({
    ...initialState,
    forexRates: action.forexRatesResult.rates
  })
})

test('setProductUpdatingReducer', () => {
  const state = {...initialState}
  const action = { product: new ProductRecord()}

  expect(setProductUpdatingReducer(state, action)).toEqual({
    ...initialState,
    updatingProduct: action.product
  })
})
