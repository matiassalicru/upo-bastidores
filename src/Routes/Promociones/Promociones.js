import React from "react";
import "./Promociones.css";

//Components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import Footer from "../Componentes/Footer/Footer";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import PromocionR from "./Promocion-r";
import PromocionL from "./Promocion-l";

function Promociones() {
  const promocion1 = [
    "7 BASTIDORES PEQUEÑOS EN LIENZO",
    "4 12X12 CM",
    "3 15X15 CM",
  ];
  const promocion2 = ["5 BASTIDORES EN LIENZO TAMAÑO A4", "20x30 CM"];
  const promocion3 = ["4 BASTIDORES EN LIENZO", "60x80 cm"];
  const promocion4 = [
    "6 bastidores cuadrados en lienzo",
    "2 30X30 CM2",
    "2 40x40 cm2",
    "2 50x50 cm ",
  ];

  return (
    <div className='promociones-container'>
      <TitleHeader color="green" title="Ofertas y Promociones" />
      <InfoCard />
      <div className="promociones-cards">
        <PromocionR
          title="PROMO x4"
          description={promocion1.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          color="orange"
        />
        <PromocionL
          title="PROMO x6"
          description={promocion2.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          color="red"
        />
        <PromocionR
          title="PROMO x4"
          description={promocion3.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          color="salmon"
        />
        <PromocionL
          title="PROMO x6"
          description={promocion4.map((e, i) => (
            <p key={i}>{e}</p>
          ))}
          color="green"
        />
      </div>
      <HomeBtn color="green" />
      <Footer />
    </div>
  );
}

export default Promociones;
