import { motion } from 'framer-motion';
import avatarImage from '../assets/Avatar.jpg';

function Hero() {
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
      <div className="animated-background">
        <div className="floating-shapes">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-shape"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

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
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {'Hey, I\'m Oyebimpe Emmanuel.'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.01 }}
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
          {'Software Developer'.split('').map((char, i) => (
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
