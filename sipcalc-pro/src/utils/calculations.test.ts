import { describe, expect, test } from 'vitest';
import {
  calculateSIP,
  calculateLumpsum,
  calculateLumpsumVsSIP,
  calculateStepUpSIP,
  calculateCAGR,
  calculateXIRR,
} from './calculations';

describe('Financial Formulas Accuracy Tests', () => {
  // ── SIP Calculation ──
  test('calculates SIP future value accurately (Benchmark case)', () => {
    // ₹10,000/month, 12% p.a., 10 years
    const result = calculateSIP(10000, 12, 10);
    expect(result.totalInvested).toBe(1200000);
    expect(result.maturityValue).toBe(2323391);
    expect(result.totalReturns).toBe(1123391);
    expect(result.yearlyData).toHaveLength(10);
    expect(result.yearlyData[9].value).toBe(2323391);
  });

  test('calculates SIP future value with alternate case', () => {
    // ₹5,000/month, 12% p.a., 10 years
    const result = calculateSIP(5000, 12, 10);
    expect(result.totalInvested).toBe(600000);
    expect(result.maturityValue).toBe(1161695);
  });

  // ── Lumpsum Calculation ──
  test('calculates Lumpsum future value accurately', () => {
    // ₹12,00,000 principal, 12% return, 10 years
    const result = calculateLumpsum(1200000, 12, 10);
    expect(result.invested).toBe(1200000);
    expect(result.maturityValue).toBe(3727018);
    expect(result.totalReturns).toBe(2527018);
  });

  // ── Lumpsum vs SIP Comparison ──
  test('calculates Lumpsum vs SIP correctly', () => {
    const result = calculateLumpsumVsSIP(1200000, 12, 10);
    expect(result.monthlyForSIP).toBe(10000);
    expect(result.lumpsum.maturityValue).toBe(3727018);
    expect(result.sip.maturityValue).toBe(2323391);
  });

  // ── Step-up SIP Calculation ──
  test('calculates Step-Up SIP future value accurately', () => {
    // ₹10,000 initial monthly, 12% p.a., 10 years, 10% annual step-up
    const result = calculateStepUpSIP(10000, 12, 10, 10);
    // Year 1: 10,000/mo. Year 2: 11,000/mo. ... Year 10: 23,579.47/mo
    // Total invested should sum up to: Sum of 12 * 10000 * (1.10)^i for i=0..9
    expect(result.totalInvested).toBe(1912491);
    expect(result.maturityValue).toBe(3374326);
    expect(result.totalReturns).toBe(1461835);
    expect(result.yearlyData).toHaveLength(10);
  });

  // ── CAGR Calculation ──
  test('calculates CAGR accurately', () => {
    // ₹1,00,000 to ₹2,00,000 in 5 years
    const result = calculateCAGR(100000, 200000, 5);
    expect(result).toBeCloseTo(14.869835, 4);
  });

  // ── XIRR Calculation ──
  test('calculates XIRR accurately (Benchmark case)', () => {
    // Irregular Cash Flows:
    // 2020-01-01: -10000 (Investment)
    // 2021-01-01: -10000 (Investment)
    // 2022-01-01: -10000 (Investment)
    // 2023-01-01: +37000 (Redemption)
    const cashflows = [
      { date: '2020-01-01', amount: -10000 },
      { date: '2021-01-01', amount: -10000 },
      { date: '2022-01-01', amount: -10000 },
      { date: '2023-01-01', amount: 37000 },
    ];
    const result = calculateXIRR(cashflows);
    expect(result).not.toBeNull();
    expect(result!).toBeCloseTo(10.8614, 2);
  });
});

describe('Financial Formulas Edge Cases', () => {
  test('handles zero duration safely', () => {
    const sip = calculateSIP(10000, 12, 0);
    expect(sip.totalInvested).toBe(0);
    expect(sip.maturityValue).toBe(0);

    const lumpsum = calculateLumpsum(1200000, 12, 0);
    expect(lumpsum.maturityValue).toBe(1200000);

    const cagr = calculateCAGR(100000, 200000, 0);
    expect(cagr).toBe(0);
  });

  test('handles zero return rate safely', () => {
    const sip = calculateSIP(10000, 0, 10);
    expect(sip.totalInvested).toBe(1200000);
    expect(sip.maturityValue).toBe(1200000);
    expect(sip.totalReturns).toBe(0);

    const stepUp = calculateStepUpSIP(10000, 0, 5, 10);
    // Year 1: 10000 * 12 = 120000
    // Year 2: 11000 * 12 = 132000
    // Year 3: 12100 * 12 = 145200
    // Year 4: 13310 * 12 = 159720
    // Year 5: 14641 * 12 = 175692
    // Total: 732612
    expect(stepUp.totalInvested).toBe(732612);
    expect(stepUp.maturityValue).toBe(732612);
  });

  test('handles very large numbers (Scale Testing)', () => {
    // ₹100 Crore initial investment
    const result = calculateLumpsum(1000000000, 15, 20);
    expect(result.maturityValue).toBe(16366537393); // ~16.36 Crores * 10
  });

  test('recommends null or fails safely for invalid XIRR configurations', () => {
    // Single cash flow
    const singleFlow = [{ date: '2020-01-01', amount: -10000 }];
    expect(calculateXIRR(singleFlow)).toBeNull();

    // All same sign (no redemption, all positive)
    const allPositive = [
      { date: '2020-01-01', amount: 10000 },
      { date: '2021-01-01', amount: 10000 },
    ];
    expect(calculateXIRR(allPositive)).toBeNull();
  });
});
