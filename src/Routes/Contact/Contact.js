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
import swal from "sweetalert";
import {ChatBubble} from '../Componentes/Chat/ChatBubble';

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    document.querySelector(".ventas-enviar").setAttribute("disabled", true);


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
      )
      .then(() => {
        swal({
          title: "Su mensaje ha sido enviado!",
          className: "swal-alert",
        });
        const inputs = document.querySelectorAll(".input-user");
        inputs.forEach((input) => (input.value = ""));
      });
  };

  return (
    <div className="contact-container">
      <ChatBubble />
      <TitleHeader title="Contacto" color="orange" />
      <InfoCard />
      <h1 className="ventas-subtitle">
        Seguinos en nuestras redes y envianos un mensajito!
      </h1>
      <div className="social-icons-container">
        <a
          href="https://www.facebook.com/upo_bastidores-101914031541600"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact-social-image" src={fb} alt="" />
        </a>
        <a
          href="https://www.instagram.com/upo_bastidores/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact-social-image" src={insta} alt="" />
        </a>
        <a
          href="https://wa.link/x16smx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contact-social-image" src={wsp} alt="" />
        </a>
      </div>
      <h2 className="ventas-subtitle">También puedes enviarnos un mail</h2>
      <form className="form-container" onSubmit={sendEmail}>
        <p className="form-title">Contáctanos!</p>
        <div className="form-inputs-container">
          <div className="form-inputs">
            <label>Nombre Completo</label>
            <input
              className="input-user"
              type="text"
              placeholder="Nombre*"
              name="from_name"
              required={true}
            />
            <label>Email</label>
            <input
              className="input-user"
              type="text"
              placeholder="Email*"
              name="from_email"
              required={true}
            />
            <label>Número de teléfono</label>
            <input
              className="input-user"
              type="number"
              placeholder="Número de teléfono"
              name="from_phone"
              required={true}
            />
            <label>Mensaje</label>
            <textarea
              required={true}
              className="input-user"
              placeholder="Mensaje*"
              name="message"
              id="send-pedido"
              rows="3"
              cols="3"
            />
          </div>
          <input className="ventas-enviar " type="submit" value="ENVIAR" />
        </div>
      </form>
      <HomeBtn color="orange" />
      <Footer />
    </div>
  );
}

export default Contact;
