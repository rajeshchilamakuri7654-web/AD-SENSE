export interface CalculatorMeta {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: string;
  badge?: string;
  color: string;
}

export const calculators: CalculatorMeta[] = [
  {
    id: 'sip',
    title: 'SIP Calculator',
    description: 'Calculate the future value of your monthly SIP investments with year-by-year breakdown.',
    path: '/sip-calculator',
    icon: '📈',
    badge: 'Most Popular',
    color: 'var(--color-accent)',
  },
  {
    id: 'lumpsum-vs-sip',
    title: 'Lumpsum vs SIP',
    description: 'Compare how the same capital grows differently when invested as a lumpsum vs monthly SIP.',
    path: '/lumpsum-vs-sip',
    icon: '⚖️',
    color: 'var(--color-primary)',
  },
  {
    id: 'step-up-sip',
    title: 'Step-Up SIP Calculator',
    description: 'Model the power of increasing your SIP amount annually to match your income growth.',
    path: '/step-up-sip-calculator',
    icon: '🪜',
    badge: 'Advanced',
    color: '#7C3AED',
  },
  {
    id: 'xirr',
    title: 'XIRR Calculator',
    description: 'Calculate true annualised return on irregular investments across multiple dates.',
    path: '/xirr-calculator',
    icon: '🔢',
    color: '#D97706',
  },
  {
    id: 'cagr',
    title: 'CAGR Calculator',
    description: 'Find the Compound Annual Growth Rate between any two investment values.',
    path: '/cagr-calculator',
    icon: '📊',
    color: '#16A34A',
  },
];

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  tag: string;
  path: string;
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: 'what-is-sip',
    title: 'What is SIP and How Does It Work?',
    excerpt: "A complete beginner's guide to Systematic Investment Plans \u2014 what they are, why they work, and how to start.",
    readTime: '5 min read',
    tag: 'Basics',
    path: '/blog/what-is-sip',
  },
  {
    slug: 'sip-vs-lumpsum',
    title: 'SIP vs Lumpsum: Which Investment Strategy Wins?',
    excerpt: 'Analysing real market data to settle the age-old debate: is it better to invest via SIP or put in a lumpsum?',
    readTime: '7 min read',
    tag: 'Comparison',
    path: '/blog/sip-vs-lumpsum',
  },
  {
    slug: 'how-sip-returns-are-calculated',
    title: 'How SIP Returns Are Calculated: The Formula Explained',
    excerpt: 'A step-by-step breakdown of the compound interest formula behind every SIP calculator — with a worked example.',
    readTime: '8 min read',
    tag: 'Deep Dive',
    path: '/blog/how-sip-returns-are-calculated',
  },
  {
    slug: 'step-up-sip',
    title: 'What is Step-Up SIP and How to Use It Effectively',
    excerpt: 'Step-Up SIP increases your monthly investment annually. Learn why even a 10% step-up can add lakhs to your long-term corpus.',
    readTime: '7 min read',
    tag: 'Strategy',
    path: '/blog/step-up-sip',
  },
  {
    slug: 'common-sip-mistakes',
    title: '8 Common SIP Mistakes That Silently Cost Investors Lakhs',
    excerpt: 'From stopping SIPs during crashes to picking dividend plans — these avoidable mistakes erode wealth silently over time.',
    readTime: '9 min read',
    tag: 'Investor Guide',
    path: '/blog/common-sip-mistakes',
  },
  {
    slug: 'xirr-vs-cagr',
    title: 'XIRR vs CAGR: Understanding the Difference',
    excerpt: 'Mutual fund statements show XIRR, not CAGR. Here is exactly what each means and when to use which.',
    readTime: '6 min read',
    tag: 'Advanced',
    path: '/blog/xirr-vs-cagr',
  },
  {
    slug: 'power-of-compounding',
    title: 'The Power of Compounding: Why Time is Your Best Asset',
    excerpt: 'Einstein called it the eighth wonder of the world. Discover how compounding turns small monthly amounts into crores.',
    readTime: '4 min read',
    tag: 'Basics',
    path: '/blog/power-of-compounding',
  },
];
