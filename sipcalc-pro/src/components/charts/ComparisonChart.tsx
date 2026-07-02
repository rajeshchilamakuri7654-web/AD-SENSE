import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useTheme } from '../../context/ThemeContext';
import { axisTickFormatter, formatCurrency } from '../../utils/formatters';

interface DataPoint {
  year: string;
  lumpsum: number;
  sip: number;
}

interface Props {
  data: DataPoint[];
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
        {label}
      </div>
      {payload.map((p: any) => (
        <div key={p.dataKey} style={{ color: p.fill, marginBottom: 2 }}>
          {p.name}: <strong>{formatCurrency(p.value)}</strong>
        </div>
      ))}
    </div>
  );
};

export default function ComparisonChart({ data }: Props) {
  const { theme } = useTheme();
  const lumpsumColor = theme === 'dark' ? '#818CF8' : '#3B5BDB';
  const sipColor = theme === 'dark' ? '#14B8A6' : '#0D9488';
  const gridColor = theme === 'dark' ? '#334155' : '#E2E8F0';
  const axisColor = theme === 'dark' ? '#64748B' : '#94A3B8';

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={4}>
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} vertical={false} />
        <XAxis
          dataKey="year"
          tick={{ fill: axisColor, fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: gridColor }}
        />
        <YAxis
          tickFormatter={axisTickFormatter}
          tick={{ fill: axisColor, fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          width={60}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.04)' }} />
        <Legend
          wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
          formatter={(v) => <span style={{ color: 'var(--color-text-secondary)' }}>{v}</span>}
        />
        <Bar dataKey="lumpsum" name="Lumpsum" fill={lumpsumColor} radius={[4, 4, 0, 0]} />
        <Bar dataKey="sip" name="SIP" fill={sipColor} radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
