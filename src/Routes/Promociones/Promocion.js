import React, {useContext} from "react";
import "./Promocion.css";
// import gato from '../../Assets/images/gato2.jpg';
import cart from "../../Assets/images/cart.svg";
import Context from '../../store/context';
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
          "2 20x20",
          "2 20x30",
          "2 20x40",
          " ",
          "Cantidad:",
          1,
          " $",
          2000,
        ]; 
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "2":
        promo = [
          "Promo 2",
          "3 60x40 CM",
          "2 60x80 CM",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          3000,
        ]; 
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "3":
        promo = [
          "Promo 3",
          "3 100x30 CM",
          "3 100x50 CM",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          2000,
        ]; //Cambiar a modo template de producto/
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "4":
        promo = [
          "Promo 4",
          "6 30x70 CM",
          " ",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          2700,
        ]; //Cambiar a modo template de producto/
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "5":
        promo = [
          "Promo 5",
          "6 40x40 CM",
          " ",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          2400,
        ]; //Cambiar a modo template de producto/
        actions({ type: "setState", payload: [...state, promo] });
        promo = "";
        break;
      case "6":
        promo = [
          "Promo 6",
          "10 40x40 CM",
          " ",
          " ",
          " ",
          "Cantidad:",
          1,
          " $",
          2000,
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
    })
    .then((value) => {
      if(value){
        history.push("/compras");
      }
    })
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
          <p className='promo-precio'>{precio}</p>
        <button className="promo-button" type="submit" onClick={addToCart}>
          <img srcSet={cart} alt="" />
          <p>Comprar</p>
        </button>
      </div>
    </div>
  );
};

export default PromocionL;
