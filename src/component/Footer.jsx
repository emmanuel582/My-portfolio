import React from 'react';

const Footer = () => (
  <div className="footer">
    <style jsx>{`
      .footer {
        text-align: center;
        padding-top: 4rem;
        border-top: 1px solid #eee;
        margin-top:8rem;
        
      }
      .footer-text {
        font-size: 0.85rem;
        color: #666;
        margin-top: 2.5rem;
  
      }
      .social-links {
        display: flex;
        justify-content: center;
        gap: 1rem;
      }
      .social-link {
        color: #666;
        text-decoration: none;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .social-link:hover {
        color: #000;
      }
      .social-icon {
        width: 22px;
        height: 22px;
      }
    `}</style>
    <p className="footer-text">Copyright © 2025 Oyebimpe Emmanuel</p>
    <div className="social-links">
      <a href="https://www.instagram.com/wealth_consort/" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5zM12 7.25A4.75 4.75 0 1 0 12 16.75 4.75 4.75 0 0 0 12 7.25zm0 1.5A3.25 3.25 0 1 1 12 15.25 3.25 3.25 0 0 1 12 8.75zm5.25-2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>
      </a>
    
      <a href="mailto:emmanuelwritecode@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
        <svg className="social-icon" viewBox="0 0 48 48" fill="currentColor"><rect width="48" height="48" rx="24" fill="#fff"/><path d="M9.6 16.8V31.2C9.6 32.1941 10.4059 33 11.4 33H36.6C37.5941 33 38.4 32.1941 38.4 31.2V16.8C38.4 15.8059 37.5941 15 36.6 15H11.4C10.4059 15 9.6 15.8059 9.6 16.8Z" fill="#EA4335"/><path d="M38.4 16.8V31.2C38.4 32.1941 37.5941 33 36.6 33H11.4C10.4059 33 9.6 32.1941 9.6 31.2V16.8C9.6 15.8059 10.4059 15 11.4 15H36.6C37.5941 15 38.4 15.8059 38.4 16.8Z" fill="#fff"/><path d="M24 27.6L38.4 16.8V31.2C38.4 32.1941 37.5941 33 36.6 33H11.4C10.4059 33 9.6 32.1941 9.6 31.2V16.8L24 27.6Z" fill="#34A853"/><path d="M24 27.6L9.6 16.8V31.2C9.6 32.1941 10.4059 33 11.4 33H36.6C37.5941 33 38.4 32.1941 38.4 31.2V16.8L24 27.6Z" fill="#FBBC05"/><path d="M24 27.6L38.4 16.8V16.8C38.4 15.8059 37.5941 15 36.6 15H11.4C10.4059 15 9.6 15.8059 9.6 16.8V16.8L24 27.6Z" fill="#EA4335"/><path d="M24 27.6L9.6 16.8V16.8C9.6 15.8059 10.4059 15 11.4 15H36.6C37.5941 15 38.4 15.8059 38.4 16.8V16.8L24 27.6Z" fill="#4285F4"/></svg>
      </a>
      <a href="https://wa.me/2348070709242" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg className="social-icon" viewBox="0 0 32 32" fill="currentColor"><rect width="32" height="32" rx="16" fill="#25D366"/><path d="M16 6C10.477 6 6 10.477 6 16C6 17.657 6.527 19.197 7.464 20.464L6 26L11.536 24.536C12.803 25.473 14.343 26 16 26C21.523 26 26 21.523 26 16C26 10.477 21.523 6 16 6ZM16 24C14.686 24 13.423 23.578 12.364 22.828L12.121 22.657L8.707 23.293L9.343 19.879L9.172 19.636C8.422 18.577 8 17.314 8 16C8 11.589 11.589 8 16 8C20.411 8 24 11.589 24 16C24 20.411 20.411 24 16 24ZM19.293 17.293C19.105 17.105 18.852 17 18.586 17C18.32 17 18.067 17.105 17.879 17.293L16 19.172L14.121 17.293C13.933 17.105 13.68 17 13.414 17C13.148 17 12.895 17.105 12.707 17.293C12.316 17.684 12.316 18.316 12.707 18.707L15.293 21.293C15.488 21.488 15.744 21.585 16 21.585C16.256 21.585 16.512 21.488 16.707 21.293L19.293 18.707C19.684 18.316 19.684 17.684 19.293 17.293Z" fill="#fff"/></svg>
      </a>
      <a href="tel:+2348070709242" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="Phone">
        <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.59.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.26.2 2.47.57 3.59.11.32.03.67-.24 1.01l-2.2 2.19z"/></svg>
      </a>
    </div>
  </div>
);

export default Footer; 