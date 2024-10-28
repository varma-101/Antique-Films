import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Carousel interval={3000} controls={true} indicators={false} className="relative w-full h-full">
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/cw9ptwvdq3dpxvazap0x"
            className="block w-full h-full object-cover"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/ihzufvjqkbdammkwynjo"
            className="block w-full h-full object-cover"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/t6ttnhmaognu0sm72bmm"
            className="block w-full h-full object-cover"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://res.cloudinary.com/dvsometal/image/upload/f_auto,q_auto/v1/Antique-films/tzd1tocnr433fmew2uej"
            className="block w-full h-full object-cover"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
