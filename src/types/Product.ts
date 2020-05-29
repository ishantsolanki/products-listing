import { Record } from 'immutable'

export enum CURRENCY {
  AUD,
  BGN,
  BRL,
  CAD,
  CHF,
  CNY,
  CZK,
  DKK,
  GBP,
  HKD,
  HRK,
  HUF,
  IDR,
  ILS,
  INR,
  ISK,
  JPY,
  KRW,
  MXN,
  MYR4,
  NOK,
  NZD,
  PHP,
  PLN,
  RON,
  RUB,
  SEK,
  SGD,
  THB,
  TRY,
  USD,
  ZAR
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
