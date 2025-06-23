import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import project images instead of certificates
import AppleExperienceV1 from '../assets/ProjectAsset/AppleExperienceV1.png';
import CinetsarV1 from '../assets/ProjectAsset/CinetsarV1.png';
import CleanBoardv1 from '../assets/ProjectAsset/CleanBoardv1.png';
import AmazeVisualsV1 from '../assets/ProjectAsset/AmazeVisualsV1.png';
import OpenPortV1 from '../assets/ProjectAsset/OpenPortv1.png';

const GlassCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Create an array of project image sources
  const imageSources = [AppleExperienceV1, CinetsarV1, CleanBoardv1, AmazeVisualsV1, OpenPortV1];

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
      <div className="carousel-header">
        <h2>Featured Projects</h2>
        <Link to="/certificates" className="certificates-link">
          View Certificates →
        </Link>
      </div>
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
                  <img src={item.image} alt={`Project ${item.id}`} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .carousel-header {
          text-align: center;
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto 2rem;
          padding: 0 2rem;
        }

        .carousel-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .certificates-link {
          color: #666;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .certificates-link:hover {
          color: #000;
        }

        @media (max-width: 768px) {
          .carousel-header {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .carousel-header h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GlassCarousel;
