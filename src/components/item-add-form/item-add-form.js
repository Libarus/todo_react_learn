import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (ev) => {
        this.setState({ label: ev.target.value });
    };

    onSubmit = (ev) => {
        this.props.onAdded(this.state.label);
        this.setState({ label: '' });
        ev.preventDefault();
    };

    render() {
        const { label } = this.state;
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit} >
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="What do you want to do?"
                       value={label}
                />
                <button type="submit"
                        className="btn btn-outline-secondary">
                Add&nbsp;item</button>
            </form>
        );
    };
};
