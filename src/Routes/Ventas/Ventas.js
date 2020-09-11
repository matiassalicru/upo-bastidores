import React, { useState, useEffect, useContext } from "react";
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

//Import store
import Context from "../../store/context";

const Ventas = () => {
  const [lienzo, setLienzo] = useState({});
  const [madera, setMadera] = useState({});
  const [loading, setLoading] = useState(true);
  const [mayorista, setMayorista] = useState(false);
  const [total, setTotal] = useState(0);

  const { state, actions } = useContext(Context);

  let cantidadFinal = 0;

  useEffect(() => {
    axios
      .get("https://database-upo-bastidores.herokuapp.com/lienzo")
      .then((res) => setLienzo(res.data))
      .then(() => setLoading(false));
  }, [setLienzo]);

  useEffect(() => {
    axios
      .get("https://database-upo-bastidores.herokuapp.com/madera")
      .then((res) => setMadera(res.data))
      .then(() => setLoading(false));
  }, [setLienzo]);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) handleMayorista();
    }, 1000);
    return () => {
      isMounted = false;
    };
  });

  useEffect(() => {
    handleTotal();
  });

  function countQuantity() {
    handleCantidadFinal();
    handleMayorista();
    const cantidad = document.getElementById("ventas-cantidad");
    const nombre = document.getElementById("select-producto").value;
    // console.log(cantidadFinal);
    // console.log(cantidad.value);
    // console.log((parseInt(cantidad.value) + parseInt(cantidadFinal)));

    if (
      cantidad.value > 7 ||
      cantidadFinal >= 7 ||
      parseInt(cantidad.value) + parseInt(cantidadFinal) > 8
    ) {
      const IdMedida = document.getElementById("select-medida").value;
      const precioMedida = document.getElementById("precio");
      let precioUnidad;

      if (nombre === "Bastidor de Madera") {
        precioUnidad = madera[IdMedida - 1].precioMayor;
      } else if (nombre === "Bastidor de Lienzo") {
        precioUnidad = lienzo[IdMedida - 1].precioMayor;
      }

      let result = cantidad.value * precioUnidad;
      precioMedida.value = result;
      result = precioUnidad;
    } else {
      const IdMedida = document.getElementById("select-medida").value;
      const precioMedida = document.getElementById("precio");
      let precioUnidad;

      if (nombre === "Bastidor de Madera") {
        precioUnidad = madera[IdMedida - 1].precioUnidad;
      } else if (nombre === "Bastidor de Lienzo") {
        precioUnidad = lienzo[IdMedida - 1].precioUnidad;
      }

      let result = cantidad.value * precioUnidad;
      precioMedida.value = result;
      result = precioUnidad;
    }
  }

  function handleProducto() {
    //utilizar para el handle mayorista.
    let selectedProducto = document.getElementById("select-producto").value;

    if (selectedProducto === "Bastidor de Madera") {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/madera")
        .then((res) => setMadera(res.data));

      defaultValues();
    } else if (selectedProducto === "Bastidor de Lienzo") {
      axios
        .get("https://database-upo-bastidores.herokuapp.com/lienzo")
        .then((res) => setLienzo(res.data));

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
    let precioMedida = document.getElementById("precio"); //agarra el div donde iría el precio
    let cantidad = document.getElementById("ventas-cantidad"); //Agarra la cantidad seleccionada

    precioMedida.value = 0;
    cantidad.value = 0;
  }

  function AddToCart() {
    const IdMedida = document.getElementById("select-medida").value;
    const selectedProducto = document.getElementById("select-producto").value;
    const cantidad = document.querySelector("#ventas-cantidad").value;
    const precio = document.getElementById("precio").value;
    let medida;
    if (selectedProducto === "Bastidor de Madera") {
      medida = madera[IdMedida - 1].Medidas;
    } else if (selectedProducto === "Bastidor de Lienzo") {
      medida = lienzo[IdMedida - 1].Medidas;
    }

    if (cantidad === "0" || precio === "0") {
      return swal({
        title: "Por favor seleccionar una cantidad primero",
        icon: "warning",
        className: "swal-alert",
      });
    } else {
      const id = IdMedida;
      const nombre = selectedProducto;
      const medidas = medida;
      const cantidades = cantidad;
      const precios = precio;

      if (state.length > 0) {
        state.forEach((item) => {
          if (item[1].includes(nombre) && item[3].includes(medidas)) {
            //Si el nombre que se encuentra en el elemento 1 del array ya existe en carrito simplemente suma la cantidad al elemento que ya existe
            const cantidadAnterior = parseInt(item[6]);
            const nuevaCantidad =
              parseInt(cantidadAnterior) + parseInt(cantidades);
            const precioAnterior = parseInt(item[8]);
            const nuevoPrecio = parseInt(precioAnterior) + parseInt(precios);

            const nuevoItem = [
              id,
              nombre,
              ` `,
              medidas,
              `CM `,
              `Cantidad: `,
              nuevaCantidad,
              ` $`,
              nuevoPrecio,
            ];

            state.splice(state.indexOf(item), 1); //Elimina el item anterior antes de agregar el nuevo con la nueva cantidad y el nuevo precio.
            defaultValues();

            actions({ type: "setState", payload: [...state, nuevoItem] });
            return handleMayorista();
          } else {
            const item2 = [
              id,
              nombre,
              ` `,
              medidas,
              `CM `,
              `Cantidad: `,
              cantidades,
              ` $`,
              precios,
            ];

            defaultValues();
            // setCarrito([...carrito, item2]);
            actions({ type: "setState", payload: [...state, item2] });
            return handleMayorista();
          }
        });
      } else {
        const item2 = [
          id,
          nombre,
          ` `,
          medidas,
          `CM `,
          `Cantidad: `,
          cantidades,
          ` $`,
          precios,
        ];

        defaultValues();

        actions({ type: "setState", payload: [...state, item2] });
        return handleMayorista();
      }
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
  
    document.querySelector(".ventas-enviar").setAttribute("disabled", true);

    const pedido = document.querySelector("#send-pedido");
    const newCarrito = state.map((item) => item.join(" - "));
    pedido.innerHTML = newCarrito.join(
      "---------------------------------------------------------"
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
            className: "swal-alert",
          });
          actions({ type: "setState", payload: [] });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const removeItem = (index) => {
    state.splice(index, 1);
    actions({ type: "setState", payload: [...state] });

    swal({
      title: "Producto Eliminado",
      icon: "error",
      className: "swal-alert",
    });

    if (state.length > 0) {
      cantidadFinal = 0;

      for (let i = 0; i < state.length; i++) {
        const cantidad = state[i][6];
        cantidadFinal += parseInt(cantidad);
      }

      if (cantidadFinal < 8) {
        let cantidad;
        let id;
        for (let i = 0; i < state.length; i++) {
          let nombre = state[i][1];
          id = state[i][0];
          cantidad = parseInt(state[i][6]);
          if (nombre === "Bastidor de Madera") {
            state[i][8] = madera[id - 1].precioUnidad * cantidad; //Precio que se está mostrando.
          } else if (nombre === "Bastidor de Lienzo") {
            state[i][8] = lienzo[id - 1].precioUnidad * cantidad; //Precio que se está mostrando.
          }
        }
        setMayorista(mayorista);
      } else {
        let cantidad;
        let id;
        for (let i = 0; i < state.length; i++) {
          let nombre = state[i][1];
          id = state[i][0];
          cantidad = parseInt(state[i][6]);
          if (nombre === "Bastidor de Madera") {
            state[i][8] = madera[id - 1].precioMayor * cantidad; //Precio que se está mostrando.
          } else if (nombre === "Bastidor de Lienzo") {
            state[i][8] = lienzo[id - 1].precioMayor * cantidad; //Precio que se está mostrando.
          }
        }

        setMayorista(true);
      }
    } else {
      swal({ title: "Tu carrito está vacio" });
    }
  };

  const handleMayorista = () => {
    if (state.length > 0) {
      cantidadFinal = 0;

      for (let i = 0; i < state.length; i++) {
        const cantidad = state[i][6];
        cantidadFinal += parseInt(cantidad);
      }

      if (cantidadFinal >= 7) {
        setMayorista(true);
        let cantidad;

        for (let i = 0; i < state.length; i++) {
          let nombre = state[i][1];
          let id = parseInt(state[i][0]);
          cantidad = parseInt(state[i][6]);
          if (nombre === "Bastidor de Madera") {
            state[i][8] = madera[id - 1].precioMayor * cantidad; //Precio que se está mostrando.
          } else if (nombre === "Bastidor de Lienzo") {
            state[i][8] = lienzo[id - 1].precioMayor * cantidad; //Precio que se está mostrando.
          }
        }
      } else {
        setMayorista(false);
      }
    } else {
      setMayorista(false);
    }
  };

  const handleCantidadFinal = () => {
    cantidadFinal = 0;

    for (let i = 0; i < state.length; i++) {
      const cantidad = state[i][6];
      cantidadFinal += parseInt(cantidad);
    }
  };

  const handleTotal = () => {
    setTotal(0);
    if (state.length > 0) {
      let valor = 0;
      for (let i = 0; i < state.length; i++) {
        valor += parseFloat(state[i][8]);
      }
      // console.log(valor);
      setTotal(valor);
    } else {
      setTotal(0);
    }
  };


  //Loading animation from Lottie
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
              </select>
            </div>
            <div className="ventas-select">
              <label htmlFor="medida">Seleccionar medidas</label>
              <div>
                <select
                  id="select-medida"
                  className="select-med"
                  onChange={handleMedida}
                >
                  {madera.length > 0 &&
                    madera.map((producto) => (
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
                className="select-med"
                id="ventas-cantidad"
                min="0"
                defaultValue="0"
                autoComplete="off"
                onChange={countQuantity}
                onFocus={(e) => (e.target.value = 0)}
              />
            </div>
            <div className="ventas-select">
              <label>Precio Total</label>
              <div className="insise-precio">
                <label>$</label>
                <input
                  type="number"
                  className="select-med"
                  value="0"
                  disabled={true}
                  id="precio"
                />
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
            {state.length > 0 ? (
              <label className="ventas-subtitle">Tus productos</label>
            ) : (
              <label className="ventas-subtitle">Tu carrito está vacío</label>
            )}
            <ul className="carrito">
              {state.length > 0 &&
                state.map((item, index) => (
                  <li className="carrito-item" key={index}>
                    {item.join(" ")}
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
            {state.length > 0 && (
              <>
                <div className="total">
                  {`Precio Final:
                  $${total}`}
                </div>
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
                    autoComplete="off"
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
