import React, {Component} from 'react';

class ListItems extends Component{
    render() {
    return(
        <ul>{ this.props.items.map(function (item) {
            return <li key={item}>{item}</li>
        })
        }</ul>
    );
}
};

export default ListItems;