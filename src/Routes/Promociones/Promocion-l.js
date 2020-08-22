import React from "react";
import "./Promocion.css";
import gato from '../../Assets/images/gato2.jpg';
import cart from "../../Assets/images/cart.svg";


const PromocionL = ({ title, description, color }) => (
  <div className={`promocion ${color}`}>
    <div className="promo-description">
      <h1 className="promo-title">{title}</h1>
      <div className="promo-description-in">{description}</div>
      <button className="promo-button" type="submit">
        <img srcSet={cart} alt="" />
        <p>Comprar</p>
      </button>
    </div>
    <img src={gato} alt="Promo" className="promo-img" />
  </div>
);

export default PromocionL;
