import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Hours Calculator.',
};

export default function PrivacyPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <article className="card">
          <h1>Privacy Policy</h1>
          <p>
            Hours Calculator does not require account creation and does not intentionally collect personal information
            through the calculator itself.
          </p>
          <p>
            Basic server or analytics logs may be introduced later for performance and product insights. If analytics or
            advertising are added in the future, this page should be updated before deployment.
          </p>
        </article>
      </div>
    </section>
  );
}
