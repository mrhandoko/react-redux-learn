import * as ActionTypes from '../actions/constants'

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODOS:
      return [...action.payload]
    case ActionTypes.CREATE_TODO:
      return [...state, action.payload]
    case ActionTypes.REMOVE_TODO:
      const newState = state.filter(todo => {
        return todo.id !== action.payload
      })
      return newState
    default:
      return state
  }
}
