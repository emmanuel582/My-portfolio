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
      <motion.div
        className="avatar-container"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <img src={avatarImage} alt="Oyebimpe Emmanuel" className="avatar-image" />
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1.2 }}
      >
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {'Hey, I\'m Oyebimpe Emmanuel.'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {'Software Developer'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1 }}
        >
          Creating innovative solutions and captivating designs.
          <br />
         Medical student by day, Visionary Builder by night.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 1 }}
        >
          <button className="hire-btn" onClick={scrollToContact}>Book Now!</button>
          <div className="status-indicator">
            <span className="status-dot"></span>
            Available for new project
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
