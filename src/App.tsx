import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './tailwind.generated.css'

import Header from './components/Header/Header'
import LoginForm from './components/LoginForm/LoginForm'

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <LoginForm />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
