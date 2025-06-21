// Custom Cursor Handler
class CustomCursor {
    constructor() {
      this.cursor = null;
      this.isMoving = false;
      this.mouseX = 0;
      this.mouseY = 0;
      this.currentX = 0;
      this.currentY = 0;
      
      this.init();
    }
  
    init() {
      // Only initialize on desktop
      if (window.innerWidth <= 768) return;
      
      this.createCursor();
      this.bindEvents();
      this.animate();
    }
  
    createCursor() {
      this.cursor = document.createElement('div');
      this.cursor.className = 'custom-cursor';
      document.body.appendChild(this.cursor);
    }
  
    bindEvents() {
      document.addEventListener('mousemove', (e) => {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.isMoving = true;
      });
  
      document.addEventListener('mouseenter', () => {
        this.cursor.style.opacity = '0.8';
      });
  
      document.addEventListener('mouseleave', () => {
        this.cursor.style.opacity = '0';
      });
  
      // Add hover effects for interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], .nav-item, .carousel-item, .hire-btn');
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          this.cursor.classList.add('hover');
        });
        
        el.addEventListener('mouseleave', () => {
          this.cursor.classList.remove('hover');
        });
      });
  
      // Add click effect
      document.addEventListener('mousedown', () => {
        this.cursor.classList.add('click');
      });
  
      document.addEventListener('mouseup', () => {
        this.cursor.classList.remove('click');
      });
  
      // Handle window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth <= 768) {
          if (this.cursor) {
            this.cursor.style.display = 'none';
          }
        } else {
          if (this.cursor) {
            this.cursor.style.display = 'block';
          }
        }
      });
    }
  
    animate() {
      // Smooth cursor movement with easing
      const ease = 0.15;
      
      this.currentX += (this.mouseX - this.currentX) * ease;
      this.currentY += (this.mouseY - this.currentY) * ease;
      
      if (this.cursor) {
        this.cursor.style.left = this.currentX + 'px';
        this.cursor.style.top = this.currentY + 'px';
      }
      
      requestAnimationFrame(() => this.animate());
    }
  }
  
  // Smooth Scrolling Enhancement
  class SmoothScroll {
    constructor() {
      this.init();
    }
  
    init() {
      // Enhanced smooth scrolling for better performance
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // Add smooth scroll to anchor links
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a[href^="#"]');
        if (target) {
          e.preventDefault();
          const targetId = target.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        }
      });
  
      // Add momentum scrolling for iOS
      document.body.style.webkitOverflowScrolling = 'touch';
    }
  }
  
  // Initialize when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new CustomCursor();
    new SmoothScroll();
  });
  
  // Re-initialize cursor on dynamic content changes
  export const reinitializeCursor = () => {
    if (window.innerWidth > 768) {
      const existingCursor = document.querySelector('.custom-cursor');
      if (existingCursor) {
        existingCursor.remove();
      }
      new CustomCursor();
    }
  };