import { List, Record } from 'immutable'
import { addProductApi, fetchProductsApi } from './api'
import { CURRENCY, ProductType } from '../../types/Product'

type dispatchType = ({}) => Promise<any> | void

export enum PRODUCT_TYPES {
  FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
}

export type addProductType = ({ name, description, price, currency }: { name: string, description: string, price: number, currency: CURRENCY }) => (dispatch: dispatchType) => Promise<any>

export const addProduct: addProductType = ({ name, description, currency, price }) =>
  (dispatch: dispatchType) =>
  addProductApi({ name, description, currency, price })

export const fetchProductsSuccess = (products: List<Record<ProductType>>) => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
  products
})

export const fetchProducts: () => (dispatch: dispatchType) => Promise<any> = () =>
(dispatch: dispatchType) => {
  return fetchProductsApi().then((products) => {
    dispatch(fetchProductsSuccess(products))
  })
}
