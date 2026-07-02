import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';

// Lazy-load all pages for optimal performance
const Home = lazy(() => import('./pages/Home'));
const SIPCalculator = lazy(() => import('./pages/SIPCalculator'));
const LumpsumVsSIP = lazy(() => import('./pages/LumpsumVsSIP'));
const StepUpSIP = lazy(() => import('./pages/StepUpSIP'));
const XIRRCalculator = lazy(() => import('./pages/XIRRCalculator'));
const CAGRCalculator = lazy(() => import('./pages/CAGRCalculator'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'));
const WhatIsSIP = lazy(() => import('./pages/blog/WhatIsSIP'));
const SIPvsLumpsum = lazy(() => import('./pages/blog/SIPvsLumpsum'));
const XIRRvsCAGR = lazy(() => import('./pages/blog/XIRRvsCAGR'));
const PowerOfCompounding = lazy(() => import('./pages/blog/PowerOfCompounding'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="page-loader__spinner" />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/sip-calculator" element={<SIPCalculator />} />
              <Route path="/lumpsum-vs-sip" element={<LumpsumVsSIP />} />
              <Route path="/step-up-sip-calculator" element={<StepUpSIP />} />
              <Route path="/xirr-calculator" element={<XIRRCalculator />} />
              <Route path="/cagr-calculator" element={<CAGRCalculator />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/what-is-sip" element={<WhatIsSIP />} />
              <Route path="/blog/sip-vs-lumpsum" element={<SIPvsLumpsum />} />
              <Route path="/blog/xirr-vs-cagr" element={<XIRRvsCAGR />} />
              <Route path="/blog/power-of-compounding" element={<PowerOfCompounding />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
