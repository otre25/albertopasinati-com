import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Manifesto from './Manifesto';
import ScrollToTop from './ScrollToTop';
import SkipLink from './SkipLink';
import CookieBanner from './CookieBanner';
import Analytics from './Analytics';
import MicrosoftClarity from './MicrosoftClarity';
import ScrollProgressBar from './ScrollProgressBar';
import CustomCursor from './CustomCursor';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Analytics />
      <MicrosoftClarity />
      <CustomCursor />
      <SkipLink />
      <ScrollToTop />
      <ScrollProgressBar />
      <Header />
      <main id="main-content" className="flex-grow pt-20" tabIndex={-1}>
        <Outlet />
      </main>
      <Manifesto />
      <CookieBanner />
    </div>
  );
};

export default Layout;