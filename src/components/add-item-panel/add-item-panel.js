import React from 'react';
import './add-item-panel.css';

const AddItemPanel = ( { onAdded } ) => {

    return (
        <div>
            <br/>
            <button className="btn btn-outline-secondary"
                    onClick={() => onAdded("New unknow item")}
            >Add item</button>
        </div>
    );
};

export default AddItemPanel;