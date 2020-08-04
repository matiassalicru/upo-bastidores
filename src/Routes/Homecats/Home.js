import React from 'react';
import Header from '../Homecats/Header/Header';
import FakeButton from '../Homecats/FakeButton/FakeButton';
import search from '../../Assets/Mwomages/013-search1.png';
import box from '../../Assets/Mwomages/005-fastdelivery1.png';
import wallet from '../../Assets/Mwomages/046-wallet1.png';
import truck from '../../Assets/Mwomages/003-delivery1.png';
import BoxButton from './BoxButton/BoxButton';
import Contact from './ContactForm/Contact';

export default function Home () {
    return (
      <>
        <Header />
        <div className="fake-btn-container">
          <FakeButton
            color="color1"
            icon={search}
            description="Medidas específicas"
          />
          <FakeButton
            color="color2"
            icon={box}
            description="Pedidos por mayor"
          />
          <FakeButton
            color="color3"
            icon={wallet}
            description="Todos los medios de pago"
          />
          <FakeButton
            color="color4"
            icon={truck}
            description="Envios a todo el país"
          />
        </div>
        <div className='box-btn-container'>
          <BoxButton 
            background='gato1' 
            description="¿Quienes Somos?" 
          />
          <BoxButton
            background='gato2' 
            description="Nuestros Productos" 
          />
          <BoxButton 
            background='gato3' 
            description="Reventa" 
          />
          <BoxButton 
            background='gato4' 
            description="Promociones" 
          />
          <BoxButton 
            background='gato5' 
            description="Compras por Mayor" 
          />
          <BoxButton 
            background='gato6' 
            description="Compras por menor" 
          />
        </div>
        <Contact/>
      </>
    );
}