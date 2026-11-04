import React from 'react';

interface SectionTitleProps {
  top: string;
  accent: string;
  size?: 'lg' | 'md';
}

const sizes = {
  lg: 'text-6xl md:text-8xl',
  md: 'text-5xl md:text-7xl',
};

// Titolo di sezione: seconda riga in ambra (5:1 su carta; il giallo brand su chiaro stava a 1,7:1)
const SectionTitle: React.FC<SectionTitleProps> = ({ top, accent, size = 'lg' }) => (
  <h2 className={`${sizes[size]} font-display font-black uppercase leading-[0.85]`}>
    {top}
    <br />
    <span className="text-brand-amber">{accent}</span>
  </h2>
);

export default SectionTitle;
