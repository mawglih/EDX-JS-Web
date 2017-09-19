import React, { Component } from 'react';
import TodoItem from './todo-item';

export default class TodoList extends Component{
    render() {
        return(
            <ul>
                {this.props.items.map(function(item) {
                    return <TodoItem id={item.id} text={item.text}/>
                })}
            </ul>
        );
    }
};