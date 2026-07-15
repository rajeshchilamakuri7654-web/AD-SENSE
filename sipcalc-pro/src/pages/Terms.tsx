import SEOMeta from '../components/SEOMeta';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      <SEOMeta
        title="Terms of Use — SIPCalc Pro"
        description="Read SIPCalc Pro's Terms of Use. By using our free mutual fund calculators, you agree to these terms covering tool purpose, limitations, intellectual property, and governing law."
        canonical="https://sipcalcpro.in/terms"
      />
      <div className="container">
        <div className="static-page">
          <h1>Terms of Use</h1>
          <p style={{ color: 'var(--color-text-muted)', fontSize: 14, marginBottom: 'var(--space-xl)' }}>
            Last updated: July 2025
          </p>
          <p className="lead">
            Please read these Terms of Use carefully before using SIPCalc Pro. By accessing or using the website at <strong>sipcalcpro.in</strong>, you agree to be bound by these terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using SIPCalc Pro (the "Service"), you confirm that you have read, understood, and agree to these Terms of Use and our <Link to="/privacy-policy" style={{ color: 'var(--color-accent)' }}>Privacy Policy</Link>. If you do not agree with any part of these terms, you must not use the Service.
          </p>
          <p>
            These terms apply to all visitors, users, and others who access or use the Service. We reserve the right to update these terms at any time. Continued use of the Service after any changes constitutes your acceptance of the revised terms.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            SIPCalc Pro provides free, browser-based financial calculators designed to help Indian retail investors estimate potential investment outcomes. Our tools include:
          </p>
          <ul>
            <li>SIP (Systematic Investment Plan) Calculator</li>
            <li>Step-Up SIP Calculator</li>
            <li>Lumpsum vs SIP Comparison Calculator</li>
            <li>XIRR (Extended Internal Rate of Return) Calculator</li>
            <li>CAGR (Compound Annual Growth Rate) Calculator</li>
          </ul>
          <p>
            We also publish educational articles on mutual fund investing concepts. All tools and content are provided free of charge.
          </p>

          <h2>3. Educational Purpose Only — No Investment Advice</h2>
          <p>
            <strong>All calculators, projections, results, and content on SIPCalc Pro are for educational and illustrative purposes only.</strong> Nothing on this website constitutes, or should be construed as:
          </p>
          <ul>
            <li>Investment advice or financial planning advice</li>
            <li>A recommendation to buy, sell, or hold any financial instrument</li>
            <li>A promise or guarantee of any specific investment return</li>
            <li>Tax advice or legal advice</li>
          </ul>
          <p>
            SIPCalc Pro is not a SEBI-registered investment advisor, research analyst, portfolio manager, or financial planner. We are not affiliated with any mutual fund house, asset management company, stock broker, or distributor.
          </p>
          <p>
            Before making any investment decision, you should consult a qualified, SEBI-registered investment advisor or financial planner who can assess your personal financial situation, risk tolerance, and investment goals.
          </p>

          <h2>4. Accuracy of Calculations</h2>
          <p>
            Our calculators use standard financial formulas (such as the future value formula for recurring payments, Newton-Raphson XIRR, and compound annual growth rate). We make reasonable efforts to ensure mathematical accuracy. However:
          </p>
          <ul>
            <li>All results are based on hypothetical, user-defined inputs (return rates, investment amounts, durations)</li>
            <li>Assumed constant return rates do not reflect actual market behaviour, which is volatile and unpredictable</li>
            <li>Calculator results do not account for fund expense ratios, exit loads, taxation, inflation, or missed SIP instalments unless explicitly stated</li>
            <li>Actual investment returns will differ — potentially significantly — from calculator projections</li>
          </ul>
          <p>
            Mutual fund investments are subject to market risks. Past performance of any fund or market index is not indicative of future returns. The value of investments can fall as well as rise, and investors may receive back less than they invested.
          </p>

          <h2>5. No Warranty</h2>
          <p>
            The Service is provided on an "as is" and "as available" basis, without warranties of any kind — express or implied. We do not warrant that:
          </p>
          <ul>
            <li>The Service will be uninterrupted, error-free, or available at all times</li>
            <li>Any results obtained from the calculators will be accurate for your specific situation</li>
            <li>The content on the website is complete, current, or free of errors</li>
          </ul>
          <p>
            We expressly disclaim all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, SIPCalc Pro and its creators shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from:
          </p>
          <ul>
            <li>Your use of, or inability to use, the Service</li>
            <li>Any investment decisions made based on calculator outputs or content on this website</li>
            <li>Errors, inaccuracies, or omissions in the calculator results or articles</li>
            <li>Unauthorised access to or alteration of your data</li>
          </ul>
          <p>
            Your use of the Service and reliance on any information provided is entirely at your own risk.
          </p>

          <h2>7. User Responsibilities</h2>
          <p>By using SIPCalc Pro, you agree that you will:</p>
          <ul>
            <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
            <li>Not attempt to reverse-engineer, scrape, or reproduce the Service's tools without permission</li>
            <li>Not use the Service in any way that could damage, disable, or impair its functioning</li>
            <li>Not misrepresent calculator outputs or use them to mislead others</li>
            <li>Verify any calculation results independently before acting on them</li>
          </ul>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on SIPCalc Pro — including but not limited to the design, layout, code, calculators, articles, graphics, and branding — is the intellectual property of SIPCalc Pro and is protected by applicable copyright and intellectual property laws.
          </p>
          <p>
            You may share links to our articles and calculators for personal, non-commercial use. You may not copy, reproduce, distribute, or create derivative works from our content without explicit written permission.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>
            SIPCalc Pro integrates with third-party services including Google AdSense (advertising) and Google Analytics (traffic analysis). These services are governed by their own terms and privacy policies. We are not responsible for the practices of these third-party services.
          </p>
          <p>
            Our website may contain links to third-party websites for reference purposes. We have no control over the content of those sites and are not responsible for their accuracy or practices.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in India.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. The "Last updated" date at the top of this page indicates when the terms were last revised. We encourage you to review these terms periodically. Your continued use of SIPCalc Pro after any modifications constitutes acceptance of the updated terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            If you have questions about these Terms of Use, please <Link to="/contact" style={{ color: 'var(--color-accent)' }}>contact us</Link>.
          </p>

          <div className="disclaimer-box">
            <p>
              <strong>In summary:</strong> SIPCalc Pro is a free educational tool. Calculator results are illustrations, not guarantees. We are not financial advisors. Please consult a SEBI-registered investment advisor before making investment decisions. By using this website, you accept these terms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
