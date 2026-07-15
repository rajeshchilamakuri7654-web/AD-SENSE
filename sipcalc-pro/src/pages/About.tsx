import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <SEOMeta
        title="About SIPCalc Pro — Built by a BTech Student for Indian Investors"
        description="SIPCalc Pro was built by a BTech student who wanted accurate, free mutual fund calculators without sign-up walls. Learn the story, tools, and philosophy behind the site."
        canonical="https://sipcalcpro.in/about"
      />
      <div className="container">
        <div className="static-page">
          <h1>About SIPCalc Pro</h1>
          <p className="lead">
            SIPCalc Pro is a free, ad-supported suite of mutual fund calculators built by a BTech student who got tired of inaccurate, paywalled, and bloated financial tools.
          </p>

          <h2>The Story</h2>
          <p>
            I'm an engineering student pursuing my B.Tech degree in India. Like most people my age who read about personal finance, I started trying to understand SIPs — how the math actually works, what compounding really does to money over time, and whether the projections mutual fund apps show are accurate.
          </p>
          <p>
            What I found frustrated me. Most SIP calculators online were either too simplified (just showing a final number with no breakdown), hidden behind sign-up walls, or mathematically off — using approximations instead of the correct annuity formula. The platforms that did have good calculators buried them inside apps that wanted me to open a demat account first.
          </p>
          <p>
            So I built SIPCalc Pro. It started as a personal project to verify my own SIP calculations, and grew into a full suite of tools after I realised other investors had the same frustrations.
          </p>

          <h2>What Makes SIPCalc Pro Different</h2>
          <p>
            Every calculator on this site is built from scratch using standard financial mathematics — not approximations or rounded formulas:
          </p>
          <ul>
            <li>
              <strong>SIP Calculator:</strong> Uses the exact future value formula for an annuity-due: <code>FV = P × [((1 + r)ⁿ − 1) / r] × (1 + r)</code>. This matches the results you'd get from Excel's FV() function or AMFI's own SIP illustrations.
            </li>
            <li>
              <strong>XIRR Calculator:</strong> Uses Newton-Raphson iterative numerical solving — the same algorithm that Excel XIRR and AMFI's CAS statements use. Not an approximation.
            </li>
            <li>
              <strong>Step-Up SIP Calculator:</strong> Correctly calculates each year's higher contribution as a separate sub-SIP running for the remaining term, then sums all sub-SIPs — giving you the true compounding of incremental contributions.
            </li>
            <li>
              <strong>CAGR Calculator:</strong> Standard international definition: <code>(Final Value / Initial Value)^(1/Years) − 1</code>.
            </li>
            <li>
              <strong>Lumpsum vs SIP Comparison:</strong> Side-by-side comparison using the same capital, return rate, and duration so you can see the real difference between strategies.
            </li>
          </ul>
          <p>
            All calculations run entirely in your browser. No data is sent to a server. No sign-up required.
          </p>

          <h2>The Learning Content</h2>
          <p>
            Beyond calculators, I've written a growing library of financial education articles — explaining concepts like XIRR vs CAGR, the power of compounding, why step-up SIPs work, and the common mistakes investors make. These aren't marketing articles; they're the explanations I wished I had found when I was starting.
          </p>
          <p>
            Every article is written to be genuinely useful, with real formulas, worked examples, and plain-language explanations. No fluff, no filler.
          </p>

          <h2>Who Is This For?</h2>
          <p>
            SIPCalc Pro is built for:
          </p>
          <ul>
            <li><strong>First-time investors</strong> who want to understand the math before committing money</li>
            <li><strong>Salaried professionals</strong> who want to quickly check how a SIP amount change affects their retirement corpus</li>
            <li><strong>Students and young earners</strong> just starting their investment journey with small amounts</li>
            <li><strong>Experienced investors</strong> who want an accurate XIRR calculator for their portfolio review</li>
          </ul>
          <p>
            In short: anyone who wants honest, accurate financial calculations without a sales funnel attached.
          </p>

          <h2>Independence &amp; Transparency</h2>
          <p>
            SIPCalc Pro is completely independent. I am not affiliated with any mutual fund house, brokerage, AMFI-registered distributor, or financial advisory firm. I do not earn commissions from any investment you make. I do not recommend specific funds.
          </p>
          <p>
            The site is funded by Google AdSense advertisements. These ads are clearly labelled, do not influence any calculator's methodology, and do not affect which content gets written. Ads are the trade-off that keeps the tools free.
          </p>

          <h2>Privacy &amp; Data</h2>
          <p>
            All financial inputs you enter into the calculators are processed entirely in your browser. Nothing you type is transmitted to any server — I never see your investment amounts, return rates, or portfolio values. I use Google Analytics for aggregated traffic insights only (which pages are popular, how users navigate). See the full <Link to="/privacy-policy" style={{ color: 'var(--color-accent)' }}>Privacy Policy</Link> for details.
          </p>

          <h2>Feedback &amp; Contact</h2>
          <p>
            Found a bug in a calculation? Have a feature suggestion? Want to point out an error in an article? I read every message and take accuracy seriously. <Link to="/contact" style={{ color: 'var(--color-accent)' }}>Get in touch</Link> — improvements have come from user feedback.
          </p>

          <div className="disclaimer-box">
            <p>
              <strong>⚠️ Important Disclaimer:</strong> SIPCalc Pro provides financial calculators for educational and illustrative purposes only. Nothing on this website constitutes investment advice, a recommendation to buy or sell any security, or financial planning guidance. All projected returns are hypothetical and based on assumed constant rates. Actual returns will vary. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully and consult a SEBI-registered investment advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
