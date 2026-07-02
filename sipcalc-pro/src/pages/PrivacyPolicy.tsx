import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {

  return (
    <>
      <SEOMeta
        title="Privacy Policy — SIPCalc Pro"
        description="Read SIPCalc Pro's privacy policy. Learn how we handle data, use cookies, and integrate Google AdSense and Analytics."
        canonical="https://sipcalcpro.in/privacy-policy"
      />
      <div className="container">
        <div className="static-page">
          <h1>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 'var(--space-xl)' }}>
            Last updated: July 2025
          </p>
          <p className="lead">
            SIPCalc Pro ("we", "our", or "us") respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Enter</h3>
          <p>
            When you use our calculators, you enter financial data such as investment amounts, return rates, and durations. <strong>This data is processed entirely in your browser and is never transmitted to our servers.</strong> We do not store, log, or have any access to the numbers you type into our calculators.
          </p>

          <h3>1.2 Automatically Collected Information</h3>
          <p>We automatically collect certain non-personally identifiable information when you visit the site, including:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website URLs</li>
            <li>Pages visited and time spent on each page</li>
            <li>Geographic region (country/city level only)</li>
            <li>Device type (desktop, mobile, tablet)</li>
          </ul>
          <p>
            This information is collected via third-party analytics services (see Section 3) and is aggregated and anonymised — we cannot identify you personally from this data.
          </p>

          <h2>2. Cookies</h2>
          <p>
            SIPCalc Pro uses cookies and similar tracking technologies to enhance your experience. Here is what we use:
          </p>

          <h3>2.1 Functional Cookies (First-Party)</h3>
          <p>
            We store a single preference in your browser's <code>localStorage</code>:
          </p>
          <ul>
            <li><strong>theme</strong>: Remembers whether you prefer dark mode or light mode. This is stored locally on your device and never transmitted to any server.</li>
          </ul>

          <h3>2.2 Analytics Cookies (Third-Party)</h3>
          <p>
            We use <strong>Google Analytics</strong> to understand how visitors interact with our site. Google Analytics uses cookies to collect anonymised data about page views, session duration, and navigation patterns. This data is aggregated and does not identify individual users.
          </p>
          <p>
            You can opt out of Google Analytics tracking by installing the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h3>2.3 Advertising Cookies (Third-Party)</h3>
          <p>
            SIPCalc Pro displays advertisements through <strong>Google AdSense</strong>. Google AdSense uses cookies to serve personalised advertisements based on your prior visits to this and other websites. These cookies allow Google and its partners to serve ads based on your interests.
          </p>
          <p>
            You may opt out of personalised advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              Google Ads Settings
            </a>{' '}
            or the{' '}
            <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              Network Advertising Initiative opt-out page
            </a>
            .
          </p>

          <h2>3. How We Use Information</h2>
          <p>We use the automatically collected information described above to:</p>
          <ul>
            <li>Understand which calculators and articles are most useful to visitors</li>
            <li>Improve the performance, design, and content of our website</li>
            <li>Diagnose and fix technical errors</li>
            <li>Measure the effectiveness of improvements we make</li>
          </ul>
          <p>
            We do <strong>not</strong> sell, rent, or share your personal information with third parties for their marketing purposes.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>Our website integrates with the following third-party services, each governed by their own privacy policies:</p>
          <ul>
            <li>
              <strong>Google AdSense</strong> — Advertising.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Analytics</strong> — Traffic analytics.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Fonts</strong> — Typography (Inter font family). Google Fonts may log the request to serve the font file.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Privacy Policy
              </a>
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We do not store any personally identifiable data on our servers. Analytics data collected by Google Analytics is retained per Google's standard retention policies (26 months by default). Advertising data is governed by Google's data retention policies.
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            SIPCalc Pro is a financial information website intended for adults (18+). We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us immediately.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the following rights regarding your data:
          </p>
          <ul>
            <li><strong>Right to access</strong>: Request information about data collected about you</li>
            <li><strong>Right to deletion</strong>: Request deletion of your data</li>
            <li><strong>Right to opt-out</strong>: Opt out of personalised advertising (see Section 2.3)</li>
            <li><strong>Right to complain</strong>: Lodge a complaint with your data protection authority</li>
          </ul>
          <p>
            Since we do not collect personally identifiable information directly, most of these rights apply to data held by third-party services (Google Analytics, Google AdSense). Please refer to Google's privacy controls to exercise these rights.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect any changes. We encourage you to review this policy periodically. Continued use of SIPCalc Pro after changes constitutes your acceptance of the updated policy.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or how your data is handled, please{' '}
            <Link to="/contact" style={{ color: 'var(--color-accent)' }}>contact us</Link>.
          </p>

          <div className="disclaimer-box">
            <p>
              <strong>Summary:</strong> We collect no personal financial data from our calculators. We use Google Analytics for aggregated traffic insights and Google AdSense for advertising, both of which may use cookies. Your dark/light mode preference is stored locally only.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
