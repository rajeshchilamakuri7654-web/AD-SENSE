import { Suspense, lazy, useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import SliderInput from '../components/SliderInput';
import ResultCard from '../components/ResultCard';
import ShareButton from '../components/ShareButton';
import FAQSection from '../components/FAQSection';
import { calculateSIP } from '../utils/calculations';
import { formatCurrency, formatCompact } from '../utils/formatters';
import { useDebounce } from '../hooks/useDebounce';

const SIPGrowthChart = lazy(() => import('../components/charts/SIPGrowthChart'));

const FAQS = [
  {
    question: 'What is a SIP calculator?',
    answer: 'A SIP (Systematic Investment Plan) calculator estimates the future value of your monthly investments based on an assumed annual return rate and investment duration. It uses the compound interest formula to project how your wealth grows over time.',
  },
  {
    question: 'How accurate is the SIP calculator?',
    answer: 'Our SIP calculator uses the exact financial formula: FV = P × [(1+r)^n − 1] / r × (1+r), where r is the monthly rate. The calculation is mathematically precise, but actual mutual fund returns vary with market conditions and are never guaranteed.',
  },
  {
    question: 'What is a good return rate for SIP in India?',
    answer: 'Historically, Indian large-cap equity mutual funds have delivered 10–14% annualised returns over 10+ year periods. Small-cap and mid-cap funds may offer higher returns with higher risk. For planning, many advisors suggest 10–12% as a conservative estimate.',
  },
  {
    question: 'Is SIP better than a fixed deposit?',
    answer: 'SIPs in equity mutual funds have historically outperformed fixed deposits over long periods (10+ years). However, SIPs carry market risk, while FDs offer guaranteed returns. The right choice depends on your risk appetite and time horizon.',
  },
  {
    question: 'Can I start a SIP with ₹500?',
    answer: 'Yes! Many mutual funds allow SIPs starting from ₹100–₹500 per month. The power of compounding works regardless of the amount — starting small and increasing over time (step-up SIP) is a very effective wealth-building strategy.',
  },
];

export default function SIPCalculator() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [monthly, setMonthly] = useState(() => Number(searchParams.get('monthly') ?? 10000));
  const [returnPct, setReturnPct] = useState(() => Number(searchParams.get('return') ?? 12));
  const [years, setYears] = useState(() => Number(searchParams.get('years') ?? 10));

  const dMonthly = useDebounce(monthly);
  const dReturn = useDebounce(returnPct);
  const dYears = useDebounce(years);

  // Sync state into URL (share)
  useEffect(() => {
    setSearchParams({ monthly: String(monthly), return: String(returnPct), years: String(years) }, { replace: true });
  }, [monthly, returnPct, years, setSearchParams]);

  const result = useMemo(
    () => calculateSIP(dMonthly, dReturn, dYears),
    [dMonthly, dReturn, dYears]
  );

  const gainPct =
    result.totalInvested > 0
      ? ((result.totalReturns / result.totalInvested) * 100).toFixed(1)
      : '0';

  return (
    <>
      <SEOMeta
        title="SIP Calculator — Calculate Mutual Fund Returns Online | SIPCalc Pro"
        description="Free SIP calculator: enter monthly investment, return rate and duration to instantly see total invested, returns and maturity value with a year-by-year chart."
        canonical="https://sipcalcpro.in/sip-calculator"
      />
      <div className="calc-page">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="calc-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">SIP Calculator</span>
          </nav>

          <header className="calc-page__header">
            <h1>SIP Calculator</h1>
            <p className="lead">
              Find out how much your monthly SIP can grow. Adjust the sliders to see real-time projections — no sign-up required.
            </p>
          </header>

          <div className="calc-layout">
            {/* Inputs */}
            <aside className="calc-inputs" aria-label="Calculator inputs">
              <div className="calc-inputs__title">
                <span>📊</span> Investment Parameters
              </div>

              <SliderInput
                label="Monthly Investment"
                value={monthly}
                min={500}
                max={200000}
                step={500}
                prefix="₹"
                onChange={setMonthly}
                formatLabel={(v) => v.toLocaleString('en-IN')}
              />
              <SliderInput
                label="Expected Annual Return"
                value={returnPct}
                min={1}
                max={30}
                step={0.5}
                suffix="%"
                onChange={setReturnPct}
              />
              <SliderInput
                label="Investment Duration"
                value={years}
                min={1}
                max={40}
                step={1}
                suffix=" yr"
                onChange={setYears}
              />

              <ShareButton params={{ monthly, return: returnPct, years }} />
            </aside>

            {/* Results */}
            <section className="calc-results" aria-label="Calculation results">
              <div className="results-grid">
                <ResultCard
                  label="Total Invested"
                  value={result.totalInvested}
                  compact
                />
                <ResultCard
                  label="Total Returns"
                  value={result.totalReturns}
                  compact
                  sub={`+${gainPct}% gain`}
                  subVariant="success"
                />
                <ResultCard
                  label="Maturity Value"
                  value={result.maturityValue}
                  variant="primary"
                  compact
                />
              </div>

              <div className="chart-card">
                <div className="chart-card__title">📈 Portfolio Growth Over Time</div>
                <div className="chart-container">
                  <Suspense fallback={<div className="chart-loading">Loading chart…</div>}>
                    <SIPGrowthChart data={result.yearlyData} />
                  </Suspense>
                </div>
              </div>

              {/* Year-by-Year Table */}
              <div className="table-card">
                <div className="table-card__title">Year-by-Year Breakdown</div>
                <div className="table-scroll">
                  <table className="data-table" aria-label="Year by year investment breakdown">
                    <thead>
                      <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Invested</th>
                        <th scope="col">Returns</th>
                        <th scope="col">Portfolio Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearlyData.map((row) => (
                        <tr key={row.year}>
                          <td>Year {row.year}</td>
                          <td>{formatCurrency(row.invested)}</td>
                          <td className="positive">+{formatCurrency(row.returns)}</td>
                          <td>{formatCompact(row.value)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* SEO Content */}
          <article className="content-section">
            <h2>How Does the SIP Calculator Work?</h2>
            <p>
              A Systematic Investment Plan (SIP) allows you to invest a fixed amount every month in a mutual fund scheme. Our SIP calculator uses the standard future value formula for recurring investments to compute exactly how your money compounds over time.
            </p>

            <h3>The SIP Formula</h3>
            <p>The future value of a SIP is calculated as:</p>
            <div className="formula-box">
              FV = P × [(1 + r)ⁿ − 1] / r × (1 + r)
              <br /><br />
              Where:
              <br />P = Monthly investment amount
              <br />r = Monthly rate of return (annual rate ÷ 12 ÷ 100)
              <br />n = Total number of months (years × 12)
            </div>

            <h3>Worked Example</h3>
            <p>
              Let's say you invest <strong>₹10,000 per month</strong> for <strong>10 years</strong> expecting <strong>12% annual return</strong>:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16, color: 'var(--color-text-secondary)' }}>
              <li>Monthly rate (r) = 12 / 12 / 100 = 0.01</li>
              <li>Months (n) = 10 × 12 = 120</li>
              <li>Total Invested = ₹10,000 × 120 = <strong>₹12,00,000</strong></li>
              <li>Maturity Value = ₹10,000 × [(1.01¹²⁰ − 1) / 0.01] × 1.01 ≈ <strong>₹23,23,391</strong></li>
              <li>Returns = ₹23,23,391 − ₹12,00,000 = <strong>₹11,23,391</strong></li>
            </ul>
            <p>
              This illustrates the <strong>power of compounding</strong> — you earn returns not just on your invested amount, but also on the returns already earned.
            </p>

            <h3>Tips to Maximise Your SIP Returns</h3>
            <p>
              Start as early as possible — even a 5-year head start can add lakhs to your final corpus. Consider increasing your SIP amount by 10% every year (step-up SIP) as your income grows. Stay invested through market cycles and avoid pausing SIPs during downturns, as those dips are often the best time to accumulate units at lower prices.
            </p>

            <FAQSection items={FAQS} />
          </article>
        </div>
      </div>
    </>
  );
}
