import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"

import { signupUser } from "../../redux/actions/userActions"

import InputRow from "../InputRow/InputRow"
import LoginLink from "./LoginLink"

const mapDispatchToProps = {
  signupUserBound: signupUser,
}

interface Props {
  signupUserBound: ({
    userEmail,
    password,
  }: {
    userEmail: string
    password: string
  }) => Promise<any>
}

export const LoginForm: React.FC<Props> = ({ signupUserBound }) => {
  const [userEmail, setUserEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [confirmPassword, setConfirmPassword] = useState<string>("")
  const [passwordStateInvalid, setPasswordStateInvalid] = useState<boolean>(
    false,
  )
  const [emailInvalid, setEmailInvalid] = useState<boolean>(false)
  const history = useHistory()

  const onUserEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserEmail(event.target.value)
  }

  const onPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const onConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value)
  }

  const onSignupClick = (event: MouseEvent<HTMLButtonElement>) => {
    let formValid = true
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!emailRegex.test(userEmail)) {
      setEmailInvalid(true)
      formValid = false
    }

    if (password !== confirmPassword || password === "") {
      setPasswordStateInvalid(true)
      formValid = false
    }

    if (formValid) {
      setEmailInvalid(false)
      setPasswordStateInvalid(false)
      signupUserBound({
        userEmail,
        password,
      }).then(() => history.push("/login#signedup"))
    }
  }

  useEffect(() => {
    setEmailInvalid(false)
    setPasswordStateInvalid(false)
  }, [userEmail, password, confirmPassword])

  return (
    <div className="container mx-auto text-center max-w-md pt-40">
      <div className="border-solid border-gray-200 border-2 rounded-md">
        <div className="bg-gray-200 text-lg py-3">Sign Up</div>
        <div className="p-5 text-right pr-12">
          <InputRow label="User Email">
            <input
              value={userEmail}
              onChange={onUserEmailChange}
              className={`bg-white
                focus:outline-none
                focus:shadow-outline
                border
                ${emailInvalid ? "border-red-300" : "border-gray-300"}
                rounded-md
                py-2 px-4
                appearance-none
                leading-normal
              `}
              type="email"
              placeholder="email@example.com"
              id="User Email"
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
                ${passwordStateInvalid ? "border-red-300" : "border-gray-300"}
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
                ${passwordStateInvalid ? "border-red-300" : "border-gray-300"}
                rounded-md
                py-2 px-4
                appearance-none
                leading-normal
              `}
              type="password"
              id="Confirm Password"
            />
          </InputRow>
        </div>
        {passwordStateInvalid && (
          <div className="text-red-400 pb-4 text-center">
            Passwords dont match. Type in the same password
          </div>
        )}
        {emailInvalid && (
          <div className="text-red-400 pb-4 text-center">
            Email is not the correct format
          </div>
        )}

        <div className="text-center p-5 pt-0">
          <button
            className="px-4 py-2 border-teal-300 border rounded-md bg-teal-400 text-white font-bold"
            onClick={onSignupClick}
          >
            Sign Up
          </button>
        </div>
      </div>

      <div className="pt-3">
        <LoginLink />
      </div>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(LoginForm)
