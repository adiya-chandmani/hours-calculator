import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hours Calculator',
    template: '%s | Hours Calculator',
  },
  description:
    'Free hours calculator to add or subtract hours and minutes, calculate time duration, and convert work hours fast.',
  applicationName: 'Hours Calculator',
  keywords: [
    'hours calculator',
    'time duration calculator',
    'work hours calculator',
    'add hours and minutes',
    'subtract hours and minutes',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Hours Calculator',
    description:
      'Calculate hours, minutes, and time duration with a fast, free online hours calculator.',
    url: siteUrl,
    siteName: 'Hours Calculator',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hours Calculator',
    description:
      'Calculate hours, minutes, and time duration with a fast, free online hours calculator.',
  },
};

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Privacy', '/privacy'],
  ['Terms', '/terms'],
  ['Contact', '/contact'],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="site-shell">
          <header className="header">
            <div className="container nav-wrap">
              <Link href="/" className="brand">Hours Calculator</Link>
              <nav aria-label="Primary navigation" className="nav">
                {navItems.map(([label, href]) => (
                  <Link key={href} href={href} className="nav-link">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <div className="container footer-inner">
              <p>© {new Date().getFullYear()} Hours Calculator</p>
              <p>Built for fast, accessible time calculations.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
