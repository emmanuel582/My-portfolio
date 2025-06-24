import React from 'react';
import { motion } from 'framer-motion';
import SEO from './SEO';
import Footer from './Footer';

function Journal() {
  return (
    <>
      <SEO 
        title="Journal - My Portfolio" 
        description="My achievements, certificates, and professional journey"
      />
      
      <div className="overallcontainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ paddingTop: '6rem' }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#000',
            marginBottom: '2rem',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif'
          }}>
            📝 My Journal
          </h1>
          
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            textAlign: 'center',
            marginBottom: '3rem',
            lineHeight: '1.6',
            fontFamily: 'Inter, sans-serif'
          }}>
            A collection of my achievements, certifications, and professional milestones
          </p>

          {/* Certificates Section */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '2rem',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif'
            }}>
              🏆 Certificates & Achievements
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              {/* Certificate 1 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/src/assets/Certificate1.jpg" 
                  alt="Certificate 1"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Web Development Certification
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Advanced web development and modern frameworks
                </p>
              </motion.div>

              {/* Certificate 2 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/src/assets/Certificate2.png" 
                  alt="Certificate 2"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Cybersecurity Specialist
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Penetration testing and security analysis
                </p>
              </motion.div>

              {/* Certificate 3 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/src/assets/Certificate3.png" 
                  alt="Certificate 3"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Full Stack Development
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Complete web application development
                </p>
              </motion.div>

              {/* Certificate 4 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/src/assets/Certificate4.png" 
                  alt="Certificate 4"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Ethical Hacking
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Advanced penetration testing methodologies
                </p>
              </motion.div>

              {/* Certificate 5 */}
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textAlign: 'center'
                }}
              >
                <img 
                  src="/src/assets/certificate5.png" 
                  alt="Certificate 5"
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    marginBottom: '1rem'
                  }}
                />
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#000',
                  marginBottom: '0.5rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Cloud Security
                </h3>
                <p style={{
                  color: '#666',
                  fontSize: '0.9rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  AWS and cloud infrastructure security
                </p>
              </motion.div>
            </div>
          </section>

          {/* Achievements Section */}
          <section>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '2rem',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif'
            }}>
              🎯 Key Achievements
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {/* Achievement 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#000',
                  color: '#fff',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  🏆
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Bug Bounty Success
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Successfully identified and reported critical security vulnerabilities in major platforms, earning recognition and rewards for responsible disclosure.
                </p>
              </motion.div>

              {/* Achievement 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#000',
                  color: '#fff',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  🔒
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Security Research
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Published research on emerging cybersecurity threats and contributed to open-source security tools used by the community.
                </p>
              </motion.div>

              {/* Achievement 3 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#000',
                  color: '#fff',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  💻
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Open Source Contributions
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Active contributor to security-focused open-source projects, helping improve tools and frameworks used by security professionals worldwide.
                </p>
              </motion.div>

              {/* Achievement 4 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: '#000',
                  color: '#fff',
                  padding: '2rem',
                  borderRadius: '16px',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  🎓
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Industry Recognition
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  Recognized by industry leaders for expertise in penetration testing and security assessment methodologies.
                </p>
              </motion.div>
            </div>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </>
  );
}

export default Journal; 