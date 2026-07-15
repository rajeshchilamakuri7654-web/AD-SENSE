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
import { useChartColors } from '../../utils/chartTheme';
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
  const colors = useChartColors();

  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="sgValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.value} stopOpacity={0.3} />
            <stop offset="95%" stopColor={colors.value} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="sgInvested" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={colors.invested} stopOpacity={0.25} />
            <stop offset="95%" stopColor={colors.invested} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} />
        <XAxis
          dataKey="year"
          tick={{ fill: colors.axis, fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: colors.grid }}
          tickFormatter={(v) => `Y${v}`}
        />
        <YAxis
          tickFormatter={axisTickFormatter}
          tick={{ fill: colors.axis, fontSize: 12 }}
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
          stroke={colors.invested}
          strokeWidth={2}
          fill="url(#sgInvested)"
          dot={false}
        />
        <Area
          type="monotone"
          dataKey="cumulativeValue"
          name="Portfolio Value"
          stroke={colors.value}
          strokeWidth={2.5}
          fill="url(#sgValue)"
          dot={false}
          activeDot={{ r: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
