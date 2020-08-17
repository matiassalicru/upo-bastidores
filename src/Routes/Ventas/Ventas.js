import React, { useState, useEffect } from "react";
import "./Ventas.css";

//import Components
import TitleHeader from "../Componentes/TitleHeader/TitleHeader";
import InfoCard from "../Componentes/InfoCard/InfoCard";
import HomeBtn from "../Componentes/HomeBtn/HomeBtn";
import Footer from "../Componentes/Footer/Footer";
import axios from "axios";

const Ventas = () => {
  const [productos, setProductos] = useState({});

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
      precioMedida.innerHTML = `$ ${result}`;
      result = precioUnidad;
    } else {
      const IdMedida = document.getElementById("select-medida").value;
      const precioMedida = document.getElementById("precio");
      const precioUnidad = productos[IdMedida - 1].precioUnidad;
      let result = cantidad.value * precioUnidad;
      precioMedida.innerHTML = `$ ${result}`;
      result = precioUnidad;
    }
  }


  function handleProducto() {
    let selectedProducto = document.getElementById("select-producto").value;

    if (selectedProducto === "madera") {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/madera")
        .then((res) => setProductos(res.data));

      defaultValues();
    } else if (selectedProducto === "lienzo") {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/lienzo")
        .then((res) => setProductos(res.data));

      defaultValues();
    } else if (selectedProducto !== "lienzo" || selectedProducto !== "madera") {
      alert("No tenemos stock de estos productos :(");
      defaultValues();

      let precioMedida = document.getElementById("precio");
      precioMedida.innerHTML = "No hay stock";
    }
  }

  function defaultValues() {
    let cantidad = document.querySelector("#ventas-cantidad");
    cantidad.value = 0;

    let IdMedida = document.getElementById("select-medida");
    IdMedida.value = 1;

    let precioMedida = document.getElementById("precio");
    precioMedida.innerHTML = "Selecciona una cantidad";
  }

  function handleMedida() {
    let IdMedida = document.getElementById("select-medida").value;
    let precioMedida = document.getElementById("precio");
    let cantidad = document.getElementById("ventas-cantidad");

    let precio = productos[IdMedida - 1].precioUnidad;

    precioMedida.innerHTML = `$ ${precio}`;
    cantidad.value = 1;
    cantidad.innerHTML = 1;
  }

  
  function AddToCart() {

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
            <option value="lienzo">Bastidores de lienzo</option>
            <option value="madera">Bastidores de madera</option>
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
          <div className="ventas-precio" id="precio"></div>
        </div>
        <div className="ventas-select">
          <input
            type="submit"
            onClick={AddToCart}
            id="add-btn"
            className="ventas-agregar"
            value='Agregar'
            />
        </div>
      </div>

      {/* <div id="carrito-array">
          <ul className="carrito"></ul>
        </div> */}

      <HomeBtn color="salmon" />
      <Footer />
    </div>
  );
};

export default Ventas;
