import React, { Component } from 'react';

export default class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listname: '',
            id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      console.log('AddList props ', this.props);
    }


    handleSubmit(e) {
        e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
        var newName = this.refs.id.value;
        console.log('name' , newName);
        this.setState({listname: newName},() => {
          this.props.addList(this.state.listname);
        });


        this.refs.id.value = '';

    }


    render() {
        return (
          <div id = "addListDiv">
                    <form onSubmit = {this.handleSubmit} >
                      <div id = 'addList' >
                        <label > What will be on your next list ? &nbsp;
                          <input type = 'text'  ref = 'id'  id = 'newID'/>
                        </label >
                      </div>
                      <br/>
                      <input type = 'submit' value = 'Create List' />
                    </form>
          </div>
        );
    }
}
