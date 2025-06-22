import React, { useState } from 'react';

// Import your five unique images
import image1 from '../assets/certificate5.png';
import image2 from '../assets/Certificate1.jpg';
import image3 from '../assets/Certificate2.png';
import image4 from '../assets/Certificate3.png';
import image5 from '../assets/Certificate4.png';

const GlassCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Create an array of image sources
  const imageSources = [image1, image2, image3, image4, image5];

  // Map the imageSources to carousel items
  const carouselItems = imageSources.map((img, idx) => ({
    id: idx + 1,
    image: img,
  }));

  // Duplicate the items for looping effect
  const duplicatedItems = [...carouselItems, ...carouselItems];

  const handleMouseDown = (e) => {
    if (e.button === 0 || e.button === 2) {
      setIsPaused(true);
    }
  };

  const handleMouseUp = (e) => {
    if (e.button === 0 || e.button === 2) {
      setIsPaused(false);
    }
  };

  const preventContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="carousel-container">
      <div
        className={`carousel-track ${isPaused ? 'paused' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onContextMenu={preventContextMenu}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`carousel-${index}`} className="carousel-item">
            <div className="glass-card">
              <div className="dot dot-top-left"></div>
              <div className="dot dot-top-right"></div>
              <div className="dot dot-bottom-left"></div>
              <div className="dot dot-bottom-right"></div>

              <div className="inner-border">
                <div className="image-container">
                  <img src={item.image} alt={`Carousel item ${item.id}`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlassCarousel;
