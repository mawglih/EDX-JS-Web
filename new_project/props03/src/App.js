import React, { Component } from 'react';
import NumberInputField from './number-input-field';
import OutputField from './output-field';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input1: 0,
            input2: 0,
            product: 0
        };
        this.multiply = this.multiply.bind(this);
    }

    multiply(id, val) {
        if (id == 1) {
            this.setState({
                input1: val,
                product: val * this.state.input2
            });
        } else if (id == 2) {
            this.setState({
                input2: val,
                product: val * this.state.input1
            });
        }
    }

    render() {
        return ( <
            div className = "container" >
            <
            NumberInputField id = "1"
            action = { this.multiply }
            /> <
            NumberInputField id = "2"
            action = { this.multiply }
            /> <
            OutputField product = { this.state.product }
            /> <
            /div>
        );
    }
};

export default App;