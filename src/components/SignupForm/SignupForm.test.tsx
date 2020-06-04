import React from "react"
import { fireEvent } from "@testing-library/react"
import { renderWithRouter } from "../../testUtils"
import SignupForm from "./SignupForm"

test("renders the signup form", () => {
  const { getByText, getAllByText } = renderWithRouter(<SignupForm />)

  expect(getByText("User Email")).toBeInTheDocument()
  expect(getByText("Password")).toBeInTheDocument()
  expect(getByText("Confirm Password")).toBeInTheDocument()
  expect(getAllByText("Sign Up").length).toEqual(2)
})

test("invalid input to email shows error", async () => {
  const { getByLabelText, getByText, getByRole } = renderWithRouter(
    <SignupForm />,
  )

  await fireEvent.change(getByLabelText("User Email"), {
    target: { value: "example@love" },
  })
  await fireEvent.click(getByRole("button"))

  expect(getByText("Email is not the correct format")).toBeInTheDocument()
})

test("invalid input to password shows error", async () => {
  const { getByLabelText, getByText, getByRole } = renderWithRouter(
    <SignupForm />,
  )

  await fireEvent.change(getByLabelText("Password"), {
    target: { value: "password" },
  })
  await fireEvent.change(getByLabelText("Confirm Password"), {
    target: { value: "passwprd" },
  })
  await fireEvent.click(getByRole("button"))

  expect(
    getByText("Passwords dont match. Type in the same password"),
  ).toBeInTheDocument()
})
