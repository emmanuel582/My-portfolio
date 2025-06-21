import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import '../cursor-handler.js';
import Header from "./component/Header.jsx"
import Hero from "./component/Hero.jsx"
import GlassCarousel from "./component/Carousel.jsx"
import About from "./component/About.jsx"
import StackCarousel from './component/StackCarousel.jsx';
import Project from './component/Project.jsx';
import Projects from './Projects/Projects.jsx';
import ProfessionalTimeline from "./component/Experience.jsx"
import TechStack from "./component/Technology.jsx"
import Contact from "./component/Contact.jsx"
import Reviews from "./component/Reviews.jsx"
import CineStar from './Projects/CineStar.jsx';
import CleanBoard from './Projects/CleanBoard.jsx';
import AmazeVisuals from './Projects/AmazeVisuals.jsx';
import AppleExperience from './Projects/AppleExperience.jsx';
import OutdoorLandscape from './Projects/OutdoorLandscape.jsx';
import InstantDownload from './Projects/InstantDownload.jsx';
import JustEmma from './Projects/JustEmma.jsx';
import FinalClue from './Projects/FinalClue.jsx';
import BetaBuddy from './Projects/BetaBuddy.jsx';
import OpenPort from './Projects/OpenPort.jsx';
import CryptoPulse from './Projects/CryptoPulse.jsx';
import SmartStack from './Projects/SmartStack.jsx';
import SEO from './component/SEO.jsx';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

// Custom hook for reliable scroll to top
const useScrollToTop = () => {
  const scrollToTop = () => {
    // Multiple methods to ensure it works
    try {
      // Method 1: Standard window scroll
      window.scrollTo(0, 0);
      
      // Method 2: Direct DOM manipulation
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Method 3: Force scroll on all scrollable containers
      const containers = document.querySelectorAll('html, body, .overallcontainer, .project-wrapper, #root, [style*="overflow"]');
      containers.forEach(container => {
        if (container && typeof container.scrollTop !== 'undefined') {
          container.scrollTop = 0;
        }
      });
      
      // Method 4: Use requestAnimationFrame for smooth execution
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    } catch (error) {
      console.log('Scroll to top error:', error);
    }
  };
  
  return scrollToTop;
};

// Aggressive scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const scrollToTop = useScrollToTop();

  useEffect(() => {
    // Immediate scroll
    scrollToTop();
    
    // Multiple delayed scrolls to ensure it works
    const timers = [10, 50, 100, 200, 500].map(delay => 
      setTimeout(scrollToTop, delay)
    );
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [pathname, scrollToTop]);

  // Global click handler for all navigation
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href], Link, [role="button"], button');
      if (link) {
        const href = link.href || link.getAttribute('href');
        if (href && !href.includes('mailto:') && !href.includes('tel:') && !href.includes('http')) {
          // Force scroll to top on internal navigation
          [0, 50, 150, 300].forEach(delay => {
            setTimeout(scrollToTop, delay);
          });
        }
      }
    };

    document.addEventListener('click', handleClick, true);
    
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [scrollToTop]);

  return null;
};

// Fade-in animation wrapper component
const FadeInWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    style={{ width: '100%' }}
  >
    {children}
  </motion.div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SEO />
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="overallcontainer">
              <Hero />
              <GlassCarousel />
              <About />
              <StackCarousel />
              <Project />
              <ProfessionalTimeline />
              <TechStack/>
              <Contact/>
            </div>
          } />
          <Route path="/reviews" element={
            <FadeInWrapper>
              <Reviews />
            </FadeInWrapper>
          } />
          <Route path="/projects" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <Projects />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/cinestar" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <CineStar />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/clean-board" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <CleanBoard />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/amaze-visuals" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <AmazeVisuals />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/apple-experience" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <AppleExperience />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/outdoor-landscape" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <OutdoorLandscape />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/instant-download" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <InstantDownload />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/just-emma" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <JustEmma />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/final-clue" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <FinalClue />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/beta-buddy" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <BetaBuddy />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/open-port" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <OpenPort />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/crypto-pulse" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <CryptoPulse />
              </div>
            </FadeInWrapper>
          } />
          <Route path="/projects/smart-stack" element={
            <FadeInWrapper>
              <div className="overallcontainer">
                <SmartStack />
              </div>
            </FadeInWrapper>
          } />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)