import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Routes to prerender
const routes = [
  '/',
  '/sip-calculator',
  '/lumpsum-vs-sip',
  '/step-up-sip-calculator',
  '/xirr-calculator',
  '/cagr-calculator',
  '/about',
  '/contact',
  '/blog',
  '/blog/what-is-sip',
  '/blog/sip-vs-lumpsum',
  '/blog/xirr-vs-cagr',
  '/blog/power-of-compounding',
  '/blog/how-sip-returns-are-calculated',
  '/blog/step-up-sip',
  '/blog/common-sip-mistakes',
  '/what-is-sip',
  '/sip-vs-lumpsum',
  '/privacy-policy',
  '/privacy',
  '/terms',
  '/404'
];

// Route-specific metadata matching the React components
const metadata = {
  '/': {
    title: 'SIPCalc Pro — Free Indian Mutual Fund Calculators (SIP, XIRR, CAGR)',
    description: 'Free online SIP calculator, XIRR calculator, CAGR calculator, Step-up SIP, and Lumpsum vs SIP tools. Calculate your mutual fund returns instantly.',
    canonical: 'https://sipcalcpro.in/',
  },
  '/sip-calculator': {
    title: 'SIP Calculator — Calculate Mutual Fund Returns Online | SIPCalc Pro',
    description: 'Free SIP calculator: enter monthly investment, return rate and duration to instantly see total invested, returns and maturity value with a year-by-year chart.',
    canonical: 'https://sipcalcpro.in/sip-calculator',
  },
  '/lumpsum-vs-sip': {
    title: 'Lumpsum vs SIP Calculator — Which Gives Higher Returns? | SIPCalc Pro',
    description: 'Compare lumpsum vs SIP investment returns side-by-side with the same capital, return rate and duration. See which strategy grows your money faster.',
    canonical: 'https://sipcalcpro.in/lumpsum-vs-sip',
  },
  '/step-up-sip-calculator': {
    title: 'Step-Up SIP Calculator — Annual Top-Up SIP Returns | SIPCalc Pro',
    description: 'Calculate how increasing your SIP by a fixed % each year accelerates wealth creation. Year-by-year breakdown of step-up SIP with interactive charts.',
    canonical: 'https://sipcalcpro.in/step-up-sip-calculator',
  },
  '/xirr-calculator': {
    title: 'XIRR Calculator — Calculate Annualised Return on Irregular Cash Flows | SIPCalc Pro',
    description: 'Calculate XIRR (Extended Internal Rate of Return) for multiple cash flows with different dates. Perfect for mutual fund SIP portfolios and irregular investments.',
    canonical: 'https://sipcalcpro.in/xirr-calculator',
  },
  '/cagr-calculator': {
    title: 'CAGR Calculator — Compound Annual Growth Rate Calculator | SIPCalc Pro',
    description: 'Calculate CAGR from initial value, final value and years. Instant compound annual growth rate with plain English explanation. Free online CAGR calculator.',
    canonical: 'https://sipcalcpro.in/cagr-calculator',
  },
  '/about': {
    title: 'About SIPCalc Pro — Free Indian Mutual Fund Calculators',
    description: 'Learn about SIPCalc Pro — our mission to make accurate mutual fund calculation tools freely available to every Indian investor.',
    canonical: 'https://sipcalcpro.in/about',
  },
  '/contact': {
    title: 'Contact & Disclaimer — SIPCalc Pro',
    description: 'Contact SIPCalc Pro for feedback, bug reports, or general inquiries. Read our full disclaimer on financial data use.',
    canonical: 'https://sipcalcpro.in/contact',
  },
  '/blog': {
    title: 'Mutual Fund Investment Blog — SIP, XIRR, CAGR Explained | SIPCalc Pro',
    description: 'Read beginner-friendly articles on SIP investing, XIRR vs CAGR, lumpsum vs SIP, and the power of compounding. Learn to invest smarter.',
    canonical: 'https://sipcalcpro.in/blog',
  },
  '/blog/what-is-sip': {
    title: "What is SIP and How Does It Work? Complete Beginner's Guide | SIPCalc Pro",
    description: 'A complete guide to Systematic Investment Plans (SIP) — what SIP is, how it works, benefits, how to start, and common myths debunked.',
    canonical: 'https://sipcalcpro.in/blog/what-is-sip',
  },
  '/blog/sip-vs-lumpsum': {
    title: 'SIP vs Lumpsum Investment: Which Strategy Wins? | SIPCalc Pro',
    description: 'Detailed comparison of SIP vs lumpsum investing — when each works better, mathematical analysis, real-world scenarios, and which strategy suits Indian investors.',
    canonical: 'https://sipcalcpro.in/blog/sip-vs-lumpsum',
  },
  '/blog/xirr-vs-cagr': {
    title: "XIRR vs CAGR: What's the Difference? | SIPCalc Pro",
    description: 'Understand the key difference between XIRR and CAGR for mutual fund returns. Learn when to use each metric and why your SIP statement shows XIRR, not CAGR.',
    canonical: 'https://sipcalcpro.in/blog/xirr-vs-cagr',
  },
  '/blog/power-of-compounding': {
    title: 'Power of Compounding: How Small Investments Become Crores | SIPCalc Pro',
    description: 'Understand the power of compounding with real examples showing how ₹5,000/month can grow to ₹5+ crore over 40 years. Why time is your most valuable investing asset.',
    canonical: 'https://sipcalcpro.in/blog/power-of-compounding',
  },
  '/blog/how-sip-returns-are-calculated': {
    title: 'How SIP Returns Are Calculated: The Formula Explained | SIPCalc Pro',
    description: 'Understand the exact compound interest formula behind SIP returns — in plain language. Step-by-step worked example with monthly compounding and maturity value.',
    canonical: 'https://sipcalcpro.in/blog/how-sip-returns-are-calculated',
  },
  '/blog/step-up-sip': {
    title: 'What is Step-Up SIP? How It Works and Why It\'s Powerful | SIPCalc Pro',
    description: 'Step-Up SIP increases your monthly investment by a fixed % each year. Learn how it works, the formula behind it, and why even a 10% annual top-up adds lakhs to your corpus.',
    canonical: 'https://sipcalcpro.in/blog/step-up-sip',
  },
  '/blog/common-sip-mistakes': {
    title: '8 Common SIP Mistakes That Cost Indian Investors Lakhs | SIPCalc Pro',
    description: 'From stopping SIPs during market crashes to picking dividend plans and ignoring expense ratios — these 8 SIP mistakes silently erode your wealth.',
    canonical: 'https://sipcalcpro.in/blog/common-sip-mistakes',
  },
  '/what-is-sip': {
    title: 'What is SIP? Systematic Investment Plan Explained Simply | SIPCalc Pro',
    description: 'SIP lets you invest a fixed amount in mutual funds every month. Learn how SIP works, its benefits, rupee cost averaging, and how to get started in India.',
    canonical: 'https://sipcalcpro.in/what-is-sip',
  },
  '/sip-vs-lumpsum': {
    title: 'SIP vs Lump Sum Investment: Which is Better and When? | SIPCalc Pro',
    description: 'SIP or lump sum — which strategy suits you? A plain-language comparison with real numbers, market data, and a clear decision framework for Indian investors.',
    canonical: 'https://sipcalcpro.in/sip-vs-lumpsum',
  },
  '/privacy-policy': {
    title: 'Privacy Policy — SIPCalc Pro',
    description: "Read SIPCalc Pro's privacy policy. Learn how we handle data, use cookies, and integrate Google AdSense and Analytics.",
    canonical: 'https://sipcalcpro.in/privacy-policy',
  },
  '/privacy': {
    title: 'Privacy Policy — SIPCalc Pro',
    description: "Read SIPCalc Pro's privacy policy. Learn how we handle data, use cookies, and integrate Google AdSense and Analytics.",
    canonical: 'https://sipcalcpro.in/privacy',
  },
  '/terms': {
    title: 'Terms of Use — SIPCalc Pro',
    description: 'Read SIPCalc Pro\'s Terms of Use. By using our free mutual fund calculators, you agree to these terms covering tool purpose, limitations, and governing law.',
    canonical: 'https://sipcalcpro.in/terms',
  },
  '/404': {
    title: 'Page Not Found — SIPCalc Pro',
    description: "The page you were looking for doesn't exist. Browse our free SIP, XIRR, CAGR, and Step-up SIP calculators.",
    canonical: 'https://sipcalcpro.in/404',
  }
};

