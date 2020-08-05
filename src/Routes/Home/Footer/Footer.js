import React from 'react';
import './Footer.css';
import fb from '../../../Assets/images/fb.svg'
import wsp from "../../../Assets/images/wsp.svg";
import insta from "../../../Assets/images/insta.svg";
import location from "../../../Assets/images/location.svg";




function Footer() {
    return (
        <ul className='footer-container'>
          <li className="item">
            <img src={fb} alt="*" />
            <p>Upo Bastidores</p>
          </li>
          <li className="item">
            <img src={insta} alt="*" />
            <p>Upo Bastidores</p>
          </li>
          <li className="item">
            <img src={wsp} alt="*" />
            <p>3517174900</p>
          </li>
          <li className="item">
            <img src={location} alt="*" />
            <p>Cordoba</p>
          </li>
          <li className="item">
            <img src={location} alt="*" />
            <p>Argentina</p>
          </li>
        </ul>
    );
}

export default Footer;