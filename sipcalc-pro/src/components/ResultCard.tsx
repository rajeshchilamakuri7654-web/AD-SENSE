import { useCountUp } from '../hooks/useCountUp';
import { formatCompact, formatCurrency } from '../utils/formatters';

interface ResultCardProps {
  label: string;
  value: number;
  variant?: 'default' | 'primary' | 'accent';
  compact?: boolean;
  sub?: string;
  subVariant?: 'default' | 'success';
}

export default function ResultCard({
  label,
  value,
  variant = 'default',
  compact = false,
  sub,
  subVariant = 'default',
}: ResultCardProps) {
  const animated = useCountUp(value);
  const formatted = compact ? formatCompact(animated) : formatCurrency(animated);

  return (
    <div className={`result-card${variant !== 'default' ? ` result-card--${variant}` : ''}`}>
      <div className="result-card__label">{label}</div>
      <div className="result-card__value" aria-live="polite" aria-atomic="true">
        {formatted}
      </div>
      {sub && (
        <div className={`result-card__sub${subVariant === 'success' ? ' result-card__sub--success' : ''}`}>
          {sub}
        </div>
      )}
    </div>
  );
}
