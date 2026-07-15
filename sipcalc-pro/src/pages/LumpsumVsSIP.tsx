import { Suspense, lazy, useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import SliderInput from '../components/SliderInput';
import ResultCard from '../components/ResultCard';
import ShareButton from '../components/ShareButton';
import FAQSection from '../components/FAQSection';
import { calculateLumpsumVsSIP, getLumpsumVsSIPChartData } from '../utils/calculations';
import { formatCurrency, formatCompact } from '../utils/formatters';
import { useDebounce } from '../hooks/useDebounce';

const ComparisonChart = lazy(() => import('../components/charts/ComparisonChart'));

const FAQS = [
  {
    question: 'When is lumpsum better than SIP?',
    answer: 'A lumpsum investment tends to outperform SIP when the market is at a significant low point and expected to rise consistently. If you have a windfall (bonus, inheritance) and strong conviction about the market direction, lumpsum can deliver higher returns than SIP over the same period.',
  },
  {
    question: 'When is SIP better than lumpsum?',
    answer: 'SIP is better in volatile markets because it benefits from rupee-cost averaging — you buy more units when prices are low and fewer when prices are high. SIP also enforces investment discipline by automating monthly contributions regardless of market conditions.',
  },
  {
    question: 'Does this calculator assume the same amount of money?',
    answer: 'Yes. We assume the same total capital invested. For a lumpsum, the full amount is invested on Day 1. For SIP, the capital is divided equally across all months of the investment period. This gives a fair apples-to-apples comparison.',
  },
  {
    question: 'Why does lumpsum often beat SIP mathematically?',
    answer: 'A lumpsum investment has the entire principal working from Day 1, so compounding applies for the full period. In a SIP, contributions made in later months have less time to compound. However, real markets are volatile, so SIP often wins by eliminating the need to time the market correctly.',
  },
];

export default function LumpsumVsSIP() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [capital, setCapital] = useState(() => Number(searchParams.get('capital') ?? 1200000));
  const [returnPct, setReturnPct] = useState(() => Number(searchParams.get('return') ?? 12));
  const [years, setYears] = useState(() => Number(searchParams.get('years') ?? 10));

  const dCapital = useDebounce(capital);
  const dReturn = useDebounce(returnPct);
  const dYears = useDebounce(years);

  useEffect(() => {
    setSearchParams(
      { capital: String(capital), return: String(returnPct), years: String(years) },
      { replace: true }
    );
  }, [capital, returnPct, years, setSearchParams]);

  const { lumpsum, sip, monthlyForSIP } = useMemo(
    () => calculateLumpsumVsSIP(dCapital, dReturn, dYears),
    [dCapital, dReturn, dYears]
  );

  const chartData = useMemo(
    () => getLumpsumVsSIPChartData(dCapital, dReturn, dYears),
    [dCapital, dReturn, dYears]
  );

  const lumpsumWins = lumpsum.maturityValue >= sip.maturityValue;

  return (
    <>
      <SEOMeta
        title="Lumpsum vs SIP Calculator — Which Gives Higher Returns? | SIPCalc Pro"
        description="Compare lumpsum vs SIP investment returns side-by-side with the same capital, return rate and duration. See which strategy grows your money faster."
        canonical="https://sipcalcpro.in/lumpsum-vs-sip"
      />
      <div className="calc-page">
        <div className="container">
          <nav className="calc-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">Lumpsum vs SIP</span>
          </nav>

          <header className="calc-page__header">
            <h1>Lumpsum vs SIP Calculator</h1>
            <p className="lead">
              Compare how the same capital grows when invested all at once (lumpsum) versus spread monthly (SIP) — same return, same duration.
            </p>
          </header>

          <div className="calc-layout">
            <aside className="calc-inputs" aria-label="Calculator inputs">
              <div className="calc-inputs__title"><span>⚖️</span> Investment Parameters</div>
              <SliderInput label="Total Capital" value={capital} min={10000} max={10000000} step={10000} prefix="₹" onChange={setCapital} formatLabel={(v) => v.toLocaleString('en-IN')} />
              <SliderInput label="Expected Annual Return" value={returnPct} min={1} max={30} step={0.5} suffix="%" onChange={setReturnPct} />
              <SliderInput label="Investment Duration" value={years} min={1} max={40} step={1} suffix=" yr" onChange={setYears} />
              <div style={{ marginTop: 12, padding: '10px 12px', background: 'var(--color-bg-secondary)', borderRadius: 8, fontSize: 13, color: 'var(--color-text-secondary)' }}>
                ℹ️ SIP equivalent: <strong style={{ color: 'var(--color-text)' }}>{formatCurrency(monthlyForSIP)}/month</strong>
              </div>
              <ShareButton params={{ capital, return: returnPct, years }} />
            </aside>

            <section className="calc-results" aria-label="Results">
              {/* Winner banner */}
              <div
                className="chart-card"
                style={{
                  background: lumpsumWins
                    ? 'color-mix(in srgb, var(--chart-lumpsum) 10%, transparent)'
                    : 'color-mix(in srgb, var(--color-accent) 10%, transparent)',
                  borderColor: lumpsumWins
                    ? 'color-mix(in srgb, var(--chart-lumpsum) 25%, transparent)'
                    : 'color-mix(in srgb, var(--color-accent) 25%, transparent)',
                  padding: '14px 20px',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 700,
                    color: lumpsumWins ? 'var(--chart-lumpsum)' : 'var(--color-accent)',
                  }}
                >
                  {lumpsumWins ? '📊 Lumpsum wins by ' : '📈 SIP wins by '}
                  <strong>{formatCompact(Math.abs(lumpsum.maturityValue - sip.maturityValue))}</strong>
                  {' '}at {returnPct}% p.a. over {years} years
                </p>
              </div>

              <div className="comparison-grid">
                <div className={`comparison-side${lumpsumWins ? ' comparison-side--winner' : ''}`}>
                  <div className="comparison-side__title">
                    📊 Lumpsum
                    {lumpsumWins && <span className="winner-badge">Winner</span>}
                  </div>
                  <ResultCard label="Invested" value={capital} compact />
                  <div style={{ marginTop: 12 }}>
                    <ResultCard label="Maturity Value" value={lumpsum.maturityValue} variant="primary" compact />
                  </div>
                  <div style={{ marginTop: 8, fontSize: 13, color: 'var(--color-success)', fontWeight: 600 }}>
                    +{formatCompact(lumpsum.totalReturns)} returns
                  </div>
                </div>
                <div className={`comparison-side${!lumpsumWins ? ' comparison-side--winner' : ''}`}>
                  <div className="comparison-side__title">
                    📈 SIP ({formatCurrency(monthlyForSIP)}/mo)
                    {!lumpsumWins && <span className="winner-badge">Winner</span>}
                  </div>
                  <ResultCard label="Total Invested" value={sip.totalInvested} compact />
                  <div style={{ marginTop: 12 }}>
                    <ResultCard label="Maturity Value" value={sip.maturityValue} variant="accent" compact />
                  </div>
                  <div style={{ marginTop: 8, fontSize: 13, color: 'var(--color-success)', fontWeight: 600 }}>
                    +{formatCompact(sip.totalReturns)} returns
                  </div>
                </div>
              </div>

              <div className="chart-card">
                <div className="chart-card__title">📊 Year-by-Year Value Comparison</div>
                <div className="chart-container">
                  <Suspense fallback={<div className="chart-loading">Loading chart…</div>}>
                    <ComparisonChart data={chartData} />
                  </Suspense>
                </div>
              </div>
            </section>
          </div>

          <article className="content-section">
            <h2>Lumpsum vs SIP: Which Should You Choose?</h2>
            <p>
              Both lumpsum and SIP are valid investment strategies — but they suit different situations. The right choice depends on your available capital, risk appetite, and market timing ability.
            </p>

            <h3>When Lumpsum Wins</h3>
            <p>
              Mathematically, a lumpsum investment placed at the beginning of the period has more time to compound. If markets rise consistently (as they do over long periods in well-chosen equity funds), lumpsum delivers higher returns because 100% of the capital is working from Day 1.
            </p>

            <h3>When SIP Wins</h3>
            <p>
              In volatile markets, SIP wins through <strong>rupee-cost averaging</strong>. You buy more units when markets are low and fewer when markets are high — automatically reducing your average cost per unit. This removes the emotional and analytical burden of timing the market.
            </p>

            <h3>The Verdict for Most Investors</h3>
            <p>
              For salaried investors who don't have a large lumpsum and receive income monthly, SIP is the natural and optimal choice. For investors who receive bonuses or have idle cash, a lumpsum (or STP — Systematic Transfer Plan) can be more effective. Most financial advisors recommend maintaining a core SIP regardless of market conditions.
            </p>
            <FAQSection items={FAQS} />
          </article>
        </div>
      </div>
    </>
  );
}
