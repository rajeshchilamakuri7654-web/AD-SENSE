import SEOMeta from '../components/SEOMeta';

export default function Contact() {
  return (
    <>
      <SEOMeta
        title="Contact & Disclaimer — SIPCalc Pro"
        description="Contact SIPCalc Pro for feedback, bug reports, or general inquiries. Read our full disclaimer on financial data use."
        canonical="https://sipcalcpro.in/contact"
      />
      <div className="container">
        <div className="static-page">
          <h1>Contact & Disclaimer</h1>
          <p className="lead">
            We'd love to hear from you — whether it's feedback, a bug report, or a feature request.
          </p>

          <div className="contact-grid">
            <div className="contact-box">
              <div className="contact-box__icon">📧</div>
              <h3>Email Us</h3>
              <p style={{ fontSize: 14 }}>
                For feedback, bug reports, or business inquiries:
              </p>
              <a
                href="mailto:hello@sipcalcpro.in"
                className="btn btn--outline"
                style={{ marginTop: 12, display: 'inline-flex' }}
              >
                hello@sipcalcpro.in
              </a>
            </div>

            <div className="contact-box">
              <div className="contact-box__icon">🐛</div>
              <h3>Found a Bug?</h3>
              <p style={{ fontSize: 14 }}>
                If a calculator is producing incorrect results, please share the input values and expected output. We fix verified bugs within 24 hours.
              </p>
            </div>
          </div>

          <h2 id="disclaimer">Full Disclaimer</h2>

          <p>
            The information, tools, and calculators provided on SIPCalc Pro (<strong>sipcalcpro.in</strong>) are intended solely for educational and informational purposes. They are designed to help users understand financial concepts and estimate potential outcomes based on user-defined assumptions.
          </p>

          <h2>No Investment Advice</h2>
          <p>
            Nothing on this website constitutes, or should be construed as, investment advice, financial planning, or a recommendation to buy, hold, or sell any financial instrument, including mutual funds. SIPCalc Pro is not a SEBI-registered investment advisor, research analyst, or financial planner.
          </p>

          <h2>Accuracy of Calculations</h2>
          <p>
            While we make every effort to ensure our calculators use accurate financial formulas, all results are based on hypothetical, assumed constant rates of return. Actual investment returns are subject to market fluctuations and cannot be predicted. The calculations assume full investment at specified amounts with no interruptions, partial withdrawals, or fund-level charges (expense ratios, exit loads), which will reduce actual returns.
          </p>

          <h2>Market Risk Warning</h2>
          <p>
            Mutual fund investments are subject to market risks. Past performance of any fund or calculator-assumed rate of return is not indicative of future results. The value of investments can go up or down. Investors may receive less than they invested. Before investing, read all scheme-related documents including the Scheme Information Document (SID) and Key Information Memorandum (KIM).
          </p>

          <h2>Third-Party Services</h2>
          <p>
            This website may display advertisements from Google AdSense. We may also use Google Analytics for aggregated, anonymised traffic analysis. These services have their own privacy policies. No personally identifiable financial information entered into our calculators is transmitted to any third party.
          </p>

          <div className="disclaimer-box">
            <p>
              <strong>By using SIPCalc Pro, you acknowledge that:</strong> All calculator outputs are for illustrative purposes only. You will not make investment decisions based solely on this website. You understand that mutual fund investments carry market risk. You agree to consult a qualified, SEBI-registered financial advisor for personalised investment advice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
