import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AppleExperienceV1 from '../assets/ProjectAsset/AppleExperienceV1.png';
import AppleExperiencev2 from '../assets/ProjectAsset/AppleExperiencev2.png';
import CinetsarV1 from '../assets/ProjectAsset/CinetsarV1.png';
import CinestarV2 from '../assets/ProjectAsset/CinestarV2.png';
import CineStarv3 from '../assets/ProjectAsset/CineStarv3.png';
import CleanBoardv1 from '../assets/ProjectAsset/CleanBoardv1.png';
import CleanBoardV2 from '../assets/ProjectAsset/CleanBoardV2.png';
import CleanBoardv3 from '../assets/ProjectAsset/CleanBoardv3.png';
import AmazeVisualsV1 from '../assets/ProjectAsset/AmazeVisualsV1.png';
import AmazeVisualsV2 from '../assets/ProjectAsset/AmazeVisualsV2.png';
import AmazeVisualsv3 from '../assets/ProjectAsset/AmazeVisualsv3.png';
import OutdoorLandcsapeV1 from '../assets/ProjectAsset/OutdoorLandcsapeV1.png';
import OutdoorLandscapeV2 from '../assets/ProjectAsset/OutdoorLandscapeV2.png';
import OutDoorLandscapeV3 from '../assets/ProjectAsset/OutDoorLandscapeV3.png';
import InstantDownloadV1 from '../assets/ProjectAsset/InstantDownloadV1.png';
import InstantDowloadv2 from '../assets/ProjectAsset/InstantDowloadv2.png';
import InstantDownloadv3 from '../assets/ProjectAsset/InstantDownloadv3.png';
import JustEmmaV1 from '../assets/ProjectAsset/JustEmmaV1.png';
import JustEmmav2 from '../assets/ProjectAsset/JustEmmav2.png';
import OpenPortv1 from '../assets/ProjectAsset/OpenPortv1.png';
import Openportv2 from '../assets/ProjectAsset/Openportv2.png';
import Openportv3 from '../assets/ProjectAsset/Openportv3.png';
import SmartStackv1 from '../assets/ProjectAsset/SmartStackv1.png';
import SmartStackv2 from '../assets/ProjectAsset/SmartStackv2.png';
import SmartStackv3 from '../assets/ProjectAsset/SmartStackv3.png';
import FinalClueV1 from '../assets/ProjectAsset/FinalClueV1.png';
import FinalClueV2 from '../assets/ProjectAsset/FinalClueV2.png';
import FinalClueV3 from '../assets/ProjectAsset/FinalClueV3.png';
import BEtaBuddyV1 from '../assets/ProjectAsset/BEtaBuddyV1.png';
import BetaBuddyV2 from '../assets/ProjectAsset/BetaBuddyV2.png';
import BetaBuddyV3 from '../assets/ProjectAsset/BetaBuddyV3.png';
import { ChevronRight } from 'lucide-react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import SEO from '../component/SEO';

