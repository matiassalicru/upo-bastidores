import React from "react";
import "./Producto.css";

const Producto = ({
  title,
  image,
  description,
  color,
  detail5,
  detail4,
  detail3,
  detail2,
  detail1,
}) => {
  return (
    <div className="producto-container">
      <div className="title-img">
        <h2>{title}</h2>
        <img src={image} alt="imagen-producto" />
      </div>
      <div className={`producto-description ${color}`}>
        <p>{description}</p>
        <div className='separator'>
          <p>{detail1}</p>
          <p>{detail2}</p>
          <p>{detail3}</p>
          <p>{detail4}</p>
          <p>{detail5}</p>
        </div>
      </div>
    </div>
  );
};

export default Producto;
