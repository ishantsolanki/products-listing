import React from "react"
import { List } from "immutable"
import { render } from "@testing-library/react"

import { Listing } from "./Listing"

test("renders no products message when products list is empty", async () => {
  const fetchProductsMock = jest.fn()
  const fetchForexRatesMock = jest.fn().mockResolvedValue("return value")
  const { getByText } = render(
    <Listing
      products={List([])}
      fetchProductsBound={fetchProductsMock}
      fetchForexRatesBound={fetchForexRatesMock}
    />,
  )
  expect(
    getByText(/No products created. Create you first product!/),
  ).toBeInTheDocument()
  await expect(fetchForexRatesMock).toHaveBeenCalledTimes(1)
  expect(fetchProductsMock).toHaveBeenCalledTimes(1)
})
