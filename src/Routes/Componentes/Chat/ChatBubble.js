import React, { useState } from "react";
import "./ChatBubble.css";

import profilePic from '../../../Assets/images/logopng.png'
import wsp from '../../../Assets/images/wspNoBackground.png'

export const ChatBubble = () => {
  const [visible, setvisible] = useState("hide");

  function openForm() {
    visible === "hide" ? setvisible("show") : setvisible("hide");
  }

  return (
    <>
      <button className="open-button" onClick={openForm} />
      <form className={`chat-popup chat-container ${visible}`} id="myForm">
        <div className="chat-header">
          <img src={profilePic} alt="Profile Pic" />
          <div className="name-time">
            <h3>UPO tienda</h3>
            <p>Normalmente responde en el momento</p>
          </div>
        </div>

        <div className="chat-area">
          <div className="chat-msg">
            <label htmlFor="msg">UPO tienda</label>
            <p>Hola como estás?</p>
            <p>Te puedo ayudar en algo?</p>
          </div>
        </div>

        <a href="https://walink.co/a23251" className="chat-btn">
          {" "}
          <img className="chat-wsp-send" src={wsp} alt="wsp" /> Iniciar chat
        </a>
      </form>
    </>
  );
};
