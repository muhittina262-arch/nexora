import { portfolioItems } from '../data/siteData'

export default function Portfolio() {
  return (
    <section id="portfolio" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Portföy</p>
        <h2>Başarıyla tamamladığımız projelerden örnekler.</h2>
      </div>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <article className="portfolio-card" key={item.name}>
            <p className="portfolio-category">{item.category}</p>
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
