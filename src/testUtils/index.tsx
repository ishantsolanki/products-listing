import React, { ReactElement } from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

export const renderWithRouter = (
  ui: ReactElement<any>,
  route: string = '/',
) => {
  const history = createMemoryHistory({ initialEntries: [route] })
  const Wrapper: React.FC = ({ children }) => (
    <Router history={history}>{children}</Router>
  )

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  }
}
