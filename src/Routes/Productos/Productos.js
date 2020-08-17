import React from 'react';
import './Productos.css';
import video from '../../Assets/videos/BAST.mp4';

//imports components
import TitleHeader from '../Componentes/TitleHeader/TitleHeader' ;
import InfoCard from '../Componentes/InfoCard/InfoCard';
import Footer from '../Componentes/Footer/Footer';
import HomeBtn from '../Componentes/HomeBtn/HomeBtn';
import Producto from './Producto/Producto';

//import assets
import Cuadro from '../../Assets/images/cuadro.jpg';

const Productos = () => {

    return (
      <div className="productos-container">
        <TitleHeader title="Nuestros Productos" color="red" />
        <InfoCard />
        <div className="video">
          <video src={video} autoPlay={true} loop={true} />
        </div>
        <div className="productos-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quo
          dolor dolorem repellat reiciendis deleniti nemo beatae sapiente ipsum
          modi nihil voluptas asperiores doloribus, iste inventore
          necessitatibus expedita temporibus soluta? Aspernatur hic eius impedit
          numquam voluptate est, neque cupiditate cumque porro deleniti, placeat
          repellendus esse consequuntur iste ad amet assumenda velit quaerat!
          Veniam fuga repudiandae molestiae natus voluptas nobis voluptate!
        </div>

        <div className='productos-producto-container'>
          <Producto
            title="Bastidor de Lienzo"
            image={Cuadro}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            color="salmon"
          />
          <Producto
            title="Bastidor de Madera"
            image={Cuadro}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            color="green"
          />
          <Producto
            title="Marcos"
            image={Cuadro}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            color="orange"
          />
          <Producto
            title="Estructuras"
            image={Cuadro}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            color="red"
          />
          <Producto
            title="MDF Entelados"
            image={Cuadro}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            color="green"
          />
        </div>
        <HomeBtn color="red" />
        <Footer />
      </div>
    );
}

export default Productos;