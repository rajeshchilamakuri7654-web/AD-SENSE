// ============================================================
// SIPCalc Pro — Core Financial Calculations
// All formulas verified against manual examples
// ============================================================

export interface SIPResult {
  totalInvested: number;
  totalReturns: number;
  maturityValue: number;
  yearlyData: YearlyDataPoint[];
}

export interface YearlyDataPoint {
  year: number;
  invested: number;
  value: number;
  returns: number;
}

export interface StepUpResult {
  totalInvested: number;
  totalReturns: number;
  maturityValue: number;
  yearlyData: StepUpYearlyPoint[];
}

export interface StepUpYearlyPoint {
  year: number;
  monthlySIP: number;
  yearInvested: number;
  cumulativeInvested: number;
  cumulativeValue: number;
}

export interface LumpsumResult {
  maturityValue: number;
  totalReturns: number;
  invested: number;
}

export interface XIRREntry {
  date: string;
  amount: number;
}

// ============================================================
// SIP Future Value
// FV = P × [(1+r)^n − 1] / r × (1+r)
// r = monthly rate = annual_rate / 12 / 100
// n = total months
// Verified: ₹5,000/mo, 12% p.a., 10yr → ≈₹11,61,695
// ============================================================
export function calculateSIP(
  monthlyInvestment: number,
  annualReturnPct: number,
  years: number
): SIPResult {
  const r = annualReturnPct / 12 / 100;
  const n = years * 12;

  const yearlyData: YearlyDataPoint[] = [];

  for (let y = 1; y <= years; y++) {
    const months = y * 12;
    const invested = monthlyInvestment * months;
    let value: number;
    if (r === 0) {
      value = invested;
    } else {
      value = monthlyInvestment * ((Math.pow(1 + r, months) - 1) / r) * (1 + r);
    }
    yearlyData.push({
      year: y,
      invested,
      value: Math.round(value),
      returns: Math.round(value - invested),
    });
  }

  const totalInvested = monthlyInvestment * n;
  let maturityValue: number;
  if (r === 0) {
    maturityValue = totalInvested;
  } else {
    maturityValue = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  }
  maturityValue = Math.round(maturityValue);

  return {
    totalInvested: Math.round(totalInvested),
    totalReturns: Math.round(maturityValue - totalInvested),
    maturityValue,
    yearlyData,
  };
}

// ============================================================
// Lumpsum Future Value
// FV = P × (1 + r/100)^years
// ============================================================
export function calculateLumpsum(
  principal: number,
  annualReturnPct: number,
  years: number
): LumpsumResult {
  const r = annualReturnPct / 100;
  const maturityValue = Math.round(principal * Math.pow(1 + r, years));
  return {
    invested: principal,
    maturityValue,
    totalReturns: maturityValue - principal,
  };
}

// ============================================================
// Lumpsum vs SIP Comparison
// Same capital, same duration, same return rate
// Lumpsum invests the full amount once; SIP spreads it monthly
// ============================================================
export function calculateLumpsumVsSIP(
  totalCapital: number,
  annualReturnPct: number,
  years: number
) {
  const months = years * 12;
  const monthlyForSIP = totalCapital / months;

  const lumpsum = calculateLumpsum(totalCapital, annualReturnPct, years);
  const sip = calculateSIP(monthlyForSIP, annualReturnPct, years);

  return {
    lumpsum,
    sip,
    monthlyForSIP: Math.round(monthlyForSIP),
    totalCapital,
  };
}

