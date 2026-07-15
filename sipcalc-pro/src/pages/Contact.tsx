import { useState } from 'react';
import SEOMeta from '../components/SEOMeta';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const subject = encodeURIComponent((form.elements.namedItem('subject') as HTMLInputElement).value || 'SIPCalc Pro Feedback');
    const name = encodeURIComponent((form.elements.namedItem('name') as HTMLInputElement).value || '');
    const message = encodeURIComponent((form.elements.namedItem('message') as HTMLTextAreaElement).value || '');
    const body = encodeURIComponent(`Name: ${decodeURIComponent(name)}\n\n${decodeURIComponent(message)}`);
    window.location.href = `mailto:hello@sipcalcpro.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <SEOMeta
        title="Contact SIPCalc Pro — Send Feedback or Report a Bug"
        description="Contact SIPCalc Pro for feedback, bug reports, calculation queries, or feature suggestions. We read every message and typically respond within 48 hours."
        canonical="https://sipcalcpro.in/contact"
      />
      <div className="container">
        <div className="static-page">
          <h1>Contact Us</h1>
          <p className="lead">
            Found a bug? Have a suggestion? Want to report an error in an article? We'd genuinely like to hear from you — this site improves because of user feedback.
          </p>

          <div className="contact-grid">
            <div className="contact-box">
              <div className="contact-box__icon">📧</div>
              <h3>Email Directly</h3>
              <p style={{ fontSize: 14 }}>
                For anything that's not covered by the form below, or if you prefer plain email:
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
              <div className="contact-box__icon">⏱️</div>
              <h3>Response Time</h3>
              <p style={{ fontSize: 14 }}>
                SIPCalc Pro is built and maintained by one person. We aim to respond to all messages within 48 hours. Verified calculation bugs are fixed with priority, usually within 24 hours.
              </p>
            </div>
          </div>

          <h2 style={{ marginTop: 'var(--space-2xl)' }}>Send a Message</h2>
          <p style={{ marginBottom: 'var(--space-lg)' }}>
            Use the form below for quick feedback, bug reports, or suggestions. It will open your email client with the details pre-filled.
          </p>

          {submitted ? (
            <div className="callout" style={{ marginBottom: 'var(--space-xl)' }}>
              <p>✅ Your email client should have opened. If it didn't, please email us directly at <a href="mailto:hello@sipcalcpro.in" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>hello@sipcalcpro.in</a>.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{ maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}
              aria-label="Contact form"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="contact-name" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Arjun Sharma"
                  required
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    background: 'var(--color-bg-secondary)',
                    color: 'var(--color-text)',
                    fontSize: 15,
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="contact-subject" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                  Subject
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    background: 'var(--color-bg-secondary)',
                    color: 'var(--color-text)',
                    fontSize: 15,
                    outline: 'none',
                  }}
                >
                  <option value="">Select a topic…</option>
                  <option value="Bug Report: Calculator giving wrong results">Bug report — calculator giving wrong results</option>
                  <option value="Feature Suggestion for SIPCalc Pro">Feature suggestion</option>
                  <option value="Article Feedback">Article feedback or correction</option>
                  <option value="General Feedback">General feedback</option>
                  <option value="Other Inquiry">Other</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label htmlFor="contact-message" style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)' }}>
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Describe your question, bug, or suggestion. For bug reports, please include the input values you used and the result you expected."
                  required
                  style={{
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    background: 'var(--color-bg-secondary)',
                    color: 'var(--color-text)',
                    fontSize: 15,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                style={{ alignSelf: 'flex-start', padding: '12px 32px' }}
              >
                Send Message →
              </button>
              <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                This will open your email client. Your message is never stored on our servers.
              </p>
            </form>
          )}

          <h2 id="disclaimer" style={{ marginTop: 'var(--space-3xl)' }}>Disclaimer</h2>
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
