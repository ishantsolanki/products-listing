import React from "react"
import { fireEvent } from "@testing-library/react"
import { renderWithRouter } from "../../testUtils"
import LoginLink from "./LoginLink"

test("clicking on login navigates to login page", () => {
  const { getByText, history } = renderWithRouter(<LoginLink />)
  const linkElement = getByText(/Log in/i)
  fireEvent.click(linkElement)

  expect(history.location.pathname).toEqual("/login")
})
