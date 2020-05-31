import { List, Record } from 'immutable'
import { addProductApi, fetchProductsApi, fetchForexRatesApi } from './api'
import { CURRENCY, ProductType, forexRatesResultType } from '../../types/Product'

export enum PRODUCT_TYPES {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  SET_FOREX_RATES = 'SET_FOREX_RATES'
}

export type addProductType = ({ name, description, price, currency }: { name: string, description: string, price: number, currency: CURRENCY }) => (dispatch: ({}) => Promise<any>) => Promise<any>

export const addProduct: addProductType = ({ name, description, currency, price }) => async (dispatch) => {
  await addProductApi({ name, description, currency, price })
  dispatch(fetchProducts())
}

export const fetchProductsSuccess = (products: List<Record<ProductType>>) => ({
  type: PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS,
  products
})

export const setForexRates = (forexRatesResult: forexRatesResultType) => ({
  type: PRODUCT_TYPES.SET_FOREX_RATES,
  forexRatesResult
})

type fetchProductsType = () => (dispatch: ({ type, products }:{ type: string, products: List<Record<ProductType>> }) => void) => Promise<any>

export const fetchProducts: fetchProductsType = () =>
  async (dispatch) => {
    const products = await fetchProductsApi()
    dispatch(fetchProductsSuccess(products))
  }

export const fetchForexRates = () =>
async (dispatch: any) => {
  const forexRatesResult = await fetchForexRatesApi()
  dispatch(setForexRates(forexRatesResult))
}
