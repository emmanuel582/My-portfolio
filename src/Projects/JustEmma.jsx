import React, { useState } from 'react';
import Footer from '../component/Footer';
import JustEmmaV1 from '../assets/ProjectAsset/JustEmmaV1.png';
import JustEmmaV2 from '../assets/ProjectAsset/JustEmmav2.png';
import SEO from '../component/SEO';

const JustEmma = () => {
  const [previewImg, setPreviewImg] = useState(null);

  const openPreview = (src) => setPreviewImg(src);
  const closePreview = (e) => {
    if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-btn')) {
      setPreviewImg(null);
    }
  };

  return (
    <>
      <SEO
        title="JustEmma – Automated Content Creator"
        description="A Python-based automated content creator that turns raw text into stunning, animated videos with dynamic voiceovers and AI-generated visuals."
        image={JustEmmaV1}
        url="https://emmanueloyebimpe.vercel.app/projects/just-emma"
      />
      <div className="overall-container">
        <style jsx>{`
          .overall-container {
            width: 100%;
            max-width: 680px;
            display: block;
            margin: 8rem auto 4rem;
            position: relative;
            z-index: 2;
            padding: 0 2rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            color: #333;
            line-height: 1.6;
            background: #fff;
          }
          .project-header {
            margin-bottom: 3rem;
            text-align: left;
          }
          .project-title {
            font-size: 2.75rem;
            font-weight: 700;
            margin: 0 0 1.5rem 0;
            color: #1a1a1a;
            letter-spacing: -0.02em;
          }
          .project-subtitle {
            font-size: 1.1rem;
            color: #666;
            margin: 0 0 2rem 0;
            line-height: 1.7;
            max-width: 90%;
          }
          .content-section {
            margin-bottom: 2.5rem;
          }
          .section-row {
            display: flex;
            align-items: flex-start;
            gap: 2rem;
            margin-bottom: 1.5rem;
          }
          .section-label {
            font-size: 0.95rem;
            font-weight: 600;
            color: #1a1a1a;
            min-width: 120px;
            flex-shrink: 0;
            margin: 0;
          }
          .section-content {
            font-size: 0.95rem;
            color: #666;
            line-height: 1.6;
            margin: 0;
            flex: 1;
          }
          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
          }
          .tech-tag {
            background: #f0f9f0;
            color: #2d5a2d;
            padding: 0.4rem 0.9rem;
            border-radius: 1.2rem;
            font-size: 0.85rem;
            font-weight: 500;
            border: 1px solid #e0f0e0;
          }
          .project-meta {
            display: flex;
            gap: 4rem;
            margin-bottom: 2.5rem;
            flex-wrap: wrap;
          }
          .meta-item {
            display: flex;
            align-items: center;
            gap: 2rem;
          }
          .meta-label {
            font-size: 0.95rem;
            font-weight: 600;
            color: #1a1a1a;
            min-width: 60px;
          }
          .meta-value {
            font-size: 0.95rem;
            color: #666;
          }
          .visit-project-btn {
            background: #1a1a1a;
            color: white;
            padding: 0.85rem 1.8rem;
            border: none;
            border-radius: 0.6rem;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            text-decoration: none;
            margin-bottom: 3rem;
            transition: all 0.2s ease;
          }
          .visit-project-btn:hover {
            background: #333;
            transform: translateY(-1px);
          }
          .external-icon {
            width: 16px;
            height: 16px;
          }
          .project-images {
            width: 100%;
            margin-bottom: 4rem;
          }
          .main-image-container {
            background: #f8f9fa;
            border-radius: 1.2rem;
            overflow: hidden;
            margin-bottom: 1.5rem;
            aspect-ratio: 16/10;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          }
          .main-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 0.8rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          }
          .secondary-images {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          .secondary-image-container {
            background: #f8f9fa;
            border-radius: 1rem;
            overflow: hidden;
            aspect-ratio: 16/10;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          }
          .secondary-image {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 0.6rem;
          }
          .footer-wrapper {
            margin-top: 4rem;
            padding-top: 3rem;
            border-top: 1px solid #e8e8e8;
          }
          .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0,0,0,0.85);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.2s;
          }
          .modal-img {
            max-width: 90vw;
            max-height: 80vh;
            border-radius: 1.2rem;
            box-shadow: 0 8px 32px rgba(0,0,0,0.25);
            background: #fff;
          }
          .close-btn {
            position: absolute;
            top: 2rem;
            right: 2rem;
            background: rgba(0,0,0,0.6);
            color: #fff;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 2rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @media (max-width: 768px) {
            .overall-container {
              padding: 0 1.5rem;
              margin: 6rem auto 3rem;
            }
            .project-title {
              font-size: 2.2rem;
            }
            .section-row {
              flex-direction: column;
              gap: 0.5rem;
            }
            .section-label {
              min-width: auto;
            }
            .project-meta {
              flex-direction: column;
              gap: 1.5rem;
            }
            .meta-item {
              gap: 1rem;
            }
            .secondary-images {
              grid-template-columns: 1fr;
              gap: 1rem;
            }
            .main-image-container,
            .secondary-image-container {
              padding: 1rem;
            }
          }
        `}</style>
        <div className="project-header">
          <h1 className="project-title">JustEmma</h1>
          <p className="project-subtitle">
            Autonomous social media intelligence bot leveraging GPT integration and advanced web scraping. Features Reddit trend analysis, Twitter sentiment monitoring, and intelligent content scheduling using NLP algorithms. Implements job application automation with resume parsing and lead generation through behavioral pattern recognition.
          </p>
        </div>
        <div className="content-section">
          <div className="section-row">
            <h2 className="section-label">Description</h2>
            <p className="section-content">
              Autonomous social media intelligence bot leveraging GPT integration and advanced web scraping. Features Reddit trend analysis, Twitter sentiment monitoring, and intelligent content scheduling using NLP algorithms. Implements job application automation with resume parsing and lead generation through behavioral pattern recognition.
            </p>
          </div>
          <div className="section-row">
            <h2 className="section-label">Technologies</h2>
            <div className="tech-tags">
              <span className="tech-tag">Python</span>
              <span className="tech-tag">Puppeteer</span>
              <span className="tech-tag">Playwright</span>
              <span className="tech-tag">OpenAI GPT</span>
              <span className="tech-tag">NLP.js</span>
              <span className="tech-tag">Twit.js</span>
              <span className="tech-tag">Cheerio</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">MongoDB</span>
            </div>
          </div>
        </div>
        <div className="project-meta">
          <div className="meta-item">
            <div className="meta-label">Date</div>
            <div className="meta-value">2025</div>
          </div>
          <div className="meta-item">
            <div className="meta-label">Type</div>
            <div className="meta-value">AI Content Creator</div>
          </div>
        </div>
        <a href="https://github.com/emmanuel582/Justemma" className="visit-project-btn" target="_blank" rel="noopener noreferrer">
          Visit Project
          <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15,3 21,3 21,9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
        <div className="project-images">
          <div className="main-image-container">
            <img 
              src={JustEmmaV1} 
              alt="JustEmma main interface"
              className="main-image"
              onClick={() => openPreview(JustEmmaV1)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="secondary-images">
            <div className="secondary-image-container">
              <img 
                src={JustEmmaV2} 
                alt="JustEmma alternate view"
                className="secondary-image"
                onClick={() => openPreview(JustEmmaV2)}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="secondary-image-container">
              <img 
                src={JustEmmaV1} 
                alt="JustEmma third view"
                className="secondary-image"
                onClick={() => openPreview(JustEmmaV1)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        </div>
        {previewImg && (
          <div className="modal-overlay" onClick={closePreview}>
            <button className="close-btn" onClick={closePreview} aria-label="Close">&times;</button>
            <img src={previewImg} alt="Preview" className="modal-img" />
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default JustEmma; 