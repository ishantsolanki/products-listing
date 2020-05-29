import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/">
          Hello world
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
