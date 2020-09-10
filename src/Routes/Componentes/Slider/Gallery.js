import React from 'react'
import './Gallery.css';

const Gallery = ({images, title, footer}) => {
  return (
      <>
      <p className="ventas-subtitle">{title}</p>
        <div className="gallery-container">
      {images.map((image) => {
        return (
          <div className="gallery-images-map">
            <img
              className="gallery-img"
              src={image.image}
              key={image._id}
              alt={image._id}
            />
            
            { footer &&
                <small className="artist-name">
              <a href={`https://www.instagram.com/${image.artist}`}>
                @{image.artist}
              </a>
            </small>
            }
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Gallery;