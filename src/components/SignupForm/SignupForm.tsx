import React, { useState, ChangeEvent } from 'react'

import InputRow from '../InputRow/InputRow'
import LoginLink from './LoginLink'

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
  }

  return (
    <div className="container mx-auto text-center max-w-md pt-40">
      <div className="border-solid border-gray-200 border-2 rounded-md">
        <div className="bg-gray-200 text-lg py-3">
          Sign Up
        </div>
        <div className="p-5 text-right pr-12">
          <InputRow label="Username">
            <input
              value={username}
              onChange={onUsernameChange}
              className={`bg-white
                focus:outline-none
                focus:shadow-outline
                border
                border-gray-300
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
                border-gray-300
                rounded-md
                py-2 px-4
                appearance-none
                leading-normal
              `}
              type="password"
              id="Password"
            />
          </InputRow>

          <InputRow label="Confirm Password">
            <input
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              className={`bg-white
                focus:outline-none
                focus:shadow-outline
                border
                border-gray-300
                rounded-md
                py-2 px-4
                appearance-none
                leading-normal
              `}
              type="password"
              id="ConfirmPassword"
            />
          </InputRow>
        </div>

        <div className="text-center p-5 pt-0">
          <button className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold">Sign Up</button>
        </div>
      </div>

      <div className="pt-3">
        <LoginLink />
      </div>
    </div>
  )
}

export default LoginForm
