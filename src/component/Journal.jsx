import React from 'react';
import SEO from './SEO';

function Journal() {
  return (
    <>
      <SEO 
        title="Journal - My Portfolio" 
        description="Thoughts, tutorials and insights about software development"
      />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#fff',
        color: '#000',
        fontFamily: 'Inter, Arial, sans-serif',
        textAlign: 'center',
        width: '100%'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          marginTop: 0
        }}>
          Journal
        </h1>
        <div style={{
          fontSize: '1.15rem',
          color: '#666',
          marginBottom: '4rem',
          fontWeight: 400
        }}>
          Thoughts, tutorials and insights about software development
        </div>
        <div style={{
          fontSize: '1.1rem',
          color: '#888',
          marginTop: '2rem'
        }}>
          No articles available yet
        </div>
      </div>
    </>
  );
}

export default Journal; 