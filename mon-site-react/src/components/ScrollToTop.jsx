import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Détecter le scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="btn-scroll"
          aria-label="Remonter en haut"
        >
          <i className="bi bi-arrow-up-short"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;