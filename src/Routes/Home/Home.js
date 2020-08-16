import React from 'react';
import Header from '../Home/Header/Header';
import InfoCard from '../Componentes/InfoCard/InfoCard';
import BoxButton from './BoxButton/BoxButton';
import Footer from '../Componentes/Footer/Footer';
import Subheader from './Subheader/Subheader'
import {Link} from 'react-router-dom';

export default function Home () {

    const linkStyle = {
      textDecoration: 'none'
    };

    return (
      <>
        <Header />
        <InfoCard />
        <Subheader title="Trabajamos con Pasión! 💪🏼🤍" />
        <div className="box-btn-container">
          <Link style={linkStyle} to="/nosotros">
            <BoxButton color="orange" description="¿Quienes Somos?" />
          </Link>
          <Link to="/productos" style={linkStyle}>
            <BoxButton color="red" description="Nuestros Productos" />
          </Link>
          <Link to="/compras" style={linkStyle}>
            <BoxButton color="salmon" description="Compras por Mayor y Menor" />
          </Link>
          <Link to='/promociones' style={linkStyle}>
            <BoxButton color="green" description="Ofertas y promociones" />
          </Link>
          <Link to='/contacto' style={linkStyle}>
            <BoxButton color="orange" description="Contáctanos" />
          </Link>
          <Link to='/clientes' style={linkStyle}>
            <BoxButton color="red" description="Galeria de clientes" />
          </Link>
        </div>
        <Footer />
      </>
    );
}