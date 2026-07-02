import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { axisTickFormatter, formatCurrency } from '../../utils/formatters';
import type { StepUpYearlyPoint } from '../../utils/calculations';

interface Props {
  data: StepUpYearlyPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'var(--color-card)',
      border: '1px solid var(--color-border)',
      borderRadius: 8,
      padding: '10px 14px',
      boxShadow: 'var(--shadow-lg)',
      fontSize: 13,
    }}>
      <div style={{ fontWeight: 700, marginBottom: 6, color: 'var(--color-text)' }}>
        Year {label}
      </div>
      {payload.map((p: any) => (
        <div key={p.dataKey} style={{ color: p.color, marginBottom: 2 }}>
          {p.name}: <strong>{formatCurrency(p.value)}</strong>
        </div>
      ))}
    </div>
  );
};

export default function StepUpChart({ data }: Props) {
  const { theme } = useTheme();
  const investedColor = theme === 'dark' ? '#64748B' : '#94A3B8';
  const valueColor = theme === 'dark' ? '#14B8A6' : '#0D9488';
  const gridColor = theme === 'dark' ? '#334155' : '#E2E8F0';
  const axisColor = theme === 'dark' ? '#64748B' : '#94A3B8';

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="sgValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={valueColor} stopOpacity={0.3} />
            <stop offset="95%" stopColor={valueColor} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="sgInvested" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={investedColor} stopOpacity={0.25} />
            <stop offset="95%" stopColor={investedColor} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis
          dataKey="year"
          tick={{ fill: axisColor, fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: gridColor }}
          tickFormatter={(v) => `Y${v}`}
        />
        <YAxis
          tickFormatter={axisTickFormatter}
          tick={{ fill: axisColor, fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          width={60}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
          formatter={(v) => <span style={{ color: 'var(--color-text-secondary)' }}>{v}</span>}
        />
        <Area
          type="monotone"
          dataKey="cumulativeInvested"
          name="Total Invested"
          stroke={investedColor}
          strokeWidth={2}
          fill="url(#sgInvested)"
          dot={false}
        />
        <Area
          type="monotone"
          dataKey="cumulativeValue"
          name="Portfolio Value"
          stroke={valueColor}
          strokeWidth={2.5}
          fill="url(#sgValue)"
          dot={false}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
