import { signupApi, checkUserCredentialsApi } from './api'

type dispatchType = () => Promise<any> | void

export const signupUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
  (dispatch: dispatchType) =>
  signupApi({ userEmail, password })

export const checkUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
  async (dispatch: dispatchType) => {
    const response = await checkUserCredentialsApi({ userEmail, password })
    return response.json()
  }
