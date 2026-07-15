import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <SEOMeta
        title="Privacy Policy — SIPCalc Pro"
        description="SIPCalc Pro's full privacy policy: what data we collect, how Google AdSense and Analytics use cookies, your opt-out rights, and how we protect your information."
        canonical="https://sipcalcpro.in/privacy"
      />
      <div className="container">
        <div className="static-page">
          <h1>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 'var(--space-xl)' }}>
            Last updated: July 2025
          </p>
          <p className="lead">
            SIPCalc Pro ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains in detail what information is collected when you visit <strong>sipcalcpro.in</strong>, how it is used, who it is shared with, your rights, and how to exercise them.
          </p>
          <p>
            By using SIPCalc Pro, you agree to the collection and use of information described in this policy. If you disagree with any part of this policy, please discontinue use of the website.
          </p>

          <h2>1. Information We Collect</h2>

          <h3>1.1 Information You Enter Into Calculators</h3>
          <p>
            When you use our financial calculators, you enter data such as monthly investment amounts, annual return rates, investment durations, and cash flow dates. <strong>This data is processed entirely within your browser (client-side JavaScript) and is never transmitted to our servers.</strong> We have no access to, and do not store, any financial figures you input into our calculators.
          </p>
          <p>
            Calculator inputs may be saved in your browser's URL query parameters (e.g., <code>?monthly=5000&amp;return=12</code>) to allow sharing results via link. This is a browser-level feature — no data is stored on our end.
          </p>

          <h3>1.2 Automatically Collected Technical Information</h3>
          <p>
            When you visit our website, certain technical information is automatically collected by the third-party services described below. This may include:
          </p>
          <ul>
            <li>Your IP address (anonymised where possible)</li>
            <li>Browser type, version, and language settings</li>
            <li>Operating system and device type (desktop, mobile, tablet)</li>
            <li>The URL of the page you came from (referrer)</li>
            <li>Pages visited, time spent on each page, and navigation path</li>
            <li>Approximate geographic location (country and city level, not precise coordinates)</li>
            <li>Screen resolution and viewport size</li>
          </ul>
          <p>
            This information is aggregated and anonymised — it is used for statistical analysis of site usage patterns, not to identify individual visitors.
          </p>

          <h3>1.3 Information You Voluntarily Provide</h3>
          <p>
            If you contact us via the contact form or by email, you provide your name, email address, and the content of your message. This information is used solely to respond to your inquiry and is not stored in any database — it exists only in our email inbox.
          </p>

          <h2>2. Cookies and Tracking Technologies</h2>
          <p>
            Cookies are small text files stored by your browser that help websites remember information about your visit. SIPCalc Pro uses the following types of cookies:
          </p>

          <h3>2.1 Essential / Functional Cookies (First-Party)</h3>
          <p>
            We store one preference in your browser's <code>localStorage</code>:
          </p>
          <ul>
            <li><strong>theme</strong>: Records whether you prefer dark mode or light mode. This is stored locally on your device and is never transmitted to any server. It is not a cookie in the traditional sense — it does not follow you across sites.</li>
          </ul>
          <p>
            This is the only first-party data storage we use.
          </p>

          <h3>2.2 Analytics Cookies — Google Analytics (Third-Party)</h3>
          <p>
            We use <strong>Google Analytics</strong> (provided by Google LLC, USA) to understand aggregate usage patterns on our website. Google Analytics sets cookies in your browser to collect the following types of information:
          </p>
          <ul>
            <li>Pages viewed and the sequence of navigation</li>
            <li>Time spent on each page and session duration</li>
            <li>New vs returning visitor status</li>
            <li>Device, browser, and operating system type</li>
            <li>Country and city of origin (derived from anonymised IP)</li>
            <li>Traffic sources (how you arrived at the site — search, direct, referral, etc.)</li>
          </ul>
          <p>
            Google Analytics data is anonymised and aggregated. We cannot identify individual users from this data. We use this data to understand which calculators and articles are most useful, diagnose technical errors, and plan improvements to the site.
          </p>
          <p>
            <strong>IP Anonymisation:</strong> We have enabled IP anonymisation in Google Analytics. Your full IP address is never stored by Google Analytics for our property.
          </p>
          <p>
            <strong>Google Analytics cookies typically set:</strong>
          </p>
          <ul>
            <li><code>_ga</code>: Distinguishes users. Expires after 2 years.</li>
            <li><code>_ga_[ID]</code>: Maintains session state. Expires after 2 years.</li>
            <li><code>_gid</code>: Distinguishes users. Expires after 24 hours.</li>
          </ul>
          <p>
            <strong>How to opt out:</strong> Install the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              Google Analytics Opt-out Browser Add-on
            </a>
            {' '}to prevent Google Analytics from collecting data on your visits. You can also use your browser's private/incognito mode or a tracker-blocking extension.
          </p>

          <h3>2.3 Advertising Cookies — Google AdSense (Third-Party)</h3>
          <p>
            SIPCalc Pro displays advertisements served by <strong>Google AdSense</strong> (Google LLC, USA). Google AdSense is an advertising platform that uses cookies and similar technologies to serve personalised advertisements. This is a core part of how AdSense works, and it is necessary to disclose this clearly.
          </p>
          <p>
            <strong>What Google AdSense does:</strong>
          </p>
          <ul>
            <li>Places cookies in your browser to track your browsing activity across websites that use Google advertising products</li>
            <li>Uses this data to build a profile of your interests and serve ads relevant to those interests (interest-based or personalised advertising)</li>
            <li>Measures the effectiveness of ads (impressions, clicks)</li>
            <li>Prevents you from seeing the same ad too many times (frequency capping)</li>
          </ul>
          <p>
            <strong>Google AdSense cookies include:</strong>
          </p>
          <ul>
            <li><code>IDE</code>: Set by Google DoubleClick. Used for ad targeting and measurement. Expires after approximately 1 year.</li>
            <li><code>DSID</code>: Identifies signed-in Google users for ad personalisation.</li>
            <li><code>NID</code>: Used to remember your preferences and personalise ads for signed-out users.</li>
            <li><code>_gcl_au</code>: Google AdSense experiment cookie. Expires after 3 months.</li>
            <li>Other measurement and fraud-prevention cookies set by Google.</li>
          </ul>
          <p>
            <strong>Publisher ID:</strong> Our Google AdSense publisher ID is <code>pub-6796654911917232</code>. This is publicly verifiable via our <code>/ads.txt</code> file.
          </p>
          <p>
            <strong>How personalised ads work:</strong> Google uses your browsing history and activity across Google's advertising network — not just SIPCalc Pro — to determine which ads to show you. If you've previously searched for financial products, investment apps, or related topics, you may see related ads on our site.
          </p>
          <p>
            <strong>How to opt out of personalised advertising:</strong>
          </p>
          <ul>
            <li>Visit{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Ads Settings
              </a>
              {' '}to control ad personalisation for your Google account</li>
            <li>Use the{' '}
              <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Digital Advertising Alliance opt-out tool
              </a>
            </li>
            <li>Use the{' '}
              <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Network Advertising Initiative opt-out page
              </a>
            </li>
            <li>Install a browser extension such as Privacy Badger, uBlock Origin, or AdBlock Plus (note: this may disable ads on our site entirely)</li>
          </ul>
          <p>
            If you opt out of personalised advertising, you will still see ads — but they will be generic (non-personalised) ads rather than interest-based ones. The number and placement of ads on our site will not change.
          </p>
          <p>
            For complete details on how Google uses data when you use our site, see:{' '}
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              How Google uses information from sites that use our services
            </a>
            .
          </p>

          <h2>3. How We Use the Information Collected</h2>
          <p>
            The aggregated, anonymised data collected via Google Analytics is used to:
          </p>
          <ul>
            <li>Understand which calculators and articles receive the most traffic and are most useful to visitors</li>
            <li>Identify technical errors, slow page loads, or broken functionality</li>
            <li>Understand where visitors come from (search engines, social media, direct) to improve our content's discoverability</li>
            <li>Measure the impact of improvements we make to the site</li>
            <li>Understand geographic distribution of our user base to tailor India-specific examples and content</li>
          </ul>
          <p>
            We do <strong>not</strong> use this data to identify individual users, build personal profiles, or engage in any form of targeted communication. We do <strong>not</strong> sell, rent, or share any data with third parties for their marketing purposes.
          </p>

          <h2>4. Third-Party Services and Their Privacy Policies</h2>
          <p>
            Our website integrates with the following third-party services. Each service operates under its own privacy policy, which governs how it uses data:
          </p>
          <ul>
            <li>
              <strong>Google AdSense</strong> (advertising) —{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Privacy Policy
              </a>
              {' '}and{' '}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Advertising Policy
              </a>
            </li>
            <li>
              <strong>Google Analytics</strong> (traffic analytics) —{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Google Fonts</strong> (the Inter typeface used site-wide) — Google's servers serve the font files. Google Fonts may log the font request including your IP address.{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Google Privacy Policy
              </a>
            </li>
            <li>
              <strong>Vercel</strong> (website hosting) — Our site is hosted on Vercel. Vercel may collect server-level request logs (IP address, page requested, timestamp) for security and performance monitoring.{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
                Vercel Privacy Policy
              </a>
            </li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We do not store any personally identifiable data on our own servers. The only user-related data that exists is:
          </p>
          <ul>
            <li><strong>Google Analytics data:</strong> Retained for 26 months by default (Google's standard retention). You can opt out using the add-on linked in Section 2.2.</li>
            <li><strong>Google AdSense data:</strong> Governed by Google's data retention policies. See Google's privacy controls to manage this.</li>
            <li><strong>Contact emails:</strong> Retained in our email inbox until manually deleted. We do not move contact messages to any database.</li>
            <li><strong>Vercel logs:</strong> Retained per Vercel's standard log retention policies (typically 30 days for access logs).</li>
          </ul>

          <h2>6. Children's Privacy</h2>
          <p>
            SIPCalc Pro is a financial information website intended for adults (18 years and older). We do not knowingly collect, solicit, or process personal information from children under the age of 13. Google AdSense does not serve personalised advertising to users identified as children.
          </p>
          <p>
            If you are a parent or guardian and believe that a child under 13 has submitted personal information to us, please contact us at <a href="mailto:hello@sipcalcpro.in" style={{ color: 'var(--color-accent)' }}>hello@sipcalcpro.in</a> and we will take steps to delete such information.
          </p>

          <h2>7. Your Privacy Rights</h2>
          <p>
            Depending on your location, you may have the following rights with respect to data about you:
          </p>
          <ul>
            <li><strong>Right to access:</strong> Request a copy of information collected about you</li>
            <li><strong>Right to correction:</strong> Request correction of inaccurate information</li>
            <li><strong>Right to deletion:</strong> Request deletion of your data</li>
            <li><strong>Right to opt-out:</strong> Opt out of personalised advertising (see Section 2.3)</li>
            <li><strong>Right to withdraw consent:</strong> Where processing is based on consent, withdraw it at any time</li>
            <li><strong>Right to complain:</strong> Lodge a complaint with your relevant data protection authority</li>
          </ul>
          <p>
            Since we do not directly collect personally identifiable information, most of these rights as they relate to advertising and analytics data must be exercised directly with Google via their privacy controls. For data in contact emails, contact us directly at <a href="mailto:hello@sipcalcpro.in" style={{ color: 'var(--color-accent)' }}>hello@sipcalcpro.in</a>.
          </p>

          <h2>8. Do Not Track</h2>
          <p>
            Some browsers support a "Do Not Track" (DNT) signal that requests websites not to track user behaviour. Currently, there is no industry standard for responding to DNT signals. SIPCalc Pro does not alter its data collection behaviour in response to DNT signals. However, you can use the opt-out tools described in Section 2 to limit tracking by Google services.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we update the policy, we will revise the "Last updated" date at the top of this page. We encourage you to review this page periodically. Continued use of SIPCalc Pro after any changes constitutes your acceptance of the revised policy.
          </p>
          <p>
            For significant changes that materially affect how we handle data, we will make a reasonable effort to provide notice (e.g., by updating the notice period in the date field prominently).
          </p>

          <h2>10. Contact Us About This Policy</h2>
          <p>
            If you have questions, concerns, or requests related to this Privacy Policy or how your data is handled, please contact us:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@sipcalcpro.in" style={{ color: 'var(--color-accent)' }}>hello@sipcalcpro.in</a></li>
            <li><strong>Contact form:</strong> <Link to="/contact" style={{ color: 'var(--color-accent)' }}>sipcalcpro.in/contact</Link></li>
          </ul>

          <div className="disclaimer-box">
            <p>
              <strong>Plain English Summary:</strong> We collect no personal financial data from our calculators — it never leaves your browser. We use Google Analytics for aggregated, anonymised traffic insights. We show Google AdSense ads, which use cookies to serve personalised ads (you can opt out via Google's settings). Your dark/light mode preference is stored in your browser only. We do not sell your data. Ever.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
