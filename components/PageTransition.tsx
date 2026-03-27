import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayKey, setDisplayKey] = useState(location.key);

  useEffect(() => {
    // Fade out
    setIsVisible(false);

    const timer = setTimeout(() => {
      setDisplayKey(location.key);
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div
      key={displayKey}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'opacity 0.25s ease-out, transform 0.25s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
