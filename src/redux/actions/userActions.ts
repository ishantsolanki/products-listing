import { signup } from './api'

export enum USER_TYPES {
  SIGNUP_USER_REQUEST = 'SIGNUP_USER_REQUEST',
  SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS',
  SIGNUP_USER_ERROR = 'SIGNUP_USER_ERROR'
}

type dispatchType = ({ type }: { type: USER_TYPES }) => Promise<any> | void

export const signupUser = ({ userEmail, password }: {userEmail: string, password: string}) =>
(dispatch: dispatchType, getState: () => any) => {
  dispatch({ type: USER_TYPES.SIGNUP_USER_REQUEST })

  return signup({ username: userEmail, password })
  .catch((err) => {
    dispatch({ type: USER_TYPES.SIGNUP_USER_ERROR })
  })
}
