import React from 'react';
import Resume from '../assets/Resume.pdf';

const ProfessionalTimeline = () => {
    const handleDownloadResume = () => {
        // Create a link element
        const link = document.createElement('a');
        link.href = Resume;
        link.download = 'Oyebimpe_Emmanuel_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const experiences = [
      {
        title: "Full-Stack Developer & Ethical Hacker",
        company: "Active Freelancer",
        period: "January 2024 – Present",
        location: "Remote",
        responsibilities: [
          "Identified and disclosed critical vulnerabilities on major platforms, enhancing user trust and platform resilience.",
          "Engineered secure, scalable applications tailored for emerging markets, especially Africa.",
          "Redesigned user flows and UI logic, boosting platform efficiency and conversion by 15%+"
        ],
        technologies: [
          "React", "Next.js", "Node.js", "BurpSuite", "Golang",
          "MongoDB", "PostgreSQL"
        ]
      },
      {
        title: "Senior Frontend Developer",
        company: "NextTrendAi",
        period: "January 2023 – Present",
        location: "Remote",
        responsibilities: [
          "Built and scaled the frontend of an upcoming African creator analytics platform designed to help video creators track content trends, SEO performance, and audience insights.",
          "Engineered responsive dashboards for early testers, supporting 10,000+ preview users across mobile and web platforms.",
          "Collaborated with product and AI teams to visualize performance metrics, trending topics, and keyword rankings tailored to the African digital landscape.",
          "Improved user engagement by simplifying onboarding and designing intuitive interfaces for creators with varying technical experience."
        ],
        technologies: ["React", "TypeScript", "Golang", "Tailwind CSS", "Chart.js"]
      },
      {
        title: "Full-Stack Developer",
        company: "Saint Isabel",
        period: "January 2025 – Present",
        location: "Nigeria",
        responsibilities: [
          "Built end-to-end educational platforms connecting students with digital tools effortlessly.",
          "Created robust RESTful APIs to seamlessly power front-end systems.",
          "Enhanced system performance, reducing load times by 40% and elevating user satisfaction metrics."
        ],
        technologies: ["Node.js", "React", "MongoDB"]
      },
      {
        title: "IT Support & Security Specialist",
        company: "Sharma Security Team",
        period: "June 2024 – August 2024",
        location: "Remote",
        responsibilities: [
          "Resolved 150+ support tickets within SLA for system and network-related issues.",
          "Diagnosed security vulnerabilities and performed basic audits, escalating critical threats.",
          "Collaborated on endpoint protection rollouts and documented internal network security protocols."
        ],
        technologies: ["Linux", "Windows Server", "Wireshark", "Nmap"]
      },
      {
        title: "Medical Data Researcher & Frontend Developer",
        company: "UI Research Lab",
        period: "January 2024 – Present",
        location: "Remote",
        responsibilities: [
          "Analyzed vast medical datasets to build visual insights for healthcare professionals.",
          "Developed user-centric dashboards making complex data accessible to non-technical medical teams.",
          "Automated data classification using React and Python, reducing manual sorting time by 60%."
        ],
        technologies: ["Python", "Pandas", "React", "Chart.js", "REST APIs"]
      },
      {
        title: "Frontend Developer Intern",
        company: "ALX Africa",
        period: "January 2024 – September 2024",
        location: "Remote",
        responsibilities: [
          "Delivered modern, clean interfaces for university platforms with intuitive navigation.",
          "Designed responsive UI components for desktop and mobile, increasing platform usability.",
          "Implemented accessibility-focused features, setting new internal UX benchmarks."
        ],
        technologies: ["JavaScript", "React", "REST APIs"]
      }
    ];
    
      

  return (
    <div style={{
      backgroundColor: 'white',
      minHeight: '100vh',
      padding: '60px 40px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        {/* Professional Experience Header */}
        <div style={{
          marginBottom: '40px'
        }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: 'black',
            margin: '0 0 10px 0'
          }}>Professional Experience</h2>
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: 'black',
            marginBottom: '10px'
          }}></div>
          <p style={{
            color: '#666',
            fontSize: '16px',
            margin: 0
          }}>A Real overview of my professional journey</p>
        </div>

        {/* Timeline */}
        <div style={{
          position: 'relative'
        }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: '0',
            bottom: '0',
            width: '2px',
            backgroundColor: '#e5e7eb'
          }}></div>

          {experiences.map((experience, index) => (
            <div key={index} style={{
              position: 'relative',
              marginBottom: '50px',
              paddingLeft: '60px'
            }}>
              {/* Timeline dot */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '8px',
                width: '16px',
                height: '16px',
                backgroundColor: 'black',
                borderRadius: '50%',
                border: '3px solid white',
                boxShadow: '0 0 0 2px #e5e7eb'
              }}></div>

              {/* Content */}
              <div style={{
                backgroundColor: '#eef4ff',
                borderRadius: '12px',
                padding: '24px',
                border: '1px solid #e5e7eb'
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: 'black',
                      margin: '0 0 4px 0'
                    }}>{experience.title}</h3>
                    <p style={{
                      color: '#666',
                      fontSize: '16px',
                      margin: 0
                    }}>{experience.company}</p>
                  </div>
                  <div style={{
                    textAlign: 'right'
                  }}>
                    <p style={{
                      color: '#666',
                      fontSize: '14px',
                      margin: '0 0 4px 0'
                    }}>{experience.period}</p>
                    <p style={{
                      color: '#666',
                      fontSize: '14px',
                      margin: 0
                    }}>{experience.location}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 20px 0'
                }}>
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} style={{
                      color: '#333',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      marginBottom: '8px',
                      paddingLeft: '16px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        top: '8px',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#666',
                        borderRadius: '50%'
                      }}></span>
                      {responsibility}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {experience.technologies.map((tech, idx) => (
                    <span key={idx} style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      color: '#333',
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '500',
                      border: '1px solid rgba(0, 0, 0, 0.1)'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Button */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <button style={{
            backgroundColor: 'black',
            color: 'white',
            padding: '12px 30px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease'
          }}
          onClick={handleDownloadResume}
          >
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTimeline;