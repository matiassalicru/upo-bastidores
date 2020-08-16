import React from 'react';
import './TitleHeader.css';

const TitleHeader = ({title, color}) => (
    <div className={`title-header-container ${color}`}>
        <p className='title-header'>{title}</p>
    </div>
);

export default TitleHeader;