import React from 'react';
import Subheader from '../Subheader/Subheader';
import './Header.css';

export default function Header(){
    return (
      <div>
          <div className='header'>
                <p className='header-title'>UPO</p>
                <p className='header-subtitle'>bastidores</p>
                <div className='header-sub-subtitle'>
                    <p>
                        Un picasso original
                    </p>
                </div>
          </div>
          <Subheader title='¡Apasionados por lo que hacemos!'/>
      </div>
    );
}