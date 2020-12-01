import React, { useContext } from "react";
import "./Promocion.css";

import cart from "../../Assets/images/cart.svg";
import Context from "../../store/context";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

const PromocionL = ({
  id,
  title,
  description1,
  description2,
  description3,
  description4,
  precio,
  color,
  direction,
  image,
}) => {
  const { state, actions } = useContext(Context);
  let history = useHistory();

  const addToCart = () => {
    let promo;
    switch (id) {
      case "1":
        promo = [
          "Promo 1",
          "3 50X70",
          "2 50x100",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          3300,
        ];
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "2":
        promo = [
          "Promo 2",
          "3 100x90 CM",
          "3 70x30 CM",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          3600,
        ];
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "3":
        promo = [
          "Promo 3",
          "3 20x30 CM",
          "3 30x40 CM",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          2800,
        ]; //Cambiar a modo template de producto/
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "4":
        promo = [
          "Promo 4",
          "3 40x40 CM",
          "3 30x30 CM",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          2800,
        ]; //Cambiar a modo template de producto/
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "5":
        promo = [
          "Promo 5",
          "3 40x60 CM",
          "3 80x60 CM",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          3700,
        ]; //Cambiar a modo template de producto/
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;

      default:
        break;
    }
    swal({
      title: "Promo Añadida al carrito",
      icon: "success",
      closeOnClickOutside: true,
      buttons: ["cerrar esta ventana", "ir al carrito"],
    }).then((value) => {
      if (value) {
        history.push("/compras");
      }
    });
  };

  return (
    <div className={`promocion ${color} ${direction}`}>
      <img src={image} alt="Promo" className="promo-img" />
      <div className="promo-description">
        <h1 className="promo-title">{title}</h1>
        <div className="promo-description-in">
          <p>{description1}</p>
          <p id="item1">{description2}</p>
          <p id="item2">{description3}</p>
          <p id="item3">{description4}</p>
        </div>
        <p className="promo-precio">{precio}</p>
        <button className="promo-button" type="submit" onClick={addToCart}>
          <img srcSet={cart} alt="" />
          <p>Comprar</p>
        </button>
      </div>
    </div>
  );
};

export default PromocionL;
