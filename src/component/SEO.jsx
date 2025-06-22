import { useEffect } from 'react';

const SEO = ({ title, description, image, url }) => {
  useEffect(() => {
    // Update document title
    document.title = title || 'Oyebimpe Emmanuel - Software & Penetration Tester';

    // Update or create meta tags
    const updateMetaTag = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update meta tags
    updateMetaTag('description', description || 'Software and Penetration Tester specializing in innovative solutions and cutting-edge technology.');
    updateMetaTag('keywords', 'Software Engineer, Penetration Tester, React, JavaScript, Python, Web Development, Mobile Development');
    updateMetaTag('author', 'Oyebimpe Emmanuel');
    updateMetaTag('robots', 'index, follow');

    // Open Graph tags
    updatePropertyTag('og:title', title || 'Oyebimpe Emmanuel - Software & Penetration Tester');
    updatePropertyTag('og:description', description || 'Software and Penetration Tester specializing in innovative solutions and cutting-edge technology.');
    updatePropertyTag('og:image', image || '/src/assets/Avatar.jpg');
    updatePropertyTag('og:url', url || window.location.href);
    updatePropertyTag('og:type', 'website');

    // Twitter Card tags
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:title', title || 'Oyebimpe Emmanuel - Software & Penetration Tester');
    updatePropertyTag('twitter:description', description || 'Software and Penetration Tester specializing in innovative solutions and cutting-edge technology.');
    updatePropertyTag('twitter:image', image || '/src/assets/Avatar.jpg');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url || window.location.href;

  }, [title, description, image, url]);

  return null;
};

export default SEO; 