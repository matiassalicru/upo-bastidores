import React from "react";
import "./Productos.css";
import video from "../../Assets/videos/BAST.mp4";

//imports components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import Footer from "../Componentes/Footer/Footer";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Producto from "./Producto/Producto";
import Slider from '../Componentes/Slider/Slider';

//import assets
import Images from '../../Data/productos';
import cuadro1 from '../../Assets/images/producto1.jpeg';
import wide3 from "../../Assets/images/wide3.jpeg";



const Productos = () => {

  return (
    <div className="productos-container">
      <TitleHeader title="Nuestros Productos" color="red" />
      <InfoCard />
      <div className="video">
        <video src={video} autoPlay={true} loop={true} />
      </div>
      <div className="productos-description">
        Nuestros productos están creados con la mayor delicadeza llevando el
        diseño y la perfección hasta su punto más alto, utlizamos como
        materiales las maderas y los lienzos para ayudarte a inspirarte a la
        hora de crear tu arte, dejanos formar parte de tu proceso creativo con
        nuestros productos elaborados con amor y pasión!
      </div>

      <div className="productos-producto-container">
        <Producto
          title="Bastidor de Lienzo"
          image={cuadro1}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          color="salmon"
        />
        <Producto
          title="Bastidor de Madera"
          image={wide3}
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          color="green"
        />

      </div>
      <Slider images={Images} title='Más fotos de nuestros productos'/>
      <HomeBtn color="red" />
      <Footer />
      
    </div>
  );
};

export default Productos;
