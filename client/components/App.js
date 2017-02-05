import React from 'react'
import {connect} from 'react-redux'

import {addUser} from '../truth/Users/actions'


export const App = ({users = [],...props}) => (
	<div id="app">
		<h2>Hello!</h2>
		<button onClick={(e)=>{
			e.preventDefault()
			props.add({
				name: 'Lance Jernigan'
			})
		}}>
			Add user!
		</button>
		<div>
			{users.map(user => (
				<div key={user.name}>
					{user.name}
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

export default AppConnect