import React, { Component } from 'react';

class ListItem extends Component {

    constructor(props) {
      super(props);
      this.state = { color: 'black' };
    }
    componentDidMount(){
      console.log('LISTitem props ', this.props);
    }

    handleClick() {
	// Implement this function!
      let newColor = this.state.color;
      if (newColor == 'black'){
        newColor = 'gray';
      } else {
        newColor = 'black';
      }
      this.setState ({
        color: newColor
      })
    }

  render() {
    var item = this.props.item;
    var name = item.name;

    return (
	    <span onClick={this.handleClick.bind(this)} style={{color: this.state.color}}>
        <strong>{name}</strong>
      </span>
    );

  }

}
export default ListItem;
