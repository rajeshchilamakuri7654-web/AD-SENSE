import { useTheme } from '../context/ThemeContext';

export interface ChartColors {
  invested: string;
  value: string;
  lumpsum: string;
  sip: string;
  grid: string;
  axis: string;
}

/**
 * Custom hook that returns Recharts SVG presentation hex colors
 * based on the active website theme ('light' or 'dark').
 *
 * This centralises theme configuration for SVGs where CSS custom variables
 * cannot be easily rendered.
 */
export function useChartColors(): ChartColors {
  const { theme } = useTheme();

  if (theme === 'dark') {
    return {
      invested: '#64748B',
      value: '#00F2FE',
      lumpsum: '#00C6FF',
      sip: '#00F2FE',
      grid: '#1E293B',
      axis: '#64748B',
    };
  }

  return {
    invested: '#94A3B8',
    value: '#0D9488',
    lumpsum: '#3B5BDB',
    sip: '#0D9488',
    grid: '#E2E8F0',
    axis: '#94A3B8',
  };
}
