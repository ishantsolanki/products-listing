import React, { ReactElement } from 'react'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import store from '../redux/store'

export const renderWithRouter = (
  ui: ReactElement<any>,
  route: string = '/',
) => {
  const history = createMemoryHistory({ initialEntries: [route] })
  const Wrapper: React.FC = ({ children }) => (
    <Provider store={store}>
      <Router history={history}>{children}</Router>
    </Provider>
  )

  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  }
}
