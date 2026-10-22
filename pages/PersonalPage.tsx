import React from 'react';
import PersonalProjects from '../components/AIArchitecture';
import SEO from '../components/SEO';

const PersonalPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f0f0eb]">
      <SEO
        title="Side Lab: progetti personali | Alberto Pasinati"
        description="Progetti personali di Alberto Pasinati: il podcast Liberamente e una dashboard di Business Intelligence open source per il retail."
      />
      <PersonalProjects />
    </div>
  );
};

export default PersonalPage;