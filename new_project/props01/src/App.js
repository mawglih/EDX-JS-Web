import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './list-items';

class App extends Component {
  constructor(props){
  super(props);
  var allItems = ['Ant', 'Bear', 'Cat', 'Dog', 'Elephant'];
  this.state = {
    initialItems: allItems,
    currentItems: allItems
  };
}

filteredList(input){
  var updatedList = this.state.initialItems,
  updatedList = updatedList.filter(function(item){
    return item.search(input.target.value) !== -1;
  });
  this.setState({
    currentItems : updatedList
  });
}

  render() {
    return (
      <div className="container">
          <input className="row" type="text" placeholder="search"
          onChange={this.filteredList.bind(this)}/>
          <ListItems className="row" items={this.state.currentItems}/>
      </div>
    );
  }
};

export default App;
