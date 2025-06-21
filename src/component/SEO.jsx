import React from 'react';
import { Helmet } from 'react-helmet-async';
import profileImage from '../assets/Avatar.jpg';

const SEO = ({ title, description, name, type = 'website', image, url }) => {
  const defaultDescription = "I'm Oyebimpe Emmanuel, a software and robotics engineer specializing in creating high-performance web applications and intelligent systems. Explore my projects and get in touch.";
  const siteName = "Oyebimpe Emmanuel's Portfolio";
  const defaultImage = `https://your-domain.com${profileImage}`; // Replace with your actual domain
  const siteUrl = url || 'https://your-domain.com'; // Replace with your actual domain

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@your-twitter-handle" />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO; 