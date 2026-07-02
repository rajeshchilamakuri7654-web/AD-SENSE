import SEOMeta from '../components/SEOMeta';

export default function About() {
  return (
    <>
      <SEOMeta
        title="About SIPCalc Pro — Free Indian Mutual Fund Calculators"
        description="Learn about SIPCalc Pro — our mission to make accurate mutual fund calculation tools freely available to every Indian investor."
        canonical="https://sipcalcpro.in/about"
      />
      <div className="container">
        <div className="static-page">
          <h1>About SIPCalc Pro</h1>
          <p className="lead">
            We built SIPCalc Pro with a simple mission: give every Indian investor access to accurate, professional-grade financial calculators — completely free, forever.
          </p>

          <p>
            Investing in mutual funds is one of the most powerful ways to build long-term wealth in India. Yet many investors make decisions without truly understanding the math behind their investments. Platforms either hide these tools behind sign-up walls, or offer simplified versions that gloss over important nuances like XIRR, step-up compounding, and the real cost of delaying investment.
          </p>

          <h2>Our Tools</h2>
          <p>
            Every calculator on SIPCalc Pro is built on exact financial mathematics — not approximations. Our SIP calculator uses the precise future value formula for recurring payments. Our XIRR tool uses Newton-Raphson iteration to match the same algorithm used by AMFI and major fund platforms. Our CAGR calculator follows the standard international definition.
          </p>

          <h2>Who We Are</h2>
          <p>
            SIPCalc Pro is an independent financial tools platform created for Indian retail investors. We are not affiliated with any mutual fund house, brokerage, or AMFI-registered distributor. We do not sell financial products or earn commissions on any investment you make.
          </p>

          <h2>Data & Privacy</h2>
          <p>
            All calculations happen in your browser — we do not store any financial data you enter. No sign-up is required to use any calculator. We use basic analytics to understand which tools are most popular, but we never track personally identifiable information.
          </p>

          <h2>Advertising</h2>
          <p>
            SIPCalc Pro may display advertisements via Google AdSense to cover operational costs. These advertisements are clearly labelled and do not influence the content or calculation methodology of our tools.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have feedback, found a bug, or want to suggest a new calculator?{' '}
            <a href="/contact" style={{ color: 'var(--color-accent)' }}>Get in touch</a> — we read every message.
          </p>

          <div className="disclaimer-box">
            <p>
              <strong>⚠️ Important Disclaimer:</strong> SIPCalc Pro provides financial calculators for educational and illustrative purposes only. Nothing on this website constitutes investment advice, recommendation to buy or sell, or financial planning advice. All projected returns are hypothetical and based on assumed constant rates. Actual returns may vary significantly. Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully and consult a SEBI-registered investment advisor before making investment decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
