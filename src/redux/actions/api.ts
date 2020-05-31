import { CURRENCY } from '../../types/Product'

type modes = "cors" | "navigate" | "no-cors" | "same-origin" | undefined

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json'
}

export const signupApi = (formData: { userEmail: string, password: string }) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers,
    mode: 'cors' as modes
  }
  return fetch('http://localhost:3001/signup', options)
}


export const checkUserCredentialsApi = (formData: { userEmail: string, password: string }) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(formData),
    headers,
    mode: 'cors' as modes
  }
  return fetch('http://localhost:3001/checkUser', options)
}

export const addProductApi = (formData: { name: string, description: string, currency: CURRENCY, price: number }) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(formData),
    headers,
    mode: 'cors' as modes
  }
  return fetch('http://localhost:3001/addProduct', options)
}

export const fetchProductsApi = async () => {
  const response = await fetch('http://localhost:3001/fetchProducts')
  return await response.json()
}

export const fetchForexRatesApi = async () => {
  const response = await fetch('https://api.exchangeratesapi.io/latest?base=GBP')
  return await response.json()
}

export const deleteProductApi = async (id: string) => {
  const options = {
    method: 'DELETE',
  }
  return await fetch(`http://localhost:3001/deleteProduct?id=${id}`, options)
}