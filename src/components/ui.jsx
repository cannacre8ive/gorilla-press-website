import { Link } from 'react-router-dom';

export function Button({ to, children, secondary = false, className = '' }) {
  const cn = `btn ${secondary ? 'btn-secondary' : ''} ${className}`.trim();
  return to ? <Link className={cn} to={to}>{children}</Link> : <button className={cn}>{children}</button>;
}

export function Section({ eyebrow, title, lead, children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <div className="wrap">
        {(eyebrow || title || lead) && (
          <header className="section-head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2>{title}</h2>}
            {lead && <p className="lead measure">{lead}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

export function SpecCard({ title, children, meta }) {
  return (
    <article className="spec-card">
      {meta && <p className="eyebrow">{meta}</p>}
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export function CTA() {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner">
        <div>
          <p className="eyebrow">Start a job</p>
          <h2>Send us what you have.</h2>
          <p className="measure">A sketch, a PDF, a photo of the container, or an existing label are all workable starting points.</p>
        </div>
        <Button to="/quote">Request a quote</Button>
      </div>
    </section>
  );
}
