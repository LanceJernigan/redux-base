import createAction from '../createAction'

export const ADD_USER = `ADD_USER`
export const DELETE_USER = `DELETE_USER`
export const UPDATE_USER = `UPDATE_USER`


export const addUser = createAction(ADD_USER)

export const deleteUser = createAction(DELETE_USER)

export const updateUser = createAction(UPDATE_USER)