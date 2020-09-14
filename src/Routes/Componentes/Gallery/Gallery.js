import React from 'react'
import './Gallery.css';

const Gallery = ({images, title, footer}) => {
  return (
    <>
      <p className="galeria-title">{title}</p>
      <div className="gallery-container">
        {images.map((image) => {
          return (
            <div className="gallery-images-map" key={image._id}>
              <img
                className="gallery-img"
                src={image.image}
                key={image._id}
                alt={image._id}
              />

              {footer && <small className="artist-name">@{image.artist}</small>}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;