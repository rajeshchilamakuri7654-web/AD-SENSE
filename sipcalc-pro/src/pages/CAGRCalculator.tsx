import { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import SliderInput from '../components/SliderInput';
import ShareButton from '../components/ShareButton';
import FAQSection from '../components/FAQSection';
import { calculateCAGR } from '../utils/calculations';
import { formatCompact, formatPercent } from '../utils/formatters';
import { useDebounce } from '../hooks/useDebounce';
import { useCountUp } from '../hooks/useCountUp';

const FAQS = [
  {
    question: 'What does CAGR mean?',
    answer: 'CAGR stands for Compound Annual Growth Rate. It represents the steady annual rate at which an investment would need to grow to go from its starting value to its ending value over the given number of years, assuming profits are reinvested at the end of each year.',
  },
  {
    question: 'How is CAGR calculated?',
    answer: 'CAGR = [(Final Value / Initial Value)^(1/Years) − 1] × 100. For example, ₹1,00,000 growing to ₹2,00,000 in 5 years has a CAGR of [(2,00,000/1,00,000)^(1/5) − 1] × 100 = 14.87%.',
  },
  {
    question: 'What is a good CAGR for a mutual fund?',
    answer: 'For equity mutual funds in India, a CAGR of 12–16% over a 5–10 year period is considered good. Large-cap index funds typically deliver 10–13% CAGR, while actively managed mid/small-cap funds may deliver 15–22%. Always compare against the benchmark index.',
  },
  {
    question: 'What is the difference between CAGR and absolute return?',
    answer: 'Absolute return is the simple percentage change: (Final − Initial) / Initial × 100. It does not account for time. CAGR normalises return across the holding period, making it comparable across different investment durations. Always use CAGR for long-term comparisons.',
  },
  {
    question: 'Can CAGR be negative?',
    answer: 'Yes. If your investment has lost value (Final Value < Initial Value), CAGR will be negative, indicating an annualised loss. A CAGR of −10% means the investment lost 10% of its value every year on a compounded basis.',
  },
];

export default function CAGRCalculator() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [initial, setInitial] = useState(() => Number(searchParams.get('initial') ?? 100000));
  const [final, setFinal] = useState(() => Number(searchParams.get('final') ?? 200000));
  const [years, setYears] = useState(() => Number(searchParams.get('years') ?? 5));

  const dInitial = useDebounce(initial);
  const dFinal = useDebounce(final);
  const dYears = useDebounce(years);

  useEffect(() => {
    setSearchParams(
      { initial: String(initial), final: String(final), years: String(years) },
      { replace: true }
    );
  }, [initial, final, years, setSearchParams]);

  const cagr = useMemo(
    () => calculateCAGR(dInitial, dFinal, dYears),
    [dInitial, dFinal, dYears]
  );

  const absoluteReturn = dInitial > 0 ? ((dFinal - dInitial) / dInitial) * 100 : 0;
  const profit = dFinal - dInitial;

  // Animated CAGR display
  const animatedCagr = useCountUp(Math.round(cagr * 100)) / 100;

  const isValid = dInitial > 0 && dFinal > 0 && dYears > 0;
  const cagrColor = cagr >= 0 ? 'var(--color-success)' : 'var(--color-error)';

  return (
    <>
      <SEOMeta
        title="CAGR Calculator — Compound Annual Growth Rate Calculator | SIPCalc Pro"
        description="Calculate CAGR from initial value, final value and years. Instant compound annual growth rate with plain English explanation. Free online CAGR calculator."
        canonical="https://sipcalcpro.in/cagr-calculator"
      />
      <div className="calc-page">
        <div className="container">
          <nav className="calc-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">CAGR Calculator</span>
          </nav>

          <header className="calc-page__header">
            <h1>CAGR Calculator</h1>
            <p className="lead">
              Enter the starting value, ending value, and time period to instantly calculate the Compound Annual Growth Rate of any investment.
            </p>
          </header>

          <div className="calc-layout">
            <aside className="calc-inputs" aria-label="CAGR inputs">
              <div className="calc-inputs__title"><span>📊</span> Investment Values</div>
              <SliderInput label="Initial Investment / Value" value={initial} min={1000} max={10000000} step={1000} prefix="₹" onChange={setInitial} formatLabel={(v) => v.toLocaleString('en-IN')} />
              <SliderInput label="Final Value" value={final} min={1000} max={50000000} step={1000} prefix="₹" onChange={setFinal} formatLabel={(v) => v.toLocaleString('en-IN')} />
              <SliderInput label="Duration (Years)" value={years} min={1} max={40} step={0.5} suffix=" yr" onChange={setYears} />
              <ShareButton params={{ initial, final, years }} />
            </aside>

            <section className="calc-results" aria-label="CAGR result">
              {/* Big CAGR display */}
              <div className="cagr-result-box" style={!isValid ? { background: 'var(--color-bg-secondary)' } : {}}>
                {!isValid ? (
                  <>
                    <div className="cagr-result-box__value" style={{ color: 'var(--color-text-muted)', fontSize: '2rem' }}>—</div>
                    <div className="cagr-result-box__label" style={{ color: 'var(--color-text-muted)' }}>Enter values above</div>
                  </>
                ) : (
                  <>
                    <div
                      className="cagr-result-box__value"
                      aria-live="polite"
                      aria-atomic="true"
                      style={cagr < 0 ? { color: '#FCA5A5' } : {}}
                    >
                      {animatedCagr >= 0 ? '+' : ''}{animatedCagr.toFixed(2)}%
                    </div>
                    <div className="cagr-result-box__label">CAGR per annum</div>
                  </>
                )}
              </div>

              {isValid && (
                <>
                  <div className="results-grid results-grid--2" style={{ marginTop: 0 }}>
                    <div className="result-card">
                      <div className="result-card__label">Absolute Return</div>
                      <div className="result-card__value" style={{ color: absoluteReturn >= 0 ? 'var(--color-success)' : 'var(--color-error)' }}>
                        {absoluteReturn >= 0 ? '+' : ''}{absoluteReturn.toFixed(1)}%
                      </div>
                    </div>
                    <div className="result-card">
                      <div className="result-card__label">Profit / Loss</div>
                      <div className="result-card__value" style={{ color: profit >= 0 ? 'var(--color-success)' : 'var(--color-error)' }}>
                        {profit >= 0 ? '+' : ''}{formatCompact(Math.abs(profit))}
                      </div>
                    </div>
                  </div>

                  <div className="chart-card">
                    <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                      <strong style={{ color: 'var(--color-text)' }}>Plain English:</strong> Your investment of{' '}
                      <strong>{formatCompact(dInitial)}</strong> grew to{' '}
                      <strong>{formatCompact(dFinal)}</strong> in{' '}
                      <strong>{dYears} year{dYears !== 1 ? 's' : ''}</strong>.
                      That's equivalent to earning <strong style={{ color: cagrColor }}>{cagr.toFixed(2)}% every year</strong> on a compounded basis.
                      {cagr >= 15 && ' 🔥 Exceptional performance!'}
                      {cagr >= 12 && cagr < 15 && ' ✅ Great return, beating most large-cap benchmarks.'}
                      {cagr >= 8 && cagr < 12 && ' 📊 Decent return, in line with balanced fund performance.'}
                      {cagr >= 0 && cagr < 8 && ' ⚠️ Moderate return — consider reviewing your fund choice.'}
                      {cagr < 0 && ' ❌ Negative return — the investment lost value.'}
                    </p>
                  </div>

                  {/* Projection table */}
                  <div className="table-card">
                    <div className="table-card__title">Growth Projection at {cagr.toFixed(2)}% CAGR</div>
                    <div className="table-scroll">
                      <table className="data-table" aria-label="CAGR growth projection">
                        <thead>
                          <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Value</th>
                            <th scope="col">Growth</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: Math.min(Math.ceil(dYears), 30) }, (_, i) => {
                            const y = i + 1;
                            const val = dInitial * Math.pow(1 + cagr / 100, y);
                            return (
                              <tr key={y}>
                                <td>Year {y}</td>
                                <td>{formatCompact(val)}</td>
                                <td className="positive">+{formatPercent(((val - dInitial) / dInitial) * 100)}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>

          <article className="content-section">
            <h2>What is CAGR and How to Use It?</h2>
            <p>
              Compound Annual Growth Rate (CAGR) is the most commonly used metric to compare investment returns across different time periods. It smooths out year-to-year volatility and gives you a single "steady growth rate" that would have produced the same result.
            </p>

            <h3>The CAGR Formula</h3>
            <div className="formula-box">
              CAGR = [(Final Value / Initial Value)^(1/Years) − 1] × 100
            </div>
            <p>
              <strong>Verified Example:</strong> ₹1,00,000 → ₹2,00,000 in 5 years: CAGR = [(2/1)^0.2 − 1] × 100 = <strong>14.87%</strong>
            </p>

            <h3>CAGR vs Absolute Return</h3>
            <p>
              If you invested ₹1 lakh and it became ₹3 lakh in 10 years, absolute return = 200%. But CAGR = [(3)^0.1 − 1] × 100 = 11.6%. The CAGR is more meaningful because it tells you what annual rate would have produced this result — making it comparable across funds with different holding periods.
            </p>

            <h3>Limitations of CAGR</h3>
            <p>
              CAGR assumes constant growth — it doesn't reflect volatility. A fund that drops 50% one year and recovers 100% the next year has a 0% CAGR but a very different investor experience. For portfolios with multiple cash flows (SIPs, partial withdrawals), use XIRR instead.
            </p>
            <FAQSection items={FAQS} />
          </article>
        </div>
      </div>
    </>
  );
}
