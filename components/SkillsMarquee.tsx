import React from 'react';

const row1 = [
  "Marketing Strategy", "Google Ads", "Meta Advertising", "TikTok Ads",
  "LinkedIn Ads", "Web Analytics", "SEO", "E-Commerce",
  "Event Marketing", "Team Leadership", "Budget Planning", "Marketing Automation",
];

const row2 = [
  "CRM", "Content Marketing", "Social Media", "Performance Marketing",
  "Brand Positioning", "Lead Generation", "UX/UI Design", "WordPress",
  "Shopify", "Email Marketing", "Business Intelligence", "ROI Optimization",
];

const MarqueeRow: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className="relative overflow-hidden">
    <div
      className="flex whitespace-nowrap"
      style={{ animation: `marquee${reverse ? 'Reverse' : ''} 30s linear infinite` }}
    >
      {[...items, ...items].map((skill, i) => (
        <div
          key={i}
          className="mx-5 text-sm md:text-base font-display font-bold text-stone-300 hover:text-brand-yellow transition-colors duration-300 uppercase tracking-wider flex items-center gap-5"
        >
          {skill}
          <span className="text-brand-yellow/40 text-xs">◆</span>
        </div>
      ))}
    </div>
  </div>
);

const SkillsMarquee: React.FC = () => (
  <section className="py-5 bg-off-white overflow-hidden border-y border-brand-yellow/10 space-y-3">
    <style>{`
      @keyframes marqueeReverse {
        0%   { transform: translateX(-50%); }
        100% { transform: translateX(0%); }
      }
    `}</style>
    <MarqueeRow items={row1} />
    <MarqueeRow items={row2} reverse />
  </section>
);

export default SkillsMarquee;
