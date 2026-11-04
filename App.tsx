import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import NotFoundPage from './pages/NotFoundPage';

const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const PersonalPage = lazy(() => import('./pages/PersonalPage'));

// Data router: serve per le View Transitions native (prop unstable_viewTransition sui Link).
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
      <Route
        path="portfolio/:slug"
        element={
          <Suspense fallback={<div className="min-h-screen bg-deep-black" />}>
            <ProjectPage />
          </Suspense>
        }
      />
      <Route
        path="lab"
        element={
          <Suspense fallback={<div className="min-h-screen bg-off-white" />}>
            <PersonalPage />
          </Suspense>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
