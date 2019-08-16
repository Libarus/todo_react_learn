import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-primary btn-sm active">
                    <input type="radio" name="status" id="status0" defaultChecked /> All
                </label>
                <label className="btn btn-primary btn-sm">
                    <input type="radio" name="status" id="status1" /> Activate
                </label>
                <label className="btn btn-primary btn-sm">
                    <input type="radio" name="status" id="status2" /> Done
                </label>

            </div>
        );
    };
};
