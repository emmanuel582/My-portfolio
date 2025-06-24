import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => (
  <div className="footer">
    <style jsx>{`
      .footer {
        text-align: center;
        padding-top: 4rem;
        padding-bottom: 2rem;
        border-top: 1px solid #ddd;
        margin-top: 8rem;
        background: #fff;
        color: #000;
      }

      .footer-nav {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        gap: 2rem;
        flex-wrap: wrap;
      }

      .footer-nav a {
        color: #000;
        text-decoration: none;
        font-weight: 500;
        font-size: 0.95rem;
        transition: opacity 0.2s ease-in-out;
      }

      .footer-nav a:hover {
        opacity: 0.6;
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .social-link {
        font-size: 1.8rem;
        color: #000;
        transition: transform 0.2s ease-in-out;
      }

      .social-link:hover {
        transform: scale(1.2);
      }

      .footer-text {
        font-size: 0.85rem;
        color: #444;
        margin-top: 2.5rem;
      }
    `}</style>

    {/* Navigation Links */}

    {/* Social Icons */}
    <div className="social-links">
      <a
        href="https://www.instagram.com/wealth_consort/"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="mailto:emmanuelwritecode@gmail.com"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Gmail"
      >
        <SiGmail />
      </a>
      <a
        href="https://wa.me/2348070709242"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <a
        href="tel:+2348070709242"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Phone"
      >
        <FaPhoneAlt />
      </a>
    </div>

    <p className="footer-text">© 2025 Oyebimpe Emmanuel. All rights reserved.</p>
  </div>
);

export default Footer;
