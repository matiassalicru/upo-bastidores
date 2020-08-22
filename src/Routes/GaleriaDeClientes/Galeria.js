import React from "react";
import "./Galeria.css";

//import Components.
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";

const Galeria = () => (
  <div className='galeria-container'>
    <TitleHeader color="red" title="Galería de clientes" />
    <InfoCard />
    <div className="galeria-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, fuga
      earum nesciunt qui, recusandae, deleniti ratione aliquam repellat est
      labore dicta eligendi omnis inventore minima iusto harum magnam ad!
      Suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
      eum nostrum assumenda vitae quae dignissimos, consequuntur eaque nobis
      porro quasi repellat numquam unde necessitatibus reprehenderit enim
      aliquam dolor qui aspernatur.
    </div>

    <HomeBtn color='red' />
    <Footer />
  </div>
);

export default Galeria;
