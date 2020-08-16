import React from 'react';
import './Header.css';
import logo from '../../../Assets/images/Logo.svg';

export default function Header(){
    return (
          <div className='header'>
                <img src={logo} alt="logo"/>
          </div>
    );
}