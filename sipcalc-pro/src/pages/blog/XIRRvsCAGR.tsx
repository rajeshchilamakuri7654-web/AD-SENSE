import { Link } from 'react-router-dom';
import SEOMeta from '../../components/SEOMeta';

export default function XIRRvsCAGR() {
  return (
    <>
      <SEOMeta
        title="XIRR vs CAGR: What's the Difference? | SIPCalc Pro"
        description="Understand the key difference between XIRR and CAGR for mutual fund returns. Learn when to use each metric and why your SIP statement shows XIRR, not CAGR."
        canonical="https://sipcalcpro.in/blog/xirr-vs-cagr"
      />
      <div className="section">
        <div className="container">
          <article className="blog-article">
            <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 24, display: 'flex', gap: 6 }}>
              <Link to="/" style={{ color: 'var(--color-accent)' }}>Home</Link>
              <span>›</span>
              <Link to="/blog" style={{ color: 'var(--color-accent)' }}>Blog</Link>
              <span>›</span>
              <span>XIRR vs CAGR</span>
            </nav>

            <div className="blog-card__tag">Advanced</div>
            <h1>XIRR vs CAGR: Understanding the Difference</h1>
            <div className="blog-meta">
              <span>📖 6 min read</span>
              <span>·</span>
              <span>Last updated: July 2025</span>
            </div>

            <div className="callout">
              <p>Your mutual fund statement shows XIRR, not CAGR. This is deliberate — and understanding why will make you a much better investor.</p>
            </div>

            <h2>What is CAGR?</h2>
            <p>
              CAGR (Compound Annual Growth Rate) measures the rate at which a <strong>single investment</strong> has grown from one value to another over a period of years.
            </p>
            <div className="formula-box">
              CAGR = [(Final Value / Initial Value)^(1/Years) − 1] × 100
            </div>
            <p>
              CAGR assumes one investment at the start, and one redemption at the end. It's perfect for comparing how a ₹1 lakh lumpsum investment has grown, or comparing two mutual funds' 5-year performance.
            </p>

            <h2>What is XIRR?</h2>
            <p>
              XIRR (Extended Internal Rate of Return) is a generalisation of CAGR that handles <strong>multiple cash flows at different dates</strong>. It finds the annual discount rate that makes the net present value of all your cash flows equal zero.
            </p>
            <div className="formula-box">
              NPV(r) = Σ [ Cᵢ / (1 + r)^(dᵢ/365) ] = 0
              <br /><br />
              Solved iteratively using Newton-Raphson method
            </div>
            <p>
              XIRR accounts for the exact date and amount of every investment and redemption, making it the only accurate way to measure returns on a SIP portfolio.
            </p>

            <h2>Why CAGR Doesn't Work for SIPs</h2>
            <p>
              Imagine you invested ₹10,000 per month for 3 years (total ₹3,60,000) and your portfolio is now worth ₹4,50,000. What's your return?
            </p>
            <ul>
              <li><strong>Naive absolute return:</strong> (4,50,000 − 3,60,000) / 3,60,000 = 25% — but this ignores when you invested.</li>
              <li><strong>CAGR (incorrect):</strong> if you calculate CAGR using the final month's investment date and today, you get a wildly inaccurate number because you're treating a 3-year SIP as a 1-month investment.</li>
              <li><strong>XIRR (correct):</strong> each of the 36 monthly investments is dated precisely. XIRR finds the rate that makes all these flows value out to ₹4,50,000 — giving a true annualised return, e.g., 14.3% p.a.</li>
            </ul>

            <h2>A Concrete Example</h2>
            <p>
              Suppose you made 3 investments and one redemption:
            </p>
            <ul>
              <li>1 Jan 2021: −₹1,00,000 (investment)</li>
              <li>1 Jan 2022: −₹1,00,000 (investment)</li>
              <li>1 Jan 2023: −₹1,00,000 (investment)</li>
              <li>15 Jun 2024: +₹4,00,000 (redemption)</li>
            </ul>
            <p>
              Total invested: ₹3 lakh. Total received: ₹4 lakh. Absolute profit: ₹1 lakh (33%). But the <strong>XIRR is approximately 13.5% p.a.</strong> — a very different number that correctly accounts for the timing of each cash flow.
            </p>

            <h2>When to Use CAGR vs XIRR</h2>
            <ul>
              <li><strong>Use CAGR for:</strong> Comparing mutual fund 1yr/3yr/5yr performance, lumpsum investments, evaluating fund manager skill</li>
              <li><strong>Use XIRR for:</strong> Your personal SIP portfolio returns, portfolios with irregular investments, any scenario with multiple buy/sell transactions</li>
            </ul>

            <h2>Why Your Fund Statement Shows XIRR</h2>
            <p>
              AMFI (Association of Mutual Funds in India) mandates that consolidated account statements (CAS) show XIRR as the return metric. This is because virtually all retail investors use SIPs or make multiple investments over time — and XIRR is the only metric that accurately captures returns for such portfolios.
            </p>

            <div className="callout">
              <p>🔢 Calculate your portfolio's XIRR instantly using our <Link to="/xirr-calculator" style={{ color: 'var(--color-accent)', fontWeight: 700 }}>XIRR Calculator</Link>. Enter your investment dates and amounts — we use the same Newton-Raphson algorithm that your fund platform uses.</p>
            </div>

            <h2>Conclusion</h2>
            <p>
              Both CAGR and XIRR are valuable tools — for different purposes. Always use XIRR to evaluate your personal investment portfolio returns, especially if you invest via SIP. Use CAGR to compare the published performance of mutual fund schemes on a level playing field.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
