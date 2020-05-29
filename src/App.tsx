import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './tailwind.generated.css'

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/">
          <div className="container mx-auto">Hello world</div>
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
