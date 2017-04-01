import React, { Component } from 'react'

import InputTodo from './components/InputTodo'
import Todolist from './components/Todolist'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      idEditTodo: 0,
      contentEditTodo: ''
    }
  }

  showEditTodoForm() {
    this.setState({
      isEditing: true
    })
  }

  hideEditTodoForm() {
    this.setState({
      isEditing: false
    })
  }

  getContentEditTodo(id, content) {
    this.setState({
      idEditTodo: id,
      contentEditTodo: content
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Todolist
          showEditTodoForm={() => this.showEditTodoForm()}
          getContentEditTodo={(id, content) => this.getContentEditTodo(id, content)}
          />
        <InputTodo
          statusEditing={this.state.isEditing}
          hideEditTodoForm={() => this.hideEditTodoForm()}
          idEditTodo={this.state.idEditTodo}
          contentEditTodo={this.state.contentEditTodo}
          />
      </div>
    )
  }
}

export default App
