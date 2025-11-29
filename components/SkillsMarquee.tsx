import React from 'react';

const SkillsMarquee: React.FC = () => {
  const skills = [
    "Marketing Strategy",
    "Google Ads",
    "Meta Advertising",
    "TikTok Ads",
    "LinkedIn Ads",
    "Web Analytics",
    "SEO",
    "E-Commerce",
    "Event Marketing",
    "Team Leadership",
    "Budget Planning",
    "Marketing Automation",
    "CRM",
    "Content Marketing",
    "Social Media",
    "Performance Marketing",
    "Brand Positioning",
    "Lead Generation",
    "UX/UI Design",
    "WordPress",
    "Shopify",
    "Email Marketing",
    "Business Intelligence",
    "ROI Optimization"
  ];

  return (
    <section className="py-6 bg-off-white overflow-hidden border-y border-brand-yellow/10">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={i}
              className="mx-6 text-sm md:text-base font-display font-bold text-stone-300 hover:text-brand-yellow transition-colors duration-300 uppercase tracking-wider"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsMarquee;
