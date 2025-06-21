import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import avatarImage from '../assets/Avatar.jpg';
import { useCallback } from 'react';

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="hero-wrapper">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          particles: {
            number: { value: 100 },
            color: { value: '#000' },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      <motion.div
        className="avatar-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img src={avatarImage} alt="Oyebimpe Emmanuel" className="avatar-image" />
      </motion.div>

      <div className="hero-content">
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          {'Hey, I\'m Oyebimpe Emmanuel.'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          {'Software Engineer'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4, duration: 1 }}
        >
          Creating innovative solutions and captivating designs.
          <br />
         Medical student by day, Visionary Builder by night.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
        >
          <button className="hire-btn" onClick={scrollToContact}>Book Now!</button>
          <div className="status-indicator">
            <span className="status-dot"></span>
            Available for new project
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
