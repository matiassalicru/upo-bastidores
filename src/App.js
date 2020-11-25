import React from 'react';

//CSS
import './App.css';

//React Router 
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

//Pages
import Home from "./Routes/Home/Home";
import QuienesSomos from "./Routes/QuienesSomos/QuienesSomos";
import Productos from "./Routes/Productos/Productos";
import Ventas from "./Routes/Ventas/Ventas";
import Promociones from "./Routes/Promociones/Promociones";
import Contact from "./Routes/Contact/Contact";
import Galeria from "./Routes/GaleriaDeClientes/Galeria";
import SubFooter from './Routes/Componentes/Footer/SubFooter';


function App() {


  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/nosotros" component={QuienesSomos} />
            <Route exact path="/productos" component={Productos} />
            <Route exact path="/compras" component={Ventas} />
            <Route exact path="/promociones" component={Promociones} />
            <Route exact path="/contacto" component={Contact} />
            <Route exact path="/clientes" component={Galeria} />
            <Redirect to="/" />
          </Switch>
        </div>
        <SubFooter />
      </Router>
    </>
  );
}

export default App;
