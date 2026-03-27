import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page for Hours Calculator.',
};

export default function ContactPage() {
  return (
    <section className="simple-page">
      <div className="container">
        <article className="card">
          <h1>Contact</h1>
          <p>
            For updates, ownership, or publishing questions about Hours Calculator, use the repository contact path or
            add a dedicated support email before launch.
          </p>
          <p>
            This placeholder page exists so the site has a clear trust and contact surface for users and future
            partners.
          </p>
        </article>
      </div>
    </section>
  );
}
