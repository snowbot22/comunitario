'use client'; // Si usas App Router

import { useState, useEffect } from 'react';
import styles from '../styles/slider.css';

const Slider = ({ images,alts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <div className="sliderWrapper">
        <button className="prevButton" onClick={goToPrevious}>
          ❮
        </button>
        
        <div className="imageContainer">
          <img 
            src={images[currentIndex]} 
            alt={alts[currentIndex]}
            className="image"
          />
        </div>
        
        <button className="nextButton" onClick={goToNext}>
          ❯
        </button>
      </div>

      {/* Dots/Indicators */}
      <div className="dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${
              index === currentIndex ? "activeDot" : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
