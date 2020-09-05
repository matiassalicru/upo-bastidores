import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";
import fb from "../../Assets/images/fb.svg";
import wsp from "../../Assets/images/wsp.svg";
import insta from "../../Assets/images/insta.svg";
import location from "../../Assets/images/location.svg";

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "Enviar_Mensaje_Contacto",
        e.target,
        "user_PAkxwlUKIEI1sNLQ3RoEx"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <TitleHeader title="Contacto" color="orange" />
      <InfoCard />
      <h1 className="ventas-subtitle">
        Podés enviarnos un mensaje a través de nuestras redes!
      </h1>
      <ul className="contact-list">
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
      <form className="form-container" onSubmit={sendEmail}>
        <p className="form-title">Contactanos!</p>
        <div className="form-inputs-container">
          <div className="form-inputs">
            <input
              className="input-user"
              type="text"
              placeholder="Nombre*"
              name="from_name"
            />
            <input
              className="input-user"
              type="text"
              placeholder="Email*"
              name="from_email"
            />
          </div>
          <textarea
            className="input-user"
             placeholder="Mensaje*"
            name="message"
            id="send-pedido"
          />
        </div>
        <input className="submit-btn" type="submit" value="ENVIAR" />
      </form>
      <HomeBtn color="orange" />
      <Footer />
    </div>
  );
}

export default Contact;
