import React from 'react';
import './BoxButton.css';

function BoxButton({background, description}) {
    return(
        <div className='boxButton-container'>
            <div className={`box-img ${background}`}></div>
            <p className='boxButton-description'>{description}</p>
        </div>
    )
}

export default BoxButton;