import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { formatCompact, formatCurrency } from '../utils/formatters';

interface ResultCardProps {
  label: string;
  value: number;
  variant?: 'default' | 'primary' | 'accent';
  compact?: boolean;
  sub?: string;
  subVariant?: 'default' | 'success';
  /** Optional raw invested amount — when provided, shows milestone badge if value >= 2× invested */
  investedAmount?: number;
}

export default function ResultCard({
  label,
  value,
  variant = 'default',
  compact = false,
  sub,
  subVariant = 'default',
  investedAmount,
}: ResultCardProps) {
  const animated = useCountUp(value);
  const formatted = compact ? formatCompact(animated) : formatCurrency(animated);

  // Milestone: corpus ≥ 2× invested (only on primary/accent cards where it's contextually meaningful)
  const isMilestone =
    investedAmount != null &&
    investedAmount > 0 &&
    value >= investedAmount * 2 &&
    (variant === 'primary' || variant === 'accent');

  // Value-pop animation: re-trigger on each value change
  const [popping, setPopping] = useState(false);
  const prevValue = useRef(value);
  useEffect(() => {
    if (value !== prevValue.current) {
      setPopping(false);
      // Flush, then re-add class
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setPopping(true));
      });
      prevValue.current = value;
    }
  }, [value]);

  const handleAnimationEnd = () => setPopping(false);

  return (
    <div
      className={[
        'result-card',
        variant !== 'default' ? `result-card--${variant}` : '',
        isMilestone ? 'milestone-glow' : '',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="result-card__label">{label}</div>
      <div
        className={`result-card__value${popping ? ' result-card__value--popping' : ''}`}
        aria-live="polite"
        aria-atomic="true"
        onAnimationEnd={handleAnimationEnd}
      >
        {formatted}
      </div>

      {isMilestone && (
        <span className="milestone-badge" role="status" aria-label="Milestone: corpus doubled">
          🎉 2× corpus achieved!
        </span>
      )}

      {sub && !isMilestone && (
        <div className={`result-card__sub${subVariant === 'success' ? ' result-card__sub--success' : ''}`}>
          {sub}
        </div>
      )}
    </div>
  );
}
