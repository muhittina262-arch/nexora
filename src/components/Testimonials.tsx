import { testimonials } from '../data/siteData'

export default function Testimonials() {
  return (
    <section id="testimonials" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Müşteri Yorumları</p>
        <h2>Çalıştığımız markalardan gelen güçlü geri bildirimler.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <article className="testimonial-card" key={testimonial.name}>
            <p className="testimonial-quote">“{testimonial.quote}”</p>
            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
