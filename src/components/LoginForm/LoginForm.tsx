import React, { useState, ChangeEvent } from 'react'

interface InputRowProps {
  label: string,
}

const InputRow: React.FC<InputRowProps> = ({
  label,
  children
}) => (
  <div className="pb-4">
    <label htmlFor={label} className="mr-3">{label}</label>
    {children}
  </div>
)

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isFormValid, setIsFormValid] = useState<boolean>(true)

  const onUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const checkLogin = () => {
    if (username === 'example@love.com' && password === 'admin') {
      setIsFormValid(true)
      alert('You logged in')
    } else {
      setIsFormValid(false)
    }
  }

  return (
    <div className="container mx-auto text-center max-w-md pt-40">
      <div className="border-solid border-gray-200 border-2 rounded-md">
        <div className="bg-gray-200 text-lg py-3">
          Login
        </div>
        <div className="p-5">
          <InputRow label="Username">
            <input
              value={username}
              onChange={onUsernameChange}
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
    </div>
  )
}

export default LoginForm
