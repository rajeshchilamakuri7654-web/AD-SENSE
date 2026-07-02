import { useId, useState, useEffect } from 'react';

interface SliderInputProps {
  id?: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
  onChange: (value: number) => void;
  formatLabel?: (v: number) => string;
}

export default function SliderInput({
  id,
  label,
  value,
  min,
  max,
  step = 1,
  prefix,
  suffix,
  onChange,
  formatLabel,
}: SliderInputProps) {
  const uid = useId();
  const inputId = id ?? uid;

  const [localText, setLocalText] = useState(String(value));
  const [error, setError] = useState<string | null>(null);

  // Sync from parent if parent value changes externally (e.g. via reset or URL params)
  useEffect(() => {
    setLocalText(String(value));
    setError(null);
  }, [value]);

  const validateAndChange = (valStr: string) => {
    setLocalText(valStr);

    if (valStr.trim() === '') {
      setError('Value cannot be empty');
      return;
    }

    const raw = parseFloat(valStr);
    if (isNaN(raw)) {
      setError('Please enter a valid number');
      return;
    }

    if (raw < 0) {
      setError('Value cannot be negative');
      return;
    }

    if (raw < min) {
      setError(`Minimum allowed is ${prefix ?? ''}${min.toLocaleString('en-IN')}${suffix ?? ''}`);
      return;
    }

    if (raw > max) {
      setError(`Maximum allowed is ${prefix ?? ''}${max.toLocaleString('en-IN')}${suffix ?? ''}`);
      return;
    }

    setError(null);
    onChange(raw);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateAndChange(e.target.value);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setLocalText(String(val));
    setError(null);
    onChange(val);
  };

  const fmt = formatLabel ?? ((v: number) => v.toLocaleString('en-IN'));

  // Calculate percentage of slider filled
  const pct = ((value - min) / (max - min)) * 100;
  const sliderStyle = {
    background: `linear-gradient(to right, var(--color-accent) ${pct}%, var(--color-border) ${pct}%)`,
  };

  return (
    <div className="slider-input">
      <div className="slider-input__header">
        <label htmlFor={inputId} className="slider-input__label">
          {label}
        </label>
        <div className="slider-input__value-wrapper">
          {prefix && (
            <span className="slider-input__prefix" aria-hidden="true">
              {prefix}
            </span>
          )}
          <input
            id={inputId}
            type="number"
            className={`slider-input__number${prefix ? ' slider-input__number--prefix' : ''}${suffix ? ' slider-input__number--suffix' : ''}${error ? ' slider-input__number--error' : ''}`}
            value={localText}
            min={min}
            max={max}
            step={step}
            onChange={handleNumberChange}
            aria-describedby={error ? `${inputId}-error` : undefined}
            aria-invalid={!!error}
          />
          {suffix && (
            <span className="slider-input__suffix" aria-hidden="true">
              {suffix}
            </span>
          )}
        </div>
      </div>

      <div className="slider-input__track-wrap">
        <input
          type="range"
          className="slider-input__track"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSliderChange}
          style={sliderStyle}
          aria-label={`${label} slider`}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={value}
          aria-valuetext={`${prefix ?? ''}${fmt(value)}${suffix ?? ''}`}
        />
      </div>

      <div className="slider-input__range-labels" aria-hidden="true">
        <span>{prefix}{fmt(min)}{suffix}</span>
        <span>{prefix}{fmt(max)}{suffix}</span>
      </div>

      {error && (
        <span id={`${inputId}-error`} className="slider-input__error" role="alert" style={{ color: 'var(--color-error)', display: 'block', fontSize: 'var(--font-size-xs)', marginTop: '4px' }}>
          ⚠ {error}
        </span>
      )}
    </div>
  );
}
