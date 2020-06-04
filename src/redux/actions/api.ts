import { CURRENCY } from "../../types/Product"

type corsModeType = "cors" | "navigate" | "no-cors" | "same-origin" | undefined

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
}

const API_ENDPOINT = process.env.REACT_APP_API_HOST
  ? `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`
  : ""

const corsMode: corsModeType = "cors"

export const signupApi = (formData: {
  userEmail: string
  password: string
}) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(formData),
    headers,
    mode: corsMode,
  }
  return fetch(`${API_ENDPOINT}/signup`, options)
}

export const checkUserCredentialsApi = (formData: {
  userEmail: string
  password: string
}) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(formData),
    headers,
    mode: corsMode,
  }
  return fetch(`${API_ENDPOINT}/checkUser`, options)
}

export const addProductApi = (formData: {
  name: string
  description: string
  currency: CURRENCY
  price: number
}) => {
  const options = {
    method: "POST",
    body: JSON.stringify(formData),
    headers,
    mode: corsMode,
  }
  return fetch(`${API_ENDPOINT}/addProduct`, options)
}

export const fetchProductsApi = async () => {
  const response = await fetch(`${API_ENDPOINT}/fetchProducts`)
  return await response.json()
}

export const fetchForexRatesApi = async () => {
  const response = await fetch(
    "https://api.exchangeratesapi.io/latest?base=GBP",
  )
  return await response.json()
}

export const deleteProductApi = async (id: string) => {
  const options = {
    method: "DELETE",
  }
  return await fetch(`${API_ENDPOINT}/deleteProduct?id=${id}`, options)
}

export const updateProductApi = (formData: {
  name: string
  description: string
  currency: CURRENCY
  price: number
  id: string
}) => {
  const options = {
    method: "PUT",
    body: JSON.stringify(formData),
    headers,
    mode: corsMode,
  }
  return fetch(`${API_ENDPOINT}/updateProduct`, options)
}
