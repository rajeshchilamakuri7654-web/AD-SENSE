import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div>
            <div className="footer__brand-name">
              <span>📈</span> SIPCalc Pro
            </div>
            <p className="footer__tagline">
              India's most accurate suite of mutual fund calculators — free, fast, and built for every investor.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <div className="footer__col-title">Calculators</div>
            <ul className="footer__links">
              <li><Link to="/sip-calculator">SIP Calculator</Link></li>
              <li><Link to="/lumpsum-vs-sip">Lumpsum vs SIP</Link></li>
              <li><Link to="/step-up-sip-calculator">Step-Up SIP</Link></li>
              <li><Link to="/xirr-calculator">XIRR Calculator</Link></li>
              <li><Link to="/cagr-calculator">CAGR Calculator</Link></li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <div className="footer__col-title">Learn</div>
            <ul className="footer__links">
              <li><Link to="/blog">All Articles</Link></li>
              <li><Link to="/blog/what-is-sip">What is SIP?</Link></li>
              <li><Link to="/blog/sip-vs-lumpsum">SIP vs Lumpsum</Link></li>
              <li><Link to="/blog/xirr-vs-cagr">XIRR vs CAGR</Link></li>
              <li><Link to="/blog/power-of-compounding">Power of Compounding</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="footer__col-title">Company</div>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact#disclaimer">Disclaimer</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__disclaimer">
            <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Disclaimer:</strong>{' '}
            All calculators on SIPCalc Pro are for illustrative and educational purposes only. 
            Calculations are based on assumed rates of return and do not guarantee future results. 
            Mutual fund investments are subject to market risks. Past performance is not indicative of future returns. 
            SIPCalc Pro is not a registered investment advisor. Please consult a SEBI-registered financial advisor before making investment decisions.
          </p>
          <p className="footer__copy">© {year} SIPCalc Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
