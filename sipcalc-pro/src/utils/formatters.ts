// ============================================================
// SIPCalc Pro — Indian Number Formatters
// Uses Intl.NumberFormat for proper en-IN locale
// ============================================================

/**
 * Format number in Indian currency style: ₹12,34,567
 */
export function formatCurrency(num: number): string {
  if (!isFinite(num) || isNaN(num)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(num));
}

/**
 * Format large numbers with lakhs/crores suffix:
 * e.g. ₹1.23 Cr, ₹45.67 L
 */
export function formatCompact(num: number): string {
  if (!isFinite(num) || isNaN(num)) return '₹0';
  const n = Math.round(num);
  if (n >= 10_000_000) {
    return `₹${(n / 10_000_000).toFixed(2)} Cr`;
  }
  if (n >= 100_000) {
    return `₹${(n / 100_000).toFixed(2)} L`;
  }
  return formatCurrency(n);
}

/**
 * Format a plain number with Indian grouping (no currency symbol)
 */
export function formatNumber(num: number): string {
  if (!isFinite(num) || isNaN(num)) return '0';
  return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(
    Math.round(num)
  );
}

/**
 * Format percentage with 2 decimal places
 */
export function formatPercent(pct: number): string {
  if (!isFinite(pct) || isNaN(pct)) return '0%';
  return `${pct.toFixed(2)}%`;
}

/**
 * Parse an Indian-formatted string back to number
 */
export function parseIndianNumber(str: string): number {
  const cleaned = str.replace(/[^0-9.]/g, '');
  return parseFloat(cleaned) || 0;
}

/**
 * Convert months to human-readable string
 */
export function monthsToReadable(months: number): string {
  const y = Math.floor(months / 12);
  const m = months % 12;
  const parts: string[] = [];
  if (y > 0) parts.push(`${y} year${y > 1 ? 's' : ''}`);
  if (m > 0) parts.push(`${m} month${m > 1 ? 's' : ''}`);
  return parts.join(' ') || '0 months';
}

/**
 * Axis tick formatter for Recharts (compact Indian format)
 */
export function axisTickFormatter(value: number): string {
  if (value >= 10_000_000) return `${(value / 10_000_000).toFixed(1)}Cr`;
  if (value >= 100_000) return `${(value / 100_000).toFixed(1)}L`;
  if (value >= 1000) return `${(value / 1000).toFixed(0)}K`;
  return String(value);
}
