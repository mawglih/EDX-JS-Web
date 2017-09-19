import React, { Component } from 'react';

export default class OutputField extends Component {
    render() {
        return(
            <div>
                The product is: {this.props.product}
            </div>
        );
    }
}