import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  { icon: <Facebook size={24} color="#111" />, url: 'https://www.facebook.com/yung.invest.r.639606', label: 'Facebook' },
  { icon: <FaWhatsapp size={24} color="#111" />, url: 'https://wa.me/2348070709242', label: 'WhatsApp' },
  { icon: <Instagram size={24} color="#111" />, url: 'https://www.instagram.com/wealth_consort/', label: 'Instagram' },
  { icon: <Phone size={24} color="#111" />, url: 'tel:+2348070709242', label: 'Phone' },
  { icon: <Mail size={24} color="#111" />, url: 'mailto:emmanuelwritecode@gmail.com', label: 'Email' },
];

export default function Contact() {
  return (
    <section className="contact-section" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.ctaTitle}>Start a project <span role="img" aria-label="rocket">🚀</span></h2>
        <p style={styles.subtitle}>
          Interested in making waves together? Let's connect and create something amazing.
        </p>
        <button style={styles.ctaButton} onClick={() => window.location = 'mailto:emmanuelwritecode@gmail.com'}>
          Let's Work Together
        </button>
        <div style={styles.underline}></div>
        <div style={styles.sectionLine}></div>
        <div style={styles.socialRow}>
          {socialLinks.map((item, idx) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              style={styles.socialIcon}
              className="contact-social-icon"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div style={styles.footerWrap}>
        <div style={styles.footerLine}></div>
        <div style={styles.footerText}>
          <span>© 2025 · Designed & Built with <span style={{color:'#111'}}>♥</span> by Oyebimpe Emmanuel</span>
          <div style={styles.footerSub}>Inspired by Oyebimpe Emmanuel</div>
        </div>
      </div>
      <style>{`
        .contact-social-icon {
          transition: transform 0.22s cubic-bezier(.4,2,.6,1), background 0.22s, color 0.22s;
          background: #111;
          color: #fff !important;
          border-color: #111;
        }
        .contact-social-icon svg {
          color: #111 !important;
        }
        .contact-social-icon:hover {
          transform: scale(1.18) translateY(-4px);
          background: #fff;
          color: #111 !important;
          border-color: #111;
        }
        .contact-social-icon:hover svg {
          color: #111 !important;
        }
        .contact-social-icon:hover .fa-whatsapp {
          color: #25D366 !important;
        }
      `}</style>
    </section>
  );
}

const styles = {
  section: {
    background: '#fff',
    color: '#111',
    padding: '60px 0 0 0',
    minHeight: '60vh',
    fontFamily: 'Inter, Arial, sans-serif',
    textAlign: 'center',
    position: 'relative',
    width: '100%',
  },
  container: {
    maxWidth: 700,
    margin: '0 auto',
    padding: '0 16px',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: 16,
    letterSpacing: 0.5,
    color: '#111',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#222',
    marginBottom: 24,
    marginTop: 0,
  },
  ctaButton: {
    background: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: 12,
    padding: '14px 36px',
    fontSize: '1.1rem',
    fontWeight: 600,
    margin: '0 auto 32px auto',
    cursor: 'pointer',
    transition: 'background 0.2s, color 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    display: 'block',
  },
  underline: {
    width: 120,
    height: 4,
    background: '#111',
    margin: '0 auto 32px auto',
    borderRadius: 2,
  },
  sectionLine: {
    width: '100%',
    height: 1,
    background: 'rgba(0,0,0,0.07)',
    margin: '0 auto 36px auto',
  },
  socialRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: 32,
    marginBottom: 40,
    flexWrap: 'wrap',
  },
  socialIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: '50%',
    border: '2px solid #111',
    color: '#111',
    background: '#fff',
    fontSize: 24,
    margin: 0,
    textDecoration: 'none',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    cursor: 'pointer',
  },
  footerWrap: {
    marginTop: 32,
    padding: '32px 0 0 0',
  },
  footerLine: {
    width: '80%',
    height: 1,
    background: '#111',
    margin: '0 auto 24px auto',
  },
  footerText: {
    color: '#111',
    fontSize: 16,
    fontWeight: 500,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
  },
  footerSub: {
    fontSize: 14,
    color: '#222',
    marginTop: 4,
  },
}; 