import React from "react";
import "./Galeria.css";

//import Components.
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";

//Import images
import Images from "../../Data/galeria";
import Gallery from "../Componentes/Slider/Gallery";


const Galeria = () => {

  return (
    <>
      <div className="galeria-container">
        <TitleHeader color="red" title="Galería de clientes" />
        <InfoCard />
        <div className="galeria-description">
          Acá te mostramos algunas de las obras de los artistas que deciden elegirnos para formar parte de su arte.
        </div>

      <Gallery images={Images} title='Obras de nuestros clientes' footer='algo'/>

      <HomeBtn color="red" />
      <Footer />
      </div>
    </>
  );
};
export default Galeria;
