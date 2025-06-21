import React, { useState } from 'react';
import Footer from '../component/Footer';
import SEO from '../component/SEO';
import AmazeVisualsV1 from '../assets/ProjectAsset/AmazeVisualsV1.png';

const FinalClue = () => {
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
        title="FinalClue Forensic Analysis Tool"
        description="A forensic analysis CLI tool that uses deep learning for mortality prediction with 94% accuracy, featuring NLP for autopsy report analysis."
        image={AmazeVisualsV1}
        url="https://your-domain.com/projects/final-clue"
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
            background: rgba(255,255,255,0.9);
            border: none;
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            font-size: 1.5rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #333;
            transition: all 0.2s ease;
          }
          .close-btn:hover {
            background: white;
            transform: scale(1.1);
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @media (max-width: 768px) {
            .overall-container {
              padding: 0 1rem;
              margin: 6rem auto 2rem;
            }
            .project-title {
              font-size: 2.2rem;
            }
            .project-meta {
              gap: 2rem;
            }
            .section-row {
              flex-direction: column;
              gap: 0.5rem;
            }
            .secondary-images {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <div className="project-header">
          <h1 className="project-title">FinalClue</h1>
          <p className="project-subtitle">
            Forensic analysis CLI tool trained on extensive medical datasets using TensorFlow and scikit-learn. Implements deep learning models for mortality prediction with 94% accuracy, featuring natural language processing for autopsy report analysis and computer vision for medical imaging interpretation. Revolutionary tool for forensic investigations.
          </p>
        </div>

        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-label">Role:</span>
            <span className="meta-value">Full Stack Developer</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Duration:</span>
            <span className="meta-value">6 months</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Team:</span>
            <span className="meta-value">Solo Project</span>
          </div>
        </div>

        <div className="content-section">
          <div className="section-row">
            <h3 className="section-label">Overview</h3>
            <p className="section-content">
              FinalClue is a revolutionary forensic analysis tool that leverages advanced machine learning algorithms to assist in medical investigations. The system processes autopsy reports, medical imaging, and patient data to provide accurate mortality predictions and forensic insights.
            </p>
          </div>
          
          <div className="section-row">
            <h3 className="section-label">Key Features</h3>
            <div className="section-content">
              <ul>
                <li>Deep learning models with 94% mortality prediction accuracy</li>
                <li>Natural language processing for autopsy report analysis</li>
                <li>Computer vision for medical imaging interpretation</li>
                <li>CLI interface for forensic investigators</li>
                <li>Comprehensive data visualization and reporting</li>
              </ul>
            </div>
          </div>

          <div className="section-row">
            <h3 className="section-label">Tech Stack</h3>
            <div className="section-content">
              <div className="tech-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">scikit-learn</span>
                <span className="tech-tag">NLTK</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">CLI</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">Matplotlib</span>
                <span className="tech-tag">Seaborn</span>
              </div>
            </div>
          </div>
        </div>

        <a href="#" className="visit-project-btn" target="_blank" rel="noopener noreferrer">
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
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop" 
              alt="FinalClue main interface"
              className="main-image"
              onClick={() => openPreview("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop")}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className="secondary-images">
            <div className="secondary-image-container">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop" 
                alt="FinalClue alternate view"
                className="secondary-image"
                onClick={() => openPreview("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop")}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="secondary-image-container">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop" 
                alt="FinalClue third view"
                className="secondary-image"
                onClick={() => openPreview("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop")}
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
      </div>
      <Footer />
    </>
  );
};

export default FinalClue;
