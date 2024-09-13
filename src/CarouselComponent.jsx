import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import './Carousel.css';

const CarouselComponent = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div className="carousel-slide slide1">
            <div className="carousel-text">
              <h2 className="carousel-title">Slide1</h2>
              <p className="carousel-subtext">Sub title 2</p>
            </div>
            <img src={image1} alt="Image 1" className="carousel-image" />
          </div>
          <div className="carousel-slide slide2">
            <div className="carousel-text">
            <h2 className="carousel-title">Slide 2</h2>
            <p className="carousel-subtext">Sub title 2</p>
            </div>
            <img src={image2} alt="Image 2" className="carousel-image" />
          </div>
          <div className="carousel-slide slide3">
            <div className="carousel-text">
            <h2 className="carousel-title">Slide 3</h2>
            <p className="carousel-subtext">Sub title 3</p>
            </div>
            <img src={image3} alt="Image 3" className="carousel-image" />
          </div>
          {/* Add more images and quotes as needed */}
        </Slider>
      </div>
    );
  };
  
  export default CarouselComponent;