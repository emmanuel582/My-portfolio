import React, { useState, useEffect } from 'react';

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        window.location.href = '/';
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      color: '#000',
      fontFamily: 'Courier New, monospace',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      {/* Main Content */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          marginTop: '6rem',
          marginBottom: '1rem',
          letterSpacing: '3px'
        }}>
          404
        </h1>
        <div style={{
          fontSize: '1.2rem',
          marginBottom: '2rem',
          fontWeight: 'bold'
        }}>
          DIRECTORY ENUMERATION DETECTED
        </div>
        <div style={{
          fontSize: '1rem',
          color: '#666',
          maxWidth: '500px',
          lineHeight: '1.6'
        }}>
          In cybersecurity, we call this <strong>Directory Enumeration</strong>.<br/>
          In programming, it's called <strong>responsible error handling</strong>.
        </div>
      </div>

      {/* Security Message */}
      <div style={{
        background: '#000',
        color: '#fff',
        padding: '2rem',
        marginBottom: '3rem',
        maxWidth: '600px',
        borderRadius: '4px'
      }}>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          fontStyle: 'italic'
        }}>
          "Secure systems don't just exist, they're designed with defense in depth."
        </p>
      </div>

      {/* Countdown and Navigation */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{
          background: '#000',
          color: '#fff',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          REDIRECT IN: {countdown} SECONDS
        </div>
        
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: '#fff',
              color: '#000',
              border: '2px solid #000',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#000';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#000';
            }}
          >
            ← GO BACK
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            style={{
              background: '#000',
              color: '#fff',
              border: '2px solid #000',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#000';
              e.target.style.color = '#fff';
            }}
          >
            🏠 GO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;