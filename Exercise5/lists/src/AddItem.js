import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }
  }
  componentDidUpdate() {
    console.log('Additem ', this.props.items, this.props.lists, this.props.addList);
  }
  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      // Implement the rest of this function here!
      var newName = this.refs.id.value;
      console.log('name' , newName);
      var item = this.state.newItem;
      item = {
        newName
      }
      this.setState({ newItem: item},() => {
        this.props.addItem(this.state.itemName);
      });


      this.refs.id.value = '';
  }

  componentDidUpdate() {
    console.log('add item update ', this.state.newItem);
  }


  render() {
    var divName = 'add' + this.props.idName;
    return (
      <div className='addItemDiv'>
      <h4>Add {this.props.idName}</h4>
      <form ref='form' onSubmit={this.handleSubmit.bind(this)}>
      <div id={divName} ref={divName}>
        <label>Name</label><br />
        <input type='text' ref='id' />
        </div>
        <br />
        <input type='submit' value='Submit' />
        <br />
      </form>
      </div>
    );
  }

}

export default AddItem;
