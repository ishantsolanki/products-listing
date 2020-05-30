import { addProductApi } from './api'
import { CURRENCY } from '../../types/Product'

type dispatchType = () => Promise<any> | void

export type addProductType = ({ name, description, price, currency }: { name: string, description: string, price: number, currency: CURRENCY }) => (dispatch: dispatchType) => Promise<any>

export const addProduct: addProductType = ({ name, description, currency, price }) =>
  (dispatch: dispatchType) =>
  addProductApi({ name, description, currency, price })
