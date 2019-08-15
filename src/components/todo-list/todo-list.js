import React, { Component } from 'react';
import TodoListItem from './../todo-list-item';
import './todo-list.css';

export default class TodoList extends Component {

    render() {
        const {todos, onDeleted, onToggleImportant, onToggleDone} = this.props;
        const elements = todos.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className="list-group-item">
                    <TodoListItem {...itemProps} itemId={id}
                                  onDeleted={() => onDeleted(id)}
                                  onToggleImportant={() => onToggleImportant(id)}
                                  onToggleDone={() => onToggleDone(id)}/>
                </li>
            );
        });
        return elements;
    }
}