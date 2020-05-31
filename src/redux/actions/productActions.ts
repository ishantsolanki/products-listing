import { List, Record } from 'immutable'
import { addProductApi, fetchProductsApi } from './api'
import { CURRENCY, ProductType } from '../../types/Product'


export enum PRODUCT_TYPES {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
}

export type addProductType = ({ name, description, price, currency }: { name: string, description: string, price: number, currency: CURRENCY }) => (dispatch: ({}) => Promise<any>) => Promise<any>

export const addProduct: addProductType = ({ name, description, currency, price }) => async (dispatch) => {
  await addProductApi({ name, description, currency, price })
  dispatch(fetchProducts())
}

export const fetchProductsSuccess = (products: List<Record<ProductType>>) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products
})

type fetchProductsType = () => (dispatch: ({ type, products }:{ type: string, products: List<Record<ProductType>> }) => void) => Promise<any>

export const fetchProducts: fetchProductsType = () =>
  async (dispatch) => {
    const products = await fetchProductsApi()
    dispatch(fetchProductsSuccess(products))
  }
