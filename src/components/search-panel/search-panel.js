import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
    render() {
        const { setSearchString, searchString } = this.props;
        return (
            <input type="text"
                   className="form-control search-input input-xs"
                   placeholder="type to search"
                   onChange={ setSearchString }
                   value={searchString}
                    />
        );
    };
};