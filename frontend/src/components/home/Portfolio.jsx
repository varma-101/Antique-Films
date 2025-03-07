import React from 'react';
import { Link } from 'react-router-dom';

const portfolioImages = [
  { id: 1, src: 'images/birthday.png', alt: 'Portfolio 1' },
  { id: 2, src: 'images/birthday.png', alt: 'Portfolio 2' },
  { id: 3, src: 'images/birthday.png', alt: 'Portfolio 3' },
  { id: 1, src: 'images/birthday.png', alt: 'Portfolio 1' },
  { id: 2, src: 'images/birthday.png', alt: 'Portfolio 2' },
  { id: 3, src: 'images/birthday.png', alt: 'Portfolio 3' },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <div className="container">
        <h2 className="title">Our Portfolio</h2>

        <div className="portfolio-grid">
          {portfolioImages.map((image) => (
            <div key={image.id} className="portfolio-item">
              <img src={image.src} alt={image.alt} className="portfolio-image" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/gallery" className="view-more">
            View More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
