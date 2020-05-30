import { signup, checkUserCredentials } from './api'

export enum USER_TYPES {
  SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST',
  SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR'
}

type dispatchType = ({ type }: { type: USER_TYPES }) => Promise<any> | void

export const signupUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
  (dispatch: dispatchType) =>
  signup({ userEmail, password })

export const checkUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
  (dispatch: dispatchType) =>
  checkUserCredentials({ userEmail, password }).then(response => response.json())
