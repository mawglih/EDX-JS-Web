import React, { Component } from 'react';
import ListItem from './ListItem.js';
import AddItem from './AddItem.js';
const uuidv4 = require('uuid');

class List extends Component {


  componentDidUpdate(){
    console.log('LIST props ', this.props);
  }

  render() {

    var name = this.props.name;
    var items = this.props.items;
    


    if (items) {
      console.log('in List items', this.props.items);
      return (
        <div id={name} key={uuidv4()}>
          <h3>{name} List</h3>
	<ul>
          {items.map(function(item) {
            return (
		    <li key={uuidv4()}><ListItem item={item} key={uuidv4()} /></li>
            )
          })}
	</ul>
          <AddItem idName={name} addItem={this.props.addItem.bind(this)} />
        </div>
      )
    }
    return (
      <div id={name} key={uuidv4()}>
        <h3>{name} List</h3>
        <AddItem idName={name} addItem={this.props.addItem.bind(this)} />
      </div>
    )

  }
}

export default List;
