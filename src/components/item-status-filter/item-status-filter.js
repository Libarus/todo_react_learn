import React, { Component } from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-info btn-sm">All</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">Activate</button>
                <button type="button" className="btn btn-outline-secondary btn-sm">Done</button>
            </div>
        );
    };
};
