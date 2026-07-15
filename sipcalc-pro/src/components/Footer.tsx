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
              <li><Link to="/what-is-sip">What is SIP?</Link></li>
              <li><Link to="/sip-vs-lumpsum">SIP vs Lump Sum</Link></li>
              <li><Link to="/blog/how-sip-returns-are-calculated">How SIP Returns Work</Link></li>
              <li><Link to="/blog/step-up-sip">Step-Up SIP Guide</Link></li>
              <li><Link to="/blog/common-sip-mistakes">Common SIP Mistakes</Link></li>
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
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--space-lg)' }}>
          <p className="footer__disclaimer" style={{ color: 'var(--color-text-muted)', fontSize: 'var(--font-size-xs)', textAlign: 'center', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto var(--space-md)' }}>
            <strong>Disclaimer:</strong> The SIP, Step-Up SIP, CAGR, XIRR, and Lumpsum vs SIP calculators provided on this platform are for educational and informational purposes only. They do not constitute financial, investment, or legal advice. All calculations are based on hypothetical annual return rates and do not guarantee future stock market or mutual fund performance. Always consult with a certified financial advisor before making any investment decisions.
          </p>
          <p className="footer__copy" style={{ textAlign: 'center' }}>© {year} SIPCalc Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
