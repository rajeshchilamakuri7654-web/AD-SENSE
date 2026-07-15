import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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
const HowSIPReturnsCalculated = lazy(() => import('./pages/blog/HowSIPReturnsCalculated'));
const StepUpSIPGuide = lazy(() => import('./pages/blog/StepUpSIPGuide'));
const CommonSIPMistakes = lazy(() => import('./pages/blog/CommonSIPMistakes'));
const WhatIsSIPPage = lazy(() => import('./pages/WhatIsSIPPage'));
const SIPvsLumpsumPage = lazy(() => import('./pages/SIPvsLumpsumPage'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
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
            <Route path="/blog/how-sip-returns-are-calculated" element={<HowSIPReturnsCalculated />} />
            <Route path="/blog/step-up-sip" element={<StepUpSIPGuide />} />
            <Route path="/blog/common-sip-mistakes" element={<CommonSIPMistakes />} />
            <Route path="/what-is-sip" element={<WhatIsSIPPage />} />
            <Route path="/sip-vs-lumpsum" element={<SIPvsLumpsumPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}
