import React, { useState, useEffect } from "react";
import "./Ventas.css";

//import Components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";

//Import libraries
import axios from "axios";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import Lottie from "react-lottie";

//Extra imports
import trash from "../../Assets/images/trash.svg";
import animationData from "../../Data/loading5.json";

const Ventas = () => {
  const [productos, setProductos] = useState({});
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/lienzo")
        .then((res) => setProductos(res.data))
        .then(() => setLoading(false));
    }, 500);
  }, [setProductos]);

  function countQuantity() {
    const cantidad = document.getElementById("ventas-cantidad");

    if (cantidad.value >= 8) {
      console.log(
        "Llevando 8 productos o más estás accediendo a precios por mayor!"
      );
      const IdMedida = document.getElementById("select-medida").value;
      const precioMedida = document.getElementById("precio");
      const precioUnidad = productos[IdMedida - 1].precioMayor;
      let result = cantidad.value * precioUnidad;
      precioMedida.value = result;
      result = precioUnidad;
    } else {
      const IdMedida = document.getElementById("select-medida").value;
      const precioMedida = document.getElementById("precio");
      const precioUnidad = productos[IdMedida - 1].precioUnidad;
      let result = cantidad.value * precioUnidad;
      precioMedida.value = result;
      result = precioUnidad;
    }
  }

  function handleProducto() {
    let selectedProducto = document.getElementById("select-producto").value;

    if (selectedProducto === "Bastidor de Madera") {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/madera")
        .then((res) => setProductos(res.data));

      defaultValues();
    } else if (selectedProducto === "Bastidor de Lienzo") {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/lienzo")
        .then((res) => setProductos(res.data));

      defaultValues();
    } else if (selectedProducto !== "lienzo" || selectedProducto !== "madera") {
      alert("No tenemos stock de estos productos :(");
      defaultValues();
    }
  }

  function defaultValues() {
    let IdMedida = document.getElementById("select-medida");
    IdMedida.value = 1;

    let cantidad = document.querySelector("#ventas-cantidad");
    cantidad.value = 0;

    let precioMedida = document.getElementById("precio");
    precioMedida.value = 0;
  }

  function handleMedida() {
    let IdMedida = document.getElementById("select-medida").value;
    let precioMedida = document.getElementById("precio");
    let cantidad = document.getElementById("ventas-cantidad");

    let precio = productos[IdMedida - 1].precioUnidad;

    precioMedida.value = precio;
    cantidad.value = 1;
    cantidad.innerHTML = 1;
  }

  function AddToCart() {
    const IdMedida = document.getElementById("select-medida").value;
    let medida = productos[IdMedida - 1].Medidas;
    let cantidad = document.querySelector("#ventas-cantidad").value;
    const precio = document.getElementById("precio").value;
    const selectedProducto = document.getElementById("select-producto").value;

    if (cantidad === "0" || precio === "0") {
      return swal({
        title: "Por favor seleccionar una cantidad primero",
        icon: "warning",
      });
    } else {
      const nombre = `${selectedProducto} ${medida}`;
      const cantidades = `${cantidad}`;
      const precios = `${precio}`;
      const item = [`${nombre}CM`, `Cantidad: ${cantidades}`, `$${precios}`];
      defaultValues();

      return setCarrito([...carrito, item]);
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    const pedido = document.querySelector("#send-pedido");
    const newCarrito = carrito.map((item) => item.join(" - "));
    pedido.innerHTML = newCarrito.join(
      "---------------------------------------------------------------------"
    );

    emailjs
      .sendForm(
        "gmail",
        "Enviar_pedido",
        e.target,
        "user_PAkxwlUKIEI1sNLQ3RoEx"
      )
      .then(
        () => {
          swal({
            title:
              "Tu pedido ha sido enviado, pronto nos estaremos comunicando con vos!",
            icon: "success",
          });
          setCarrito([]);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const removeItem = (index) => {
    carrito.splice(index, 1);
    setCarrito([...carrito]);

    swal({
      title: "Producto eliminado",
      icon: "error",
    });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <div className="ventas-container">
          <TitleHeader title="Compras por mayor y menor" color="salmon" />
          <InfoCard />

          <p className="ventas-subtitle">
            Si seleccionas mas de 7 unidades accedes a la compra por mayor!
          </p>

          <div className="ventas-select-producto">
            <div className="ventas-select">
              <label htmlFor="product">Seleccionar producto</label>
              <select
                id="select-producto"
                className="select-med"
                onChange={handleProducto}
              >
                <option value="Bastidor de Lienzo">Bastidores de lienzo</option>
                <option value="Bastidor de Madera">Bastidores de madera</option>
                <option value="Marcos">Marcos</option>
                <option value="Estructuras">Estructuras</option>
                <option value="MDF entelados">MDF Entelados</option>
              </select>
            </div>
            <div className="ventas-select">
              <label htmlFor="medida">Seleccionar medidas</label>
              <div className="select-med">
                <select id="select-medida" onChange={handleMedida}>
                  {productos.length > 0 &&
                    productos.map((producto) => (
                      <option
                        key={producto.ID}
                        value={producto.ID}
                        id="option-medida"
                      >
                        {producto.Medidas}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="ventas-select">
              <label>Cantidad</label>
              <input
                type="number"
                name="quantity"
                id="ventas-cantidad"
                min="0"
                defaultValue="0"
                autoComplete="off"
                onChange={countQuantity}
              />
            </div>
            <div className="ventas-select">
              <label>Precio Total</label>
              <div className="insise-precio">
                <label>$</label>
                <input type="number" value="0" disabled={true} id="precio" />
              </div>
            </div>
            <div className="ventas-select">
              <input
                type="submit"
                onClick={AddToCart}
                id="add-btn"
                className="ventas-agregar"
                value="Agregar"
              />
            </div>
          </div>

          <div className="carrito-array" id="carrito-array">
            {carrito.length > 0 ? (
              <label className="ventas-subtitle">Tus productos</label>
            ) : (
              <label className="ventas-subtitle">Tu carrito está vacío</label>
            )}
            <ul className="carrito">
              {carrito.length > 0 &&
                carrito.map((item, index) => (
                  <li className="carrito-item" key={index}>
                    {item.join(" - ")}
                    <button
                      onClick={() => removeItem(index)}
                      className="trash-can"
                    >
                      <img srcSet={trash} alt="trashCan"></img>
                    </button>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            {carrito.length > 0 && (
              <>
                <form className="request-container" onSubmit={sendEmail}>
                  <p className="request-title">
                    Por favor completá los siguientes datos para realizar el
                    pedido.
                  </p>
                  <label htmlFor="input">Nombre*</label>
                  <input
                    className="request-input"
                    type="text"
                    placeholder="Nombre*"
                    name="from_name"
                    required={true}
                  />
                  <label htmlFor="input">Email*</label>
                  <input
                    className="request-input"
                    type="text"
                    placeholder="Email*"
                    name="from_email"
                    required={true}
                  />
                  <label htmlFor="input">Provincia*</label>
                  <input
                    className="request-input"
                    type="text"
                    placeholder="Provincia y localidad*"
                    name="from_state"
                    required={true}
                  />
                  <label htmlFor="input">Teléfono*</label>
                  <input
                    className="request-input"
                    type="number"
                    placeholder="Número de teléfono*"
                    name="from_num"
                    required={true}
                    autoComplete={false}
                  />
                  <textarea
                    name="message"
                    id="send-pedido"
                    style={{ display: "none" }}
                  />
                  <input
                    className="ventas-enviar"
                    type="submit"
                    value="Enviar pedido"
                  />
                </form>
              </>
            )}
          </div>

          <HomeBtn color="salmon" />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Ventas;
