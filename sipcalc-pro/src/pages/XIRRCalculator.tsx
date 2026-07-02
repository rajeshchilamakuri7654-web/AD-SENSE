import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SEOMeta from '../components/SEOMeta';
import ShareButton from '../components/ShareButton';
import FAQSection from '../components/FAQSection';
import { calculateXIRR } from '../utils/calculations';
import type { XIRREntry } from '../utils/calculations';

const FAQS = [
  {
    question: 'What does XIRR stand for?',
    answer: 'XIRR stands for Extended Internal Rate of Return. It calculates the annualised return rate on a series of cash flows that occur at irregular intervals, making it ideal for measuring the actual return on SIP investments, partial redemptions, or ad-hoc investments.',
  },
  {
    question: 'How is XIRR different from CAGR?',
    answer: 'CAGR assumes a single investment at the start and a single payout at the end. XIRR handles multiple cash flows at different dates. This makes XIRR far more accurate for SIP investments where money is invested monthly and possibly redeemed at various points.',
  },
  {
    question: 'What sign convention should I use?',
    answer: 'Use negative numbers (−) for cash outflows (amounts you invest/pay) and positive numbers (+) for cash inflows (amounts you receive/redeem). For example, if you invested ₹10,000, enter −10000. If you received ₹15,000 on redemption, enter +15000.',
  },
  {
    question: 'Why does my XIRR calculation fail?',
    answer: 'XIRR requires at least one positive and one negative cash flow to converge. If all values have the same sign, or if the cash flows are economically impossible (e.g., you receive less than you invested across all scenarios), the algorithm will not find a valid rate.',
  },
  {
    question: 'What is a good XIRR for a mutual fund?',
    answer: 'For equity mutual funds in India, an XIRR of 12–18% over a 5–10 year period is generally considered good. Large-cap funds typically deliver 10–14%, while mid/small-cap funds may reach 15–20%+. Compare your XIRR to the benchmark index to assess fund performance.',
  },
];

const defaultFlows: XIRREntry[] = [
  { date: '2020-01-01', amount: -10000 },
  { date: '2021-01-01', amount: -10000 },
  { date: '2022-01-01', amount: -10000 },
  { date: '2023-01-01', amount: 37000 },
];

