import React from 'react';
import './BoxButton.css';

function BoxButton({background, description}) {
    return(
        <div className={`boxButton-container ${background}`}>
            <p className='boxButton-description'>{description}</p>
        </div>
    )
}

export default BoxButton;