const projects = [
  {
    title: 'Apple Experience 3D',
    description: 'Revolutionary 3D product visualization engine that transforms how users interact with Apple devices. Built with Three.js and WebGL shaders, featuring real-time ray tracing, physics-based material rendering, and gesture-controlled navigation. This immersive experience delivers photorealistic device interactions that blur the line between digital and physical.',
    imgSrc: AppleExperiencev2,
    link: '/projects/apple-experience',
    stack: ['Three.js', 'WebGL', 'GSAP', 'JavaScript', 'GLSL', 'Touch Events', 'Custom Shaders']
  },
  {
    title: 'CineStar – Movie Explorer',
    description: 'Next-generation entertainment discovery platform powered by machine learning recommendation algorithms and real-time data processing. Features advanced NLP sentiment analysis for reviews, dynamic content curation using collaborative filtering, and seamless API integrations with TMDB. Dark-mode UI with micro-animations creates an addictive user experience.',
    imgSrc: CineStarv3,
    link: '/projects/cinestar',
    stack: ['React', 'NLP.js', 'TailwindCSS', 'TMDB API', 'Axios', 'Redux', 'Framer Motion', 'Node.js', 'Express']
  },
  {
    title: 'Clean Board SaaS',
    description: 'Enterprise-grade project management SaaS built with microservices architecture and real-time WebSocket communication. Implements advanced state management with Redux Toolkit, automated workflow triggers, and intelligent task prioritization using ML algorithms. Features robust authentication, role-based permissions, and scalable cloud infrastructure.',
    imgSrc: CleanBoardv3,
    link: '/projects/clean-board',
    stack: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Redux Toolkit', 'Firebase', 'AWS EC2', 'Docker']
  },
  {
    title: 'Amaze Visuals Portfolio',
    description: 'Award-worthy creative showcase platform engineered with performance optimization and conversion psychology. Implements lazy loading, progressive image enhancement, and smooth parallax scrolling using Intersection Observer API. Strategic UX design patterns maximize client engagement and project inquiries.',
    imgSrc: AmazeVisualsv3,
    link: '/projects/amaze-visuals',
    stack: ['Next.js', 'SCSS', 'Framer Motion', 'Intersection Observer API', 'Cloudinary', 'React Router']
  },
  {
    title: 'Outdoor Landscape Design',
    description: 'Professional-grade landscape design platform featuring advanced 3D visualization and AI-powered design recommendations. Implements real-time rendering with WebGL, plant database integration, and automated project cost estimation. Features collaborative design tools, weather simulation, and sustainable design recommendations.',
    imgSrc: OutDoorLandscapeV3,
    link: '/projects/outdoor-landscape',
    stack: ['React', 'Three.js', 'WebGL', 'Node.js', 'MongoDB', 'AWS', 'AI/ML', 'CAD Integration']
  },
  {
    title: "InstantDownload",
    description: "Chrome extension powerhouse built with manifest V3 and advanced content script injection. Features intelligent video detection algorithms, multi-platform API integrations (TikTok, Instagram, YouTube), and optimized download streaming with quality selection. Implements background service workers for seamless performance across social platforms.",
    imgSrc: InstantDownloadv3,
    link: '/projects/instant-download',
    stack: ['JavaScript', 'Chrome Extension (Manifest V3)', 'Service Workers', 'YouTube API', 'Insta API', 'TikTok Downloader', 'Regex', 'FFmpeg']
  },
  {
    title: "JustEmma",
    description: "Autonomous social media intelligence bot leveraging GPT integration and advanced web scraping. Features Reddit trend analysis, Twitter sentiment monitoring, and intelligent content scheduling using NLP algorithms. Implements job application automation with resume parsing and lead generation through behavioral pattern recognition.",
    imgSrc: JustEmmav2,
    link: '/projects/just-emma',
    stack: ['Python', 'Puppeteer', 'Playwright', 'OpenAI GPT', 'NLP.js', 'Twit.js', 'Cheerio', 'Node.js', 'Express', 'MongoDB']
  },
  {
    title: "FinalClue",
    description: "Forensic analysis CLI tool trained on extensive medical datasets using TensorFlow and scikit-learn. Implements deep learning models for mortality prediction with 94% accuracy, featuring natural language processing for autopsy report analysis and computer vision for medical imaging interpretation. Revolutionary tool for forensic investigations.",
    imgSrc: FinalClueV1,
    link: '/projects/final-clue',
    stack: ['Python', 'TensorFlow', 'scikit-learn', 'NLTK', 'OpenCV', 'CLI', 'Pandas', 'Matplotlib', 'Seaborn']
  },
  {
    title: "BetaBuddy",
    description: "Intelligent Discord communication bot powered by Google Translate API and custom NLP models. Features real-time language detection with 99.7% accuracy, automated moderation using sentiment analysis, and smart command recognition. Implements Redis caching for lightning-fast response times and supports 100+ languages seamlessly.",
    imgSrc: BetaBuddyV3,
    link: '/projects/beta-buddy',
    stack: ['Node.js', 'Discord.js', 'Google Translate API', 'LangDetect', 'Redis', 'Sentiment.js', 'MongoDB', 'NLP.js']
  },
  {
    title: "OpenPort",
    description: "Game-changing JavaScript library that eliminates API complexity through intelligent LLM integration and machine learning automation. Features zero-config image generation, sentiment analysis pipelines, and web scraping modules. Built with TypeScript and modular architecture, this library empowers developers to build powerful applications without API key management headaches.",
    imgSrc: Openportv3,
    link: '/projects/open-port',
    stack: ['TypeScript', 'JavaScript', 'LLM (Gemini/OpenAI)', 'Cheerio', 'Playwright', 'Puppeteer', 'TensorFlow.js', 'NLP.js']
  },
  {
    title: "CryptoPulse",
    description: "Professional-grade WhatsApp trading bot integrated with blockchain APIs and real-time market data streams. Features whale movement detection using on-chain analysis, automated news sentiment scoring with NLP, and intelligent price alert systems. Implements WebSocket connections for millisecond-precision market updates and portfolio tracking.",
    imgSrc: AmazeVisualsV2,
    link: '/projects/crypto-pulse',
    stack: ['Node.js', 'WhatsApp Web.js', 'MongoDB', 'Blockchain.com API', 'CoinGecko API', 'NLP.js', 'Gemini', 'Redis'],
    disabled: true
  },
  {
    title: "SmartStack",
    description: "Revolutionary SaaS platform that generates optimal project architectures using machine learning and code analysis algorithms. Features intelligent file structure generation, automated dependency optimization, and best-practice JSON schema creation. Eliminates development setup time by 80% through AI-powered project scaffolding and architecture recommendations.",
    imgSrc: SmartStackv3,
    link: '/projects/smart-stack',
    stack: ['Python', 'JavaScript', 'ESLint', 'AST Parser', 'AI Code Generator', 'HuggingFace Transformers', 'Next.js', 'JSON Schema', 'Express']
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

function Projects() {
  return (
    <>
      <SEO 
        title="All Projects"
        description="Browse the full collection of projects by Oyebimpe Emmanuel, showcasing a wide range of skills in software engineering, web development, and robotics."
        url="https://emmanueloyebimpe.vercel.app/proj"
      />
      <Header />
      <div className="project-wrapper extended">
        <style jsx>{`
          .Theheading{
            text-align:center;
            margin-bottom:4rem;
            margin-top:-4rem;
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
            margin-top: 15rem;
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

          .project-btn:disabled {
            background: #e0e0e0;
            color: #999;
            cursor: not-allowed;
            opacity: 0.6;
          }

          .project-btn:disabled:hover .arrow {
            transform: none;
          }

          .project-card.disabled {
            opacity: 0.7;
            pointer-events: none;
          }

          .project-card.disabled .project-image-box img {
            cursor: not-allowed;
          }

          .center-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 3rem;
            width: 100%;
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

          
          }
        `}</style>
        <motion.h1 
          className='Theheading'
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Projects I worked on.At a glance.
        </motion.h1>
        <motion.div 
          className="projectSection"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, idx) => (
            <motion.div 
              className={`project-card ${project.disabled ? 'disabled' : ''}`}
              key={idx}
              variants={itemVariants}
            >
              <div className="project-image-box">
                {project.disabled ? (
                  <div style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img src={project.imgSrc} alt={`Screenshot of ${project.title} main interface`} style={{ cursor: 'not-allowed', width: '100%', height: '100%' }} />
                  </div>
                ) : (
                  <Link to={project.link} style={{ display: 'block', width: '100%', height: '100%' }}>
                    <img src={project.imgSrc} alt={`Screenshot of ${project.title} main interface`} style={{ cursor: 'pointer', width: '100%', height: '100%' }} />
                  </Link>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                {project.disabled ? (
                  <button className="project-btn" disabled>
                    Coming Soon <span className="arrow">&#8594;</span>
                  </button>
                ) : (
                  <Link className="project-btn" to={project.link}>
                    View Project <span className="arrow">&#8594;</span>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div style={{ marginBottom: '5rem' }}>
        <Footer />
      </div>
    </>
  );
}

export default Projects;