import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import SEO from './SEO';

const Reviews = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
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
        title="Reviews & Testimonials"
        description="Read what clients and colleagues are saying about Oyebimpe Emmanuel's work in software engineering, web development, and robotics."
        url="https://emmanueloyebimpe.vercel.app/reviews"
      />
      <motion.div 
        className="reviews-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <style jsx>{`
          .reviews-container {
            width: 100%;
            max-width: 1200px;
            margin: 8rem auto 4rem;
            padding: 0 2rem;
            min-height: 100vh;
            text-decoration: none;
          }

          .reviews-header {
            text-align: center;
            margin-bottom: 4rem;
            text-decoration: none;
          }

          .reviews-title {
            font-size: 3rem;
            font-weight: 700;
            color: #1a1a1a;
            margin-bottom: 1rem;
            font-family: 'Inter', Arial, sans-serif;
            text-decoration: none;
          }

          .reviews-subtitle {
            font-size: 1.2rem;
            color: #666;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
            text-decoration: none;
          }

          @media (max-width: 768px) {
            .reviews-container {
              padding: 0 1rem;
              margin: 6rem auto 2rem;
            }

            .reviews-title {
              font-size: 2.2rem;
            }
          }
        `}</style>

        <motion.div className="reviews-header" variants={itemVariants}>
          <h1 className="reviews-title">Reviews</h1>
          <p className="reviews-subtitle">
            Incoming
          </p>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Reviews; 