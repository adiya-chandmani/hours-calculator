import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn what Hours Calculator does and why it exists.',
};

export default function AboutPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <article className="card">
          <h1>About Hours Calculator</h1>
          <p>
            Hours Calculator is a lightweight time math tool built to help people add or subtract hours and minutes
            without friction. The goal is simple: fast answers, clean UX, and no unnecessary clutter.
          </p>
          <p>
            It is designed as a static-first Next.js site so it loads quickly, stays easy to maintain, and gives search
            engines clear, useful content.
          </p>
        </article>
      </div>
    </section>
  );
}
