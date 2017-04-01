import React from 'react'
import { connect } from 'react-redux'

import { fetchTodos, removeTodo } from '../actions'

class Todolist extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  removeTodo(id) {
    this.props.removeTodo(id)
  }

  editTodo() {
    this.props.showEditTodoForm()
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map((item, index) =>
              ((<li key={index}>{item.title}
                <button onClick={() => {
                  this.editTodo()
                  this.props.getContentEditTodo(item.id,item.title)
                }}>Edit</button>
                <button onClick={() => this.removeTodo(item.id)}>Remove</button></li>))
            )
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTodos: () => dispatch(fetchTodos()),
    removeTodo: (id) => dispatch(removeTodo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist)
