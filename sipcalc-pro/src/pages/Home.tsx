import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import { calculators, blogPosts } from '../data/calculators';

export default function Home() {
  return (
    <>
      <SEOMeta
        title="SIPCalc Pro — Free Indian Mutual Fund Calculators (SIP, XIRR, CAGR)"
        description="Free online SIP calculator, XIRR calculator, CAGR calculator, Step-up SIP, and Lumpsum vs SIP tools. Calculate your mutual fund returns instantly."
        canonical="https://sipcalcpro.in/"
      />

      {/* Hero */}
      <section className="hero" aria-labelledby="hero-headline">
        <div className="container">
          <div className="hero__inner fade-up">
            <div className="hero__badge" aria-label="Free tool">
              ✅ 100% Free — No Sign-Up Required
            </div>
            <h1 className="hero__headline" id="hero-headline">
              Calculate. Plan. <span>Grow.</span>
            </h1>
            <p className="hero__sub">
              India's most accurate suite of mutual fund calculators — SIP, XIRR, CAGR, Step-up SIP, and Lumpsum vs SIP. All free, all instant.
            </p>
            <div className="hero__actions">
              <Link to="/sip-calculator" className="btn btn--primary btn--lg">
                Try SIP Calculator →
              </Link>
              <Link to="/blog" className="btn btn--outline btn--lg" style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.35)' }}>
                Learn About Investing
              </Link>
            </div>

            <div className="hero__stats" aria-label="Indian SIP investment statistics">
              <div>
                <div className="hero__stat-value">₹26,000 Cr+</div>
                <div className="hero__stat-label">Monthly SIP inflows in India (2024)</div>
              </div>
              <div>
                <div className="hero__stat-value">10 Cr+</div>
                <div className="hero__stat-label">Active SIP accounts in India</div>
              </div>
              <div>
                <div className="hero__stat-value">12–15%</div>
                <div className="hero__stat-label">Historical 10-yr equity fund CAGR</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculators grid */}
      <section className="calcs-section section" aria-labelledby="calcs-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Free Tools</div>
            <h2 id="calcs-heading">All Calculators</h2>
            <p className="lead">Instant, accurate results. No login, no ads, no BS.</p>
          </div>

          <div className="calc-grid" role="list">
            {calculators.map((c) => (
              <Link
                to={c.path}
                key={c.id}
                className="calc-card"
                role="listitem"
                style={{ '--card-accent': c.color } as React.CSSProperties}
                aria-label={`Open ${c.title}`}
              >
                {c.badge && <div className="calc-card__badge">{c.badge}</div>}
                <div className="calc-card__icon" aria-hidden="true">{c.icon}</div>
                <div className="calc-card__title">{c.title}</div>
                <p className="calc-card__desc">{c.description}</p>
                <div className="calc-card__link" aria-hidden="true">
                  Calculate now →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SIP section */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }} aria-labelledby="why-sip-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Why SIP?</div>
            <h2 id="why-sip-heading">The Case for Systematic Investing</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '🧮',
                title: 'Rupee Cost Averaging',
                desc: 'SIP automatically buys more units when markets are low and fewer when markets are high — eliminating the need to time the market.',
              },
              {
                icon: '⏰',
                title: 'Power of Compounding',
                desc: 'Returns compound on returns. Starting ₹5,000/month at 25 instead of 35 can mean the difference of ₹3 crore at retirement.',
              },
              {
                icon: '🏃',
                title: 'Investing Discipline',
                desc: 'Automated monthly investments remove emotion from the equation. You stay invested through market cycles without making impulsive decisions.',
              },
              {
                icon: '📱',
                title: 'Start Small',
                desc: 'You can start a SIP with as little as ₹500/month. There is no perfect amount — starting small and increasing regularly is the ideal strategy.',
              },
            ].map((item) => (
              <div key={item.title} className="result-card" style={{ gap: 12 }}>
                <div style={{ fontSize: 28 }} aria-hidden="true">{item.icon}</div>
                <h3 style={{ fontSize: 'var(--font-size-lg)', margin: 0 }}>{item.title}</h3>
                <p style={{ fontSize: 'var(--font-size-sm)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Learn</div>
            <h2 id="blog-heading">From the Blog</h2>
            <p className="lead">Understand the concepts behind your investments.</p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link to={post.path} key={post.slug} className="blog-card" aria-label={post.title}>
                <div className="blog-card__tag">{post.tag}</div>
                <div className="blog-card__title">{post.title}</div>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span>📖 {post.readTime}</span>
                  <span>→ Read article</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer strip */}
      <div style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', padding: '16px 0' }}>
        <div className="container">
          <p style={{ margin: 0, fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>
            ⚠️ SIPCalc Pro is for educational purposes only. Mutual fund investments are subject to market risks. Past performance does not guarantee future returns. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </>
  );
}
