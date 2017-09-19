import React, { Component } from 'react';

export default class NumberInputField extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.action(this.props.id, e.target.value);
    }

    render() {
        return(
            <input onChange={this.handleChange}/>
        );
    }
};