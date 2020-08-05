import React from 'react';
import Header from '../Home/Header/Header';
import FakeButton from '../Home/FakeButton/FakeButton';
import search from '../../Assets/images/013-search1.png';
import onlinePayment from '../../Assets/images/online-payment.png';
import wallet from '../../Assets/images/046-wallet1.png';
import truck from '../../Assets/images/003-delivery1.png';
import BoxButton from './BoxButton/BoxButton';
import Footer from './Footer/Footer';

export default function Home () {
    return (
      <>
        <Header />
        <div className="fake-btn-container">
          <FakeButton
            color="color1"
            icon={truck}
            description="Envios a domicilio"
          />
          <FakeButton
            color="color2"
            icon={onlinePayment}
            description="Todos los medios de pago"
          />
          <FakeButton
            color="color3"
            icon={search}
            description="Fabricamos a medida"
          />
          <FakeButton
            color="color4"
            icon={wallet}
            description="Precios por mayor y menor"
          />
        </div>
        <div className="box-btn-container">
          <BoxButton background="box1" description="¿Quienes Somos?" />
          <BoxButton background="box2" description="Nuestros Productos" />
          <BoxButton background="box3" description="Reventa" />
          <BoxButton background="box4" description="Promociones" />
          <BoxButton background="box5" description="Compras por Mayor" />
          <BoxButton background="box6" description="Compras por menor" />
          <BoxButton background="box6" description="Galeria de clientes" />
        </div>
        <Footer/>
      </>
    );
}