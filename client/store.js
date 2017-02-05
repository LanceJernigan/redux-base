import {createStore,combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import userReducer from './truth/Users/reducer'

export const store = createStore(combineReducers({
	users: userReducer,
	routing: routerReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store