async function run() {
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  // Dynamically import the server entry point
  const serverEntryPath = path.resolve(__dirname, 'dist-server/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    console.error(`Could not find entry-server.js at ${serverEntryPath}`);
    process.exit(1);
  }

  const { render } = await import(new URL(`file://${serverEntryPath}`).href);

  for (const route of routes) {
    console.log(`Prerendering route: ${route}`);
    
    // 1. Render the React component tree to HTML string
    let appHtml = '';
    try {
      appHtml = render(route);
    } catch (err) {
      console.error(`Failed to render route ${route}:`, err);
    }

    // 2. Fetch the metadata for this route
    const meta = metadata[route] || metadata['/'];

    // 3. Inject the rendered body and SEO tags into the template
    let html = template;
    
    // Inject rendered React markup
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Replace <title>
    html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

    // Replace meta description
    const descRegex = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i;
    const newDescTag = `<meta name="description" content="${meta.description}" />`;
    if (descRegex.test(html)) {
      html = html.replace(descRegex, newDescTag);
    } else {
      html = html.replace('</head>', `    ${newDescTag}\n  </head>`);
    }

    // Replace canonical URL link
    const canonicalRegex = /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i;
    const newCanonicalTag = `<link rel="canonical" href="${meta.canonical}" />`;
    if (canonicalRegex.test(html)) {
      html = html.replace(canonicalRegex, newCanonicalTag);
    } else {
      html = html.replace('</head>', `    ${newCanonicalTag}\n  </head>`);
    }

    // Replace Open Graph tags
    const ogTags = [
      { property: 'og:title', content: meta.title },
      { property: 'og:description', content: meta.description },
      { property: 'og:url', content: meta.canonical }
    ];

    ogTags.forEach((tag) => {
      const ogRegex = new RegExp(`<meta\\s+property="${tag.property}"\\s+content="[^"]*"\\s*\\/?>`, 'i');
      const newOgTag = `<meta property="${tag.property}" content="${tag.content}" />`;
      if (ogRegex.test(html)) {
        html = html.replace(ogRegex, newOgTag);
      } else {
        html = html.replace('</head>', `    ${newOgTag}\n  </head>`);
      }
    });

    // 4. Save the generated HTML file to the appropriate output path
    let outputPath;
    if (route === '/') {
      outputPath = path.resolve(__dirname, 'dist/index.html');
    } else if (route === '/404') {
      outputPath = path.resolve(__dirname, 'dist/404.html');
    } else {
      const routeDir = path.resolve(__dirname, 'dist', route.slice(1));
      fs.mkdirSync(routeDir, { recursive: true });
      outputPath = path.resolve(routeDir, 'index.html');
    }

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`Saved: ${outputPath}`);
  }

  // Clean up server-side build artifacts
  fs.rmSync(path.resolve(__dirname, 'dist-server'), { recursive: true, force: true });
  console.log('Static site generation complete! Cleaned up dist-server.');
}

run().catch((err) => {
  console.error('SSG Prerendering crashed:', err);
  process.exit(1);
});
