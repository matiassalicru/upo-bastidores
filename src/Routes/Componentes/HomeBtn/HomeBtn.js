import React from 'react';
import './HomeBtn.css';
import { Link } from 'react-router-dom';

const HomeBtn = ({color}) => (
    <Link to='/' className='link'>
        <div className={`HomeBtn ${color}`}>
            Inicio
        </div>
    </Link>
);

export default HomeBtn;