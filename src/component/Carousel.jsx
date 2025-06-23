import React, { useState } from 'react';

// Import V1 images from ProjectAsset
import AmazeVisualsV1 from '../assets/ProjectAsset/AmazeVisualsV1.png';
import AppleExperienceV1 from '../assets/ProjectAsset/AppleExperienceV1.png';
import BEtaBuddyV1 from '../assets/ProjectAsset/BEtaBuddyV1.png';
import CinetsarV1 from '../assets/ProjectAsset/CinetsarV1.png';
import CleanBoardv1 from '../assets/ProjectAsset/CleanBoardv1.png';
import FinalClueV1 from '../assets/ProjectAsset/FinalClueV1.png';
import InstantDownloadV1 from '../assets/ProjectAsset/InstantDownloadV1.png';
import JustEmmaV1 from '../assets/ProjectAsset/JustEmmaV1.png';
import OpenPortv1 from '../assets/ProjectAsset/OpenPortv1.png';
import OutdoorLandcsapeV1 from '../assets/ProjectAsset/OutdoorLandcsapeV1.png';
import SmartStackv1 from '../assets/ProjectAsset/SmartStackv1.png';

const GlassCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Array of V1 project images
  const imageSources = [
    AmazeVisualsV1,
    AppleExperienceV1,
    BEtaBuddyV1,
    CinetsarV1,
    CleanBoardv1,
    FinalClueV1,
    InstantDownloadV1,
    JustEmmaV1,
    OpenPortv1,
    OutdoorLandcsapeV1,
    SmartStackv1,
  ];

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
                  <img src={item.image} alt={`Project V1 Carousel item ${item.id}`} />
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
