import { useState, useEffect } from 'react';
import '../styles/backtotop.css';  

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
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
    isVisible && (
      <button
        onClick={scrollToTop}
        className="back-to-top-button"
      >
        ↑
      </button>
    )
  );
};

export default BackToTop;
