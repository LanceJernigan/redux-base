import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {createStore,combineReducers, applyMiddleware} from 'redux'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

const App = props => (
  <div id="app">
    <h2>Hello!</h2>
  </div>
)

const store = createStore(combineReducers({
  routing: routerReducer
}))

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Provider
    store={store}
  >
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
)

render(
  routes,
  document.getElementById('mount')
)