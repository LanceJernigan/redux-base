import {ADD_USER,DELETE_USER,UPDATE_USER} from './actions'

const initialState = [{
	_id: 1,
	name: 'Tim Roberts'
}]

const userActions = {
	'default': state => state,
	[ADD_USER]: (state,user) => ([...state,{_id: state.length + 1, ...user}]),
	[DELETE_USER]: (state,userID) => state.filter(({_id}) => _id !== userID),
	[UPDATE_USER]: (state,{_id,...update}) => {
		const index = state.findIndex(user => user._id === _id)
		if(~index){
			return [...state.slice(0,index),
				Object.assign(state[index],update),
				...state.slice(index + 1)]
		}else {
			return [...state,{_id,...update}]
		}
	}
}

export const userReducer = (state = initialState, action) => {
	const type = userActions.hasOwnProperty(action.type) ? action.type : 'default'
	return userActions[type](state,action.payload)
}

export default userReducer