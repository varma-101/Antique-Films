import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <Carousel interval={3000} controls={true} indicators={false}>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/cw9ptwvdq3dpxvazap0x" className="d-block w-100" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/ihzufvjqkbdammkwynjo" className="d-block w-100" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/t6ttnhmaognu0sm72bmm" className="d-block w-100" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/tzd1tocnr433fmew2uej" className="d-block w-100" alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;