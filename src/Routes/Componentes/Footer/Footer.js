import React from "react";
import "./Footer.css";
import fb from "../../../Assets/images/fb.svg";
import wsp from "../../../Assets/images/wsp.svg";
import insta from "../../../Assets/images/insta.svg";
import location from "../../../Assets/images/location.svg";

function Footer() {
  return (
    <div className="footer-container">
        <div className="item">
          <img className='icon-social' src={insta} alt="*" />
          <a
            href="https://www.instagram.com/upo_bastidores/"
            target="_Blank"
            rel="noopener noreferrer"
          >
            Upo Bastidores
          </a>
        </div>
        <div className="item">
          <img className='icon-social' src={fb} alt="*" />
          <a
            href="https://www.facebook.com/upo_bastidores-101914031541600"
            target="_Blank"
            rel="noopener noreferrer"
          >
            Upo Bastidores
          </a>
        </div>
        <div className="item">
          <img className='icon-social' src={wsp} alt="*" />
          <a
            href="https://wa.div/x16smx"
            target="_Blank"
            rel="noopener noreferrer"
          >
            3517174900
          </a>
        </div>
        <div className="item">
          <img className='icon-social' src={location} alt="*" />
          <a
            href="https://www.google.com/maps/place/C%C3%B3rdoba/data=!4m2!3m1!1s0x9432985f478f5b69:0xb0a24f9a5366b092?sa=X&ved=2ahUKEwic7M-6jKvrAhWkHLkGHQYqBgYQ8gEwAHoECAsQAQ"
            target="_Blank"
            rel="noopener noreferrer"
          >
            Cordoba, Argentina
          </a>
        </div>
      </div>
  );
}

export default Footer;
