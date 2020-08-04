import React from 'react';
import './Subheader.css';

export default function Subheader({title}) {
    return (
      <div className="sub-header">
        <p>{title}</p>
      </div>
    );
}