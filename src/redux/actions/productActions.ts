import { List, Record } from 'immutable'
import { addProductApi, fetchProductsApi, fetchForexRatesApi, deleteProductApi, updateProductApi } from './api'
import { CURRENCY, ProductType, forexRatesResultType } from '../../types/Product'

export enum PRODUCT_TYPES {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
  SET_FOREX_RATES = 'SET_FOREX_RATES',
  SET_PRODUCT_UPDATING = 'SET_PRODUCT_UPDATING',
  RESET_PRODUCT_UPDATING = 'RESET_PRODUCT_UPDATING'
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

export const deleteProduct = (id: string) =>
async (dispatch: any) => {
  await deleteProductApi(id)
  dispatch(fetchProducts())
}

export const setProductUpdating = (product: Record<ProductType> | null) => ({
  type: 'SET_PRODUCT_UPDATING',
  product,
})

export type updateProductType = ({ name, description, price, currency, id }: { name: string, description: string, price: number, currency: CURRENCY, id: string }) => (dispatch: ({}) => Promise<any>) => Promise<any>
export const updateProduct: updateProductType = ({ name, description, price, currency, id }) => async (dispatch) => {
  await updateProductApi({ name, description, currency, price, id })
  dispatch(fetchProducts())
}

export const resetUpdatingProduct = () => ({
  type: PRODUCT_TYPES.RESET_PRODUCT_UPDATING
})
