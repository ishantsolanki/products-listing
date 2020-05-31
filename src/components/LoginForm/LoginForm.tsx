import React, { useState, ChangeEvent } from 'react'
import { connect } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import InputRow from '../InputRow/InputRow'
import SignupLink from './SignupLink'

import { checkUser } from '../../redux/actions/userActions'

interface Props {
  checkUserBound: ({ userEmail, password }: { userEmail: string, password: string}) => Promise<any>
}

export const mapDispatchToProps = {
  checkUserBound: checkUser
}

export const LoginForm: React.FC<Props> = ({
  checkUserBound
}) => {
  const [userEmail, setUserEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(true)
  const location = useLocation()
  const history = useHistory()
  const isSignedUp = location.hash.replace('#', '') === 'signedup'

  const onUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value)
    setIsFormValid(true)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setIsFormValid(true)
  }

  const checkLogin = () => {
    checkUserBound({ userEmail, password })
      .then((response) => {
        if (response.result) {
          setIsFormValid(true)
          history.push('/listings')
        } else {
          setIsFormValid(false)
        }
      })
  }

  return (
    <div className="container mx-auto text-center max-w-md pt-40">
      {isSignedUp && (
        <div className="pb-4 text-green-500 font-bold"> Signed up successfully! Login to continue</div>
      )}
      <div className="border-solid border-gray-200 border-2 rounded-md">
        <div className="bg-gray-200 text-lg py-3">
          Login
        </div>
        <div className="p-5">
          <InputRow label="Username">
            <input
              value={userEmail}
              onChange={onUserEmailChange}
              className={`bg-white
                focus:outline-none
                focus:shadow-outline
                border
                ${isFormValid ? 'border-gray-300' : 'border-red-300'}
                rounded-md
                py-2 px-4
                appearance-none
                leading-normal
              `}
              type="email"
              placeholder="email@example.com"
              id="Username"
            />
          </InputRow>
          <InputRow label="Password">
            <input
              value={password}
              onChange={onPasswordChange}
              className={`bg-white
                focus:outline-none
                focus:shadow-outline
                border
                ${isFormValid ? 'border-gray-300' : 'border-red-300'}
                rounded-md
                py-2 px-4
                appearance-none
                leading-normal
              `}
              type="password"
              id="Password"
            />
          </InputRow>

          {!isFormValid && (
            <div className="text-red-400 pb-4">Invalid username or password</div>
          )}

          <div className="text-center">
            <button className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold" onClick={checkLogin}>Log In</button>
          </div>
        </div>
      </div>

      <div className="pt-3">
        <SignupLink />
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(LoginForm)
