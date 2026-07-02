import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';

// Static imports for server rendering to avoid lazy fallbacks
import Home from './pages/Home';
import SIPCalculator from './pages/SIPCalculator';
import LumpsumVsSIP from './pages/LumpsumVsSIP';
import StepUpSIP from './pages/StepUpSIP';
import XIRRCalculator from './pages/XIRRCalculator';
import CAGRCalculator from './pages/CAGRCalculator';
import About from './pages/About';
import Contact from './pages/Contact';
import BlogIndex from './pages/blog/BlogIndex';
import WhatIsSIP from './pages/blog/WhatIsSIP';
import SIPvsLumpsum from './pages/blog/SIPvsLumpsum';
import XIRRvsCAGR from './pages/blog/XIRRvsCAGR';
import PowerOfCompounding from './pages/blog/PowerOfCompounding';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

export default function AppServer() {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
