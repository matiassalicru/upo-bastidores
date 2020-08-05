import React from 'react';
import './FakeButton.css';

export default function FakeButton({color, icon, description}) {
    return (
        <div className={`box ${color}`}>
          <img className="box-icon" src={icon} alt="icon" />
          <p className="box-description">{description}</p>
        </div>
    );
}