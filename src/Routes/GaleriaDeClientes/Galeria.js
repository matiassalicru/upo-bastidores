import React from "react";
import "./Galeria.css";
import { useHistory } from "react-router-dom";


//import Components.
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";
import { ChatBubble } from "../Componentes/Chat/ChatBubble";

//Import images
import Images from "../../Data/galeria";
import Gallery from "../Componentes/Gallery/Gallery";

const Galeria = () => {

    let history = useHistory();
    const goToContact = () => history.push("/contacto");
    const goToCompras = () => history.push("/compras");

  return (
    <>
      <div className="galeria-container">
        <ChatBubble />
        <TitleHeader color="red" title="Galería de clientes" />
        <InfoCard />

        <div className="galeria-description">
          <p>
            Acá te mostramos algunas de las obras de los artistas que deciden
            elegirnos para sus pinturas
            <br /> Si las obras de nuestros clientes te inspiran no dudes en
            contactarnos y adquirir tu propio bastidor al mejor precio
          </p>
          <div className="galeria-buttons">
            <button onClick={goToContact}>Contactanos</button>
            <button onClick={goToCompras}>Comprar</button>
          </div>
        </div>

        <Gallery
          images={Images}
          title="Obras de nuestros clientes"
          footer="algo"
        />

        <HomeBtn color="red" />
        <Footer />
      </div>
    </>
  );
};
export default Galeria;
