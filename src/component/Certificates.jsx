import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import SEO from './SEO';

// Import certificate images
import certificate1 from '../assets/Certificate1.jpg';
import certificate2 from '../assets/Certificate2.png';
import certificate3 from '../assets/Certificate3.png';
import certificate4 from '../assets/Certificate4.png';
import certificate5 from '../assets/certificate5.png';

const Certificates = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      id: 1,
      name: "Certificate 1",
      image: certificate1,
      description: "Professional certification in web development and security"
    },
    {
      id: 2,
      name: "Certificate 2", 
      image: certificate2,
      description: "Advanced penetration testing certification"
    },
    {
      id: 3,
      name: "Certificate 3",
      image: certificate3,
      description: "Cybersecurity fundamentals certification"
    },
    {
      id: 4,
      name: "Certificate 4",
      image: certificate4,
      description: "Network security and administration"
    },
    {
      id: 5,
      name: "Certificate 5",
      image: certificate5,
      description: "Full-stack development certification"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      <SEO
        title="Certificates & Achievements"
        description="View Oyebimpe Emmanuel's professional certificates and achievements in software development, cybersecurity, and penetration testing."
        url="https://emmanueloyebimpe.vercel.app/certificates"
      />
      <motion.div 
        className="certificates-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <style jsx>{`
          .certificates-container {
            width: 100%;
            max-width: 1200px;
            margin: 8rem auto 4rem;
            padding: 0 2rem;
            min-height: 100vh;
          }

          .certificates-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 3rem;
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

          .certificates-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: #1a1a1a;
            margin: 0;
            font-family: 'Inter', Arial, sans-serif;
          }

          .certificates-subtitle {
            font-size: 1.1rem;
            color: #666;
            margin: 2rem 0;
            text-align: center;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .certificates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .certificate-card {
            background: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
            position: relative;
          }

          .certificate-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }

          .certificate-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-bottom: 1px solid #e0e0e0;
          }

          .certificate-content {
            padding: 1.5rem;
          }

          .certificate-name {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1a1a1a;
            margin: 0 0 0.5rem 0;
          }

          .certificate-description {
            font-size: 0.95rem;
            color: #666;
            line-height: 1.5;
            margin: 0;
          }

          .certificate-icon {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.9);
            border-radius: 50%;
            padding: 0.5rem;
            color: #1a1a1a;
          }

          @media (max-width: 768px) {
            .certificates-container {
              padding: 0 1rem;
              margin: 6rem auto 2rem;
            }

            .certificates-title {
              font-size: 2rem;
            }

            .certificates-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .certificate-image {
              height: 200px;
            }
          }
        `}</style>

        <div className="certificates-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            <ArrowLeft size={20} />
            Back
          </button>
          <h1 className="certificates-title">Certificates & Achievements</h1>
        </div>

        <p className="certificates-subtitle">
          Professional certifications and achievements in software development, cybersecurity, and penetration testing
        </p>

        <motion.div className="certificates-grid" variants={containerVariants}>
          {certificates.map((certificate) => (
            <motion.div 
              key={certificate.id} 
              className="certificate-card"
              variants={itemVariants}
            >
              <Award className="certificate-icon" size={20} />
              <img 
                src={certificate.image} 
                alt={certificate.name}
                className="certificate-image"
              />
              <div className="certificate-content">
                <h3 className="certificate-name">{certificate.name}</h3>
                <p className="certificate-description">{certificate.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Certificates; 