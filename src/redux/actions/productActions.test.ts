import { List } from 'immutable'
import { ProductRecord } from '../../types/Product'
import * as productActions from './productActions'
import * as api from './api'
import { CURRENCY } from '../../types/Product'

jest.mock('./api')

const forexRatesMock = {  rates: { AUD: 30, BGN: 30, BRL: 30, CAD: 30, CHF: 30, CNY: 30, CZK: 30, DKK: 30, EUR: 30, GBP: 30, HKD: 30, HRK: 30, HUF: 30, IDR: 30, ILS: 30, INR: 30, ISK: 30, JPY: 30, KRW: 30, MXN: 30, MYR: 30, NOK: 30, NZD: 30, PHP: 30, PLN: 30, RON: 30, RUB: 30, SEK: 30, SGD: 30, THB: 30, TRY: 30, USD: 30, ZAR: 30}}

test('addProduct adds a product and updates products listing', async () => {
  const dispatchMock = jest.fn()
  const addProductApiMock = jest.spyOn(api, 'addProductApi')
  const mockData = {
    name: 'mockName',
    description: 'mockDescription',
    currency: CURRENCY.GBP,
    price: 300
  }

  await productActions.addProduct(mockData)(dispatchMock)

  expect(addProductApiMock).toHaveBeenCalledWith(mockData)
})

test('fetchProductsSuccess returns an action', () => {
  const productMock = List([new ProductRecord()])

  expect(productActions.fetchProductsSuccess(productMock)).toEqual({
    type: productActions.PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS,
    products: productMock
  })
})

test('setForexRates returns an action', () => {
  expect(productActions.setForexRates(forexRatesMock)).toEqual({
    type: productActions.PRODUCT_TYPES.SET_FOREX_RATES,
    forexRatesResult: forexRatesMock
  })
})

test('fetchProducts calls fetchProductsApi and dispatches success action', async () => {
  const dispatchMock = jest.fn()
  const productMock = List([new ProductRecord()])
  const fetchProductsApiMock = jest.spyOn(api, 'fetchProductsApi').mockResolvedValue(productMock)

  await productActions.fetchProducts()(dispatchMock)

  expect(fetchProductsApiMock).toHaveBeenCalledTimes(1)
  expect(dispatchMock).toHaveBeenCalledWith(productActions.fetchProductsSuccess(productMock))

})

test('fetchForexRates fetches forex rates  and dispatches success action', async () => {
  const dispatchMock = jest.fn()
  const fetchForexRatesApiMock = jest.spyOn(api, 'fetchForexRatesApi').mockResolvedValue(forexRatesMock)

  await productActions.fetchForexRates()(dispatchMock)

  expect(fetchForexRatesApiMock).toHaveBeenCalledTimes(1)
  expect(dispatchMock).toHaveBeenCalledWith(productActions.setForexRates(forexRatesMock))
})

test('deleteProduct deletes product and updates listing', async () => {
  const dispatchMock = jest.fn()
  const deleteProductApiMock = jest.spyOn(api, 'deleteProductApi')

  await productActions.deleteProduct('someId')(dispatchMock)

  expect(deleteProductApiMock).toHaveBeenCalledWith('someId')
  expect(dispatchMock).toHaveBeenCalledTimes(1)
})

test('setProductUpdating calls an action', () => {
  const productMock = new ProductRecord()

  expect(productActions.setProductUpdating(productMock)).toEqual({
    type: productActions.PRODUCT_TYPES.SET_PRODUCT_UPDATING,
    product: productMock
  })
})

test('setProductUpdating calls an action with null to reset product updating', () => {
  expect(productActions.setProductUpdating(null)).toEqual({
    type: productActions.PRODUCT_TYPES.SET_PRODUCT_UPDATING,
    product: null
  })
})

test('updateProduct calls update products api and updates listing on success', async () => {
  const dispatchMock = jest.fn()
  const productMock = {
    name: 'mockName',
    description: 'mockDescription',
    currency: CURRENCY.GBP,
    price: 300,
    id: 'mockId'
  }
  const updateProductApiMock = jest.spyOn(api, 'updateProductApi')

  await productActions.updateProduct(productMock)(dispatchMock)

  expect(updateProductApiMock).toHaveBeenCalledWith(productMock)
})
