import React from 'react';
import './App.css';
import Home from './Routes/Home/Home';
import QuienesSomos from './Routes/QuienesSomos/QuienesSomos';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Productos from './Routes/Productos/Productos';
import Ventas from './Routes/Ventas/Ventas';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={QuienesSomos} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/compras" component={Ventas}/>
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
