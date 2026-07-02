// ============================================================
// SIPCalc Pro — Input Validators
// Returns error string or null (valid)
// ============================================================

export function validatePositive(value: number, label: string): string | null {
  if (isNaN(value) || value === null || value === undefined)
    return `${label} must be a number`;
  if (value <= 0) return `${label} must be greater than 0`;
  return null;
}

export function validateMin(
  value: number,
  min: number,
  label: string
): string | null {
  if (isNaN(value)) return `${label} must be a number`;
  if (value < min) return `${label} must be at least ${min}`;
  return null;
}

export function validateRange(
  value: number,
  min: number,
  max: number,
  label: string
): string | null {
  if (isNaN(value)) return `${label} must be a number`;
  if (value < min || value > max)
    return `${label} must be between ${min} and ${max}`;
  return null;
}

export function validateSIPInputs(
  monthly: number,
  annualReturn: number,
  years: number
): Record<string, string | null> {
  return {
    monthly: validatePositive(monthly, 'Monthly investment'),
    annualReturn: validateRange(annualReturn, 0.1, 100, 'Annual return'),
    years: validateRange(years, 1, 50, 'Duration'),
  };
}

export function validateCAGRInputs(
  initial: number,
  final: number,
  years: number
): Record<string, string | null> {
  return {
    initial: validatePositive(initial, 'Initial value'),
    final: validatePositive(final, 'Final value'),
    years: validateRange(years, 0.1, 100, 'Duration'),
  };
}

export function hasErrors(errors: Record<string, string | null>): boolean {
  return Object.values(errors).some((e) => e !== null);
}
