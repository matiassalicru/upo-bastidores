import React from 'react';
import './Producto.css';

const Producto = ({title, image, description, color}) => (
    <div className='producto-container'>
        <div className='title-img'>
            <h2>{title}</h2>
            <img src={image} alt="imagen-producto"/>
        </div>
        	<p className={`producto-description ${color}`}>{description}</p>
    </div>
);

export default Producto;