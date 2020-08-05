import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <form className="form-container">
          <h2 className="form-title">Contactame!</h2>
          <div className="form-inputs-container">
            <div className="form-inputs">
              <input type="text" placeholder="Nombre*" />
              <input type="text" placeholder="Email*" />
            </div>
            <textarea cols="20" rows="7" placeholder='Mensaje*'/>
          </div>
          <input className='submit-btn' type="submit" value="ENVIAR"/>
        </form>
    );
}

export default Contact;