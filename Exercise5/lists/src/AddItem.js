import React, { Component } from 'react';

class AddItem extends Component {

  constructor() {
    super();
    this.state = {
      newItem:{}
    }
  }
  componentDidMount(){
    console.log('Additem props ', this.props);
  }


  handleSubmit(e) {
      e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
      // Implement the rest of this function here!
      var item = this.refs.id.value;
      var list = this.props.idName;
      var items = this.props.items;
      console.log('in additem items is ', items);
      console.log('name' , item);
      var newItem = this.state.newItem;
      newItem = { 
        list, 
        item
      };
      // var currentItems = items.map(function (item) {
      //   return item.search(list) !== -1;
      // });
      // console.log('Additem current item' , currentItems)
      this.setState({ newItem},() => {
        this.props.addItem(this.state.newItem);
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
