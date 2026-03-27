import type { Metadata } from 'next';
import HoursCalculator from '@/components/hours-calculator';

export const metadata: Metadata = {
  title: 'Free Hours Calculator for Time Duration and Work Hours',
  description:
    'Use this free hours calculator to add or subtract hours and minutes, calculate time duration, and check work hours online.',
};

const faqs = [
  {
    question: 'What does this hours calculator do?',
    answer:
      'It lets you add or subtract hours and minutes, then shows both the total duration and the resulting clock time.',
  },
  {
    question: 'Can I use it for work shifts?',
    answer:
      'Yes. It is useful for estimating shift lengths, overtime, break-adjusted math, and schedule planning.',
  },
  {
    question: 'Does it work on mobile?',
    answer:
      'Yes. The interface is responsive and keyboard-friendly for quick calculations on phones and desktops.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container grid hero-grid">
          <div>
            <p style={{ color: '#2563eb', fontWeight: 700, marginBottom: '0.75rem' }}>Free online microtool</p>
            <h1>Hours Calculator</h1>
            <p>
              Add or subtract hours and minutes in seconds. This free hours calculator is built for work schedules,
              time duration checks, payroll estimates, and day-to-day planning.
            </p>
            <ul className="cta-list">
              <li>Fast time duration calculations</li>
              <li>Simple, accessible layout</li>
              <li>Static-first Next.js build for speed</li>
            </ul>
          </div>
          <div className="card">
            <h2 style={{ fontSize: '1.4rem' }}>Why people search for an hours calculator</h2>
            <p>
              Users often need a quick way to calculate worked hours, add meeting time, subtract breaks, or estimate
              schedule gaps without opening spreadsheets.
            </p>
            <div className="kpi" aria-label="Feature highlights">
              <div>
                <strong>24/7</strong>
                <span>Instant browser-based access</span>
              </div>
              <div>
                <strong>0</strong>
                <span>Sign-up required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <HoursCalculator />
        </div>
      </section>

      <section className="section">
        <div className="container grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <article className="card">
            <h2>Popular use cases</h2>
            <ul className="cta-list">
              <li>Calculate work hours for shifts and overtime</li>
              <li>Add hours to meeting schedules or deadlines</li>
              <li>Subtract break times from a total block</li>
              <li>Estimate time spans for tasks or travel</li>
            </ul>
          </article>
          <article className="card">
            <h2>Built for SEO and speed</h2>
            <p>
              The site uses semantic headings, helpful copy, crawlable static pages, and environment-based sitemap and
              robots generation using NEXT_PUBLIC_SITE_URL.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>Hours calculator FAQ</h2>
          <div className="grid">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
