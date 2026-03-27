import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Hours Calculator.',
};

export default function TermsPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <article className="card">
          <h1>Terms of Service</h1>
          <p>
            Hours Calculator is provided on an as-is basis for informational and convenience purposes. While the tool is
            built to be useful, users should verify important time calculations independently when accuracy is critical.
          </p>
          <p>
            By using the site, you agree not to misuse the service or attempt to disrupt its availability.
          </p>
        </article>
      </div>
    </section>
  );
}
