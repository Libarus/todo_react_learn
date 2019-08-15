import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

    maxItemId = 0;

    state = {
        todoData : [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch'),
        ]
    };

    createTodoItem(label) {
        return { id: ++this.maxItemId, label, important: false, done: false };
    };

    deleteItem = (id) => {
        this.setState(( { todoData } ) => {
            const newData = todoData.filter((el) =>{ return el.id !== id ? el : null; });
            return {
                todoData: newData
            };
        });
    }

    addItem = (text) => {
        this.setState( ( { todoData: data } ) => {
            return { todoData : [ ...data, this.createTodoItem(text) ] };
        });
    };

    toggleImportant = (id) => {
        this.setState(( { todoData: data } ) => {
            return {
                todoData: data.map((el) => {
                    const item = {...el, important: el.id === id ? !el.important : el.important};
                    return {...item};
                })
            }
        });
    };

    toggleDone = (id) => {
        this.setState(( { todoData: data } ) => {
            return {
                todoData: data.map((el) => {
                    const item = {...el, done: el.id === id ? !el.done : el.done};
                    return {...item};
                })
            }
        });
    };

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList
                    todos={ todoData }
                    onDeleted = { (id) => this.deleteItem(id) }
                    onToggleImportant = { (id) => this.toggleImportant(id) }
                    onToggleDone = { (id) => this.toggleDone(id) }
                />
                <ItemAddForm onAdded={ (text) => this.addItem(text) }/>
            </div>
        );
    };
};
