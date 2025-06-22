import React from 'react';
import { FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const Footer = () => (
  <div className="footer">
    <style jsx>{`
      .footer {
        text-align: center;
        padding-top: 4rem;
        border-top: 1px solid #eee;
        margin-top: 8rem;
      }
      .footer-text {
        font-size: 0.85rem;
        color: #666;
        margin-top: 2.5rem;
      }
      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 1rem;
      }
      .social-link {
        font-size: 1.8rem;
        transition: transform 0.2s ease-in-out;
      }
      .social-link:hover {
        transform: scale(1.2);
      }
    `}</style>

    <p className="footer-text">Copyright © 2025 Oyebimpe Emmanuel</p>

    <div className="social-links">
      <a
        href="https://www.instagram.com/wealth_consort/"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram color="#E1306C" />
      </a>

      <a
        href="mailto:emmanuelwritecode@gmail.com"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Gmail"
      >
        <SiGmail color="#D14836" />
      </a>

      <a
        href="https://wa.me/2348070709242"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <FaWhatsapp color="#25D366" />
      </a>

      <a
        href="tel:+2348070709242"
        className="social-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Phone"
      >
        <FaPhoneAlt color="#34A853" />
      </a>
    </div>
  </div>
);

export default Footer;
