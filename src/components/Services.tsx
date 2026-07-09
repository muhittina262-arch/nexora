import { services } from '../data/siteData'

function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case 'web':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16v12H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 10h16M8 6v12" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'software':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 7l-3 5 3 5M17 7l3 5-3 5M14 4l-4 16" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'brand':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 18V8l6-3 6 3v10" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 18v-4h6v4" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'publishing':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'social':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5 20c0-3 2.2-5 5-5h4c2.8 0 5 2 5 5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

export default function Services() {
  return (
    <section id="services" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Hizmetler</p>
        <h2>Markalarınızı bir sonraki seviyeye taşıyan profesyonel çözümler.</h2>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="card-icon" aria-hidden="true">
              <ServiceIcon name={service.icon} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