export default function XIRRCalculator() {
  const [flows, setFlows] = useState<XIRREntry[]>(defaultFlows);

  const result = useMemo(() => {
    const valid = flows.filter((f) => f.date && f.amount !== 0 && !isNaN(f.amount));
    if (valid.length < 2) return null;
    return calculateXIRR(valid);
  }, [flows]);

  const addFlow = () => {
    const lastDate = flows[flows.length - 1]?.date || '';
    const nextDate = lastDate
      ? new Date(new Date(lastDate).getTime() + 365 * 24 * 3600 * 1000)
          .toISOString()
          .split('T')[0]
      : new Date().toISOString().split('T')[0];
    setFlows([...flows, { date: nextDate, amount: -5000 }]);
  };

  const removeFlow = (i: number) => {
    setFlows(flows.filter((_, idx) => idx !== i));
  };

  const updateFlow = (i: number, field: keyof XIRREntry, value: string) => {
    setFlows(flows.map((f, idx) => {
      if (idx !== i) return f;
      return { ...f, [field]: field === 'amount' ? Number(value) : value };
    }));
  };

  const hasError = result === null;
  const validFlows = flows.filter((f) => f.date && f.amount !== 0);

  return (
    <>
      <SEOMeta
        title="XIRR Calculator — Calculate Annualised Return on Irregular Cash Flows | SIPCalc Pro"
        description="Calculate XIRR (Extended Internal Rate of Return) for multiple cash flows with different dates. Perfect for mutual fund SIP portfolios and irregular investments."
        canonical="https://sipcalcpro.in/xirr-calculator"
      />
      <div className="calc-page">
        <div className="container">
          <nav className="calc-page__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">XIRR Calculator</span>
          </nav>

          <header className="calc-page__header">
            <h1>XIRR Calculator</h1>
            <p className="lead">
              Calculate the true annualised return (XIRR) on a series of investments and redemptions at different dates — exactly how your mutual fund statement calculates it.
            </p>
          </header>

          <div className="calc-layout">
            <aside className="calc-inputs" aria-label="XIRR inputs">
              <div className="calc-inputs__title"><span>🔢</span> Cash Flows</div>
              <div className="xirr-hint">
                💡 Use <strong>negative (−)</strong> for investments (outflows) and <strong>positive (+)</strong> for redemptions (inflows).
              </div>

              <div className="xirr-flow-header">
                <span>Date</span>
                <span>Amount (₹)</span>
                <span></span>
              </div>
              <div className="xirr-flows">
                {flows.map((f, i) => (
                  <div className="xirr-flow-row" key={i}>
                    <input
                      type="date"
                      value={f.date}
                      onChange={(e) => updateFlow(i, 'date', e.target.value)}
                      aria-label={`Cash flow ${i + 1} date`}
                    />
                    <input
                      type="number"
                      value={f.amount}
                      onChange={(e) => updateFlow(i, 'amount', e.target.value)}
                      placeholder="e.g. -10000"
                      aria-label={`Cash flow ${i + 1} amount`}
                      step="1"
                    />
                    <button
                      type="button"
                      className="xirr-remove-btn"
                      onClick={() => removeFlow(i)}
                      aria-label={`Remove cash flow ${i + 1}`}
                      disabled={flows.length <= 2}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              <button type="button" className="btn btn--outline" style={{ width: '100%', marginBottom: 12 }} onClick={addFlow}>
                + Add Cash Flow
              </button>

              <ShareButton params={{ flows: flows.length }} />
            </aside>

            <section className="calc-results" aria-label="XIRR result">
              <div className="cagr-result-box" style={{ background: hasError || validFlows.length < 2 ? 'var(--color-bg-secondary)' : undefined }}>
                {validFlows.length < 2 ? (
                  <>
                    <div className="cagr-result-box__value" style={{ color: 'var(--color-text-muted)', fontSize: '2rem' }}>
                      —
                    </div>
                    <div className="cagr-result-box__label" style={{ color: 'var(--color-text-muted)' }}>
                      Add at least 2 cash flows
                    </div>
                  </>
                ) : hasError ? (
                  <>
                    <div className="cagr-result-box__value" style={{ color: 'var(--color-error)', fontSize: '2rem' }}>
                      ⚠
                    </div>
                    <div className="cagr-result-box__label" style={{ color: 'var(--color-error)' }}>
                      Could not converge — check your cash flows (need at least one + and one −)
                    </div>
                  </>
                ) : (
                  <>
                    <div className="cagr-result-box__value">
                      {result! >= 0 ? '+' : ''}{result!.toFixed(2)}%
                    </div>
                    <div className="cagr-result-box__label">Annual XIRR</div>
                  </>
                )}
              </div>

              {result !== null && (
                <div className="chart-card">
                  <p style={{ margin: 0, fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    <strong>Interpretation:</strong> Your portfolio of {flows.length} cash flows has earned a compounded annual return of{' '}
                    <strong style={{ color: result >= 0 ? 'var(--color-success)' : 'var(--color-error)' }}>
                      {result.toFixed(2)}% per annum
                    </strong>
                    {result >= 12
                      ? ' — an excellent return, beating most large-cap fund benchmarks.'
                      : result >= 8
                      ? ' — a decent return, comparable to balanced/hybrid fund performance.'
                      : result >= 0
                      ? ' — a moderate return. Consider reviewing your fund selection.'
                      : ' — a negative return. Review your investment strategy.'}
                  </p>
                </div>
              )}

              {/* Cash flow summary table */}
              <div className="table-card">
                <div className="table-card__title">Cash Flow Summary</div>
                <div className="table-scroll">
                  <table className="data-table" aria-label="Cash flow entries">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {flows.map((f, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{f.date || '—'}</td>
                          <td style={{ color: f.amount < 0 ? 'var(--color-error)' : 'var(--color-success)', fontWeight: 600 }}>
                            {f.amount >= 0 ? '+' : ''}₹{Math.abs(f.amount).toLocaleString('en-IN')}
                          </td>
                          <td>{f.amount < 0 ? '📤 Investment' : '📥 Redemption'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          <article className="content-section">
            <h2>What is XIRR and How Is It Calculated?</h2>
            <p>
              XIRR — Extended Internal Rate of Return — is the standard method used by mutual fund platforms, brokerages, and financial advisors to measure the actual annualised return on an investment portfolio with irregular cash flows. Unlike simple return percentages, XIRR accounts for the exact timing and size of each investment and redemption.
            </p>

            <h3>The XIRR Formula</h3>
            <p>XIRR finds the rate r such that the Net Present Value (NPV) of all cash flows equals zero:</p>
            <div className="formula-box">
              NPV(r) = Σ [ Cᵢ / (1 + r)^(dᵢ/365) ] = 0
              <br /><br />
              Where:
              <br />Cᵢ = Amount of each cash flow (negative for outflows, positive for inflows)
              <br />dᵢ = Number of days from the first cash flow to cash flow i
              <br />r = XIRR (annualised rate)
            </div>
            <p>
              Our calculator uses Newton-Raphson iterative method to solve for r, converging to a precision of 0.00001%.
            </p>

            <h3>Worked Example</h3>
            <p>You invest ₹10,000 on 1 Jan 2020, ₹10,000 on 1 Jan 2021, ₹10,000 on 1 Jan 2022, and receive ₹37,000 on 1 Jan 2023. The XIRR is approximately <strong>15.6% p.a.</strong></p>
            <FAQSection items={FAQS} />
          </article>
        </div>
      </div>
    </>
  );
}
