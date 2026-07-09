import { aboutContent } from '../data/siteData'

export default function About() {
  return (
    <section id="about" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Hakkımızda</p>
        <h2>{aboutContent.title}</h2>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <p>{aboutContent.body}</p>
        </div>
        <div className="about-card accent-card">
          <p>{aboutContent.accent}</p>
        </div>
      </div>
    </section>
  )
}
