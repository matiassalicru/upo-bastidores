import React from "react";
import "../Slider/Slider.css";

//import libraries
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({images, title}) => {

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: true,
    SlidesToScroll: 1,
    className: "slider",
    adaptiveHeight: true,
    autoplay: true,
    centerMode: true,
  };

  return (
    <div className="carousel-container">
      <p className="carousel-title">{title}</p>
      <Slider {...settings}>
        {images.map((image) => {
          return (
            <img
              className="carousel-img"
              src={image.image}
              key={image._id}
              alt={image._id}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
