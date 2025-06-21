import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import SEO from './SEO';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      rating: 5,
      text: "Emmanuel delivered an exceptional project that exceeded our expectations. His attention to detail and innovative solutions made all the difference.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Startup Founder",
      company: "InnovateLab",
      rating: 5,
      text: "Working with Emmanuel was a game-changer for our startup. His technical expertise and creative problem-solving helped us launch ahead of schedule.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "DesignStudio",
      rating: 5,
      text: "Emmanuel's ability to translate complex requirements into elegant solutions is remarkable. His code is clean, well-documented, and maintainable.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "CTO",
      company: "ScaleUp Inc",
      rating: 5,
      text: "Emmanuel consistently delivers high-quality work. His understanding of both frontend and backend technologies makes him an invaluable team member.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Wang",
      role: "Project Lead",
      company: "Digital Solutions",
      rating: 5,
      text: "Emmanuel's work ethic and technical skills are outstanding. He's not just a developer, but a true problem solver who thinks beyond the code.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Senior Developer",
      company: "CodeCraft",
      rating: 5,
      text: "Emmanuel's innovative approach to development and his ability to learn new technologies quickly makes him stand out in any development team.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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
        url="https://your-domain.com/reviews"
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

          .reviews-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
          }

          .review-card {
            background: #fff;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            border: 1px solid #f0f0f0;
            transition: all 0.3s ease;
          }

          .review-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
          }

          .review-header {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
          }

          .reviewer-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 1rem;
            border: 3px solid #f0f0f0;
          }

          .reviewer-info {
            flex: 1;
          }

          .reviewer-name {
            font-size: 1.1rem;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 0.2rem;
          }

          .reviewer-role {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 0.2rem;
          }

          .reviewer-company {
            font-size: 0.85rem;
            color: #888;
            font-weight: 500;
          }

          .rating {
            display: flex;
            gap: 0.2rem;
            margin-bottom: 1rem;
          }

          .star {
            color: #ffd700;
            font-size: 1.1rem;
          }

          .review-text {
            font-size: 1rem;
            line-height: 1.6;
            color: #444;
            font-style: italic;
          }

          .stats-section {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            padding: 3rem 2rem;
            text-align: center;
            color: white;
            margin-bottom: 4rem;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
          }

          .stat-label {
            font-size: 1rem;
            opacity: 0.9;
          }

          @media (max-width: 768px) {
            .reviews-container {
              padding: 0 1rem;
              margin: 6rem auto 2rem;
            }

            .reviews-title {
              font-size: 2.2rem;
            }

            .reviews-grid {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            .review-card {
              padding: 1.5rem;
            }

            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 1.5rem;
            }
          }
        `}</style>

        <motion.div className="reviews-header" variants={itemVariants}>
          <h1 className="reviews-title">Client Reviews</h1>
          <p className="reviews-subtitle">
            Hear what clients and colleagues have to say about working with me. 
            These testimonials reflect the quality and dedication I bring to every project.
          </p>
        </motion.div>

        <motion.div className="stats-section" variants={itemVariants}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Trusted by Teams Worldwide</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5.0</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </motion.div>

        <motion.div className="reviews-grid">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              className="review-card"
              variants={itemVariants}
            >
              <div className="review-header">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="reviewer-avatar"
                />
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="reviewer-role">{review.role}</div>
                  <div className="reviewer-company">{review.company}</div>
                </div>
              </div>
              <div className="rating">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="review-text">"{review.text}"</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Reviews; 