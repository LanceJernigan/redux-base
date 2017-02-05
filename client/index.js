import React from 'react'
import {render} from 'react-dom'
import {Provider, connect} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {createStore,combineReducers, applyMiddleware} from 'redux'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'

import userReducer from './reducers/Users/index'

import {addUser} from './actions/Users/index'

const App = ({users = [],...props}) => (
  <div id="app">
    <h2>Hello!</h2>
	  <button onClick={(e)=>{
	  	console.log('I clicked a button!')
		  props.add({
		  	name: 'Lance Jernigan'
		  })
	  }}>
		  Add user!
	  </button>
	  <div>
		  {users.map(user => (
		  	<div
			    key={user._id || Math.random()}
			  >
				  I have a user! {user.name || 'Unknown name!'}
			  </div>
		  ))}
	  </div>
  </div>
)

const mapStateToProps = state => ({
	users: state.users
})

const mapDispatchToProps = dispatch => ({
	add: user => dispatch(addUser(user))
})

const AppConnect = connect(
	mapStateToProps,
	mapDispatchToProps
)(App)

const store = createStore(combineReducers({
	users: userReducer,
  routing: routerReducer
}))

const history = syncHistoryWithStore(browserHistory, store)

const routes = (
  <Provider
    store={store}
  >
    <Router history={history}>
      <Route path="/" component={AppConnect}>
      </Route>
    </Router>
  </Provider>
)

render(
  routes,
  document.getElementById('mount')
)