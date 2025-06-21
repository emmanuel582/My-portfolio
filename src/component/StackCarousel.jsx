import React from 'react';

const StackCarousel = () => {
  const icons = [
    { src: 'https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg', alt: 'JavaScript' },
    { src: 'https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg', alt: 'HTML5' },
    { src: 'https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg', alt: 'React' },
    { src: 'https://www.vectorlogo.zone/logos/python/python-icon.svg', alt: 'Python' },
    { src: 'https://www.vectorlogo.zone/logos/golang/golang-icon.svg', alt: 'Go' },
    { src: 'https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg', alt: 'TypeScript' },
    { src: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg', alt: 'Node.js' },
  ];

  const extendedIcons = [...icons, ...icons, ...icons];

  return (
    <div className="center-container">
      <div className="stack-carousel-container">
        <div className="stack-carousel-track">
          {extendedIcons.map((icon, index) => (
            <div key={`icon-${index}`} className="stack-carousel-icon">
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .center-container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 5rem;
          
          width: 180px;
          margin: 0 auto;
        }

        .stack-carousel-container {
          width: 100%;
          max-width: 960px;
          height: 50px;
          overflow: hidden;
          position: relative;
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }

        .stack-carousel-track {
          display: flex;
          width: calc(50px * ${icons.length * 3});
          animation: stack-carousel-scroll 40s linear infinite;
          gap: 20px;
          align-items: center;
        }

        .stack-carousel-icon {
          width: 30px;
          height: 30px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          opacity: 0.7;
        }
        
        .stack-carousel-icon:hover {
          transform: scale(1.2);
          opacity: 1;
        }

        .stack-carousel-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(20%) brightness(1.1);
        }

        @keyframes stack-carousel-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50px * ${icons.length}));
          }
        }
      `}</style>
    </div>
  );
};

export default StackCarousel;