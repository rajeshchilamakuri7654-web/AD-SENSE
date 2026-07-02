import { Suspense, lazy, useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import SliderInput from '../components/SliderInput';
import ResultCard from '../components/ResultCard';
import ShareButton from '../components/ShareButton';
import FAQSection from '../components/FAQSection';
import { calculateStepUpSIP } from '../utils/calculations';
import { formatCurrency, formatCompact } from '../utils/formatters';
import { useDebounce } from '../hooks/useDebounce';

const StepUpChart = lazy(() => import('../components/charts/StepUpChart'));

const FAQS = [
  {
    question: 'What is a Step-Up SIP?',
    answer: 'A Step-Up SIP (also called a Top-Up SIP) is a variant where you increase your monthly investment by a fixed percentage every year. This mirrors your rising income and dramatically accelerates wealth creation through higher compounding.',
  },
  {
    question: 'How much step-up percentage should I choose?',
    answer: 'A step-up of 10% per year is a popular choice, matching typical annual salary increments. If your income grows faster, you can choose 15–20%. Even a 5% annual step-up significantly boosts your final corpus compared to a flat SIP.',
  },
  {
    question: 'How is Step-Up SIP different from a regular SIP?',
    answer: 'In a regular SIP, you invest the same amount every month. In a Step-Up SIP, your monthly contribution increases by the step-up percentage at the start of each year. This results in a much higher corpus due to both the higher contributions and compounding.',
  },
  {
    question: 'Can I partially step up my SIP?',
    answer: 'Yes. Most AMCs allow you to increase your SIP amount manually at any time. Some also offer automated step-up instructions where the SIP amount auto-increments annually. Check with your fund house or platform for this feature.',
  },
];

export default function StepUpSIP() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [monthly, setMonthly] = useState(() => Number(searchParams.get('monthly') ?? 10000));
  const [returnPct, setReturnPct] = useState(() => Number(searchParams.get('return') ?? 12));
  const [years, setYears] = useState(() => Number(searchParams.get('years') ?? 10));
  const [stepUp, setStepUp] = useState(() => Number(searchParams.get('stepup') ?? 10));

  const dMonthly = useDebounce(monthly);
  const dReturn = useDebounce(returnPct);
  const dYears = useDebounce(years);
  const dStepUp = useDebounce(stepUp);

  useEffect(() => {
    setSearchParams(
      { monthly: String(monthly), return: String(returnPct), years: String(years), stepup: String(stepUp) },
      { replace: true }
    );
  }, [monthly, returnPct, years, stepUp, setSearchParams]);

  const result = useMemo(
    () => calculateStepUpSIP(dMonthly, dReturn, dYears, dStepUp),
    [dMonthly, dReturn, dYears, dStepUp]
  );

  const flatResult = useMemo(
    () => {
      // Regular SIP for comparison
      const r = dReturn / 12 / 100;
      const n = dYears * 12;
      const totalInvested = dMonthly * n;
      const maturity = r === 0 ? totalInvested : dMonthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      return Math.round(maturity);
    },
    [dMonthly, dReturn, dYears]
  );

  const extraGain = result.maturityValue - flatResult;

  return (
    <>
      <SEOMeta
        title="Step-Up SIP Calculator — Annual Top-Up SIP Returns | SIPCalc Pro"
        description="Calculate how increasing your SIP by a fixed % each year accelerates wealth creation. Year-by-year breakdown of step-up SIP with interactive charts."
        canonical="https://sipcalcpro.in/step-up-sip-calculator"
      />
      <div className="calc-page">
        <div className="container">
          <nav className="calc-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Step-Up SIP Calculator</span>
          </nav>

          <header className="calc-page__header">
            <h1>Step-Up SIP Calculator</h1>
            <p className="lead">
              Model the real power of increasing your SIP every year. See how even a 10% annual top-up can add lakhs to your corpus.
            </p>
          </header>

          <div className="calc-layout">
            <aside className="calc-inputs" aria-label="Calculator inputs">
              <div className="calc-inputs__title"><span>🪜</span> Step-Up Parameters</div>
              <SliderInput label="Initial Monthly SIP" value={monthly} min={500} max={200000} step={500} prefix="₹" onChange={setMonthly} formatLabel={(v) => v.toLocaleString('en-IN')} />
              <SliderInput label="Annual Step-Up" value={stepUp} min={1} max={50} step={1} suffix="%" onChange={setStepUp} />
              <SliderInput label="Expected Annual Return" value={returnPct} min={1} max={30} step={0.5} suffix="%" onChange={setReturnPct} />
              <SliderInput label="Investment Duration" value={years} min={1} max={40} step={1} suffix=" yr" onChange={setYears} />
              <ShareButton params={{ monthly, return: returnPct, years, stepup: stepUp }} />
            </aside>

            <section className="calc-results" aria-label="Results">
              <div className="results-grid">
                <ResultCard label="Total Invested" value={result.totalInvested} compact />
                <ResultCard label="Total Returns" value={result.totalReturns} compact subVariant="success" sub="via step-up SIP" />
                <ResultCard label="Maturity Value" value={result.maturityValue} variant="primary" compact />
              </div>

              {extraGain > 0 && (
                <div className="chart-card" style={{ background: 'rgba(22,163,74,0.06)', borderColor: 'rgba(22,163,74,0.25)' }}>
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--color-success)', fontWeight: 600, textAlign: 'center' }}>
                    🚀 Step-up earns you an extra <strong>{formatCompact(extraGain)}</strong> vs a flat SIP at the same starting amount
                  </p>
                </div>
              )}

              <div className="chart-card">
                <div className="chart-card__title">📈 Portfolio Growth (Step-Up)</div>
                <div className="chart-container">
                  <Suspense fallback={<div className="chart-loading">Loading chart…</div>}>
                    <StepUpChart data={result.yearlyData} />
                  </Suspense>
                </div>
              </div>

              <div className="table-card">
                <div className="table-card__title">Year-by-Year Breakdown</div>
                <div className="table-scroll">
                  <table className="data-table" aria-label="Step-up SIP yearly breakdown">
                    <thead>
                      <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Monthly SIP</th>
                        <th scope="col">Year Invested</th>
                        <th scope="col">Cumul. Invested</th>
                        <th scope="col">Portfolio Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.yearlyData.map((row) => (
                        <tr key={row.year}>
                          <td>Year {row.year}</td>
                          <td>{formatCurrency(row.monthlySIP)}/mo</td>
                          <td>{formatCurrency(row.yearInvested)}</td>
                          <td>{formatCurrency(row.cumulativeInvested)}</td>
                          <td className="positive">{formatCompact(row.cumulativeValue)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          <article className="content-section">
            <h2>What is a Step-Up SIP and Why Does It Work?</h2>
            <p>
              A Step-Up SIP, also called a Top-Up SIP, is a disciplined investment strategy where you increase your monthly SIP contribution by a fixed percentage every year. As your salary grows, your investments grow too — ensuring you stay on track to meet bigger financial goals.
            </p>

            <h3>The Formula</h3>
            <p>
              For each year y (from 1 to N), the monthly SIP amount is:
            </p>
            <div className="formula-box">
              Monthly_SIP(y) = Initial_SIP × (1 + step_up/100)^(y−1)
              <br /><br />
              The future value of each year's contributions at end of the total period:
              <br />
              FV(y) = Monthly_SIP(y) × [(1+r)¹² − 1] / r × (1+r) × (1+r)^(remaining_months)
              <br /><br />
              Total FV = Σ FV(y) for all years y = 1 to N
            </div>

            <h3>Worked Example</h3>
            <p>
              ₹10,000/month starting SIP, 10% annual step-up, 12% p.a. return, 15 years:
            </p>
            <ul style={{ paddingLeft: 24, marginBottom: 16, color: 'var(--color-text-secondary)' }}>
              <li>Year 1 SIP: ₹10,000/month → Year 15 SIP: ₹41,772/month</li>
              <li>Flat SIP corpus at same return: ~₹50.1 L</li>
              <li>Step-Up SIP corpus: ~₹1.15 Cr</li>
              <li>Extra gain from step-up: ~₹65 L</li>
            </ul>
            <p>
              The step-up doesn't just add more money — it adds money that compounds for many years, dramatically amplifying the final result.
            </p>
            <FAQSection items={FAQS} />
          </article>
        </div>
      </div>
    </>
  );
}
