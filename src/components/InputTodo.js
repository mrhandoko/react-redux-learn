import React from 'react'
import { connect } from 'react-redux'

import { createTodo, updateTodo } from '../actions'

class InputTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      writeTodo: '',
      editTodo: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      editTodo: nextProps.contentEditTodo
    })
  }

  stateWriteTodo(event) {
    this.setState({
      writeTodo: event.target.value
    })
  }

  stateEditTodo(event) {
    this.setState({
      editTodo: event.target.value
    })
  }

  submitTodo(event) {
    event.preventDefault()
    this.props.dispatchCreateTodo(this.state.writeTodo)
    this.setState({
      writeTodo: ''
    })
  }

  updateTodo(event, id) {
    event.preventDefault()
    this.props.dispatchCreateTodo(id, this.state.editTodo)
    this.setState({
      editTodo: ''
    })
    this.props.hideEditTodoForm()
  }

  render() {
    return (
      <div>
        <h1></h1>
        { !this.props.statusEditing ?
          (<form onSubmit={(event) => this.submitTodo(event)}>
              <input type="text" placeholder="Add todo.." onChange={(event) =>  this.stateWriteTodo(event)} value={this.state.writeTodo}/>
              <button>Submit</button>
            </form>) :
          (<form onSubmit={(event) => this.updateTodo(event)}>
              <input type="text" placeholder="Edit todo.." onChange={(event) => this.stateEditTodo(event)} value={this.state.editTodo}/>
              <button>Update</button>
              <button onClick={this.props.hideEditTodoForm}>Cancel</button>
          </form> )
        }
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateTodo: data => dispatch(createTodo(data)),
    dispatchUpdateTodo: (id, data) => dispatch(updateTodo(id, data))
  }
}

export default connect(null, mapDispatchToProps)(InputTodo)
