import React from 'react';

const TechStack = () => {
    const technologies = [
        {
          name: 'HTML',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          category: 'Frontend'
        },
        {
          name: 'CSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          category: 'Frontend'
        },
        {
          name: 'JavaScript',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          category: 'Frontend'
        },
        {
          name: 'React',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          category: 'Frontend'
        },
        {
          name: 'Next.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          category: 'Frontend'
        },
        {
          name: 'Bootstrap',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
          category: 'Frontend'
        },
        {
          name: 'Tailwind CSS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          category: 'Frontend'
        },
        {
          name: 'Framer Motion',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg',
          category: 'Frontend'
        },
        {
          name: 'React Native',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          category: 'Mobile'
        },
        {
          name: 'Node.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          category: 'Backend'
        },
        {
          name: 'Express.js',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          category: 'Backend'
        },
        {
          name: 'Python',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          category: 'Backend'
        },
        {
          name: 'Go',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
          category: 'Backend'
        },
        {
          name: 'MongoDB',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          category: 'Database'
        },
        {
          name: 'Firebase',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          category: 'Cloud'
        },
        {
          name: 'AWS',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          category: 'Cloud'
        },
        {
          name: 'WordPress',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
          category: 'CMS'
        },
        {
          name: 'Git',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          category: 'Tools'
        },
        {
          name: 'GitHub',
          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          category: 'Tools'
        }
      ];
      const categories = ['Frontend', 'Backend', 'Mobile', 'Database', 'Cloud', 'CMS', 'Tools'];

  const getTechsByCategory = (category) => {
    return technologies.filter(tech => tech.category === category);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Technologies I Use</h1>
        <div style={styles.titleUnderline}></div>
      </div>
      
      <div style={styles.content}>
        {categories.map(category => (
          <div key={category} style={styles.categorySection}>
            <h2 style={styles.categoryTitle}>{category}</h2>
            <div style={styles.techGrid}>
              {getTechsByCategory(category).map(tech => (
                <div key={tech.name} className="tech-card" style={styles.techCard}>
                  <div style={styles.iconContainer}>
                    <img 
                      src={tech.icon} 
                      alt={tech.name}
                      className="tech-icon"
                      style={styles.techIcon}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div style={{...styles.fallbackIcon, display: 'none'}}>
                      {tech.name.charAt(0)}
                    </div>
                  </div>
                  <span style={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    minHeight: '100vh',
    padding: '40px 20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '50px'
  },
  title: {
    fontSize: '3rem',
    fontWeight: '700',
    color: 'black',
    margin: '0 0 10px 0',
  },
  titleUnderline: {
    width: '100px',
    height: '4px',
    backgroundColor: 'black',
    margin: '0 auto',
    borderRadius: '2px'
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  categorySection: {
    marginBottom: '50px'
  },
  categoryTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '20px',
    paddingLeft: '15px',
    borderLeft: '4px solid black'
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '20px',
    padding: '0 10px'
  },
  techCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px 8px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    border: '2px solid #f3f4f6',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden'
  },
  iconContainer: {
    position: 'relative',
    marginBottom: '12px'
  },
  techIcon: {
    width: '20px',
    height: '20px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease'
  },
  fallbackIcon: {
    width: '20px',
    height: '20px',
    backgroundColor: 'black',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'white'
  },
  techName: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: '#374151',
    textAlign: 'center',
    lineHeight: '1.2'
  }
};

export default TechStack;