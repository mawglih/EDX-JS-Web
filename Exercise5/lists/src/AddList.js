import React, { Component } from 'react';

class AddList extends Component {
  constructor(props){
    super(props);
    this.state = {
      lists: this.props.lists,
      text: '',
      id: 0
    }
  }


  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!

      // Implement the rest of this function here!
      var newItem = {
        name: this.refs.id.value,
        id: this.state.id
      };
      this.setState ({
        lists: this.state.lists.push(newItem),
        name: '',
        id: this.state.id + 1
      });
      console.log('new item is ', newItem);
      this.refs.id.value = '';
  }
  

  render() {
    return (
      <div id="addListDiv">
      <form onSubmit={this.handleSubmit.bind(this)}>
      <div id='addList'>
      <label>What will be on your next list?&nbsp;
      <input type='text' ref='id' id='newID'></input>
      </label>
      </div><br />
      <input type='submit' value='Create List' />
      </form>
      </div>
    );
  }
}

export default AddList;
