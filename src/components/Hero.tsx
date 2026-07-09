import Logo from './Logo'
import { heroContent } from '../data/siteData'

export default function Hero() {
  return (
    <section id="hero" className="hero-section reveal">
      <div className="hero-copy">
        <div className="hero-brand-block reveal">
          <Logo variant="hero" />
        </div>
        <p className="eyebrow">{heroContent.eyebrow}</p>
        <h1>{heroContent.title}</h1>
        <p className="hero-text">{heroContent.description}</p>
        <div className="hero-actions">
          <a className="button primary" href={heroContent.primaryAction.href}>
            {heroContent.primaryAction.label}
          </a>
          <a className="button secondary" href={heroContent.secondaryAction.href}>
            {heroContent.secondaryAction.label}
          </a>
        </div>
        <div className="hero-highlights">
          {heroContent.highlights.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="Nexora hizmet alanları">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="glass-panel">
          <p className="panel-label">Kurumsal yaklaşım</p>
          <h2>Strateji, tasarım ve teknoloji tek bir vizyonda birleşir.</h2>
          <p>
            Her proje, marka değerini güçlendiren yenilikçi fikirlerle, yüksek kalite ve güvenilirlik ile hayata geçiriliyor.
          </p>
        </div>
        <div className="feature-pill-row">
          <span>İnovasyon</span>
          <span>Güvenilirlik</span>
          <span>Hızlı teslimat</span>
        </div>
      </div>
    </section>
  )
}
