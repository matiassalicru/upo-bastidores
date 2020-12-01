import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Promociones.css";

//Components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import Footer from "../Componentes/Footer/Footer";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Promocion from "./Promocion";
import Context from "../../store/context";
import { ChatBubble } from "../Componentes/Chat/ChatBubble";

//Photos
import cuadro2 from "../../Assets/images/producto1.png";
import cuadro3 from "../../Assets/images/producto2.png";
import cuadro4 from "../../Assets/images/producto3.png";
import cuadro5 from "../../Assets/images/wide3.png";



function Promociones() {
  const promociones = [
    ["5 BASTIDORES EN LIENZO", "3 50X70 CM", "2 50X100 CM"],
    ["6 BASTIDORES EN LIENZO", "3 100x90 CM", "3 70x30 CM"],
    ["6 BASTIDORES EN LIENZO", "3 20x30 CM", "3 30x40 CM"],
    ["6 BASTIDORES EN LIENZO", "3 40X40 CM", "3 30x30 CM"],
    ["6 BASTIDORES EN LIENZO", "3 40x60 CM", "3 80x60 CM"],
  ];

  const precios = ["$3300", "$3600", "$2800",'$2800','$3700'];

  const { state } = useContext(Context);

  let history = useHistory();
  const goToCart = () => history.push("/compras");

  return (
    <div className="promociones-container">
      <ChatBubble/>
      <TitleHeader color="green" title="Ofertas y Promociones" />
      <InfoCard />
      {state.length >= 0 && (
        <p onClick={goToCart} className="galeria-buttons">
          <button>Ir al carrito</button>
        </p>
      )}
      <div className="promociones-cards">
        <Promocion
          id="1"
          title="PROMO 1"
          description1={promociones[0][0]}
          description2={promociones[0][1]}
          description3={promociones[0][2]}
          description4={promociones[0][3]}
          precio={precios[0]}
          color="orange"
          direction="forward"
          image={cuadro2}
        />
        <Promocion
          id="2"
          title="PROMO 2"
          description1={promociones[1][0]}
          description2={promociones[1][1]}
          description3={promociones[1][2]}
          precio={precios[1]}
          color="salmon"
          direction="reverse"
          image={cuadro5}
        />
        <Promocion
          id="3"
          title="PROMO 3"
          description1={promociones[2][0]}
          description2={promociones[2][1]}
          description3={promociones[2][2]}
          precio={precios[2]}
          color="green"
          direction="forward"
          image={cuadro3}
        />
        <Promocion
          id="4"
          title="PROMO 4"
          description1={promociones[3][0]}
          description2={promociones[3][1]}
          description3={promociones[3][2]}
          precio={precios[3]}
          color="red"
          direction="reverse"
          image={cuadro2}
        />
        <Promocion
          id="5"
          title="PROMO 5"
          description1={promociones[4][0]}
          description2={promociones[4][1]}
          precio={precios[4]}
          color="orange"
          direction="forward"
          image={cuadro4}
        />
        
      </div>
      <HomeBtn color="green" />
      <Footer />
    </div>
  );
}

export default Promociones;
