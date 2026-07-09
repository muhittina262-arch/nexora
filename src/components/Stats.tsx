import { stats } from '../data/siteData'

export default function Stats() {
  return (
    <section id="stats" className="section reveal">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong className="stat-value" data-target={stat.target} data-suffix={stat.suffix}>
              0{stat.suffix}
            </strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
