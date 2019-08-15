import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {
        const { label,
                onDeleted,
                onToggleImportant,
                onToggleDone,
                important,
                done,
                itemId
                } = this.props;

        let todoListItemClasses = "todo-list-item";
        todoListItemClasses += done ? " done" : "";
        todoListItemClasses += important ? " important" : "";

        return (
            <span className={todoListItemClasses}>
                <span
                    className="todo-list-item-label"
                    //style={style}
                    onClick={ onToggleDone } >
                    { label } #{ itemId }
                </span>

                <button type="button"
                        className="btn btn-outline-success btn-sm"
                        onClick={onToggleImportant}>
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm"
                        onClick={onDeleted}>
                    <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}