import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppleExperienceV1 from '../assets/ProjectAsset/AppleExperienceV1.png';
import CinetsarV1 from '../assets/ProjectAsset/CinetsarV1.png';
import CleanBoardv1 from '../assets/ProjectAsset/CleanBoardv1.png';
import AmazeVisualsV1 from '../assets/ProjectAsset/AmazeVisualsV1.png';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Apple Experience 3D',
    description: 'A cutting-edge 3D Apple iPhone showcase built with modern web tech — explore devices like never before. A futuristic product experience for next-gen consumers.',
    imgSrc: AppleExperienceV1,
    link: '/projects/apple-experience',
  },
  {
    title: 'CineStar – Movie Explorer',
    description: 'A slick, dynamic movie discovery platform packed with trending trailers, cast previews & dark UI perfection. Built to entertain. Optimized to impress. #SaaS #React',
    imgSrc: CinetsarV1,
    link: '/projects/cinestar',
  },
  {
    title: 'Clean Board SaaS',
    description: 'A full-fledged SaaS dashboard for modern teams. Think Trello meets sleek design — real-time task control, smooth UX, and intuitive team workflow boards.',
    imgSrc: CleanBoardv1,
    link: '/projects/clean-board',
  },
  {
    title: 'Amaze Visuals Portfolio',
    description: 'A minimalist visual experience for showcasing creative work. Designed to amaze, built to convert. The kind of portfolio that leaves no room for doubt.',
    imgSrc: AmazeVisualsV1,
    link: '/projects/amaze-visuals',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Project() {
  return (
    <>
      <div className="project-wrapper extended">
        <motion.h1 
          className='Theheading'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Projects I worked on
        </motion.h1>
        <motion.div 
          className="projectSection"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div 
              className="project-card" 
              key={idx}
              variants={itemVariants}
            >
              <div className="project-image-box">
                <div className="project-image-decoration">
                  <span className="shopping-bag"></span>
                </div>
                <Link to={project.link} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img src={project.imgSrc} alt={`Screenshot of ${project.title} main interface`} style={{ cursor: 'pointer', width: '100%', height: '100%' }} />
                </Link>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <Link className="project-btn" to={project.link}>
                  View Project <span className="arrow">&#8594;</span>
                </Link>
              </div>
            </motion.div>
          ))}   
        </motion.div>
        
        <div className="center-wrapper">
          <Link to="/Projects" className="view-all-btn">
            <span>View All</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .Theheading {
          text-align: center;
          margin-bottom: 4rem;
          margin-top: -4rem;
          font-size: 2.2rem;
          font-weight: 700;
          color: #181818;
        }

        .project-wrapper {
          width: 80vw;
          max-width: 750px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 4rem auto 0 auto;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          box-sizing: border-box;
        }

        .projectSection {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem 1.5rem;
          max-width: 100%;
          padding: 0 0.1rem;
          box-sizing: border-box;
          width: 100%;
        }

        .project-card {
          background: #fff;
          border: 2px solid #ececec;
          border-radius: 20px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .project-image-box {
          width: 100%;
          height: auto;
          min-height: 200px;
          max-height: 400px;
          border-radius: 24px;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          background: #181818; /* dark neutral background */
          border: 12px solid #e0e0e0;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          aspect-ratio: 16/10;
        }

        .project-image-box::before {
          content: '';
          position: absolute;
          top: -12px;
          left: 0;
          right: 0;
          height: 12px;
          background: repeating-linear-gradient(
            -45deg,
            #ff4d4d,
            #ff4d4d 10px,
            white 10px,
            white 20px
          );
          z-index: 1;
          border-radius: 12px 12px 0 0;
        }
        
        .project-image-decoration {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .shopping-bag {
          font-size: 24px;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
        }

        .project-image-box img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          object-fit: contain;
          background: transparent;
          display: block;
          margin: 0;
          padding: 0;
          transition: transform 0.3s ease;
          object-position: center;
        }
        
        .project-card:hover .project-image-box img {
          transform: scale(1.05);
        }

        .project-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #181818;
          font-family: 'Inter', Arial, sans-serif;
        }

        .project-desc {
          font-size: 1rem;
          color: #444;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          min-height: 4.8em;
        }

        .project-btn {
          background: #f5f5f5;
          color: #181818;
          border: none;
          border-radius: 10px;
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          margin-top: auto;
        }

        .arrow {
          font-size: 1.2em;
          margin-left: 0.2em;
          transition: transform 0.3s ease;
        }

        .project-btn:hover .arrow {
          transform: translateX(4px);
        }

        .center-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 3rem;
          width: 100%;
        }

        .view-all-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background-color: #000;
          color: white;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }

        .view-all-btn:hover {
          background-color: #1a1a1a;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        /* Responsive Design */
        @media (max-width: 900px) {
          .project-wrapper {
            width: 90vw;
            padding: 1.5rem 0.1rem;
          }

          .projectSection {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .project-image-box {
            height: 200px;
          }

          .center-wrapper {
            margin-top: 2.5rem;
          }
        }

        @media (max-width: 600px) {
          .project-wrapper {
            width: 95vw;
            padding: 1rem 0.05rem;
          }

          .project-card {
            padding: 1.2rem;
          }

          .project-image-box {
            height: 180px;
            margin-bottom: 1rem;
            border-width: 8px;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .project-desc {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .project-btn {
            padding: 0.7rem 1.2rem;
            font-size: 0.9rem;
          }

          .center-wrapper {
            margin-top: 2rem;
          }

          .view-all-btn {
            padding: 10px 16px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
}

export default Project;