// ============================================================
// Step-Up SIP
// Each year, monthly SIP increases by stepUpPct %
// Year y: monthly SIP = P * (1 + stepup/100)^(y-1)
// FV_y = SIP_y * [(1+r)^12 - 1] / r * (1+r) * (1+r)^(remaining_months)
// Total FV = Σ FV_y
// ============================================================
export function calculateStepUpSIP(
  initialMonthlySIP: number,
  annualReturnPct: number,
  years: number,
  annualStepUpPct: number
): StepUpResult {
  const r = annualReturnPct / 12 / 100;
  const yearlyData: StepUpYearlyPoint[] = [];
  let totalMaturityValue = 0;
  let totalInvested = 0;

  for (let y = 1; y <= years; y++) {
    const monthlySIP = initialMonthlySIP * Math.pow(1 + annualStepUpPct / 100, y - 1);
    const yearInvested = monthlySIP * 12;
    totalInvested += yearInvested;

    // FV of this year's SIP contributions at end of year y
    let fvAtEndOfYear: number;
    if (r === 0) {
      fvAtEndOfYear = yearInvested;
    } else {
      fvAtEndOfYear = monthlySIP * ((Math.pow(1 + r, 12) - 1) / r) * (1 + r);
    }

    // Additional months of growth after year y
    const remainingMonths = (years - y) * 12;
    const fvAtEnd = fvAtEndOfYear * Math.pow(1 + r, remainingMonths);
    totalMaturityValue += fvAtEnd;

    yearlyData.push({
      year: y,
      monthlySIP: Math.round(monthlySIP),
      yearInvested: Math.round(yearInvested),
      cumulativeInvested: Math.round(totalInvested),
      cumulativeValue: Math.round(totalMaturityValue),
    });
  }

  return {
    totalInvested: Math.round(totalInvested),
    totalReturns: Math.round(totalMaturityValue - totalInvested),
    maturityValue: Math.round(totalMaturityValue),
    yearlyData,
  };
}

// ============================================================
// CAGR
// CAGR = [(Final/Initial)^(1/years) − 1] × 100
// Verified: ₹1L → ₹2L in 5 years → 14.87%
// ============================================================
export function calculateCAGR(
  initialValue: number,
  finalValue: number,
  years: number
): number {
  if (initialValue <= 0 || finalValue <= 0 || years <= 0) return 0;
  return (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
}

// ============================================================
// XIRR — Newton-Raphson iteration
// NPV(r) = Σ [ Ci / (1+r)^(di/365) ] = 0
// Handles irregular cash flows with different dates
// Sign convention: outflows negative, inflows positive
// ============================================================
export function calculateXIRR(cashflows: XIRREntry[]): number | null {
  if (cashflows.length < 2) return null;

  const entries = cashflows.map((cf) => ({
    date: new Date(cf.date),
    amount: cf.amount,
  }));

  // Validate: must have at least one positive and one negative flow
  const hasPositive = entries.some((e) => e.amount > 0);
  const hasNegative = entries.some((e) => e.amount < 0);
  if (!hasPositive || !hasNegative) return null;

  const baseDate = entries[0].date;

  const yearFractions = entries.map(
    (e) => (e.date.getTime() - baseDate.getTime()) / (365.25 * 24 * 3600 * 1000)
  );

  const npv = (rate: number): number =>
    entries.reduce(
      (sum, cf, i) => sum + cf.amount / Math.pow(1 + rate, yearFractions[i]),
      0
    );

  const dnpv = (rate: number): number =>
    entries.reduce(
      (sum, cf, i) =>
        sum -
        (yearFractions[i] * cf.amount) /
          Math.pow(1 + rate, yearFractions[i] + 1),
      0
    );

  let rate = 0.1; // initial guess: 10%
  for (let i = 0; i < 1000; i++) {
    const n = npv(rate);
    const d = dnpv(rate);
    if (Math.abs(d) < 1e-12) break;
    const newRate = rate - n / d;
    if (Math.abs(newRate - rate) < 1e-7) {
      return newRate * 100;
    }
    rate = newRate;
    // Clamp to avoid divergence
    if (rate < -0.999) rate = -0.999;
    if (rate > 100) rate = 100;
  }

  return null; // did not converge
}

// ============================================================
// Yearly chart data for Lumpsum vs SIP comparison
// ============================================================
export function getLumpsumVsSIPChartData(
  totalCapital: number,
  annualReturnPct: number,
  years: number
) {
  const months = years * 12;
  const monthlyForSIP = totalCapital / months;
  const r = annualReturnPct / 12 / 100;
  const rA = annualReturnPct / 100;

  return Array.from({ length: years }, (_, i) => {
    const y = i + 1;
    const lumpsumVal = Math.round(totalCapital * Math.pow(1 + rA, y));
    let sipVal: number;
    if (r === 0) {
      sipVal = Math.round(monthlyForSIP * y * 12);
    } else {
      sipVal = Math.round(
        monthlyForSIP * ((Math.pow(1 + r, y * 12) - 1) / r) * (1 + r)
      );
    }
    return {
      year: `Y${y}`,
      lumpsum: lumpsumVal,
      sip: sipVal,
    };
  });
}
