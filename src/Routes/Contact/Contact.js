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
        Podés enviarnos un mensaje a través de nuestras redes sociales!
      </h1>
      <div className="social-icons-container">
        <a href="https://www.facebook.com/upo_bastidores-101914031541600" target='_blank' rel='noopener noreferrer'>
          <img className="contact-social-image" src={fb} alt="" />
        </a>
        <a href="https://www.instagram.com/upo_bastidores/" target='_blank' rel='noopener noreferrer'>
          <img className="contact-social-image" src={insta} alt="" />
        </a>
        <a href="https://wa.link/x16smx" target='_blank' rel='noopener noreferrer'>
          <img className="contact-social-image" src={wsp} alt="" />
        </a>
      </div>
      <h2 className="ventas-subtitle">O podés enviarnos un mail</h2>
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
