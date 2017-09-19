import React, { Component } from 'react';
import './App.css';
import TodoList from './todo-list';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [],
      text: '',
      id: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      text:e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    var newItem = {
      text: this.state.text,
      id: this.state.id
    };
    this.setState({
      items: this.state.items.concat(newItem),
      text: '',
      id: this.state.id + 1
    });
  }

  render() {
    return (
      <div className="container">
        <h3>TO-DO LIST</h3>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}/>
        </form>
      </div>
    );
  }
};

export default App;
