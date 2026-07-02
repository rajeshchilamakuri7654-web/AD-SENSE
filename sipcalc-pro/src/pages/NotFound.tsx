import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';

export default function NotFound() {
  return (
    <>
      <SEOMeta
        title="Page Not Found — SIPCalc Pro"
        description="The page you were looking for doesn't exist. Browse our free SIP, XIRR, CAGR, and Step-up SIP calculators."
        canonical="https://sipcalcpro.in/404"
      />
      <div className="not-found-page">
        <div className="container">
          <div className="not-found-inner">
            <div className="not-found-code" aria-hidden="true">404</div>
            <h1>Page Not Found</h1>
            <p className="lead">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--space-xl)' }}>
              <Link to="/" className="btn btn--primary btn--lg">
                ← Back to Home
              </Link>
              <Link to="/sip-calculator" className="btn btn--outline btn--lg">
                Open SIP Calculator
              </Link>
            </div>

            <div style={{ marginTop: 'var(--space-2xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, maxWidth: 640, margin: 'var(--space-2xl) auto 0' }}>
              {[
                { to: '/sip-calculator', label: '📊 SIP Calculator' },
                { to: '/lumpsum-vs-sip', label: '⚖️ Lumpsum vs SIP' },
                { to: '/step-up-sip-calculator', label: '🪜 Step-Up SIP' },
                { to: '/xirr-calculator', label: '🔢 XIRR Calculator' },
                { to: '/cagr-calculator', label: '📈 CAGR Calculator' },
                { to: '/blog', label: '📝 Blog' },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="result-card"
                  style={{ textAlign: 'center', textDecoration: 'none', fontSize: 'var(--font-size-sm)', color: 'var(--color-text)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
