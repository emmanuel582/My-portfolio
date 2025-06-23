import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Resume from '../assets/Resume.pdf';
import Header from './Header';

const ResumeView = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <div className="resume-view-container">
        <style jsx>{`
          .resume-view-container {
            width: 100%;
            max-width: 1200px;
            margin: 8rem auto 4rem;
            padding: 0 2rem;
            min-height: 100vh;
          }

          .resume-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;
            padding: 1rem 0;
          }

          .back-button {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: #000;
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 500;
            transition: all 0.3s ease;
            text-decoration: none;
          }

          .back-button:hover {
            background: #333;
            transform: translateY(-2px);
          }

          .resume-title {
            font-size: 2rem;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
          }

          .resume-iframe {
            width: 100%;
            height: 80vh;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          .download-section {
            margin-top: 2rem;
            text-align: center;
          }

          .download-button {
            background: #000;
            color: white;
            border: none;
            padding: 1rem 2rem;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
          }

          .download-button:hover {
            background: #333;
            transform: translateY(-2px);
          }

          @media (max-width: 768px) {
            .resume-view-container {
              padding: 0 1rem;
              margin: 6rem auto 2rem;
            }

            .resume-iframe {
              height: 70vh;
            }

            .resume-title {
              font-size: 1.5rem;
            }
          }
        `}</style>

        <div className="resume-header">
          <button className="back-button" onClick={handleBack}>
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="resume-title">Resume</h1>
        </div>

        <iframe
          src={Resume}
          className="resume-iframe"
          title="Oyebimpe Emmanuel Resume"
        />

        <div className="download-section">
          <a 
            href={Resume} 
            download="Oyebimpe_Emmanuel_Resume.pdf"
            className="download-button"
          >
            Download PDF
          </a>
        </div>
      </div>
    </>
  );
};

export default ResumeView; 