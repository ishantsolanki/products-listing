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
import SignupForm from './components/SignupForm/SignupForm'

const App: React.FC = () => (
  <Provider store={store}>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/" component={SignupForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
