import React from 'react';

import './search-panel.css';

const SearchPanel = () => {
    return (
        <input type="text"
               className="form-control search-input input-xs"
               placeholder="type to search" />
    );
};

export default SearchPanel;