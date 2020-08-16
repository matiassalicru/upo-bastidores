import React from 'react';
import './BoxButton.css';


function BoxButton({color, description}) {
    return(
        <div className={`boxButton-container ${color}`}>
            <p className='boxButton-description'>{description}</p>
        </div>
    )
}

export default BoxButton;