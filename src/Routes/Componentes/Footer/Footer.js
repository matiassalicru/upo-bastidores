import React from 'react';
import './Footer.css';
import fb from '../../../Assets/images/fb.svg'
import wsp from "../../../Assets/images/wsp.svg";
import insta from "../../../Assets/images/insta.svg";
import location from "../../../Assets/images/location.svg";

function Footer() {
    return (
      <ul className="footer-container">
        <li className="item">
          <img src={insta} alt="*" />
          <p>
            <a href="https://www.instagram.com/upo_bastidores/">
              Upo Bastidores
            </a>
          </p>
        </li>
        <li className="item">
          <img src={fb} alt="*" />
          <p>
            <a href="https://www.facebook.com/upo_bastidores-101914031541600">
              Upo Bastidores
            </a>
          </p>
        </li>
        <li className="item">
          <img src={wsp} alt="*" />
          <p>
            <a href="https://wa.link/x16smx">3517174900</a>
          </p>
        </li>
        <li className="item">
          <img src={location} alt="*" />
          <p>
            <a href="https://www.google.com/maps/place/C%C3%B3rdoba/data=!4m2!3m1!1s0x9432985f478f5b69:0xb0a24f9a5366b092?sa=X&ved=2ahUKEwic7M-6jKvrAhWkHLkGHQYqBgYQ8gEwAHoECAsQAQ">
              Cordoba, Argentina
            </a>
          </p>
        </li>
      </ul>
    );
}

export default Footer;