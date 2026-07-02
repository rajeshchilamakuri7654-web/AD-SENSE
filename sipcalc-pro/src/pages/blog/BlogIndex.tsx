import { Link } from 'react-router-dom';
import SEOMeta from '../../components/SEOMeta';
import { blogPosts } from '../../data/calculators';

export default function BlogIndex() {
  return (
    <>
      <SEOMeta
        title="Mutual Fund Investment Blog — SIP, XIRR, CAGR Explained | SIPCalc Pro"
        description="Read beginner-friendly articles on SIP investing, XIRR vs CAGR, lumpsum vs SIP, and the power of compounding. Learn to invest smarter."
        canonical="https://sipcalcpro.in/blog"
      />
      <div className="section">
        <div className="container">
          <header style={{ marginBottom: 'var(--space-2xl)' }}>
            <div className="section-tag">Investment Knowledge</div>
            <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-sm)' }}>
              From the Blog
            </h1>
            <p className="lead">
              Clear, jargon-free articles to help you understand your mutual fund investments.
            </p>
          </header>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link to={post.path} key={post.slug} className="blog-card">
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

          <div style={{ marginTop: 'var(--space-3xl)', padding: 'var(--space-xl)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-sm)' }}>
              Ready to Calculate?
            </h2>
            <p style={{ marginBottom: 'var(--space-lg)' }}>
              Use our free calculators to put theory into practice.
            </p>
            <Link to="/sip-calculator" className="btn btn--primary btn--lg">
              Open SIP Calculator →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
