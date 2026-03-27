import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTransition from './components/PageTransition';

const ProjectPage = lazy(() => import('./pages/ProjectPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="privacy-policy" element={<PageTransition><PrivacyPolicyPage /></PageTransition>} />
          <Route
            path="portfolio/:slug"
            element={
              <Suspense fallback={<div className="min-h-screen bg-deep-black" />}>
                <PageTransition>
                  <ProjectPage />
                </PageTransition>
              </Suspense>
            }
          />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;