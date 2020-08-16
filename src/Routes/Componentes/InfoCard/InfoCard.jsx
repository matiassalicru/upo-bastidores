import React from 'react';
import './InfoCard.css';

//importing images
import factory from "../../../Assets/images/factory.png";
import onlinePayment from "../../../Assets/images/online-payment.png";
import wallet from "../../../Assets/images/046-wallet1.png";
import truck from "../../../Assets/images/003-delivery1.png";

export default function InfoCard() {
    return (
      <div className="info-card-container">
        <div className={`box orange`}>
          <img className="box-icon" src={truck} alt="icon" />
          <p className="box-description">Envios a domicilio</p>
        </div>
        <div className={`box red`}>
          <img className="box-icon" src={onlinePayment} alt="icon" />
          <p className="box-description">Todos los medios de pago</p>
        </div>
        <div className={`box salmon`}>
          <img className="box-icon" src={factory} alt="icon" />
          <p className="box-description">Fabricamos a medida</p>
        </div>
        <div className={`box green`}>
          <img className="box-icon" src={wallet} alt="icon" />
          <p className="box-description">Precios por mayor y menor</p>
        </div>
      </div>
    );
}