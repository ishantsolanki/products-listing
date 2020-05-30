import { signupApi, checkUserCredentialsApi } from './api'

type dispatchType = () => Promise<any> | void

export const signupUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
  (dispatch: dispatchType) =>
  signupApi({ userEmail, password })

export const checkUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
  (dispatch: dispatchType) =>
  checkUserCredentialsApi({ userEmail, password }).then(response => response.json())
