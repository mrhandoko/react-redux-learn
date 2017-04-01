import * as ActionTypes from './constants'

export const loadTodos = (data) => {
  return {
    type: ActionTypes.LOAD_TODOS,
    payload: data
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch('http://localhost:4000/todos', { method: 'get' })
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      dispatch(loadTodos(data))
    })
  }
}

export const createTodo = (data) => {
  return dispatch => {
    const newData = {title: data}
    fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newData)
    }).then(response => response.json())
    .then(data => {
      return dispatch({
        type:ActionTypes.CREATE_TODO,
        payload: data
      })
    }).catch(err => {
      console.log(err)
    })
  }
}

export const removeTodo = (id) => {
  return dispatch => {
    fetch('http://localhost:4000/todos/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      return dispatch({
        type: ActionTypes.REMOVE_TODO,
        payload: id
      })
    }).catch( err => console.log(err))
  }
}

export const updateTodo = (id, data) => {
  return dispatch => {
    fetch('http://localhost:4000/todos' + id, {
      method: 'PUT',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(response => response.json())
    .then(data => {
      return dispatch({
        type: ActionTypes.UPDATE_TODO,
        payload: data
      })
    }).catch(err => console.log(err))
  }
}
