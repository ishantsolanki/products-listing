import { Record } from 'immutable'

export enum CURRENCY {
  AUD = 'AUD',
  BGN = 'BGN',
  BRL = 'BRL',
  CAD = 'CAD',
  CHF = 'CHF',
  CNY = 'CNY',
  CZK = 'CZK',
  DKK = 'DKK',
  GBP = 'GBP',
  HKD = 'HKD',
  HRK = 'HRK',
  HUF = 'HUF',
  IDR = 'IDR',
  ILS = 'ILS',
  INR = 'INR',
  ISK = 'ISK',
  JPY = 'JPY',
  KRW = 'KRW',
  MXN = 'MXN',
  MYR = 'MYR4',
  NOK = 'NOK',
  NZD = 'NZD',
  PHP = 'PHP',
  PLN = 'PLN',
  RON = 'RON',
  RUB = 'RUB',
  SEK = 'SEK',
  SGD = 'SGD',
  THB = 'THB',
  TRY = 'TRY',
  USD = 'USD',
  ZAR = 'ZAR'
}

export interface ProductType {
  id: string
  name: string
  description: string
  price: number
  currency: CURRENCY
}

export const ProductRecord: Record.Factory<ProductType> = Record({
  id: '',
  name: '',
  description: '',
  price: 0,
  currency: CURRENCY.GBP as CURRENCY
})
