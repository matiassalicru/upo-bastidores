import React from 'react';
import './QuienesSomos.css';

//Import Components
import TitleHeader from '../Componentes/TitleHeader/TitleHeader';
import InfoCard from '../Componentes/InfoCard/InfoCard';
import Footer from '../Componentes/Footer/Footer';
import HomeBtn from '../Componentes/HomeBtn/HomeBtn';
import { ChatBubble } from "../Componentes/Chat/ChatBubble";


const QuienesSomos = () => (
  <div className="quienes-somos-container">
    <ChatBubble/>
    <TitleHeader title="¿Quienes Somos?" color="orange" />
    <InfoCard />
    <br />
    <p>
      No solo somos una fábrica de bastidores, sino que también somos un
      conjunto de personas que creen que la buena calidad también debe ser
      accesible para todos. <br /> <br /> Creemos en el arte y somos fieles al
      pensamiento de que cada detalle conforma un todo, una obra. <br /> <br />{" "}
      UPO BASTIDORES, se inicio en marzo, en plena cuarentena del año 2020,
      cuando la crisis abundaba y los miedos se reflejaban en los ojos de todos.
      Quisimos impulsar el famoso "QUEDATE EN CASA" ofreciendo bastidores para
      que cada artista o persona que quiera iniciar en el rubro de la pintura,
      se cuide, se entretenga o trabaje en su casa realizando sus propias obras.{" "}
      <br /> <br />
      Destinamos las mejores calidades a la elaboración de nuestros productos ,
      asi como también dejamos lo mejor de cada uno de nosotros desde el inicio
      hasta el final de la relación fabrica-cliente. <br /> <br /> Abrimos
      puertas laborales, para quienes quieras hacer dropshipping, ya que entre
      todos podemos cambiar algunas realidades económicas que hoy existen.{" "}
      <br />
      <br />
      Amamos ver las obras finalizadas de nuestros clientes sobre nuestros
      bastidores.
      <br />
      <br />
       ¡DEJANOS SER PARTE DE TU ARTE!
    </p>

    <HomeBtn color='orange'/>
    <Footer/>
  </div>
);

export default QuienesSomos;