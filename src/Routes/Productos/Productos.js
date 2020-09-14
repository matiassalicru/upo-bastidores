import React from "react";
import "./Productos.css";
import video from "../../Assets/videos/BAST.mp4";

//imports components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import Footer from "../Componentes/Footer/Footer";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Producto from "./Producto/Producto";

//import assets
import Images from "../../Data/productos";
import cuadro1 from "../../Assets/images/producto1.jpeg";
import wide3 from "../../Assets/images/wide3.jpeg";
import Gallery from "../Componentes/Gallery/Gallery";

const Productos = () => {
  const descriptions = [
    [
      "Bastidores entelados: productos elaborados con maderas de excelente calidad, seleccionadas para que las obras puedan perdurar en el tiempo de una forma intacta. Las estructuras internas del bastidor son reforzadas, permitiendo realizar una excelente tensión del textil implementado para luego poder ser imprimado y poder asi finalizar un producto listo para pintar...",
      "Descripción del producto:",
      "-Perfil alto 5cm /perfil bajo 2.5 cm",
      "-lienzo puro algodon-imprimacion en latex",
      "-grano medio",
    ],
    [
      "Bastidores de Madera: Bastidores con estructuras reforzadas de madera de excelente calidad y base de trabajo en mdf  de 3mm. Segun la medida se toma los recaudos necesarios por medio de refuerzo para evitar que la obra se deforme o pansee",
      "Descripción del producto",
      "-Estructura de madera",
      "-Base de trabajo en MDF 3mm",
    ],
  ];

  return (
    <div className="productos-container">
      <TitleHeader title="Nuestros Productos" color="red" />
      <InfoCard />
      <div className="video">
        <video src={video} autoPlay={true} loop={true} />
      </div>

      <div className="productos-producto-container">
        <Producto
          title="Bastidor de Lienzo"
          image={cuadro1}
          description={descriptions[0][0]}
          detail1={descriptions[0][1]}
          detail2={descriptions[0][2]}
          detail3={descriptions[0][3]}
          detail4={descriptions[0][4]}
          color="salmon"
        />
        <Producto
          title="Bastidor de Madera"
          image={wide3}
          description={descriptions[1][0]}
          detail1={descriptions[1][1]}
          detail2={descriptions[1][2]}
          detail3={descriptions[1][3]}
          color="green"
        />
      </div>
      <Gallery images={Images} title='Mas fotos de nuestros productos'/>
      <HomeBtn color="red" />
      <Footer />
    </div>
  );
};

export default Productos;
