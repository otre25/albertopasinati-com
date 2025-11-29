import React from 'react';

const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-yellow focus:text-deep-black focus:px-6 focus:py-3 focus:rounded-sm focus:font-bold focus:shadow-xl focus:outline-none focus:ring-4 focus:ring-brand-yellow/50 transition-all"
    >
      Vai al contenuto principale
    </a>
  );
};

export default SkipLink;
