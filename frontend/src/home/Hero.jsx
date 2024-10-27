import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="images/image1.png" className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/image2.jpg" className="d-block w-100" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/image3.png" className="d-block w-100" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="images/image4.jpg" className="d-block w-100" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
