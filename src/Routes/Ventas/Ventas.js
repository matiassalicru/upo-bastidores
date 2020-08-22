import React, { useState, useEffect } from "react";
import "./Ventas.css";

//import Components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";

//Import Axios
import axios from "axios";

const Ventas = () => {
  const [productos, setProductos] = useState({});
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    axios
      .get("https://database-upo-bastidores.herokuapp.com/lienzo")
      .then((res) => setProductos(res.data));
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
      return console.log("Por favor seleccionar una cantidad");
    } else {

      const nombre = `${selectedProducto} ${medida}`;
      const cantidades = `${cantidad}`;
      const precios = `${precio}`;

      const item = [`${nombre}CM`, `Cantidad: ${cantidades}`, `$${precios}`];
      defaultValues();

      return setCarrito([...carrito, item]);
    }

  }

  return (
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
          <select
            id="select-medida"
            className="select-med"
            onChange={handleMedida}
          >
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
        <label className='ventas-subtitle'>Tus productos</label>
        <ul className="carrito">
          {carrito.length > 0 &&
            carrito.map((item, index) => (
              <li className="carrito-item" key={index}>
                {item.join(" - ")}
              </li>
            ))}
        </ul>
      </div>

      <div>
        {carrito.length > 0 && (
          <button className='ventas-enviar' type="submit" onClick={() => console.log(`Tus productos: \n ${carrito.join('\n')}`)} >Enviar pedido</button>
        )}
      </div>

      <HomeBtn color="salmon" />
      <Footer />
    </div>
  );
};

export default Ventas;
